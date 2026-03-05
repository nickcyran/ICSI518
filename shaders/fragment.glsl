precision mediump float;

#define MAX_STEPS 100
#define MAX_DIST 20.0
#define HIT_THRESHOLD 0.005

#define DITHER_SIZE 32.0

#define TAU 6.2831853

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform sampler2D u_bayerTex;

varying vec2 v_texcoord;

// === [ SCENE + HELPERS ] =============================================================
// src: https://iquilezles.org/articles/smin/
float smin(float a, float b, float k) {
    float h = max(k - abs(a - b), 0.0) / k;
    return min(a, b) - h * h * k * (1.0 / 4.0);
}

// --- parameters ---
const int ORBIT_COUNT = 6;
const float SMOOTHNESS = 1.8;   
const float CORE_SIZE = 3.8;
const float CORE_PULSE = 0.25;
const float ORBIT_DIST = 8.0;  
const float SPEED = 0.2;    

float scene(vec3 p) {
    float t = u_time * SPEED;

    // main object SDF
    float d = length(p) - (CORE_SIZE + CORE_PULSE * sin(t));

    // orbiting object
    for(int i = 0; i < ORBIT_COUNT; i++) {
        float fi = float(i);

        // offset each orbit for "random" behavior
        float offset = fi * (TAU / float(ORBIT_COUNT)); 

        // calculate pos of orbiting object
        vec3 orbitPos = vec3(
            ORBIT_DIST * cos(t + offset), 
            4.0 * sin(t * 1.5 + fi + 55.7), 
            2.0 * sin((t + offset) * 3.0 + fi)
        );

        // orbit object SDF
        float iDist = length(p - orbitPos) - (1.4 + 0.5 * sin(t * 1.5 + fi));

        // blend object into scene smoothly
        d = smin(d, iDist, SMOOTHNESS);
    }

    return d;
}

vec3 normal(vec3 p) {
    vec2 e = vec2(0.01, 0.0);

    // find the normal using the partial derrivative for each axis
    return normalize(vec3(
        scene(p + e.xyy) - scene(p - e.xyy), 
        scene(p + e.yxy) - scene(p - e.yxy), 
        scene(p + e.yyx) - scene(p - e.yyx)
    ));
}

// === [ POST PROCESSING ] =====================================================
vec3 pallete(int i) {
    if(i == 0)
        return vec3(2.0, 8.0, 20.0) / 255.0;
    if(i == 1)
        return vec3(10.0, 35.0, 66.0) / 255.0;
    if(i == 2)
        return vec3(13.0, 76.0, 115.0) / 255.0;
    if(i == 3)
        return vec3(20.0, 122.0, 160.0) / 255.0;
    if(i == 4)
        return vec3(75.0, 190.0, 195.0) / 255.0;
    if(i == 5)
        return vec3(160.0, 230.0, 220.0) / 255.0;
    return vec3(220.0, 255.0, 250.0) / 255.0;
}

// Sample Bayer threshold from texture
float bayerThreshold(vec2 fragCoord) {
    vec2 textureSize = vec2(textureSize(u_bayerTex, 0));
    vec2 uv = (fragCoord * DITHER_SIZE) / textureSize;
    return texture2D(u_bayerTex, fract(uv)).r;
}

// === [ MAIN ] ============================================================== 
void main() {
    // - 1. Init and re-center UVs and mouse --------------------------
    vec2 uv = (v_texcoord - 0.5) * 2.0;
    vec2 ms = (u_mouse / u_resolution - 0.5) * 2.0;
    float aspect_ratio = u_resolution.x / u_resolution.y;
    uv.x *= aspect_ratio;
    ms.x *= aspect_ratio;

    // - 2. Ray Marching ----------------------------------------------
    vec3 p;                                            // ray position
    vec3 ro = vec3(0.0, 0.0, -8.0);         // ray origin
    vec3 rd = normalize(vec3(uv, 0.8));      // ray direction

    float d = 0.0;      // distance travelled
    float ds = 0.0;     // distance to scene

    for(int i = 0; i < MAX_STEPS; i++) {
        // 3d point --> distance to nearest obj in scene
        p = ro + rd * d;
        ds = scene(p);               

        // if we are close enough to a hit OR travelled too far ==> terminate
        if(ds < HIT_THRESHOLD || d > MAX_DIST)
            break;

        // move forward by dist to nearest obj
        d += ds;
    }

    // if last distance is outside the threshold
    if(ds > HIT_THRESHOLD) {
        gl_FragColor = vec4(0.0);
        return;
    }

    // didn't return. HIT! surface reached.

    // - 3. Lighting --------------------------------------------------
    vec3 n = normal(p);
    vec3 ml = normalize(vec3(ms * 6.0, -10.0) - p);     // mouse light direction

    float diffuse = max(0.0, dot(n, ml)) * 0.35;
    float rim = max(0.0, dot(n, -rd)) * 0.4;

    // - 4. Pallete map + dithering -----------------------------------
    float pPos = (diffuse + rim) * 7.0;     // map light into pallete range (0-7)
    int i0 = int(pPos);
    int i1 = int(min(float(i0) + 1.0, 7.0));

    // apply dithering choosing between closest colors
    float pick = step(
        bayerThreshold(gl_FragCoord.xy), 
        fract(pPos)
    );

    gl_FragColor = vec4(mix(pallete(i0), pallete(i1), pick), 1.0);
}

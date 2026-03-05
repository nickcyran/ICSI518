import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ShaderCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        let isMounted = true;
        let animationId;
        let material;
        let geometry;

        // - 1. Init scene / renderer -------------------------
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        const renderer = new THREE.WebGLRenderer({
            canvas,
            alpha: true,
            antialias: false
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // define tracking variables and handlers
        const targetMouse = new THREE.Vector2(0, 0);
        const handleMouseMove = (e) => {
            targetMouse.x = e.clientX;
            targetMouse.y = window.innerHeight - e.clientY;
        };

        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            if (material) {
                material.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
            }
        };

        // - 2. Load shader and texture -----------------------
        const loadAssets = async () => {
            try {
                const base = import.meta.env.BASE_URL;

                // fetch assets
                const fragShader = await (await fetch(`${base}shaders/fragment.glsl`)).text();
                const bayerTex = await new THREE.TextureLoader().loadAsync(`${base}shaders/bayer.jpg`);

                if (!isMounted) return;

                // material settings
                bayerTex.wrapS = THREE.RepeatWrapping;
                bayerTex.wrapT = THREE.RepeatWrapping;
                bayerTex.magFilter = THREE.NearestFilter;
                bayerTex.minFilter = THREE.NearestFilter;
                bayerTex.generateMipmaps = false;

                // - 3. Create the material --------------------------
                material = new THREE.ShaderMaterial({
                    uniforms: {
                        u_time: { value: 0 },
                        u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
                        u_mouse: { value: new THREE.Vector2(0, 0) },
                        u_bayerTex: { value: bayerTex }
                    },
                    vertexShader: `
                      varying vec2 v_texcoord;
                      void main() {
                          v_texcoord = uv;
                          gl_Position = vec4(position, 1.0);
                      }
                    `,
                    fragmentShader: fragShader
                });

                // - 4. Set up the scene ----------------------------
                geometry = new THREE.PlaneGeometry(2, 2);
                scene.add(new THREE.Mesh(geometry, material));

                // bind events only after assets loaded
                window.addEventListener('mousemove', handleMouseMove);
                window.addEventListener('resize', handleResize);

                // - 5. Animation loop ------------------------------
                const clock = new THREE.Timer();

                const tick = () => {
                    clock.update();
                    material.uniforms.u_time.value = clock.getElapsed();
                    material.uniforms.u_mouse.value.lerp(targetMouse, 0.05);
                    renderer.render(scene, camera);
                    animationId = requestAnimationFrame(tick);
                };
                tick();

            } catch (err) {
                console.error("Shader load error:", err);
            }
        };
        loadAssets();

        // - 6. Cleanup -------------------------------------------
        return () => {
            isMounted = false;

            cancelAnimationFrame(animationId);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);

            if (geometry) geometry.dispose();
            if (material) material.dispose();
            renderer.dispose();
        };
    }, []);

    return <canvas ref={canvasRef} id="webgl-canvas" />;
}
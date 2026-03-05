(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Jf={exports:{}},Do={};var Eg;function MS(){if(Eg)return Do;Eg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var p in l)p!=="key"&&(u[p]=l[p])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:u}}return Do.Fragment=e,Do.jsx=i,Do.jsxs=i,Do}var Tg;function yS(){return Tg||(Tg=1,Jf.exports=MS()),Jf.exports}var Ut=yS(),$f={exports:{}},se={};var bg;function ES(){if(bg)return se;bg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),_=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function S(O,Y,_t){this.props=O,this.context=Y,this.refs=M,this.updater=_t||T}S.prototype.isReactComponent={},S.prototype.setState=function(O,Y){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Y,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function w(){}w.prototype=S.prototype;function P(O,Y,_t){this.props=O,this.context=Y,this.refs=M,this.updater=_t||T}var N=P.prototype=new w;N.constructor=P,C(N,S.prototype),N.isPureReactComponent=!0;var k=Array.isArray;function B(){}var F={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function D(O,Y,_t){var At=_t.ref;return{$$typeof:o,type:O,key:Y,ref:At!==void 0?At:null,props:_t}}function pt(O,Y){return D(O.type,Y,O.props)}function H(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function $(O){var Y={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(_t){return Y[_t]})}var it=/\/+/g;function lt(O,Y){return typeof O=="object"&&O!==null&&O.key!=null?$(""+O.key):Y.toString(36)}function J(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(B,B):(O.status="pending",O.then(function(Y){O.status==="pending"&&(O.status="fulfilled",O.value=Y)},function(Y){O.status==="pending"&&(O.status="rejected",O.reason=Y)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function L(O,Y,_t,At,zt){var et=typeof O;(et==="undefined"||et==="boolean")&&(O=null);var vt=!1;if(O===null)vt=!0;else switch(et){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(O.$$typeof){case o:case e:vt=!0;break;case v:return vt=O._init,L(vt(O._payload),Y,_t,At,zt)}}if(vt)return zt=zt(O),vt=At===""?"."+lt(O,0):At,k(zt)?(_t="",vt!=null&&(_t=vt.replace(it,"$&/")+"/"),L(zt,Y,_t,"",function(Kt){return Kt})):zt!=null&&(H(zt)&&(zt=pt(zt,_t+(zt.key==null||O&&O.key===zt.key?"":(""+zt.key).replace(it,"$&/")+"/")+vt)),Y.push(zt)),1;vt=0;var Tt=At===""?".":At+":";if(k(O))for(var kt=0;kt<O.length;kt++)At=O[kt],et=Tt+lt(At,kt),vt+=L(At,Y,_t,et,zt);else if(kt=y(O),typeof kt=="function")for(O=kt.call(O),kt=0;!(At=O.next()).done;)At=At.value,et=Tt+lt(At,kt++),vt+=L(At,Y,_t,et,zt);else if(et==="object"){if(typeof O.then=="function")return L(J(O),Y,_t,At,zt);throw Y=String(O),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return vt}function I(O,Y,_t){if(O==null)return O;var At=[],zt=0;return L(O,At,"","",function(et){return Y.call(_t,et,zt++)}),At}function ot(O){if(O._status===-1){var Y=O._result;Y=Y(),Y.then(function(_t){(O._status===0||O._status===-1)&&(O._status=1,O._result=_t)},function(_t){(O._status===0||O._status===-1)&&(O._status=2,O._result=_t)}),O._status===-1&&(O._status=0,O._result=Y)}if(O._status===1)return O._result.default;throw O._result}var dt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Et={map:I,forEach:function(O,Y,_t){I(O,function(){Y.apply(this,arguments)},_t)},count:function(O){var Y=0;return I(O,function(){Y++}),Y},toArray:function(O){return I(O,function(Y){return Y})||[]},only:function(O){if(!H(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return se.Activity=x,se.Children=Et,se.Component=S,se.Fragment=i,se.Profiler=l,se.PureComponent=P,se.StrictMode=s,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,se.__COMPILER_RUNTIME={__proto__:null,c:function(O){return F.H.useMemoCache(O)}},se.cache=function(O){return function(){return O.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(O,Y,_t){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var At=C({},O.props),zt=O.key;if(Y!=null)for(et in Y.key!==void 0&&(zt=""+Y.key),Y)!b.call(Y,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&Y.ref===void 0||(At[et]=Y[et]);var et=arguments.length-2;if(et===1)At.children=_t;else if(1<et){for(var vt=Array(et),Tt=0;Tt<et;Tt++)vt[Tt]=arguments[Tt+2];At.children=vt}return D(O.type,zt,At)},se.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},se.createElement=function(O,Y,_t){var At,zt={},et=null;if(Y!=null)for(At in Y.key!==void 0&&(et=""+Y.key),Y)b.call(Y,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(zt[At]=Y[At]);var vt=arguments.length-2;if(vt===1)zt.children=_t;else if(1<vt){for(var Tt=Array(vt),kt=0;kt<vt;kt++)Tt[kt]=arguments[kt+2];zt.children=Tt}if(O&&O.defaultProps)for(At in vt=O.defaultProps,vt)zt[At]===void 0&&(zt[At]=vt[At]);return D(O,et,zt)},se.createRef=function(){return{current:null}},se.forwardRef=function(O){return{$$typeof:p,render:O}},se.isValidElement=H,se.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:ot}},se.memo=function(O,Y){return{$$typeof:h,type:O,compare:Y===void 0?null:Y}},se.startTransition=function(O){var Y=F.T,_t={};F.T=_t;try{var At=O(),zt=F.S;zt!==null&&zt(_t,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(B,dt)}catch(et){dt(et)}finally{Y!==null&&_t.types!==null&&(Y.types=_t.types),F.T=Y}},se.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},se.use=function(O){return F.H.use(O)},se.useActionState=function(O,Y,_t){return F.H.useActionState(O,Y,_t)},se.useCallback=function(O,Y){return F.H.useCallback(O,Y)},se.useContext=function(O){return F.H.useContext(O)},se.useDebugValue=function(){},se.useDeferredValue=function(O,Y){return F.H.useDeferredValue(O,Y)},se.useEffect=function(O,Y){return F.H.useEffect(O,Y)},se.useEffectEvent=function(O){return F.H.useEffectEvent(O)},se.useId=function(){return F.H.useId()},se.useImperativeHandle=function(O,Y,_t){return F.H.useImperativeHandle(O,Y,_t)},se.useInsertionEffect=function(O,Y){return F.H.useInsertionEffect(O,Y)},se.useLayoutEffect=function(O,Y){return F.H.useLayoutEffect(O,Y)},se.useMemo=function(O,Y){return F.H.useMemo(O,Y)},se.useOptimistic=function(O,Y){return F.H.useOptimistic(O,Y)},se.useReducer=function(O,Y,_t){return F.H.useReducer(O,Y,_t)},se.useRef=function(O){return F.H.useRef(O)},se.useState=function(O){return F.H.useState(O)},se.useSyncExternalStore=function(O,Y,_t){return F.H.useSyncExternalStore(O,Y,_t)},se.useTransition=function(){return F.H.useTransition()},se.version="19.2.4",se}var Ag;function Dh(){return Ag||(Ag=1,$f.exports=ES()),$f.exports}var Cn=Dh(),td={exports:{}},Uo={},ed={exports:{}},nd={};var Rg;function TS(){return Rg||(Rg=1,(function(o){function e(L,I){var ot=L.length;L.push(I);t:for(;0<ot;){var dt=ot-1>>>1,Et=L[dt];if(0<l(Et,I))L[dt]=I,L[ot]=Et,ot=dt;else break t}}function i(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var I=L[0],ot=L.pop();if(ot!==I){L[0]=ot;t:for(var dt=0,Et=L.length,O=Et>>>1;dt<O;){var Y=2*(dt+1)-1,_t=L[Y],At=Y+1,zt=L[At];if(0>l(_t,ot))At<Et&&0>l(zt,_t)?(L[dt]=zt,L[At]=ot,dt=At):(L[dt]=_t,L[Y]=ot,dt=Y);else if(At<Et&&0>l(zt,ot))L[dt]=zt,L[At]=ot,dt=At;else break t}}return I}function l(L,I){var ot=L.sortIndex-I.sortIndex;return ot!==0?ot:L.id-I.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,p=d.now();o.unstable_now=function(){return d.now()-p}}var m=[],h=[],v=1,x=null,_=3,y=!1,T=!1,C=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function N(L){for(var I=i(h);I!==null;){if(I.callback===null)s(h);else if(I.startTime<=L)s(h),I.sortIndex=I.expirationTime,e(m,I);else break;I=i(h)}}function k(L){if(C=!1,N(L),!T)if(i(m)!==null)T=!0,B||(B=!0,$());else{var I=i(h);I!==null&&J(k,I.startTime-L)}}var B=!1,F=-1,b=5,D=-1;function pt(){return M?!0:!(o.unstable_now()-D<b)}function H(){if(M=!1,B){var L=o.unstable_now();D=L;var I=!0;try{t:{T=!1,C&&(C=!1,w(F),F=-1),y=!0;var ot=_;try{e:{for(N(L),x=i(m);x!==null&&!(x.expirationTime>L&&pt());){var dt=x.callback;if(typeof dt=="function"){x.callback=null,_=x.priorityLevel;var Et=dt(x.expirationTime<=L);if(L=o.unstable_now(),typeof Et=="function"){x.callback=Et,N(L),I=!0;break e}x===i(m)&&s(m),N(L)}else s(m);x=i(m)}if(x!==null)I=!0;else{var O=i(h);O!==null&&J(k,O.startTime-L),I=!1}}break t}finally{x=null,_=ot,y=!1}I=void 0}}finally{I?$():B=!1}}}var $;if(typeof P=="function")$=function(){P(H)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,lt=it.port2;it.port1.onmessage=H,$=function(){lt.postMessage(null)}}else $=function(){S(H,0)};function J(L,I){F=S(function(){L(o.unstable_now())},I)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(L){switch(_){case 1:case 2:case 3:var I=3;break;default:I=_}var ot=_;_=I;try{return L()}finally{_=ot}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(L,I){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var ot=_;_=L;try{return I()}finally{_=ot}},o.unstable_scheduleCallback=function(L,I,ot){var dt=o.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?dt+ot:dt):ot=dt,L){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=ot+Et,L={id:v++,callback:I,priorityLevel:L,startTime:ot,expirationTime:Et,sortIndex:-1},ot>dt?(L.sortIndex=ot,e(h,L),i(m)===null&&L===i(h)&&(C?(w(F),F=-1):C=!0,J(k,ot-dt))):(L.sortIndex=Et,e(m,L),T||y||(T=!0,B||(B=!0,$()))),L},o.unstable_shouldYield=pt,o.unstable_wrapCallback=function(L){var I=_;return function(){var ot=_;_=I;try{return L.apply(this,arguments)}finally{_=ot}}}})(nd)),nd}var Cg;function bS(){return Cg||(Cg=1,ed.exports=TS()),ed.exports}var id={exports:{}},bn={};var wg;function AS(){if(wg)return bn;wg=1;var o=Dh();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,h,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:h,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,bn.createPortal=function(m,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return u(m,h,null,v)},bn.flushSync=function(m){var h=d.T,v=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=h,s.p=v,s.d.f()}},bn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},bn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},bn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var v=h.as,x=p(v,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:x,integrity:_,fetchPriority:y}):v==="script"&&s.d.X(m,{crossOrigin:x,integrity:_,fetchPriority:y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},bn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},bn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,x=p(v,h.crossOrigin);s.d.L(m,v,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},bn.preloadModule=function(m,h){if(typeof m=="string")if(h){var v=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},bn.requestFormReset=function(m){s.d.r(m)},bn.unstable_batchedUpdates=function(m,h){return m(h)},bn.useFormState=function(m,h,v){return d.H.useFormState(m,h,v)},bn.useFormStatus=function(){return d.H.useHostTransitionStatus()},bn.version="19.2.4",bn}var Dg;function RS(){if(Dg)return id.exports;Dg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),id.exports=AS(),id.exports}var Ug;function CS(){if(Ug)return Uo;Ug=1;var o=bS(),e=Dh(),i=RS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function h(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var g=!1,A=c.child;A;){if(A===a){g=!0,a=c,r=f;break}if(A===r){g=!0,r=c,a=f;break}A=A.sibling}if(!g){for(A=f.child;A;){if(A===a){g=!0,a=f,r=c;break}if(A===r){g=!0,r=f,a=c;break}A=A.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,_=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),P=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),pt=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var it=Symbol.for("react.client.reference");function lt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===it?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case k:return"Suspense";case B:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case P:return t.displayName||"Context";case w:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:lt(t.type)||"Memo";case b:n=t._payload,t=t._init;try{return lt(t(n))}catch{}}return null}var J=Array.isArray,L=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},dt=[],Et=-1;function O(t){return{current:t}}function Y(t){0>Et||(t.current=dt[Et],dt[Et]=null,Et--)}function _t(t,n){Et++,dt[Et]=t.current,t.current=n}var At=O(null),zt=O(null),et=O(null),vt=O(null);function Tt(t,n){switch(_t(et,n),_t(zt,t),_t(At,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?q0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=q0(n),t=Y0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Y(At),_t(At,t)}function kt(){Y(At),Y(zt),Y(et)}function Kt(t){t.memoizedState!==null&&_t(vt,t);var n=At.current,a=Y0(n,t.type);n!==a&&(_t(zt,t),_t(At,a))}function $t(t){zt.current===t&&(Y(At),Y(zt)),vt.current===t&&(Y(vt),Ao._currentValue=ot)}var Ke,_e;function pe(t){if(Ke===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ke=n&&n[1]||"",_e=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ke+t+_e}var we=!1;function oe(t,n){if(!t||we)return"";we=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(rt){var nt=rt}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(rt){nt=rt}t.call(gt.prototype)}}else{try{throw Error()}catch(rt){nt=rt}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(rt){if(rt&&nt&&typeof rt.stack=="string")return[rt.stack,nt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),g=f[0],A=f[1];if(g&&A){var z=g.split(`
`),Q=A.split(`
`);for(c=r=0;r<z.length&&!z[r].includes("DetermineComponentFrameRoot");)r++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(r===z.length||c===Q.length)for(r=z.length-1,c=Q.length-1;1<=r&&0<=c&&z[r]!==Q[c];)c--;for(;1<=r&&0<=c;r--,c--)if(z[r]!==Q[c]){if(r!==1||c!==1)do if(r--,c--,0>c||z[r]!==Q[c]){var ft=`
`+z[r].replace(" at new "," at ");return t.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",t.displayName)),ft}while(1<=r&&0<=c);break}}}finally{we=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?pe(a):""}function Ze(t,n){switch(t.tag){case 26:case 27:case 5:return pe(t.type);case 16:return pe("Lazy");case 13:return t.child!==n&&n!==null?pe("Suspense Fallback"):pe("Suspense");case 19:return pe("SuspenseList");case 0:case 15:return oe(t.type,!1);case 11:return oe(t.type.render,!1);case 1:return oe(t.type,!0);case 31:return pe("Activity");default:return""}}function G(t){try{var n="",a=null;do n+=Ze(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var We=Object.prototype.hasOwnProperty,ye=o.unstable_scheduleCallback,Le=o.unstable_cancelCallback,qt=o.unstable_shouldYield,U=o.unstable_requestPaint,E=o.unstable_now,q=o.unstable_getCurrentPriorityLevel,ht=o.unstable_ImmediatePriority,xt=o.unstable_UserBlockingPriority,ut=o.unstable_NormalPriority,Xt=o.unstable_LowPriority,Ct=o.unstable_IdlePriority,Zt=o.log,te=o.unstable_setDisableYieldValue,yt=null,St=null;function Ot(t){if(typeof Zt=="function"&&te(t),St&&typeof St.setStrictMode=="function")try{St.setStrictMode(yt,t)}catch{}}var Nt=Math.clz32?Math.clz32:W,Pt=Math.log,ce=Math.LN2;function W(t){return t>>>=0,t===0?32:31-(Pt(t)/ce|0)|0}var Rt=256,bt=262144,It=4194304;function Mt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ct(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var A=r&134217727;return A!==0?(r=A&~f,r!==0?c=Mt(r):(g&=A,g!==0?c=Mt(g):a||(a=A&~t,a!==0&&(c=Mt(a))))):(A=r&~f,A!==0?c=Mt(A):g!==0?c=Mt(g):a||(a=r&~t,a!==0&&(c=Mt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Bt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ne(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oe(){var t=It;return It<<=1,(It&62914560)===0&&(It=4194304),t}function Ee(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Un(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function pi(t,n,a,r,c,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,z=t.expirationTimes,Q=t.hiddenUpdates;for(a=g&~a;0<a;){var ft=31-Nt(a),gt=1<<ft;A[ft]=0,z[ft]=-1;var nt=Q[ft];if(nt!==null)for(Q[ft]=null,ft=0;ft<nt.length;ft++){var rt=nt[ft];rt!==null&&(rt.lane&=-536870913)}a&=~gt}r!==0&&Hr(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Hr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Nt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Ns(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Nt(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function Qo(t,n){var a=n&-n;return a=(a&42)!==0?1:Os(a),(a&(t.suspendedLanes|n))!==0?0:a}function Os(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ps(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ci(){var t=I.p;return t!==0?t:(t=window.event,t===void 0?32:gg(t.type))}function Is(t,n){var a=I.p;try{return I.p=t,n()}finally{I.p=a}}var mi=Math.random().toString(36).slice(2),nn="__reactFiber$"+mi,dn="__reactProps$"+mi,ki="__reactContainer$"+mi,ya="__reactEvents$"+mi,Jo="__reactListeners$"+mi,$o="__reactHandles$"+mi,tl="__reactResources$"+mi,is="__reactMarker$"+mi;function Gr(t){delete t[nn],delete t[dn],delete t[ya],delete t[Jo],delete t[$o]}function Ea(t){var n=t[nn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ki]||a[nn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=tg(t);t!==null;){if(a=t[nn])return a;t=tg(t)}return n}t=a,a=t.parentNode}return null}function Ta(t){if(t=t[nn]||t[ki]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function as(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function R(t){var n=t[tl];return n||(n=t[tl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function X(t){t[is]=!0}var st=new Set,tt={};function Z(t,n){wt(t,n),wt(t+"Capture",n)}function wt(t,n){for(tt[t]=n,t=0;t<n.length;t++)st.add(n[t])}var Ft=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Dt={},Wt={};function jt(t){return We.call(Wt,t)?!0:We.call(Dt,t)?!1:Ft.test(t)?Wt[t]=!0:(Dt[t]=!0,!1)}function ee(t,n,a){if(jt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function ae(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ht(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function ue(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qe(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ye(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function be(t){if(!t._valueTracker){var n=qe(t)?"checked":"value";t._valueTracker=Ye(t,n,""+t[n])}}function hn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=qe(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function Vt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ln=/[\n"\\]/g;function ie(t){return t.replace(Ln,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Nn(t,n,a,r,c,f,g,A){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ue(n)):t.value!==""+ue(n)&&(t.value=""+ue(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?gi(t,g,ue(n)):a!=null?gi(t,g,ue(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+ue(A):t.removeAttribute("name")}function Wn(t,n,a,r,c,f,g,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){be(t);return}a=a!=null?""+ue(a):"",n=n!=null?""+ue(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=A?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),be(t)}function gi(t,n,a){n==="number"&&Vt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function qn(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ue(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Ne(t,n,a){if(n!=null&&(n=""+ue(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ue(a):""}function an(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(J(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ue(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),be(t)}function On(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var sn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _i(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||sn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Xi(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&_i(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&_i(t,f,n[f])}function zs(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _v=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function el(t){return vv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Wi(){}var jc=null;function Zc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fs=null,Bs=null;function Wh(t){var n=Ta(t);if(n&&(t=n.stateNode)){var a=t[dn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Nn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ie(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[dn]||null;if(!c)throw Error(s(90));Nn(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&hn(r)}break t;case"textarea":Ne(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&qn(t,!!a.multiple,n,!1)}}}var Kc=!1;function qh(t,n,a){if(Kc)return t(n,a);Kc=!0;try{var r=t(n);return r}finally{if(Kc=!1,(Fs!==null||Bs!==null)&&(Vl(),Fs&&(n=Fs,t=Bs,Bs=Fs=null,Wh(n),t)))for(n=0;n<t.length;n++)Wh(t[n])}}function Vr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[dn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qc=!1;if(qi)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){Qc=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{Qc=!1}var ba=null,Jc=null,nl=null;function Yh(){if(nl)return nl;var t,n=Jc,a=n.length,r,c="value"in ba?ba.value:ba.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(r=1;r<=g&&n[a-r]===c[f-r];r++);return nl=c.slice(t,1<r?1-r:void 0)}function il(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function al(){return!0}function jh(){return!1}function zn(t){function n(a,r,c,f,g){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?al:jh,this.isPropagationStopped=jh,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),n}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=zn(ss),Xr=x({},ss,{view:0,detail:0}),xv=zn(Xr),$c,tu,Wr,rl=x({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Wr&&(Wr&&t.type==="mousemove"?($c=t.screenX-Wr.screenX,tu=t.screenY-Wr.screenY):tu=$c=0,Wr=t),$c)},movementY:function(t){return"movementY"in t?t.movementY:tu}}),Zh=zn(rl),Sv=x({},rl,{dataTransfer:0}),Mv=zn(Sv),yv=x({},Xr,{relatedTarget:0}),eu=zn(yv),Ev=x({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),Tv=zn(Ev),bv=x({},ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Av=zn(bv),Rv=x({},ss,{data:0}),Kh=zn(Rv),Cv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Dv[t])?!!n[t]:!1}function nu(){return Uv}var Lv=x({},Xr,{key:function(t){if(t.key){var n=Cv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nu,charCode:function(t){return t.type==="keypress"?il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Nv=zn(Lv),Ov=x({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qh=zn(Ov),Pv=x({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nu}),Iv=zn(Pv),zv=x({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fv=zn(zv),Bv=x({},rl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Hv=zn(Bv),Gv=x({},ss,{newState:0,oldState:0}),Vv=zn(Gv),kv=[9,13,27,32],iu=qi&&"CompositionEvent"in window,qr=null;qi&&"documentMode"in document&&(qr=document.documentMode);var Xv=qi&&"TextEvent"in window&&!qr,Jh=qi&&(!iu||qr&&8<qr&&11>=qr),$h=" ",tp=!1;function ep(t,n){switch(t){case"keyup":return kv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function np(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hs=!1;function Wv(t,n){switch(t){case"compositionend":return np(n);case"keypress":return n.which!==32?null:(tp=!0,$h);case"textInput":return t=n.data,t===$h&&tp?null:t;default:return null}}function qv(t,n){if(Hs)return t==="compositionend"||!iu&&ep(t,n)?(t=Yh(),nl=Jc=ba=null,Hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Jh&&n.locale!=="ko"?null:n.data;default:return null}}var Yv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ip(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Yv[t.type]:n==="textarea"}function ap(t,n,a,r){Fs?Bs?Bs.push(r):Bs=[r]:Fs=r,n=Zl(n,"onChange"),0<n.length&&(a=new sl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Yr=null,jr=null;function jv(t){H0(t,0)}function ol(t){var n=as(t);if(hn(n))return t}function sp(t,n){if(t==="change")return n}var rp=!1;if(qi){var au;if(qi){var su="oninput"in document;if(!su){var op=document.createElement("div");op.setAttribute("oninput","return;"),su=typeof op.oninput=="function"}au=su}else au=!1;rp=au&&(!document.documentMode||9<document.documentMode)}function lp(){Yr&&(Yr.detachEvent("onpropertychange",cp),jr=Yr=null)}function cp(t){if(t.propertyName==="value"&&ol(jr)){var n=[];ap(n,jr,t,Zc(t)),qh(jv,n)}}function Zv(t,n,a){t==="focusin"?(lp(),Yr=n,jr=a,Yr.attachEvent("onpropertychange",cp)):t==="focusout"&&lp()}function Kv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ol(jr)}function Qv(t,n){if(t==="click")return ol(n)}function Jv(t,n){if(t==="input"||t==="change")return ol(n)}function $v(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Yn=typeof Object.is=="function"?Object.is:$v;function Zr(t,n){if(Yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!We.call(n,c)||!Yn(t[c],n[c]))return!1}return!0}function up(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fp(t,n){var a=up(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=up(a)}}function dp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?dp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function hp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Vt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Vt(t.document)}return n}function ru(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var tx=qi&&"documentMode"in document&&11>=document.documentMode,Gs=null,ou=null,Kr=null,lu=!1;function pp(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;lu||Gs==null||Gs!==Vt(r)||(r=Gs,"selectionStart"in r&&ru(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kr&&Zr(Kr,r)||(Kr=r,r=Zl(ou,"onSelect"),0<r.length&&(n=new sl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Gs)))}function rs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Vs={animationend:rs("Animation","AnimationEnd"),animationiteration:rs("Animation","AnimationIteration"),animationstart:rs("Animation","AnimationStart"),transitionrun:rs("Transition","TransitionRun"),transitionstart:rs("Transition","TransitionStart"),transitioncancel:rs("Transition","TransitionCancel"),transitionend:rs("Transition","TransitionEnd")},cu={},mp={};qi&&(mp=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function os(t){if(cu[t])return cu[t];if(!Vs[t])return t;var n=Vs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in mp)return cu[t]=n[a];return t}var gp=os("animationend"),_p=os("animationiteration"),vp=os("animationstart"),ex=os("transitionrun"),nx=os("transitionstart"),ix=os("transitioncancel"),xp=os("transitionend"),Sp=new Map,uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");uu.push("scrollEnd");function vi(t,n){Sp.set(t,n),Z(n,[t])}var ll=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ii=[],ks=0,fu=0;function cl(){for(var t=ks,n=fu=ks=0;n<t;){var a=ii[n];ii[n++]=null;var r=ii[n];ii[n++]=null;var c=ii[n];ii[n++]=null;var f=ii[n];if(ii[n++]=null,r!==null&&c!==null){var g=r.pending;g===null?c.next=c:(c.next=g.next,g.next=c),r.pending=c}f!==0&&Mp(a,c,f)}}function ul(t,n,a,r){ii[ks++]=t,ii[ks++]=n,ii[ks++]=a,ii[ks++]=r,fu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function du(t,n,a,r){return ul(t,n,a,r),fl(t)}function ls(t,n){return ul(t,null,null,n),fl(t)}function Mp(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Nt(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function fl(t){if(50<xo)throw xo=0,yf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Xs={};function ax(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,r){return new ax(t,n,a,r)}function hu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Yi(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function yp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function dl(t,n,a,r,c,f){var g=0;if(r=t,typeof t=="function")hu(t)&&(g=1);else if(typeof t=="string")g=cS(t,a,At.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=jn(31,a,n,c),t.elementType=D,t.lanes=f,t;case C:return cs(a.children,c,f,n);case M:g=8,c|=24;break;case S:return t=jn(12,a,n,c|2),t.elementType=S,t.lanes=f,t;case k:return t=jn(13,a,n,c),t.elementType=k,t.lanes=f,t;case B:return t=jn(19,a,n,c),t.elementType=B,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:g=10;break t;case w:g=9;break t;case N:g=11;break t;case F:g=14;break t;case b:g=16,r=null;break t}g=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=jn(g,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function cs(t,n,a,r){return t=jn(7,t,r,n),t.lanes=a,t}function pu(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function Ep(t){var n=jn(18,null,null,0);return n.stateNode=t,n}function mu(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Tp=new WeakMap;function ai(t,n){if(typeof t=="object"&&t!==null){var a=Tp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:G(n)},Tp.set(t,n),n)}return{value:t,source:n,stack:G(n)}}var Ws=[],qs=0,hl=null,Qr=0,si=[],ri=0,Aa=null,wi=1,Di="";function ji(t,n){Ws[qs++]=Qr,Ws[qs++]=hl,hl=t,Qr=n}function bp(t,n,a){si[ri++]=wi,si[ri++]=Di,si[ri++]=Aa,Aa=t;var r=wi;t=Di;var c=32-Nt(r)-1;r&=~(1<<c),a+=1;var f=32-Nt(n)+c;if(30<f){var g=c-c%5;f=(r&(1<<g)-1).toString(32),r>>=g,c-=g,wi=1<<32-Nt(n)+c|a<<c|r,Di=f+t}else wi=1<<f|a<<c|r,Di=t}function gu(t){t.return!==null&&(ji(t,1),bp(t,1,0))}function _u(t){for(;t===hl;)hl=Ws[--qs],Ws[qs]=null,Qr=Ws[--qs],Ws[qs]=null;for(;t===Aa;)Aa=si[--ri],si[ri]=null,Di=si[--ri],si[ri]=null,wi=si[--ri],si[ri]=null}function Ap(t,n){si[ri++]=wi,si[ri++]=Di,si[ri++]=Aa,wi=n.id,Di=n.overflow,Aa=t}var Sn=null,ke=null,Se=!1,Ra=null,oi=!1,vu=Error(s(519));function Ca(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jr(ai(n,t)),vu}function Rp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[nn]=t,n[dn]=r,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<Mo.length;a++)ge(Mo[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Wn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),an(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||X0(n.textContent,a)?(r.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),r.onScroll!=null&&ge("scroll",n),r.onScrollEnd!=null&&ge("scrollend",n),r.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||Ca(t,!0)}function Cp(t){for(Sn=t.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:Sn=Sn.return}}function Ys(t){if(t!==Sn)return!1;if(!Se)return Cp(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||zf(t.type,t.memoizedProps)),a=!a),a&&ke&&Ca(t),Cp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));ke=$0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));ke=$0(t)}else n===27?(n=ke,Va(t.type)?(t=Vf,Vf=null,ke=t):ke=n):ke=Sn?ci(t.stateNode.nextSibling):null;return!0}function us(){ke=Sn=null,Se=!1}function xu(){var t=Ra;return t!==null&&(Gn===null?Gn=t:Gn.push.apply(Gn,t),Ra=null),t}function Jr(t){Ra===null?Ra=[t]:Ra.push(t)}var Su=O(null),fs=null,Zi=null;function wa(t,n,a){_t(Su,n._currentValue),n._currentValue=a}function Ki(t){t._currentValue=Su.current,Y(Su)}function Mu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function yu(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=c;for(var z=0;z<n.length;z++)if(A.context===n[z]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Mu(f.return,a,t),r||(g=null);break t}f=A.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(s(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),Mu(g,a,t),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function js(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var A=c.type;Yn(c.pendingProps.value,g.value)||(t!==null?t.push(A):t=[A])}}else if(c===vt.current){if(g=c.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Ao):t=[Ao])}c=c.return}t!==null&&yu(n,t,a,r),n.flags|=262144}function pl(t){for(t=t.firstContext;t!==null;){if(!Yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ds(t){fs=t,Zi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mn(t){return wp(fs,t)}function ml(t,n){return fs===null&&ds(t),wp(t,n)}function wp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Zi===null){if(t===null)throw Error(s(308));Zi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Zi=Zi.next=n;return a}var sx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},rx=o.unstable_scheduleCallback,ox=o.unstable_NormalPriority,rn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Eu(){return{controller:new sx,data:new Map,refCount:0}}function $r(t){t.refCount--,t.refCount===0&&rx(ox,function(){t.controller.abort()})}var to=null,Tu=0,Zs=0,Ks=null;function lx(t,n){if(to===null){var a=to=[];Tu=0,Zs=Cf(),Ks={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Tu++,n.then(Dp,Dp),n}function Dp(){if(--Tu===0&&to!==null){Ks!==null&&(Ks.status="fulfilled");var t=to;to=null,Zs=0,Ks=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function cx(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var Up=L.S;L.S=function(t,n){p0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&lx(t,n),Up!==null&&Up(t,n)};var hs=O(null);function bu(){var t=hs.current;return t!==null?t:Ve.pooledCache}function gl(t,n){n===null?_t(hs,hs.current):_t(hs,n.pool)}function Lp(){var t=bu();return t===null?null:{parent:rn._currentValue,pool:t}}var Qs=Error(s(460)),Au=Error(s(474)),_l=Error(s(542)),vl={then:function(){}};function Np(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Op(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Wi,Wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Ip(t),t;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(t=Ve,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Ip(t),t}throw ms=n,Qs}}function ps(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ms=a,Qs):a}}var ms=null;function Pp(){if(ms===null)throw Error(s(459));var t=ms;return ms=null,t}function Ip(t){if(t===Qs||t===_l)throw Error(s(483))}var Js=null,eo=0;function xl(t){var n=eo;return eo+=1,Js===null&&(Js=[]),Op(Js,t,n)}function no(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Sl(t,n){throw n.$$typeof===_?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function zp(t){function n(j,V){if(t){var K=j.deletions;K===null?(j.deletions=[V],j.flags|=16):K.push(V)}}function a(j,V){if(!t)return null;for(;V!==null;)n(j,V),V=V.sibling;return null}function r(j){for(var V=new Map;j!==null;)j.key!==null?V.set(j.key,j):V.set(j.index,j),j=j.sibling;return V}function c(j,V){return j=Yi(j,V),j.index=0,j.sibling=null,j}function f(j,V,K){return j.index=K,t?(K=j.alternate,K!==null?(K=K.index,K<V?(j.flags|=67108866,V):K):(j.flags|=67108866,V)):(j.flags|=1048576,V)}function g(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function A(j,V,K,mt){return V===null||V.tag!==6?(V=pu(K,j.mode,mt),V.return=j,V):(V=c(V,K),V.return=j,V)}function z(j,V,K,mt){var Qt=K.type;return Qt===C?ft(j,V,K.props.children,mt,K.key):V!==null&&(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===b&&ps(Qt)===V.type)?(V=c(V,K.props),no(V,K),V.return=j,V):(V=dl(K.type,K.key,K.props,null,j.mode,mt),no(V,K),V.return=j,V)}function Q(j,V,K,mt){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=mu(K,j.mode,mt),V.return=j,V):(V=c(V,K.children||[]),V.return=j,V)}function ft(j,V,K,mt,Qt){return V===null||V.tag!==7?(V=cs(K,j.mode,mt,Qt),V.return=j,V):(V=c(V,K),V.return=j,V)}function gt(j,V,K){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=pu(""+V,j.mode,K),V.return=j,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case y:return K=dl(V.type,V.key,V.props,null,j.mode,K),no(K,V),K.return=j,K;case T:return V=mu(V,j.mode,K),V.return=j,V;case b:return V=ps(V),gt(j,V,K)}if(J(V)||$(V))return V=cs(V,j.mode,K,null),V.return=j,V;if(typeof V.then=="function")return gt(j,xl(V),K);if(V.$$typeof===P)return gt(j,ml(j,V),K);Sl(j,V)}return null}function nt(j,V,K,mt){var Qt=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Qt!==null?null:A(j,V,""+K,mt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case y:return K.key===Qt?z(j,V,K,mt):null;case T:return K.key===Qt?Q(j,V,K,mt):null;case b:return K=ps(K),nt(j,V,K,mt)}if(J(K)||$(K))return Qt!==null?null:ft(j,V,K,mt,null);if(typeof K.then=="function")return nt(j,V,xl(K),mt);if(K.$$typeof===P)return nt(j,V,ml(j,K),mt);Sl(j,K)}return null}function rt(j,V,K,mt,Qt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return j=j.get(K)||null,A(V,j,""+mt,Qt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case y:return j=j.get(mt.key===null?K:mt.key)||null,z(V,j,mt,Qt);case T:return j=j.get(mt.key===null?K:mt.key)||null,Q(V,j,mt,Qt);case b:return mt=ps(mt),rt(j,V,K,mt,Qt)}if(J(mt)||$(mt))return j=j.get(K)||null,ft(V,j,mt,Qt,null);if(typeof mt.then=="function")return rt(j,V,K,xl(mt),Qt);if(mt.$$typeof===P)return rt(j,V,K,ml(V,mt),Qt);Sl(V,mt)}return null}function Gt(j,V,K,mt){for(var Qt=null,Ae=null,Yt=V,fe=V=0,xe=null;Yt!==null&&fe<K.length;fe++){Yt.index>fe?(xe=Yt,Yt=null):xe=Yt.sibling;var Re=nt(j,Yt,K[fe],mt);if(Re===null){Yt===null&&(Yt=xe);break}t&&Yt&&Re.alternate===null&&n(j,Yt),V=f(Re,V,fe),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re,Yt=xe}if(fe===K.length)return a(j,Yt),Se&&ji(j,fe),Qt;if(Yt===null){for(;fe<K.length;fe++)Yt=gt(j,K[fe],mt),Yt!==null&&(V=f(Yt,V,fe),Ae===null?Qt=Yt:Ae.sibling=Yt,Ae=Yt);return Se&&ji(j,fe),Qt}for(Yt=r(Yt);fe<K.length;fe++)xe=rt(Yt,j,fe,K[fe],mt),xe!==null&&(t&&xe.alternate!==null&&Yt.delete(xe.key===null?fe:xe.key),V=f(xe,V,fe),Ae===null?Qt=xe:Ae.sibling=xe,Ae=xe);return t&&Yt.forEach(function(Ya){return n(j,Ya)}),Se&&ji(j,fe),Qt}function Jt(j,V,K,mt){if(K==null)throw Error(s(151));for(var Qt=null,Ae=null,Yt=V,fe=V=0,xe=null,Re=K.next();Yt!==null&&!Re.done;fe++,Re=K.next()){Yt.index>fe?(xe=Yt,Yt=null):xe=Yt.sibling;var Ya=nt(j,Yt,Re.value,mt);if(Ya===null){Yt===null&&(Yt=xe);break}t&&Yt&&Ya.alternate===null&&n(j,Yt),V=f(Ya,V,fe),Ae===null?Qt=Ya:Ae.sibling=Ya,Ae=Ya,Yt=xe}if(Re.done)return a(j,Yt),Se&&ji(j,fe),Qt;if(Yt===null){for(;!Re.done;fe++,Re=K.next())Re=gt(j,Re.value,mt),Re!==null&&(V=f(Re,V,fe),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re);return Se&&ji(j,fe),Qt}for(Yt=r(Yt);!Re.done;fe++,Re=K.next())Re=rt(Yt,j,fe,Re.value,mt),Re!==null&&(t&&Re.alternate!==null&&Yt.delete(Re.key===null?fe:Re.key),V=f(Re,V,fe),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re);return t&&Yt.forEach(function(SS){return n(j,SS)}),Se&&ji(j,fe),Qt}function He(j,V,K,mt){if(typeof K=="object"&&K!==null&&K.type===C&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case y:t:{for(var Qt=K.key;V!==null;){if(V.key===Qt){if(Qt=K.type,Qt===C){if(V.tag===7){a(j,V.sibling),mt=c(V,K.props.children),mt.return=j,j=mt;break t}}else if(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===b&&ps(Qt)===V.type){a(j,V.sibling),mt=c(V,K.props),no(mt,K),mt.return=j,j=mt;break t}a(j,V);break}else n(j,V);V=V.sibling}K.type===C?(mt=cs(K.props.children,j.mode,mt,K.key),mt.return=j,j=mt):(mt=dl(K.type,K.key,K.props,null,j.mode,mt),no(mt,K),mt.return=j,j=mt)}return g(j);case T:t:{for(Qt=K.key;V!==null;){if(V.key===Qt)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(j,V.sibling),mt=c(V,K.children||[]),mt.return=j,j=mt;break t}else{a(j,V);break}else n(j,V);V=V.sibling}mt=mu(K,j.mode,mt),mt.return=j,j=mt}return g(j);case b:return K=ps(K),He(j,V,K,mt)}if(J(K))return Gt(j,V,K,mt);if($(K)){if(Qt=$(K),typeof Qt!="function")throw Error(s(150));return K=Qt.call(K),Jt(j,V,K,mt)}if(typeof K.then=="function")return He(j,V,xl(K),mt);if(K.$$typeof===P)return He(j,V,ml(j,K),mt);Sl(j,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,V!==null&&V.tag===6?(a(j,V.sibling),mt=c(V,K),mt.return=j,j=mt):(a(j,V),mt=pu(K,j.mode,mt),mt.return=j,j=mt),g(j)):a(j,V)}return function(j,V,K,mt){try{eo=0;var Qt=He(j,V,K,mt);return Js=null,Qt}catch(Yt){if(Yt===Qs||Yt===_l)throw Yt;var Ae=jn(29,Yt,null,j.mode);return Ae.lanes=mt,Ae.return=j,Ae}}}var gs=zp(!0),Fp=zp(!1),Da=!1;function Ru(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ua(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function La(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(De&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=fl(t),Mp(t,null,a),n}return ul(t,r,n,a),fl(t)}function io(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Ns(t,a)}}function wu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Du=!1;function ao(){if(Du){var t=Ks;if(t!==null)throw t}}function so(t,n,a,r){Du=!1;var c=t.updateQueue;Da=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var z=A,Q=z.next;z.next=null,g===null?f=Q:g.next=Q,g=z;var ft=t.alternate;ft!==null&&(ft=ft.updateQueue,A=ft.lastBaseUpdate,A!==g&&(A===null?ft.firstBaseUpdate=Q:A.next=Q,ft.lastBaseUpdate=z))}if(f!==null){var gt=c.baseState;g=0,ft=Q=z=null,A=f;do{var nt=A.lane&-536870913,rt=nt!==A.lane;if(rt?(ve&nt)===nt:(r&nt)===nt){nt!==0&&nt===Zs&&(Du=!0),ft!==null&&(ft=ft.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Gt=t,Jt=A;nt=n;var He=a;switch(Jt.tag){case 1:if(Gt=Jt.payload,typeof Gt=="function"){gt=Gt.call(He,gt,nt);break t}gt=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=Jt.payload,nt=typeof Gt=="function"?Gt.call(He,gt,nt):Gt,nt==null)break t;gt=x({},gt,nt);break t;case 2:Da=!0}}nt=A.callback,nt!==null&&(t.flags|=64,rt&&(t.flags|=8192),rt=c.callbacks,rt===null?c.callbacks=[nt]:rt.push(nt))}else rt={lane:nt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ft===null?(Q=ft=rt,z=gt):ft=ft.next=rt,g|=nt;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;rt=A,A=rt.next,rt.next=null,c.lastBaseUpdate=rt,c.shared.pending=null}}while(!0);ft===null&&(z=gt),c.baseState=z,c.firstBaseUpdate=Q,c.lastBaseUpdate=ft,f===null&&(c.shared.lanes=0),za|=g,t.lanes=g,t.memoizedState=gt}}function Bp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Hp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Bp(a[t],n)}var $s=O(null),Ml=O(0);function Gp(t,n){t=sa,_t(Ml,t),_t($s,n),sa=t|n.baseLanes}function Uu(){_t(Ml,sa),_t($s,$s.current)}function Lu(){sa=Ml.current,Y($s),Y(Ml)}var Zn=O(null),li=null;function Na(t){var n=t.alternate;_t($e,$e.current&1),_t(Zn,t),li===null&&(n===null||$s.current!==null||n.memoizedState!==null)&&(li=t)}function Nu(t){_t($e,$e.current),_t(Zn,t),li===null&&(li=t)}function Vp(t){t.tag===22?(_t($e,$e.current),_t(Zn,t),li===null&&(li=t)):Oa()}function Oa(){_t($e,$e.current),_t(Zn,Zn.current)}function Kn(t){Y(Zn),li===t&&(li=null),Y($e)}var $e=O(0);function yl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Hf(a)||Gf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Qi=0,le=null,Fe=null,on=null,El=!1,tr=!1,_s=!1,Tl=0,ro=0,er=null,ux=0;function Qe(){throw Error(s(321))}function Ou(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Yn(t[a],n[a]))return!1;return!0}function Pu(t,n,a,r,c,f){return Qi=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=t===null||t.memoizedState===null?bm:Ku,_s=!1,f=a(r,c),_s=!1,tr&&(f=Xp(n,a,r,c)),kp(t),f}function kp(t){L.H=co;var n=Fe!==null&&Fe.next!==null;if(Qi=0,on=Fe=le=null,El=!1,ro=0,er=null,n)throw Error(s(300));t===null||ln||(t=t.dependencies,t!==null&&pl(t)&&(ln=!0))}function Xp(t,n,a,r){le=t;var c=0;do{if(tr&&(er=null),ro=0,tr=!1,25<=c)throw Error(s(301));if(c+=1,on=Fe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=Am,f=n(a,r)}while(tr);return f}function fx(){var t=L.H,n=t.useState()[0];return n=typeof n.then=="function"?oo(n):n,t=t.useState()[0],(Fe!==null?Fe.memoizedState:null)!==t&&(le.flags|=1024),n}function Iu(){var t=Tl!==0;return Tl=0,t}function zu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Fu(t){if(El){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}El=!1}Qi=0,on=Fe=le=null,tr=!1,ro=Tl=0,er=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?le.memoizedState=on=t:on=on.next=t,on}function tn(){if(Fe===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var n=on===null?le.memoizedState:on.next;if(n!==null)on=n,Fe=t;else{if(t===null)throw le.alternate===null?Error(s(467)):Error(s(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},on===null?le.memoizedState=on=t:on=on.next=t}return on}function bl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oo(t){var n=ro;return ro+=1,er===null&&(er=[]),t=Op(er,t,n),n=le,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?bm:Ku),t}function Al(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return oo(t);if(t.$$typeof===P)return Mn(t)}throw Error(s(438,String(t)))}function Bu(t){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=le.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=bl(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=pt;return n.index++,a}function Ji(t,n){return typeof n=="function"?n(t):n}function Rl(t){var n=tn();return Hu(n,Fe,t)}function Hu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var A=g=null,z=null,Q=n,ft=!1;do{var gt=Q.lane&-536870913;if(gt!==Q.lane?(ve&gt)===gt:(Qi&gt)===gt){var nt=Q.revertLane;if(nt===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),gt===Zs&&(ft=!0);else if((Qi&nt)===nt){Q=Q.next,nt===Zs&&(ft=!0);continue}else gt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},z===null?(A=z=gt,g=f):z=z.next=gt,le.lanes|=nt,za|=nt;gt=Q.action,_s&&a(f,gt),f=Q.hasEagerState?Q.eagerState:a(f,gt)}else nt={lane:gt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},z===null?(A=z=nt,g=f):z=z.next=nt,le.lanes|=gt,za|=gt;Q=Q.next}while(Q!==null&&Q!==n);if(z===null?g=f:z.next=A,!Yn(f,t.memoizedState)&&(ln=!0,ft&&(a=Ks,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=z,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Gu(t){var n=tn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);Yn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Wp(t,n,a){var r=le,c=tn(),f=Se;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!Yn((Fe||c).memoizedState,a);if(g&&(c.memoizedState=a,ln=!0),c=c.queue,Xu(jp.bind(null,r,c,t),[t]),c.getSnapshot!==n||g||on!==null&&on.memoizedState.tag&1){if(r.flags|=2048,nr(9,{destroy:void 0},Yp.bind(null,r,c,a,n),null),Ve===null)throw Error(s(349));f||(Qi&127)!==0||qp(r,n,a)}return a}function qp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=bl(),le.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Yp(t,n,a,r){n.value=a,n.getSnapshot=r,Zp(n)&&Kp(t)}function jp(t,n,a){return a(function(){Zp(n)&&Kp(t)})}function Zp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Yn(t,a)}catch{return!0}}function Kp(t){var n=ls(t,2);n!==null&&Vn(n,t,2)}function Vu(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),_s){Ot(!0);try{a()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:t},n}function Qp(t,n,a,r){return t.baseState=a,Hu(t,Fe,typeof r=="function"?r:Ji)}function dx(t,n,a,r,c){if(Dl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};L.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Jp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Jp(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=L.T,g={};L.T=g;try{var A=a(c,r),z=L.S;z!==null&&z(g,A),$p(t,n,A)}catch(Q){ku(t,n,Q)}finally{f!==null&&g.types!==null&&(f.types=g.types),L.T=f}}else try{f=a(c,r),$p(t,n,f)}catch(Q){ku(t,n,Q)}}function $p(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){tm(t,n,r)},function(r){return ku(t,n,r)}):tm(t,n,a)}function tm(t,n,a){n.status="fulfilled",n.value=a,em(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Jp(t,a)))}function ku(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,em(n),n=n.next;while(n!==r)}t.action=null}function em(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function nm(t,n){return n}function im(t,n){if(Se){var a=Ve.formState;if(a!==null){t:{var r=le;if(Se){if(ke){e:{for(var c=ke,f=oi;c.nodeType!==8;){if(!f){c=null;break e}if(c=ci(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){ke=ci(c.nextSibling),r=c.data==="F!";break t}}Ca(r)}r=!1}r&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nm,lastRenderedState:n},a.queue=r,a=ym.bind(null,le,r),r.dispatch=a,r=Vu(!1),f=Zu.bind(null,le,!1,r.queue),r=Pn(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=dx.bind(null,le,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function am(t){var n=tn();return sm(n,Fe,t)}function sm(t,n,a){if(n=Hu(t,n,nm)[0],t=Rl(Ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=oo(n)}catch(g){throw g===Qs?_l:g}else r=n;n=tn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(le.flags|=2048,nr(9,{destroy:void 0},hx.bind(null,c,a),null)),[r,f,t]}function hx(t,n){t.action=n}function rm(t){var n=tn(),a=Fe;if(a!==null)return sm(n,a,t);tn(),n=n.memoizedState,a=tn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function nr(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=le.updateQueue,n===null&&(n=bl(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function om(){return tn().memoizedState}function Cl(t,n,a,r){var c=Pn();le.flags|=t,c.memoizedState=nr(1|n,{destroy:void 0},a,r===void 0?null:r)}function wl(t,n,a,r){var c=tn();r=r===void 0?null:r;var f=c.memoizedState.inst;Fe!==null&&r!==null&&Ou(r,Fe.memoizedState.deps)?c.memoizedState=nr(n,f,a,r):(le.flags|=t,c.memoizedState=nr(1|n,f,a,r))}function lm(t,n){Cl(8390656,8,t,n)}function Xu(t,n){wl(2048,8,t,n)}function px(t){le.flags|=4;var n=le.updateQueue;if(n===null)n=bl(),le.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function cm(t){var n=tn().memoizedState;return px({ref:n,nextImpl:t}),function(){if((De&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function um(t,n){return wl(4,2,t,n)}function fm(t,n){return wl(4,4,t,n)}function dm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function hm(t,n,a){a=a!=null?a.concat([t]):null,wl(4,4,dm.bind(null,n,t),a)}function Wu(){}function pm(t,n){var a=tn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Ou(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function mm(t,n){var a=tn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Ou(n,r[1]))return r[0];if(r=t(),_s){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[r,n],r}function qu(t,n,a){return a===void 0||(Qi&1073741824)!==0&&(ve&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=g0(),le.lanes|=t,za|=t,a)}function gm(t,n,a,r){return Yn(a,n)?a:$s.current!==null?(t=qu(t,a,r),Yn(t,n)||(ln=!0),t):(Qi&42)===0||(Qi&1073741824)!==0&&(ve&261930)===0?(ln=!0,t.memoizedState=a):(t=g0(),le.lanes|=t,za|=t,n)}function _m(t,n,a,r,c){var f=I.p;I.p=f!==0&&8>f?f:8;var g=L.T,A={};L.T=A,Zu(t,!1,n,a);try{var z=c(),Q=L.S;if(Q!==null&&Q(A,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ft=cx(z,r);lo(t,n,ft,$n(t))}else lo(t,n,r,$n(t))}catch(gt){lo(t,n,{then:function(){},status:"rejected",reason:gt},$n())}finally{I.p=f,g!==null&&A.types!==null&&(g.types=A.types),L.T=g}}function mx(){}function Yu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=vm(t).queue;_m(t,c,n,ot,a===null?mx:function(){return xm(t),a(r)})}function vm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:ot},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function xm(t){var n=vm(t);n.next===null&&(n=t.alternate.memoizedState),lo(t,n.next.queue,{},$n())}function ju(){return Mn(Ao)}function Sm(){return tn().memoizedState}function Mm(){return tn().memoizedState}function gx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();t=Ua(a);var r=La(n,t,a);r!==null&&(Vn(r,n,a),io(r,n,a)),n={cache:Eu()},t.payload=n;return}n=n.return}}function _x(t,n,a){var r=$n();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Dl(t)?Em(n,a):(a=du(t,n,a,r),a!==null&&(Vn(a,t,r),Tm(a,n,r)))}function ym(t,n,a){var r=$n();lo(t,n,a,r)}function lo(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dl(t))Em(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,A=f(g,a);if(c.hasEagerState=!0,c.eagerState=A,Yn(A,g))return ul(t,n,c,0),Ve===null&&cl(),!1}catch{}if(a=du(t,n,c,r),a!==null)return Vn(a,t,r),Tm(a,n,r),!0}return!1}function Zu(t,n,a,r){if(r={lane:2,revertLane:Cf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Dl(t)){if(n)throw Error(s(479))}else n=du(t,a,r,2),n!==null&&Vn(n,t,2)}function Dl(t){var n=t.alternate;return t===le||n!==null&&n===le}function Em(t,n){tr=El=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Tm(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Ns(t,a)}}var co={readContext:Mn,use:Al,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};co.useEffectEvent=Qe;var bm={readContext:Mn,use:Al,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:Mn,useEffect:lm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Cl(4194308,4,dm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Cl(4194308,4,t,n)},useInsertionEffect:function(t,n){Cl(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var r=t();if(_s){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Pn();if(a!==void 0){var c=a(n);if(_s){Ot(!0);try{a(n)}finally{Ot(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=_x.bind(null,le,t),[r.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=Vu(t);var n=t.queue,a=ym.bind(null,le,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Wu,useDeferredValue:function(t,n){var a=Pn();return qu(a,t,n)},useTransition:function(){var t=Vu(!1);return t=_m.bind(null,le,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=le,c=Pn();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ve===null)throw Error(s(349));(ve&127)!==0||qp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,lm(jp.bind(null,r,f,t),[t]),r.flags|=2048,nr(9,{destroy:void 0},Yp.bind(null,r,f,a,n),null),a},useId:function(){var t=Pn(),n=Ve.identifierPrefix;if(Se){var a=Di,r=wi;a=(r&~(1<<32-Nt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Tl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ux++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:ju,useFormState:im,useActionState:im,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Zu.bind(null,le,!0,a),a.dispatch=n,[t,n]},useMemoCache:Bu,useCacheRefresh:function(){return Pn().memoizedState=gx.bind(null,le)},useEffectEvent:function(t){var n=Pn(),a={impl:t};return n.memoizedState=a,function(){if((De&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Ku={readContext:Mn,use:Al,useCallback:pm,useContext:Mn,useEffect:Xu,useImperativeHandle:hm,useInsertionEffect:um,useLayoutEffect:fm,useMemo:mm,useReducer:Rl,useRef:om,useState:function(){return Rl(Ji)},useDebugValue:Wu,useDeferredValue:function(t,n){var a=tn();return gm(a,Fe.memoizedState,t,n)},useTransition:function(){var t=Rl(Ji)[0],n=tn().memoizedState;return[typeof t=="boolean"?t:oo(t),n]},useSyncExternalStore:Wp,useId:Sm,useHostTransitionStatus:ju,useFormState:am,useActionState:am,useOptimistic:function(t,n){var a=tn();return Qp(a,Fe,t,n)},useMemoCache:Bu,useCacheRefresh:Mm};Ku.useEffectEvent=cm;var Am={readContext:Mn,use:Al,useCallback:pm,useContext:Mn,useEffect:Xu,useImperativeHandle:hm,useInsertionEffect:um,useLayoutEffect:fm,useMemo:mm,useReducer:Gu,useRef:om,useState:function(){return Gu(Ji)},useDebugValue:Wu,useDeferredValue:function(t,n){var a=tn();return Fe===null?qu(a,t,n):gm(a,Fe.memoizedState,t,n)},useTransition:function(){var t=Gu(Ji)[0],n=tn().memoizedState;return[typeof t=="boolean"?t:oo(t),n]},useSyncExternalStore:Wp,useId:Sm,useHostTransitionStatus:ju,useFormState:rm,useActionState:rm,useOptimistic:function(t,n){var a=tn();return Fe!==null?Qp(a,Fe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Bu,useCacheRefresh:Mm};Am.useEffectEvent=cm;function Qu(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ju={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=$n(),c=Ua(r);c.payload=n,a!=null&&(c.callback=a),n=La(t,c,r),n!==null&&(Vn(n,t,r),io(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=$n(),c=Ua(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=La(t,c,r),n!==null&&(Vn(n,t,r),io(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=$n(),r=Ua(a);r.tag=2,n!=null&&(r.callback=n),n=La(t,r,a),n!==null&&(Vn(n,t,a),io(n,t,a))}};function Rm(t,n,a,r,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,g):n.prototype&&n.prototype.isPureReactComponent?!Zr(a,r)||!Zr(c,f):!0}function Cm(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Ju.enqueueReplaceState(n,n.state,null)}function vs(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function wm(t){ll(t)}function Dm(t){console.error(t)}function Um(t){ll(t)}function Ul(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Lm(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function $u(t,n,a){return a=Ua(a),a.tag=3,a.payload={element:null},a.callback=function(){Ul(t,n)},a}function Nm(t){return t=Ua(t),t.tag=3,t}function Om(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){Lm(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Lm(n,a,r),typeof c!="function"&&(Fa===null?Fa=new Set([this]):Fa.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function vx(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&js(n,a,c,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return li===null?kl():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===vl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),bf(t,r,c)),!1;case 22:return a.flags|=65536,r===vl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),bf(t,r,c)),!1}throw Error(s(435,a.tag))}return bf(t,r,c),kl(),!1}if(Se)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==vu&&(t=Error(s(422),{cause:r}),Jr(ai(t,a)))):(r!==vu&&(n=Error(s(423),{cause:r}),Jr(ai(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=ai(r,a),c=$u(t.stateNode,r,c),wu(t,c),Je!==4&&(Je=2)),!1;var f=Error(s(520),{cause:r});if(f=ai(f,a),vo===null?vo=[f]:vo.push(f),Je!==4&&(Je=2),n===null)return!0;r=ai(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=$u(a.stateNode,r,t),wu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Fa===null||!Fa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Nm(c),Om(c,t,a,r),wu(a,c),!1}a=a.return}while(a!==null);return!1}var tf=Error(s(461)),ln=!1;function yn(t,n,a,r){n.child=t===null?Fp(n,null,a,r):gs(n,t.child,a,r)}function Pm(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var g={};for(var A in r)A!=="ref"&&(g[A]=r[A])}else g=r;return ds(n),r=Pu(t,n,a,g,f,c),A=Iu(),t!==null&&!ln?(zu(t,n,c),$i(t,n,c)):(Se&&A&&gu(n),n.flags|=1,yn(t,n,r,c),n.child)}function Im(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!hu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,zm(t,n,f,r,c)):(t=dl(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!cf(t,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Zr,a(g,r)&&t.ref===n.ref)return $i(t,n,c)}return n.flags|=1,t=Yi(f,r),t.ref=n.ref,t.return=n,n.child=t}function zm(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(Zr(f,r)&&t.ref===n.ref)if(ln=!1,n.pendingProps=r=f,cf(t,c))(t.flags&131072)!==0&&(ln=!0);else return n.lanes=t.lanes,$i(t,n,c)}return ef(t,n,a,r,c)}function Fm(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Bm(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&gl(n,f!==null?f.cachePool:null),f!==null?Gp(n,f):Uu(),Vp(n);else return r=n.lanes=536870912,Bm(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(gl(n,f.cachePool),Gp(n,f),Oa(),n.memoizedState=null):(t!==null&&gl(n,null),Uu(),Oa());return yn(t,n,c,a),n.child}function uo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Bm(t,n,a,r,c){var f=bu();return f=f===null?null:{parent:rn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&gl(n,null),Uu(),Vp(n),t!==null&&js(t,n,r,!0),n.childLanes=c,null}function Ll(t,n){return n=Ol({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Hm(t,n,a){return gs(n,t.child,null,a),t=Ll(n,n.pendingProps),t.flags|=2,Kn(n),n.memoizedState=null,t}function xx(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(r.mode==="hidden")return t=Ll(n,r),n.lanes=536870912,uo(null,t);if(Nu(n),(t=ke)?(t=J0(t,oi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Aa!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=Ep(t),a.return=n,n.child=a,Sn=n,ke=null)):t=null,t===null)throw Ca(n);return n.lanes=536870912,null}return Ll(n,r)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Nu(n),c)if(n.flags&256)n.flags&=-257,n=Hm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(ln||js(t,n,a,!1),c=(a&t.childLanes)!==0,ln||c){if(r=Ve,r!==null&&(g=Qo(r,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,ls(t,g),Vn(r,t,g),tf;kl(),n=Hm(t,n,a)}else t=f.treeContext,ke=ci(g.nextSibling),Sn=n,Se=!0,Ra=null,oi=!1,t!==null&&Ap(n,t),n=Ll(n,r),n.flags|=4096;return n}return t=Yi(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Nl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ef(t,n,a,r,c){return ds(n),a=Pu(t,n,a,r,void 0,c),r=Iu(),t!==null&&!ln?(zu(t,n,c),$i(t,n,c)):(Se&&r&&gu(n),n.flags|=1,yn(t,n,a,c),n.child)}function Gm(t,n,a,r,c,f){return ds(n),n.updateQueue=null,a=Xp(n,r,a,c),kp(t),r=Iu(),t!==null&&!ln?(zu(t,n,f),$i(t,n,f)):(Se&&r&&gu(n),n.flags|=1,yn(t,n,a,f),n.child)}function Vm(t,n,a,r,c){if(ds(n),n.stateNode===null){var f=Xs,g=a.contextType;typeof g=="object"&&g!==null&&(f=Mn(g)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ju,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Ru(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Mn(g):Xs,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Qu(n,a,g,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Ju.enqueueReplaceState(f,f.state,null),so(n,r,f,c),ao(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,z=vs(a,A);f.props=z;var Q=f.context,ft=a.contextType;g=Xs,typeof ft=="object"&&ft!==null&&(g=Mn(ft));var gt=a.getDerivedStateFromProps;ft=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||Q!==g)&&Cm(n,f,r,g),Da=!1;var nt=n.memoizedState;f.state=nt,so(n,r,f,c),ao(),Q=n.memoizedState,A||nt!==Q||Da?(typeof gt=="function"&&(Qu(n,a,gt,r),Q=n.memoizedState),(z=Da||Rm(n,a,z,r,nt,Q,g))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=Q),f.props=r,f.state=Q,f.context=g,r=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Cu(t,n),g=n.memoizedProps,ft=vs(a,g),f.props=ft,gt=n.pendingProps,nt=f.context,Q=a.contextType,z=Xs,typeof Q=="object"&&Q!==null&&(z=Mn(Q)),A=a.getDerivedStateFromProps,(Q=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==gt||nt!==z)&&Cm(n,f,r,z),Da=!1,nt=n.memoizedState,f.state=nt,so(n,r,f,c),ao();var rt=n.memoizedState;g!==gt||nt!==rt||Da||t!==null&&t.dependencies!==null&&pl(t.dependencies)?(typeof A=="function"&&(Qu(n,a,A,r),rt=n.memoizedState),(ft=Da||Rm(n,a,ft,r,nt,rt,z)||t!==null&&t.dependencies!==null&&pl(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,rt,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,rt,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=rt),f.props=r,f.state=rt,f.context=z,r=ft):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Nl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=gs(n,t.child,null,c),n.child=gs(n,null,a,c)):yn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=$i(t,n,c),t}function km(t,n,a,r){return us(),n.flags|=256,yn(t,n,a,r),n.child}var nf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function af(t){return{baseLanes:t,cachePool:Lp()}}function sf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Jn),t}function Xm(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:($e.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(c?Na(n):Oa(),(t=ke)?(t=J0(t,oi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Aa!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=Ep(t),a.return=n,n.child=a,Sn=n,ke=null)):t=null,t===null)throw Ca(n);return Gf(t)?n.lanes=32:n.lanes=536870912,null}var A=r.children;return r=r.fallback,c?(Oa(),c=n.mode,A=Ol({mode:"hidden",children:A},c),r=cs(r,c,a,null),A.return=n,r.return=n,A.sibling=r,n.child=A,r=n.child,r.memoizedState=af(a),r.childLanes=sf(t,g,a),n.memoizedState=nf,uo(null,r)):(Na(n),rf(n,A))}var z=t.memoizedState;if(z!==null&&(A=z.dehydrated,A!==null)){if(f)n.flags&256?(Na(n),n.flags&=-257,n=of(t,n,a)):n.memoizedState!==null?(Oa(),n.child=t.child,n.flags|=128,n=null):(Oa(),A=r.fallback,c=n.mode,r=Ol({mode:"visible",children:r.children},c),A=cs(A,c,a,null),A.flags|=2,r.return=n,A.return=n,r.sibling=A,n.child=r,gs(n,t.child,null,a),r=n.child,r.memoizedState=af(a),r.childLanes=sf(t,g,a),n.memoizedState=nf,n=uo(null,r));else if(Na(n),Gf(A)){if(g=A.nextSibling&&A.nextSibling.dataset,g)var Q=g.dgst;g=Q,r=Error(s(419)),r.stack="",r.digest=g,Jr({value:r,source:null,stack:null}),n=of(t,n,a)}else if(ln||js(t,n,a,!1),g=(a&t.childLanes)!==0,ln||g){if(g=Ve,g!==null&&(r=Qo(g,a),r!==0&&r!==z.retryLane))throw z.retryLane=r,ls(t,r),Vn(g,t,r),tf;Hf(A)||kl(),n=of(t,n,a)}else Hf(A)?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,ke=ci(A.nextSibling),Sn=n,Se=!0,Ra=null,oi=!1,t!==null&&Ap(n,t),n=rf(n,r.children),n.flags|=4096);return n}return c?(Oa(),A=r.fallback,c=n.mode,z=t.child,Q=z.sibling,r=Yi(z,{mode:"hidden",children:r.children}),r.subtreeFlags=z.subtreeFlags&65011712,Q!==null?A=Yi(Q,A):(A=cs(A,c,a,null),A.flags|=2),A.return=n,r.return=n,r.sibling=A,n.child=r,uo(null,r),r=n.child,A=t.child.memoizedState,A===null?A=af(a):(c=A.cachePool,c!==null?(z=rn._currentValue,c=c.parent!==z?{parent:z,pool:z}:c):c=Lp(),A={baseLanes:A.baseLanes|a,cachePool:c}),r.memoizedState=A,r.childLanes=sf(t,g,a),n.memoizedState=nf,uo(t.child,r)):(Na(n),a=t.child,t=a.sibling,a=Yi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function rf(t,n){return n=Ol({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ol(t,n){return t=jn(22,t,null,n),t.lanes=0,t}function of(t,n,a){return gs(n,t.child,null,a),t=rf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Wm(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Mu(t.return,n,a)}function lf(t,n,a,r,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function qm(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var g=$e.current,A=(g&2)!==0;if(A?(g=g&1|2,n.flags|=128):g&=1,_t($e,g),yn(t,n,r,a),r=Se?Qr:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wm(t,a,n);else if(t.tag===19)Wm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&yl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),lf(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&yl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}lf(n,!0,a,null,f,r);break;case"together":lf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function $i(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),za|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(js(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Yi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Yi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function cf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&pl(t)))}function Sx(t,n,a){switch(n.tag){case 3:Tt(n,n.stateNode.containerInfo),wa(n,rn,t.memoizedState.cache),us();break;case 27:case 5:Kt(n);break;case 4:Tt(n,n.stateNode.containerInfo);break;case 10:wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Nu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Na(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Xm(t,n,a):(Na(n),t=$i(t,n,a),t!==null?t.sibling:null);Na(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(js(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return qm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),_t($e,$e.current),r)break;return null;case 22:return n.lanes=0,Fm(t,n,a,n.pendingProps);case 24:wa(n,rn,t.memoizedState.cache)}return $i(t,n,a)}function Ym(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)ln=!0;else{if(!cf(t,a)&&(n.flags&128)===0)return ln=!1,Sx(t,n,a);ln=(t.flags&131072)!==0}else ln=!1,Se&&(n.flags&1048576)!==0&&bp(n,Qr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=ps(n.elementType),n.type=t,typeof t=="function")hu(t)?(r=vs(t,r),n.tag=1,n=Vm(null,n,t,r,a)):(n.tag=0,n=ef(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===N){n.tag=11,n=Pm(null,n,t,r,a);break t}else if(c===F){n.tag=14,n=Im(null,n,t,r,a);break t}}throw n=lt(t)||t,Error(s(306,n,""))}}return n;case 0:return ef(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=vs(r,n.pendingProps),Vm(t,n,r,c,a);case 3:t:{if(Tt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Cu(t,n),so(n,r,null,a);var g=n.memoizedState;if(r=g.cache,wa(n,rn,r),r!==f.cache&&yu(n,[rn],a,!0),ao(),r=g.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=km(t,n,r,a);break t}else if(r!==c){c=ai(Error(s(424)),n),Jr(c),n=km(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,ke=ci(t.firstChild),Sn=n,Se=!0,Ra=null,oi=!0,a=Fp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(us(),r===c){n=$i(t,n,a);break t}yn(t,n,r,a)}n=n.child}return n;case 26:return Nl(t,n),t===null?(a=ag(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,t=n.pendingProps,r=Kl(et.current).createElement(a),r[nn]=n,r[dn]=t,En(r,a,t),X(r),n.stateNode=r):n.memoizedState=ag(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Kt(n),t===null&&Se&&(r=n.stateNode=eg(n.type,n.pendingProps,et.current),Sn=n,oi=!0,c=ke,Va(n.type)?(Vf=c,ke=ci(r.firstChild)):ke=c),yn(t,n,n.pendingProps.children,a),Nl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((c=r=ke)&&(r=Kx(r,n.type,n.pendingProps,oi),r!==null?(n.stateNode=r,Sn=n,ke=ci(r.firstChild),oi=!1,c=!0):c=!1),c||Ca(n)),Kt(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,r=f.children,zf(c,f)?r=null:g!==null&&zf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Pu(t,n,fx,null,null,a),Ao._currentValue=c),Nl(t,n),yn(t,n,r,a),n.child;case 6:return t===null&&Se&&((t=a=ke)&&(a=Qx(a,n.pendingProps,oi),a!==null?(n.stateNode=a,Sn=n,ke=null,t=!0):t=!1),t||Ca(n)),null;case 13:return Xm(t,n,a);case 4:return Tt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=gs(n,null,r,a):yn(t,n,r,a),n.child;case 11:return Pm(t,n,n.type,n.pendingProps,a);case 7:return yn(t,n,n.pendingProps,a),n.child;case 8:return yn(t,n,n.pendingProps.children,a),n.child;case 12:return yn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,wa(n,n.type,r.value),yn(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,ds(n),c=Mn(c),r=r(c),n.flags|=1,yn(t,n,r,a),n.child;case 14:return Im(t,n,n.type,n.pendingProps,a);case 15:return zm(t,n,n.type,n.pendingProps,a);case 19:return qm(t,n,a);case 31:return xx(t,n,a);case 22:return Fm(t,n,a,n.pendingProps);case 24:return ds(n),r=Mn(rn),t===null?(c=bu(),c===null&&(c=Ve,f=Eu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Ru(n),wa(n,rn,c)):((t.lanes&a)!==0&&(Cu(t,n),so(n,null,null,a),ao()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),wa(n,rn,r)):(r=f.cache,wa(n,rn,r),r!==c.cache&&yu(n,[rn],a,!0))),yn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ta(t){t.flags|=4}function uf(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(S0())t.flags|=8192;else throw ms=vl,Au}else t.flags&=-16777217}function jm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!cg(n))if(S0())t.flags|=8192;else throw ms=vl,Au}function Pl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Oe():536870912,t.lanes|=n,rr|=n)}function fo(t,n){if(!Se)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function Mx(t,n,a){var r=n.pendingProps;switch(_u(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(n),null;case 1:return Xe(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ki(rn),kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ys(n)?ta(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,xu())),Xe(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(ta(n),f!==null?(Xe(n),jm(n,f)):(Xe(n),uf(n,c,null,r,a))):f?f!==t.memoizedState?(ta(n),Xe(n),jm(n,f)):(Xe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ta(n),Xe(n),uf(n,c,t,r,a)),null;case 27:if($t(n),a=et.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ta(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Xe(n),null}t=At.current,Ys(n)?Rp(n):(t=eg(c,r,a),n.stateNode=t,ta(n))}return Xe(n),null;case 5:if($t(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ta(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Xe(n),null}if(f=At.current,Ys(n))Rp(n);else{var g=Kl(et.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?g.createElement(c,{is:r.is}):g.createElement(c)}}f[nn]=n,f[dn]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(En(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ta(n)}}return Xe(n),uf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ta(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=et.current,Ys(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=Sn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[nn]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||X0(t.nodeValue,a)),t||Ca(n,!0)}else t=Kl(t).createTextNode(r),t[nn]=n,n.stateNode=t}return Xe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Ys(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[nn]=n}else us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),t=!1}else a=xu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Xe(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ys(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[nn]=n}else us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),c=!1}else c=xu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Pl(n,n.updateQueue),Xe(n),null);case 4:return kt(),t===null&&Lf(n.stateNode.containerInfo),Xe(n),null;case 10:return Ki(n.type),Xe(n),null;case 19:if(Y($e),r=n.memoizedState,r===null)return Xe(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)fo(r,!1);else{if(Je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=yl(t),f!==null){for(n.flags|=128,fo(r,!1),t=f.updateQueue,n.updateQueue=t,Pl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)yp(a,t),a=a.sibling;return _t($e,$e.current&1|2),Se&&ji(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&E()>Hl&&(n.flags|=128,c=!0,fo(r,!1),n.lanes=4194304)}else{if(!c)if(t=yl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Pl(n,t),fo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Se)return Xe(n),null}else 2*E()-r.renderingStartTime>Hl&&a!==536870912&&(n.flags|=128,c=!0,fo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=E(),t.sibling=null,a=$e.current,_t($e,c?a&1|2:a&1),Se&&ji(n,r.treeForkCount),t):(Xe(n),null);case 22:case 23:return Kn(n),Lu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Xe(n),n.subtreeFlags&6&&(n.flags|=8192)):Xe(n),a=n.updateQueue,a!==null&&Pl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&Y(hs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ki(rn),Xe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function yx(t,n){switch(_u(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ki(rn),kt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return $t(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(s(340));us()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Kn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));us()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Y($e),null;case 4:return kt(),null;case 10:return Ki(n.type),null;case 22:case 23:return Kn(n),Lu(),t!==null&&Y(hs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ki(rn),null;case 25:return null;default:return null}}function Zm(t,n){switch(_u(n),n.tag){case 3:Ki(rn),kt();break;case 26:case 27:case 5:$t(n);break;case 4:kt();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:Y($e);break;case 10:Ki(n.type);break;case 22:case 23:Kn(n),Lu(),t!==null&&Y(hs);break;case 24:Ki(rn)}}function ho(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,g=a.inst;r=f(),g.destroy=r}a=a.next}while(a!==c)}}catch(A){Ie(n,n.return,A)}}function Pa(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var g=r.inst,A=g.destroy;if(A!==void 0){g.destroy=void 0,c=n;var z=a,Q=A;try{Q()}catch(ft){Ie(c,z,ft)}}}r=r.next}while(r!==f)}}catch(ft){Ie(n,n.return,ft)}}function Km(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Hp(n,a)}catch(r){Ie(t,t.return,r)}}}function Qm(t,n,a){a.props=vs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Ie(t,n,r)}}function po(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){Ie(t,n,c)}}function Ui(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Ie(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ie(t,n,c)}else a.current=null}function Jm(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Ie(t,t.return,c)}}function ff(t,n,a){try{var r=t.stateNode;Xx(r,t.type,a,n),r[dn]=n}catch(c){Ie(t,t.return,c)}}function $m(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Va(t.type)||t.tag===4}function df(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||$m(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Va(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hf(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wi));else if(r!==4&&(r===27&&Va(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(hf(t,n,a),t=t.sibling;t!==null;)hf(t,n,a),t=t.sibling}function Il(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Va(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Il(t,n,a),t=t.sibling;t!==null;)Il(t,n,a),t=t.sibling}function t0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);En(n,r,a),n[nn]=t,n[dn]=a}catch(f){Ie(t,t.return,f)}}var ea=!1,cn=!1,pf=!1,e0=typeof WeakSet=="function"?WeakSet:Set,vn=null;function Ex(t,n){if(t=t.containerInfo,Pf=ic,t=hp(t),ru(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,A=-1,z=-1,Q=0,ft=0,gt=t,nt=null;e:for(;;){for(var rt;gt!==a||c!==0&&gt.nodeType!==3||(A=g+c),gt!==f||r!==0&&gt.nodeType!==3||(z=g+r),gt.nodeType===3&&(g+=gt.nodeValue.length),(rt=gt.firstChild)!==null;)nt=gt,gt=rt;for(;;){if(gt===t)break e;if(nt===a&&++Q===c&&(A=g),nt===f&&++ft===r&&(z=g),(rt=gt.nextSibling)!==null)break;gt=nt,nt=gt.parentNode}gt=rt}a=A===-1||z===-1?null:{start:A,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(If={focusedElem:t,selectionRange:a},ic=!1,vn=n;vn!==null;)if(n=vn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,vn=t;else for(;vn!==null;){switch(n=vn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Gt=vs(a.type,c);t=r.getSnapshotBeforeUpdate(Gt,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(Jt){Ie(a,a.return,Jt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Bf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Bf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,vn=t;break}vn=n.return}}function n0(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ia(t,a),r&4&&ho(5,a);break;case 1:if(ia(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Ie(a,a.return,g)}else{var c=vs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Ie(a,a.return,g)}}r&64&&Km(a),r&512&&po(a,a.return);break;case 3:if(ia(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Hp(t,n)}catch(g){Ie(a,a.return,g)}}break;case 27:n===null&&r&4&&t0(a);case 26:case 5:ia(t,a),n===null&&r&4&&Jm(a),r&512&&po(a,a.return);break;case 12:ia(t,a);break;case 31:ia(t,a),r&4&&s0(t,a);break;case 13:ia(t,a),r&4&&r0(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Lx.bind(null,a),Jx(t,a))));break;case 22:if(r=a.memoizedState!==null||ea,!r){n=n!==null&&n.memoizedState!==null||cn,c=ea;var f=cn;ea=r,(cn=n)&&!f?aa(t,a,(a.subtreeFlags&8772)!==0):ia(t,a),ea=c,cn=f}break;case 30:break;default:ia(t,a)}}function i0(t){var n=t.alternate;n!==null&&(t.alternate=null,i0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Gr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var je=null,Fn=!1;function na(t,n,a){for(a=a.child;a!==null;)a0(t,n,a),a=a.sibling}function a0(t,n,a){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(yt,a)}catch{}switch(a.tag){case 26:cn||Ui(a,n),na(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Ui(a,n);var r=je,c=Fn;Va(a.type)&&(je=a.stateNode,Fn=!1),na(t,n,a),Eo(a.stateNode),je=r,Fn=c;break;case 5:cn||Ui(a,n);case 6:if(r=je,c=Fn,je=null,na(t,n,a),je=r,Fn=c,je!==null)if(Fn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(f){Ie(a,n,f)}else try{je.removeChild(a.stateNode)}catch(f){Ie(a,n,f)}break;case 18:je!==null&&(Fn?(t=je,K0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),pr(t)):K0(je,a.stateNode));break;case 4:r=je,c=Fn,je=a.stateNode.containerInfo,Fn=!0,na(t,n,a),je=r,Fn=c;break;case 0:case 11:case 14:case 15:Pa(2,a,n),cn||Pa(4,a,n),na(t,n,a);break;case 1:cn||(Ui(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Qm(a,n,r)),na(t,n,a);break;case 21:na(t,n,a);break;case 22:cn=(r=cn)||a.memoizedState!==null,na(t,n,a),cn=r;break;default:na(t,n,a)}}function s0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{pr(t)}catch(a){Ie(n,n.return,a)}}}function r0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{pr(t)}catch(a){Ie(n,n.return,a)}}function Tx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new e0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new e0),n;default:throw Error(s(435,t.tag))}}function zl(t,n){var a=Tx(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=Nx.bind(null,t,r);r.then(c,c)}})}function Bn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,g=n,A=g;t:for(;A!==null;){switch(A.tag){case 27:if(Va(A.type)){je=A.stateNode,Fn=!1;break t}break;case 5:je=A.stateNode,Fn=!1;break t;case 3:case 4:je=A.stateNode.containerInfo,Fn=!0;break t}A=A.return}if(je===null)throw Error(s(160));a0(f,g,c),je=null,Fn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)o0(n,t),n=n.sibling}var xi=null;function o0(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Bn(n,t),Hn(t),r&4&&(Pa(3,t,t.return),ho(3,t),Pa(5,t,t.return));break;case 1:Bn(n,t),Hn(t),r&512&&(cn||a===null||Ui(a,a.return)),r&64&&ea&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=xi;if(Bn(n,t),Hn(t),r&512&&(cn||a===null||Ui(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[is]||f[nn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),En(f,r,a),f[nn]=t,X(f),r=f;break t;case"link":var g=og("link","href",c).get(r+(a.href||""));if(g){for(var A=0;A<g.length;A++)if(f=g[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(A,1);break e}}f=c.createElement(r),En(f,r,a),c.head.appendChild(f);break;case"meta":if(g=og("meta","content",c).get(r+(a.content||""))){for(A=0;A<g.length;A++)if(f=g[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(A,1);break e}}f=c.createElement(r),En(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[nn]=t,X(f),r=f}t.stateNode=r}else lg(c,t.type,t.stateNode);else t.stateNode=rg(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?lg(c,t.type,t.stateNode):rg(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&ff(t,t.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,t),Hn(t),r&512&&(cn||a===null||Ui(a,a.return)),a!==null&&r&4&&ff(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,t),Hn(t),r&512&&(cn||a===null||Ui(a,a.return)),t.flags&32){c=t.stateNode;try{On(c,"")}catch(Gt){Ie(t,t.return,Gt)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,ff(t,c,a!==null?a.memoizedProps:c)),r&1024&&(pf=!0);break;case 6:if(Bn(n,t),Hn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Gt){Ie(t,t.return,Gt)}}break;case 3:if($l=null,c=xi,xi=Ql(n.containerInfo),Bn(n,t),xi=c,Hn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{pr(n.containerInfo)}catch(Gt){Ie(t,t.return,Gt)}pf&&(pf=!1,l0(t));break;case 4:r=xi,xi=Ql(t.stateNode.containerInfo),Bn(n,t),Hn(t),xi=r;break;case 12:Bn(n,t),Hn(t);break;case 31:Bn(n,t),Hn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,zl(t,r)));break;case 13:Bn(n,t),Hn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bl=E()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,zl(t,r)));break;case 22:c=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,Q=ea,ft=cn;if(ea=Q||c,cn=ft||z,Bn(n,t),cn=ft,ea=Q,Hn(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||z||ea||cn||xs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{A=z.stateNode;var gt=z.memoizedProps.style,nt=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;A.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(Gt){Ie(z,z.return,Gt)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(Gt){Ie(z,z.return,Gt)}}}else if(n.tag===18){if(a===null){z=n;try{var rt=z.stateNode;c?Q0(rt,!0):Q0(z.stateNode,!1)}catch(Gt){Ie(z,z.return,Gt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,zl(t,a))));break;case 19:Bn(n,t),Hn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,zl(t,r)));break;case 30:break;case 21:break;default:Bn(n,t),Hn(t)}}function Hn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if($m(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=df(t);Il(t,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(On(g,""),a.flags&=-33);var A=df(t);Il(t,A,g);break;case 3:case 4:var z=a.stateNode.containerInfo,Q=df(t);hf(t,Q,z);break;default:throw Error(s(161))}}catch(ft){Ie(t,t.return,ft)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function l0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;l0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ia(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)n0(t,n.alternate,n),n=n.sibling}function xs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Pa(4,n,n.return),xs(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Qm(n,n.return,a),xs(n);break;case 27:Eo(n.stateNode);case 26:case 5:Ui(n,n.return),xs(n);break;case 22:n.memoizedState===null&&xs(n);break;case 30:xs(n);break;default:xs(n)}t=t.sibling}}function aa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:aa(c,f,a),ho(4,f);break;case 1:if(aa(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){Ie(r,r.return,Q)}if(r=f,c=r.updateQueue,c!==null){var A=r.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)Bp(z[c],A)}catch(Q){Ie(r,r.return,Q)}}a&&g&64&&Km(f),po(f,f.return);break;case 27:t0(f);case 26:case 5:aa(c,f,a),a&&r===null&&g&4&&Jm(f),po(f,f.return);break;case 12:aa(c,f,a);break;case 31:aa(c,f,a),a&&g&4&&s0(c,f);break;case 13:aa(c,f,a),a&&g&4&&r0(c,f);break;case 22:f.memoizedState===null&&aa(c,f,a),po(f,f.return);break;case 30:break;default:aa(c,f,a)}n=n.sibling}}function mf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&$r(a))}function gf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&$r(t))}function Si(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)c0(t,n,a,r),n=n.sibling}function c0(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Si(t,n,a,r),c&2048&&ho(9,n);break;case 1:Si(t,n,a,r);break;case 3:Si(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&$r(t)));break;case 12:if(c&2048){Si(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,A=f.onPostCommit;typeof A=="function"&&A(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Ie(n,n.return,z)}}else Si(t,n,a,r);break;case 31:Si(t,n,a,r);break;case 13:Si(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?Si(t,n,a,r):mo(t,n):f._visibility&2?Si(t,n,a,r):(f._visibility|=2,ir(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&mf(g,n);break;case 24:Si(t,n,a,r),c&2048&&gf(n.alternate,n);break;default:Si(t,n,a,r)}}function ir(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,A=a,z=r,Q=g.flags;switch(g.tag){case 0:case 11:case 15:ir(f,g,A,z,c),ho(8,g);break;case 23:break;case 22:var ft=g.stateNode;g.memoizedState!==null?ft._visibility&2?ir(f,g,A,z,c):mo(f,g):(ft._visibility|=2,ir(f,g,A,z,c)),c&&Q&2048&&mf(g.alternate,g);break;case 24:ir(f,g,A,z,c),c&&Q&2048&&gf(g.alternate,g);break;default:ir(f,g,A,z,c)}n=n.sibling}}function mo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:mo(a,r),c&2048&&mf(r.alternate,r);break;case 24:mo(a,r),c&2048&&gf(r.alternate,r);break;default:mo(a,r)}n=n.sibling}}var go=8192;function ar(t,n,a){if(t.subtreeFlags&go)for(t=t.child;t!==null;)u0(t,n,a),t=t.sibling}function u0(t,n,a){switch(t.tag){case 26:ar(t,n,a),t.flags&go&&t.memoizedState!==null&&uS(a,xi,t.memoizedState,t.memoizedProps);break;case 5:ar(t,n,a);break;case 3:case 4:var r=xi;xi=Ql(t.stateNode.containerInfo),ar(t,n,a),xi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=go,go=16777216,ar(t,n,a),go=r):ar(t,n,a));break;default:ar(t,n,a)}}function f0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function _o(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];vn=r,h0(r,t)}f0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)d0(t),t=t.sibling}function d0(t){switch(t.tag){case 0:case 11:case 15:_o(t),t.flags&2048&&Pa(9,t,t.return);break;case 3:_o(t);break;case 12:_o(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Fl(t)):_o(t);break;default:_o(t)}}function Fl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];vn=r,h0(r,t)}f0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Pa(8,n,n.return),Fl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Fl(n));break;default:Fl(n)}t=t.sibling}}function h0(t,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Pa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:$r(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,vn=r;else t:for(a=t;vn!==null;){r=vn;var c=r.sibling,f=r.return;if(i0(r),r===a){vn=null;break t}if(c!==null){c.return=f,vn=c;break t}vn=f}}}var bx={getCacheForType:function(t){var n=Mn(rn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Mn(rn).controller.signal}},Ax=typeof WeakMap=="function"?WeakMap:Map,De=0,Ve=null,me=null,ve=0,Pe=0,Qn=null,Ia=!1,sr=!1,_f=!1,sa=0,Je=0,za=0,Ss=0,vf=0,Jn=0,rr=0,vo=null,Gn=null,xf=!1,Bl=0,p0=0,Hl=1/0,Gl=null,Fa=null,pn=0,Ba=null,or=null,ra=0,Sf=0,Mf=null,m0=null,xo=0,yf=null;function $n(){return(De&2)!==0&&ve!==0?ve&-ve:L.T!==null?Cf():Ci()}function g0(){if(Jn===0)if((ve&536870912)===0||Se){var t=bt;bt<<=1,(bt&3932160)===0&&(bt=262144),Jn=t}else Jn=536870912;return t=Zn.current,t!==null&&(t.flags|=32),Jn}function Vn(t,n,a){(t===Ve&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)&&(lr(t,0),Ha(t,ve,Jn,!1)),Un(t,a),((De&2)===0||t!==Ve)&&(t===Ve&&((De&2)===0&&(Ss|=a),Je===4&&Ha(t,ve,Jn,!1)),Li(t))}function _0(t,n,a){if((De&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Bt(t,n),c=r?wx(t,n):Tf(t,n,!0),f=r;do{if(c===0){sr&&!r&&Ha(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Rx(a)){c=Tf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var A=t;c=vo;var z=A.current.memoizedState.isDehydrated;if(z&&(lr(A,g).flags|=256),g=Tf(A,g,!1),g!==2){if(_f&&!z){A.errorRecoveryDisabledLanes|=f,Ss|=f,c=4;break t}f=Gn,Gn=c,f!==null&&(Gn===null?Gn=f:Gn.push.apply(Gn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){lr(t,0),Ha(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ha(r,n,Jn,!Ia);break t;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Bl+300-E(),10<c)){if(Ha(r,n,Jn,!Ia),ct(r,0,!0)!==0)break t;ra=n,r.timeoutHandle=j0(v0.bind(null,r,a,Gn,Gl,xf,n,Jn,Ss,rr,Ia,f,"Throttled",-0,0),c);break t}v0(r,a,Gn,Gl,xf,n,Jn,Ss,rr,Ia,f,null,-0,0)}}break}while(!0);Li(t)}function v0(t,n,a,r,c,f,g,A,z,Q,ft,gt,nt,rt){if(t.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},u0(n,f,gt);var Gt=(f&62914560)===f?Bl-E():(f&4194048)===f?p0-E():0;if(Gt=fS(gt,Gt),Gt!==null){ra=f,t.cancelPendingCommit=Gt(A0.bind(null,t,n,f,a,r,c,g,A,z,ft,gt,null,nt,rt)),Ha(t,f,g,!Q);return}}A0(t,n,f,a,r,c,g,A,z)}function Rx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Yn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ha(t,n,a,r){n&=~vf,n&=~Ss,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-Nt(c),g=1<<f;r[f]=-1,c&=~g}a!==0&&Hr(t,a,n)}function Vl(){return(De&6)===0?(So(0),!1):!0}function Ef(){if(me!==null){if(Pe===0)var t=me.return;else t=me,Zi=fs=null,Fu(t),Js=null,eo=0,t=me;for(;t!==null;)Zm(t.alternate,t),t=t.return;me=null}}function lr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Yx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ra=0,Ef(),Ve=t,me=a=Yi(t.current,null),ve=n,Pe=0,Qn=null,Ia=!1,sr=Bt(t,n),_f=!1,rr=Jn=vf=Ss=za=Je=0,Gn=vo=null,xf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-Nt(r),f=1<<c;n|=t[c],r&=~f}return sa=n,cl(),a}function x0(t,n){le=null,L.H=co,n===Qs||n===_l?(n=Pp(),Pe=3):n===Au?(n=Pp(),Pe=4):Pe=n===tf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,me===null&&(Je=1,Ul(t,ai(n,t.current)))}function S0(){var t=Zn.current;return t===null?!0:(ve&4194048)===ve?li===null:(ve&62914560)===ve||(ve&536870912)!==0?t===li:!1}function M0(){var t=L.H;return L.H=co,t===null?co:t}function y0(){var t=L.A;return L.A=bx,t}function kl(){Je=4,Ia||(ve&4194048)!==ve&&Zn.current!==null||(sr=!0),(za&134217727)===0&&(Ss&134217727)===0||Ve===null||Ha(Ve,ve,Jn,!1)}function Tf(t,n,a){var r=De;De|=2;var c=M0(),f=y0();(Ve!==t||ve!==n)&&(Gl=null,lr(t,n)),n=!1;var g=Je;t:do try{if(Pe!==0&&me!==null){var A=me,z=Qn;switch(Pe){case 8:Ef(),g=6;break t;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var Q=Pe;if(Pe=0,Qn=null,cr(t,A,z,Q),a&&sr){g=0;break t}break;default:Q=Pe,Pe=0,Qn=null,cr(t,A,z,Q)}}Cx(),g=Je;break}catch(ft){x0(t,ft)}while(!0);return n&&t.shellSuspendCounter++,Zi=fs=null,De=r,L.H=c,L.A=f,me===null&&(Ve=null,ve=0,cl()),g}function Cx(){for(;me!==null;)E0(me)}function wx(t,n){var a=De;De|=2;var r=M0(),c=y0();Ve!==t||ve!==n?(Gl=null,Hl=E()+500,lr(t,n)):sr=Bt(t,n);t:do try{if(Pe!==0&&me!==null){n=me;var f=Qn;e:switch(Pe){case 1:Pe=0,Qn=null,cr(t,n,f,1);break;case 2:case 9:if(Np(f)){Pe=0,Qn=null,T0(n);break}n=function(){Pe!==2&&Pe!==9||Ve!==t||(Pe=7),Li(t)},f.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:Np(f)?(Pe=0,Qn=null,T0(n)):(Pe=0,Qn=null,cr(t,n,f,7));break;case 5:var g=null;switch(me.tag){case 26:g=me.memoizedState;case 5:case 27:var A=me;if(g?cg(g):A.stateNode.complete){Pe=0,Qn=null;var z=A.sibling;if(z!==null)me=z;else{var Q=A.return;Q!==null?(me=Q,Xl(Q)):me=null}break e}}Pe=0,Qn=null,cr(t,n,f,5);break;case 6:Pe=0,Qn=null,cr(t,n,f,6);break;case 8:Ef(),Je=6;break t;default:throw Error(s(462))}}Dx();break}catch(ft){x0(t,ft)}while(!0);return Zi=fs=null,L.H=r,L.A=c,De=a,me!==null?0:(Ve=null,ve=0,cl(),Je)}function Dx(){for(;me!==null&&!qt();)E0(me)}function E0(t){var n=Ym(t.alternate,t,sa);t.memoizedProps=t.pendingProps,n===null?Xl(t):me=n}function T0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Gm(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=Gm(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:Fu(n);default:Zm(a,n),n=me=yp(n,sa),n=Ym(a,n,sa)}t.memoizedProps=t.pendingProps,n===null?Xl(t):me=n}function cr(t,n,a,r){Zi=fs=null,Fu(n),Js=null,eo=0;var c=n.return;try{if(vx(t,c,n,a,ve)){Je=1,Ul(t,ai(a,t.current)),me=null;return}}catch(f){if(c!==null)throw me=c,f;Je=1,Ul(t,ai(a,t.current)),me=null;return}n.flags&32768?(Se||r===1?t=!0:sr||(ve&536870912)!==0?t=!1:(Ia=t=!0,(r===2||r===9||r===3||r===6)&&(r=Zn.current,r!==null&&r.tag===13&&(r.flags|=16384))),b0(n,t)):Xl(n)}function Xl(t){var n=t;do{if((n.flags&32768)!==0){b0(n,Ia);return}t=n.return;var a=Mx(n.alternate,n,sa);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=t}while(n!==null);Je===0&&(Je=5)}function b0(t,n){do{var a=yx(t.alternate,t);if(a!==null){a.flags&=32767,me=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){me=t;return}me=t=a}while(t!==null);Je=6,me=null}function A0(t,n,a,r,c,f,g,A,z){t.cancelPendingCommit=null;do Wl();while(pn!==0);if((De&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=fu,pi(t,a,f,g,A,z),t===Ve&&(me=Ve=null,ve=0),or=n,Ba=t,ra=a,Sf=f,Mf=c,m0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ox(ut,function(){return U0(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=L.T,L.T=null,c=I.p,I.p=2,g=De,De|=4;try{Ex(t,n,a)}finally{De=g,I.p=c,L.T=r}}pn=1,R0(),C0(),w0()}}function R0(){if(pn===1){pn=0;var t=Ba,n=or,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var r=I.p;I.p=2;var c=De;De|=4;try{o0(n,t);var f=If,g=hp(t.containerInfo),A=f.focusedElem,z=f.selectionRange;if(g!==A&&A&&A.ownerDocument&&dp(A.ownerDocument.documentElement,A)){if(z!==null&&ru(A)){var Q=z.start,ft=z.end;if(ft===void 0&&(ft=Q),"selectionStart"in A)A.selectionStart=Q,A.selectionEnd=Math.min(ft,A.value.length);else{var gt=A.ownerDocument||document,nt=gt&&gt.defaultView||window;if(nt.getSelection){var rt=nt.getSelection(),Gt=A.textContent.length,Jt=Math.min(z.start,Gt),He=z.end===void 0?Jt:Math.min(z.end,Gt);!rt.extend&&Jt>He&&(g=He,He=Jt,Jt=g);var j=fp(A,Jt),V=fp(A,He);if(j&&V&&(rt.rangeCount!==1||rt.anchorNode!==j.node||rt.anchorOffset!==j.offset||rt.focusNode!==V.node||rt.focusOffset!==V.offset)){var K=gt.createRange();K.setStart(j.node,j.offset),rt.removeAllRanges(),Jt>He?(rt.addRange(K),rt.extend(V.node,V.offset)):(K.setEnd(V.node,V.offset),rt.addRange(K))}}}}for(gt=[],rt=A;rt=rt.parentNode;)rt.nodeType===1&&gt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<gt.length;A++){var mt=gt[A];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}ic=!!Pf,If=Pf=null}finally{De=c,I.p=r,L.T=a}}t.current=n,pn=2}}function C0(){if(pn===2){pn=0;var t=Ba,n=or,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var r=I.p;I.p=2;var c=De;De|=4;try{n0(t,n.alternate,n)}finally{De=c,I.p=r,L.T=a}}pn=3}}function w0(){if(pn===4||pn===3){pn=0,U();var t=Ba,n=or,a=ra,r=m0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,or=Ba=null,D0(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Fa=null),Ps(a),n=n.stateNode,St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(yt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=L.T,c=I.p,I.p=2,L.T=null;try{for(var f=t.onRecoverableError,g=0;g<r.length;g++){var A=r[g];f(A.value,{componentStack:A.stack})}}finally{L.T=n,I.p=c}}(ra&3)!==0&&Wl(),Li(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===yf?xo++:(xo=0,yf=t):xo=0,So(0)}}function D0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,$r(n)))}function Wl(){return R0(),C0(),w0(),U0()}function U0(){if(pn!==5)return!1;var t=Ba,n=Sf;Sf=0;var a=Ps(ra),r=L.T,c=I.p;try{I.p=32>a?32:a,L.T=null,a=Mf,Mf=null;var f=Ba,g=ra;if(pn=0,or=Ba=null,ra=0,(De&6)!==0)throw Error(s(331));var A=De;if(De|=4,d0(f.current),c0(f,f.current,g,a),De=A,So(0,!1),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(yt,f)}catch{}return!0}finally{I.p=c,L.T=r,D0(t,n)}}function L0(t,n,a){n=ai(a,n),n=$u(t.stateNode,n,2),t=La(t,n,2),t!==null&&(Un(t,2),Li(t))}function Ie(t,n,a){if(t.tag===3)L0(t,t,a);else for(;n!==null;){if(n.tag===3){L0(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fa===null||!Fa.has(r))){t=ai(a,t),a=Nm(2),r=La(n,a,2),r!==null&&(Om(a,r,n,t),Un(r,2),Li(r));break}}n=n.return}}function bf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Ax;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(_f=!0,c.add(a),t=Ux.bind(null,t,n,a),n.then(t,t))}function Ux(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ve===t&&(ve&a)===a&&(Je===4||Je===3&&(ve&62914560)===ve&&300>E()-Bl?(De&2)===0&&lr(t,0):vf|=a,rr===ve&&(rr=0)),Li(t)}function N0(t,n){n===0&&(n=Oe()),t=ls(t,n),t!==null&&(Un(t,n),Li(t))}function Lx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),N0(t,a)}function Nx(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),N0(t,a)}function Ox(t,n){return ye(t,n)}var ql=null,ur=null,Af=!1,Yl=!1,Rf=!1,Ga=0;function Li(t){t!==ur&&t.next===null&&(ur===null?ql=ur=t:ur=ur.next=t),Yl=!0,Af||(Af=!0,Ix())}function So(t,n){if(!Rf&&Yl){Rf=!0;do for(var a=!1,r=ql;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var g=r.suspendedLanes,A=r.pingedLanes;f=(1<<31-Nt(42|t)+1)-1,f&=c&~(g&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,z0(r,f))}else f=ve,f=ct(r,r===Ve?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Bt(r,f)||(a=!0,z0(r,f));r=r.next}while(a);Rf=!1}}function Px(){O0()}function O0(){Yl=Af=!1;var t=0;Ga!==0&&qx()&&(t=Ga);for(var n=E(),a=null,r=ql;r!==null;){var c=r.next,f=P0(r,n);f===0?(r.next=null,a===null?ql=c:a.next=c,c===null&&(ur=a)):(a=r,(t!==0||(f&3)!==0)&&(Yl=!0)),r=c}pn!==0&&pn!==5||So(t),Ga!==0&&(Ga=0)}function P0(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Nt(f),A=1<<g,z=c[g];z===-1?((A&a)===0||(A&r)!==0)&&(c[g]=ne(A,n)):z<=n&&(t.expiredLanes|=A),f&=~A}if(n=Ve,a=ve,a=ct(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Le(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Bt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Le(r),Ps(a)){case 2:case 8:a=xt;break;case 32:a=ut;break;case 268435456:a=Ct;break;default:a=ut}return r=I0.bind(null,t),a=ye(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Le(r),t.callbackPriority=2,t.callbackNode=null,2}function I0(t,n){if(pn!==0&&pn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Wl()&&t.callbackNode!==a)return null;var r=ve;return r=ct(t,t===Ve?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(_0(t,r,n),P0(t,E()),t.callbackNode!=null&&t.callbackNode===a?I0.bind(null,t):null)}function z0(t,n){if(Wl())return null;_0(t,n,!0)}function Ix(){jx(function(){(De&6)!==0?ye(ht,Px):O0()})}function Cf(){if(Ga===0){var t=Zs;t===0&&(t=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),Ga=t}return Ga}function F0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:el(""+t)}function B0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function zx(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=F0((c[dn]||null).action),g=r.submitter;g&&(n=(n=g[dn]||null)?F0(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var A=new sl("action","action",null,r,c);t.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ga!==0){var z=g?B0(c,g):new FormData(c);Yu(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(A.preventDefault(),z=g?B0(c,g):new FormData(c),Yu(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var wf=0;wf<uu.length;wf++){var Df=uu[wf],Fx=Df.toLowerCase(),Bx=Df[0].toUpperCase()+Df.slice(1);vi(Fx,"on"+Bx)}vi(gp,"onAnimationEnd"),vi(_p,"onAnimationIteration"),vi(vp,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(ex,"onTransitionRun"),vi(nx,"onTransitionStart"),vi(ix,"onTransitionCancel"),vi(xp,"onTransitionEnd"),wt("onMouseEnter",["mouseout","mouseover"]),wt("onMouseLeave",["mouseout","mouseover"]),wt("onPointerEnter",["pointerout","pointerover"]),wt("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function H0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var g=r.length-1;0<=g;g--){var A=r[g],z=A.instance,Q=A.currentTarget;if(A=A.listener,z!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=Q;try{f(c)}catch(ft){ll(ft)}c.currentTarget=null,f=z}else for(g=0;g<r.length;g++){if(A=r[g],z=A.instance,Q=A.currentTarget,A=A.listener,z!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=Q;try{f(c)}catch(ft){ll(ft)}c.currentTarget=null,f=z}}}}function ge(t,n){var a=n[ya];a===void 0&&(a=n[ya]=new Set);var r=t+"__bubble";a.has(r)||(G0(n,t,2,!1),a.add(r))}function Uf(t,n,a){var r=0;n&&(r|=4),G0(a,t,r,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Lf(t){if(!t[jl]){t[jl]=!0,st.forEach(function(a){a!=="selectionchange"&&(Hx.has(a)||Uf(a,!1,t),Uf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[jl]||(n[jl]=!0,Uf("selectionchange",!1,n))}}function G0(t,n,a,r){switch(gg(n)){case 2:var c=pS;break;case 8:c=mS;break;default:c=Yf}a=c.bind(null,n,a,t),c=void 0,!Qc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Nf(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var A=r.stateNode.containerInfo;if(A===c)break;if(g===4)for(g=r.return;g!==null;){var z=g.tag;if((z===3||z===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;A!==null;){if(g=Ea(A),g===null)return;if(z=g.tag,z===5||z===6||z===26||z===27){r=f=g;continue t}A=A.parentNode}}r=r.return}qh(function(){var Q=f,ft=Zc(a),gt=[];t:{var nt=Sp.get(t);if(nt!==void 0){var rt=sl,Gt=t;switch(t){case"keypress":if(il(a)===0)break t;case"keydown":case"keyup":rt=Nv;break;case"focusin":Gt="focus",rt=eu;break;case"focusout":Gt="blur",rt=eu;break;case"beforeblur":case"afterblur":rt=eu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=Zh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=Mv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=Iv;break;case gp:case _p:case vp:rt=Tv;break;case xp:rt=Fv;break;case"scroll":case"scrollend":rt=xv;break;case"wheel":rt=Hv;break;case"copy":case"cut":case"paste":rt=Av;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=Qh;break;case"toggle":case"beforetoggle":rt=Vv}var Jt=(n&4)!==0,He=!Jt&&(t==="scroll"||t==="scrollend"),j=Jt?nt!==null?nt+"Capture":null:nt;Jt=[];for(var V=Q,K;V!==null;){var mt=V;if(K=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||K===null||j===null||(mt=Vr(V,j),mt!=null&&Jt.push(yo(V,mt,K))),He)break;V=V.return}0<Jt.length&&(nt=new rt(nt,Gt,null,a,ft),gt.push({event:nt,listeners:Jt}))}}if((n&7)===0){t:{if(nt=t==="mouseover"||t==="pointerover",rt=t==="mouseout"||t==="pointerout",nt&&a!==jc&&(Gt=a.relatedTarget||a.fromElement)&&(Ea(Gt)||Gt[ki]))break t;if((rt||nt)&&(nt=ft.window===ft?ft:(nt=ft.ownerDocument)?nt.defaultView||nt.parentWindow:window,rt?(Gt=a.relatedTarget||a.toElement,rt=Q,Gt=Gt?Ea(Gt):null,Gt!==null&&(He=u(Gt),Jt=Gt.tag,Gt!==He||Jt!==5&&Jt!==27&&Jt!==6)&&(Gt=null)):(rt=null,Gt=Q),rt!==Gt)){if(Jt=Zh,mt="onMouseLeave",j="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Jt=Qh,mt="onPointerLeave",j="onPointerEnter",V="pointer"),He=rt==null?nt:as(rt),K=Gt==null?nt:as(Gt),nt=new Jt(mt,V+"leave",rt,a,ft),nt.target=He,nt.relatedTarget=K,mt=null,Ea(ft)===Q&&(Jt=new Jt(j,V+"enter",Gt,a,ft),Jt.target=K,Jt.relatedTarget=He,mt=Jt),He=mt,rt&&Gt)e:{for(Jt=Gx,j=rt,V=Gt,K=0,mt=j;mt;mt=Jt(mt))K++;mt=0;for(var Qt=V;Qt;Qt=Jt(Qt))mt++;for(;0<K-mt;)j=Jt(j),K--;for(;0<mt-K;)V=Jt(V),mt--;for(;K--;){if(j===V||V!==null&&j===V.alternate){Jt=j;break e}j=Jt(j),V=Jt(V)}Jt=null}else Jt=null;rt!==null&&V0(gt,nt,rt,Jt,!1),Gt!==null&&He!==null&&V0(gt,He,Gt,Jt,!0)}}t:{if(nt=Q?as(Q):window,rt=nt.nodeName&&nt.nodeName.toLowerCase(),rt==="select"||rt==="input"&&nt.type==="file")var Ae=sp;else if(ip(nt))if(rp)Ae=Jv;else{Ae=Kv;var Yt=Zv}else rt=nt.nodeName,!rt||rt.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?Q&&zs(Q.elementType)&&(Ae=sp):Ae=Qv;if(Ae&&(Ae=Ae(t,Q))){ap(gt,Ae,a,ft);break t}Yt&&Yt(t,nt,Q),t==="focusout"&&Q&&nt.type==="number"&&Q.memoizedProps.value!=null&&gi(nt,"number",nt.value)}switch(Yt=Q?as(Q):window,t){case"focusin":(ip(Yt)||Yt.contentEditable==="true")&&(Gs=Yt,ou=Q,Kr=null);break;case"focusout":Kr=ou=Gs=null;break;case"mousedown":lu=!0;break;case"contextmenu":case"mouseup":case"dragend":lu=!1,pp(gt,a,ft);break;case"selectionchange":if(tx)break;case"keydown":case"keyup":pp(gt,a,ft)}var fe;if(iu)t:{switch(t){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Hs?ep(t,a)&&(xe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(Jh&&a.locale!=="ko"&&(Hs||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Hs&&(fe=Yh()):(ba=ft,Jc="value"in ba?ba.value:ba.textContent,Hs=!0)),Yt=Zl(Q,xe),0<Yt.length&&(xe=new Kh(xe,t,null,a,ft),gt.push({event:xe,listeners:Yt}),fe?xe.data=fe:(fe=np(a),fe!==null&&(xe.data=fe)))),(fe=Xv?Wv(t,a):qv(t,a))&&(xe=Zl(Q,"onBeforeInput"),0<xe.length&&(Yt=new Kh("onBeforeInput","beforeinput",null,a,ft),gt.push({event:Yt,listeners:xe}),Yt.data=fe)),zx(gt,t,Q,a,ft)}H0(gt,n)})}function yo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Zl(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Vr(t,a),c!=null&&r.unshift(yo(t,c,f)),c=Vr(t,n),c!=null&&r.push(yo(t,c,f))),t.tag===3)return r;t=t.return}return[]}function Gx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function V0(t,n,a,r,c){for(var f=n._reactName,g=[];a!==null&&a!==r;){var A=a,z=A.alternate,Q=A.stateNode;if(A=A.tag,z!==null&&z===r)break;A!==5&&A!==26&&A!==27||Q===null||(z=Q,c?(Q=Vr(a,f),Q!=null&&g.unshift(yo(a,Q,z))):c||(Q=Vr(a,f),Q!=null&&g.push(yo(a,Q,z)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Vx=/\r\n?/g,kx=/\u0000|\uFFFD/g;function k0(t){return(typeof t=="string"?t:""+t).replace(Vx,`
`).replace(kx,"")}function X0(t,n){return n=k0(n),k0(t)===n}function Be(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||On(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&On(t,""+r);break;case"className":ae(t,"class",r);break;case"tabIndex":ae(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ae(t,a,r);break;case"style":Xi(t,r,f);break;case"data":if(n!=="object"){ae(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=el(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Be(t,n,"name",c.name,c,null),Be(t,n,"formEncType",c.formEncType,c,null),Be(t,n,"formMethod",c.formMethod,c,null),Be(t,n,"formTarget",c.formTarget,c,null)):(Be(t,n,"encType",c.encType,c,null),Be(t,n,"method",c.method,c,null),Be(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=el(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Wi);break;case"onScroll":r!=null&&ge("scroll",t);break;case"onScrollEnd":r!=null&&ge("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=el(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":ge("beforetoggle",t),ge("toggle",t),ee(t,"popover",r);break;case"xlinkActuate":Ht(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ht(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ht(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ht(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ht(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ht(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ht(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ht(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ht(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ee(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=_v.get(a)||a,ee(t,a,r))}}function Of(t,n,a,r,c,f){switch(a){case"style":Xi(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?On(t,r):(typeof r=="number"||typeof r=="bigint")&&On(t,""+r);break;case"onScroll":r!=null&&ge("scroll",t);break;case"onScrollEnd":r!=null&&ge("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Wi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!tt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[dn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):ee(t,a,r)}}}function En(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",t),ge("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(t,n,f,g,a,null)}}c&&Be(t,n,"srcSet",a.srcSet,a,null),r&&Be(t,n,"src",a.src,a,null);return;case"input":ge("invalid",t);var A=f=g=c=null,z=null,Q=null;for(r in a)if(a.hasOwnProperty(r)){var ft=a[r];if(ft!=null)switch(r){case"name":c=ft;break;case"type":g=ft;break;case"checked":z=ft;break;case"defaultChecked":Q=ft;break;case"value":f=ft;break;case"defaultValue":A=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:Be(t,n,r,ft,a,null)}}Wn(t,f,A,z,Q,g,c,!1);return;case"select":ge("invalid",t),r=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":f=A;break;case"defaultValue":g=A;break;case"multiple":r=A;default:Be(t,n,c,A,a,null)}n=f,a=g,t.multiple=!!r,n!=null?qn(t,!!r,n,!1):a!=null&&qn(t,!!r,a,!0);return;case"textarea":ge("invalid",t),f=c=r=null;for(g in a)if(a.hasOwnProperty(g)&&(A=a[g],A!=null))switch(g){case"value":r=A;break;case"defaultValue":c=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Be(t,n,g,A,a,null)}an(t,r,c,f);return;case"option":for(z in a)a.hasOwnProperty(z)&&(r=a[z],r!=null)&&(z==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":Be(t,n,z,r,a,null));return;case"dialog":ge("beforetoggle",t),ge("toggle",t),ge("cancel",t),ge("close",t);break;case"iframe":case"object":ge("load",t);break;case"video":case"audio":for(r=0;r<Mo.length;r++)ge(Mo[r],t);break;case"image":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"embed":case"source":case"link":ge("error",t),ge("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(r=a[Q],r!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(t,n,Q,r,a,null)}return;default:if(zs(n)){for(ft in a)a.hasOwnProperty(ft)&&(r=a[ft],r!==void 0&&Of(t,n,ft,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&Be(t,n,A,r,a,null))}function Xx(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,A=null,z=null,Q=null,ft=null;for(rt in a){var gt=a[rt];if(a.hasOwnProperty(rt)&&gt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":z=gt;default:r.hasOwnProperty(rt)||Be(t,n,rt,null,r,gt)}}for(var nt in r){var rt=r[nt];if(gt=a[nt],r.hasOwnProperty(nt)&&(rt!=null||gt!=null))switch(nt){case"type":f=rt;break;case"name":c=rt;break;case"checked":Q=rt;break;case"defaultChecked":ft=rt;break;case"value":g=rt;break;case"defaultValue":A=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:rt!==gt&&Be(t,n,nt,rt,r,gt)}}Nn(t,g,A,z,Q,ft,f,c);return;case"select":rt=g=A=nt=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":rt=z;default:r.hasOwnProperty(f)||Be(t,n,f,null,r,z)}for(c in r)if(f=r[c],z=a[c],r.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":nt=f;break;case"defaultValue":A=f;break;case"multiple":g=f;default:f!==z&&Be(t,n,c,f,r,z)}n=A,a=g,r=rt,nt!=null?qn(t,!!a,nt,!1):!!r!=!!a&&(n!=null?qn(t,!!a,n,!0):qn(t,!!a,a?[]:"",!1));return;case"textarea":rt=nt=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Be(t,n,A,null,r,c)}for(g in r)if(c=r[g],f=a[g],r.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":nt=c;break;case"defaultValue":rt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Be(t,n,g,c,r,f)}Ne(t,nt,rt);return;case"option":for(var Gt in a)nt=a[Gt],a.hasOwnProperty(Gt)&&nt!=null&&!r.hasOwnProperty(Gt)&&(Gt==="selected"?t.selected=!1:Be(t,n,Gt,null,r,nt));for(z in r)nt=r[z],rt=a[z],r.hasOwnProperty(z)&&nt!==rt&&(nt!=null||rt!=null)&&(z==="selected"?t.selected=nt&&typeof nt!="function"&&typeof nt!="symbol":Be(t,n,z,nt,r,rt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)nt=a[Jt],a.hasOwnProperty(Jt)&&nt!=null&&!r.hasOwnProperty(Jt)&&Be(t,n,Jt,null,r,nt);for(Q in r)if(nt=r[Q],rt=a[Q],r.hasOwnProperty(Q)&&nt!==rt&&(nt!=null||rt!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:Be(t,n,Q,nt,r,rt)}return;default:if(zs(n)){for(var He in a)nt=a[He],a.hasOwnProperty(He)&&nt!==void 0&&!r.hasOwnProperty(He)&&Of(t,n,He,void 0,r,nt);for(ft in r)nt=r[ft],rt=a[ft],!r.hasOwnProperty(ft)||nt===rt||nt===void 0&&rt===void 0||Of(t,n,ft,nt,r,rt);return}}for(var j in a)nt=a[j],a.hasOwnProperty(j)&&nt!=null&&!r.hasOwnProperty(j)&&Be(t,n,j,null,r,nt);for(gt in r)nt=r[gt],rt=a[gt],!r.hasOwnProperty(gt)||nt===rt||nt==null&&rt==null||Be(t,n,gt,nt,r,rt)}function W0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Wx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,g=c.initiatorType,A=c.duration;if(f&&A&&W0(g)){for(g=0,A=c.responseEnd,r+=1;r<a.length;r++){var z=a[r],Q=z.startTime;if(Q>A)break;var ft=z.transferSize,gt=z.initiatorType;ft&&W0(gt)&&(z=z.responseEnd,g+=ft*(z<A?1:(A-Q)/(z-Q)))}if(--r,n+=8*(f+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Pf=null,If=null;function Kl(t){return t.nodeType===9?t:t.ownerDocument}function q0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Y0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function zf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ff=null;function qx(){var t=window.event;return t&&t.type==="popstate"?t===Ff?!1:(Ff=t,!0):(Ff=null,!1)}var j0=typeof setTimeout=="function"?setTimeout:void 0,Yx=typeof clearTimeout=="function"?clearTimeout:void 0,Z0=typeof Promise=="function"?Promise:void 0,jx=typeof queueMicrotask=="function"?queueMicrotask:typeof Z0<"u"?function(t){return Z0.resolve(null).then(t).catch(Zx)}:j0;function Zx(t){setTimeout(function(){throw t})}function Va(t){return t==="head"}function K0(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),pr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Eo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Eo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,A=f.nodeName;f[is]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&Eo(t.ownerDocument.body);a=c}while(a);pr(n)}function Q0(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Bf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Bf(a),Gr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Kx(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[is])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ci(t.nextSibling),t===null)break}return null}function Qx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ci(t.nextSibling),t===null))return null;return t}function J0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ci(t.nextSibling),t===null))return null;return t}function Hf(t){return t.data==="$?"||t.data==="$~"}function Gf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Jx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Vf=null;function $0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ci(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function tg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function eg(t,n,a){switch(n=Kl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Eo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Gr(t)}var ui=new Map,ng=new Set;function Ql(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var oa=I.d;I.d={f:$x,r:tS,D:eS,C:nS,L:iS,m:aS,X:rS,S:sS,M:oS};function $x(){var t=oa.f(),n=Vl();return t||n}function tS(t){var n=Ta(t);n!==null&&n.tag===5&&n.type==="form"?xm(n):oa.r(t)}var fr=typeof document>"u"?null:document;function ig(t,n,a){var r=fr;if(r&&typeof n=="string"&&n){var c=ie(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),ng.has(c)||(ng.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),En(n,"link",t),X(n),r.head.appendChild(n)))}}function eS(t){oa.D(t),ig("dns-prefetch",t,null)}function nS(t,n){oa.C(t,n),ig("preconnect",t,n)}function iS(t,n,a){oa.L(t,n,a);var r=fr;if(r&&t&&n){var c='link[rel="preload"][as="'+ie(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+ie(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+ie(a.imageSizes)+'"]')):c+='[href="'+ie(t)+'"]';var f=c;switch(n){case"style":f=dr(t);break;case"script":f=hr(t)}ui.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ui.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(To(f))||n==="script"&&r.querySelector(bo(f))||(n=r.createElement("link"),En(n,"link",t),X(n),r.head.appendChild(n)))}}function aS(t,n){oa.m(t,n);var a=fr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+ie(r)+'"][href="'+ie(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=hr(t)}if(!ui.has(f)&&(t=x({rel:"modulepreload",href:t},n),ui.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bo(f)))return}r=a.createElement("link"),En(r,"link",t),X(r),a.head.appendChild(r)}}}function sS(t,n,a){oa.S(t,n,a);var r=fr;if(r&&t){var c=R(r).hoistableStyles,f=dr(t);n=n||"default";var g=c.get(f);if(!g){var A={loading:0,preload:null};if(g=r.querySelector(To(f)))A.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ui.get(f))&&kf(t,a);var z=g=r.createElement("link");X(z),En(z,"link",t),z._p=new Promise(function(Q,ft){z.onload=Q,z.onerror=ft}),z.addEventListener("load",function(){A.loading|=1}),z.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Jl(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:A},c.set(f,g)}}}function rS(t,n){oa.X(t,n);var a=fr;if(a&&t){var r=R(a).hoistableScripts,c=hr(t),f=r.get(c);f||(f=a.querySelector(bo(c)),f||(t=x({src:t,async:!0},n),(n=ui.get(c))&&Xf(t,n),f=a.createElement("script"),X(f),En(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function oS(t,n){oa.M(t,n);var a=fr;if(a&&t){var r=R(a).hoistableScripts,c=hr(t),f=r.get(c);f||(f=a.querySelector(bo(c)),f||(t=x({src:t,async:!0,type:"module"},n),(n=ui.get(c))&&Xf(t,n),f=a.createElement("script"),X(f),En(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function ag(t,n,a,r){var c=(c=et.current)?Ql(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=dr(a.href),a=R(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=dr(a.href);var f=R(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(To(t)))&&!f._p&&(g.instance=f,g.state.loading=5),ui.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(t,a),f||lS(c,t,a,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=hr(a),a=R(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function dr(t){return'href="'+ie(t)+'"'}function To(t){return'link[rel="stylesheet"]['+t+"]"}function sg(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function lS(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),En(n,"link",a),X(n),t.head.appendChild(n))}function hr(t){return'[src="'+ie(t)+'"]'}function bo(t){return"script[async]"+t}function rg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+ie(a.href)+'"]');if(r)return n.instance=r,X(r),r;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),X(r),En(r,"style",c),Jl(r,a.precedence,t),n.instance=r;case"stylesheet":c=dr(a.href);var f=t.querySelector(To(c));if(f)return n.state.loading|=4,n.instance=f,X(f),f;r=sg(a),(c=ui.get(c))&&kf(r,c),f=(t.ownerDocument||t).createElement("link"),X(f);var g=f;return g._p=new Promise(function(A,z){g.onload=A,g.onerror=z}),En(f,"link",r),n.state.loading|=4,Jl(f,a.precedence,t),n.instance=f;case"script":return f=hr(a.src),(c=t.querySelector(bo(f)))?(n.instance=c,X(c),c):(r=a,(c=ui.get(f))&&(r=x({},a),Xf(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),X(c),En(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Jl(r,a.precedence,t));return n.instance}function Jl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,g=0;g<r.length;g++){var A=r[g];if(A.dataset.precedence===n)f=A;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function kf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Xf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var $l=null;function og(t,n,a){if($l===null){var r=new Map,c=$l=new Map;c.set(a,r)}else c=$l,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[is]||f[nn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var A=r.get(g);A?A.push(f):r.set(g,[f])}}return r}function lg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function cS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function cg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function uS(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=dr(r.href),f=n.querySelector(To(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=tc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,X(f);return}f=n.ownerDocument||n,r=sg(r),(c=ui.get(c))&&kf(r,c),f=f.createElement("link"),X(f);var g=f;g._p=new Promise(function(A,z){g.onload=A,g.onerror=z}),En(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=tc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Wf=0;function fS(t,n){return t.stylesheets&&t.count===0&&nc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&nc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Wf===0&&(Wf=62500*Wx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&nc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Wf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function tc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)nc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ec=null;function nc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ec=new Map,n.forEach(dS,t),ec=null,tc.call(t))}function dS(t,n){if(!(n.state.loading&4)){var a=ec.get(t);if(a)var r=a.get(null);else{a=new Map,ec.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||r,f===r&&a.set(null,c),a.set(g,c),this.count++,r=tc.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Ao={$$typeof:P,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function hS(t,n,a,r,c,f,g,A,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function ug(t,n,a,r,c,f,g,A,z,Q,ft,gt){return t=new hS(t,n,a,g,z,Q,ft,gt,A),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),t.current=f,f.stateNode=t,n=Eu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Ru(f),t}function fg(t){return t?(t=Xs,t):Xs}function dg(t,n,a,r,c,f){c=fg(c),r.context===null?r.context=c:r.pendingContext=c,r=Ua(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=La(t,r,n),a!==null&&(Vn(a,t,n),io(a,t,n))}function hg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function qf(t,n){hg(t,n),(t=t.alternate)&&hg(t,n)}function pg(t){if(t.tag===13||t.tag===31){var n=ls(t,67108864);n!==null&&Vn(n,t,67108864),qf(t,67108864)}}function mg(t){if(t.tag===13||t.tag===31){var n=$n();n=Os(n);var a=ls(t,n);a!==null&&Vn(a,t,n),qf(t,n)}}var ic=!0;function pS(t,n,a,r){var c=L.T;L.T=null;var f=I.p;try{I.p=2,Yf(t,n,a,r)}finally{I.p=f,L.T=c}}function mS(t,n,a,r){var c=L.T;L.T=null;var f=I.p;try{I.p=8,Yf(t,n,a,r)}finally{I.p=f,L.T=c}}function Yf(t,n,a,r){if(ic){var c=jf(r);if(c===null)Nf(t,n,r,ac,a),_g(t,r);else if(_S(c,t,n,a,r))r.stopPropagation();else if(_g(t,r),n&4&&-1<gS.indexOf(t)){for(;c!==null;){var f=Ta(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Mt(f.pendingLanes);if(g!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;g;){var z=1<<31-Nt(g);A.entanglements[1]|=z,g&=~z}Li(f),(De&6)===0&&(Hl=E()+500,So(0))}}break;case 31:case 13:A=ls(f,2),A!==null&&Vn(A,f,2),Vl(),qf(f,2)}if(f=jf(r),f===null&&Nf(t,n,r,ac,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Nf(t,n,r,null,a)}}function jf(t){return t=Zc(t),Zf(t)}var ac=null;function Zf(t){if(ac=null,t=Ea(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ac=t,null}function gg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case ht:return 2;case xt:return 8;case ut:case Xt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var Kf=!1,ka=null,Xa=null,Wa=null,Ro=new Map,Co=new Map,qa=[],gS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _g(t,n){switch(t){case"focusin":case"focusout":ka=null;break;case"dragenter":case"dragleave":Xa=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":Ro.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(n.pointerId)}}function wo(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Ta(n),n!==null&&pg(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function _S(t,n,a,r,c){switch(n){case"focusin":return ka=wo(ka,t,n,a,r,c),!0;case"dragenter":return Xa=wo(Xa,t,n,a,r,c),!0;case"mouseover":return Wa=wo(Wa,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Ro.set(f,wo(Ro.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Co.set(f,wo(Co.get(f)||null,t,n,a,r,c)),!0}return!1}function vg(t){var n=Ea(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Is(t.priority,function(){mg(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Is(t.priority,function(){mg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=jf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);jc=r,a.target.dispatchEvent(r),jc=null}else return n=Ta(a),n!==null&&pg(n),t.blockedOn=a,!1;n.shift()}return!0}function xg(t,n,a){sc(t)&&a.delete(n)}function vS(){Kf=!1,ka!==null&&sc(ka)&&(ka=null),Xa!==null&&sc(Xa)&&(Xa=null),Wa!==null&&sc(Wa)&&(Wa=null),Ro.forEach(xg),Co.forEach(xg)}function rc(t,n){t.blockedOn===n&&(t.blockedOn=null,Kf||(Kf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,vS)))}var oc=null;function Sg(t){oc!==t&&(oc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){oc===t&&(oc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(Zf(r||a)===null)continue;break}var f=Ta(a);f!==null&&(t.splice(n,3),n-=3,Yu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function pr(t){function n(z){return rc(z,t)}ka!==null&&rc(ka,t),Xa!==null&&rc(Xa,t),Wa!==null&&rc(Wa,t),Ro.forEach(n),Co.forEach(n);for(var a=0;a<qa.length;a++){var r=qa[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<qa.length&&(a=qa[0],a.blockedOn===null);)vg(a),a.blockedOn===null&&qa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],g=c[dn]||null;if(typeof f=="function")g||Sg(a);else if(g){var A=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[dn]||null)A=g.formAction;else if(Zf(c)!==null)continue}else A=g.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),Sg(a)}}}function Mg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Qf(t){this._internalRoot=t}lc.prototype.render=Qf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=$n();dg(a,r,t,n,null,null)},lc.prototype.unmount=Qf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;dg(t.current,2,null,t,null,null),Vl(),n[ki]=null}};function lc(t){this._internalRoot=t}lc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ci();t={blockedOn:null,target:t,priority:n};for(var a=0;a<qa.length&&n!==0&&n<qa[a].priority;a++);qa.splice(a,0,t),a===0&&vg(t)}};var yg=e.version;if(yg!=="19.2.4")throw Error(s(527,yg,"19.2.4"));I.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=h(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var xS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{yt=cc.inject(xS),St=cc}catch{}}return Uo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=wm,f=Dm,g=Um;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=ug(t,1,!1,null,null,a,r,null,c,f,g,Mg),t[ki]=n.current,Lf(t),new Qf(n)},Uo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=wm,g=Dm,A=Um,z=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=ug(t,1,!0,n,a??null,r,c,z,f,g,A,Mg),n.context=fg(null),a=n.current,r=$n(),r=Os(r),c=Ua(r),c.callback=null,La(a,c,r),a=r,n.current.lanes=a,Un(n,a),Li(n),t[ki]=n.current,Lf(t),new lc(n)},Uo.version="19.2.4",Uo}var Lg;function wS(){if(Lg)return td.exports;Lg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),td.exports=CS(),td.exports}var DS=wS();const Uh="183",US=0,Ng=1,LS=2,Nc=1,NS=2,Bo=3,ns=0,Xn=1,ha=2,ma=0,Dr=1,Og=2,Pg=3,Ig=4,OS=5,Cs=100,PS=101,IS=102,zS=103,FS=104,BS=200,HS=201,GS=202,VS=203,Fd=204,Bd=205,kS=206,XS=207,WS=208,qS=209,YS=210,jS=211,ZS=212,KS=213,QS=214,Hd=0,Gd=1,Vd=2,Lr=3,kd=4,Xd=5,Wd=6,qd=7,w_=0,JS=1,$S=2,Fi=0,D_=1,U_=2,L_=3,N_=4,O_=5,P_=6,I_=7,z_=300,Ls=301,Nr=302,ad=303,sd=304,Xc=306,Go=1e3,pa=1001,Yd=1002,mn=1003,tM=1004,uc=1005,wn=1006,rd=1007,Ds=1008,hi=1009,F_=1010,B_=1011,Vo=1012,Lh=1013,Gi=1014,Ii=1015,va=1016,Nh=1017,Oh=1018,ko=1020,H_=35902,G_=35899,V_=1021,k_=1022,Ai=1023,xa=1026,Us=1027,X_=1028,Ph=1029,Or=1030,Ih=1031,zh=1033,Oc=33776,Pc=33777,Ic=33778,zc=33779,jd=35840,Zd=35841,Kd=35842,Qd=35843,Jd=36196,$d=37492,th=37496,eh=37488,nh=37489,ih=37490,ah=37491,sh=37808,rh=37809,oh=37810,lh=37811,ch=37812,uh=37813,fh=37814,dh=37815,hh=37816,ph=37817,mh=37818,gh=37819,_h=37820,vh=37821,xh=36492,Sh=36494,Mh=36495,yh=36283,Eh=36284,Th=36285,bh=36286,eM=3200,nM=0,iM=1,ts="",di="srgb",Pr="srgb-linear",Bc="linear",ze="srgb",mr=7680,zg=519,aM=512,sM=513,rM=514,Fh=515,oM=516,lM=517,Bh=518,cM=519,Fg=35044,Bg="300 es",zi=2e3,Hc=2001;function uM(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Xo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function fM(){const o=Xo("canvas");return o.style.display="block",o}const Hg={};function Gg(...o){const e="THREE."+o.shift();console.log(e,...o)}function W_(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function re(...o){o=W_(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Ce(...o){o=W_(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function Gc(...o){const e=o.join(" ");e in Hg||(Hg[e]=!0,re(...o))}function dM(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const hM={[Hd]:Gd,[Vd]:Wd,[kd]:qd,[Lr]:Xd,[Gd]:Hd,[Wd]:Vd,[qd]:kd,[Xd]:Lr};class zr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],od=Math.PI/180,Ah=180/Math.PI;function qo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]).toLowerCase()}function Me(o,e,i){return Math.max(e,Math.min(i,o))}function pM(o,e){return(o%e+e)%e}function ld(o,e,i){return(1-i)*o+i*e}function Lo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function kn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ue{constructor(e=0,i=0){Ue.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Me(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*s-d*l+e.x,this.y=u*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,d,p){let m=s[l+0],h=s[l+1],v=s[l+2],x=s[l+3],_=u[d+0],y=u[d+1],T=u[d+2],C=u[d+3];if(x!==C||m!==_||h!==y||v!==T){let M=m*_+h*y+v*T+x*C;M<0&&(_=-_,y=-y,T=-T,C=-C,M=-M);let S=1-p;if(M<.9995){const w=Math.acos(M),P=Math.sin(w);S=Math.sin(S*w)/P,p=Math.sin(p*w)/P,m=m*S+_*p,h=h*S+y*p,v=v*S+T*p,x=x*S+C*p}else{m=m*S+_*p,h=h*S+y*p,v=v*S+T*p,x=x*S+C*p;const w=1/Math.sqrt(m*m+h*h+v*v+x*x);m*=w,h*=w,v*=w,x*=w}}e[i]=m,e[i+1]=h,e[i+2]=v,e[i+3]=x}static multiplyQuaternionsFlat(e,i,s,l,u,d){const p=s[l],m=s[l+1],h=s[l+2],v=s[l+3],x=u[d],_=u[d+1],y=u[d+2],T=u[d+3];return e[i]=p*T+v*x+m*y-h*_,e[i+1]=m*T+v*_+h*x-p*y,e[i+2]=h*T+v*y+p*_-m*x,e[i+3]=v*T-p*x-m*_-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,d=e._order,p=Math.cos,m=Math.sin,h=p(s/2),v=p(l/2),x=p(u/2),_=m(s/2),y=m(l/2),T=m(u/2);switch(d){case"XYZ":this._x=_*v*x+h*y*T,this._y=h*y*x-_*v*T,this._z=h*v*T+_*y*x,this._w=h*v*x-_*y*T;break;case"YXZ":this._x=_*v*x+h*y*T,this._y=h*y*x-_*v*T,this._z=h*v*T-_*y*x,this._w=h*v*x+_*y*T;break;case"ZXY":this._x=_*v*x-h*y*T,this._y=h*y*x+_*v*T,this._z=h*v*T+_*y*x,this._w=h*v*x-_*y*T;break;case"ZYX":this._x=_*v*x-h*y*T,this._y=h*y*x+_*v*T,this._z=h*v*T-_*y*x,this._w=h*v*x+_*y*T;break;case"YZX":this._x=_*v*x+h*y*T,this._y=h*y*x+_*v*T,this._z=h*v*T-_*y*x,this._w=h*v*x-_*y*T;break;case"XZY":this._x=_*v*x-h*y*T,this._y=h*y*x-_*v*T,this._z=h*v*T+_*y*x,this._w=h*v*x+_*y*T;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],d=i[1],p=i[5],m=i[9],h=i[2],v=i[6],x=i[10],_=s+p+x;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(v-m)*y,this._y=(u-h)*y,this._z=(d-l)*y}else if(s>p&&s>x){const y=2*Math.sqrt(1+s-p-x);this._w=(v-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(u+h)/y}else if(p>x){const y=2*Math.sqrt(1+p-s-x);this._w=(u-h)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+v)/y}else{const y=2*Math.sqrt(1+x-s-p);this._w=(d-l)/y,this._x=(u+h)/y,this._y=(m+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Me(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,d=e._w,p=i._x,m=i._y,h=i._z,v=i._w;return this._x=s*v+d*p+l*h-u*m,this._y=l*v+d*m+u*p-s*h,this._z=u*v+d*h+s*m-l*p,this._w=d*v-s*p-l*m-u*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,u=e._z,d=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,u=-u,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),v=Math.sin(h);m=Math.sin(m*h)/v,i=Math.sin(i*h)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class at{constructor(e=0,i=0,s=0){at.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Vg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Vg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,d=e.y,p=e.z,m=e.w,h=2*(d*l-p*s),v=2*(p*i-u*l),x=2*(u*s-d*i);return this.x=i+m*h+d*x-p*v,this.y=s+m*v+p*h-u*x,this.z=l+m*x+u*v-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this.z=Me(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this.z=Me(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-u*p,this.y=u*d-s*m,this.z=s*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return cd.copy(this).projectOnVector(e),this.sub(cd)}reflect(e){return this.sub(cd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Me(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cd=new at,Vg=new Fr;class de{constructor(e,i,s,l,u,d,p,m,h){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,d,p,m,h)}set(e,i,s,l,u,d,p,m,h){const v=this.elements;return v[0]=e,v[1]=l,v[2]=p,v[3]=i,v[4]=u,v[5]=m,v[6]=s,v[7]=d,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,d=s[0],p=s[3],m=s[6],h=s[1],v=s[4],x=s[7],_=s[2],y=s[5],T=s[8],C=l[0],M=l[3],S=l[6],w=l[1],P=l[4],N=l[7],k=l[2],B=l[5],F=l[8];return u[0]=d*C+p*w+m*k,u[3]=d*M+p*P+m*B,u[6]=d*S+p*N+m*F,u[1]=h*C+v*w+x*k,u[4]=h*M+v*P+x*B,u[7]=h*S+v*N+x*F,u[2]=_*C+y*w+T*k,u[5]=_*M+y*P+T*B,u[8]=_*S+y*N+T*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],p=e[5],m=e[6],h=e[7],v=e[8];return i*d*v-i*p*h-s*u*v+s*p*m+l*u*h-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],p=e[5],m=e[6],h=e[7],v=e[8],x=v*d-p*h,_=p*m-v*u,y=h*u-d*m,T=i*x+s*_+l*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=x*C,e[1]=(l*h-v*s)*C,e[2]=(p*s-l*d)*C,e[3]=_*C,e[4]=(v*i-l*m)*C,e[5]=(l*u-p*i)*C,e[6]=y*C,e[7]=(s*m-h*i)*C,e[8]=(d*i-s*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,d,p){const m=Math.cos(u),h=Math.sin(u);return this.set(s*m,s*h,-s*(m*d+h*p)+d+e,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(ud.makeScale(e,i)),this}rotate(e){return this.premultiply(ud.makeRotation(-e)),this}translate(e,i){return this.premultiply(ud.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ud=new de,kg=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xg=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mM(){const o={enabled:!0,workingColorSpace:Pr,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===ze&&(l.r=ga(l.r),l.g=ga(l.g),l.b=ga(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===ze&&(l.r=Ur(l.r),l.g=Ur(l.g),l.b=Ur(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ts?Bc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Gc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Gc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Pr]:{primaries:e,whitePoint:s,transfer:Bc,toXYZ:kg,fromXYZ:Xg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:e,whitePoint:s,transfer:ze,toXYZ:kg,fromXYZ:Xg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),o}const Te=mM();function ga(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ur(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let gr;class gM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{gr===void 0&&(gr=Xo("canvas")),gr.width=e.width,gr.height=e.height;const l=gr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=gr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Xo("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=ga(u[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ga(i[s]/255)*255):i[s]=ga(i[s]);return{data:i,width:e.width,height:e.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _M=0;class Hh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=qo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?u.push(fd(l[d].image)):u.push(fd(l[d]))}else u=fd(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function fd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?gM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}let vM=0;const dd=new at;class Dn extends zr{constructor(e=Dn.DEFAULT_IMAGE,i=Dn.DEFAULT_MAPPING,s=pa,l=pa,u=wn,d=Ds,p=Ai,m=hi,h=Dn.DEFAULT_ANISOTROPY,v=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=qo(),this.name="",this.source=new Hh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(dd).x}get height(){return this.source.getSize(dd).y}get depth(){return this.source.getSize(dd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){re(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==z_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Go:e.x=e.x-Math.floor(e.x);break;case pa:e.x=e.x<0?0:1;break;case Yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Go:e.y=e.y-Math.floor(e.y);break;case pa:e.y=e.y<0?0:1;break;case Yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=z_;Dn.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,i=0,s=0,l=1){en.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,h=m[0],v=m[4],x=m[8],_=m[1],y=m[5],T=m[9],C=m[2],M=m[6],S=m[10];if(Math.abs(v-_)<.01&&Math.abs(x-C)<.01&&Math.abs(T-M)<.01){if(Math.abs(v+_)<.1&&Math.abs(x+C)<.1&&Math.abs(T+M)<.1&&Math.abs(h+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(h+1)/2,N=(y+1)/2,k=(S+1)/2,B=(v+_)/4,F=(x+C)/4,b=(T+M)/4;return P>N&&P>k?P<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(P),l=B/s,u=F/s):N>k?N<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(N),s=B/l,u=b/l):k<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(k),s=F/u,l=b/u),this.set(s,l,u,i),this}let w=Math.sqrt((M-T)*(M-T)+(x-C)*(x-C)+(_-v)*(_-v));return Math.abs(w)<.001&&(w=1),this.x=(M-T)/w,this.y=(x-C)/w,this.z=(_-v)/w,this.w=Math.acos((h+y+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this.z=Me(this.z,e.z,i.z),this.w=Me(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this.z=Me(this.z,e,i),this.w=Me(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xM extends zr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new en(0,0,e,i),this.scissorTest=!1,this.viewport=new en(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},u=new Dn(l),d=s.count;for(let p=0;p<d;p++)this.textures[p]=u.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Hh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends xM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class q_ extends Dn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=mn,this.minFilter=mn,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class SM extends Dn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=mn,this.minFilter=mn,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fn{constructor(e,i,s,l,u,d,p,m,h,v,x,_,y,T,C,M){fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,d,p,m,h,v,x,_,y,T,C,M)}set(e,i,s,l,u,d,p,m,h,v,x,_,y,T,C,M){const S=this.elements;return S[0]=e,S[4]=i,S[8]=s,S[12]=l,S[1]=u,S[5]=d,S[9]=p,S[13]=m,S[2]=h,S[6]=v,S[10]=x,S[14]=_,S[3]=y,S[7]=T,S[11]=C,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/_r.setFromMatrixColumn(e,0).length(),u=1/_r.setFromMatrixColumn(e,1).length(),d=1/_r.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,d=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),v=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const _=d*v,y=d*x,T=p*v,C=p*x;i[0]=m*v,i[4]=-m*x,i[8]=h,i[1]=y+T*h,i[5]=_-C*h,i[9]=-p*m,i[2]=C-_*h,i[6]=T+y*h,i[10]=d*m}else if(e.order==="YXZ"){const _=m*v,y=m*x,T=h*v,C=h*x;i[0]=_+C*p,i[4]=T*p-y,i[8]=d*h,i[1]=d*x,i[5]=d*v,i[9]=-p,i[2]=y*p-T,i[6]=C+_*p,i[10]=d*m}else if(e.order==="ZXY"){const _=m*v,y=m*x,T=h*v,C=h*x;i[0]=_-C*p,i[4]=-d*x,i[8]=T+y*p,i[1]=y+T*p,i[5]=d*v,i[9]=C-_*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(e.order==="ZYX"){const _=d*v,y=d*x,T=p*v,C=p*x;i[0]=m*v,i[4]=T*h-y,i[8]=_*h+C,i[1]=m*x,i[5]=C*h+_,i[9]=y*h-T,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(e.order==="YZX"){const _=d*m,y=d*h,T=p*m,C=p*h;i[0]=m*v,i[4]=C-_*x,i[8]=T*x+y,i[1]=x,i[5]=d*v,i[9]=-p*v,i[2]=-h*v,i[6]=y*x+T,i[10]=_-C*x}else if(e.order==="XZY"){const _=d*m,y=d*h,T=p*m,C=p*h;i[0]=m*v,i[4]=-x,i[8]=h*v,i[1]=_*x+C,i[5]=d*v,i[9]=y*x-T,i[2]=T*x-y,i[6]=p*v,i[10]=C*x+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(MM,e,yM)}lookAt(e,i,s){const l=this.elements;return ti.subVectors(e,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),ja.crossVectors(s,ti),ja.lengthSq()===0&&(Math.abs(s.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),ja.crossVectors(s,ti)),ja.normalize(),fc.crossVectors(ti,ja),l[0]=ja.x,l[4]=fc.x,l[8]=ti.x,l[1]=ja.y,l[5]=fc.y,l[9]=ti.y,l[2]=ja.z,l[6]=fc.z,l[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,d=s[0],p=s[4],m=s[8],h=s[12],v=s[1],x=s[5],_=s[9],y=s[13],T=s[2],C=s[6],M=s[10],S=s[14],w=s[3],P=s[7],N=s[11],k=s[15],B=l[0],F=l[4],b=l[8],D=l[12],pt=l[1],H=l[5],$=l[9],it=l[13],lt=l[2],J=l[6],L=l[10],I=l[14],ot=l[3],dt=l[7],Et=l[11],O=l[15];return u[0]=d*B+p*pt+m*lt+h*ot,u[4]=d*F+p*H+m*J+h*dt,u[8]=d*b+p*$+m*L+h*Et,u[12]=d*D+p*it+m*I+h*O,u[1]=v*B+x*pt+_*lt+y*ot,u[5]=v*F+x*H+_*J+y*dt,u[9]=v*b+x*$+_*L+y*Et,u[13]=v*D+x*it+_*I+y*O,u[2]=T*B+C*pt+M*lt+S*ot,u[6]=T*F+C*H+M*J+S*dt,u[10]=T*b+C*$+M*L+S*Et,u[14]=T*D+C*it+M*I+S*O,u[3]=w*B+P*pt+N*lt+k*ot,u[7]=w*F+P*H+N*J+k*dt,u[11]=w*b+P*$+N*L+k*Et,u[15]=w*D+P*it+N*I+k*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],d=e[1],p=e[5],m=e[9],h=e[13],v=e[2],x=e[6],_=e[10],y=e[14],T=e[3],C=e[7],M=e[11],S=e[15],w=m*y-h*_,P=p*y-h*x,N=p*_-m*x,k=d*y-h*v,B=d*_-m*v,F=d*x-p*v;return i*(C*w-M*P+S*N)-s*(T*w-M*k+S*B)+l*(T*P-C*k+S*F)-u*(T*N-C*B+M*F)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],p=e[5],m=e[6],h=e[7],v=e[8],x=e[9],_=e[10],y=e[11],T=e[12],C=e[13],M=e[14],S=e[15],w=i*p-s*d,P=i*m-l*d,N=i*h-u*d,k=s*m-l*p,B=s*h-u*p,F=l*h-u*m,b=v*C-x*T,D=v*M-_*T,pt=v*S-y*T,H=x*M-_*C,$=x*S-y*C,it=_*S-y*M,lt=w*it-P*$+N*H+k*pt-B*D+F*b;if(lt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/lt;return e[0]=(p*it-m*$+h*H)*J,e[1]=(l*$-s*it-u*H)*J,e[2]=(C*F-M*B+S*k)*J,e[3]=(_*B-x*F-y*k)*J,e[4]=(m*pt-d*it-h*D)*J,e[5]=(i*it-l*pt+u*D)*J,e[6]=(M*N-T*F-S*P)*J,e[7]=(v*F-_*N+y*P)*J,e[8]=(d*$-p*pt+h*b)*J,e[9]=(s*pt-i*$-u*b)*J,e[10]=(T*B-C*N+S*w)*J,e[11]=(x*N-v*B-y*w)*J,e[12]=(p*D-d*H-m*b)*J,e[13]=(i*H-s*D+l*b)*J,e[14]=(C*P-T*k-M*w)*J,e[15]=(v*k-x*P+_*w)*J,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,d=e.x,p=e.y,m=e.z,h=u*d,v=u*p;return this.set(h*d+s,h*p-l*m,h*m+l*p,0,h*p+l*m,v*p+s,v*m-l*d,0,h*m-l*p,v*m+l*d,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,d){return this.set(1,s,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,d=i._y,p=i._z,m=i._w,h=u+u,v=d+d,x=p+p,_=u*h,y=u*v,T=u*x,C=d*v,M=d*x,S=p*x,w=m*h,P=m*v,N=m*x,k=s.x,B=s.y,F=s.z;return l[0]=(1-(C+S))*k,l[1]=(y+N)*k,l[2]=(T-P)*k,l[3]=0,l[4]=(y-N)*B,l[5]=(1-(_+S))*B,l[6]=(M+w)*B,l[7]=0,l[8]=(T+P)*F,l[9]=(M-w)*F,l[10]=(1-(_+C))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const u=this.determinant();if(u===0)return s.set(1,1,1),i.identity(),this;let d=_r.set(l[0],l[1],l[2]).length();const p=_r.set(l[4],l[5],l[6]).length(),m=_r.set(l[8],l[9],l[10]).length();u<0&&(d=-d),Mi.copy(this);const h=1/d,v=1/p,x=1/m;return Mi.elements[0]*=h,Mi.elements[1]*=h,Mi.elements[2]*=h,Mi.elements[4]*=v,Mi.elements[5]*=v,Mi.elements[6]*=v,Mi.elements[8]*=x,Mi.elements[9]*=x,Mi.elements[10]*=x,i.setFromRotationMatrix(Mi),s.x=d,s.y=p,s.z=m,this}makePerspective(e,i,s,l,u,d,p=zi,m=!1){const h=this.elements,v=2*u/(i-e),x=2*u/(s-l),_=(i+e)/(i-e),y=(s+l)/(s-l);let T,C;if(m)T=u/(d-u),C=d*u/(d-u);else if(p===zi)T=-(d+u)/(d-u),C=-2*d*u/(d-u);else if(p===Hc)T=-d/(d-u),C=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=x,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,u,d,p=zi,m=!1){const h=this.elements,v=2/(i-e),x=2/(s-l),_=-(i+e)/(i-e),y=-(s+l)/(s-l);let T,C;if(m)T=1/(d-u),C=d/(d-u);else if(p===zi)T=-2/(d-u),C=-(d+u)/(d-u);else if(p===Hc)T=-1/(d-u),C=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=x,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=T,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const _r=new at,Mi=new fn,MM=new at(0,0,0),yM=new at(1,1,1),ja=new at,fc=new at,ti=new at,Wg=new fn,qg=new Fr;class Sa{constructor(e=0,i=0,s=0,l=Sa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],d=l[4],p=l[8],m=l[1],h=l[5],v=l[9],x=l[2],_=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Me(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Me(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-Me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(p,u)):(this._x=Math.atan2(-v,y),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Wg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wg,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return qg.setFromEuler(this),this.setFromQuaternion(qg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sa.DEFAULT_ORDER="XYZ";class Y_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let EM=0;const Yg=new at,vr=new Fr,la=new fn,dc=new at,No=new at,TM=new at,bM=new Fr,jg=new at(1,0,0),Zg=new at(0,1,0),Kg=new at(0,0,1),Qg={type:"added"},AM={type:"removed"},xr={type:"childadded",child:null},hd={type:"childremoved",child:null};class ni extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ni.DEFAULT_UP.clone();const e=new at,i=new Sa,s=new Fr,l=new at(1,1,1);function u(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new fn},normalMatrix:{value:new de}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=ni.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Y_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return vr.setFromAxisAngle(e,i),this.quaternion.multiply(vr),this}rotateOnWorldAxis(e,i){return vr.setFromAxisAngle(e,i),this.quaternion.premultiply(vr),this}rotateX(e){return this.rotateOnAxis(jg,e)}rotateY(e){return this.rotateOnAxis(Zg,e)}rotateZ(e){return this.rotateOnAxis(Kg,e)}translateOnAxis(e,i){return Yg.copy(e).applyQuaternion(this.quaternion),this.position.add(Yg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(jg,e)}translateY(e){return this.translateOnAxis(Zg,e)}translateZ(e){return this.translateOnAxis(Kg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(la.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?dc.copy(e):dc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?la.lookAt(No,dc,this.up):la.lookAt(dc,No,this.up),this.quaternion.setFromRotationMatrix(la),l&&(la.extractRotation(l.matrixWorld),vr.setFromRotationMatrix(la),this.quaternion.premultiply(vr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ce("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qg),xr.child=e,this.dispatchEvent(xr),xr.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(AM),hd.child=e,this.dispatchEvent(hd),hd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),la.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),la.multiply(e.parent.matrixWorld)),e.applyMatrix4(la),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qg),xr.child=e,this.dispatchEvent(xr),xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,TM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,bM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*s-u[8]*l,u[13]+=s-u[1]*i-u[5]*s-u[9]*l,u[14]+=l-u[2]*i-u[6]*s-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,v=m.length;h<v;h++){const x=m[h];u(e.shapes,x)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(u(e.materials,this.material[m]));l.material=p}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(u(e.animations,m))}}if(i){const p=d(e.geometries),m=d(e.materials),h=d(e.textures),v=d(e.images),x=d(e.shapes),_=d(e.skeletons),y=d(e.animations),T=d(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),v.length>0&&(s.images=v),x.length>0&&(s.shapes=x),_.length>0&&(s.skeletons=_),y.length>0&&(s.animations=y),T.length>0&&(s.nodes=T)}return s.object=l,s;function d(p){const m=[];for(const h in p){const v=p[h];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}ni.DEFAULT_UP=new at(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class hc extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RM={type:"move"};class pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new at,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new at),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new at,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new at),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,s),S=this._getHandJoint(h,C);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const v=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],_=v.position.distanceTo(x.position),y=.02,T=.005;h.inputState.pinching&&_>y+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=y-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(RM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new hc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const j_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Za={h:0,s:0,l:0},pc={h:0,s:0,l:0};function md(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ge{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Te.workingColorSpace){return this.r=e,this.g=i,this.b=s,Te.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Te.workingColorSpace){if(e=pM(e,1),i=Me(i,0,1),s=Me(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,d=2*s-u;this.r=md(d,u,e+1/3),this.g=md(d,u,e),this.b=md(d,u,e-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(e,i=di){function s(u){u!==void 0&&parseFloat(u)<1&&re("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:re("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=di){const s=j_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}copyLinearToSRGB(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return Te.workingToColorSpace(Rn.copy(this),e),Math.round(Me(Rn.r*255,0,255))*65536+Math.round(Me(Rn.g*255,0,255))*256+Math.round(Me(Rn.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Te.workingColorSpace){Te.workingToColorSpace(Rn.copy(this),i);const s=Rn.r,l=Rn.g,u=Rn.b,d=Math.max(s,l,u),p=Math.min(s,l,u);let m,h;const v=(p+d)/2;if(p===d)m=0,h=0;else{const x=d-p;switch(h=v<=.5?x/(d+p):x/(2-d-p),d){case s:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-s)/x+2;break;case u:m=(s-l)/x+4;break}m/=6}return e.h=m,e.s=h,e.l=v,e}getRGB(e,i=Te.workingColorSpace){return Te.workingToColorSpace(Rn.copy(this),i),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=di){Te.workingToColorSpace(Rn.copy(this),e);const i=Rn.r,s=Rn.g,l=Rn.b;return e!==di?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Za),this.setHSL(Za.h+e,Za.s+i,Za.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Za),e.getHSL(pc);const s=ld(Za.h,pc.h,i),l=ld(Za.s,pc.s,i),u=ld(Za.l,pc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new Ge;Ge.NAMES=j_;class CM extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sa,this.environmentIntensity=1,this.environmentRotation=new Sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const yi=new at,ca=new at,gd=new at,ua=new at,Sr=new at,Mr=new at,Jg=new at,_d=new at,vd=new at,xd=new at,Sd=new en,Md=new en,yd=new en;class bi{constructor(e=new at,i=new at,s=new at){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),yi.subVectors(e,i),l.cross(yi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){yi.subVectors(l,i),ca.subVectors(s,i),gd.subVectors(e,i);const d=yi.dot(yi),p=yi.dot(ca),m=yi.dot(gd),h=ca.dot(ca),v=ca.dot(gd),x=d*h-p*p;if(x===0)return u.set(0,0,0),null;const _=1/x,y=(h*m-p*v)*_,T=(d*v-p*m)*_;return u.set(1-y-T,T,y)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ua)===null?!1:ua.x>=0&&ua.y>=0&&ua.x+ua.y<=1}static getInterpolation(e,i,s,l,u,d,p,m){return this.getBarycoord(e,i,s,l,ua)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ua.x),m.addScaledVector(d,ua.y),m.addScaledVector(p,ua.z),m)}static getInterpolatedAttribute(e,i,s,l,u,d){return Sd.setScalar(0),Md.setScalar(0),yd.setScalar(0),Sd.fromBufferAttribute(e,i),Md.fromBufferAttribute(e,s),yd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Sd,u.x),d.addScaledVector(Md,u.y),d.addScaledVector(yd,u.z),d}static isFrontFacing(e,i,s,l){return yi.subVectors(s,i),ca.subVectors(e,i),yi.cross(ca).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),yi.cross(ca).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return bi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return bi.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let d,p;Sr.subVectors(l,s),Mr.subVectors(u,s),_d.subVectors(e,s);const m=Sr.dot(_d),h=Mr.dot(_d);if(m<=0&&h<=0)return i.copy(s);vd.subVectors(e,l);const v=Sr.dot(vd),x=Mr.dot(vd);if(v>=0&&x<=v)return i.copy(l);const _=m*x-v*h;if(_<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(s).addScaledVector(Sr,d);xd.subVectors(e,u);const y=Sr.dot(xd),T=Mr.dot(xd);if(T>=0&&y<=T)return i.copy(u);const C=y*h-m*T;if(C<=0&&h>=0&&T<=0)return p=h/(h-T),i.copy(s).addScaledVector(Mr,p);const M=v*T-y*x;if(M<=0&&x-v>=0&&y-T>=0)return Jg.subVectors(u,l),p=(x-v)/(x-v+(y-T)),i.copy(l).addScaledVector(Jg,p);const S=1/(M+C+_);return d=C*S,p=_*S,i.copy(s).addScaledVector(Sr,d).addScaledVector(Mr,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Yo{constructor(e=new at(1/0,1/0,1/0),i=new at(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ei.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ei.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ei.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=u.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,Ei):Ei.fromBufferAttribute(u,d),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),mc.copy(s.boundingBox)),mc.applyMatrix4(e.matrixWorld),this.union(mc)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),gc.subVectors(this.max,Oo),yr.subVectors(e.a,Oo),Er.subVectors(e.b,Oo),Tr.subVectors(e.c,Oo),Ka.subVectors(Er,yr),Qa.subVectors(Tr,Er),Ms.subVectors(yr,Tr);let i=[0,-Ka.z,Ka.y,0,-Qa.z,Qa.y,0,-Ms.z,Ms.y,Ka.z,0,-Ka.x,Qa.z,0,-Qa.x,Ms.z,0,-Ms.x,-Ka.y,Ka.x,0,-Qa.y,Qa.x,0,-Ms.y,Ms.x,0];return!Ed(i,yr,Er,Tr,gc)||(i=[1,0,0,0,1,0,0,0,1],!Ed(i,yr,Er,Tr,gc))?!1:(_c.crossVectors(Ka,Qa),i=[_c.x,_c.y,_c.z],Ed(i,yr,Er,Tr,gc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fa=[new at,new at,new at,new at,new at,new at,new at,new at],Ei=new at,mc=new Yo,yr=new at,Er=new at,Tr=new at,Ka=new at,Qa=new at,Ms=new at,Oo=new at,gc=new at,_c=new at,ys=new at;function Ed(o,e,i,s,l){for(let u=0,d=o.length-3;u<=d;u+=3){ys.fromArray(o,u);const p=l.x*Math.abs(ys.x)+l.y*Math.abs(ys.y)+l.z*Math.abs(ys.z),m=e.dot(ys),h=i.dot(ys),v=s.dot(ys);if(Math.max(-Math.max(m,h,v),Math.min(m,h,v))>p)return!1}return!0}const un=new at,vc=new Ue;let wM=0;class Hi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Fg,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)vc.fromBufferAttribute(this,i),vc.applyMatrix3(e),this.setXY(i,vc.x,vc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Lo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=kn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Lo(i,this.array)),i}setX(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Lo(i,this.array)),i}setY(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Lo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Lo(i,this.array)),i}setW(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array),u=kn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fg&&(e.usage=this.usage),e}}class Z_ extends Hi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class K_ extends Hi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class _a extends Hi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const DM=new Yo,Po=new at,Td=new at;class Gh{constructor(e=new at,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):DM.setFromPoints(e).getCenter(s);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const i=Po.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Po,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Td.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(Td)),this.expandByPoint(Po.copy(e.center).sub(Td))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let UM=0;const fi=new fn,bd=new ni,br=new at,ei=new Yo,Io=new Yo,xn=new at;class Ma extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uM(e)?K_:Z_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new de().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,i,s){return fi.makeTranslation(e,i,s),this.applyMatrix4(fi),this}scale(e,i,s){return fi.makeScale(e,i,s),this.applyMatrix4(fi),this}lookAt(e){return bd.lookAt(e),bd.updateMatrix(),this.applyMatrix4(bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new _a(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new at(-1/0,-1/0,-1/0),new at(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ei.setFromBufferAttribute(u),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new at,1/0);return}if(e){const s=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const p=i[u];Io.setFromBufferAttribute(p),this.morphTargetsRelative?(xn.addVectors(ei.min,Io.min),ei.expandByPoint(xn),xn.addVectors(ei.max,Io.max),ei.expandByPoint(xn)):(ei.expandByPoint(Io.min),ei.expandByPoint(Io.max))}ei.getCenter(s);let l=0;for(let u=0,d=e.count;u<d;u++)xn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(xn));if(i)for(let u=0,d=i.length;u<d;u++){const p=i[u],m=this.morphTargetsRelative;for(let h=0,v=p.count;h<v;h++)xn.fromBufferAttribute(p,h),m&&(br.fromBufferAttribute(e,h),xn.add(br)),l=Math.max(l,s.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let b=0;b<s.count;b++)p[b]=new at,m[b]=new at;const h=new at,v=new at,x=new at,_=new Ue,y=new Ue,T=new Ue,C=new at,M=new at;function S(b,D,pt){h.fromBufferAttribute(s,b),v.fromBufferAttribute(s,D),x.fromBufferAttribute(s,pt),_.fromBufferAttribute(u,b),y.fromBufferAttribute(u,D),T.fromBufferAttribute(u,pt),v.sub(h),x.sub(h),y.sub(_),T.sub(_);const H=1/(y.x*T.y-T.x*y.y);isFinite(H)&&(C.copy(v).multiplyScalar(T.y).addScaledVector(x,-y.y).multiplyScalar(H),M.copy(x).multiplyScalar(y.x).addScaledVector(v,-T.x).multiplyScalar(H),p[b].add(C),p[D].add(C),p[pt].add(C),m[b].add(M),m[D].add(M),m[pt].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let b=0,D=w.length;b<D;++b){const pt=w[b],H=pt.start,$=pt.count;for(let it=H,lt=H+$;it<lt;it+=3)S(e.getX(it+0),e.getX(it+1),e.getX(it+2))}const P=new at,N=new at,k=new at,B=new at;function F(b){k.fromBufferAttribute(l,b),B.copy(k);const D=p[b];P.copy(D),P.sub(k.multiplyScalar(k.dot(D))).normalize(),N.crossVectors(B,D);const H=N.dot(m[b])<0?-1:1;d.setXYZW(b,P.x,P.y,P.z,H)}for(let b=0,D=w.length;b<D;++b){const pt=w[b],H=pt.start,$=pt.count;for(let it=H,lt=H+$;it<lt;it+=3)F(e.getX(it+0)),F(e.getX(it+1)),F(e.getX(it+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Hi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,y=s.count;_<y;_++)s.setXYZ(_,0,0,0);const l=new at,u=new at,d=new at,p=new at,m=new at,h=new at,v=new at,x=new at;if(e)for(let _=0,y=e.count;_<y;_+=3){const T=e.getX(_+0),C=e.getX(_+1),M=e.getX(_+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,M),v.subVectors(d,u),x.subVectors(l,u),v.cross(x),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,C),h.fromBufferAttribute(s,M),p.add(v),m.add(v),h.add(v),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(M,h.x,h.y,h.z)}else for(let _=0,y=i.count;_<y;_+=3)l.fromBufferAttribute(i,_+0),u.fromBufferAttribute(i,_+1),d.fromBufferAttribute(i,_+2),v.subVectors(d,u),x.subVectors(l,u),v.cross(x),s.setXYZ(_+0,v.x,v.y,v.z),s.setXYZ(_+1,v.x,v.y,v.z),s.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)xn.fromBufferAttribute(e,i),xn.normalize(),e.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function e(p,m){const h=p.array,v=p.itemSize,x=p.normalized,_=new h.constructor(m.length*v);let y=0,T=0;for(let C=0,M=m.length;C<M;C++){p.isInterleavedBufferAttribute?y=m[C]*p.data.stride+p.offset:y=m[C]*v;for(let S=0;S<v;S++)_[T++]=h[y++]}return new Hi(_,v,x)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ma,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,s);i.setAttribute(p,h)}const u=this.morphAttributes;for(const p in u){const m=[],h=u[p];for(let v=0,x=h.length;v<x;v++){const _=h[v],y=e(_,s);m.push(y)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],v=[];for(let x=0,_=h.length;x<_;x++){const y=h[x];v.push(y.toJSON(e.data))}v.length>0&&(l[m]=v,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const v=l[h];this.setAttribute(h,v.clone(i))}const u=e.morphAttributes;for(const h in u){const v=[],x=u[h];for(let _=0,y=x.length;_<y;_++)v.push(x[_].clone(i));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,v=d.length;h<v;h++){const x=d[h];this.addGroup(x.start,x.count,x.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let LM=0;class Wc extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=qo(),this.name="",this.type="Material",this.blending=Dr,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fd,this.blendDst=Bd,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){re(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Dr&&(s.blending=this.blending),this.side!==ns&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Fd&&(s.blendSrc=this.blendSrc),this.blendDst!==Bd&&(s.blendDst=this.blendDst),this.blendEquation!==Cs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Lr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==mr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==mr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const d=[];for(const p in u){const m=u[p];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(s.textures=u),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const da=new at,Ad=new at,xc=new at,Ja=new at,Rd=new at,Sc=new at,Cd=new at;class NM{constructor(e=new at,i=new at(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,da)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=da.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(da.copy(this.origin).addScaledVector(this.direction,i),da.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Ad.copy(e).add(i).multiplyScalar(.5),xc.copy(i).sub(e).normalize(),Ja.copy(this.origin).sub(Ad);const u=e.distanceTo(i)*.5,d=-this.direction.dot(xc),p=Ja.dot(this.direction),m=-Ja.dot(xc),h=Ja.lengthSq(),v=Math.abs(1-d*d);let x,_,y,T;if(v>0)if(x=d*m-p,_=d*p-m,T=u*v,x>=0)if(_>=-T)if(_<=T){const C=1/v;x*=C,_*=C,y=x*(x+d*_+2*p)+_*(d*x+_+2*m)+h}else _=u,x=Math.max(0,-(d*_+p)),y=-x*x+_*(_+2*m)+h;else _=-u,x=Math.max(0,-(d*_+p)),y=-x*x+_*(_+2*m)+h;else _<=-T?(x=Math.max(0,-(-d*u+p)),_=x>0?-u:Math.min(Math.max(-u,-m),u),y=-x*x+_*(_+2*m)+h):_<=T?(x=0,_=Math.min(Math.max(-u,-m),u),y=_*(_+2*m)+h):(x=Math.max(0,-(d*u+p)),_=x>0?u:Math.min(Math.max(-u,-m),u),y=-x*x+_*(_+2*m)+h);else _=d>0?-u:u,x=Math.max(0,-(d*_+p)),y=-x*x+_*(_+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Ad).addScaledVector(xc,_),y}intersectSphere(e,i){da.subVectors(e.center,this.origin);const s=da.dot(this.direction),l=da.dot(da)-s*s,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),p=s-d,m=s+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,d,p,m;const h=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,_=this.origin;return h>=0?(s=(e.min.x-_.x)*h,l=(e.max.x-_.x)*h):(s=(e.max.x-_.x)*h,l=(e.min.x-_.x)*h),v>=0?(u=(e.min.y-_.y)*v,d=(e.max.y-_.y)*v):(u=(e.max.y-_.y)*v,d=(e.min.y-_.y)*v),s>d||u>l||((u>s||isNaN(s))&&(s=u),(d<l||isNaN(l))&&(l=d),x>=0?(p=(e.min.z-_.z)*x,m=(e.max.z-_.z)*x):(p=(e.max.z-_.z)*x,m=(e.min.z-_.z)*x),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,da)!==null}intersectTriangle(e,i,s,l,u){Rd.subVectors(i,e),Sc.subVectors(s,e),Cd.crossVectors(Rd,Sc);let d=this.direction.dot(Cd),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;Ja.subVectors(this.origin,e);const m=p*this.direction.dot(Sc.crossVectors(Ja,Sc));if(m<0)return null;const h=p*this.direction.dot(Rd.cross(Ja));if(h<0||m+h>d)return null;const v=-p*Ja.dot(Cd);return v<0?null:this.at(v/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Q_ extends Wc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sa,this.combine=w_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $g=new fn,Es=new NM,Mc=new Gh,t_=new at,yc=new at,Ec=new at,Tc=new at,wd=new at,bc=new at,e_=new at,Ac=new at;class Vi extends ni{constructor(e=new Ma,i=new Q_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(u&&p){bc.set(0,0,0);for(let m=0,h=u.length;m<h;m++){const v=p[m],x=u[m];v!==0&&(wd.fromBufferAttribute(x,e),d?bc.addScaledVector(wd,v):bc.addScaledVector(wd.sub(i),v))}i.add(bc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Mc.copy(s.boundingSphere),Mc.applyMatrix4(u),Es.copy(e.ray).recast(e.near),!(Mc.containsPoint(Es.origin)===!1&&(Es.intersectSphere(Mc,t_)===null||Es.origin.distanceToSquared(t_)>(e.far-e.near)**2))&&($g.copy(u).invert(),Es.copy(e.ray).applyMatrix4($g),!(s.boundingBox!==null&&Es.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Es)))}_computeIntersections(e,i,s){let l;const u=this.geometry,d=this.material,p=u.index,m=u.attributes.position,h=u.attributes.uv,v=u.attributes.uv1,x=u.attributes.normal,_=u.groups,y=u.drawRange;if(p!==null)if(Array.isArray(d))for(let T=0,C=_.length;T<C;T++){const M=_[T],S=d[M.materialIndex],w=Math.max(M.start,y.start),P=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let N=w,k=P;N<k;N+=3){const B=p.getX(N),F=p.getX(N+1),b=p.getX(N+2);l=Rc(this,S,e,s,h,v,x,B,F,b),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),C=Math.min(p.count,y.start+y.count);for(let M=T,S=C;M<S;M+=3){const w=p.getX(M),P=p.getX(M+1),N=p.getX(M+2);l=Rc(this,d,e,s,h,v,x,w,P,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,C=_.length;T<C;T++){const M=_[T],S=d[M.materialIndex],w=Math.max(M.start,y.start),P=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let N=w,k=P;N<k;N+=3){const B=N,F=N+1,b=N+2;l=Rc(this,S,e,s,h,v,x,B,F,b),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let M=T,S=C;M<S;M+=3){const w=M,P=M+1,N=M+2;l=Rc(this,d,e,s,h,v,x,w,P,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function OM(o,e,i,s,l,u,d,p){let m;if(e.side===Xn?m=s.intersectTriangle(d,u,l,!0,p):m=s.intersectTriangle(l,u,d,e.side===ns,p),m===null)return null;Ac.copy(p),Ac.applyMatrix4(o.matrixWorld);const h=i.ray.origin.distanceTo(Ac);return h<i.near||h>i.far?null:{distance:h,point:Ac.clone(),object:o}}function Rc(o,e,i,s,l,u,d,p,m,h){o.getVertexPosition(p,yc),o.getVertexPosition(m,Ec),o.getVertexPosition(h,Tc);const v=OM(o,e,i,s,yc,Ec,Tc,e_);if(v){const x=new at;bi.getBarycoord(e_,yc,Ec,Tc,x),l&&(v.uv=bi.getInterpolatedAttribute(l,p,m,h,x,new Ue)),u&&(v.uv1=bi.getInterpolatedAttribute(u,p,m,h,x,new Ue)),d&&(v.normal=bi.getInterpolatedAttribute(d,p,m,h,x,new at),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const _={a:p,b:m,c:h,normal:new at,materialIndex:0};bi.getNormal(yc,Ec,Tc,_.normal),v.face=_,v.barycoord=x}return v}class PM extends Dn{constructor(e=null,i=1,s=1,l,u,d,p,m,h=mn,v=mn,x,_){super(null,d,p,m,h,v,l,u,x,_),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dd=new at,IM=new at,zM=new de;class Rs{constructor(e=new at(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Dd.subVectors(s,i).cross(IM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Dd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||zM.getNormalMatrix(e),l=this.coplanarPoint(Dd).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ts=new Gh,FM=new Ue(.5,.5),Cc=new at;class J_{constructor(e=new Rs,i=new Rs,s=new Rs,l=new Rs,u=new Rs,d=new Rs){this.planes=[e,i,s,l,u,d]}set(e,i,s,l,u,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(u),p[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=zi,s=!1){const l=this.planes,u=e.elements,d=u[0],p=u[1],m=u[2],h=u[3],v=u[4],x=u[5],_=u[6],y=u[7],T=u[8],C=u[9],M=u[10],S=u[11],w=u[12],P=u[13],N=u[14],k=u[15];if(l[0].setComponents(h-d,y-v,S-T,k-w).normalize(),l[1].setComponents(h+d,y+v,S+T,k+w).normalize(),l[2].setComponents(h+p,y+x,S+C,k+P).normalize(),l[3].setComponents(h-p,y-x,S-C,k-P).normalize(),s)l[4].setComponents(m,_,M,N).normalize(),l[5].setComponents(h-m,y-_,S-M,k-N).normalize();else if(l[4].setComponents(h-m,y-_,S-M,k-N).normalize(),i===zi)l[5].setComponents(h+m,y+_,S+M,k+N).normalize();else if(i===Hc)l[5].setComponents(m,_,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ts.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){Ts.center.set(0,0,0);const i=FM.distanceTo(e.center);return Ts.radius=.7071067811865476+i,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Cc.x=l.normal.x>0?e.max.x:e.min.x,Cc.y=l.normal.y>0?e.max.y:e.min.y,Cc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Cc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $_ extends Dn{constructor(e=[],i=Ls,s,l,u,d,p,m,h,v){super(e,i,s,l,u,d,p,m,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wo extends Dn{constructor(e,i,s=Gi,l,u,d,p=mn,m=mn,h,v=xa,x=1){if(v!==xa&&v!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:x};super(_,l,u,d,p,m,v,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class BM extends Wo{constructor(e,i=Gi,s=Ls,l,u,d=mn,p=mn,m,h=xa){const v={width:e,height:e,depth:1},x=[v,v,v,v,v,v];super(e,e,i,s,l,u,d,p,m,h),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class tv extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class jo extends Ma{constructor(e=1,i=1,s=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:d};const p=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],h=[],v=[],x=[];let _=0,y=0;T("z","y","x",-1,-1,s,i,e,d,u,0),T("z","y","x",1,-1,s,i,-e,d,u,1),T("x","z","y",1,1,e,s,i,l,d,2),T("x","z","y",1,-1,e,s,-i,l,d,3),T("x","y","z",1,-1,e,i,s,l,u,4),T("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new _a(h,3)),this.setAttribute("normal",new _a(v,3)),this.setAttribute("uv",new _a(x,2));function T(C,M,S,w,P,N,k,B,F,b,D){const pt=N/F,H=k/b,$=N/2,it=k/2,lt=B/2,J=F+1,L=b+1;let I=0,ot=0;const dt=new at;for(let Et=0;Et<L;Et++){const O=Et*H-it;for(let Y=0;Y<J;Y++){const _t=Y*pt-$;dt[C]=_t*w,dt[M]=O*P,dt[S]=lt,h.push(dt.x,dt.y,dt.z),dt[C]=0,dt[M]=0,dt[S]=B>0?1:-1,v.push(dt.x,dt.y,dt.z),x.push(Y/F),x.push(1-Et/b),I+=1}}for(let Et=0;Et<b;Et++)for(let O=0;O<F;O++){const Y=_+O+J*Et,_t=_+O+J*(Et+1),At=_+(O+1)+J*(Et+1),zt=_+(O+1)+J*Et;m.push(Y,_t,zt),m.push(_t,At,zt),ot+=6}p.addGroup(y,ot,D),y+=ot,_+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Zo extends Ma{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,d=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,v=m+1,x=e/p,_=i/m,y=[],T=[],C=[],M=[];for(let S=0;S<v;S++){const w=S*_-d;for(let P=0;P<h;P++){const N=P*x-u;T.push(N,-w,0),C.push(0,0,1),M.push(P/p),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let w=0;w<p;w++){const P=w+h*S,N=w+h*(S+1),k=w+1+h*(S+1),B=w+1+h*S;y.push(P,N,B),y.push(N,k,B)}this.setIndex(y),this.setAttribute("position",new _a(T,3)),this.setAttribute("normal",new _a(C,3)),this.setAttribute("uv",new _a(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ir(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function In(o){const e={};for(let i=0;i<o.length;i++){const s=Ir(o[i]);for(const l in s)e[l]=s[l]}return e}function HM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function ev(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Te.workingColorSpace}const GM={clone:Ir,merge:In};var VM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends Wc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VM,this.fragmentShader=kM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=HM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class XM extends Ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class WM extends Wc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qM extends Wc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ud={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(n_(o)||(this.files[o]=e))},get:function(o){if(this.enabled!==!1&&!n_(o))return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};function n_(o){try{const e=o.slice(o.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class YM{constructor(e,i,s){const l=this;let u=!1,d=0,p=0,m;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(v){p++,u===!1&&l.onStart!==void 0&&l.onStart(v,d,p),u=!0},this.itemEnd=function(v){d++,l.onProgress!==void 0&&l.onProgress(v,d,p),d===p&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(v){l.onError!==void 0&&l.onError(v)},this.resolveURL=function(v){return m?m(v):v},this.setURLModifier=function(v){return m=v,this},this.addHandler=function(v,x){return h.push(v,x),this},this.removeHandler=function(v){const x=h.indexOf(v);return x!==-1&&h.splice(x,2),this},this.getHandler=function(v){for(let x=0,_=h.length;x<_;x+=2){const y=h[x],T=h[x+1];if(y.global&&(y.lastIndex=0),y.test(v))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const jM=new YM;class Vh{constructor(e){this.manager=e!==void 0?e:jM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,i){const s=this;return new Promise(function(l,u){s.load(e,l,i,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Vh.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ar=new WeakMap;class ZM extends Vh{constructor(e){super(e)}load(e,i,s,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,d=Ud.get(`image:${e}`);if(d!==void 0){if(d.complete===!0)u.manager.itemStart(e),setTimeout(function(){i&&i(d),u.manager.itemEnd(e)},0);else{let x=Ar.get(d);x===void 0&&(x=[],Ar.set(d,x)),x.push({onLoad:i,onError:l})}return d}const p=Xo("img");function m(){v(),i&&i(this);const x=Ar.get(this)||[];for(let _=0;_<x.length;_++){const y=x[_];y.onLoad&&y.onLoad(this)}Ar.delete(this),u.manager.itemEnd(e)}function h(x){v(),l&&l(x),Ud.remove(`image:${e}`);const _=Ar.get(this)||[];for(let y=0;y<_.length;y++){const T=_[y];T.onError&&T.onError(x)}Ar.delete(this),u.manager.itemError(e),u.manager.itemEnd(e)}function v(){p.removeEventListener("load",m,!1),p.removeEventListener("error",h,!1)}return p.addEventListener("load",m,!1),p.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(p.crossOrigin=this.crossOrigin),Ud.add(`image:${e}`,p),u.manager.itemStart(e),p.src=e,p}}class KM extends Vh{constructor(e){super(e)}load(e,i,s,l){const u=new Dn,d=new ZM(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(p){u.image=p,u.needsUpdate=!0,i!==void 0&&i(u)},s,l),u}}const wc=new at,Dc=new Fr,Ni=new at;class nv extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wc,Dc,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Dc,Ni.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(wc,Dc,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Dc,Ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $a=new at,i_=new Ue,a_=new Ue;class Ti extends nv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ah*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(od*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ah*2*Math.atan(Math.tan(od*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){$a.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($a.x,$a.y).multiplyScalar(-e/$a.z),$a.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set($a.x,$a.y).multiplyScalar(-e/$a.z)}getViewSize(e,i){return this.getViewBounds(e,i_,a_),i.subVectors(a_,i_)}setViewOffset(e,i,s,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(od*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*s/h,l*=d.width/m,s*=d.height/h}const p=this.filmOffset;p!==0&&(u+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class kh extends nv{constructor(e=-1,i=1,s=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,d=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=h*this.view.offsetX,d=u+h*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(u,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Rr=-90,Cr=1;class QM extends ni{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ti(Rr,Cr,e,i);l.layers=this.layers,this.add(l);const u=new Ti(Rr,Cr,e,i);u.layers=this.layers,this.add(u);const d=new Ti(Rr,Cr,e,i);d.layers=this.layers,this.add(d);const p=new Ti(Rr,Cr,e,i);p.layers=this.layers,this.add(p);const m=new Ti(Rr,Cr,e,i);m.layers=this.layers,this.add(m);const h=new Ti(Rr,Cr,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,d,p,m]=i;for(const h of i)this.remove(h);if(e===zi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Hc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,p,m,h,v]=this.children,x=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(s,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(x,_,y),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class JM extends Ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class $M{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=ty.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function ty(){this._document.hidden===!1&&this.reset()}function s_(o,e,i,s){const l=ey(s);switch(i){case V_:return o*e;case X_:return o*e/l.components*l.byteLength;case Ph:return o*e/l.components*l.byteLength;case Or:return o*e*2/l.components*l.byteLength;case Ih:return o*e*2/l.components*l.byteLength;case k_:return o*e*3/l.components*l.byteLength;case Ai:return o*e*4/l.components*l.byteLength;case zh:return o*e*4/l.components*l.byteLength;case Oc:case Pc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ic:case zc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Zd:case Qd:return Math.max(o,16)*Math.max(e,8)/4;case jd:case Kd:return Math.max(o,8)*Math.max(e,8)/2;case Jd:case $d:case eh:case nh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case th:case ih:case ah:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case sh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case rh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case oh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case lh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case ch:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case uh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case fh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case dh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case hh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case ph:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case mh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case gh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case _h:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case vh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case xh:case Sh:case Mh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case yh:case Eh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Th:case bh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ey(o){switch(o){case hi:case F_:return{byteLength:1,components:1};case Vo:case B_:case va:return{byteLength:2,components:1};case Nh:case Oh:return{byteLength:2,components:4};case Gi:case Lh:case Ii:return{byteLength:4,components:1};case H_:case G_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uh}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uh);function iv(){let o=null,e=!1,i=null,s=null;function l(u,d){i(u,d),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function ny(o){const e=new WeakMap;function i(p,m){const h=p.array,v=p.usage,x=h.byteLength,_=o.createBuffer();o.bindBuffer(m,_),o.bufferData(m,h,v),p.onUploadCallback();let y;if(h instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=o.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=o.SHORT;else if(h instanceof Uint32Array)y=o.UNSIGNED_INT;else if(h instanceof Int32Array)y=o.INT;else if(h instanceof Int8Array)y=o.BYTE;else if(h instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:x}}function s(p,m,h){const v=m.array,x=m.updateRanges;if(o.bindBuffer(h,p),x.length===0)o.bufferSubData(h,0,v);else{x.sort((y,T)=>y.start-T.start);let _=0;for(let y=1;y<x.length;y++){const T=x[_],C=x[y];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++_,x[_]=C)}x.length=_+1;for(let y=0,T=x.length;y<T;y++){const C=x[y];o.bufferSubData(h,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(o.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=e.get(p);(!v||v.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:u,update:d}}var iy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ay=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ry=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ly=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,dy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,py=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,my=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_y=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ey=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ty=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,by=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ay=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ry=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ly=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ny="gl_FragColor = linearToOutputTexel( gl_FragColor );",Oy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Py=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Iy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,By=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ky=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ky=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$y=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,eE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,aE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_E=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ME=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,AE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,UE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,LE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,FE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,BE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,HE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,GE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,VE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,XE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,KE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,QE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,e1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const n1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,c1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,u1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,f1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,M1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,E1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,T1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,R1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,U1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:iy,alphahash_pars_fragment:ay,alphamap_fragment:sy,alphamap_pars_fragment:ry,alphatest_fragment:oy,alphatest_pars_fragment:ly,aomap_fragment:cy,aomap_pars_fragment:uy,batching_pars_vertex:fy,batching_vertex:dy,begin_vertex:hy,beginnormal_vertex:py,bsdfs:my,iridescence_fragment:gy,bumpmap_pars_fragment:_y,clipping_planes_fragment:vy,clipping_planes_pars_fragment:xy,clipping_planes_pars_vertex:Sy,clipping_planes_vertex:My,color_fragment:yy,color_pars_fragment:Ey,color_pars_vertex:Ty,color_vertex:by,common:Ay,cube_uv_reflection_fragment:Ry,defaultnormal_vertex:Cy,displacementmap_pars_vertex:wy,displacementmap_vertex:Dy,emissivemap_fragment:Uy,emissivemap_pars_fragment:Ly,colorspace_fragment:Ny,colorspace_pars_fragment:Oy,envmap_fragment:Py,envmap_common_pars_fragment:Iy,envmap_pars_fragment:zy,envmap_pars_vertex:Fy,envmap_physical_pars_fragment:Zy,envmap_vertex:By,fog_vertex:Hy,fog_pars_vertex:Gy,fog_fragment:Vy,fog_pars_fragment:ky,gradientmap_pars_fragment:Xy,lightmap_pars_fragment:Wy,lights_lambert_fragment:qy,lights_lambert_pars_fragment:Yy,lights_pars_begin:jy,lights_toon_fragment:Ky,lights_toon_pars_fragment:Qy,lights_phong_fragment:Jy,lights_phong_pars_fragment:$y,lights_physical_fragment:tE,lights_physical_pars_fragment:eE,lights_fragment_begin:nE,lights_fragment_maps:iE,lights_fragment_end:aE,logdepthbuf_fragment:sE,logdepthbuf_pars_fragment:rE,logdepthbuf_pars_vertex:oE,logdepthbuf_vertex:lE,map_fragment:cE,map_pars_fragment:uE,map_particle_fragment:fE,map_particle_pars_fragment:dE,metalnessmap_fragment:hE,metalnessmap_pars_fragment:pE,morphinstance_vertex:mE,morphcolor_vertex:gE,morphnormal_vertex:_E,morphtarget_pars_vertex:vE,morphtarget_vertex:xE,normal_fragment_begin:SE,normal_fragment_maps:ME,normal_pars_fragment:yE,normal_pars_vertex:EE,normal_vertex:TE,normalmap_pars_fragment:bE,clearcoat_normal_fragment_begin:AE,clearcoat_normal_fragment_maps:RE,clearcoat_pars_fragment:CE,iridescence_pars_fragment:wE,opaque_fragment:DE,packing:UE,premultiplied_alpha_fragment:LE,project_vertex:NE,dithering_fragment:OE,dithering_pars_fragment:PE,roughnessmap_fragment:IE,roughnessmap_pars_fragment:zE,shadowmap_pars_fragment:FE,shadowmap_pars_vertex:BE,shadowmap_vertex:HE,shadowmask_pars_fragment:GE,skinbase_vertex:VE,skinning_pars_vertex:kE,skinning_vertex:XE,skinnormal_vertex:WE,specularmap_fragment:qE,specularmap_pars_fragment:YE,tonemapping_fragment:jE,tonemapping_pars_fragment:ZE,transmission_fragment:KE,transmission_pars_fragment:QE,uv_pars_fragment:JE,uv_pars_vertex:$E,uv_vertex:t1,worldpos_vertex:e1,background_vert:n1,background_frag:i1,backgroundCube_vert:a1,backgroundCube_frag:s1,cube_vert:r1,cube_frag:o1,depth_vert:l1,depth_frag:c1,distance_vert:u1,distance_frag:f1,equirect_vert:d1,equirect_frag:h1,linedashed_vert:p1,linedashed_frag:m1,meshbasic_vert:g1,meshbasic_frag:_1,meshlambert_vert:v1,meshlambert_frag:x1,meshmatcap_vert:S1,meshmatcap_frag:M1,meshnormal_vert:y1,meshnormal_frag:E1,meshphong_vert:T1,meshphong_frag:b1,meshphysical_vert:A1,meshphysical_frag:R1,meshtoon_vert:C1,meshtoon_frag:w1,points_vert:D1,points_frag:U1,shadow_vert:L1,shadow_frag:N1,sprite_vert:O1,sprite_frag:P1},Lt={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Pi={basic:{uniforms:In([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:In([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:In([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:In([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:In([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Ge(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:In([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:In([Lt.points,Lt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:In([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:In([Lt.common,Lt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:In([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:In([Lt.sprite,Lt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:In([Lt.common,Lt.displacementmap,{referencePosition:{value:new at},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:In([Lt.lights,Lt.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Pi.physical={uniforms:In([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const Uc={r:0,b:0,g:0},bs=new Sa,I1=new fn;function z1(o,e,i,s,l,u){const d=new Ge(0);let p=l===!0?0:1,m,h,v=null,x=0,_=null;function y(w){let P=w.isScene===!0?w.background:null;if(P&&P.isTexture){const N=w.backgroundBlurriness>0;P=e.get(P,N)}return P}function T(w){let P=!1;const N=y(w);N===null?M(d,p):N&&N.isColor&&(M(N,1),P=!0);const k=o.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,u):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function C(w,P){const N=y(P);N&&(N.isCubeTexture||N.mapping===Xc)?(h===void 0&&(h=new Vi(new jo(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:Ir(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(k,B,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),bs.copy(P.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),h.material.uniforms.envMap.value=N,h.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(I1.makeRotationFromEuler(bs)),h.material.toneMapped=Te.getTransfer(N.colorSpace)!==ze,(v!==N||x!==N.version||_!==o.toneMapping)&&(h.material.needsUpdate=!0,v=N,x=N.version,_=o.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new Vi(new Zo(2,2),new Ri({name:"BackgroundMaterial",uniforms:Ir(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Te.getTransfer(N.colorSpace)!==ze,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||x!==N.version||_!==o.toneMapping)&&(m.material.needsUpdate=!0,v=N,x=N.version,_=o.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function M(w,P){w.getRGB(Uc,ev(o)),i.buffers.color.setClear(Uc.r,Uc.g,Uc.b,P,u)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(w,P=1){d.set(w),p=P,M(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(w){p=w,M(d,p)},render:T,addToRenderList:C,dispose:S}}function F1(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=_(null);let u=l,d=!1;function p(H,$,it,lt,J){let L=!1;const I=x(H,lt,it,$);u!==I&&(u=I,h(u.object)),L=y(H,lt,it,J),L&&T(H,lt,it,J),J!==null&&e.update(J,o.ELEMENT_ARRAY_BUFFER),(L||d)&&(d=!1,N(H,$,it,lt),J!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function m(){return o.createVertexArray()}function h(H){return o.bindVertexArray(H)}function v(H){return o.deleteVertexArray(H)}function x(H,$,it,lt){const J=lt.wireframe===!0;let L=s[$.id];L===void 0&&(L={},s[$.id]=L);const I=H.isInstancedMesh===!0?H.id:0;let ot=L[I];ot===void 0&&(ot={},L[I]=ot);let dt=ot[it.id];dt===void 0&&(dt={},ot[it.id]=dt);let Et=dt[J];return Et===void 0&&(Et=_(m()),dt[J]=Et),Et}function _(H){const $=[],it=[],lt=[];for(let J=0;J<i;J++)$[J]=0,it[J]=0,lt[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:it,attributeDivisors:lt,object:H,attributes:{},index:null}}function y(H,$,it,lt){const J=u.attributes,L=$.attributes;let I=0;const ot=it.getAttributes();for(const dt in ot)if(ot[dt].location>=0){const O=J[dt];let Y=L[dt];if(Y===void 0&&(dt==="instanceMatrix"&&H.instanceMatrix&&(Y=H.instanceMatrix),dt==="instanceColor"&&H.instanceColor&&(Y=H.instanceColor)),O===void 0||O.attribute!==Y||Y&&O.data!==Y.data)return!0;I++}return u.attributesNum!==I||u.index!==lt}function T(H,$,it,lt){const J={},L=$.attributes;let I=0;const ot=it.getAttributes();for(const dt in ot)if(ot[dt].location>=0){let O=L[dt];O===void 0&&(dt==="instanceMatrix"&&H.instanceMatrix&&(O=H.instanceMatrix),dt==="instanceColor"&&H.instanceColor&&(O=H.instanceColor));const Y={};Y.attribute=O,O&&O.data&&(Y.data=O.data),J[dt]=Y,I++}u.attributes=J,u.attributesNum=I,u.index=lt}function C(){const H=u.newAttributes;for(let $=0,it=H.length;$<it;$++)H[$]=0}function M(H){S(H,0)}function S(H,$){const it=u.newAttributes,lt=u.enabledAttributes,J=u.attributeDivisors;it[H]=1,lt[H]===0&&(o.enableVertexAttribArray(H),lt[H]=1),J[H]!==$&&(o.vertexAttribDivisor(H,$),J[H]=$)}function w(){const H=u.newAttributes,$=u.enabledAttributes;for(let it=0,lt=$.length;it<lt;it++)$[it]!==H[it]&&(o.disableVertexAttribArray(it),$[it]=0)}function P(H,$,it,lt,J,L,I){I===!0?o.vertexAttribIPointer(H,$,it,J,L):o.vertexAttribPointer(H,$,it,lt,J,L)}function N(H,$,it,lt){C();const J=lt.attributes,L=it.getAttributes(),I=$.defaultAttributeValues;for(const ot in L){const dt=L[ot];if(dt.location>=0){let Et=J[ot];if(Et===void 0&&(ot==="instanceMatrix"&&H.instanceMatrix&&(Et=H.instanceMatrix),ot==="instanceColor"&&H.instanceColor&&(Et=H.instanceColor)),Et!==void 0){const O=Et.normalized,Y=Et.itemSize,_t=e.get(Et);if(_t===void 0)continue;const At=_t.buffer,zt=_t.type,et=_t.bytesPerElement,vt=zt===o.INT||zt===o.UNSIGNED_INT||Et.gpuType===Lh;if(Et.isInterleavedBufferAttribute){const Tt=Et.data,kt=Tt.stride,Kt=Et.offset;if(Tt.isInstancedInterleavedBuffer){for(let $t=0;$t<dt.locationSize;$t++)S(dt.location+$t,Tt.meshPerAttribute);H.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let $t=0;$t<dt.locationSize;$t++)M(dt.location+$t);o.bindBuffer(o.ARRAY_BUFFER,At);for(let $t=0;$t<dt.locationSize;$t++)P(dt.location+$t,Y/dt.locationSize,zt,O,kt*et,(Kt+Y/dt.locationSize*$t)*et,vt)}else{if(Et.isInstancedBufferAttribute){for(let Tt=0;Tt<dt.locationSize;Tt++)S(dt.location+Tt,Et.meshPerAttribute);H.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Tt=0;Tt<dt.locationSize;Tt++)M(dt.location+Tt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Tt=0;Tt<dt.locationSize;Tt++)P(dt.location+Tt,Y/dt.locationSize,zt,O,Y*et,Y/dt.locationSize*Tt*et,vt)}}else if(I!==void 0){const O=I[ot];if(O!==void 0)switch(O.length){case 2:o.vertexAttrib2fv(dt.location,O);break;case 3:o.vertexAttrib3fv(dt.location,O);break;case 4:o.vertexAttrib4fv(dt.location,O);break;default:o.vertexAttrib1fv(dt.location,O)}}}}w()}function k(){D();for(const H in s){const $=s[H];for(const it in $){const lt=$[it];for(const J in lt){const L=lt[J];for(const I in L)v(L[I].object),delete L[I];delete lt[J]}}delete s[H]}}function B(H){if(s[H.id]===void 0)return;const $=s[H.id];for(const it in $){const lt=$[it];for(const J in lt){const L=lt[J];for(const I in L)v(L[I].object),delete L[I];delete lt[J]}}delete s[H.id]}function F(H){for(const $ in s){const it=s[$];for(const lt in it){const J=it[lt];if(J[H.id]===void 0)continue;const L=J[H.id];for(const I in L)v(L[I].object),delete L[I];delete J[H.id]}}}function b(H){for(const $ in s){const it=s[$],lt=H.isInstancedMesh===!0?H.id:0,J=it[lt];if(J!==void 0){for(const L in J){const I=J[L];for(const ot in I)v(I[ot].object),delete I[ot];delete J[L]}delete it[lt],Object.keys(it).length===0&&delete s[$]}}}function D(){pt(),d=!0,u!==l&&(u=l,h(u.object))}function pt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:D,resetDefaultState:pt,dispose:k,releaseStatesOfGeometry:B,releaseStatesOfObject:b,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:M,disableUnusedAttributes:w}}function B1(o,e,i){let s;function l(h){s=h}function u(h,v){o.drawArrays(s,h,v),i.update(v,s,1)}function d(h,v,x){x!==0&&(o.drawArraysInstanced(s,h,v,x),i.update(v,s,x))}function p(h,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,v,0,x);let y=0;for(let T=0;T<x;T++)y+=v[T];i.update(y,s,1)}function m(h,v,x,_){if(x===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<h.length;T++)d(h[T],v[T],_[T]);else{y.multiDrawArraysInstancedWEBGL(s,h,0,v,0,_,0,x);let T=0;for(let C=0;C<x;C++)T+=v[C]*_[C];i.update(T,s,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function H1(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(F){return!(F!==Ai&&s.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(F){const b=F===va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==hi&&s.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ii&&!b)}function m(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const v=m(h);v!==h&&(re("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const x=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),w=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),k=o.getParameter(o.MAX_SAMPLES),B=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:x,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:w,maxVaryings:P,maxFragmentUniforms:N,maxSamples:k,samples:B}}function G1(o){const e=this;let i=null,s=0,l=!1,u=!1;const d=new Rs,p=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const y=x.length!==0||_||s!==0||l;return l=_,s=x.length,y},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,_){i=v(x,_,0)},this.setState=function(x,_,y){const T=x.clippingPlanes,C=x.clipIntersection,M=x.clipShadows,S=o.get(x);if(!l||T===null||T.length===0||u&&!M)u?v(null):h();else{const w=u?0:s,P=w*4;let N=S.clippingState||null;m.value=N,N=v(T,_,P,y);for(let k=0;k!==P;++k)N[k]=i[k];S.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=w}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(x,_,y,T){const C=x!==null?x.length:0;let M=null;if(C!==0){if(M=m.value,T!==!0||M===null){const S=y+C*4,w=_.matrixWorldInverse;p.getNormalMatrix(w),(M===null||M.length<S)&&(M=new Float32Array(S));for(let P=0,N=y;P!==C;++P,N+=4)d.copy(x[P]).applyMatrix4(w,p),d.normal.toArray(M,N),M[N+3]=d.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}const es=4,r_=[.125,.215,.35,.446,.526,.582],ws=20,V1=256,zo=new kh,o_=new Ge;let Ld=null,Nd=0,Od=0,Pd=!1;const k1=new at;class l_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,u={}){const{size:d=256,position:p=k1}=u;Ld=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=f_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=u_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ld,Nd,Od),this._renderer.xr.enabled=Pd,e.scissorTest=!1,wr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ls||e.mapping===Nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ld=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:va,format:Ai,colorSpace:Pr,depthBuffer:!1},l=c_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=c_(e,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=X1(u)),this._blurMaterial=q1(u,e,i),this._ggxMaterial=W1(u,e,i)}return l}_compileMaterial(e){const i=new Vi(new Ma,e);this._renderer.compile(i,zo)}_sceneToCubeUV(e,i,s,l,u){const m=new Ti(90,1,i,s),h=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,y=x.toneMapping;x.getClearColor(o_),x.toneMapping=Fi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vi(new jo,new Q_({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let S=!1;const w=e.background;w?w.isColor&&(M.color.copy(w),e.background=null,S=!0):(M.color.copy(o_),S=!0);for(let P=0;P<6;P++){const N=P%3;N===0?(m.up.set(0,h[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[P],u.y,u.z)):N===1?(m.up.set(0,0,h[P]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[P],u.z)):(m.up.set(0,h[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[P]));const k=this._cubeSize;wr(l,N*k,P>2?k:0,k,k),x.setRenderTarget(l),S&&x.render(C,m),x.render(e,m)}x.toneMapping=y,x.autoClear=_,e.background=w}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Ls||e.mapping===Nr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=f_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=u_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const p=u.uniforms;p.envMap.value=e;const m=this._cubeSize;wr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,zo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[s];p.material=d;const m=d.uniforms,h=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),x=Math.sqrt(h*h-v*v),_=0+h*1.25,y=x*_,{_lodMax:T}=this,C=this._sizeLods[s],M=3*C*(s>T-es?s-T+es:0),S=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=T-i,wr(u,M,S,3*C,2*C),l.setRenderTarget(u),l.render(p,zo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=T-s,wr(e,M,S,3*C,2*C),l.setRenderTarget(e),l.render(p,zo)}_blur(e,i,s,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",u),this._halfBlur(d,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");const v=3,x=this._lodMeshes[l];x.material=h;const _=h.uniforms,y=this._sizeLods[s]-1,T=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*ws-1),C=u/T,M=isFinite(u)?1+Math.floor(v*C):ws;M>ws&&re(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ws}`);const S=[];let w=0;for(let F=0;F<ws;++F){const b=F/C,D=Math.exp(-b*b/2);S.push(D),F===0?w+=D:F<M&&(w+=2*D)}for(let F=0;F<S.length;F++)S[F]=S[F]/w;_.envMap.value=e.texture,_.samples.value=M,_.weights.value=S,_.latitudinal.value=d==="latitudinal",p&&(_.poleAxis.value=p);const{_lodMax:P}=this;_.dTheta.value=T,_.mipInt.value=P-s;const N=this._sizeLods[l],k=3*N*(l>P-es?l-P+es:0),B=4*(this._cubeSize-N);wr(i,k,B,3*N,2*N),m.setRenderTarget(i),m.render(x,zo)}}function X1(o){const e=[],i=[],s=[];let l=o;const u=o-es+1+r_.length;for(let d=0;d<u;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>o-es?m=r_[d-o+es-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),v=-h,x=1+h,_=[v,v,x,v,x,x,v,v,x,x,v,x],y=6,T=6,C=3,M=2,S=1,w=new Float32Array(C*T*y),P=new Float32Array(M*T*y),N=new Float32Array(S*T*y);for(let B=0;B<y;B++){const F=B%3*2/3-1,b=B>2?0:-1,D=[F,b,0,F+2/3,b,0,F+2/3,b+1,0,F,b,0,F+2/3,b+1,0,F,b+1,0];w.set(D,C*T*B),P.set(_,M*T*B);const pt=[B,B,B,B,B,B];N.set(pt,S*T*B)}const k=new Ma;k.setAttribute("position",new Hi(w,C)),k.setAttribute("uv",new Hi(P,M)),k.setAttribute("faceIndex",new Hi(N,S)),s.push(new Vi(k,null)),l>es&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function c_(o,e,i){const s=new Bi(o,e,i);return s.texture.mapping=Xc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function wr(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function W1(o,e,i){return new Ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:V1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function q1(o,e,i){const s=new Float32Array(ws),l=new at(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function u_(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function f_(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function qc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class av extends Bi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new $_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new jo(5,5,5),u=new Ri({name:"CubemapFromEquirect",uniforms:Ir(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Xn,blending:ma});u.uniforms.tEquirect.value=i;const d=new Vi(l,u),p=i.minFilter;return i.minFilter===Ds&&(i.minFilter=wn),new QM(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(u)}}function Y1(o){let e=new WeakMap,i=new WeakMap,s=null;function l(_,y=!1){return _==null?null:y?d(_):u(_)}function u(_){if(_&&_.isTexture){const y=_.mapping;if(y===ad||y===sd)if(e.has(_)){const T=e.get(_).texture;return p(T,_.mapping)}else{const T=_.image;if(T&&T.height>0){const C=new av(T.height);return C.fromEquirectangularTexture(o,_),e.set(_,C),_.addEventListener("dispose",h),p(C.texture,_.mapping)}else return null}}return _}function d(_){if(_&&_.isTexture){const y=_.mapping,T=y===ad||y===sd,C=y===Ls||y===Nr;if(T||C){let M=i.get(_);const S=M!==void 0?M.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==S)return s===null&&(s=new l_(o)),M=T?s.fromEquirectangular(_,M):s.fromCubemap(_,M),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),M.texture;if(M!==void 0)return M.texture;{const w=_.image;return T&&w&&w.height>0||C&&w&&m(w)?(s===null&&(s=new l_(o)),M=T?s.fromEquirectangular(_):s.fromCubemap(_),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),_.addEventListener("dispose",v),M.texture):null}}}return _}function p(_,y){return y===ad?_.mapping=Ls:y===sd&&(_.mapping=Nr),_}function m(_){let y=0;const T=6;for(let C=0;C<T;C++)_[C]!==void 0&&y++;return y===T}function h(_){const y=_.target;y.removeEventListener("dispose",h);const T=e.get(y);T!==void 0&&(e.delete(y),T.dispose())}function v(_){const y=_.target;y.removeEventListener("dispose",v);const T=i.get(y);T!==void 0&&(i.delete(y),T.dispose())}function x(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function j1(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Gc("WebGLRenderer: "+s+" extension not supported."),l}}}function Z1(o,e,i,s){const l={},u=new WeakMap;function d(x){const _=x.target;_.index!==null&&e.remove(_.index);for(const T in _.attributes)e.remove(_.attributes[T]);_.removeEventListener("dispose",d),delete l[_.id];const y=u.get(_);y&&(e.remove(y),u.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function p(x,_){return l[_.id]===!0||(_.addEventListener("dispose",d),l[_.id]=!0,i.memory.geometries++),_}function m(x){const _=x.attributes;for(const y in _)e.update(_[y],o.ARRAY_BUFFER)}function h(x){const _=[],y=x.index,T=x.attributes.position;let C=0;if(T===void 0)return;if(y!==null){const w=y.array;C=y.version;for(let P=0,N=w.length;P<N;P+=3){const k=w[P+0],B=w[P+1],F=w[P+2];_.push(k,B,B,F,F,k)}}else{const w=T.array;C=T.version;for(let P=0,N=w.length/3-1;P<N;P+=3){const k=P+0,B=P+1,F=P+2;_.push(k,B,B,F,F,k)}}const M=new(T.count>=65535?K_:Z_)(_,1);M.version=C;const S=u.get(x);S&&e.remove(S),u.set(x,M)}function v(x){const _=u.get(x);if(_){const y=x.index;y!==null&&_.version<y.version&&h(x)}else h(x);return u.get(x)}return{get:p,update:m,getWireframeAttribute:v}}function K1(o,e,i){let s;function l(_){s=_}let u,d;function p(_){u=_.type,d=_.bytesPerElement}function m(_,y){o.drawElements(s,y,u,_*d),i.update(y,s,1)}function h(_,y,T){T!==0&&(o.drawElementsInstanced(s,y,u,_*d,T),i.update(y,s,T))}function v(_,y,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,u,_,0,T);let M=0;for(let S=0;S<T;S++)M+=y[S];i.update(M,s,1)}function x(_,y,T,C){if(T===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<_.length;S++)h(_[S]/d,y[S],C[S]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,u,_,0,C,0,T);let S=0;for(let w=0;w<T;w++)S+=y[w]*C[w];i.update(S,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=v,this.renderMultiDrawInstances=x}function Q1(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,d,p){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=p*(u/3);break;case o.LINES:i.lines+=p*(u/2);break;case o.LINE_STRIP:i.lines+=p*(u-1);break;case o.LINE_LOOP:i.lines+=p*u;break;case o.POINTS:i.points+=p*u;break;default:Ce("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function J1(o,e,i){const s=new WeakMap,l=new en;function u(d,p,m){const h=d.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=v!==void 0?v.length:0;let _=s.get(p);if(_===void 0||_.count!==x){let pt=function(){b.dispose(),s.delete(p),p.removeEventListener("dispose",pt)};var y=pt;_!==void 0&&_.texture.dispose();const T=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,S=p.morphAttributes.position||[],w=p.morphAttributes.normal||[],P=p.morphAttributes.color||[];let N=0;T===!0&&(N=1),C===!0&&(N=2),M===!0&&(N=3);let k=p.attributes.position.count*N,B=1;k>e.maxTextureSize&&(B=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const F=new Float32Array(k*B*4*x),b=new q_(F,k,B,x);b.type=Ii,b.needsUpdate=!0;const D=N*4;for(let H=0;H<x;H++){const $=S[H],it=w[H],lt=P[H],J=k*B*4*H;for(let L=0;L<$.count;L++){const I=L*D;T===!0&&(l.fromBufferAttribute($,L),F[J+I+0]=l.x,F[J+I+1]=l.y,F[J+I+2]=l.z,F[J+I+3]=0),C===!0&&(l.fromBufferAttribute(it,L),F[J+I+4]=l.x,F[J+I+5]=l.y,F[J+I+6]=l.z,F[J+I+7]=0),M===!0&&(l.fromBufferAttribute(lt,L),F[J+I+8]=l.x,F[J+I+9]=l.y,F[J+I+10]=l.z,F[J+I+11]=lt.itemSize===4?l.w:1)}}_={count:x,texture:b,size:new Ue(k,B)},s.set(p,_),p.addEventListener("dispose",pt)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let T=0;for(let M=0;M<h.length;M++)T+=h[M];const C=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",h)}m.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:u}}function $1(o,e,i,s,l){let u=new WeakMap;function d(h){const v=l.render.frame,x=h.geometry,_=e.get(h,x);if(u.get(_)!==v&&(e.update(_),u.set(_,v)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),u.get(h)!==v&&(i.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,o.ARRAY_BUFFER),u.set(h,v))),h.isSkinnedMesh){const y=h.skeleton;u.get(y)!==v&&(y.update(),u.set(y,v))}return _}function p(){u=new WeakMap}function m(h){const v=h.target;v.removeEventListener("dispose",m),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:d,dispose:p}}const tT={[D_]:"LINEAR_TONE_MAPPING",[U_]:"REINHARD_TONE_MAPPING",[L_]:"CINEON_TONE_MAPPING",[N_]:"ACES_FILMIC_TONE_MAPPING",[P_]:"AGX_TONE_MAPPING",[I_]:"NEUTRAL_TONE_MAPPING",[O_]:"CUSTOM_TONE_MAPPING"};function eT(o,e,i,s,l){const u=new Bi(e,i,{type:o,depthBuffer:s,stencilBuffer:l}),d=new Bi(e,i,{type:va,depthBuffer:!1,stencilBuffer:!1}),p=new Ma;p.setAttribute("position",new _a([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new _a([0,2,0,0,2,0],2));const m=new XM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Vi(p,m),v=new kh(-1,1,1,-1,0,1);let x=null,_=null,y=!1,T,C=null,M=[],S=!1;this.setSize=function(w,P){u.setSize(w,P),d.setSize(w,P);for(let N=0;N<M.length;N++){const k=M[N];k.setSize&&k.setSize(w,P)}},this.setEffects=function(w){M=w,S=M.length>0&&M[0].isRenderPass===!0;const P=u.width,N=u.height;for(let k=0;k<M.length;k++){const B=M[k];B.setSize&&B.setSize(P,N)}},this.begin=function(w,P){if(y||w.toneMapping===Fi&&M.length===0)return!1;if(C=P,P!==null){const N=P.width,k=P.height;(u.width!==N||u.height!==k)&&this.setSize(N,k)}return S===!1&&w.setRenderTarget(u),T=w.toneMapping,w.toneMapping=Fi,!0},this.hasRenderPass=function(){return S},this.end=function(w,P){w.toneMapping=T,y=!0;let N=u,k=d;for(let B=0;B<M.length;B++){const F=M[B];if(F.enabled!==!1&&(F.render(w,k,N,P),F.needsSwap!==!1)){const b=N;N=k,k=b}}if(x!==w.outputColorSpace||_!==w.toneMapping){x=w.outputColorSpace,_=w.toneMapping,m.defines={},Te.getTransfer(x)===ze&&(m.defines.SRGB_TRANSFER="");const B=tT[_];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,w.setRenderTarget(C),w.render(h,v),C=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){u.dispose(),d.dispose(),p.dispose(),m.dispose()}}const sv=new Dn,Rh=new Wo(1,1),rv=new q_,ov=new SM,lv=new $_,d_=[],h_=[],p_=new Float32Array(16),m_=new Float32Array(9),g_=new Float32Array(4);function Br(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=d_[l];if(u===void 0&&(u=new Float32Array(l),d_[l]=u),e!==0){s.toArray(u,0);for(let d=1,p=0;d!==e;++d)p+=i,o[d].toArray(u,p)}return u}function gn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function _n(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Yc(o,e){let i=h_[e];i===void 0&&(i=new Int32Array(e),h_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function nT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function iT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2fv(this.addr,e),_n(i,e)}}function aT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;o.uniform3fv(this.addr,e),_n(i,e)}}function sT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4fv(this.addr,e),_n(i,e)}}function rT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,s))return;g_.set(s),o.uniformMatrix2fv(this.addr,!1,g_),_n(i,s)}}function oT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,s))return;m_.set(s),o.uniformMatrix3fv(this.addr,!1,m_),_n(i,s)}}function lT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,s))return;p_.set(s),o.uniformMatrix4fv(this.addr,!1,p_),_n(i,s)}}function cT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function uT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2iv(this.addr,e),_n(i,e)}}function fT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3iv(this.addr,e),_n(i,e)}}function dT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4iv(this.addr,e),_n(i,e)}}function hT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function pT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2uiv(this.addr,e),_n(i,e)}}function mT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3uiv(this.addr,e),_n(i,e)}}function gT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4uiv(this.addr,e),_n(i,e)}}function _T(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Rh.compareFunction=i.isReversedDepthBuffer()?Bh:Fh,u=Rh):u=sv,i.setTexture2D(e||u,l)}function vT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||ov,l)}function xT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||lv,l)}function ST(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||rv,l)}function MT(o){switch(o){case 5126:return nT;case 35664:return iT;case 35665:return aT;case 35666:return sT;case 35674:return rT;case 35675:return oT;case 35676:return lT;case 5124:case 35670:return cT;case 35667:case 35671:return uT;case 35668:case 35672:return fT;case 35669:case 35673:return dT;case 5125:return hT;case 36294:return pT;case 36295:return mT;case 36296:return gT;case 35678:case 36198:case 36298:case 36306:case 35682:return _T;case 35679:case 36299:case 36307:return vT;case 35680:case 36300:case 36308:case 36293:return xT;case 36289:case 36303:case 36311:case 36292:return ST}}function yT(o,e){o.uniform1fv(this.addr,e)}function ET(o,e){const i=Br(e,this.size,2);o.uniform2fv(this.addr,i)}function TT(o,e){const i=Br(e,this.size,3);o.uniform3fv(this.addr,i)}function bT(o,e){const i=Br(e,this.size,4);o.uniform4fv(this.addr,i)}function AT(o,e){const i=Br(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function RT(o,e){const i=Br(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function CT(o,e){const i=Br(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function wT(o,e){o.uniform1iv(this.addr,e)}function DT(o,e){o.uniform2iv(this.addr,e)}function UT(o,e){o.uniform3iv(this.addr,e)}function LT(o,e){o.uniform4iv(this.addr,e)}function NT(o,e){o.uniform1uiv(this.addr,e)}function OT(o,e){o.uniform2uiv(this.addr,e)}function PT(o,e){o.uniform3uiv(this.addr,e)}function IT(o,e){o.uniform4uiv(this.addr,e)}function zT(o,e,i){const s=this.cache,l=e.length,u=Yc(i,l);gn(s,u)||(o.uniform1iv(this.addr,u),_n(s,u));let d;this.type===o.SAMPLER_2D_SHADOW?d=Rh:d=sv;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||d,u[p])}function FT(o,e,i){const s=this.cache,l=e.length,u=Yc(i,l);gn(s,u)||(o.uniform1iv(this.addr,u),_n(s,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||ov,u[d])}function BT(o,e,i){const s=this.cache,l=e.length,u=Yc(i,l);gn(s,u)||(o.uniform1iv(this.addr,u),_n(s,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||lv,u[d])}function HT(o,e,i){const s=this.cache,l=e.length,u=Yc(i,l);gn(s,u)||(o.uniform1iv(this.addr,u),_n(s,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||rv,u[d])}function GT(o){switch(o){case 5126:return yT;case 35664:return ET;case 35665:return TT;case 35666:return bT;case 35674:return AT;case 35675:return RT;case 35676:return CT;case 5124:case 35670:return wT;case 35667:case 35671:return DT;case 35668:case 35672:return UT;case 35669:case 35673:return LT;case 5125:return NT;case 36294:return OT;case 36295:return PT;case 36296:return IT;case 35678:case 36198:case 36298:case 36306:case 35682:return zT;case 35679:case 36299:case 36307:return FT;case 35680:case 36300:case 36308:case 36293:return BT;case 36289:case 36303:case 36311:case 36292:return HT}}class VT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=MT(i.type)}}class kT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=GT(i.type)}}class XT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const p=l[u];p.setValue(e,i[p.id],s)}}}const Id=/(\w+)(\])?(\[|\.)?/g;function __(o,e){o.seq.push(e),o.map[e.id]=e}function WT(o,e,i){const s=o.name,l=s.length;for(Id.lastIndex=0;;){const u=Id.exec(s),d=Id.lastIndex;let p=u[1];const m=u[2]==="]",h=u[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){__(i,h===void 0?new VT(p,o,e):new kT(p,o,e));break}else{let x=i.map[p];x===void 0&&(x=new XT(p),__(i,x)),i=x}}}class Fc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=e.getActiveUniform(i,d),m=e.getUniformLocation(i,p.name);WT(p,m,this)}const l=[],u=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,d=i.length;u!==d;++u){const p=i[u],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function v_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const qT=37297;let YT=0;function jT(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const p=d+1;s.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const x_=new de;function ZT(o){Te._getMatrix(x_,Te.workingColorSpace,o);const e=`mat3( ${x_.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(o)){case Bc:return[e,"LinearTransferOETF"];case ze:return[e,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function S_(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(s&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+jT(o.getShaderSource(e),p)}else return u}function KT(o,e){const i=ZT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const QT={[D_]:"Linear",[U_]:"Reinhard",[L_]:"Cineon",[N_]:"ACESFilmic",[P_]:"AgX",[I_]:"Neutral",[O_]:"Custom"};function JT(o,e){const i=QT[e];return i===void 0?(re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Lc=new at;function $T(){Te.getLuminanceCoefficients(Lc);const o=Lc.x.toFixed(4),e=Lc.y.toFixed(4),i=Lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function eb(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function nb(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),d=u.name;let p=1;u.type===o.FLOAT_MAT2&&(p=2),u.type===o.FLOAT_MAT3&&(p=3),u.type===o.FLOAT_MAT4&&(p=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:p}}return i}function Ho(o){return o!==""}function M_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function y_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ib=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ch(o){return o.replace(ib,sb)}const ab=new Map;function sb(o,e){let i=he[e];if(i===void 0){const s=ab.get(e);if(s!==void 0)i=he[s],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Ch(i)}const rb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function E_(o){return o.replace(rb,ob)}function ob(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function T_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const lb={[Nc]:"SHADOWMAP_TYPE_PCF",[Bo]:"SHADOWMAP_TYPE_VSM"};function cb(o){return lb[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ub={[Ls]:"ENVMAP_TYPE_CUBE",[Nr]:"ENVMAP_TYPE_CUBE",[Xc]:"ENVMAP_TYPE_CUBE_UV"};function fb(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":ub[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const db={[Nr]:"ENVMAP_MODE_REFRACTION"};function hb(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":db[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const pb={[w_]:"ENVMAP_BLENDING_MULTIPLY",[JS]:"ENVMAP_BLENDING_MIX",[$S]:"ENVMAP_BLENDING_ADD"};function mb(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":pb[o.combine]||"ENVMAP_BLENDING_NONE"}function gb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function _b(o,e,i,s){const l=o.getContext(),u=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=cb(i),h=fb(i),v=hb(i),x=mb(i),_=gb(i),y=tb(i),T=eb(u),C=l.createProgram();let M,S,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Ho).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Ho).join(`
`),S.length>0&&(S+=`
`)):(M=[T_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),S=[T_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+v:"",i.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fi?"#define TONE_MAPPING":"",i.toneMapping!==Fi?he.tonemapping_pars_fragment:"",i.toneMapping!==Fi?JT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,KT("linearToOutputTexel",i.outputColorSpace),$T(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ho).join(`
`)),d=Ch(d),d=M_(d,i),d=y_(d,i),p=Ch(p),p=M_(p,i),p=y_(p,i),d=E_(d),p=E_(p),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===Bg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Bg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const P=w+M+d,N=w+S+p,k=v_(l,l.VERTEX_SHADER,P),B=v_(l,l.FRAGMENT_SHADER,N);l.attachShader(C,k),l.attachShader(C,B),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function F(H){if(o.debug.checkShaderErrors){const $=l.getProgramInfoLog(C)||"",it=l.getShaderInfoLog(k)||"",lt=l.getShaderInfoLog(B)||"",J=$.trim(),L=it.trim(),I=lt.trim();let ot=!0,dt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ot=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,k,B);else{const Et=S_(l,k,"vertex"),O=S_(l,B,"fragment");Ce("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+J+`
`+Et+`
`+O)}else J!==""?re("WebGLProgram: Program Info Log:",J):(L===""||I==="")&&(dt=!1);dt&&(H.diagnostics={runnable:ot,programLog:J,vertexShader:{log:L,prefix:M},fragmentShader:{log:I,prefix:S}})}l.deleteShader(k),l.deleteShader(B),b=new Fc(l,C),D=nb(l,C)}let b;this.getUniforms=function(){return b===void 0&&F(this),b};let D;this.getAttributes=function(){return D===void 0&&F(this),D};let pt=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return pt===!1&&(pt=l.getProgramParameter(C,qT)),pt},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=YT++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=k,this.fragmentShader=B,this}let vb=0;class xb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new Sb(e),i.set(e,s)),s}}class Sb{constructor(e){this.id=vb++,this.code=e,this.usedTimes=0}}function Mb(o,e,i,s,l,u){const d=new Y_,p=new xb,m=new Set,h=[],v=new Map,x=s.logarithmicDepthBuffer;let _=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function C(b,D,pt,H,$){const it=H.fog,lt=$.geometry,J=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,L=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,I=e.get(b.envMap||J,L),ot=I&&I.mapping===Xc?I.image.height:null,dt=y[b.type];b.precision!==null&&(_=s.getMaxPrecision(b.precision),_!==b.precision&&re("WebGLProgram.getParameters:",b.precision,"not supported, using",_,"instead."));const Et=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,O=Et!==void 0?Et.length:0;let Y=0;lt.morphAttributes.position!==void 0&&(Y=1),lt.morphAttributes.normal!==void 0&&(Y=2),lt.morphAttributes.color!==void 0&&(Y=3);let _t,At,zt,et;if(dt){const Ee=Pi[dt];_t=Ee.vertexShader,At=Ee.fragmentShader}else _t=b.vertexShader,At=b.fragmentShader,p.update(b),zt=p.getVertexShaderID(b),et=p.getFragmentShaderID(b);const vt=o.getRenderTarget(),Tt=o.state.buffers.depth.getReversed(),kt=$.isInstancedMesh===!0,Kt=$.isBatchedMesh===!0,$t=!!b.map,Ke=!!b.matcap,_e=!!I,pe=!!b.aoMap,we=!!b.lightMap,oe=!!b.bumpMap,Ze=!!b.normalMap,G=!!b.displacementMap,We=!!b.emissiveMap,ye=!!b.metalnessMap,Le=!!b.roughnessMap,qt=b.anisotropy>0,U=b.clearcoat>0,E=b.dispersion>0,q=b.iridescence>0,ht=b.sheen>0,xt=b.transmission>0,ut=qt&&!!b.anisotropyMap,Xt=U&&!!b.clearcoatMap,Ct=U&&!!b.clearcoatNormalMap,Zt=U&&!!b.clearcoatRoughnessMap,te=q&&!!b.iridescenceMap,yt=q&&!!b.iridescenceThicknessMap,St=ht&&!!b.sheenColorMap,Ot=ht&&!!b.sheenRoughnessMap,Nt=!!b.specularMap,Pt=!!b.specularColorMap,ce=!!b.specularIntensityMap,W=xt&&!!b.transmissionMap,Rt=xt&&!!b.thicknessMap,bt=!!b.gradientMap,It=!!b.alphaMap,Mt=b.alphaTest>0,ct=!!b.alphaHash,Bt=!!b.extensions;let ne=Fi;b.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(ne=o.toneMapping);const Oe={shaderID:dt,shaderType:b.type,shaderName:b.name,vertexShader:_t,fragmentShader:At,defines:b.defines,customVertexShaderID:zt,customFragmentShaderID:et,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:_,batching:Kt,batchingColor:Kt&&$._colorsTexture!==null,instancing:kt,instancingColor:kt&&$.instanceColor!==null,instancingMorph:kt&&$.morphTexture!==null,outputColorSpace:vt===null?o.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Pr,alphaToCoverage:!!b.alphaToCoverage,map:$t,matcap:Ke,envMap:_e,envMapMode:_e&&I.mapping,envMapCubeUVHeight:ot,aoMap:pe,lightMap:we,bumpMap:oe,normalMap:Ze,displacementMap:G,emissiveMap:We,normalMapObjectSpace:Ze&&b.normalMapType===iM,normalMapTangentSpace:Ze&&b.normalMapType===nM,metalnessMap:ye,roughnessMap:Le,anisotropy:qt,anisotropyMap:ut,clearcoat:U,clearcoatMap:Xt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Zt,dispersion:E,iridescence:q,iridescenceMap:te,iridescenceThicknessMap:yt,sheen:ht,sheenColorMap:St,sheenRoughnessMap:Ot,specularMap:Nt,specularColorMap:Pt,specularIntensityMap:ce,transmission:xt,transmissionMap:W,thicknessMap:Rt,gradientMap:bt,opaque:b.transparent===!1&&b.blending===Dr&&b.alphaToCoverage===!1,alphaMap:It,alphaTest:Mt,alphaHash:ct,combine:b.combine,mapUv:$t&&T(b.map.channel),aoMapUv:pe&&T(b.aoMap.channel),lightMapUv:we&&T(b.lightMap.channel),bumpMapUv:oe&&T(b.bumpMap.channel),normalMapUv:Ze&&T(b.normalMap.channel),displacementMapUv:G&&T(b.displacementMap.channel),emissiveMapUv:We&&T(b.emissiveMap.channel),metalnessMapUv:ye&&T(b.metalnessMap.channel),roughnessMapUv:Le&&T(b.roughnessMap.channel),anisotropyMapUv:ut&&T(b.anisotropyMap.channel),clearcoatMapUv:Xt&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Zt&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:St&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&T(b.sheenRoughnessMap.channel),specularMapUv:Nt&&T(b.specularMap.channel),specularColorMapUv:Pt&&T(b.specularColorMap.channel),specularIntensityMapUv:ce&&T(b.specularIntensityMap.channel),transmissionMapUv:W&&T(b.transmissionMap.channel),thicknessMapUv:Rt&&T(b.thicknessMap.channel),alphaMapUv:It&&T(b.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Ze||qt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!lt.attributes.uv&&($t||It),fog:!!it,useFog:b.fog===!0,fogExp2:!!it&&it.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||lt.attributes.normal===void 0&&Ze===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Tt,skinning:$.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:Y,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&pt.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:$t&&b.map.isVideoTexture===!0&&Te.getTransfer(b.map.colorSpace)===ze,decodeVideoTextureEmissive:We&&b.emissiveMap.isVideoTexture===!0&&Te.getTransfer(b.emissiveMap.colorSpace)===ze,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ha,flipSided:b.side===Xn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Bt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&b.extensions.multiDraw===!0||Kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Oe.vertexUv1s=m.has(1),Oe.vertexUv2s=m.has(2),Oe.vertexUv3s=m.has(3),m.clear(),Oe}function M(b){const D=[];if(b.shaderID?D.push(b.shaderID):(D.push(b.customVertexShaderID),D.push(b.customFragmentShaderID)),b.defines!==void 0)for(const pt in b.defines)D.push(pt),D.push(b.defines[pt]);return b.isRawShaderMaterial===!1&&(S(D,b),w(D,b),D.push(o.outputColorSpace)),D.push(b.customProgramCacheKey),D.join()}function S(b,D){b.push(D.precision),b.push(D.outputColorSpace),b.push(D.envMapMode),b.push(D.envMapCubeUVHeight),b.push(D.mapUv),b.push(D.alphaMapUv),b.push(D.lightMapUv),b.push(D.aoMapUv),b.push(D.bumpMapUv),b.push(D.normalMapUv),b.push(D.displacementMapUv),b.push(D.emissiveMapUv),b.push(D.metalnessMapUv),b.push(D.roughnessMapUv),b.push(D.anisotropyMapUv),b.push(D.clearcoatMapUv),b.push(D.clearcoatNormalMapUv),b.push(D.clearcoatRoughnessMapUv),b.push(D.iridescenceMapUv),b.push(D.iridescenceThicknessMapUv),b.push(D.sheenColorMapUv),b.push(D.sheenRoughnessMapUv),b.push(D.specularMapUv),b.push(D.specularColorMapUv),b.push(D.specularIntensityMapUv),b.push(D.transmissionMapUv),b.push(D.thicknessMapUv),b.push(D.combine),b.push(D.fogExp2),b.push(D.sizeAttenuation),b.push(D.morphTargetsCount),b.push(D.morphAttributeCount),b.push(D.numDirLights),b.push(D.numPointLights),b.push(D.numSpotLights),b.push(D.numSpotLightMaps),b.push(D.numHemiLights),b.push(D.numRectAreaLights),b.push(D.numDirLightShadows),b.push(D.numPointLightShadows),b.push(D.numSpotLightShadows),b.push(D.numSpotLightShadowsWithMaps),b.push(D.numLightProbes),b.push(D.shadowMapType),b.push(D.toneMapping),b.push(D.numClippingPlanes),b.push(D.numClipIntersection),b.push(D.depthPacking)}function w(b,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),b.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),b.push(d.mask)}function P(b){const D=y[b.type];let pt;if(D){const H=Pi[D];pt=GM.clone(H.uniforms)}else pt=b.uniforms;return pt}function N(b,D){let pt=v.get(D);return pt!==void 0?++pt.usedTimes:(pt=new _b(o,D,b,l),h.push(pt),v.set(D,pt)),pt}function k(b){if(--b.usedTimes===0){const D=h.indexOf(b);h[D]=h[h.length-1],h.pop(),v.delete(b.cacheKey),b.destroy()}}function B(b){p.remove(b)}function F(){p.dispose()}return{getParameters:C,getProgramCacheKey:M,getUniforms:P,acquireProgram:N,releaseProgram:k,releaseShaderCache:B,programs:h,dispose:F}}function yb(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let p=o.get(d);return p===void 0&&(p={},o.set(d,p)),p}function s(d){o.delete(d)}function l(d,p,m){o.get(d)[p]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function Eb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function b_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function A_(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function d(_){let y=0;return _.isInstancedMesh&&(y+=2),_.isSkinnedMesh&&(y+=1),y}function p(_,y,T,C,M,S){let w=o[e];return w===void 0?(w={id:_.id,object:_,geometry:y,material:T,materialVariant:d(_),groupOrder:C,renderOrder:_.renderOrder,z:M,group:S},o[e]=w):(w.id=_.id,w.object=_,w.geometry=y,w.material=T,w.materialVariant=d(_),w.groupOrder=C,w.renderOrder=_.renderOrder,w.z=M,w.group=S),e++,w}function m(_,y,T,C,M,S){const w=p(_,y,T,C,M,S);T.transmission>0?s.push(w):T.transparent===!0?l.push(w):i.push(w)}function h(_,y,T,C,M,S){const w=p(_,y,T,C,M,S);T.transmission>0?s.unshift(w):T.transparent===!0?l.unshift(w):i.unshift(w)}function v(_,y){i.length>1&&i.sort(_||Eb),s.length>1&&s.sort(y||b_),l.length>1&&l.sort(y||b_)}function x(){for(let _=e,y=o.length;_<y;_++){const T=o[_];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:m,unshift:h,finish:x,sort:v}}function Tb(){let o=new WeakMap;function e(s,l){const u=o.get(s);let d;return u===void 0?(d=new A_,o.set(s,[d])):l>=u.length?(d=new A_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function bb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new at,color:new Ge};break;case"SpotLight":i={position:new at,direction:new at,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new at,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":i={direction:new at,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":i={color:new Ge,position:new at,halfWidth:new at,halfHeight:new at};break}return o[e.id]=i,i}}}function Ab(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Rb=0;function Cb(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function wb(o){const e=new bb,i=Ab(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new at);const l=new at,u=new fn,d=new fn;function p(h){let v=0,x=0,_=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let y=0,T=0,C=0,M=0,S=0,w=0,P=0,N=0,k=0,B=0,F=0;h.sort(Cb);for(let D=0,pt=h.length;D<pt;D++){const H=h[D],$=H.color,it=H.intensity,lt=H.distance;let J=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Or?J=H.shadow.map.texture:J=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=$.r*it,x+=$.g*it,_+=$.b*it;else if(H.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(H.sh.coefficients[L],it);F++}else if(H.isDirectionalLight){const L=e.get(H);if(L.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const I=H.shadow,ot=i.get(H);ot.shadowIntensity=I.intensity,ot.shadowBias=I.bias,ot.shadowNormalBias=I.normalBias,ot.shadowRadius=I.radius,ot.shadowMapSize=I.mapSize,s.directionalShadow[y]=ot,s.directionalShadowMap[y]=J,s.directionalShadowMatrix[y]=H.shadow.matrix,w++}s.directional[y]=L,y++}else if(H.isSpotLight){const L=e.get(H);L.position.setFromMatrixPosition(H.matrixWorld),L.color.copy($).multiplyScalar(it),L.distance=lt,L.coneCos=Math.cos(H.angle),L.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),L.decay=H.decay,s.spot[C]=L;const I=H.shadow;if(H.map&&(s.spotLightMap[k]=H.map,k++,I.updateMatrices(H),H.castShadow&&B++),s.spotLightMatrix[C]=I.matrix,H.castShadow){const ot=i.get(H);ot.shadowIntensity=I.intensity,ot.shadowBias=I.bias,ot.shadowNormalBias=I.normalBias,ot.shadowRadius=I.radius,ot.shadowMapSize=I.mapSize,s.spotShadow[C]=ot,s.spotShadowMap[C]=J,N++}C++}else if(H.isRectAreaLight){const L=e.get(H);L.color.copy($).multiplyScalar(it),L.halfWidth.set(H.width*.5,0,0),L.halfHeight.set(0,H.height*.5,0),s.rectArea[M]=L,M++}else if(H.isPointLight){const L=e.get(H);if(L.color.copy(H.color).multiplyScalar(H.intensity),L.distance=H.distance,L.decay=H.decay,H.castShadow){const I=H.shadow,ot=i.get(H);ot.shadowIntensity=I.intensity,ot.shadowBias=I.bias,ot.shadowNormalBias=I.normalBias,ot.shadowRadius=I.radius,ot.shadowMapSize=I.mapSize,ot.shadowCameraNear=I.camera.near,ot.shadowCameraFar=I.camera.far,s.pointShadow[T]=ot,s.pointShadowMap[T]=J,s.pointShadowMatrix[T]=H.shadow.matrix,P++}s.point[T]=L,T++}else if(H.isHemisphereLight){const L=e.get(H);L.skyColor.copy(H.color).multiplyScalar(it),L.groundColor.copy(H.groundColor).multiplyScalar(it),s.hemi[S]=L,S++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=x,s.ambient[2]=_;const b=s.hash;(b.directionalLength!==y||b.pointLength!==T||b.spotLength!==C||b.rectAreaLength!==M||b.hemiLength!==S||b.numDirectionalShadows!==w||b.numPointShadows!==P||b.numSpotShadows!==N||b.numSpotMaps!==k||b.numLightProbes!==F)&&(s.directional.length=y,s.spot.length=C,s.rectArea.length=M,s.point.length=T,s.hemi.length=S,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=N+k-B,s.spotLightMap.length=k,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=F,b.directionalLength=y,b.pointLength=T,b.spotLength=C,b.rectAreaLength=M,b.hemiLength=S,b.numDirectionalShadows=w,b.numPointShadows=P,b.numSpotShadows=N,b.numSpotMaps=k,b.numLightProbes=F,s.version=Rb++)}function m(h,v){let x=0,_=0,y=0,T=0,C=0;const M=v.matrixWorldInverse;for(let S=0,w=h.length;S<w;S++){const P=h[S];if(P.isDirectionalLight){const N=s.directional[x];N.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),x++}else if(P.isSpotLight){const N=s.spot[y];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),y++}else if(P.isRectAreaLight){const N=s.rectArea[T];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),d.identity(),u.copy(P.matrixWorld),u.premultiply(M),d.extractRotation(u),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),T++}else if(P.isPointLight){const N=s.point[_];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),_++}else if(P.isHemisphereLight){const N=s.hemi[C];N.direction.setFromMatrixPosition(P.matrixWorld),N.direction.transformDirection(M),C++}}}return{setup:p,setupView:m,state:s}}function R_(o){const e=new wb(o),i=[],s=[];function l(v){h.camera=v,i.length=0,s.length=0}function u(v){i.push(v)}function d(v){s.push(v)}function p(){e.setup(i)}function m(v){e.setupView(i,v)}const h={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:u,pushShadow:d}}function Db(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let p;return d===void 0?(p=new R_(o),e.set(l,[p])):u>=d.length?(p=new R_(o),d.push(p)):p=d[u],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const Ub=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Nb=[new at(1,0,0),new at(-1,0,0),new at(0,1,0),new at(0,-1,0),new at(0,0,1),new at(0,0,-1)],Ob=[new at(0,-1,0),new at(0,-1,0),new at(0,0,1),new at(0,0,-1),new at(0,-1,0),new at(0,-1,0)],C_=new fn,Fo=new at,zd=new at;function Pb(o,e,i){let s=new J_;const l=new Ue,u=new Ue,d=new en,p=new WM,m=new qM,h={},v=i.maxTextureSize,x={[ns]:Xn,[Xn]:ns,[ha]:ha},_=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:Ub,fragmentShader:Lb}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const T=new Ma;T.setAttribute("position",new Hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Vi(T,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nc;let S=this.type;this.render=function(B,F,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;this.type===NS&&(re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Nc);const D=o.getRenderTarget(),pt=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),$=o.state;$.setBlending(ma),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const it=S!==this.type;it&&F.traverse(function(lt){lt.material&&(Array.isArray(lt.material)?lt.material.forEach(J=>J.needsUpdate=!0):lt.material.needsUpdate=!0)});for(let lt=0,J=B.length;lt<J;lt++){const L=B[lt],I=L.shadow;if(I===void 0){re("WebGLShadowMap:",L,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;l.copy(I.mapSize);const ot=I.getFrameExtents();l.multiply(ot),u.copy(I.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/ot.x),l.x=u.x*ot.x,I.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/ot.y),l.y=u.y*ot.y,I.mapSize.y=u.y));const dt=o.state.buffers.depth.getReversed();if(I.camera._reversedDepth=dt,I.map===null||it===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Bo){if(L.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Bi(l.x,l.y,{format:Or,type:va,minFilter:wn,magFilter:wn,generateMipmaps:!1}),I.map.texture.name=L.name+".shadowMap",I.map.depthTexture=new Wo(l.x,l.y,Ii),I.map.depthTexture.name=L.name+".shadowMapDepth",I.map.depthTexture.format=xa,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=mn,I.map.depthTexture.magFilter=mn}else L.isPointLight?(I.map=new av(l.x),I.map.depthTexture=new BM(l.x,Gi)):(I.map=new Bi(l.x,l.y),I.map.depthTexture=new Wo(l.x,l.y,Gi)),I.map.depthTexture.name=L.name+".shadowMap",I.map.depthTexture.format=xa,this.type===Nc?(I.map.depthTexture.compareFunction=dt?Bh:Fh,I.map.depthTexture.minFilter=wn,I.map.depthTexture.magFilter=wn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=mn,I.map.depthTexture.magFilter=mn);I.camera.updateProjectionMatrix()}const Et=I.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<Et;O++){if(I.map.isWebGLCubeRenderTarget)o.setRenderTarget(I.map,O),o.clear();else{O===0&&(o.setRenderTarget(I.map),o.clear());const Y=I.getViewport(O);d.set(u.x*Y.x,u.y*Y.y,u.x*Y.z,u.y*Y.w),$.viewport(d)}if(L.isPointLight){const Y=I.camera,_t=I.matrix,At=L.distance||Y.far;At!==Y.far&&(Y.far=At,Y.updateProjectionMatrix()),Fo.setFromMatrixPosition(L.matrixWorld),Y.position.copy(Fo),zd.copy(Y.position),zd.add(Nb[O]),Y.up.copy(Ob[O]),Y.lookAt(zd),Y.updateMatrixWorld(),_t.makeTranslation(-Fo.x,-Fo.y,-Fo.z),C_.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),I._frustum.setFromProjectionMatrix(C_,Y.coordinateSystem,Y.reversedDepth)}else I.updateMatrices(L);s=I.getFrustum(),N(F,b,I.camera,L,this.type)}I.isPointLightShadow!==!0&&this.type===Bo&&w(I,b),I.needsUpdate=!1}S=this.type,M.needsUpdate=!1,o.setRenderTarget(D,pt,H)};function w(B,F){const b=e.update(C);_.defines.VSM_SAMPLES!==B.blurSamples&&(_.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Bi(l.x,l.y,{format:Or,type:va})),_.uniforms.shadow_pass.value=B.map.depthTexture,_.uniforms.resolution.value=B.mapSize,_.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(F,null,b,_,C,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(F,null,b,y,C,null)}function P(B,F,b,D){let pt=null;const H=b.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(H!==void 0)pt=H;else if(pt=b.isPointLight===!0?m:p,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const $=pt.uuid,it=F.uuid;let lt=h[$];lt===void 0&&(lt={},h[$]=lt);let J=lt[it];J===void 0&&(J=pt.clone(),lt[it]=J,F.addEventListener("dispose",k)),pt=J}if(pt.visible=F.visible,pt.wireframe=F.wireframe,D===Bo?pt.side=F.shadowSide!==null?F.shadowSide:F.side:pt.side=F.shadowSide!==null?F.shadowSide:x[F.side],pt.alphaMap=F.alphaMap,pt.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,pt.map=F.map,pt.clipShadows=F.clipShadows,pt.clippingPlanes=F.clippingPlanes,pt.clipIntersection=F.clipIntersection,pt.displacementMap=F.displacementMap,pt.displacementScale=F.displacementScale,pt.displacementBias=F.displacementBias,pt.wireframeLinewidth=F.wireframeLinewidth,pt.linewidth=F.linewidth,b.isPointLight===!0&&pt.isMeshDistanceMaterial===!0){const $=o.properties.get(pt);$.light=b}return pt}function N(B,F,b,D,pt){if(B.visible===!1)return;if(B.layers.test(F.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&pt===Bo)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,B.matrixWorld);const it=e.update(B),lt=B.material;if(Array.isArray(lt)){const J=it.groups;for(let L=0,I=J.length;L<I;L++){const ot=J[L],dt=lt[ot.materialIndex];if(dt&&dt.visible){const Et=P(B,dt,D,pt);B.onBeforeShadow(o,B,F,b,it,Et,ot),o.renderBufferDirect(b,null,it,Et,B,ot),B.onAfterShadow(o,B,F,b,it,Et,ot)}}}else if(lt.visible){const J=P(B,lt,D,pt);B.onBeforeShadow(o,B,F,b,it,J,null),o.renderBufferDirect(b,null,it,J,B,null),B.onAfterShadow(o,B,F,b,it,J,null)}}const $=B.children;for(let it=0,lt=$.length;it<lt;it++)N($[it],F,b,D,pt)}function k(B){B.target.removeEventListener("dispose",k);for(const b in h){const D=h[b],pt=B.target.uuid;pt in D&&(D[pt].dispose(),delete D[pt])}}}function Ib(o,e){function i(){let W=!1;const Rt=new en;let bt=null;const It=new en(0,0,0,0);return{setMask:function(Mt){bt!==Mt&&!W&&(o.colorMask(Mt,Mt,Mt,Mt),bt=Mt)},setLocked:function(Mt){W=Mt},setClear:function(Mt,ct,Bt,ne,Oe){Oe===!0&&(Mt*=ne,ct*=ne,Bt*=ne),Rt.set(Mt,ct,Bt,ne),It.equals(Rt)===!1&&(o.clearColor(Mt,ct,Bt,ne),It.copy(Rt))},reset:function(){W=!1,bt=null,It.set(-1,0,0,0)}}}function s(){let W=!1,Rt=!1,bt=null,It=null,Mt=null;return{setReversed:function(ct){if(Rt!==ct){const Bt=e.get("EXT_clip_control");ct?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),Rt=ct;const ne=Mt;Mt=null,this.setClear(ne)}},getReversed:function(){return Rt},setTest:function(ct){ct?vt(o.DEPTH_TEST):Tt(o.DEPTH_TEST)},setMask:function(ct){bt!==ct&&!W&&(o.depthMask(ct),bt=ct)},setFunc:function(ct){if(Rt&&(ct=hM[ct]),It!==ct){switch(ct){case Hd:o.depthFunc(o.NEVER);break;case Gd:o.depthFunc(o.ALWAYS);break;case Vd:o.depthFunc(o.LESS);break;case Lr:o.depthFunc(o.LEQUAL);break;case kd:o.depthFunc(o.EQUAL);break;case Xd:o.depthFunc(o.GEQUAL);break;case Wd:o.depthFunc(o.GREATER);break;case qd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}It=ct}},setLocked:function(ct){W=ct},setClear:function(ct){Mt!==ct&&(Mt=ct,Rt&&(ct=1-ct),o.clearDepth(ct))},reset:function(){W=!1,bt=null,It=null,Mt=null,Rt=!1}}}function l(){let W=!1,Rt=null,bt=null,It=null,Mt=null,ct=null,Bt=null,ne=null,Oe=null;return{setTest:function(Ee){W||(Ee?vt(o.STENCIL_TEST):Tt(o.STENCIL_TEST))},setMask:function(Ee){Rt!==Ee&&!W&&(o.stencilMask(Ee),Rt=Ee)},setFunc:function(Ee,Un,pi){(bt!==Ee||It!==Un||Mt!==pi)&&(o.stencilFunc(Ee,Un,pi),bt=Ee,It=Un,Mt=pi)},setOp:function(Ee,Un,pi){(ct!==Ee||Bt!==Un||ne!==pi)&&(o.stencilOp(Ee,Un,pi),ct=Ee,Bt=Un,ne=pi)},setLocked:function(Ee){W=Ee},setClear:function(Ee){Oe!==Ee&&(o.clearStencil(Ee),Oe=Ee)},reset:function(){W=!1,Rt=null,bt=null,It=null,Mt=null,ct=null,Bt=null,ne=null,Oe=null}}}const u=new i,d=new s,p=new l,m=new WeakMap,h=new WeakMap;let v={},x={},_=new WeakMap,y=[],T=null,C=!1,M=null,S=null,w=null,P=null,N=null,k=null,B=null,F=new Ge(0,0,0),b=0,D=!1,pt=null,H=null,$=null,it=null,lt=null;const J=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,I=0;const ot=o.getParameter(o.VERSION);ot.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(ot)[1]),L=I>=1):ot.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),L=I>=2);let dt=null,Et={};const O=o.getParameter(o.SCISSOR_BOX),Y=o.getParameter(o.VIEWPORT),_t=new en().fromArray(O),At=new en().fromArray(Y);function zt(W,Rt,bt,It){const Mt=new Uint8Array(4),ct=o.createTexture();o.bindTexture(W,ct),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Bt=0;Bt<bt;Bt++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,It,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(Rt+Bt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return ct}const et={};et[o.TEXTURE_2D]=zt(o.TEXTURE_2D,o.TEXTURE_2D,1),et[o.TEXTURE_CUBE_MAP]=zt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[o.TEXTURE_2D_ARRAY]=zt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),et[o.TEXTURE_3D]=zt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),p.setClear(0),vt(o.DEPTH_TEST),d.setFunc(Lr),oe(!1),Ze(Ng),vt(o.CULL_FACE),pe(ma);function vt(W){v[W]!==!0&&(o.enable(W),v[W]=!0)}function Tt(W){v[W]!==!1&&(o.disable(W),v[W]=!1)}function kt(W,Rt){return x[W]!==Rt?(o.bindFramebuffer(W,Rt),x[W]=Rt,W===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Rt),W===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Kt(W,Rt){let bt=y,It=!1;if(W){bt=_.get(Rt),bt===void 0&&(bt=[],_.set(Rt,bt));const Mt=W.textures;if(bt.length!==Mt.length||bt[0]!==o.COLOR_ATTACHMENT0){for(let ct=0,Bt=Mt.length;ct<Bt;ct++)bt[ct]=o.COLOR_ATTACHMENT0+ct;bt.length=Mt.length,It=!0}}else bt[0]!==o.BACK&&(bt[0]=o.BACK,It=!0);It&&o.drawBuffers(bt)}function $t(W){return T!==W?(o.useProgram(W),T=W,!0):!1}const Ke={[Cs]:o.FUNC_ADD,[PS]:o.FUNC_SUBTRACT,[IS]:o.FUNC_REVERSE_SUBTRACT};Ke[zS]=o.MIN,Ke[FS]=o.MAX;const _e={[BS]:o.ZERO,[HS]:o.ONE,[GS]:o.SRC_COLOR,[Fd]:o.SRC_ALPHA,[YS]:o.SRC_ALPHA_SATURATE,[WS]:o.DST_COLOR,[kS]:o.DST_ALPHA,[VS]:o.ONE_MINUS_SRC_COLOR,[Bd]:o.ONE_MINUS_SRC_ALPHA,[qS]:o.ONE_MINUS_DST_COLOR,[XS]:o.ONE_MINUS_DST_ALPHA,[jS]:o.CONSTANT_COLOR,[ZS]:o.ONE_MINUS_CONSTANT_COLOR,[KS]:o.CONSTANT_ALPHA,[QS]:o.ONE_MINUS_CONSTANT_ALPHA};function pe(W,Rt,bt,It,Mt,ct,Bt,ne,Oe,Ee){if(W===ma){C===!0&&(Tt(o.BLEND),C=!1);return}if(C===!1&&(vt(o.BLEND),C=!0),W!==OS){if(W!==M||Ee!==D){if((S!==Cs||N!==Cs)&&(o.blendEquation(o.FUNC_ADD),S=Cs,N=Cs),Ee)switch(W){case Dr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Og:o.blendFunc(o.ONE,o.ONE);break;case Pg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ig:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ce("WebGLState: Invalid blending: ",W);break}else switch(W){case Dr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Og:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Pg:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ig:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",W);break}w=null,P=null,k=null,B=null,F.set(0,0,0),b=0,M=W,D=Ee}return}Mt=Mt||Rt,ct=ct||bt,Bt=Bt||It,(Rt!==S||Mt!==N)&&(o.blendEquationSeparate(Ke[Rt],Ke[Mt]),S=Rt,N=Mt),(bt!==w||It!==P||ct!==k||Bt!==B)&&(o.blendFuncSeparate(_e[bt],_e[It],_e[ct],_e[Bt]),w=bt,P=It,k=ct,B=Bt),(ne.equals(F)===!1||Oe!==b)&&(o.blendColor(ne.r,ne.g,ne.b,Oe),F.copy(ne),b=Oe),M=W,D=!1}function we(W,Rt){W.side===ha?Tt(o.CULL_FACE):vt(o.CULL_FACE);let bt=W.side===Xn;Rt&&(bt=!bt),oe(bt),W.blending===Dr&&W.transparent===!1?pe(ma):pe(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),u.setMask(W.colorWrite);const It=W.stencilWrite;p.setTest(It),It&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),We(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?vt(o.SAMPLE_ALPHA_TO_COVERAGE):Tt(o.SAMPLE_ALPHA_TO_COVERAGE)}function oe(W){pt!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),pt=W)}function Ze(W){W!==US?(vt(o.CULL_FACE),W!==H&&(W===Ng?o.cullFace(o.BACK):W===LS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Tt(o.CULL_FACE),H=W}function G(W){W!==$&&(L&&o.lineWidth(W),$=W)}function We(W,Rt,bt){W?(vt(o.POLYGON_OFFSET_FILL),(it!==Rt||lt!==bt)&&(it=Rt,lt=bt,d.getReversed()&&(Rt=-Rt),o.polygonOffset(Rt,bt))):Tt(o.POLYGON_OFFSET_FILL)}function ye(W){W?vt(o.SCISSOR_TEST):Tt(o.SCISSOR_TEST)}function Le(W){W===void 0&&(W=o.TEXTURE0+J-1),dt!==W&&(o.activeTexture(W),dt=W)}function qt(W,Rt,bt){bt===void 0&&(dt===null?bt=o.TEXTURE0+J-1:bt=dt);let It=Et[bt];It===void 0&&(It={type:void 0,texture:void 0},Et[bt]=It),(It.type!==W||It.texture!==Rt)&&(dt!==bt&&(o.activeTexture(bt),dt=bt),o.bindTexture(W,Rt||et[W]),It.type=W,It.texture=Rt)}function U(){const W=Et[dt];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function q(){try{o.compressedTexImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function ht(){try{o.texSubImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function xt(){try{o.texSubImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Xt(){try{o.compressedTexSubImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Ct(){try{o.texStorage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Zt(){try{o.texStorage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function te(){try{o.texImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function yt(){try{o.texImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function St(W){_t.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),_t.copy(W))}function Ot(W){At.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),At.copy(W))}function Nt(W,Rt){let bt=h.get(Rt);bt===void 0&&(bt=new WeakMap,h.set(Rt,bt));let It=bt.get(W);It===void 0&&(It=o.getUniformBlockIndex(Rt,W.name),bt.set(W,It))}function Pt(W,Rt){const It=h.get(Rt).get(W);m.get(Rt)!==It&&(o.uniformBlockBinding(Rt,It,W.__bindingPointIndex),m.set(Rt,It))}function ce(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},dt=null,Et={},x={},_=new WeakMap,y=[],T=null,C=!1,M=null,S=null,w=null,P=null,N=null,k=null,B=null,F=new Ge(0,0,0),b=0,D=!1,pt=null,H=null,$=null,it=null,lt=null,_t.set(0,0,o.canvas.width,o.canvas.height),At.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),p.reset()}return{buffers:{color:u,depth:d,stencil:p},enable:vt,disable:Tt,bindFramebuffer:kt,drawBuffers:Kt,useProgram:$t,setBlending:pe,setMaterial:we,setFlipSided:oe,setCullFace:Ze,setLineWidth:G,setPolygonOffset:We,setScissorTest:ye,activeTexture:Le,bindTexture:qt,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:te,texImage3D:yt,updateUBOMapping:Nt,uniformBlockBinding:Pt,texStorage2D:Ct,texStorage3D:Zt,texSubImage2D:ht,texSubImage3D:xt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Xt,scissor:St,viewport:Ot,reset:ce}}function zb(o,e,i,s,l,u,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ue,v=new WeakMap;let x;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,E){return y?new OffscreenCanvas(U,E):Xo("canvas")}function C(U,E,q){let ht=1;const xt=qt(U);if((xt.width>q||xt.height>q)&&(ht=q/Math.max(xt.width,xt.height)),ht<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ut=Math.floor(ht*xt.width),Xt=Math.floor(ht*xt.height);x===void 0&&(x=T(ut,Xt));const Ct=E?T(ut,Xt):x;return Ct.width=ut,Ct.height=Xt,Ct.getContext("2d").drawImage(U,0,0,ut,Xt),re("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ut+"x"+Xt+")."),Ct}else return"data"in U&&re("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),U;return U}function M(U){return U.generateMipmaps}function S(U){o.generateMipmap(U)}function w(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(U,E,q,ht,xt=!1){if(U!==null){if(o[U]!==void 0)return o[U];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ut=E;if(E===o.RED&&(q===o.FLOAT&&(ut=o.R32F),q===o.HALF_FLOAT&&(ut=o.R16F),q===o.UNSIGNED_BYTE&&(ut=o.R8)),E===o.RED_INTEGER&&(q===o.UNSIGNED_BYTE&&(ut=o.R8UI),q===o.UNSIGNED_SHORT&&(ut=o.R16UI),q===o.UNSIGNED_INT&&(ut=o.R32UI),q===o.BYTE&&(ut=o.R8I),q===o.SHORT&&(ut=o.R16I),q===o.INT&&(ut=o.R32I)),E===o.RG&&(q===o.FLOAT&&(ut=o.RG32F),q===o.HALF_FLOAT&&(ut=o.RG16F),q===o.UNSIGNED_BYTE&&(ut=o.RG8)),E===o.RG_INTEGER&&(q===o.UNSIGNED_BYTE&&(ut=o.RG8UI),q===o.UNSIGNED_SHORT&&(ut=o.RG16UI),q===o.UNSIGNED_INT&&(ut=o.RG32UI),q===o.BYTE&&(ut=o.RG8I),q===o.SHORT&&(ut=o.RG16I),q===o.INT&&(ut=o.RG32I)),E===o.RGB_INTEGER&&(q===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),q===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),q===o.UNSIGNED_INT&&(ut=o.RGB32UI),q===o.BYTE&&(ut=o.RGB8I),q===o.SHORT&&(ut=o.RGB16I),q===o.INT&&(ut=o.RGB32I)),E===o.RGBA_INTEGER&&(q===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),q===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),q===o.UNSIGNED_INT&&(ut=o.RGBA32UI),q===o.BYTE&&(ut=o.RGBA8I),q===o.SHORT&&(ut=o.RGBA16I),q===o.INT&&(ut=o.RGBA32I)),E===o.RGB&&(q===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),q===o.UNSIGNED_INT_10F_11F_11F_REV&&(ut=o.R11F_G11F_B10F)),E===o.RGBA){const Xt=xt?Bc:Te.getTransfer(ht);q===o.FLOAT&&(ut=o.RGBA32F),q===o.HALF_FLOAT&&(ut=o.RGBA16F),q===o.UNSIGNED_BYTE&&(ut=Xt===ze?o.SRGB8_ALPHA8:o.RGBA8),q===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),q===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ut}function N(U,E){let q;return U?E===null||E===Gi||E===ko?q=o.DEPTH24_STENCIL8:E===Ii?q=o.DEPTH32F_STENCIL8:E===Vo&&(q=o.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Gi||E===ko?q=o.DEPTH_COMPONENT24:E===Ii?q=o.DEPTH_COMPONENT32F:E===Vo&&(q=o.DEPTH_COMPONENT16),q}function k(U,E){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==mn&&U.minFilter!==wn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function B(U){const E=U.target;E.removeEventListener("dispose",B),b(E),E.isVideoTexture&&v.delete(E)}function F(U){const E=U.target;E.removeEventListener("dispose",F),pt(E)}function b(U){const E=s.get(U);if(E.__webglInit===void 0)return;const q=U.source,ht=_.get(q);if(ht){const xt=ht[E.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&D(U),Object.keys(ht).length===0&&_.delete(q)}s.remove(U)}function D(U){const E=s.get(U);o.deleteTexture(E.__webglTexture);const q=U.source,ht=_.get(q);delete ht[E.__cacheKey],d.memory.textures--}function pt(U){const E=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(E.__webglFramebuffer[ht]))for(let xt=0;xt<E.__webglFramebuffer[ht].length;xt++)o.deleteFramebuffer(E.__webglFramebuffer[ht][xt]);else o.deleteFramebuffer(E.__webglFramebuffer[ht]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ht])}else{if(Array.isArray(E.__webglFramebuffer))for(let ht=0;ht<E.__webglFramebuffer.length;ht++)o.deleteFramebuffer(E.__webglFramebuffer[ht]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ht=0;ht<E.__webglColorRenderbuffer.length;ht++)E.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ht]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=U.textures;for(let ht=0,xt=q.length;ht<xt;ht++){const ut=s.get(q[ht]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),d.memory.textures--),s.remove(q[ht])}s.remove(U)}let H=0;function $(){H=0}function it(){const U=H;return U>=l.maxTextures&&re("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),H+=1,U}function lt(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function J(U,E){const q=s.get(U);if(U.isVideoTexture&&ye(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&q.__version!==U.version){const ht=U.image;if(ht===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{et(q,U,E);return}}else U.isExternalTexture&&(q.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,q.__webglTexture,o.TEXTURE0+E)}function L(U,E){const q=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){et(q,U,E);return}else U.isExternalTexture&&(q.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,q.__webglTexture,o.TEXTURE0+E)}function I(U,E){const q=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){et(q,U,E);return}i.bindTexture(o.TEXTURE_3D,q.__webglTexture,o.TEXTURE0+E)}function ot(U,E){const q=s.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&q.__version!==U.version){vt(q,U,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,q.__webglTexture,o.TEXTURE0+E)}const dt={[Go]:o.REPEAT,[pa]:o.CLAMP_TO_EDGE,[Yd]:o.MIRRORED_REPEAT},Et={[mn]:o.NEAREST,[tM]:o.NEAREST_MIPMAP_NEAREST,[uc]:o.NEAREST_MIPMAP_LINEAR,[wn]:o.LINEAR,[rd]:o.LINEAR_MIPMAP_NEAREST,[Ds]:o.LINEAR_MIPMAP_LINEAR},O={[aM]:o.NEVER,[cM]:o.ALWAYS,[sM]:o.LESS,[Fh]:o.LEQUAL,[rM]:o.EQUAL,[Bh]:o.GEQUAL,[oM]:o.GREATER,[lM]:o.NOTEQUAL};function Y(U,E){if(E.type===Ii&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===wn||E.magFilter===rd||E.magFilter===uc||E.magFilter===Ds||E.minFilter===wn||E.minFilter===rd||E.minFilter===uc||E.minFilter===Ds)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,dt[E.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,dt[E.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,dt[E.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,Et[E.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,Et[E.minFilter]),E.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,O[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===mn||E.minFilter!==uc&&E.minFilter!==Ds||E.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function _t(U,E){let q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",B));const ht=E.source;let xt=_.get(ht);xt===void 0&&(xt={},_.set(ht,xt));const ut=lt(E);if(ut!==U.__cacheKey){xt[ut]===void 0&&(xt[ut]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,q=!0),xt[ut].usedTimes++;const Xt=xt[U.__cacheKey];Xt!==void 0&&(xt[U.__cacheKey].usedTimes--,Xt.usedTimes===0&&D(E)),U.__cacheKey=ut,U.__webglTexture=xt[ut].texture}return q}function At(U,E,q){return Math.floor(Math.floor(U/q)/E)}function zt(U,E,q,ht){const ut=U.updateRanges;if(ut.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,q,ht,E.data);else{ut.sort((yt,St)=>yt.start-St.start);let Xt=0;for(let yt=1;yt<ut.length;yt++){const St=ut[Xt],Ot=ut[yt],Nt=St.start+St.count,Pt=At(Ot.start,E.width,4),ce=At(St.start,E.width,4);Ot.start<=Nt+1&&Pt===ce&&At(Ot.start+Ot.count-1,E.width,4)===Pt?St.count=Math.max(St.count,Ot.start+Ot.count-St.start):(++Xt,ut[Xt]=Ot)}ut.length=Xt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),Zt=o.getParameter(o.UNPACK_SKIP_PIXELS),te=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let yt=0,St=ut.length;yt<St;yt++){const Ot=ut[yt],Nt=Math.floor(Ot.start/4),Pt=Math.ceil(Ot.count/4),ce=Nt%E.width,W=Math.floor(Nt/E.width),Rt=Pt,bt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ce),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,ce,W,Rt,bt,q,ht,E.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Zt),o.pixelStorei(o.UNPACK_SKIP_ROWS,te)}}function et(U,E,q){let ht=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ht=o.TEXTURE_3D);const xt=_t(U,E),ut=E.source;i.bindTexture(ht,U.__webglTexture,o.TEXTURE0+q);const Xt=s.get(ut);if(ut.version!==Xt.__version||xt===!0){i.activeTexture(o.TEXTURE0+q);const Ct=Te.getPrimaries(Te.workingColorSpace),Zt=E.colorSpace===ts?null:Te.getPrimaries(E.colorSpace),te=E.colorSpace===ts||Ct===Zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let yt=C(E.image,!1,l.maxTextureSize);yt=Le(E,yt);const St=u.convert(E.format,E.colorSpace),Ot=u.convert(E.type);let Nt=P(E.internalFormat,St,Ot,E.colorSpace,E.isVideoTexture);Y(ht,E);let Pt;const ce=E.mipmaps,W=E.isVideoTexture!==!0,Rt=Xt.__version===void 0||xt===!0,bt=ut.dataReady,It=k(E,yt);if(E.isDepthTexture)Nt=N(E.format===Us,E.type),Rt&&(W?i.texStorage2D(o.TEXTURE_2D,1,Nt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,Nt,yt.width,yt.height,0,St,Ot,null));else if(E.isDataTexture)if(ce.length>0){W&&Rt&&i.texStorage2D(o.TEXTURE_2D,It,Nt,ce[0].width,ce[0].height);for(let Mt=0,ct=ce.length;Mt<ct;Mt++)Pt=ce[Mt],W?bt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Pt.width,Pt.height,St,Ot,Pt.data):i.texImage2D(o.TEXTURE_2D,Mt,Nt,Pt.width,Pt.height,0,St,Ot,Pt.data);E.generateMipmaps=!1}else W?(Rt&&i.texStorage2D(o.TEXTURE_2D,It,Nt,yt.width,yt.height),bt&&zt(E,yt,St,Ot)):i.texImage2D(o.TEXTURE_2D,0,Nt,yt.width,yt.height,0,St,Ot,yt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&Rt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,It,Nt,ce[0].width,ce[0].height,yt.depth);for(let Mt=0,ct=ce.length;Mt<ct;Mt++)if(Pt=ce[Mt],E.format!==Ai)if(St!==null)if(W){if(bt)if(E.layerUpdates.size>0){const Bt=s_(Pt.width,Pt.height,E.format,E.type);for(const ne of E.layerUpdates){const Oe=Pt.data.subarray(ne*Bt/Pt.data.BYTES_PER_ELEMENT,(ne+1)*Bt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,ne,Pt.width,Pt.height,1,St,Oe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Pt.width,Pt.height,yt.depth,St,Pt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Nt,Pt.width,Pt.height,yt.depth,0,Pt.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?bt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Pt.width,Pt.height,yt.depth,St,Ot,Pt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Nt,Pt.width,Pt.height,yt.depth,0,St,Ot,Pt.data)}else{W&&Rt&&i.texStorage2D(o.TEXTURE_2D,It,Nt,ce[0].width,ce[0].height);for(let Mt=0,ct=ce.length;Mt<ct;Mt++)Pt=ce[Mt],E.format!==Ai?St!==null?W?bt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Pt.width,Pt.height,St,Pt.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,Nt,Pt.width,Pt.height,0,Pt.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?bt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Pt.width,Pt.height,St,Ot,Pt.data):i.texImage2D(o.TEXTURE_2D,Mt,Nt,Pt.width,Pt.height,0,St,Ot,Pt.data)}else if(E.isDataArrayTexture)if(W){if(Rt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,It,Nt,yt.width,yt.height,yt.depth),bt)if(E.layerUpdates.size>0){const Mt=s_(yt.width,yt.height,E.format,E.type);for(const ct of E.layerUpdates){const Bt=yt.data.subarray(ct*Mt/yt.data.BYTES_PER_ELEMENT,(ct+1)*Mt/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ct,yt.width,yt.height,1,St,Ot,Bt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,St,Ot,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Nt,yt.width,yt.height,yt.depth,0,St,Ot,yt.data);else if(E.isData3DTexture)W?(Rt&&i.texStorage3D(o.TEXTURE_3D,It,Nt,yt.width,yt.height,yt.depth),bt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,St,Ot,yt.data)):i.texImage3D(o.TEXTURE_3D,0,Nt,yt.width,yt.height,yt.depth,0,St,Ot,yt.data);else if(E.isFramebufferTexture){if(Rt)if(W)i.texStorage2D(o.TEXTURE_2D,It,Nt,yt.width,yt.height);else{let Mt=yt.width,ct=yt.height;for(let Bt=0;Bt<It;Bt++)i.texImage2D(o.TEXTURE_2D,Bt,Nt,Mt,ct,0,St,Ot,null),Mt>>=1,ct>>=1}}else if(ce.length>0){if(W&&Rt){const Mt=qt(ce[0]);i.texStorage2D(o.TEXTURE_2D,It,Nt,Mt.width,Mt.height)}for(let Mt=0,ct=ce.length;Mt<ct;Mt++)Pt=ce[Mt],W?bt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,St,Ot,Pt):i.texImage2D(o.TEXTURE_2D,Mt,Nt,St,Ot,Pt);E.generateMipmaps=!1}else if(W){if(Rt){const Mt=qt(yt);i.texStorage2D(o.TEXTURE_2D,It,Nt,Mt.width,Mt.height)}bt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,St,Ot,yt)}else i.texImage2D(o.TEXTURE_2D,0,Nt,St,Ot,yt);M(E)&&S(ht),Xt.__version=ut.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function vt(U,E,q){if(E.image.length!==6)return;const ht=_t(U,E),xt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+q);const ut=s.get(xt);if(xt.version!==ut.__version||ht===!0){i.activeTexture(o.TEXTURE0+q);const Xt=Te.getPrimaries(Te.workingColorSpace),Ct=E.colorSpace===ts?null:Te.getPrimaries(E.colorSpace),Zt=E.colorSpace===ts||Xt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);const te=E.isCompressedTexture||E.image[0].isCompressedTexture,yt=E.image[0]&&E.image[0].isDataTexture,St=[];for(let ct=0;ct<6;ct++)!te&&!yt?St[ct]=C(E.image[ct],!0,l.maxCubemapSize):St[ct]=yt?E.image[ct].image:E.image[ct],St[ct]=Le(E,St[ct]);const Ot=St[0],Nt=u.convert(E.format,E.colorSpace),Pt=u.convert(E.type),ce=P(E.internalFormat,Nt,Pt,E.colorSpace),W=E.isVideoTexture!==!0,Rt=ut.__version===void 0||ht===!0,bt=xt.dataReady;let It=k(E,Ot);Y(o.TEXTURE_CUBE_MAP,E);let Mt;if(te){W&&Rt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,It,ce,Ot.width,Ot.height);for(let ct=0;ct<6;ct++){Mt=St[ct].mipmaps;for(let Bt=0;Bt<Mt.length;Bt++){const ne=Mt[Bt];E.format!==Ai?Nt!==null?W?bt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt,0,0,ne.width,ne.height,Nt,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt,ce,ne.width,ne.height,0,ne.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt,0,0,ne.width,ne.height,Nt,Pt,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt,ce,ne.width,ne.height,0,Nt,Pt,ne.data)}}}else{if(Mt=E.mipmaps,W&&Rt){Mt.length>0&&It++;const ct=qt(St[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,It,ce,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(yt){W?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,St[ct].width,St[ct].height,Nt,Pt,St[ct].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ce,St[ct].width,St[ct].height,0,Nt,Pt,St[ct].data);for(let Bt=0;Bt<Mt.length;Bt++){const Oe=Mt[Bt].image[ct].image;W?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt+1,0,0,Oe.width,Oe.height,Nt,Pt,Oe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt+1,ce,Oe.width,Oe.height,0,Nt,Pt,Oe.data)}}else{W?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Nt,Pt,St[ct]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ce,Nt,Pt,St[ct]);for(let Bt=0;Bt<Mt.length;Bt++){const ne=Mt[Bt];W?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt+1,0,0,Nt,Pt,ne.image[ct]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt+1,ce,Nt,Pt,ne.image[ct])}}}M(E)&&S(o.TEXTURE_CUBE_MAP),ut.__version=xt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Tt(U,E,q,ht,xt,ut){const Xt=u.convert(q.format,q.colorSpace),Ct=u.convert(q.type),Zt=P(q.internalFormat,Xt,Ct,q.colorSpace),te=s.get(E),yt=s.get(q);if(yt.__renderTarget=E,!te.__hasExternalTextures){const St=Math.max(1,E.width>>ut),Ot=Math.max(1,E.height>>ut);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,ut,Zt,St,Ot,E.depth,0,Xt,Ct,null):i.texImage2D(xt,ut,Zt,St,Ot,0,Xt,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),We(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,xt,yt.__webglTexture,0,G(E)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,xt,yt.__webglTexture,ut),i.bindFramebuffer(o.FRAMEBUFFER,null)}function kt(U,E,q){if(o.bindRenderbuffer(o.RENDERBUFFER,U),E.depthBuffer){const ht=E.depthTexture,xt=ht&&ht.isDepthTexture?ht.type:null,ut=N(E.stencilBuffer,xt),Xt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;We(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(E),ut,E.width,E.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(E),ut,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ut,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xt,o.RENDERBUFFER,U)}else{const ht=E.textures;for(let xt=0;xt<ht.length;xt++){const ut=ht[xt],Xt=u.convert(ut.format,ut.colorSpace),Ct=u.convert(ut.type),Zt=P(ut.internalFormat,Xt,Ct,ut.colorSpace);We(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(E),Zt,E.width,E.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(E),Zt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Zt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Kt(U,E,q){const ht=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=s.get(E.depthTexture);if(xt.__renderTarget=E,(!xt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ht){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),xt.__webglTexture===void 0){xt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),Y(o.TEXTURE_CUBE_MAP,E.depthTexture);const te=u.convert(E.depthTexture.format),yt=u.convert(E.depthTexture.type);let St;E.depthTexture.format===xa?St=o.DEPTH_COMPONENT24:E.depthTexture.format===Us&&(St=o.DEPTH24_STENCIL8);for(let Ot=0;Ot<6;Ot++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,St,E.width,E.height,0,te,yt,null)}}else J(E.depthTexture,0);const ut=xt.__webglTexture,Xt=G(E),Ct=ht?o.TEXTURE_CUBE_MAP_POSITIVE_X+q:o.TEXTURE_2D,Zt=E.depthTexture.format===Us?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===xa)We(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Zt,Ct,ut,0,Xt):o.framebufferTexture2D(o.FRAMEBUFFER,Zt,Ct,ut,0);else if(E.depthTexture.format===Us)We(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Zt,Ct,ut,0,Xt):o.framebufferTexture2D(o.FRAMEBUFFER,Zt,Ct,ut,0);else throw new Error("Unknown depthTexture format")}function $t(U){const E=s.get(U),q=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const ht=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ht){const xt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ht.removeEventListener("dispose",xt)};ht.addEventListener("dispose",xt),E.__depthDisposeCallback=xt}E.__boundDepthTexture=ht}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let ht=0;ht<6;ht++)Kt(E.__webglFramebuffer[ht],U,ht);else{const ht=U.texture.mipmaps;ht&&ht.length>0?Kt(E.__webglFramebuffer[0],U,0):Kt(E.__webglFramebuffer,U,0)}else if(q){E.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ht]),E.__webglDepthbuffer[ht]===void 0)E.__webglDepthbuffer[ht]=o.createRenderbuffer(),kt(E.__webglDepthbuffer[ht],U,!1);else{const xt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ut)}}else{const ht=U.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),kt(E.__webglDepthbuffer,U,!1);else{const xt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ut)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ke(U,E,q){const ht=s.get(U);E!==void 0&&Tt(ht.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),q!==void 0&&$t(U)}function _e(U){const E=U.texture,q=s.get(U),ht=s.get(E);U.addEventListener("dispose",F);const xt=U.textures,ut=U.isWebGLCubeRenderTarget===!0,Xt=xt.length>1;if(Xt||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=E.version,d.memory.textures++),ut){q.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[Ct]=[];for(let Zt=0;Zt<E.mipmaps.length;Zt++)q.__webglFramebuffer[Ct][Zt]=o.createFramebuffer()}else q.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ct=0;Ct<E.mipmaps.length;Ct++)q.__webglFramebuffer[Ct]=o.createFramebuffer()}else q.__webglFramebuffer=o.createFramebuffer();if(Xt)for(let Ct=0,Zt=xt.length;Ct<Zt;Ct++){const te=s.get(xt[Ct]);te.__webglTexture===void 0&&(te.__webglTexture=o.createTexture(),d.memory.textures++)}if(U.samples>0&&We(U)===!1){q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ct=0;Ct<xt.length;Ct++){const Zt=xt[Ct];q.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,q.__webglColorRenderbuffer[Ct]);const te=u.convert(Zt.format,Zt.colorSpace),yt=u.convert(Zt.type),St=P(Zt.internalFormat,te,yt,Zt.colorSpace,U.isXRRenderTarget===!0),Ot=G(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ot,St,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,q.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),kt(q.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),Y(o.TEXTURE_CUBE_MAP,E);for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0)for(let Zt=0;Zt<E.mipmaps.length;Zt++)Tt(q.__webglFramebuffer[Ct][Zt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Zt);else Tt(q.__webglFramebuffer[Ct],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);M(E)&&S(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xt){for(let Ct=0,Zt=xt.length;Ct<Zt;Ct++){const te=xt[Ct],yt=s.get(te);let St=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(St=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(St,yt.__webglTexture),Y(St,te),Tt(q.__webglFramebuffer,U,te,o.COLOR_ATTACHMENT0+Ct,St,0),M(te)&&S(St)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ct=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,ht.__webglTexture),Y(Ct,E),E.mipmaps&&E.mipmaps.length>0)for(let Zt=0;Zt<E.mipmaps.length;Zt++)Tt(q.__webglFramebuffer[Zt],U,E,o.COLOR_ATTACHMENT0,Ct,Zt);else Tt(q.__webglFramebuffer,U,E,o.COLOR_ATTACHMENT0,Ct,0);M(E)&&S(Ct),i.unbindTexture()}U.depthBuffer&&$t(U)}function pe(U){const E=U.textures;for(let q=0,ht=E.length;q<ht;q++){const xt=E[q];if(M(xt)){const ut=w(U),Xt=s.get(xt).__webglTexture;i.bindTexture(ut,Xt),S(ut),i.unbindTexture()}}}const we=[],oe=[];function Ze(U){if(U.samples>0){if(We(U)===!1){const E=U.textures,q=U.width,ht=U.height;let xt=o.COLOR_BUFFER_BIT;const ut=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xt=s.get(U),Ct=E.length>1;if(Ct)for(let te=0;te<E.length;te++)i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer);const Zt=U.texture.mipmaps;Zt&&Zt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let te=0;te<E.length;te++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[te]);const yt=s.get(E[te]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,yt,0)}o.blitFramebuffer(0,0,q,ht,0,0,q,ht,xt,o.NEAREST),m===!0&&(we.length=0,oe.length=0,we.push(o.COLOR_ATTACHMENT0+te),U.depthBuffer&&U.resolveDepthBuffer===!1&&(we.push(ut),oe.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,oe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,we))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let te=0;te<E.length;te++){i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[te]);const yt=s.get(E[te]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,yt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function G(U){return Math.min(l.maxSamples,U.samples)}function We(U){const E=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ye(U){const E=d.render.frame;v.get(U)!==E&&(v.set(U,E),U.update())}function Le(U,E){const q=U.colorSpace,ht=U.format,xt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||q!==Pr&&q!==ts&&(Te.getTransfer(q)===ze?(ht!==Ai||xt!==hi)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",q)),E}function qt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=it,this.resetTextureUnits=$,this.setTexture2D=J,this.setTexture2DArray=L,this.setTexture3D=I,this.setTextureCube=ot,this.rebindTextures=Ke,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Fb(o,e){function i(s,l=ts){let u;const d=Te.getTransfer(l);if(s===hi)return o.UNSIGNED_BYTE;if(s===Nh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Oh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===H_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===G_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===F_)return o.BYTE;if(s===B_)return o.SHORT;if(s===Vo)return o.UNSIGNED_SHORT;if(s===Lh)return o.INT;if(s===Gi)return o.UNSIGNED_INT;if(s===Ii)return o.FLOAT;if(s===va)return o.HALF_FLOAT;if(s===V_)return o.ALPHA;if(s===k_)return o.RGB;if(s===Ai)return o.RGBA;if(s===xa)return o.DEPTH_COMPONENT;if(s===Us)return o.DEPTH_STENCIL;if(s===X_)return o.RED;if(s===Ph)return o.RED_INTEGER;if(s===Or)return o.RG;if(s===Ih)return o.RG_INTEGER;if(s===zh)return o.RGBA_INTEGER;if(s===Oc||s===Pc||s===Ic||s===zc)if(d===ze)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Oc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Pc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ic)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Oc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Pc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ic)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===jd||s===Zd||s===Kd||s===Qd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===jd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Zd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Kd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Jd||s===$d||s===th||s===eh||s===nh||s===ih||s===ah)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Jd||s===$d)return d===ze?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===th)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===eh)return u.COMPRESSED_R11_EAC;if(s===nh)return u.COMPRESSED_SIGNED_R11_EAC;if(s===ih)return u.COMPRESSED_RG11_EAC;if(s===ah)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===sh||s===rh||s===oh||s===lh||s===ch||s===uh||s===fh||s===dh||s===hh||s===ph||s===mh||s===gh||s===_h||s===vh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===sh)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===rh)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===oh)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===lh)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ch)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===uh)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===fh)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===dh)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===hh)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ph)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===mh)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===gh)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===_h)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===vh)return d===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===xh||s===Sh||s===Mh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===xh)return d===ze?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Sh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Mh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===yh||s===Eh||s===Th||s===bh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===yh)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Eh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Th)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===bh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ko?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const Bb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Gb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new tv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Ri({vertexShader:Bb,fragmentShader:Hb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Vi(new Zo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vb extends zr{constructor(e,i){super();const s=this;let l=null,u=1,d=null,p="local-floor",m=1,h=null,v=null,x=null,_=null,y=null,T=null;const C=typeof XRWebGLBinding<"u",M=new Gb,S={},w=i.getContextAttributes();let P=null,N=null;const k=[],B=[],F=new Ue;let b=null;const D=new Ti;D.viewport=new en;const pt=new Ti;pt.viewport=new en;const H=[D,pt],$=new JM;let it=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let vt=k[et];return vt===void 0&&(vt=new pd,k[et]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(et){let vt=k[et];return vt===void 0&&(vt=new pd,k[et]=vt),vt.getGripSpace()},this.getHand=function(et){let vt=k[et];return vt===void 0&&(vt=new pd,k[et]=vt),vt.getHandSpace()};function J(et){const vt=B.indexOf(et.inputSource);if(vt===-1)return;const Tt=k[vt];Tt!==void 0&&(Tt.update(et.inputSource,et.frame,h||d),Tt.dispatchEvent({type:et.type,data:et.inputSource}))}function L(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",I);for(let et=0;et<k.length;et++){const vt=B[et];vt!==null&&(B[et]=null,k[et].disconnect(vt))}it=null,lt=null,M.reset();for(const et in S)delete S[et];e.setRenderTarget(P),y=null,_=null,x=null,l=null,N=null,zt.stop(),s.isPresenting=!1,e.setPixelRatio(b),e.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){u=et,s.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){p=et,s.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(et){h=et},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return x===null&&C&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",L),l.addEventListener("inputsourceschange",I),w.xrCompatible!==!0&&await i.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,kt=null,Kt=null;w.depth&&(Kt=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Tt=w.stencil?Us:xa,kt=w.stencil?ko:Gi);const $t={colorFormat:i.RGBA8,depthFormat:Kt,scaleFactor:u};x=this.getBinding(),_=x.createProjectionLayer($t),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),N=new Bi(_.textureWidth,_.textureHeight,{format:Ai,type:hi,depthTexture:new Wo(_.textureWidth,_.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Tt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,Tt),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new Bi(y.framebufferWidth,y.framebufferHeight,{format:Ai,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),zt.setContext(l),zt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function I(et){for(let vt=0;vt<et.removed.length;vt++){const Tt=et.removed[vt],kt=B.indexOf(Tt);kt>=0&&(B[kt]=null,k[kt].disconnect(Tt))}for(let vt=0;vt<et.added.length;vt++){const Tt=et.added[vt];let kt=B.indexOf(Tt);if(kt===-1){for(let $t=0;$t<k.length;$t++)if($t>=B.length){B.push(Tt),kt=$t;break}else if(B[$t]===null){B[$t]=Tt,kt=$t;break}if(kt===-1)break}const Kt=k[kt];Kt&&Kt.connect(Tt)}}const ot=new at,dt=new at;function Et(et,vt,Tt){ot.setFromMatrixPosition(vt.matrixWorld),dt.setFromMatrixPosition(Tt.matrixWorld);const kt=ot.distanceTo(dt),Kt=vt.projectionMatrix.elements,$t=Tt.projectionMatrix.elements,Ke=Kt[14]/(Kt[10]-1),_e=Kt[14]/(Kt[10]+1),pe=(Kt[9]+1)/Kt[5],we=(Kt[9]-1)/Kt[5],oe=(Kt[8]-1)/Kt[0],Ze=($t[8]+1)/$t[0],G=Ke*oe,We=Ke*Ze,ye=kt/(-oe+Ze),Le=ye*-oe;if(vt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Le),et.translateZ(ye),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Kt[10]===-1)et.projectionMatrix.copy(vt.projectionMatrix),et.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const qt=Ke+ye,U=_e+ye,E=G-Le,q=We+(kt-Le),ht=pe*_e/U*qt,xt=we*_e/U*qt;et.projectionMatrix.makePerspective(E,q,ht,xt,qt,U),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function O(et,vt){vt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(vt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let vt=et.near,Tt=et.far;M.texture!==null&&(M.depthNear>0&&(vt=M.depthNear),M.depthFar>0&&(Tt=M.depthFar)),$.near=pt.near=D.near=vt,$.far=pt.far=D.far=Tt,(it!==$.near||lt!==$.far)&&(l.updateRenderState({depthNear:$.near,depthFar:$.far}),it=$.near,lt=$.far),$.layers.mask=et.layers.mask|6,D.layers.mask=$.layers.mask&-5,pt.layers.mask=$.layers.mask&-3;const kt=et.parent,Kt=$.cameras;O($,kt);for(let $t=0;$t<Kt.length;$t++)O(Kt[$t],kt);Kt.length===2?Et($,D,pt):$.projectionMatrix.copy(D.projectionMatrix),Y(et,$,kt)};function Y(et,vt,Tt){Tt===null?et.matrix.copy(vt.matrixWorld):(et.matrix.copy(Tt.matrixWorld),et.matrix.invert(),et.matrix.multiply(vt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(vt.projectionMatrix),et.projectionMatrixInverse.copy(vt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Ah*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(_===null&&y===null))return m},this.setFoveation=function(et){m=et,_!==null&&(_.fixedFoveation=et),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=et)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh($)},this.getCameraTexture=function(et){return S[et]};let _t=null;function At(et,vt){if(v=vt.getViewerPose(h||d),T=vt,v!==null){const Tt=v.views;y!==null&&(e.setRenderTargetFramebuffer(N,y.framebuffer),e.setRenderTarget(N));let kt=!1;Tt.length!==$.cameras.length&&($.cameras.length=0,kt=!0);for(let _e=0;_e<Tt.length;_e++){const pe=Tt[_e];let we=null;if(y!==null)we=y.getViewport(pe);else{const Ze=x.getViewSubImage(_,pe);we=Ze.viewport,_e===0&&(e.setRenderTargetTextures(N,Ze.colorTexture,Ze.depthStencilTexture),e.setRenderTarget(N))}let oe=H[_e];oe===void 0&&(oe=new Ti,oe.layers.enable(_e),oe.viewport=new en,H[_e]=oe),oe.matrix.fromArray(pe.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(pe.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(we.x,we.y,we.width,we.height),_e===0&&($.matrix.copy(oe.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),kt===!0&&$.cameras.push(oe)}const Kt=l.enabledFeatures;if(Kt&&Kt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){x=s.getBinding();const _e=x.getDepthInformation(Tt[0]);_e&&_e.isValid&&_e.texture&&M.init(_e,l.renderState)}if(Kt&&Kt.includes("camera-access")&&C){e.state.unbindTexture(),x=s.getBinding();for(let _e=0;_e<Tt.length;_e++){const pe=Tt[_e].camera;if(pe){let we=S[pe];we||(we=new tv,S[pe]=we);const oe=x.getCameraImage(pe);we.sourceTexture=oe}}}}for(let Tt=0;Tt<k.length;Tt++){const kt=B[Tt],Kt=k[Tt];kt!==null&&Kt!==void 0&&Kt.update(kt,vt,h||d)}_t&&_t(et,vt),vt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:vt}),T=null}const zt=new iv;zt.setAnimationLoop(At),this.setAnimationLoop=function(et){_t=et},this.dispose=function(){}}}const As=new Sa,kb=new fn;function Xb(o,e){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,ev(o)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,w,P,N){S.isMeshBasicMaterial?u(M,S):S.isMeshLambertMaterial?(u(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(u(M,S),x(M,S)):S.isMeshPhongMaterial?(u(M,S),v(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(u(M,S),_(M,S),S.isMeshPhysicalMaterial&&y(M,S,N)):S.isMeshMatcapMaterial?(u(M,S),T(M,S)):S.isMeshDepthMaterial?u(M,S):S.isMeshDistanceMaterial?(u(M,S),C(M,S)):S.isMeshNormalMaterial?u(M,S):S.isLineBasicMaterial?(d(M,S),S.isLineDashedMaterial&&p(M,S)):S.isPointsMaterial?m(M,S,w,P):S.isSpriteMaterial?h(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function u(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===Xn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===Xn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const w=e.get(S),P=w.envMap,N=w.envMapRotation;P&&(M.envMap.value=P,As.copy(N),As.x*=-1,As.y*=-1,As.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),M.envMapRotation.value.setFromMatrix4(kb.makeRotationFromEuler(As)),M.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function d(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function p(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,w,P){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*w,M.scale.value=P*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function v(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function x(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function _(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,w){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Xn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=w.texture,M.transmissionSamplerSize.value.set(w.width,w.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,S){S.matcap&&(M.matcap.value=S.matcap)}function C(M,S){const w=e.get(S).light;M.referencePosition.value.setFromMatrixPosition(w.matrixWorld),M.nearDistance.value=w.shadow.camera.near,M.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function Wb(o,e,i,s){let l={},u={},d=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,P){const N=P.program;s.uniformBlockBinding(w,N)}function h(w,P){let N=l[w.id];N===void 0&&(T(w),N=v(w),l[w.id]=N,w.addEventListener("dispose",M));const k=P.program;s.updateUBOMapping(w,k);const B=e.render.frame;u[w.id]!==B&&(_(w),u[w.id]=B)}function v(w){const P=x();w.__bindingPointIndex=P;const N=o.createBuffer(),k=w.__size,B=w.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,k,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,N),N}function x(){for(let w=0;w<p;w++)if(d.indexOf(w)===-1)return d.push(w),w;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(w){const P=l[w.id],N=w.uniforms,k=w.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let B=0,F=N.length;B<F;B++){const b=Array.isArray(N[B])?N[B]:[N[B]];for(let D=0,pt=b.length;D<pt;D++){const H=b[D];if(y(H,B,D,k)===!0){const $=H.__offset,it=Array.isArray(H.value)?H.value:[H.value];let lt=0;for(let J=0;J<it.length;J++){const L=it[J],I=C(L);typeof L=="number"||typeof L=="boolean"?(H.__data[0]=L,o.bufferSubData(o.UNIFORM_BUFFER,$+lt,H.__data)):L.isMatrix3?(H.__data[0]=L.elements[0],H.__data[1]=L.elements[1],H.__data[2]=L.elements[2],H.__data[3]=0,H.__data[4]=L.elements[3],H.__data[5]=L.elements[4],H.__data[6]=L.elements[5],H.__data[7]=0,H.__data[8]=L.elements[6],H.__data[9]=L.elements[7],H.__data[10]=L.elements[8],H.__data[11]=0):(L.toArray(H.__data,lt),lt+=I.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,$,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(w,P,N,k){const B=w.value,F=P+"_"+N;if(k[F]===void 0)return typeof B=="number"||typeof B=="boolean"?k[F]=B:k[F]=B.clone(),!0;{const b=k[F];if(typeof B=="number"||typeof B=="boolean"){if(b!==B)return k[F]=B,!0}else if(b.equals(B)===!1)return b.copy(B),!0}return!1}function T(w){const P=w.uniforms;let N=0;const k=16;for(let F=0,b=P.length;F<b;F++){const D=Array.isArray(P[F])?P[F]:[P[F]];for(let pt=0,H=D.length;pt<H;pt++){const $=D[pt],it=Array.isArray($.value)?$.value:[$.value];for(let lt=0,J=it.length;lt<J;lt++){const L=it[lt],I=C(L),ot=N%k,dt=ot%I.boundary,Et=ot+dt;N+=dt,Et!==0&&k-Et<I.storage&&(N+=k-Et),$.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=N,N+=I.storage}}}const B=N%k;return B>0&&(N+=k-B),w.__size=N,w.__cache={},this}function C(w){const P={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(P.boundary=4,P.storage=4):w.isVector2?(P.boundary=8,P.storage=8):w.isVector3||w.isColor?(P.boundary=16,P.storage=12):w.isVector4?(P.boundary=16,P.storage=16):w.isMatrix3?(P.boundary=48,P.storage=48):w.isMatrix4?(P.boundary=64,P.storage=64):w.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):re("WebGLRenderer: Unsupported uniform value type.",w),P}function M(w){const P=w.target;P.removeEventListener("dispose",M);const N=d.indexOf(P.__bindingPointIndex);d.splice(N,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete u[P.id]}function S(){for(const w in l)o.deleteBuffer(l[w]);d=[],l={},u={}}return{bind:m,update:h,dispose:S}}const qb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Oi=null;function Yb(){return Oi===null&&(Oi=new PM(qb,16,16,Or,va),Oi.name="DFG_LUT",Oi.minFilter=wn,Oi.magFilter=wn,Oi.wrapS=pa,Oi.wrapT=pa,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}class jb{constructor(e={}){const{canvas:i=fM(),context:s=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:_=!1,outputBufferType:y=hi}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=d;const C=y,M=new Set([zh,Ih,Ph]),S=new Set([hi,Gi,Vo,ko,Nh,Oh]),w=new Uint32Array(4),P=new Int32Array(4);let N=null,k=null;const B=[],F=[];let b=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let pt=!1;this._outputColorSpace=di;let H=0,$=0,it=null,lt=-1,J=null;const L=new en,I=new en;let ot=null;const dt=new Ge(0);let Et=0,O=i.width,Y=i.height,_t=1,At=null,zt=null;const et=new en(0,0,O,Y),vt=new en(0,0,O,Y);let Tt=!1;const kt=new J_;let Kt=!1,$t=!1;const Ke=new fn,_e=new at,pe=new en,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Ze(){return it===null?_t:1}let G=s;function We(R,X){return i.getContext(R,X)}try{const R={alpha:!0,depth:l,stencil:u,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Uh}`),i.addEventListener("webglcontextlost",Bt,!1),i.addEventListener("webglcontextrestored",ne,!1),i.addEventListener("webglcontextcreationerror",Oe,!1),G===null){const X="webgl2";if(G=We(X,R),G===null)throw We(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Ce("WebGLRenderer: "+R.message),R}let ye,Le,qt,U,E,q,ht,xt,ut,Xt,Ct,Zt,te,yt,St,Ot,Nt,Pt,ce,W,Rt,bt,It;function Mt(){ye=new j1(G),ye.init(),Rt=new Fb(G,ye),Le=new H1(G,ye,e,Rt),qt=new Ib(G,ye),Le.reversedDepthBuffer&&_&&qt.buffers.depth.setReversed(!0),U=new Q1(G),E=new yb,q=new zb(G,ye,qt,E,Le,Rt,U),ht=new Y1(D),xt=new ny(G),bt=new F1(G,xt),ut=new Z1(G,xt,U,bt),Xt=new $1(G,ut,xt,bt,U),Pt=new J1(G,Le,q),St=new G1(E),Ct=new Mb(D,ht,ye,Le,bt,St),Zt=new Xb(D,E),te=new Tb,yt=new Db(ye),Nt=new z1(D,ht,qt,Xt,T,m),Ot=new Pb(D,Xt,Le),It=new Wb(G,U,Le,qt),ce=new B1(G,ye,U),W=new K1(G,ye,U),U.programs=Ct.programs,D.capabilities=Le,D.extensions=ye,D.properties=E,D.renderLists=te,D.shadowMap=Ot,D.state=qt,D.info=U}Mt(),C!==hi&&(b=new eT(C,i.width,i.height,l,u));const ct=new Vb(D,G);this.xr=ct,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=ye.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ye.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(R){R!==void 0&&(_t=R,this.setSize(O,Y,!1))},this.getSize=function(R){return R.set(O,Y)},this.setSize=function(R,X,st=!0){if(ct.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,Y=X,i.width=Math.floor(R*_t),i.height=Math.floor(X*_t),st===!0&&(i.style.width=R+"px",i.style.height=X+"px"),b!==null&&b.setSize(i.width,i.height),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(O*_t,Y*_t).floor()},this.setDrawingBufferSize=function(R,X,st){O=R,Y=X,_t=st,i.width=Math.floor(R*st),i.height=Math.floor(X*st),this.setViewport(0,0,R,X)},this.setEffects=function(R){if(C===hi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let X=0;X<R.length;X++)if(R[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(L)},this.getViewport=function(R){return R.copy(et)},this.setViewport=function(R,X,st,tt){R.isVector4?et.set(R.x,R.y,R.z,R.w):et.set(R,X,st,tt),qt.viewport(L.copy(et).multiplyScalar(_t).round())},this.getScissor=function(R){return R.copy(vt)},this.setScissor=function(R,X,st,tt){R.isVector4?vt.set(R.x,R.y,R.z,R.w):vt.set(R,X,st,tt),qt.scissor(I.copy(vt).multiplyScalar(_t).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(R){qt.setScissorTest(Tt=R)},this.setOpaqueSort=function(R){At=R},this.setTransparentSort=function(R){zt=R},this.getClearColor=function(R){return R.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,st=!0){let tt=0;if(R){let Z=!1;if(it!==null){const wt=it.texture.format;Z=M.has(wt)}if(Z){const wt=it.texture.type,Ft=S.has(wt),Dt=Nt.getClearColor(),Wt=Nt.getClearAlpha(),jt=Dt.r,ee=Dt.g,ae=Dt.b;Ft?(w[0]=jt,w[1]=ee,w[2]=ae,w[3]=Wt,G.clearBufferuiv(G.COLOR,0,w)):(P[0]=jt,P[1]=ee,P[2]=ae,P[3]=Wt,G.clearBufferiv(G.COLOR,0,P))}else tt|=G.COLOR_BUFFER_BIT}X&&(tt|=G.DEPTH_BUFFER_BIT),st&&(tt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt!==0&&G.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Bt,!1),i.removeEventListener("webglcontextrestored",ne,!1),i.removeEventListener("webglcontextcreationerror",Oe,!1),Nt.dispose(),te.dispose(),yt.dispose(),E.dispose(),ht.dispose(),Xt.dispose(),bt.dispose(),It.dispose(),Ct.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Os),ct.removeEventListener("sessionend",Ps),Ci.stop()};function Bt(R){R.preventDefault(),Gg("WebGLRenderer: Context Lost."),pt=!0}function ne(){Gg("WebGLRenderer: Context Restored."),pt=!1;const R=U.autoReset,X=Ot.enabled,st=Ot.autoUpdate,tt=Ot.needsUpdate,Z=Ot.type;Mt(),U.autoReset=R,Ot.enabled=X,Ot.autoUpdate=st,Ot.needsUpdate=tt,Ot.type=Z}function Oe(R){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ee(R){const X=R.target;X.removeEventListener("dispose",Ee),Un(X)}function Un(R){pi(R),E.remove(R)}function pi(R){const X=E.get(R).programs;X!==void 0&&(X.forEach(function(st){Ct.releaseProgram(st)}),R.isShaderMaterial&&Ct.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,st,tt,Z,wt){X===null&&(X=we);const Ft=Z.isMesh&&Z.matrixWorld.determinant()<0,Dt=tl(R,X,st,tt,Z);qt.setMaterial(tt,Ft);let Wt=st.index,jt=1;if(tt.wireframe===!0){if(Wt=ut.getWireframeAttribute(st),Wt===void 0)return;jt=2}const ee=st.drawRange,ae=st.attributes.position;let Ht=ee.start*jt,ue=(ee.start+ee.count)*jt;wt!==null&&(Ht=Math.max(Ht,wt.start*jt),ue=Math.min(ue,(wt.start+wt.count)*jt)),Wt!==null?(Ht=Math.max(Ht,0),ue=Math.min(ue,Wt.count)):ae!=null&&(Ht=Math.max(Ht,0),ue=Math.min(ue,ae.count));const qe=ue-Ht;if(qe<0||qe===1/0)return;bt.setup(Z,tt,Dt,st,Wt);let Ye,be=ce;if(Wt!==null&&(Ye=xt.get(Wt),be=W,be.setIndex(Ye)),Z.isMesh)tt.wireframe===!0?(qt.setLineWidth(tt.wireframeLinewidth*Ze()),be.setMode(G.LINES)):be.setMode(G.TRIANGLES);else if(Z.isLine){let hn=tt.linewidth;hn===void 0&&(hn=1),qt.setLineWidth(hn*Ze()),Z.isLineSegments?be.setMode(G.LINES):Z.isLineLoop?be.setMode(G.LINE_LOOP):be.setMode(G.LINE_STRIP)}else Z.isPoints?be.setMode(G.POINTS):Z.isSprite&&be.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Gc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),be.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))be.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const hn=Z._multiDrawStarts,Vt=Z._multiDrawCounts,Ln=Z._multiDrawCount,ie=Wt?xt.get(Wt).bytesPerElement:1,Nn=E.get(tt).currentProgram.getUniforms();for(let Wn=0;Wn<Ln;Wn++)Nn.setValue(G,"_gl_DrawID",Wn),be.render(hn[Wn]/ie,Vt[Wn])}else if(Z.isInstancedMesh)be.renderInstances(Ht,qe,Z.count);else if(st.isInstancedBufferGeometry){const hn=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Vt=Math.min(st.instanceCount,hn);be.renderInstances(Ht,qe,Vt)}else be.render(Ht,qe)};function Hr(R,X,st){R.transparent===!0&&R.side===ha&&R.forceSinglePass===!1?(R.side=Xn,R.needsUpdate=!0,ya(R,X,st),R.side=ns,R.needsUpdate=!0,ya(R,X,st),R.side=ha):ya(R,X,st)}this.compile=function(R,X,st=null){st===null&&(st=R),k=yt.get(st),k.init(X),F.push(k),st.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(k.pushLight(Z),Z.castShadow&&k.pushShadow(Z))}),R!==st&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(k.pushLight(Z),Z.castShadow&&k.pushShadow(Z))}),k.setupLights();const tt=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const wt=Z.material;if(wt)if(Array.isArray(wt))for(let Ft=0;Ft<wt.length;Ft++){const Dt=wt[Ft];Hr(Dt,st,Z),tt.add(Dt)}else Hr(wt,st,Z),tt.add(wt)}),k=F.pop(),tt},this.compileAsync=function(R,X,st=null){const tt=this.compile(R,X,st);return new Promise(Z=>{function wt(){if(tt.forEach(function(Ft){E.get(Ft).currentProgram.isReady()&&tt.delete(Ft)}),tt.size===0){Z(R);return}setTimeout(wt,10)}ye.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Ns=null;function Qo(R){Ns&&Ns(R)}function Os(){Ci.stop()}function Ps(){Ci.start()}const Ci=new iv;Ci.setAnimationLoop(Qo),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(R){Ns=R,ct.setAnimationLoop(R),R===null?Ci.stop():Ci.start()},ct.addEventListener("sessionstart",Os),ct.addEventListener("sessionend",Ps),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(pt===!0)return;const st=ct.enabled===!0&&ct.isPresenting===!0,tt=b!==null&&(it===null||st)&&b.begin(D,it);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(X),X=ct.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,X,it),k=yt.get(R,F.length),k.init(X),F.push(k),Ke.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),kt.setFromProjectionMatrix(Ke,zi,X.reversedDepth),$t=this.localClippingEnabled,Kt=St.init(this.clippingPlanes,$t),N=te.get(R,B.length),N.init(),B.push(N),ct.enabled===!0&&ct.isPresenting===!0){const Ft=D.xr.getDepthSensingMesh();Ft!==null&&Is(Ft,X,-1/0,D.sortObjects)}Is(R,X,0,D.sortObjects),N.finish(),D.sortObjects===!0&&N.sort(At,zt),oe=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,oe&&Nt.addToRenderList(N,R),this.info.render.frame++,Kt===!0&&St.beginShadows();const Z=k.state.shadowsArray;if(Ot.render(Z,R,X),Kt===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset(),(tt&&b.hasRenderPass())===!1){const Ft=N.opaque,Dt=N.transmissive;if(k.setupLights(),X.isArrayCamera){const Wt=X.cameras;if(Dt.length>0)for(let jt=0,ee=Wt.length;jt<ee;jt++){const ae=Wt[jt];nn(Ft,Dt,R,ae)}oe&&Nt.render(R);for(let jt=0,ee=Wt.length;jt<ee;jt++){const ae=Wt[jt];mi(N,R,ae,ae.viewport)}}else Dt.length>0&&nn(Ft,Dt,R,X),oe&&Nt.render(R),mi(N,R,X)}it!==null&&$===0&&(q.updateMultisampleRenderTarget(it),q.updateRenderTargetMipmap(it)),tt&&b.end(D),R.isScene===!0&&R.onAfterRender(D,R,X),bt.resetDefaultState(),lt=-1,J=null,F.pop(),F.length>0?(k=F[F.length-1],Kt===!0&&St.setGlobalState(D.clippingPlanes,k.state.camera)):k=null,B.pop(),B.length>0?N=B[B.length-1]:N=null};function Is(R,X,st,tt){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)k.pushLight(R),R.castShadow&&k.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||kt.intersectsSprite(R)){tt&&pe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ke);const Ft=Xt.update(R),Dt=R.material;Dt.visible&&N.push(R,Ft,Dt,st,pe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||kt.intersectsObject(R))){const Ft=Xt.update(R),Dt=R.material;if(tt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),pe.copy(R.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),pe.copy(Ft.boundingSphere.center)),pe.applyMatrix4(R.matrixWorld).applyMatrix4(Ke)),Array.isArray(Dt)){const Wt=Ft.groups;for(let jt=0,ee=Wt.length;jt<ee;jt++){const ae=Wt[jt],Ht=Dt[ae.materialIndex];Ht&&Ht.visible&&N.push(R,Ft,Ht,st,pe.z,ae)}}else Dt.visible&&N.push(R,Ft,Dt,st,pe.z,null)}}const wt=R.children;for(let Ft=0,Dt=wt.length;Ft<Dt;Ft++)Is(wt[Ft],X,st,tt)}function mi(R,X,st,tt){const{opaque:Z,transmissive:wt,transparent:Ft}=R;k.setupLightsView(st),Kt===!0&&St.setGlobalState(D.clippingPlanes,st),tt&&qt.viewport(L.copy(tt)),Z.length>0&&dn(Z,X,st),wt.length>0&&dn(wt,X,st),Ft.length>0&&dn(Ft,X,st),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function nn(R,X,st,tt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[tt.id]===void 0){const Ht=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");k.state.transmissionRenderTarget[tt.id]=new Bi(1,1,{generateMipmaps:!0,type:Ht?va:hi,minFilter:Ds,samples:Math.max(4,Le.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace})}const wt=k.state.transmissionRenderTarget[tt.id],Ft=tt.viewport||L;wt.setSize(Ft.z*D.transmissionResolutionScale,Ft.w*D.transmissionResolutionScale);const Dt=D.getRenderTarget(),Wt=D.getActiveCubeFace(),jt=D.getActiveMipmapLevel();D.setRenderTarget(wt),D.getClearColor(dt),Et=D.getClearAlpha(),Et<1&&D.setClearColor(16777215,.5),D.clear(),oe&&Nt.render(st);const ee=D.toneMapping;D.toneMapping=Fi;const ae=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),k.setupLightsView(tt),Kt===!0&&St.setGlobalState(D.clippingPlanes,tt),dn(R,st,tt),q.updateMultisampleRenderTarget(wt),q.updateRenderTargetMipmap(wt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let ue=0,qe=X.length;ue<qe;ue++){const Ye=X[ue],{object:be,geometry:hn,material:Vt,group:Ln}=Ye;if(Vt.side===ha&&be.layers.test(tt.layers)){const ie=Vt.side;Vt.side=Xn,Vt.needsUpdate=!0,ki(be,st,tt,hn,Vt,Ln),Vt.side=ie,Vt.needsUpdate=!0,Ht=!0}}Ht===!0&&(q.updateMultisampleRenderTarget(wt),q.updateRenderTargetMipmap(wt))}D.setRenderTarget(Dt,Wt,jt),D.setClearColor(dt,Et),ae!==void 0&&(tt.viewport=ae),D.toneMapping=ee}function dn(R,X,st){const tt=X.isScene===!0?X.overrideMaterial:null;for(let Z=0,wt=R.length;Z<wt;Z++){const Ft=R[Z],{object:Dt,geometry:Wt,group:jt}=Ft;let ee=Ft.material;ee.allowOverride===!0&&tt!==null&&(ee=tt),Dt.layers.test(st.layers)&&ki(Dt,X,st,Wt,ee,jt)}}function ki(R,X,st,tt,Z,wt){R.onBeforeRender(D,X,st,tt,Z,wt),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(D,X,st,tt,R,wt),Z.transparent===!0&&Z.side===ha&&Z.forceSinglePass===!1?(Z.side=Xn,Z.needsUpdate=!0,D.renderBufferDirect(st,X,tt,Z,R,wt),Z.side=ns,Z.needsUpdate=!0,D.renderBufferDirect(st,X,tt,Z,R,wt),Z.side=ha):D.renderBufferDirect(st,X,tt,Z,R,wt),R.onAfterRender(D,X,st,tt,Z,wt)}function ya(R,X,st){X.isScene!==!0&&(X=we);const tt=E.get(R),Z=k.state.lights,wt=k.state.shadowsArray,Ft=Z.state.version,Dt=Ct.getParameters(R,Z.state,wt,X,st),Wt=Ct.getProgramCacheKey(Dt);let jt=tt.programs;tt.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?X.environment:null,tt.fog=X.fog;const ee=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;tt.envMap=ht.get(R.envMap||tt.environment,ee),tt.envMapRotation=tt.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,jt===void 0&&(R.addEventListener("dispose",Ee),jt=new Map,tt.programs=jt);let ae=jt.get(Wt);if(ae!==void 0){if(tt.currentProgram===ae&&tt.lightsStateVersion===Ft)return $o(R,Dt),ae}else Dt.uniforms=Ct.getUniforms(R),R.onBeforeCompile(Dt,D),ae=Ct.acquireProgram(Dt,Wt),jt.set(Wt,ae),tt.uniforms=Dt.uniforms;const Ht=tt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ht.clippingPlanes=St.uniform),$o(R,Dt),tt.needsLights=Gr(R),tt.lightsStateVersion=Ft,tt.needsLights&&(Ht.ambientLightColor.value=Z.state.ambient,Ht.lightProbe.value=Z.state.probe,Ht.directionalLights.value=Z.state.directional,Ht.directionalLightShadows.value=Z.state.directionalShadow,Ht.spotLights.value=Z.state.spot,Ht.spotLightShadows.value=Z.state.spotShadow,Ht.rectAreaLights.value=Z.state.rectArea,Ht.ltc_1.value=Z.state.rectAreaLTC1,Ht.ltc_2.value=Z.state.rectAreaLTC2,Ht.pointLights.value=Z.state.point,Ht.pointLightShadows.value=Z.state.pointShadow,Ht.hemisphereLights.value=Z.state.hemi,Ht.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ht.spotLightMatrix.value=Z.state.spotLightMatrix,Ht.spotLightMap.value=Z.state.spotLightMap,Ht.pointShadowMatrix.value=Z.state.pointShadowMatrix),tt.currentProgram=ae,tt.uniformsList=null,ae}function Jo(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=Fc.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function $o(R,X){const st=E.get(R);st.outputColorSpace=X.outputColorSpace,st.batching=X.batching,st.batchingColor=X.batchingColor,st.instancing=X.instancing,st.instancingColor=X.instancingColor,st.instancingMorph=X.instancingMorph,st.skinning=X.skinning,st.morphTargets=X.morphTargets,st.morphNormals=X.morphNormals,st.morphColors=X.morphColors,st.morphTargetsCount=X.morphTargetsCount,st.numClippingPlanes=X.numClippingPlanes,st.numIntersection=X.numClipIntersection,st.vertexAlphas=X.vertexAlphas,st.vertexTangents=X.vertexTangents,st.toneMapping=X.toneMapping}function tl(R,X,st,tt,Z){X.isScene!==!0&&(X=we),q.resetTextureUnits();const wt=X.fog,Ft=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial?X.environment:null,Dt=it===null?D.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Pr,Wt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial&&!tt.envMap||tt.isMeshPhongMaterial&&!tt.envMap,jt=ht.get(tt.envMap||Ft,Wt),ee=tt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ae=!!st.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Ht=!!st.morphAttributes.position,ue=!!st.morphAttributes.normal,qe=!!st.morphAttributes.color;let Ye=Fi;tt.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Ye=D.toneMapping);const be=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,hn=be!==void 0?be.length:0,Vt=E.get(tt),Ln=k.state.lights;if(Kt===!0&&($t===!0||R!==J)){const sn=R===J&&tt.id===lt;St.setState(tt,R,sn)}let ie=!1;tt.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Ln.state.version||Vt.outputColorSpace!==Dt||Z.isBatchedMesh&&Vt.batching===!1||!Z.isBatchedMesh&&Vt.batching===!0||Z.isBatchedMesh&&Vt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Vt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Vt.instancing===!1||!Z.isInstancedMesh&&Vt.instancing===!0||Z.isSkinnedMesh&&Vt.skinning===!1||!Z.isSkinnedMesh&&Vt.skinning===!0||Z.isInstancedMesh&&Vt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Vt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Vt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Vt.instancingMorph===!1&&Z.morphTexture!==null||Vt.envMap!==jt||tt.fog===!0&&Vt.fog!==wt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==St.numPlanes||Vt.numIntersection!==St.numIntersection)||Vt.vertexAlphas!==ee||Vt.vertexTangents!==ae||Vt.morphTargets!==Ht||Vt.morphNormals!==ue||Vt.morphColors!==qe||Vt.toneMapping!==Ye||Vt.morphTargetsCount!==hn)&&(ie=!0):(ie=!0,Vt.__version=tt.version);let Nn=Vt.currentProgram;ie===!0&&(Nn=ya(tt,X,Z));let Wn=!1,gi=!1,qn=!1;const Ne=Nn.getUniforms(),an=Vt.uniforms;if(qt.useProgram(Nn.program)&&(Wn=!0,gi=!0,qn=!0),tt.id!==lt&&(lt=tt.id,gi=!0),Wn||J!==R){qt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ne.setValue(G,"projectionMatrix",R.projectionMatrix),Ne.setValue(G,"viewMatrix",R.matrixWorldInverse);const _i=Ne.map.cameraPosition;_i!==void 0&&_i.setValue(G,_e.setFromMatrixPosition(R.matrixWorld)),Le.logarithmicDepthBuffer&&Ne.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Ne.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),J!==R&&(J=R,gi=!0,qn=!0)}if(Vt.needsLights&&(Ln.state.directionalShadowMap.length>0&&Ne.setValue(G,"directionalShadowMap",Ln.state.directionalShadowMap,q),Ln.state.spotShadowMap.length>0&&Ne.setValue(G,"spotShadowMap",Ln.state.spotShadowMap,q),Ln.state.pointShadowMap.length>0&&Ne.setValue(G,"pointShadowMap",Ln.state.pointShadowMap,q)),Z.isSkinnedMesh){Ne.setOptional(G,Z,"bindMatrix"),Ne.setOptional(G,Z,"bindMatrixInverse");const sn=Z.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Ne.setValue(G,"boneTexture",sn.boneTexture,q))}Z.isBatchedMesh&&(Ne.setOptional(G,Z,"batchingTexture"),Ne.setValue(G,"batchingTexture",Z._matricesTexture,q),Ne.setOptional(G,Z,"batchingIdTexture"),Ne.setValue(G,"batchingIdTexture",Z._indirectTexture,q),Ne.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ne.setValue(G,"batchingColorTexture",Z._colorsTexture,q));const On=st.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&Pt.update(Z,st,Nn),(gi||Vt.receiveShadow!==Z.receiveShadow)&&(Vt.receiveShadow=Z.receiveShadow,Ne.setValue(G,"receiveShadow",Z.receiveShadow)),(tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial)&&tt.envMap===null&&X.environment!==null&&(an.envMapIntensity.value=X.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=Yb()),gi&&(Ne.setValue(G,"toneMappingExposure",D.toneMappingExposure),Vt.needsLights&&is(an,qn),wt&&tt.fog===!0&&Zt.refreshFogUniforms(an,wt),Zt.refreshMaterialUniforms(an,tt,_t,Y,k.state.transmissionRenderTarget[R.id]),Fc.upload(G,Jo(Vt),an,q)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Fc.upload(G,Jo(Vt),an,q),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Ne.setValue(G,"center",Z.center),Ne.setValue(G,"modelViewMatrix",Z.modelViewMatrix),Ne.setValue(G,"normalMatrix",Z.normalMatrix),Ne.setValue(G,"modelMatrix",Z.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const sn=tt.uniformsGroups;for(let _i=0,Xi=sn.length;_i<Xi;_i++){const zs=sn[_i];It.update(zs,Nn),It.bind(zs,Nn)}}return Nn}function is(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function Gr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(R,X,st){const tt=E.get(R);tt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=X,E.get(R.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:st,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const st=E.get(R);st.__webglFramebuffer=X,st.__useDefaultFramebuffer=X===void 0};const Ea=G.createFramebuffer();this.setRenderTarget=function(R,X=0,st=0){it=R,H=X,$=st;let tt=null,Z=!1,wt=!1;if(R){const Dt=E.get(R);if(Dt.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(G.FRAMEBUFFER,Dt.__webglFramebuffer),L.copy(R.viewport),I.copy(R.scissor),ot=R.scissorTest,qt.viewport(L),qt.scissor(I),qt.setScissorTest(ot),lt=-1;return}else if(Dt.__webglFramebuffer===void 0)q.setupRenderTarget(R);else if(Dt.__hasExternalTextures)q.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ee=R.depthTexture;if(Dt.__boundDepthTexture!==ee){if(ee!==null&&E.has(ee)&&(R.width!==ee.image.width||R.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(R)}}const Wt=R.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(wt=!0);const jt=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(jt[X])?tt=jt[X][st]:tt=jt[X],Z=!0):R.samples>0&&q.useMultisampledRTT(R)===!1?tt=E.get(R).__webglMultisampledFramebuffer:Array.isArray(jt)?tt=jt[st]:tt=jt,L.copy(R.viewport),I.copy(R.scissor),ot=R.scissorTest}else L.copy(et).multiplyScalar(_t).floor(),I.copy(vt).multiplyScalar(_t).floor(),ot=Tt;if(st!==0&&(tt=Ea),qt.bindFramebuffer(G.FRAMEBUFFER,tt)&&qt.drawBuffers(R,tt),qt.viewport(L),qt.scissor(I),qt.setScissorTest(ot),Z){const Dt=E.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+X,Dt.__webglTexture,st)}else if(wt){const Dt=X;for(let Wt=0;Wt<R.textures.length;Wt++){const jt=E.get(R.textures[Wt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Wt,jt.__webglTexture,st,Dt)}}else if(R!==null&&st!==0){const Dt=E.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Dt.__webglTexture,st)}lt=-1},this.readRenderTargetPixels=function(R,X,st,tt,Z,wt,Ft,Dt=0){if(!(R&&R.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Wt=Wt[Ft]),Wt){qt.bindFramebuffer(G.FRAMEBUFFER,Wt);try{const jt=R.textures[Dt],ee=jt.format,ae=jt.type;if(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Dt),!Le.textureFormatReadable(ee)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(ae)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-tt&&st>=0&&st<=R.height-Z&&G.readPixels(X,st,tt,Z,Rt.convert(ee),Rt.convert(ae),wt)}finally{const jt=it!==null?E.get(it).__webglFramebuffer:null;qt.bindFramebuffer(G.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(R,X,st,tt,Z,wt,Ft,Dt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Wt=Wt[Ft]),Wt)if(X>=0&&X<=R.width-tt&&st>=0&&st<=R.height-Z){qt.bindFramebuffer(G.FRAMEBUFFER,Wt);const jt=R.textures[Dt],ee=jt.format,ae=jt.type;if(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Dt),!Le.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ht=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ht),G.bufferData(G.PIXEL_PACK_BUFFER,wt.byteLength,G.STREAM_READ),G.readPixels(X,st,tt,Z,Rt.convert(ee),Rt.convert(ae),0);const ue=it!==null?E.get(it).__webglFramebuffer:null;qt.bindFramebuffer(G.FRAMEBUFFER,ue);const qe=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await dM(G,qe,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ht),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,wt),G.deleteBuffer(Ht),G.deleteSync(qe),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,st=0){const tt=Math.pow(2,-st),Z=Math.floor(R.image.width*tt),wt=Math.floor(R.image.height*tt),Ft=X!==null?X.x:0,Dt=X!==null?X.y:0;q.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,st,0,0,Ft,Dt,Z,wt),qt.unbindTexture()};const Ta=G.createFramebuffer(),as=G.createFramebuffer();this.copyTextureToTexture=function(R,X,st=null,tt=null,Z=0,wt=0){let Ft,Dt,Wt,jt,ee,ae,Ht,ue,qe;const Ye=R.isCompressedTexture?R.mipmaps[wt]:R.image;if(st!==null)Ft=st.max.x-st.min.x,Dt=st.max.y-st.min.y,Wt=st.isBox3?st.max.z-st.min.z:1,jt=st.min.x,ee=st.min.y,ae=st.isBox3?st.min.z:0;else{const an=Math.pow(2,-Z);Ft=Math.floor(Ye.width*an),Dt=Math.floor(Ye.height*an),R.isDataArrayTexture?Wt=Ye.depth:R.isData3DTexture?Wt=Math.floor(Ye.depth*an):Wt=1,jt=0,ee=0,ae=0}tt!==null?(Ht=tt.x,ue=tt.y,qe=tt.z):(Ht=0,ue=0,qe=0);const be=Rt.convert(X.format),hn=Rt.convert(X.type);let Vt;X.isData3DTexture?(q.setTexture3D(X,0),Vt=G.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(q.setTexture2DArray(X,0),Vt=G.TEXTURE_2D_ARRAY):(q.setTexture2D(X,0),Vt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment);const Ln=G.getParameter(G.UNPACK_ROW_LENGTH),ie=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Nn=G.getParameter(G.UNPACK_SKIP_PIXELS),Wn=G.getParameter(G.UNPACK_SKIP_ROWS),gi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ye.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ye.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,jt),G.pixelStorei(G.UNPACK_SKIP_ROWS,ee),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ae);const qn=R.isDataArrayTexture||R.isData3DTexture,Ne=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const an=E.get(R),On=E.get(X),sn=E.get(an.__renderTarget),_i=E.get(On.__renderTarget);qt.bindFramebuffer(G.READ_FRAMEBUFFER,sn.__webglFramebuffer),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let Xi=0;Xi<Wt;Xi++)qn&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(R).__webglTexture,Z,ae+Xi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(X).__webglTexture,wt,qe+Xi)),G.blitFramebuffer(jt,ee,Ft,Dt,Ht,ue,Ft,Dt,G.DEPTH_BUFFER_BIT,G.NEAREST);qt.bindFramebuffer(G.READ_FRAMEBUFFER,null),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||E.has(R)){const an=E.get(R),On=E.get(X);qt.bindFramebuffer(G.READ_FRAMEBUFFER,Ta),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,as);for(let sn=0;sn<Wt;sn++)qn?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,an.__webglTexture,Z,ae+sn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,an.__webglTexture,Z),Ne?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,On.__webglTexture,wt,qe+sn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,On.__webglTexture,wt),Z!==0?G.blitFramebuffer(jt,ee,Ft,Dt,Ht,ue,Ft,Dt,G.COLOR_BUFFER_BIT,G.NEAREST):Ne?G.copyTexSubImage3D(Vt,wt,Ht,ue,qe+sn,jt,ee,Ft,Dt):G.copyTexSubImage2D(Vt,wt,Ht,ue,jt,ee,Ft,Dt);qt.bindFramebuffer(G.READ_FRAMEBUFFER,null),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ne?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(Vt,wt,Ht,ue,qe,Ft,Dt,Wt,be,hn,Ye.data):X.isCompressedArrayTexture?G.compressedTexSubImage3D(Vt,wt,Ht,ue,qe,Ft,Dt,Wt,be,Ye.data):G.texSubImage3D(Vt,wt,Ht,ue,qe,Ft,Dt,Wt,be,hn,Ye):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,wt,Ht,ue,Ft,Dt,be,hn,Ye.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,wt,Ht,ue,Ye.width,Ye.height,be,Ye.data):G.texSubImage2D(G.TEXTURE_2D,wt,Ht,ue,Ft,Dt,be,hn,Ye);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ln),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ie),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Nn),G.pixelStorei(G.UNPACK_SKIP_ROWS,Wn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,gi),wt===0&&X.generateMipmaps&&G.generateMipmap(Vt),qt.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?q.setTextureCube(R,0):R.isData3DTexture?q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?q.setTexture2DArray(R,0):q.setTexture2D(R,0),qt.unbindTexture()},this.resetState=function(){H=0,$=0,it=null,qt.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(e),i.unpackColorSpace=Te._getUnpackColorSpace()}}function Zb(){const o=Cn.useRef(null);return Cn.useEffect(()=>{const e=o.current;if(!e)return;let i=!0,s,l,u;const d=new CM,p=new kh(-1,1,1,-1,0,1),m=new jb({canvas:e,alpha:!0,antialias:!1});m.setSize(window.innerWidth,window.innerHeight),m.setPixelRatio(Math.min(window.devicePixelRatio,2));const h=new Ue(0,0),v=y=>{h.x=y.clientX,h.y=window.innerHeight-y.clientY},x=()=>{m.setSize(window.innerWidth,window.innerHeight),m.setPixelRatio(Math.min(window.devicePixelRatio,2)),l&&l.uniforms.u_resolution.value.set(window.innerWidth,window.innerHeight)};return(async()=>{try{const y="/ICSI518/",T=await(await fetch(`${y}shaders/fragment.glsl`)).text(),C=await new KM().loadAsync(`${y}shaders/bayer.jpg`);if(!i)return;C.wrapS=Go,C.wrapT=Go,C.magFilter=mn,C.minFilter=mn,C.generateMipmaps=!1,l=new Ri({uniforms:{u_time:{value:0},u_resolution:{value:new Ue(window.innerWidth,window.innerHeight)},u_mouse:{value:new Ue(0,0)},u_bayerTex:{value:C}},vertexShader:`
                      varying vec2 v_texcoord;
                      void main() {
                          v_texcoord = uv;
                          gl_Position = vec4(position, 1.0);
                      }
                    `,fragmentShader:T}),u=new Zo(2,2),d.add(new Vi(u,l)),window.addEventListener("mousemove",v),window.addEventListener("resize",x);const M=new $M,S=()=>{M.update(),l.uniforms.u_time.value=M.getElapsed(),l.uniforms.u_mouse.value.lerp(h,.05),m.render(d,p),s=requestAnimationFrame(S)};S()}catch(y){console.error("Shader load error:",y)}})(),()=>{i=!1,cancelAnimationFrame(s),window.removeEventListener("mousemove",v),window.removeEventListener("resize",x),u&&u.dispose(),l&&l.dispose(),m.dispose()}},[]),Ut.jsx("canvas",{ref:o,id:"webgl-canvas"})}const Kb="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20height='800px'%20width='800px'%20version='1.1'%20id='_x32_'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20512%20512'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23000000;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M502.325,307.303l-39.006-30.805c-6.215-4.908-9.665-12.429-9.668-20.348c0-0.084,0-0.168,0-0.252%20c-0.014-7.936,3.44-15.478,9.667-20.396l39.007-30.806c8.933-7.055,12.093-19.185,7.737-29.701l-17.134-41.366%20c-4.356-10.516-15.167-16.86-26.472-15.532l-49.366,5.8c-7.881,0.926-15.656-1.966-21.258-7.586%20c-0.059-0.06-0.118-0.119-0.177-0.178c-5.597-5.602-8.476-13.36-7.552-21.225l5.799-49.363%20c1.328-11.305-5.015-22.116-15.531-26.472L337.004,1.939c-10.516-4.356-22.646-1.196-29.701,7.736l-30.805,39.005%20c-4.908,6.215-12.43,9.665-20.349,9.668c-0.084,0-0.168,0-0.252,0c-7.935,0.014-15.477-3.44-20.395-9.667L204.697,9.675%20c-7.055-8.933-19.185-12.092-29.702-7.736L133.63,19.072c-10.516,4.356-16.86,15.167-15.532,26.473l5.799,49.366%20c0.926,7.881-1.964,15.656-7.585,21.257c-0.059,0.059-0.118,0.118-0.178,0.178c-5.602,5.598-13.36,8.477-21.226,7.552%20l-49.363-5.799c-11.305-1.328-22.116,5.015-26.472,15.531L1.939,174.996c-4.356,10.516-1.196,22.646,7.736,29.701l39.006,30.805%20c6.215,4.908,9.665,12.429,9.668,20.348c0,0.084,0,0.167,0,0.251c0.014,7.935-3.44,15.477-9.667,20.395L9.675,307.303%20c-8.933,7.055-12.092,19.185-7.736,29.701l17.134,41.365c4.356,10.516,15.168,16.86,26.472,15.532l49.366-5.799%20c7.882-0.926,15.656,1.965,21.258,7.586c0.059,0.059,0.118,0.119,0.178,0.178c5.597,5.603,8.476,13.36,7.552,21.226l-5.799,49.364%20c-1.328,11.305,5.015,22.116,15.532,26.472l41.366,17.134c10.516,4.356,22.646,1.196,29.701-7.736l30.804-39.005%20c4.908-6.215,12.43-9.665,20.348-9.669c0.084,0,0.168,0,0.251,0c7.936-0.014,15.478,3.44,20.396,9.667l30.806,39.007%20c7.055,8.933,19.185,12.093,29.701,7.736l41.366-17.134c10.516-4.356,16.86-15.168,15.532-26.472l-5.8-49.366%20c-0.926-7.881,1.965-15.656,7.586-21.257c0.059-0.059,0.119-0.119,0.178-0.178c5.602-5.597,13.36-8.476,21.225-7.552l49.364,5.799%20c11.305,1.328,22.117-5.015,26.472-15.531l17.134-41.365C514.418,326.488,511.258,314.358,502.325,307.303z%20M281.292,329.698%20c-39.68,16.436-85.172-2.407-101.607-42.087c-16.436-39.68,2.407-85.171,42.087-101.608c39.68-16.436,85.172,2.407,101.608,42.088%20C339.815,267.771,320.972,313.262,281.292,329.698z'/%3e%3c/g%3e%3c/svg%3e";function Qb({toggleTheme:o,showShader:e,setShowShader:i,showContent:s,setShowContent:l}){const[u,d]=Cn.useState(!1),p=Cn.useRef(null);Cn.useEffect(()=>{const h=v=>p.current?.contains(v.target)||d(!1);return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[]);const m=[["Show Content",s,l],["Show Shader",e,i]];return Ut.jsxs("nav",{className:"nav",children:[Ut.jsx("p",{children:"Portfolio"}),Ut.jsxs("div",{className:"settings-container",ref:p,children:[Ut.jsx("button",{className:"settings-btn","aria-label":"Settings",onClick:()=>d(h=>!h),children:Ut.jsx("img",{src:Kb,alt:"settings"})}),u&&Ut.jsxs("div",{className:"settings-dropdown",children:[Ut.jsx("button",{className:"dropdown-item",onClick:o,children:"Toggle Theme"}),m.map(([h,v,x])=>Ut.jsxs("label",{className:"dropdown-checkbox",children:[Ut.jsx("span",{children:h}),Ut.jsx("input",{type:"checkbox",checked:v,onChange:_=>x(_.target.checked)})]},h))]})]})]})}function Vc({as:o="div",className:e="",children:i,...s}){return Ut.jsx(o,{className:`glass card ${e}`,...s,children:i})}function kc({title:o,id:e,className:i="",children:s}){return Ut.jsxs("section",{id:e,className:`section ${i}`,children:[o&&Ut.jsx("h2",{className:"sec-title",children:o}),s]})}function wh({items:o,small:e=!1}){return Ut.jsx("div",{className:"tags",children:o.map((i,s)=>Ut.jsx("span",{className:`tag${e?" sm":""}`,children:i},s))})}const Jb=[{label:"Education",text:"B.S. in Computer Science from SUNY Albany"},{label:"Background",text:"Experience in graphics programming, shader development, and systems. I build interactive systems that combine mathematics and visual design."},{label:"Career Goals",text:"Creating high-performance interactive systems that combine graphics, simulation, and modern web technologies."}],$b=["Java","C#","C","glsl","Python","GDscript","JavaScript","HTML","CSS"],tA=["Git","Linux","React.js","Node.js","Unity","Godot","Three.js"],eA=[{label:"Email",href:"mailto:ncyran@albany.edu"},{label:"GitHub",href:"https://github.com/nickcyran"},{label:"LinkedIn",href:"https://www.linkedin.com/in/nicolas-cyran/"}];function nA(){return Ut.jsxs(Ut.Fragment,{children:[Ut.jsxs("section",{className:"glass hero",children:[Ut.jsx("h1",{children:"Nicolas Cyran"}),Ut.jsx("p",{className:"sub",children:"Software Developer"}),Ut.jsx("p",{className:"desc",children:"I'm a software developer who's passionate about bringing my ideas to life through code. I enjoy a challenge; solving intricate puzzles is what I do best!"})]}),Ut.jsx(kc,{title:"About",children:Ut.jsx(Vc,{children:Ut.jsx("div",{className:"grid-3",children:Jb.map((o,e)=>Ut.jsxs("div",{className:"item",children:[Ut.jsx("span",{className:"label",children:o.label}),Ut.jsx("p",{children:o.text})]},e))})})}),Ut.jsx(kc,{title:"Skills & Tools",children:Ut.jsxs(Vc,{children:[Ut.jsx("h3",{className:"sub-label",children:"Languages"}),Ut.jsx(wh,{items:$b}),Ut.jsx("h3",{className:"sub-label",children:"Technologies"}),Ut.jsx(wh,{items:tA})]})})]})}const iA="https://icsi518.onrender.com";function aA(){const[o,e]=Cn.useState([]),[i,s]=Cn.useState(!0),[l,u]=Cn.useState(null);return Cn.useEffect(()=>{fetch(`${iA}/api/projects`).then(d=>{if(!d.ok)throw new Error(`Server error: ${d.status}`);return d.json()}).then(d=>e(d)).catch(d=>u(d.message)).finally(()=>s(!1))},[]),Ut.jsxs(kc,{title:"Projects",children:[i&&Ut.jsx("p",{className:"status",children:"Loading projects..."}),l&&Ut.jsxs("p",{className:"status err",children:["Failed to load: ",l]}),Ut.jsx("div",{className:"grid-2",children:o.map(d=>Ut.jsxs(Vc,{as:"a",href:d.link,target:"_blank",rel:"noopener noreferrer",children:[Ut.jsx("h3",{children:d.title}),Ut.jsx("p",{className:"desc",title:d.description,children:d.description}),Ut.jsx(wh,{items:d.tags,small:!0})]},d._id))})]})}class Ko{constructor(e=0,i="Network Error"){this.status=e,this.text=i}}const sA=()=>{if(!(typeof localStorage>"u"))return{get:o=>Promise.resolve(localStorage.getItem(o)),set:(o,e)=>Promise.resolve(localStorage.setItem(o,e)),remove:o=>Promise.resolve(localStorage.removeItem(o))}},Tn={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:sA()},Xh=o=>o?typeof o=="string"?{publicKey:o}:o.toString()==="[object Object]"?o:{}:{},rA=(o,e="https://api.emailjs.com")=>{if(!o)return;const i=Xh(o);Tn.publicKey=i.publicKey,Tn.blockHeadless=i.blockHeadless,Tn.storageProvider=i.storageProvider,Tn.blockList=i.blockList,Tn.limitRate=i.limitRate,Tn.origin=i.origin||e},cv=async(o,e,i={})=>{const s=await fetch(Tn.origin+o,{method:"POST",headers:i,body:e}),l=await s.text(),u=new Ko(s.status,l);if(s.ok)return u;throw u},uv=(o,e,i)=>{if(!o||typeof o!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i||typeof i!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},oA=o=>{if(o&&o.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},fv=o=>o.webdriver||!o.languages||o.languages.length===0,dv=()=>new Ko(451,"Unavailable For Headless Browser"),lA=(o,e)=>{if(!Array.isArray(o))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},cA=o=>!o.list?.length||!o.watchVariable,uA=(o,e)=>o instanceof FormData?o.get(e):o[e],hv=(o,e)=>{if(cA(o))return!1;lA(o.list,o.watchVariable);const i=uA(e,o.watchVariable);return typeof i!="string"?!1:o.list.includes(i)},pv=()=>new Ko(403,"Forbidden"),fA=(o,e)=>{if(typeof o!="number"||o<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},dA=async(o,e,i)=>{const s=Number(await i.get(o)||0);return e-Date.now()+s},mv=async(o,e,i)=>{if(!e.throttle||!i)return!1;fA(e.throttle,e.id);const s=e.id||o;return await dA(s,e.throttle,i)>0?!0:(await i.set(s,Date.now().toString()),!1)},gv=()=>new Ko(429,"Too Many Requests"),hA=async(o,e,i,s)=>{const l=Xh(s),u=l.publicKey||Tn.publicKey,d=l.blockHeadless||Tn.blockHeadless,p=l.storageProvider||Tn.storageProvider,m={...Tn.blockList,...l.blockList},h={...Tn.limitRate,...l.limitRate};return d&&fv(navigator)?Promise.reject(dv()):(uv(u,o,e),oA(i),i&&hv(m,i)?Promise.reject(pv()):await mv(location.pathname,h,p)?Promise.reject(gv()):cv("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:u,service_id:o,template_id:e,template_params:i}),{"Content-type":"application/json"}))},pA=o=>{if(!o||o.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},mA=o=>typeof o=="string"?document.querySelector(o):o,gA=async(o,e,i,s)=>{const l=Xh(s),u=l.publicKey||Tn.publicKey,d=l.blockHeadless||Tn.blockHeadless,p=Tn.storageProvider||l.storageProvider,m={...Tn.blockList,...l.blockList},h={...Tn.limitRate,...l.limitRate};if(d&&fv(navigator))return Promise.reject(dv());const v=mA(i);uv(u,o,e),pA(v);const x=new FormData(v);return hv(m,x)?Promise.reject(pv()):await mv(location.pathname,h,p)?Promise.reject(gv()):(x.append("lib_version","4.4.1"),x.append("service_id",o),x.append("template_id",e),x.append("user_id",u),cv("/api/v1.0/email/send-form",x))},_A={init:rA,send:hA,sendForm:gA,EmailJSResponseStatus:Ko},vA="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2020%2020'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3egithub%20[%23142]%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Page-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Dribbble-Light-Preview'%20transform='translate(-140.000000,%20-7559.000000)'%20fill='%23000000'%3e%3cg%20id='icons'%20transform='translate(56.000000,%20160.000000)'%3e%3cpath%20d='M94,7399%20C99.523,7399%20104,7403.59%20104,7409.253%20C104,7413.782%20101.138,7417.624%2097.167,7418.981%20C96.66,7419.082%2096.48,7418.762%2096.48,7418.489%20C96.48,7418.151%2096.492,7417.047%2096.492,7415.675%20C96.492,7414.719%2096.172,7414.095%2095.813,7413.777%20C98.04,7413.523%20100.38,7412.656%20100.38,7408.718%20C100.38,7407.598%2099.992,7406.684%2099.35,7405.966%20C99.454,7405.707%2099.797,7404.664%2099.252,7403.252%20C99.252,7403.252%2098.414,7402.977%2096.505,7404.303%20C95.706,7404.076%2094.85,7403.962%2094,7403.958%20C93.15,7403.962%2092.295,7404.076%2091.497,7404.303%20C89.586,7402.977%2088.746,7403.252%2088.746,7403.252%20C88.203,7404.664%2088.546,7405.707%2088.649,7405.966%20C88.01,7406.684%2087.619,7407.598%2087.619,7408.718%20C87.619,7412.646%2089.954,7413.526%2092.175,7413.785%20C91.889,7414.041%2091.63,7414.493%2091.54,7415.156%20C90.97,7415.418%2089.522,7415.871%2088.63,7414.304%20C88.63,7414.304%2088.101,7413.319%2087.097,7413.247%20C87.097,7413.247%2086.122,7413.234%2087.029,7413.87%20C87.029,7413.87%2087.684,7414.185%2088.139,7415.37%20C88.139,7415.37%2088.726,7417.2%2091.508,7416.58%20C91.513,7417.437%2091.522,7418.245%2091.522,7418.489%20C91.522,7418.76%2091.338,7419.077%2090.839,7418.982%20C86.865,7417.627%2084,7413.783%2084,7409.253%20C84,7403.59%2088.478,7399%2094,7399'%20id='github-[%23142]'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",xA="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23000000'%20height='800px'%20width='800px'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='-143%20145%20512%20512'%20xml:space='preserve'%3e%3cpath%20d='M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z%20M41.4,508.1H-8.5V348.4h49.9V508.1z%20M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7%20c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z%20M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4%20c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6%20c35.5,0,63.3,23,63.3,72.4V508.1z'/%3e%3c/svg%3e",SA="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGZpbGw9IiMwMDAwMDAiIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDMyIDMyIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7IiB2ZXJzaW9uPSIxLjEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0zMSwxMGMwLC0xLjMyNiAtMC41MjcsLTIuNTk4IC0xLjQ2NCwtMy41MzZjLTAuOTM4LC0wLjkzNyAtMi4yMSwtMS40NjQgLTMuNTM2LC0xLjQ2NGMtNS4zMjIsMCAtMTQuNjc4LDAgLTIwLDBjLTEuMzI2LC0wIC0yLjU5OCwwLjUyNyAtMy41MzYsMS40NjRjLTAuOTM3LDAuOTM4IC0xLjQ2NCwyLjIxIC0xLjQ2NCwzLjUzNmMwLDMuNDg2IDAsOC41MTQgMCwxMmMtMCwxLjMyNiAwLjUyNywyLjU5OCAxLjQ2NCwzLjUzNmMwLjkzOCwwLjkzNyAyLjIxLDEuNDY0IDMuNTM2LDEuNDY0YzUuMzIyLC0wIDE0LjY3OCwtMCAyMCwtMGMxLjMyNiwwIDIuNTk4LC0wLjUyNyAzLjUzNiwtMS40NjRjMC45MzcsLTAuOTM4IDEuNDY0LC0yLjIxIDEuNDY0LC0zLjUzNmMwLC0zLjQ4NiAwLC04LjUxNCAwLC0xMlptLTI2LjU1NiwtMC4yMjFjLTAsLTAgNS4xNDUsNC4yMzcgOC4zNzIsNi44OTRjMS44NDksMS41MjMgNC41MTksMS41MiA2LjM2NSwtMC4wMDdjMy4yMzcsLTIuNjc3IDguNDEzLC02Ljk1OSA4LjQxMywtNi45NTljMC40MjUsLTAuMzUyIDAuNDg1LC0wLjk4MyAwLjEzMywtMS40MDhjLTAuMzUxLC0wLjQyNSAtMC45ODIsLTAuNDg1IC0xLjQwOCwtMC4xMzNjMCwtMCAtNS4xNzYsNC4yODEgLTguNDEyLDYuOTU5Yy0xLjEwOCwwLjkxNiAtMi43MSwwLjkxOCAtMy44MiwwLjAwNGMwLDAgLTguMzcyLC02Ljg5NCAtOC4zNzIsLTYuODk0Yy0wLjQyNiwtMC4zNTEgLTEuMDU2LC0wLjI5IC0xLjQwNywwLjEzNmMtMC4zNTEsMC40MjYgLTAuMjksMS4wNTcgMC4xMzYsMS40MDhaIi8+PGcgaWQ9Ikljb24iLz48L3N2Zz4=",MA={VITE_EMAILJS_PUBLIC_KEY:"L4h41hOX78FQxYtwz",VITE_EMAILJS_SERVICE_ID:"service_2z38uus",VITE_EMAILJS_TEMPLATE_ID:"template_eqkgygq"},{VITE_EMAILJS_SERVICE_ID:yA,VITE_EMAILJS_TEMPLATE_ID:EA,VITE_EMAILJS_PUBLIC_KEY:TA}=MA,bA={Email:SA,GitHub:vA,LinkedIn:xA};function AA(){const o=Cn.useRef(),[e,i]=Cn.useState("idle"),s=l=>{l.preventDefault(),i("sending"),_A.sendForm(yA,EA,o.current,TA).then(()=>{i("success"),o.current.reset()}).catch(()=>i("error"))};return Ut.jsx(kc,{title:"Contact",children:Ut.jsxs(Vc,{className:"centered",children:[Ut.jsx("p",{children:"Did you like what you saw? Let's connect!"}),Ut.jsxs("form",{ref:o,onSubmit:s,className:"form",children:[Ut.jsxs("div",{className:"row",children:[Ut.jsxs("div",{className:"field",children:[Ut.jsx("label",{htmlFor:"from_name",children:"Name"}),Ut.jsx("input",{id:"from_name",name:"from_name",type:"text",required:!0,placeholder:"Your name"})]}),Ut.jsxs("div",{className:"field",children:[Ut.jsx("label",{htmlFor:"reply_to",children:"Email"}),Ut.jsx("input",{id:"reply_to",name:"reply_to",type:"email",required:!0,placeholder:"your@email.com"})]})]}),Ut.jsxs("div",{className:"field",children:[Ut.jsx("label",{htmlFor:"subject",children:"Subject"}),Ut.jsx("input",{id:"subject",name:"subject",type:"text",required:!0,placeholder:"Add a subject"})]}),Ut.jsxs("div",{className:"field",children:[Ut.jsx("label",{htmlFor:"message",children:"Message"}),Ut.jsx("textarea",{id:"message",name:"message",rows:5,required:!0,placeholder:"Write your message"})]}),Ut.jsxs("div",{className:"actions",children:[Ut.jsx("div",{className:"links",children:eA.map(({href:l,label:u})=>{const d=!l.startsWith("mailto");return Ut.jsx("a",{href:l,className:"icon-link",target:d?"_blank":void 0,rel:d?"noopener noreferrer":void 0,"aria-label":u,title:u,children:Ut.jsx("img",{src:bA[u],alt:u})},u)})}),Ut.jsx("button",{type:"submit",className:"btn",disabled:e==="sending",children:e==="sending"?"Sending…":"Send Message"})]}),e==="success"&&Ut.jsx("p",{className:"feedback ok",children:"Message sent! I'll get back to you soon."}),e==="error"&&Ut.jsx("p",{className:"feedback err",children:"Something went wrong. Please try again."})]})]})})}function RA(){const[o,e]=Cn.useState("light"),[i,s]=Cn.useState(!0),[l,u]=Cn.useState(!0);Cn.useEffect(()=>{document.documentElement.setAttribute("data-theme",o)},[o]);const d=()=>{e(p=>p==="dark"?"light":"dark")};return Ut.jsxs(Ut.Fragment,{children:[i&&Ut.jsx(Zb,{}),Ut.jsx(Qb,{theme:o,toggleTheme:d,showShader:i,setShowShader:s,showContent:l,setShowContent:u}),l&&Ut.jsxs("main",{className:"wrap",children:[Ut.jsx(nA,{}),Ut.jsx(aA,{}),Ut.jsx(AA,{})]})]})}DS.createRoot(document.getElementById("root")).render(Ut.jsx(Cn.StrictMode,{children:Ut.jsx(RA,{})}));

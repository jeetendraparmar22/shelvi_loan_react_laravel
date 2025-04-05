import{r as s,j as M}from"./app-B0lPGDau.js";import{u as b}from"./app-logo-icon-BYS69_5q.js";function U(e,t){const n=s.createContext(t),r=i=>{const{children:u,...a}=i,f=s.useMemo(()=>a,Object.values(a));return M.jsx(n.Provider,{value:f,children:u})};r.displayName=e+"Provider";function o(i){const u=s.useContext(n);if(u)return u;if(t!==void 0)return t;throw new Error(`\`${i}\` must be used within \`${e}\``)}return[r,o]}function z(e,t=[]){let n=[];function r(i,u){const a=s.createContext(u),f=n.length;n=[...n,u];const c=d=>{var A;const{scope:m,children:l,...N}=d,p=((A=m==null?void 0:m[e])==null?void 0:A[f])||a,v=s.useMemo(()=>N,Object.values(N));return M.jsx(p.Provider,{value:v,children:l})};c.displayName=i+"Provider";function h(d,m){var p;const l=((p=m==null?void 0:m[e])==null?void 0:p[f])||a,N=s.useContext(l);if(N)return N;if(u!==void 0)return u;throw new Error(`\`${d}\` must be used within \`${i}\``)}return[c,h]}const o=()=>{const i=n.map(u=>s.createContext(u));return function(a){const f=(a==null?void 0:a[e])||i;return s.useMemo(()=>({[`__scope${e}`]:{...a,[e]:f}}),[a,f])}};return o.scopeName=e,[r,g(o,...t)]}function g(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const u=r.reduce((a,{useScope:f,scopeName:c})=>{const d=f(i)[`__scope${c}`];return{...a,...d}},{});return s.useMemo(()=>({[`__scope${t.scopeName}`]:u}),[u])}};return n.scopeName=t.scopeName,n}function I(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function P(e){const t=s.useRef(e);return s.useEffect(()=>{t.current=e}),s.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function _({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=C({defaultProp:t,onChange:n}),i=e!==void 0,u=i?e:r,a=P(n),f=s.useCallback(c=>{if(i){const d=typeof c=="function"?c(e):c;d!==e&&a(d)}else o(c)},[i,e,o,a]);return[u,f]}function C({defaultProp:e,onChange:t}){const n=s.useState(e),[r]=n,o=s.useRef(r),i=P(t);return s.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}var x=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{};function j(e){const[t,n]=s.useState(void 0);return x(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let u,a;if("borderBoxSize"in i){const f=i.borderBoxSize,c=Array.isArray(f)?f[0]:f;u=c.inlineSize,a=c.blockSize}else u=e.offsetWidth,a=e.offsetHeight;n({width:u,height:a})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}function O(e,t){return s.useReducer((n,r)=>t[n][r]??n,e)}var w=e=>{const{present:t,children:n}=e,r=y(t),o=typeof n=="function"?n({present:r.isPresent}):s.Children.only(n),i=b(r.ref,R(o));return typeof n=="function"||r.isPresent?s.cloneElement(o,{ref:i}):null};w.displayName="Presence";function y(e){const[t,n]=s.useState(),r=s.useRef({}),o=s.useRef(e),i=s.useRef("none"),u=e?"mounted":"unmounted",[a,f]=O(u,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return s.useEffect(()=>{const c=S(r.current);i.current=a==="mounted"?c:"none"},[a]),x(()=>{const c=r.current,h=o.current;if(h!==e){const m=i.current,l=S(c);e?f("MOUNT"):l==="none"||(c==null?void 0:c.display)==="none"?f("UNMOUNT"):f(h&&m!==l?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,f]),x(()=>{if(t){let c;const h=t.ownerDocument.defaultView??window,d=l=>{const p=S(r.current).includes(l.animationName);if(l.target===t&&p&&(f("ANIMATION_END"),!o.current)){const v=t.style.animationFillMode;t.style.animationFillMode="forwards",c=h.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=v)})}},m=l=>{l.target===t&&(i.current=S(r.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{h.clearTimeout(c),t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else f("ANIMATION_END")},[t,f]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:s.useCallback(c=>{c&&(r.current=getComputedStyle(c)),n(c)},[])}}function S(e){return(e==null?void 0:e.animationName)||"none"}function R(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}export{w as P,I as a,j as b,z as c,x as d,P as e,U as f,_ as u};

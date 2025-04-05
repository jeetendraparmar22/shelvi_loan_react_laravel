import{r as i,U as E,t as oe}from"./app-BgmyJYDu.js";var je=Object.defineProperty,Re=(e,t,n)=>t in e?je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Z=(e,t,n)=>(Re(e,typeof t!="symbol"?t+"":t,n),n);let Ae=class{constructor(){Z(this,"current",this.detect()),Z(this,"handoffState","pending"),Z(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},I=new Ae;function ke(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function q(){let e=[],t={addEventListener(n,r,l,a){return n.addEventListener(r,l,a),t.add(()=>n.removeEventListener(r,l,a))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return ke(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,l){let a=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:l}),this.add(()=>{Object.assign(n.style,{[r]:a})})},group(n){let r=q();return n(r),this.add(()=>r.dispose())},add(n){return e.includes(n)||e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let l of e.splice(r,1))l()}},dispose(){for(let n of e.splice(0))n()}};return t}function ce(){let[e]=i.useState(q);return i.useEffect(()=>()=>e.dispose(),[e]),e}let O=(e,t)=>{I.isServer?i.useEffect(e,t):i.useLayoutEffect(e,t)};function de(e){let t=i.useRef(e);return O(()=>{t.current=e},[e]),t}let w=function(e){let t=de(e);return E.useCallback((...n)=>t.current(...n),[t])};function Q(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}function D(e,t,...n){if(e in t){let l=t[e];return typeof l=="function"?l(...n):l}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,D),r}var pe=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(pe||{}),T=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(T||{});function me(){let e=Pe();return i.useCallback(t=>Ne({mergeRefs:e,...t}),[e])}function Ne({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:l,visible:a=!0,name:u,mergeRefs:o}){o=o??xe;let s=he(t,e);if(a)return M(s,n,r,u,o);let p=l??0;if(p&2){let{static:c=!1,...h}=s;if(c)return M(h,n,r,u,o)}if(p&1){let{unmount:c=!0,...h}=s;return D(c?0:1,{0(){return null},1(){return M({...h,hidden:!0,style:{display:"none"}},n,r,u,o)}})}return M(s,n,r,u,o)}function M(e,t={},n,r,l){let{as:a=n,children:u,refName:o="ref",...s}=G(e,["unmount","static"]),p=e.ref!==void 0?{[o]:e.ref}:{},c=typeof u=="function"?u(t):u;"className"in s&&s.className&&typeof s.className=="function"&&(s.className=s.className(t)),s["aria-labelledby"]&&s["aria-labelledby"]===s.id&&(s["aria-labelledby"]=void 0);let h={};if(t){let g=!1,d=[];for(let[f,v]of Object.entries(t))typeof v=="boolean"&&(g=!0),v===!0&&d.push(f.replace(/([A-Z])/g,m=>`-${m.toLowerCase()}`));if(g){h["data-headlessui-state"]=d.join(" ");for(let f of d)h[`data-${f}`]=""}}if(a===i.Fragment&&(Object.keys(R(s)).length>0||Object.keys(R(h)).length>0))if(!i.isValidElement(c)||Array.isArray(c)&&c.length>1){if(Object.keys(R(s)).length>0)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(R(s)).concat(Object.keys(R(h))).map(g=>`  - ${g}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(g=>`  - ${g}`).join(`
`)].join(`
`))}else{let g=c.props,d=g==null?void 0:g.className,f=typeof d=="function"?(...C)=>Q(d(...C),s.className):Q(d,s.className),v=f?{className:f}:{},m=he(c.props,R(G(s,["ref"])));for(let C in h)C in m&&delete h[C];return i.cloneElement(c,Object.assign({},m,h,p,{ref:l(He(c),p.ref)},v))}return i.createElement(a,Object.assign({},G(s,["ref"]),a!==i.Fragment&&p,a!==i.Fragment&&h),c)}function Pe(){let e=i.useRef([]),t=i.useCallback(n=>{for(let r of e.current)r!=null&&(typeof r=="function"?r(n):r.current=n)},[]);return(...n)=>{if(!n.every(r=>r==null))return e.current=n,t}}function xe(...e){return e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}function he(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let l in r)l.startsWith("on")&&typeof r[l]=="function"?(n[l]!=null||(n[l]=[]),n[l].push(r[l])):t[l]=r[l];if(t.disabled||t["aria-disabled"])for(let r in n)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r)&&(n[r]=[l=>{var a;return(a=l==null?void 0:l.preventDefault)==null?void 0:a.call(l)}]);for(let r in n)Object.assign(t,{[r](l,...a){let u=n[r];for(let o of u){if((l instanceof Event||(l==null?void 0:l.nativeEvent)instanceof Event)&&l.defaultPrevented)return;o(l,...a)}}});return t}function J(e){var t;return Object.assign(i.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function R(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function G(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function He(e){return E.version.split(".")[0]>="19"?e.props.ref:e.ref}let Le=Symbol();function ve(...e){let t=i.useRef(e);i.useEffect(()=>{t.current=e},[e]);let n=w(r=>{for(let l of t.current)l!=null&&(typeof l=="function"?l(r):l.current=r)});return e.every(r=>r==null||(r==null?void 0:r[Le]))?void 0:n}function Ue(e=0){let[t,n]=i.useState(e),r=i.useCallback(s=>n(s),[t]),l=i.useCallback(s=>n(p=>p|s),[t]),a=i.useCallback(s=>(t&s)===s,[t]),u=i.useCallback(s=>n(p=>p&~s),[n]),o=i.useCallback(s=>n(p=>p^s),[n]);return{flags:t,setFlag:r,addFlag:l,hasFlag:a,removeFlag:u,toggleFlag:o}}var Me={},ue,fe;typeof process<"u"&&typeof globalThis<"u"&&typeof Element<"u"&&((ue=process==null?void 0:Me)==null?void 0:ue.NODE_ENV)==="test"&&typeof((fe=Element==null?void 0:Element.prototype)==null?void 0:fe.getAnimations)>"u"&&(Element.prototype.getAnimations=function(){return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.","Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.","","Example usage:","```js","import { mockAnimationsApi } from 'jsdom-testing-mocks'","mockAnimationsApi()","```"].join(`
`)),[]});var Ie=(e=>(e[e.None=0]="None",e[e.Closed=1]="Closed",e[e.Enter=2]="Enter",e[e.Leave=4]="Leave",e))(Ie||{});function qe(e){let t={};for(let n in e)e[n]===!0&&(t[`data-${n}`]="");return t}function De(e,t,n,r){let[l,a]=i.useState(n),{hasFlag:u,addFlag:o,removeFlag:s}=Ue(e&&l?3:0),p=i.useRef(!1),c=i.useRef(!1),h=ce();return O(()=>{var g;if(e){if(n&&a(!0),!t){n&&o(3);return}return(g=r==null?void 0:r.start)==null||g.call(r,n),Ve(t,{inFlight:p,prepare(){c.current?c.current=!1:c.current=p.current,p.current=!0,!c.current&&(n?(o(3),s(4)):(o(4),s(2)))},run(){c.current?n?(s(3),o(4)):(s(4),o(3)):n?s(1):o(1)},done(){var d;c.current&&typeof t.getAnimations=="function"&&t.getAnimations().length>0||(p.current=!1,s(7),n||a(!1),(d=r==null?void 0:r.end)==null||d.call(r,n))}})}},[e,n,t,h]),e?[l,{closed:u(1),enter:u(2),leave:u(4),transition:u(2)||u(4)}]:[n,{closed:void 0,enter:void 0,leave:void 0,transition:void 0}]}function Ve(e,{prepare:t,run:n,done:r,inFlight:l}){let a=q();return Ke(e,{prepare:t,inFlight:l}),a.nextFrame(()=>{n(),a.requestAnimationFrame(()=>{a.add(ze(e,r))})}),a.dispose}function ze(e,t){var n,r;let l=q();if(!e)return l.dispose;let a=!1;l.add(()=>{a=!0});let u=(r=(n=e.getAnimations)==null?void 0:n.call(e).filter(o=>o instanceof CSSTransition))!=null?r:[];return u.length===0?(t(),l.dispose):(Promise.allSettled(u.map(o=>o.finished)).then(()=>{a||t()}),l.dispose)}function Ke(e,{inFlight:t,prepare:n}){if(t!=null&&t.current){n();return}let r=e.style.transition;e.style.transition="none",n(),e.offsetHeight,e.style.transition=r}let ee=i.createContext(null);ee.displayName="OpenClosedContext";var A=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(A||{});function ge(){return i.useContext(ee)}function _e({value:e,children:t}){return E.createElement(ee.Provider,{value:e},t)}function Be(){let e=typeof document>"u";return"useSyncExternalStore"in oe?(t=>t.useSyncExternalStore)(oe)(()=>()=>{},()=>!1,()=>!e):!1}function ye(){let e=Be(),[t,n]=i.useState(I.isHandoffComplete);return t&&I.isHandoffComplete===!1&&n(!1),i.useEffect(()=>{t!==!0&&n(!0)},[t]),i.useEffect(()=>I.handoff(),[]),e?!1:t}function We(){let e=i.useRef(!1);return O(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function be(e){var t;return!!(e.enter||e.enterFrom||e.enterTo||e.leave||e.leaveFrom||e.leaveTo)||((t=e.as)!=null?t:Ce)!==i.Fragment||E.Children.count(e.children)===1}let V=i.createContext(null);V.displayName="TransitionContext";var Ye=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Ye||{});function Ze(){let e=i.useContext(V);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function Ge(){let e=i.useContext(z);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let z=i.createContext(null);z.displayName="NestingContext";function K(e){return"children"in e?K(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function Ee(e,t){let n=de(e),r=i.useRef([]),l=We(),a=ce(),u=w((d,f=T.Hidden)=>{let v=r.current.findIndex(({el:m})=>m===d);v!==-1&&(D(f,{[T.Unmount](){r.current.splice(v,1)},[T.Hidden](){r.current[v].state="hidden"}}),a.microTask(()=>{var m;!K(r)&&l.current&&((m=n.current)==null||m.call(n))}))}),o=w(d=>{let f=r.current.find(({el:v})=>v===d);return f?f.state!=="visible"&&(f.state="visible"):r.current.push({el:d,state:"visible"}),()=>u(d,T.Unmount)}),s=i.useRef([]),p=i.useRef(Promise.resolve()),c=i.useRef({enter:[],leave:[]}),h=w((d,f,v)=>{s.current.splice(0),t&&(t.chains.current[f]=t.chains.current[f].filter(([m])=>m!==d)),t==null||t.chains.current[f].push([d,new Promise(m=>{s.current.push(m)})]),t==null||t.chains.current[f].push([d,new Promise(m=>{Promise.all(c.current[f].map(([C,k])=>k)).then(()=>m())})]),f==="enter"?p.current=p.current.then(()=>t==null?void 0:t.wait.current).then(()=>v(f)):v(f)}),g=w((d,f,v)=>{Promise.all(c.current[f].splice(0).map(([m,C])=>C)).then(()=>{var m;(m=s.current.shift())==null||m()}).then(()=>v(f))});return i.useMemo(()=>({children:r,register:o,unregister:u,onStart:h,onStop:g,wait:p,chains:c}),[o,u,r,h,g,c,p])}let Ce=i.Fragment,Fe=pe.RenderStrategy;function Qe(e,t){var n,r;let{transition:l=!0,beforeEnter:a,afterEnter:u,beforeLeave:o,afterLeave:s,enter:p,enterFrom:c,enterTo:h,entered:g,leave:d,leaveFrom:f,leaveTo:v,...m}=e,[C,k]=i.useState(null),y=i.useRef(null),$=be(e),j=ve(...$?[y,t,k]:t===null?[]:[t]),te=(n=m.unmount)==null||n?T.Unmount:T.Hidden,{show:F,appear:ne,initial:re}=Ze(),[S,_]=i.useState(F?"visible":"hidden"),le=Ge(),{register:x,unregister:H}=le;O(()=>x(y),[x,y]),O(()=>{if(te===T.Hidden&&y.current){if(F&&S!=="visible"){_("visible");return}return D(S,{hidden:()=>H(y),visible:()=>x(y)})}},[S,y,x,H,F,te]);let B=ye();O(()=>{if($&&B&&S==="visible"&&y.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[y,S,B,$]);let $e=re&&!ne,ie=ne&&F&&re,W=i.useRef(!1),L=Ee(()=>{W.current||(_("hidden"),H(y))},le),se=w(Y=>{W.current=!0;let U=Y?"enter":"leave";L.onStart(y,U,P=>{P==="enter"?a==null||a():P==="leave"&&(o==null||o())})}),ae=w(Y=>{let U=Y?"enter":"leave";W.current=!1,L.onStop(y,U,P=>{P==="enter"?u==null||u():P==="leave"&&(s==null||s())}),U==="leave"&&!K(L)&&(_("hidden"),H(y))});i.useEffect(()=>{$&&l||(se(F),ae(F))},[F,$,l]);let Se=!(!l||!$||!B||$e),[,b]=De(Se,C,F,{start:se,end:ae}),Te=R({ref:j,className:((r=Q(m.className,ie&&p,ie&&c,b.enter&&p,b.enter&&b.closed&&c,b.enter&&!b.closed&&h,b.leave&&d,b.leave&&!b.closed&&f,b.leave&&b.closed&&v,!b.transition&&F&&g))==null?void 0:r.trim())||void 0,...qe(b)}),N=0;S==="visible"&&(N|=A.Open),S==="hidden"&&(N|=A.Closed),b.enter&&(N|=A.Opening),b.leave&&(N|=A.Closing);let Oe=me();return E.createElement(z.Provider,{value:L},E.createElement(_e,{value:N},Oe({ourProps:Te,theirProps:m,defaultTag:Ce,features:Fe,visible:S==="visible",name:"Transition.Child"})))}function Xe(e,t){let{show:n,appear:r=!1,unmount:l=!0,...a}=e,u=i.useRef(null),o=be(e),s=ve(...o?[u,t]:t===null?[]:[t]);ye();let p=ge();if(n===void 0&&p!==null&&(n=(p&A.Open)===A.Open),n===void 0)throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[c,h]=i.useState(n?"visible":"hidden"),g=Ee(()=>{n||h("hidden")}),[d,f]=i.useState(!0),v=i.useRef([n]);O(()=>{d!==!1&&v.current[v.current.length-1]!==n&&(v.current.push(n),f(!1))},[v,n]);let m=i.useMemo(()=>({show:n,appear:r,initial:d}),[n,r,d]);O(()=>{n?h("visible"):!K(g)&&u.current!==null&&h("hidden")},[n,g]);let C={unmount:l},k=w(()=>{var j;d&&f(!1),(j=e.beforeEnter)==null||j.call(e)}),y=w(()=>{var j;d&&f(!1),(j=e.beforeLeave)==null||j.call(e)}),$=me();return E.createElement(z.Provider,{value:g},E.createElement(V.Provider,{value:m},$({ourProps:{...C,as:i.Fragment,children:E.createElement(we,{ref:s,...C,...a,beforeEnter:k,beforeLeave:y})},theirProps:{},defaultTag:i.Fragment,features:Fe,visible:c==="visible",name:"Transition"})))}function Je(e,t){let n=i.useContext(V)!==null,r=ge()!==null;return E.createElement(E.Fragment,null,!n&&r?E.createElement(X,{ref:t,...e}):E.createElement(we,{ref:t,...e}))}let X=J(Xe),we=J(Qe),et=J(Je),rt=Object.assign(X,{Child:et,Root:X});export{rt as z};

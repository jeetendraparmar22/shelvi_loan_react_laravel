import{r as n,j as e,m as q,L as A}from"./app-BgmyJYDu.js";import{L as w,I as E,a as I}from"./label-C4as4YLi.js";import{T as P}from"./text-link-Bwbg25dU.js";import{c as B,u as z,a as O,B as T}from"./app-logo-icon-CigbhZrh.js";import{u as H,c as K,a as L,P as X,b as $}from"./index-D_en4GG1.js";import{P as R}from"./index-NNzVrnE7.js";import{A as G,L as J}from"./auth-layout-DfaMcIxu.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],U=B("Check",Q);function V(t){const s=n.useRef({value:t,previous:t});return n.useMemo(()=>(s.current.value!==t&&(s.current.previous=s.current.value,s.current.value=t),s.current.previous),[t])}var y="Checkbox",[W,ue]=K(y),[Y,Z]=W(y),S=n.forwardRef((t,s)=>{const{__scopeCheckbox:r,name:c,checked:p,defaultChecked:a,required:l,disabled:i,value:x="on",onCheckedChange:d,form:h,...v}=t,[u,k]=n.useState(null),g=z(s,o=>k(o)),C=n.useRef(!1),N=u?h||!!u.closest("form"):!0,[f=!1,j]=H({prop:p,defaultProp:a,onChange:d}),M=n.useRef(f);return n.useEffect(()=>{const o=u==null?void 0:u.form;if(o){const b=()=>j(M.current);return o.addEventListener("reset",b),()=>o.removeEventListener("reset",b)}},[u,j]),e.jsxs(Y,{scope:r,state:f,disabled:i,children:[e.jsx(R.button,{type:"button",role:"checkbox","aria-checked":m(f)?"mixed":f,"aria-required":l,"data-state":F(f),"data-disabled":i?"":void 0,disabled:i,value:x,...v,ref:g,onKeyDown:L(t.onKeyDown,o=>{o.key==="Enter"&&o.preventDefault()}),onClick:L(t.onClick,o=>{j(b=>m(b)?!0:!b),N&&(C.current=o.isPropagationStopped(),C.current||o.stopPropagation())})}),N&&e.jsx(ee,{control:u,bubbles:!C.current,name:c,value:x,checked:f,required:l,disabled:i,form:h,style:{transform:"translateX(-100%)"},defaultChecked:m(a)?!1:a})]})});S.displayName=y;var D="CheckboxIndicator",_=n.forwardRef((t,s)=>{const{__scopeCheckbox:r,forceMount:c,...p}=t,a=Z(D,r);return e.jsx(X,{present:c||m(a.state)||a.state===!0,children:e.jsx(R.span,{"data-state":F(a.state),"data-disabled":a.disabled?"":void 0,...p,ref:s,style:{pointerEvents:"none",...t.style}})})});_.displayName=D;var ee=t=>{const{control:s,checked:r,bubbles:c=!0,defaultChecked:p,...a}=t,l=n.useRef(null),i=V(r),x=$(s);n.useEffect(()=>{const h=l.current,v=window.HTMLInputElement.prototype,k=Object.getOwnPropertyDescriptor(v,"checked").set;if(i!==r&&k){const g=new Event("click",{bubbles:c});h.indeterminate=m(r),k.call(h,m(r)?!1:r),h.dispatchEvent(g)}},[i,r,c]);const d=n.useRef(m(r)?!1:r);return e.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:p??d.current,...a,tabIndex:-1,ref:l,style:{...t.style,...x,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function m(t){return t==="indeterminate"}function F(t){return m(t)?"indeterminate":t?"checked":"unchecked"}var te=S,re=_;function se({className:t,...s}){return e.jsx(te,{"data-slot":"checkbox",className:O("peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",t),...s,children:e.jsx(re,{"data-slot":"checkbox-indicator",className:"flex items-center justify-center text-current transition-none",children:e.jsx(U,{className:"size-3.5"})})})}function me({status:t,canResetPassword:s}){const{data:r,setData:c,post:p,processing:a,errors:l,reset:i}=q({email:"",password:"",remember:!1}),x=d=>{d.preventDefault(),p(route("login"),{onFinish:()=>i("password")})};return e.jsxs(G,{title:"Log in to your account",description:"Enter your email and password below to log in",children:[e.jsx(A,{title:"Log in"}),e.jsxs("form",{className:"flex flex-col gap-6",onSubmit:x,children:[e.jsxs("div",{className:"grid gap-6",children:[e.jsxs("div",{className:"grid gap-2",children:[e.jsx(w,{htmlFor:"email",children:"Email address"}),e.jsx(E,{id:"email",type:"email",required:!0,autoFocus:!0,tabIndex:1,autoComplete:"email",value:r.email,onChange:d=>c("email",d.target.value),placeholder:"email@example.com"}),e.jsx(I,{message:l.email})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(w,{htmlFor:"password",children:"Password"}),s&&e.jsx(P,{href:route("password.request"),className:"ml-auto text-sm",tabIndex:5,children:"Forgot password?"})]}),e.jsx(E,{id:"password",type:"password",required:!0,tabIndex:2,autoComplete:"current-password",value:r.password,onChange:d=>c("password",d.target.value),placeholder:"Password"}),e.jsx(I,{message:l.password})]}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(se,{id:"remember",name:"remember",checked:r.remember,onClick:()=>c("remember",!r.remember),tabIndex:3}),e.jsx(w,{htmlFor:"remember",children:"Remember me"})]}),e.jsxs(T,{type:"submit",className:"mt-4 w-full",tabIndex:4,disabled:a,children:[a&&e.jsx(J,{className:"h-4 w-4 animate-spin"}),"Log in"]})]}),e.jsxs("div",{className:"text-muted-foreground text-center text-sm",children:["Don't have an account?"," ",e.jsx(P,{href:route("register"),tabIndex:5,children:"Sign up"})]})]}),t&&e.jsx("div",{className:"mb-4 text-center text-sm font-medium text-green-600",children:t})]})}export{me as default};

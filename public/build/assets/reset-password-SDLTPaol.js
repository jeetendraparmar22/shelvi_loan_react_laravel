import{m as u,j as s,L as f}from"./app-BgmyJYDu.js";import{L as t,I as i,a as l}from"./label-C4as4YLi.js";import{B as h}from"./app-logo-icon-CigbhZrh.js";import{A as x,L as j}from"./auth-layout-DfaMcIxu.js";import"./index-NNzVrnE7.js";function _({token:d,email:n}){const{data:e,setData:o,post:p,processing:m,errors:r,reset:c}=u({token:d,email:n,password:"",password_confirmation:""}),w=a=>{a.preventDefault(),p(route("password.store"),{onFinish:()=>c("password","password_confirmation")})};return s.jsxs(x,{title:"Reset password",description:"Please enter your new password below",children:[s.jsx(f,{title:"Reset password"}),s.jsx("form",{onSubmit:w,children:s.jsxs("div",{className:"grid gap-6",children:[s.jsxs("div",{className:"grid gap-2",children:[s.jsx(t,{htmlFor:"email",children:"Email"}),s.jsx(i,{id:"email",type:"email",name:"email",autoComplete:"email",value:e.email,className:"mt-1 block w-full",readOnly:!0,onChange:a=>o("email",a.target.value)}),s.jsx(l,{message:r.email,className:"mt-2"})]}),s.jsxs("div",{className:"grid gap-2",children:[s.jsx(t,{htmlFor:"password",children:"Password"}),s.jsx(i,{id:"password",type:"password",name:"password",autoComplete:"new-password",value:e.password,className:"mt-1 block w-full",autoFocus:!0,onChange:a=>o("password",a.target.value),placeholder:"Password"}),s.jsx(l,{message:r.password})]}),s.jsxs("div",{className:"grid gap-2",children:[s.jsx(t,{htmlFor:"password_confirmation",children:"Confirm password"}),s.jsx(i,{id:"password_confirmation",type:"password",name:"password_confirmation",autoComplete:"new-password",value:e.password_confirmation,className:"mt-1 block w-full",onChange:a=>o("password_confirmation",a.target.value),placeholder:"Confirm password"}),s.jsx(l,{message:r.password_confirmation,className:"mt-2"})]}),s.jsxs(h,{type:"submit",className:"mt-4 w-full",disabled:m,children:[m&&s.jsx(j,{className:"h-4 w-4 animate-spin"}),"Reset password"]})]})})]})}export{_ as default};

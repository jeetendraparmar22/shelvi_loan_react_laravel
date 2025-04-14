import{K as j,r,m as p,j as e,L as b}from"./app-Tnaz8-nw.js";import{A as N}from"./app-inner-page-CtQmdoVb.js";import{A as u}from"./app-layout-Drfoc1rR.js";import{f as _,E as g}from"./emi-schedule-108zYtz6.js";function D(){const{loanApplication:s,emiSchedules:n,totalPaid:i}=j().props,c=r.useRef(null),[l,h]=r.useState((s==null?void 0:s.emi_start_date)||"");r.useEffect(()=>{const t=_(c.current,{dateFormat:"d-m-Y",defaultDate:new Date(l),onChange:(a,d)=>{h(d),o("start_date",d)}});return()=>t.destroy()},[l]);const{setData:o,post:m}=p({loan_id:s==null?void 0:s.id,start_date:l}),x=t=>{t.preventDefault(),m(route("emi-schedule.generate"),{onSuccess:a=>{console.log("EMI schedule generated successfully:",a)},onError:a=>{console.error("Error generating EMI schedule:",a)}})};return e.jsx(e.Fragment,{children:e.jsxs(u,{children:[e.jsx(b,{title:"Loan Process"}),e.jsx("div",{className:"page-content expense_pending_page",children:e.jsxs("div",{className:"container-fluid",children:[e.jsx(N,{pageTitle:"Loan Process"}),e.jsxs("div",{className:"view_page_wrapper",children:[e.jsxs("div",{className:"detail_main_wrap",children:[e.jsx("div",{className:"detail_header",children:e.jsxs("h4",{children:["Application details (",s.vehicle.vehicle_registration_no,")"]})}),e.jsx("div",{className:"detail_card",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-4 pr-0 pl-0",children:e.jsx("div",{className:"table-responsive",children:e.jsx("table",{className:"table-borderless detail_tbl_claim mb-0 table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{className:"ps-0",scope:"row",children:e.jsx("strong",{children:"Name :"})}),e.jsxs("td",{className:"text-muted",children:[s.first_name," ",s.surname]})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"ps-0",scope:"row",children:e.jsx("strong",{children:"Mobile No :"})}),e.jsx("td",{className:"text-muted",children:s.mobile_no})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"ps-0",scope:"row",children:e.jsx("strong",{children:"Finance Name :"})}),e.jsx("td",{className:"text-muted",children:s.loan.finance_name})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"ps-0",scope:"row",children:e.jsx("strong",{children:"Excecutive Name :"})}),e.jsx("td",{className:"text-muted",children:s.loan.excecutive_name})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"ps-0",scope:"row",children:e.jsx("strong",{children:"Dealer Name :"})}),e.jsx("td",{className:"text-muted",children:s.vehicle.dealer_name})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"ps-0",scope:"row",children:e.jsx("strong",{children:"Vehicle Type :"})}),e.jsx("td",{className:"text-muted",children:s.vehicle.vehicle_type})]})]})})})}),e.jsx("div",{className:"col-lg-4 pr-0 pl-0",children:e.jsx("div",{className:"table-responsive",children:e.jsx("table",{className:"table-borderless detail_tbl_claim mb-0 table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{className:"ps-0",scope:"row",children:e.jsx("strong",{children:"Vehicle Registration Year :"})}),e.jsx("td",{className:"text-muted",children:s.vehicle.vehicle_registration_year})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"ps-0",scope:"row",children:e.jsx("strong",{children:"File Login Date :"})}),e.jsx("td",{className:"text-muted",children:new Date(s.loan.file_log_in_date).toLocaleDateString("en-GB")})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"ps-0",scope:"row",children:e.jsx("strong",{children:"Address:"})}),e.jsx("td",{className:"text-muted",children:s.address.address})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"ps-0",scope:"row",children:e.jsx("strong",{children:"Loan Amount :"})}),e.jsxs("td",{className:"text-muted",children:[s.loan.loan_amount," - INR"]})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"ps-0",scope:"row",children:e.jsx("strong",{children:"Rate of Interest :"})}),e.jsxs("td",{className:"text-muted",children:[s.loan.interest_rate," %"]})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"ps-0",scope:"row",children:e.jsx("strong",{children:"Total EMI :"})}),e.jsxs("td",{className:"text-muted",children:[s.loan.loan_term," Months"]})]})]})})})}),e.jsx("div",{className:"col-lg-4 pr-0 pl-0",children:e.jsxs("div",{className:"attached_btns mt-4",children:[e.jsx("button",{className:"btn btn-info btn-border mr-2","data-bs-toggle":"modal","data-bs-target":"#emi_scheduler",type:"button",children:"EMI Schedule"}),e.jsx("button",{className:"btn btn-info btn-border",type:"button",children:"Loan Agreement"})]})})]})})]}),e.jsx(g,{emiSchedules:n,totalPaid:i}),e.jsxs("div",{className:"flex_sections_bottom",children:[e.jsxs("div",{className:"section_acc travel_summary_wrapper",children:[e.jsx("div",{className:"bg_sec_header",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("h5",{children:"Loan Deails"})})}),e.jsx("div",{className:"sub_card",children:e.jsx("div",{className:"table-responsive",children:e.jsx("table",{className:"table-borderless tbl_summary mb-0 table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{className:"ps-0",scope:"row",children:"Total Loan"}),e.jsx("th",{children:":"}),e.jsx("td",{children:"1400"})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"ps-0",scope:"row",children:"Total Paid"}),e.jsx("th",{children:":"}),e.jsx("td",{children:"00"})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"ps-0",scope:"row",children:"Paid By Self"}),e.jsx("th",{children:":"}),e.jsx("td",{children:"00"})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"ps-0",scope:"row",children:"DA"}),e.jsx("th",{children:":"}),e.jsx("td",{children:"00"})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"ps-0",scope:"row",children:"Travel Advance"}),e.jsx("th",{children:":"}),e.jsx("td",{children:e.jsxs("div",{className:"d-flex",children:[e.jsx("p",{className:"mr-2 mb-0",children:"10"}),e.jsx("a",{href:"#","data-bs-toggle":"modal","data-bs-target":"#edit_value",className:"btn btn_edit ml-2",children:e.jsx("i",{className:"ri-pencil-line"})})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"ps-0",scope:"row",children:"Pay to Employee"}),e.jsx("th",{children:":"}),e.jsx("td",{children:e.jsx("strong",{children:"00"})})]})]})})})})]}),e.jsxs("div",{className:"btn_invoices_flex",children:[e.jsx("button",{className:"btn btn-info",children:"Force Closer Letter"}),e.jsx("button",{className:"btn btn-green btn-border","data-bs-toggle":"modal","data-bs-target":"#approve_task_modal",children:"NOC"}),e.jsx("button",{className:"btn btn-danger btn-border","data-bs-toggle":"modal","data-bs-target":"#Clarify_modal",children:"Agreement"})]}),e.jsxs("div",{className:"section_acc travel_summary_wrapper approved_by_wrapper",children:[e.jsx("div",{className:"bg_sec_header",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("h5",{children:"Approved By"})})}),e.jsx("div",{className:"sub_card",children:e.jsx("div",{className:"table-responsive",children:e.jsx("table",{className:"table-borderless tbl_summary mb-0 table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{className:"ps-0",scope:"row",children:"Manager"}),e.jsx("th",{children:":"}),e.jsx("td",{children:"RP Manager at 06-10-2023 19:00"})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"ps-0",scope:"row",children:"SAP Voucher"}),e.jsx("th",{children:":"}),e.jsx("td",{children:"Not Attached"})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"ps-0",scope:"row",children:"SAP Document"}),e.jsx("th",{children:":"}),e.jsx("td",{children:"1900117489 at 13-10-2023 13:00"})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"ps-0",scope:"row",children:"Checker Maker"}),e.jsx("th",{children:":"}),e.jsx("td",{children:"-----------------------"})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"ps-0",scope:"row",children:"Finance Head"}),e.jsx("th",{children:":"}),e.jsx("td",{children:"-----------------------"})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"ps-0",scope:"row",children:"Auditor"}),e.jsx("th",{children:":"}),e.jsx("td",{children:"-----------------------"})]})]})})})})]})]})]})]})}),e.jsx("div",{id:"emi_scheduler",className:"modal fade",tabIndex:-1,"aria-labelledby":"myModalLabel","aria-hidden":"true",style:{display:"none"},children:e.jsx("div",{className:"modal-dialog modal-dialog-centered",children:e.jsx("form",{onSubmit:x,children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h5",{className:"modal-title",id:"myModalLabel",children:"EMI Start Date"}),e.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),e.jsx("div",{className:"modal-body p-1",children:e.jsx("div",{className:"confirm_details_tbl",children:e.jsx("div",{className:"other_details",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-12 mb-3",children:e.jsx("div",{className:"datepicker_cus",children:e.jsx("input",{type:"text",placeholder:"Enter DateTime",className:"form-control",ref:c})})})})})})}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"button",className:"btn btn-danger","data-bs-dismiss":"modal",children:"Close"}),e.jsx("button",{type:"submit",className:"btn btn-primary","data-bs-dismiss":"modal",children:"Submit"})]})]})})})})]})})}export{D as default};

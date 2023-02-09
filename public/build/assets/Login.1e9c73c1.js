import{T as k}from"./TextInput.abbd7a7c.js";import{C as V}from"./CheckboxInput.81feb6d6.js";import{L}from"./LoadingButton.6a60f23e.js";import{F as j}from"./FlashMessages.11c60355.js";import{_ as h,o as d,c as m,a as t,t as n,F as C,j as F,d as _,r as l,h as p,w as E,b as a,e as b}from"./app.5674a846.js";import"./InputError.c4e1f4bd.js";const T={computed:{errors(){return this.$page.props.errors},hasErrors(){return Object.keys(this.errors).length>0}}},B={key:0},N={class:"font-medium text-red-600"},U={class:"mt-3 list-disc list-inside text-sm text-red-600"};function A(e,s,y,w,o,i){return i.hasErrors?(d(),m("div",B,[t("div",N,n(e.$t("Whoops! Something went wrong.")),1),t("ul",U,[(d(!0),m(C,null,F(i.errors,(u,c)=>(d(),m("li",{key:c},n(u),1))),128))])])):_("",!0)}const I=h(T,[["render",A]]),M={props:{errors:Object},components:{LoadingButton:L,TextInput:k,CheckboxInput:V,FlashMessages:j,TecValidationErrors:I},metaInfo(){return{title:this.$t("Login")}},data(){return{sending:!1,form:this.$inertia.form({username:null,password:null,remember:!1})}},mounted(){this.$i18n.locale=window.Locale},methods:{submit(){this.sending=!0,this.$inertia.post(this.route("login.attempt"),{username:this.form.username,password:this.form.password,remember:this.form.remember},{onFinish:()=>this.sending=!1})},loginAs(e){this.form.username=e?"tailor@tecdiary.com":"owner@tecdiary.com",this.form.password="12345678",this.submit()}}},O={class:"titlebar p-6 bg-gray-800 min-h-screen flex justify-center items-center"},S={class:"w-full max-w-md no-drag"},z={class:"flex justify-center mx-auto fill-white"},P={class:"h-8 italic text-white text-lg py-1 flex items-center"},q={class:"font-extrabold"},D={key:0,class:"bg-gradient-to-tr from-blue-600 to-blue-700 flex justify-around p-4 rounded bg-gray-700 my-6"},R={class:"inline-block mx-auto text-white"},W=["disabled"],G=["disabled"],H={class:"p-6"},J={class:"mt-6"},K={class:"px-6 py-3 bg-gray-100 border-t border-gray-200 flex justify-between items-center"};function Q(e,s,y,w,o,i){var g;const u=l("flash-messages"),c=l("tec-validation-errors"),f=l("text-input"),x=l("checkbox-input"),v=l("Link"),$=l("loading-button");return d(),m("div",O,[t("div",S,[t("div",z,[t("div",P,[t("span",q,n(e.$page.props.app_name),1)])]),e.$page.props.demo?(d(),m("div",D,[t("div",R,[p(n(e.$t("Login as"))+" ",1),t("button",{disabled:o.sending,onClick:s[0]||(s[0]=r=>i.loginAs()),class:"mx-2 bg-gray-200 text-gray-700 hover:bg-gray-800 hover:text-gray-300 border-0 transform transition duration-300 hover:scale-110 rounded text-sm font-bold px-3 py-2"},n(e.$t("Owner")),9,W),t("button",{disabled:o.sending,onClick:s[1]||(s[1]=r=>i.loginAs(!0)),class:"bg-gray-200 text-gray-700 hover:bg-gray-800 hover:text-gray-300 border-0 transform transition duration-300 hover:scale-110 rounded text-sm font-bold px-3 py-2"},n(e.$t("Tailor")),9,G)])])):_("",!0),t("form",{class:"mt-6 bg-white rounded-lg shadow-xl overflow-hidden",onSubmit:s[5]||(s[5]=E((...r)=>i.submit&&i.submit(...r),["prevent"])),autocapitalize:"off"},[t("div",H,[t("p",null,n(e.$t("Please login to access your account")),1),a(u,{class:"np mt-4"}),a(c,{class:"mb-4"}),a(f,{autofocus:"",type:"text",class:"mt-6",autocapitalize:"off",modelValue:o.form.username,"onUpdate:modelValue":s[2]||(s[2]=r=>o.form.username=r),label:e.$t("Username/Email"),errors:(g=e.$page.props.errors)==null?void 0:g.username},null,8,["modelValue","label","errors"]),a(f,{modelValue:o.form.password,"onUpdate:modelValue":s[3]||(s[3]=r=>o.form.password=r),class:"mt-6",label:e.$t("Password"),type:"password"},null,8,["modelValue","label"]),t("div",J,[a(x,{id:"remember",label:e.$t("Remember Me"),checked:o.form.remember,"onUpdate:checked":s[4]||(s[4]=r=>o.form.remember=r)},null,8,["label","checked"])])]),t("div",K,[a(v,{href:e.route("password.request"),class:"hover:underline",tabindex:"-1"},{default:b(()=>[p(n(e.$t("Forget password?")),1)]),_:1},8,["href"]),a($,{loading:o.sending,class:"btn-gray",type:"submit"},{default:b(()=>[p(n(e.$t("Login")),1)]),_:1},8,["loading"])])],32)])])}const oe=h(M,[["render",Q]]);export{oe as default};

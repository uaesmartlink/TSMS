import{L as l}from"./Layout.8752e13e.js";import p from"./Form.f6284b43.js";import{_ as d,r as e,o as f,c as _,a as r,b as o,e as h,h as s,t as a}from"./app.d844cde7.js";import"./Dropdown.516b2046.js";import"./FlashMessages.be204400.js";import"./debounce.bc652adb.js";import"./TextInput.d5a3f339.js";import"./InputError.7ca69c20.js";import"./CheckboxInput.c53c990a.js";import"./TextareaInput.cdbec9ac.js";import"./LoadingButton.a79f4654.js";const u={layout:l,components:{PForm:p},props:{icustomers:Array},metaInfo(){return{title:this.$t("create_x",{x:this.$tc("Payment")})}}},x={class:"mb-6 mt-2 font-bold text-lg md:text-2xl"},y=r("span",{class:"text-gray-400 font-medium mx-2"},"/",-1),w={class:"bg-white rounded shadow overflow-hidden max-w-3xl"};function $(t,g,n,k,b,v){const m=e("Icons"),c=e("Link"),i=e("p-form");return f(),_("div",null,[r("h1",x,[o(c,{class:"text-gray-600 hover:text-gray-800 inline-flex items-center",href:t.route("payments")},{default:h(()=>[o(m,{name:"back",class:"flex-shrink-0 w-3 h-3 md:w-5 md:h-5 fill-current ltr:mr-2 rtl:ml-2 rtl:rotate"}),s(" "+a(t.$tc("Payment",2)),1)]),_:1},8,["href"]),y,s(" "+a(t.$t("Create")),1)]),r("div",w,[o(i,{modal:!1,icustomers:n.icustomers},null,8,["icustomers"])])])}const S=d(u,[["render",$]]);export{S as default};
import{L as l}from"./Layout.8fb24580.js";import p from"./Form.bd80292e.js";import{_ as d,r as e,o as u,c as f,a as r,b as o,e as _,h as m,t as a}from"./app.5674a846.js";import"./Dropdown.8a829ea0.js";import"./FlashMessages.11c60355.js";import"./debounce.d67c6bd7.js";import"./TextInput.abbd7a7c.js";import"./InputError.c4e1f4bd.js";import"./RadioInput.ffbddcb4.js";import"./SelectInput.34108f97.js";import"./TextareaInput.7e0d540c.js";import"./CheckboxInput.81feb6d6.js";import"./LoadingButton.6a60f23e.js";import"./DeleteRestoreComponent.b8810e4c.js";import"./Dialog.0203a276.js";import"./Modal.80698ff2.js";const h={layout:l,components:{MForm:p},props:{iservices:Array,icustomers:Array},metaInfo(){return{title:this.$t("create_x",{x:this.$tc("Measurement")})}}},x={class:"mb-6 mt-2 font-bold text-lg md:text-2xl"},v=r("span",{class:"text-gray-400 font-medium mx-2"},"/",-1),y={class:"bg-white rounded shadow overflow-hidden max-w-3xl"};function w(t,g,s,k,$,b){const i=e("Icons"),n=e("Link"),c=e("m-form");return u(),f("div",null,[r("h1",x,[o(n,{class:"text-gray-600 hover:text-gray-800 inline-flex items-center",href:t.route("measurements")},{default:_(()=>[o(i,{name:"back",class:"flex-shrink-0 w-3 h-3 md:w-5 md:h-5 fill-current ltr:mr-2 rtl:ml-2 rtl:rotate"}),m(" "+a(t.$tc("Measurement",2)),1)]),_:1},8,["href"]),v,m(" "+a(t.$t("Create")),1)]),r("div",y,[o(c,{modal:!1,iservices:s.iservices,icustomers:s.icustomers},null,8,["iservices","icustomers"])])])}const G=d(h,[["render",w]]);export{G as default};
import{L as x}from"./Layout.e382120b.js";import{t as y}from"./throttle.2cce904d.js";import{S as g,m as w}from"./SearchFilter.df9292a1.js";import{P as k}from"./Pagination.c3d15ebf.js";import"./Form.789eddda.js";import{_ as $,r as n,o as i,c as l,a as t,b as c,e as C,h as p,t as s,F as T,j as V,d as v}from"./app.ec2edc46.js";import"./Dropdown.eacf22f8.js";import"./FlashMessages.e38ce7e7.js";import"./debounce.fc910586.js";import"./TextInput.a2141727.js";import"./InputError.6940633d.js";import"./CheckboxInput.f10b4ae9.js";import"./TextareaInput.814d1043.js";import"./LoadingButton.85689857.js";const L={layout:x,components:{Pagination:k,SearchFilter:g},props:{transactions:Object,filters:Object},metaInfo(){return{title:this.$tc("Transaction",2)}},data(){return{customer_id:null,form:{search:this.filters.search}}},mounted(){this.customer_id=this.transactions.data[0].customer_id},watch:{form:{handler:y(function(){this.$inertia.replace(this.route("customers.transactions",this.customer_id)+(this.form.search?"?search="+this.form.search:""))},250),deep:!0}},methods:{TypeCol(e){let r=e.split("_");return this.$capitalize(r[0])+" "+this.$capitalize(r[1])},reset(){this.form=w(this.form,()=>null)}}},j={class:"mb-6 mt-2 font-bold text-lg md:text-2xl"},N=t("span",{class:"text-gray-400 font-medium mx-2"},"/",-1),S={class:"np mb-6 flex justify-between items-center"},B={class:"bg-white rounded shadow overflow-x-auto scroll-on-light"},F={class:"w-full whitespace-no-wrap"},I={class:"text-left font-bold"},z={class:"px-6 pt-6 pb-4"},D={class:"px-6 pt-6 pb-4"},O={class:"px-6 pt-6 pb-4 text-center"},P={class:"px-6 pt-6 pb-4 text-center"},R={class:"border-t px-6 py-4"},E={class:"border-t px-6 py-4"},U={class:"border-t px-6 py-4 font-bold text-right"},q={class:"border-t px-6 py-4 font-bold text-right"},A={key:0},G={class:"border-t px-6 py-4",colspan:"4"};function H(e,r,a,J,m,d){var h;const u=n("Icons"),_=n("Link"),f=n("search-filter"),b=n("pagination");return i(),l("div",null,[t("h1",j,[c(_,{class:"text-gray-600 hover:text-gray-800 inline-flex items-center",href:e.route("customers")},{default:C(()=>[c(u,{name:"back",class:"flex-shrink-0 w-3 h-3 md:w-5 md:h-5 fill-current ltr:mr-2 rtl:ml-2 rtl:rotate"}),p(" "+s(e.$tc("Customer",2)),1)]),_:1},8,["href"]),N,p(" "+s(e.$tc("Transaction",2)),1)]),t("div",S,[c(f,{noSlot:"",modelValue:m.form.search,"onUpdate:modelValue":r[0]||(r[0]=o=>m.form.search=o),class:"w-full max-w-md ltr:mr-4 rtl:ml-4",onReset:d.reset},null,8,["modelValue","onReset"])]),t("div",B,[t("table",F,[t("thead",null,[t("tr",I,[t("th",z,s(e.$t("Created at")),1),t("th",D,s(e.$t("Type")),1),t("th",O,s(e.$t("Debit")),1),t("th",P,s(e.$t("Credit")),1)])]),t("tbody",null,[(i(!0),l(T,null,V(a.transactions.data,o=>(i(),l("tr",{key:o.id,class:"hover:bg-teal-200 focus-within:bg-teal-200"},[t("td",R,s(e.$datetime(o.created_at)),1),t("td",E,s(d.TypeCol(o.type)),1),t("td",U,s(e.$number(o.debit)),1),t("td",q,s(e.$number(o.credit)),1)]))),128)),((h=a.transactions.data)==null?void 0:h.length)===0?(i(),l("tr",A,[t("td",G,s(e.$t("no_x_found",{x:e.$tc("Transaction")})),1)])):v("",!0)])])]),c(b,{links:a.transactions.links,meta:a.transactions.meta},null,8,["links","meta"])])}const it=$(L,[["render",H]]);export{it as default};

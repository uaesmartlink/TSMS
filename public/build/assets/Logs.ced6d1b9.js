import y from"./ShowLog.7fafd115.js";import{p as x}from"./pickBy.c6c9ba72.js";import{t as k}from"./throttle.2cce904d.js";import{S as v,m as C}from"./SearchFilter.df9292a1.js";import{L}from"./Layout.e382120b.js";import{M}from"./Modal.40562aeb.js";import{P as V}from"./Pagination.c3d15ebf.js";import{_ as B,r as n,o as r,c as i,a as t,t as o,b as d,F as S,j,d as m,e as N,h as _,f}from"./app.ec2edc46.js";import"./debounce.fc910586.js";import"./Dropdown.eacf22f8.js";import"./FlashMessages.e38ce7e7.js";const F={layout:L,components:{Pagination:V,SearchFilter:v,ShowLog:y,Modal:M},props:{logs:Object,filters:Object},metaInfo(){return{title:this.$tc("Log",2)}},data(){return{form:{search:this.filters.search,trashed:this.filters.trashed},log:null,viewModal:!1}},watch:{form:{handler:k(function(){let e=x(this.form);this.$inertia.replace(this.route("logs",Object.keys(e).length?e:{remember:"forget"}))},150),deep:!0}},methods:{rowClicked(e){this.log=this.logs.data.find(l=>l.id==e),this.viewModal=!0},reset(){this.form=C(this.form,()=>null)}}},I={class:"mb-6 mt-2 font-bold text-lg md:text-2xl"},O={class:"np mb-6 flex justify-between items-center"},$={class:"bg-white rounded shadow overflow-x-auto"},D={class:"w-full whitespace-no-wrap"},P={class:"text-left font-bold"},R={class:"px-6 pt-6 pb-4"},q={class:"px-6 pt-6 pb-4"},E={class:"px-6 pt-6 pb-4"},T={class:"px-6 pt-6 pb-4",colspan:"2"},U=["onClick"],z={class:"border-t px-6 py-4"},A={class:"border-t px-6 py-4"},G={class:"flex items-center"},H={class:"border-t px-6 py-4"},J={class:"flex items-center"},K={class:"border-t px-6 py-4"},Q={key:0},W={class:"border-t px-6 py-4 w-8"},X={key:0},Y={class:"border-t px-6 py-4",colspan:"4"};function Z(e,l,c,tt,a,p){const u=n("search-filter"),h=n("Icons"),w=n("pagination"),g=n("ShowLog"),b=n("Modal");return r(),i("div",null,[t("div",null,[t("h1",I,o(e.$tc("Log",2)),1),t("div",O,[d(u,{"no-slot":"",modelValue:a.form.search,"onUpdate:modelValue":l[0]||(l[0]=s=>a.form.search=s),class:"w-full max-w-md ltr:mr-4 rtl:ml-4",onReset:p.reset,dropdown:!1},null,8,["modelValue","onReset"])]),t("div",$,[t("table",D,[t("thead",null,[t("tr",P,[t("th",R,o(e.$t("Created at")),1),t("th",q,o(e.$t("Name")),1),t("th",E,o(e.$t("Description")),1),t("th",T,o(e.$t("By")),1)])]),t("tbody",null,[(r(!0),i(S,null,j(c.logs.data,s=>(r(),i("tr",{key:s.id,onClick:et=>p.rowClicked(s.id),class:"cursor-pointer hover:bg-teal-200 focus-within:bg-teal-200"},[t("td",z,o(e.$datetime(s.created_at)),1),t("td",A,[t("div",G,[_(o(s.log_name)+" ",1),s.deleted_at?(r(),f(h,{key:0,name:"trash",class:"flex-shrink-0 w-3 h-3 fill-gray-400 ml-2"})):m("",!0)])]),t("td",H,[t("div",J,[_(o(s.description)+" ",1),s.deleted_at?(r(),f(h,{key:0,name:"trash",class:"flex-shrink-0 w-3 h-3 fill-gray-400 ml-2"})):m("",!0)])]),t("td",K,[s.causer?(r(),i("div",Q,o(s.causer.name),1)):m("",!0)]),t("td",W,[d(h,{name:"cheveron-right",class:"block w-6 h-6 fill-gray-400 rtl:rotate"})])],8,U))),128)),c.logs.data.length===0?(r(),i("tr",X,[t("td",Y,o(e.$t("no_x_found",{x:e.$tc("Log")})),1)])):m("",!0)])])]),d(w,{links:c.logs.links,meta:c.logs.meta},null,8,["links","meta"])]),d(b,{show:a.viewModal,"max-width":"2xl",closeable:!0,onClose:l[2]||(l[2]=()=>a.viewModal=!1)},{default:N(()=>[d(g,{log:a.log,onClose:l[1]||(l[1]=()=>a.viewModal=!1)},null,8,["log"])]),_:1},8,["show"])])}const pt=B(F,[["render",Z]]);export{pt as default};

import{s as de}from"./index-21298692.js";import{s as ue,a as ce}from"./index-547ca5e5.js";import{s as me}from"./index-525c2035.js";import{s as pe,a as ve}from"./index-6372ac25.js";import{s as H}from"./index-9ea91010.js";import{s as M}from"./index-9ddf3d55.js";import{_ as fe}from"./TopBreadcrumb-739057b0.js";import{s as Z}from"./index-2f177586.js";import{s as R}from"./index-5646386e.js";import{V as E,s as ye}from"./index-b3aec2fa.js";import{d as P,r as z,o as v,c as _,b as s,f as t,e as l,L as T,M as J,H as U,a8 as _e,Q as be,a as g,S as Ve,V as Q,P as ge,D as X,J as d,i as L,y as xe,N,G as $e,z as Y,W as I,X as B}from"./index-2917ce10.js";import{s as Ce}from"./index-639abafc.js";import{s as we}from"./index-6240175d.js";import{S as Se}from"./service-f9d2e53e.js";import{L as ke}from"./location-70478978.js";import{_ as Ue}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-775fa504.js";import"./index-b12d1d5d.js";import"./index-4a56db6f.js";import"./index-002ee94f.js";import"./index-83a3f0d6.js";const Te={class:"flex flex-col gap-2 mb-4"},Ie={class:"flex flex-col gap-2 mb-4"},he={class:"flex flex-col gap-2 mb-4"},Ae={class:"flex flex-wrap justify-start gap-4"},De=["for"],Le={class:"flex justify-end gap-2 mt-6"},Ne=P({__name:"AddVendor",props:{city:{type:Array,required:!0},service:{type:Array,required:!0}},emits:["on-close","on-save"],setup(h,{emit:C}){const m=h,y=C,f=E(),u=z({name:"",city_id:null,service_id:null});async function w(){const x={...u,service_id:JSON.stringify(u.service_id)};f.addVendor(x),y("on-save")}return(x,a)=>{const i=H,S=Z,b=M;return v(),_(T,null,[s("div",Te,[a[5]||(a[5]=s("label",{for:"name"},"Nama Vendor",-1)),t(i,{modelValue:l(u).name,"onUpdate:modelValue":a[0]||(a[0]=c=>l(u).name=c),id:"name","aria-describedby":"name-help"},null,8,["modelValue"])]),s("div",Ie,[a[6]||(a[6]=s("label",{for:"name"},"Lokasi",-1)),t(l(R),{modelValue:l(u).city_id,"onUpdate:modelValue":a[1]||(a[1]=c=>l(u).city_id=c),options:m.city,filter:"",optionLabel:"name",optionValue:"code",placeholder:"Select a Country",fluid:""},null,8,["modelValue","options"])]),s("div",he,[a[7]||(a[7]=s("label",{for:"name"},"Layanan",-1)),s("div",Ae,[(v(!0),_(T,null,J(m.service,(c,p)=>(v(),_("div",{key:p,class:"flex items-center gap-2"},[t(S,{modelValue:l(u).service_id,"onUpdate:modelValue":a[2]||(a[2]=k=>l(u).service_id=k),inputId:c.name,name:c.name,value:c.id},null,8,["modelValue","inputId","name","value"]),s("label",{for:c.name},U(c.name),9,De)]))),128))])]),s("div",Le,[t(b,{type:"button",label:"Batal",text:"",severity:"secondary",onClick:a[3]||(a[3]=c=>y("on-close"))}),t(b,{type:"button",label:"Simpan",onClick:a[4]||(a[4]=c=>w())})])],64)}}}),Be={class:"flex flex-col gap-2 mb-4"},Fe={class:"flex flex-col gap-2 mb-4"},Oe={class:"flex flex-col gap-2 mb-4"},qe={class:"flex flex-wrap justify-start gap-4"},je=["for"],He={class:"flex justify-end gap-2 mt-6"},Me=P({__name:"EditVendor",props:{vendorId:{type:[Number,null],required:!0},city:{type:Array,required:!0},service:{type:Array,required:!0}},emits:["on-close","on-save"],setup(h,{emit:C}){_e();const m=h,y=C,f=E(),u=z({name:"",city_id:null,service_id:null});async function w(){const a={...u,_method:"PATCH",service_id:JSON.stringify(u.service_id)};f.update(m.vendorId,a),y("on-save")}async function x(){await f.fetchDetail(m.vendorId),u.name=f.detail.name||"",u.city_id=f.detail.city_id||null,u.service_id=f.detail.vendor_service.map(a=>a.service_id)}return be(()=>m.vendorId,x,{immediate:!0}),(a,i)=>{const S=H,b=Z,c=M;return v(),_(T,null,[s("div",Be,[i[5]||(i[5]=s("label",{for:"name"},"Nama Vendor",-1)),t(S,{modelValue:l(u).name,"onUpdate:modelValue":i[0]||(i[0]=p=>l(u).name=p),id:"name","aria-describedby":"name-help"},null,8,["modelValue"])]),s("div",Fe,[i[6]||(i[6]=s("label",{for:"name"},"Lokasi",-1)),t(l(R),{modelValue:l(u).city_id,"onUpdate:modelValue":i[1]||(i[1]=p=>l(u).city_id=p),options:m.city,filter:"",optionLabel:"name",optionValue:"code",placeholder:"Select a Country",fluid:""},null,8,["modelValue","options"])]),s("div",Oe,[i[7]||(i[7]=s("label",{for:"name"},"Layanan",-1)),s("div",qe,[(v(!0),_(T,null,J(m.service,(p,k)=>(v(),_("div",{key:k,class:"flex items-center gap-2"},[t(b,{modelValue:l(u).service_id,"onUpdate:modelValue":i[2]||(i[2]=F=>l(u).service_id=F),inputId:p.name,name:p.name,value:p.id},null,8,["modelValue","inputId","name","value"]),s("label",{for:p.name},U(p.name),9,je)]))),128))])]),s("div",He,[t(c,{type:"button",label:"Batal",text:"",severity:"secondary",onClick:i[3]||(i[3]=p=>y("on-close"))}),t(c,{type:"button",label:"Simpan",onClick:i[4]||(i[4]=p=>w())})])],64)}}}),Re={class:"card mt-8"},Ee={class:"flex flex-col md:flex-row justify-between gap-4"},Pe={class:"flex items-center gap-4 md:order-2 order-1"},ze={class:"hidden md:flex"},Je={class:"flex md:hidden"},Ke={class:"list-disc list-inside flex flex-col gap-4"},We={class:"flex gap-4 items-center"},Ge=P({__name:"Vendors",setup(h){const C=g({}),m=E(),y=Se(),f=ke(),u=Ve(),w=g(0),x=g(null),a=g(!1),i=g(!1),S=g(),b=g(null),c=g({global:{value:null,matchMode:I.CONTAINS},name:{operator:B.AND,constraints:[{value:null,matchMode:I.STARTS_WITH}]},location:{operator:B.AND,constraints:[{value:null,matchMode:I.STARTS_WITH}]},date:{operator:B.AND,constraints:[{value:null,matchMode:I.DATE_IS}]},status:{operator:B.OR,constraints:[{value:null,matchMode:I.EQUALS}]}}),p=Q(()=>m.vendors.map(r=>({id:r.id,name:r.name,location:r.address,date:r.created_at,status:r.deleted_at,city:r.city,services:r.vendor_service}))),k=Q(()=>f.city.map(r=>({code:r.id,name:r.nama}))),F=z([1,2]);function O(r){switch(r){case 1:return"danger";case 2:return"success"}}function q(r){return r?"Unactive":"Active"}async function K(){await m.fetchVendor(),w.value+=1}ge(async()=>{await f.fetchCity(0),await y.fetchService(),await m.fetchVendor()});function ee(r){return new Date(r).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"})}const te=r=>{S.value.exportCSV()},oe=r=>{u.require({target:r.currentTarget,message:"Yakin ingin menghapus data ini?",icon:"pi pi-info-circle",rejectProps:{label:"Batal",severity:"secondary",outlined:!0},acceptProps:{label:"Hapus",severity:"danger"},accept:async()=>{await m.delete(r),await m.fetchVendor()},reject:()=>{}})},le=(r,o)=>{const A=C.value[o];A&&A.toggle(r)},ne=(r,o)=>{C.value[r]=o};return(r,o)=>{const A=fe,V=M,ae=pe,D=H,se=ve,$=ce,j=me,ie=ue,W=de,G=xe("tooltip");return v(),_(T,null,[t(A,{breadcrumbItems:[{label:"Data Vendor"}]}),s("div",Re,[o[14]||(o[14]=s("div",{class:"font-semibold text-xl mb-4"},"Data Vendor",-1)),(v(),X(ie,{selection:l(b),"onUpdate:selection":o[3]||(o[3]=e=>L(b)?b.value=e:null),ref_key:"dt",ref:S,key:l(w),loading:l(m).isLoading,value:l(p),paginator:!0,rows:10,dataKey:"id",filters:l(c),"onUpdate:filters":o[4]||(o[4]=e=>L(c)?c.value=e:null),filterDisplay:"menu",globalFilterFields:["name","location","services","date","status"],showGridlines:"",scrollable:""},{header:d(()=>[s("div",Ee,[t(V,{type:"button",icon:"pi pi-plus",label:"Tambah Vendor",class:"md:order-1 order-2",onClick:o[0]||(o[0]=e=>a.value=!0)}),s("div",Pe,[s("div",ze,[t(V,{type:"button",icon:"pi pi-download",outlined:"",label:"Unduh",onClick:o[1]||(o[1]=e=>te(e))})]),s("div",Je,[t(V,{type:"button",icon:"pi pi-download",outlined:""})]),t(se,{class:"w-full md:w-auto"},{default:d(()=>[t(ae,null,{default:d(()=>o[11]||(o[11]=[s("i",{class:"pi pi-search"},null,-1)])),_:1}),t(D,{modelValue:l(c).global.value,"onUpdate:modelValue":o[2]||(o[2]=e=>l(c).global.value=e),placeholder:"Pencarian",fluid:""},null,8,["modelValue"])]),_:1})])])]),empty:d(()=>o[12]||(o[12]=[N(" No vendors found. ")])),loading:d(()=>o[13]||(o[13]=[N(" Loading vendors data. Please wait. ")])),default:d(()=>[t($,{frozen:"",selectionMode:"multiple"}),t($,{sortable:"",field:"name",header:"Nama Vendor",class:"min-w-[15rem]"},{body:d(({data:e})=>[N(U(e.name),1)]),filter:d(({filterModel:e})=>[t(D,{modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,type:"text",placeholder:"Search by name"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t($,{sortable:"",header:"Lokasi",filterField:"location"},{body:d(({data:e})=>{var n;return[s("div",null,U((n=e.city)==null?void 0:n.nama),1)]}),filter:d(({filterModel:e})=>[t(D,{modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,type:"text",placeholder:"Cari Kota"},null,8,["modelValue","onUpdate:modelValue"])]),filterclear:d(({filterCallback:e})=>[t(V,{type:"button",icon:"pi pi-times",onClick:n=>e(),severity:"secondary"},null,8,["onClick"])]),filterapply:d(({filterCallback:e})=>[t(V,{type:"button",icon:"pi pi-check",onClick:n=>e(),severity:"success"},null,8,["onClick"])]),_:1}),t($,{sortable:"",header:"Layanan",filterField:"services",dataType:"string",style:{"min-width":"10rem"}},{body:d(({data:e})=>[t(V,{onClick:n=>le(n,e.id),label:e.services.length+" Layanan",severity:"info",outlined:"",icon:"pi pi-angle-down",iconPos:"right"},null,8,["onClick","label"]),t(l(ye),{ref:n=>ne(e.id,n)},{default:d(()=>[s("ul",Ke,[(v(!0),_(T,null,J(e.services,(n,re)=>(v(),_("li",{key:re},U(n.service.name),1))),128))])]),_:2},1536)]),filter:d(({filterModel:e})=>[t(D,{modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,type:"text",placeholder:"Cari Layanan"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t($,{sortable:"",header:"Status",field:"status",filterMenuStyle:{width:"14rem"},style:{"min-width":"12rem"}},{body:d(({data:e})=>[t(j,{value:q(e.status),severity:O(e.status)},null,8,["value","severity"])]),filter:d(({filterModel:e})=>[t(l(R),{modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,options:l(F),placeholder:"Select One",showClear:""},{value:d(n=>[n.value?(v(),X(j,{key:0,value:q(n.value),severity:O(n.value)},null,8,["value","severity"])):$e("",!0)]),option:d(n=>[t(j,{value:q(n.option),severity:O(n.option)},null,8,["value","severity"])]),_:2},1032,["modelValue","onUpdate:modelValue","options"])]),_:1}),t($,{sortable:"",header:"Tanggal Bergabung",filterField:"date",dataType:"date",class:"min-w-[20rem]"},{body:d(({data:e})=>[N(U(ee(e.date)),1)]),filter:d(({filterModel:e})=>[t(l(Ce),{modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,dateFormat:"mm/dd/yy",placeholder:"mm/dd/yyyy"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t($,{sortable:"",field:"id",header:"Action",bodyClass:"text-center",style:{"min-width":"12rem"}},{body:d(({data:e})=>[s("div",We,[Y(t(V,{icon:"pi pi-pencil",severity:"info",text:"",onClick:n=>(x.value=e.id,i.value=!0)},null,8,["onClick"]),[[G,"Ubah"]]),Y(t(V,{icon:"pi pi-trash",severity:"danger",text:"",onClick:n=>oe(e.id)},null,8,["onClick"]),[[G,"Hapus"]])])]),_:1})]),_:1},8,["selection","loading","value","filters"]))]),t(l(we)),t(W,{visible:l(a),"onUpdate:visible":o[7]||(o[7]=e=>L(a)?a.value=e:null),maximizable:"",modal:"",header:"Tambah Vendor",class:"md:w-1/2 w-[25rem]"},{default:d(()=>[t(Ne,{city:l(k),service:l(y).serviceAll,onOnClose:o[5]||(o[5]=e=>a.value=!1),onOnSave:o[6]||(o[6]=e=>(a.value=!1,K()))},null,8,["city","service"])]),_:1},8,["visible"]),t(W,{visible:l(i),"onUpdate:visible":o[10]||(o[10]=e=>L(i)?i.value=e:null),maximizable:"",modal:"",header:"Ubah Vendor",class:"md:w-1/2 w-[25rem]"},{default:d(()=>[t(Me,{city:l(k),service:l(y).serviceAll,vendorId:l(x),onOnClose:o[8]||(o[8]=e=>i.value=!1),onOnSave:o[9]||(o[9]=e=>(i.value=!1,K()))},null,8,["city","service","vendorId"])]),_:1},8,["visible"])],64)}}});const _t=Ue(Ge,[["__scopeId","data-v-6244c1bd"]]);export{_t as default};

import{s as z}from"./index-5d8e68ae.js";import{s as te}from"./index-d2658649.js";import{s as Q}from"./index-e73c6f95.js";import{s as Y}from"./index-81bd3c8b.js";import{s as I}from"./index-b2d9bdf1.js";import{S as ae}from"./serviceCategory-6f22e01b.js";import{Y as se,$ as O,a0 as j,d as G,r as B,P as q,o as C,c as M,b as a,f as l,e as n,J as r,t as x,H as F,E,L as J,S as oe,a as K,i as W,z as re,N as R,D as ee,W as A,X as L}from"./index-80696e42.js";import{s as de}from"./index-6cac5877.js";import{s as ue,a as me}from"./index-7e1b4203.js";import{s as ce,a as ve}from"./index-6e8aba70.js";import{_ as pe}from"./TopBreadcrumb-bd1bee55.js";import{s as be}from"./index-bdbec257.js";import{s as ge}from"./index-9bc907b6.js";import"./index-9d928228.js";import"./index-94e1ca5c.js";import"./index-5c342af9.js";import"./index-bbd5c4c8.js";import"./index-bffc3597.js";import"./index-9108591b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-60496ef7.js";const X=se("ServiceSubCategory",{state:()=>({isLoading:!1,serviceSubCategory:[]}),actions:{async getServiceSubCategory(){this.isLoading=!0;try{const y=await O.get("/auth/services-sub-problem");this.serviceSubCategory=y.data}catch{}finally{this.isLoading=!1}},async createServiceSubCategory(y){this.isLoading=!0;try{const c=await O.post("/auth/services-sub-problem",y);j("success",c.message)}catch{}finally{this.isLoading=!1}},async updateServiceSubCategory(y,c){this.isLoading=!0;try{const p=await O.post(`/auth/services-sub-problem/${y}`,c);j("success",p.message)}catch{}finally{this.isLoading=!1}},async delete(y){this.isLoading=!0;try{const c=await O.delete(`/auth/services-sub-problem/${y}`);j("success",c.message)}catch{}finally{this.isLoading=!1}}}}),fe={class:"flex flex-col gap-2 mb-4"},_e={class:"flex flex-col gap-2 mb-4"},ye={key:0,class:"flex gap-4 items-center"},Se=["alt","src"],xe={class:"m-0"},$e={class:"m-0 text-muted-color text-sm"},he={class:"flex gap-4 items-center"},Ce=["alt","src"],we={class:"m-0"},Ve={class:"m-0 text-muted-color text-sm"},Te={class:"flex flex-col gap-2 mb-4"},ke={class:"flex flex-col gap-2"},Ue={class:"flex justify-end gap-2 mt-8"},De=G({__name:"EditSubCategory",props:{data:{type:Object,required:!0}},emits:["on-close","on-save"],setup(y,{emit:c}){const p=y,w=c,h=ae(),T=X(),u=B([0,1]),d=B({problem_id:{id:p.data.service_problem.id,name:p.data.service_problem.name,image_url:p.data.image_url},name:p.data.name,description:p.data.description,status:p.data.status});async function $(){var o;const s={_method:"PATCH",problem_id:(o=d==null?void 0:d.problem_id)==null?void 0:o.id,name:d.name,description:d.description,status:d.status};T.updateServiceSubCategory(p.data.id,s),w("on-save")}function S(s){switch(s){case 0:return"danger";case 1:return"success"}}function g(s){switch(s){case 0:return"Tidak Tersedia";case 1:return"Tersedia"}}return q(async()=>{await h.fetchServiceCategory("",0)}),(s,o)=>{const k=Y,U=Q,D=te,t=z;return C(),M(J,null,[a("div",fe,[o[6]||(o[6]=a("label",{for:"name"},"Nama Sub Kategori",-1)),l(k,{modelValue:n(d).name,"onUpdate:modelValue":o[0]||(o[0]=e=>n(d).name=e),id:"name","aria-describedby":"name-help",placeholder:"Nama Sub Kategori"},null,8,["modelValue"])]),a("div",_e,[o[7]||(o[7]=a("label",{for:"desc"},"Kategori",-1)),l(n(I),{modelValue:n(d).problem_id,"onUpdate:modelValue":o[1]||(o[1]=e=>n(d).problem_id=e),options:n(h).serviceCategoryAll,placeholder:"Pilih Layanan"},{value:r(e=>{var f,m,_,b,V;return[e.value!=null?(C(),M("div",ye,[a("img",{alt:(m=(f=e==null?void 0:e.value)==null?void 0:f.service)==null?void 0:m.name,src:e.value.image_url,class:"align-middle w-10"},null,8,Se),a("div",null,[a("h6",xe,x((_=e==null?void 0:e.value)==null?void 0:_.name),1),a("p",$e,x((V=(b=e==null?void 0:e.value)==null?void 0:b.service)==null?void 0:V.name),1)])])):F("",!0)]}),option:r(e=>{var f,m,_,b,V;return[a("div",he,[a("img",{alt:(m=(f=e==null?void 0:e.option)==null?void 0:f.service)==null?void 0:m.name,src:(_=e==null?void 0:e.option)==null?void 0:_.image_url,class:"align-middle w-10"},null,8,Ce),a("div",null,[a("h6",we,x(e.option.name),1),a("p",Ve,x((V=(b=e==null?void 0:e.option)==null?void 0:b.service)==null?void 0:V.name),1)])])]}),_:1},8,["modelValue","options"])]),a("div",Te,[o[8]||(o[8]=a("label",{for:"desc"},"Status",-1)),l(n(I),{modelValue:n(d).status,"onUpdate:modelValue":o[2]||(o[2]=e=>n(d).status=e),options:n(u),placeholder:"Pilih Status"},{value:r(e=>[e.value!=null?(C(),E(U,{key:0,value:g(e.value),severity:S(e.value)},null,8,["value","severity"])):F("",!0)]),option:r(e=>[l(U,{value:g(e.option),severity:S(e.option)},null,8,["value","severity"])]),_:1},8,["modelValue","options"])]),a("div",ke,[o[9]||(o[9]=a("label",{for:"desc"},"Description",-1)),l(D,{modelValue:n(d).description,"onUpdate:modelValue":o[3]||(o[3]=e=>n(d).description=e),rows:"5",cols:"30"},null,8,["modelValue"])]),a("div",Ue,[l(t,{type:"button",label:"Batal",text:"",severity:"secondary",onClick:o[4]||(o[4]=e=>w("on-close"))}),l(t,{type:"button",label:"Simpan",disabled:s.$isQueryInvalid(n(d)),onClick:o[5]||(o[5]=e=>$())},null,8,["disabled"])])],64)}}}),Ke={class:"flex flex-col gap-2 mb-4"},Ae={class:"flex flex-col gap-2 mb-4"},Ne={key:0,class:"flex gap-4 items-center"},Le=["alt","src"],Ie={class:"m-0"},Be={class:"m-0 text-muted-color text-sm"},Me={class:"flex gap-4 items-center"},Fe=["alt","src"],Oe={class:"m-0"},Re={class:"m-0 text-muted-color text-sm"},Ee={class:"flex flex-col gap-2 mb-4"},He={class:"flex flex-col gap-2"},je={class:"flex justify-end gap-2 mt-8"},We=G({__name:"AddSubCategory",emits:["on-close","on-save"],setup(y,{emit:c}){const p=c,w=ae(),h=X(),T=B([0,1]),u=B({problem_id:null,name:"",description:"",status:1});async function d(){var s;const g={problem_id:(s=u==null?void 0:u.problem_id)==null?void 0:s.id,name:u.name,description:u.description,status:u.status};h.createServiceSubCategory(g),p("on-save")}function $(g){switch(g){case 0:return"danger";case 1:return"success"}}function S(g){switch(g){case 0:return"Tidak Tersedia";case 1:return"Tersedia"}}return q(async()=>{await w.fetchServiceCategory("",0)}),(g,s)=>{const o=Y,k=Q,U=te,D=z;return C(),M(J,null,[a("div",Ke,[s[6]||(s[6]=a("label",{for:"name"},"Nama Sub Kategori",-1)),l(o,{modelValue:n(u).name,"onUpdate:modelValue":s[0]||(s[0]=t=>n(u).name=t),id:"name","aria-describedby":"name-help",placeholder:"Nama Sub Kategori"},null,8,["modelValue"])]),a("div",Ae,[s[7]||(s[7]=a("label",{for:"desc"},"Kategori",-1)),l(n(I),{modelValue:n(u).problem_id,"onUpdate:modelValue":s[1]||(s[1]=t=>n(u).problem_id=t),options:n(w).serviceCategoryAll,placeholder:"Pilih Layanan"},{value:r(t=>{var e,f,m,_,b;return[t.value!=null?(C(),M("div",Ne,[a("img",{alt:(f=(e=t==null?void 0:t.value)==null?void 0:e.service)==null?void 0:f.name,src:t.value.image_url,class:"align-middle w-10"},null,8,Le),a("div",null,[a("h6",Ie,x((m=t==null?void 0:t.value)==null?void 0:m.name),1),a("p",Be,x((b=(_=t==null?void 0:t.value)==null?void 0:_.service)==null?void 0:b.name),1)])])):F("",!0)]}),option:r(t=>{var e,f,m,_,b;return[a("div",Me,[a("img",{alt:(f=(e=t==null?void 0:t.option)==null?void 0:e.service)==null?void 0:f.name,src:(m=t==null?void 0:t.option)==null?void 0:m.image_url,class:"align-middle w-10"},null,8,Fe),a("div",null,[a("h6",Oe,x(t.option.name),1),a("p",Re,x((b=(_=t==null?void 0:t.option)==null?void 0:_.service)==null?void 0:b.name),1)])])]}),_:1},8,["modelValue","options"])]),a("div",Ee,[s[8]||(s[8]=a("label",{for:"desc"},"Status",-1)),l(n(I),{modelValue:n(u).status,"onUpdate:modelValue":s[2]||(s[2]=t=>n(u).status=t),options:n(T),placeholder:"Pilih Status"},{value:r(t=>[t.value!=null?(C(),E(k,{key:0,value:S(t.value),severity:$(t.value)},null,8,["value","severity"])):F("",!0)]),option:r(t=>[l(k,{value:S(t.option),severity:$(t.option)},null,8,["value","severity"])]),_:1},8,["modelValue","options"])]),a("div",He,[s[9]||(s[9]=a("label",{for:"desc"},"Description",-1)),l(U,{modelValue:n(u).description,"onUpdate:modelValue":s[3]||(s[3]=t=>n(u).description=t),rows:"5",cols:"30"},null,8,["modelValue"])]),a("div",je,[l(D,{type:"button",label:"Batal",text:"",severity:"secondary",onClick:s[4]||(s[4]=t=>p("on-close"))}),l(D,{type:"button",label:"Simpan",disabled:g.$isQueryInvalid(n(u)),onClick:s[5]||(s[5]=t=>d())},null,8,["disabled"])])],64)}}}),ze={class:"card mt-8"},Qe={class:"flex flex-col md:flex-row justify-between gap-4"},Ye={class:"flex items-center gap-4 md:order-2 order-1"},Ge={class:"hidden md:flex"},qe={class:"flex md:hidden"},Je={class:"flex gap-4 items-center"},Xe=["alt","src"],Ze={class:"m-0"},Pe={class:"m-0 text-muted-color text-sm"},et={class:"flex gap-4 items-center"},$t=G({__name:"MasterSubCategory",setup(y){const c=X(),p=oe(),w=K(),h=K({global:{value:null,matchMode:A.CONTAINS},"service_problem.name":{operator:L.AND,constraints:[{value:null,matchMode:A.STARTS_WITH}]},name:{operator:L.AND,constraints:[{value:null,matchMode:A.STARTS_WITH}]},price:{operator:L.AND,constraints:[{value:null,matchMode:A.STARTS_WITH}]},updated_at:{operator:L.AND,constraints:[{value:null,matchMode:A.DATE_IS}]},status:{operator:L.OR,constraints:[{value:null,matchMode:A.EQUALS}]}}),T=K(null),u=B([1,0]),d=K(0),$=K(!1),S=K(!1);function g(t){switch(t){case 0:return"danger";case 1:return"success"}}function s(t){switch(t){case 0:return"Tidak Tersedia";case 1:return"Tersedia"}}async function o(){await c.getServiceSubCategory(),d.value+=1}q(async()=>{await o()});function k(t){return new Date(t).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"})}const U=t=>{w.value.exportCSV()},D=t=>{p.require({target:t.currentTarget,message:"Yakin ingin menghapus sub kategori ini?",icon:"pi pi-info-circle",rejectProps:{label:"Batal",severity:"secondary",outlined:!0},acceptProps:{label:"Yakin",severity:"danger"},accept:async()=>{await c.delete(t),await o()},reject:()=>{}})};return(t,e)=>{const f=pe,m=z,_=ce,b=Y,V=ve,N=me,H=Q,ie=ue,le=We,Z=de,ne=De,P=re("tooltip");return C(),M(J,null,[l(f,{breadcrumbItems:[{label:"Master"},{label:"Sub Kategori"}]}),a("div",ze,[e[13]||(e[13]=a("div",{class:"font-semibold text-xl mb-4"},"Data Sub Kategori",-1)),(C(),E(ie,{ref_key:"dt",ref:w,key:n(d),value:n(c).serviceSubCategory,rowGroupMode:"rowspan",groupRowsBy:"service_problem.name",paginator:!0,rows:10,dataKey:"id",rowHover:!0,filters:n(h),"onUpdate:filters":e[3]||(e[3]=i=>W(h)?h.value=i:null),filterDisplay:"menu",loading:n(c).isLoading,globalFilterFields:["service_problem.name","name","price","status","updated_at"],showGridlines:""},{header:r(()=>[a("div",Qe,[l(m,{type:"button",icon:"pi pi-plus",label:"Tambah Sub Kategori",class:"md:order-1 order-2",onClick:e[0]||(e[0]=i=>S.value=!0)}),a("div",Ye,[a("div",Ge,[l(m,{type:"button",icon:"pi pi-download",outlined:"",label:"Unduh",onClick:e[1]||(e[1]=i=>U(i))})]),a("div",qe,[l(m,{type:"button",icon:"pi pi-download",outlined:""})]),l(V,{class:"w-full md:w-auto"},{default:r(()=>[l(_,null,{default:r(()=>e[10]||(e[10]=[a("i",{class:"pi pi-search"},null,-1)])),_:1}),l(b,{modelValue:n(h).global.value,"onUpdate:modelValue":e[2]||(e[2]=i=>n(h).global.value=i),placeholder:"Pencarian",fluid:""},null,8,["modelValue"])]),_:1})])])]),empty:r(()=>e[11]||(e[11]=[R(" Tidak ada data Sub Kategori. ")])),loading:r(()=>e[12]||(e[12]=[R(" Memuat data Sub Kategori. Mohon tunggu. ")])),default:r(()=>[l(N,{field:"service_problem.name",header:"Kategori"},{body:r(({data:i})=>[a("div",Je,[a("img",{alt:i.service_problem.service.name,src:i.image_url,class:"align-middle w-10"},null,8,Xe),a("div",null,[a("h6",Ze,x(i.isCustom>0?"Custom Request":i.service_problem.name),1),a("p",Pe,x(i.service_problem.service.name),1)])])]),filter:r(({filterModel:i})=>[l(b,{modelValue:i.value,"onUpdate:modelValue":v=>i.value=v,type:"text",placeholder:"Cari Kategori"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(N,{field:"name",header:"Sub Kategori",class:"min-w-[15rem]"},{body:r(({data:i})=>[R(x(i.name),1)]),filter:r(({filterModel:i})=>[l(b,{modelValue:i.value,"onUpdate:modelValue":v=>i.value=v,type:"text",placeholder:"Cari Sub Kategori"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(N,{header:"Status",field:"status",filterMenuStyle:{width:"14rem"}},{body:r(({data:i})=>[l(H,{value:s(i.status),severity:g(i.status),class:"whitespace-nowrap"},null,8,["value","severity"])]),filter:r(({filterModel:i})=>[l(n(I),{modelValue:i.value,"onUpdate:modelValue":v=>i.value=v,options:n(u),placeholder:"Pilih",showClear:""},{value:r(v=>[v.value?(C(),E(H,{key:0,value:s(v.value),severity:g(v.value)},null,8,["value","severity"])):F("",!0)]),option:r(v=>[l(H,{value:s(v.option),severity:g(v.option)},null,8,["value","severity"])]),_:2},1032,["modelValue","onUpdate:modelValue","options"])]),_:1}),l(N,{header:"Terakhir Update",filterField:"updated_at",dataType:"date",class:"min-w-[12rem]"},{body:r(({data:i})=>[R(x(k(i.updated_at)),1)]),filter:r(({filterModel:i})=>[l(n(be),{modelValue:i.value,"onUpdate:modelValue":v=>i.value=v,dateFormat:"mm/dd/yy",placeholder:"mm/dd/yyyy"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(N,{field:"id",header:"Action",bodyClass:"text-center",class:"min-w-[10rem]"},{body:r(({data:i})=>[a("div",et,[ee(l(m,{icon:"pi pi-pencil",severity:"info",text:"",onClick:v=>(T.value=i,$.value=!0)},null,8,["onClick"]),[[P,"Ubah",void 0,{bottom:!0}]]),ee(l(m,{icon:"pi pi-trash",severity:"danger",text:"",onClick:v=>D(i.id)},null,8,["onClick"]),[[P,"Hapus",void 0,{bottom:!0}]])])]),_:1})]),_:1},8,["value","filters","loading"]))]),l(n(ge)),l(Z,{visible:n(S),"onUpdate:visible":e[6]||(e[6]=i=>W(S)?S.value=i:null),maximizable:"",modal:"",header:"Tambah Sub Kategori",class:"sm:w-1/2 w-full"},{default:r(()=>[l(le,{onOnClose:e[4]||(e[4]=i=>S.value=!1),onOnSave:e[5]||(e[5]=i=>(S.value=!1,o()))})]),_:1},8,["visible"]),l(Z,{visible:n($),"onUpdate:visible":e[9]||(e[9]=i=>W($)?$.value=i:null),maximizable:"",modal:"",header:"Ubah Sub Kategori",class:"sm:w-1/2 w-full"},{default:r(()=>[l(ne,{data:n(T),onOnClose:e[7]||(e[7]=i=>$.value=!1),onOnSave:e[8]||(e[8]=i=>($.value=!1,o()))},null,8,["data"])]),_:1},8,["visible"])],64)}}});export{$t as default};

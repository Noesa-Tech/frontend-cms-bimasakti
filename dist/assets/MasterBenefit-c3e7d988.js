var me=Object.defineProperty,ve=Object.defineProperties;var pe=Object.getOwnPropertyDescriptors;var te=Object.getOwnPropertySymbols;var fe=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var se=(c,r,l)=>r in c?me(c,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):c[r]=l,H=(c,r)=>{for(var l in r||(r={}))fe.call(r,l)&&se(c,l,r[l]);if(te)for(var l of te(r))ye.call(r,l)&&se(c,l,r[l]);return c},q=(c,r)=>ve(c,pe(r));var B=(c,r,l)=>new Promise((y,x)=>{var _=p=>{try{b(l.next(p))}catch(v){x(v)}},u=p=>{try{b(l.throw(p))}catch(v){x(v)}},b=p=>p.done?y(p.value):Promise.resolve(p.value).then(_,u);b((l=l.apply(c,r)).next())});import{s as G}from"./index-5eed3e67.js";import{s as Q}from"./index-aa1d85b5.js";import{s as W}from"./index-d711757b.js";import{s as L,a as _e,b as ge}from"./index-53cbce68.js";import{a5 as be,a6 as I,a7 as z,p as Y,q as D,a2 as F,o as $,c as N,a as i,h as a,z as n,w as d,t as V,n as j,k as J,M as X,a1 as he,v as k,Q as Be,D as K,J as xe,O as M,K as ae,a3 as A,a4 as O}from"./index-f33b2ef5.js";import{s as Se}from"./index-fc38d66c.js";import{s as $e,a as we}from"./index-a2f572f2.js";import{_ as Ve}from"./TopBreadcrumb-7cbd14fd.js";import{s as Te}from"./index-c3930c8a.js";import{s as ke}from"./index-61d54112.js";import{S as Ce}from"./service-6ba4f86f.js";import"./index-de3282ec.js";import"./index-2bf1ea68.js";import"./index-e4aa43e1.js";import"./index-b8eed17e.js";import"./_plugin-vue_export-helper-c27b6911.js";const Z=be("ServiceBenefitStore",{state:()=>({isLoading:!1,serviceBenefitAll:[]}),actions:{fetchServiceBenefit(){return B(this,null,function*(){this.isLoading=!0;try{const c=yield I.get("/auth/services-benefit");this.serviceBenefitAll=c.data}catch(c){}finally{this.isLoading=!1}})},addServiceBenefit(c){return B(this,null,function*(){this.isLoading=!0;try{const r=yield I.post("/auth/services-benefit",c);z("success",r.message)}catch(r){}finally{this.isLoading=!1}})},updateServiceBenefit(c,r){return B(this,null,function*(){this.isLoading=!0;try{const l=yield I.post(`/auth/services-benefit/${c}`,r);z("success",l.message)}catch(l){}finally{this.isLoading=!1}})},delete(c){return B(this,null,function*(){this.isLoading=!0;try{const r=yield I.delete(`/auth/services-benefit/${c}`);z("success",r.message)}catch(r){}finally{this.isLoading=!1}})}}}),Ue={class:"flex flex-col gap-2 mb-4"},Ae={class:"flex flex-col gap-2 mb-4"},Le={key:0,class:"flex gap-4 items-center"},De=["src"],Ne={class:"m-0"},Ie={class:"flex gap-4 items-center"},Me=["src"],Oe={class:"m-0"},Fe={class:"flex flex-col gap-2"},je={class:"flex justify-end gap-2 mt-8"},Ee=Y({__name:"EditBenefits",props:{service:{type:[],required:!0},serviceBenefit:{type:Object,required:!0}},emits:["on-close","on-save"],setup(c,{emit:r}){const l=c,y=r,x=Z(),_=D([0,1]);console.log(l.serviceBenefit);const u=D({name:l.serviceBenefit.name,service:{id:l.serviceBenefit.service.id,name:l.serviceBenefit.service.name,image_url:l.serviceBenefit.image_url},status:l.serviceBenefit.status});function b(){return B(this,null,function*(){var t;const m=q(H({},u),{_method:"PATCH",service_id:((t=u==null?void 0:u.service)==null?void 0:t.id)||null});yield x.updateServiceBenefit(l.serviceBenefit.id,m),y("on-save")})}function p(m){switch(m){case 0:return"danger";case 1:return"success"}}function v(m){switch(m){case 0:return"Tidak Tersedia";case 1:return"Tersedia"}}const h=F(()=>l.service||[]);return(m,t)=>{const T=W,w=Q,S=G;return $(),N(X,null,[i("div",Ue,[t[5]||(t[5]=i("label",{for:"name"},"Nama Benefit",-1)),a(T,{modelValue:n(u).name,"onUpdate:modelValue":t[0]||(t[0]=e=>n(u).name=e),id:"name","aria-describedby":"name-help",placeholder:"Nama Benefit"},null,8,["modelValue"])]),i("div",Ae,[t[6]||(t[6]=i("label",{for:"desc"},"Layanan",-1)),a(n(L),{modelValue:n(u).service,"onUpdate:modelValue":t[1]||(t[1]=e=>n(u).service=e),value:n(u).service,optionLabel:"name",options:n(h),placeholder:"Pilih Layanan"},{value:d(e=>[e.value!=null?($(),N("div",Le,[i("img",{src:e.value.image_url,alt:"",class:"h-4"},null,8,De),i("p",Ne,V(e.value.name),1)])):j("",!0)]),option:d(e=>[i("div",Ie,[i("img",{src:e.option.image_url,alt:"",class:"h-4"},null,8,Me),i("p",Oe,V(e.option.name),1)])]),_:1},8,["modelValue","value","options"])]),i("div",Fe,[t[7]||(t[7]=i("label",{for:"desc"},"Status",-1)),a(n(L),{modelValue:n(u).status,"onUpdate:modelValue":t[2]||(t[2]=e=>n(u).status=e),options:n(_),placeholder:"Pilih Status"},{value:d(e=>[e.value!=null?($(),J(w,{key:0,value:v(e.value),severity:p(e.value)},null,8,["value","severity"])):j("",!0)]),option:d(e=>[a(w,{value:v(e.option),severity:p(e.option)},null,8,["value","severity"])]),_:1},8,["modelValue","options"])]),i("div",je,[a(S,{type:"button",label:"Batal",text:"",severity:"secondary",onClick:t[3]||(t[3]=e=>y("on-close"))}),a(S,{type:"button",label:"Simpan",onClick:t[4]||(t[4]=e=>b())})])],64)}}}),Re={class:"flex flex-col gap-2 mb-4"},He={class:"flex flex-col gap-2 mb-4"},qe={key:0,class:"flex gap-4 items-center"},ze=["src"],Ke={class:"m-0"},Ge={class:"flex gap-4 items-center"},Qe=["src"],We={class:"m-0"},Ye={class:"flex flex-col gap-2"},Je={class:"flex justify-end gap-2 mt-8"},Xe=Y({__name:"AddBenefits",props:{service:{type:[],required:!0}},emits:["on-close","on-save"],setup(c,{emit:r}){const l=c,y=r,x=Z(),_=D([0,1]),u=D({name:"",service:null,status:null});function b(){return B(this,null,function*(){var t;const m=q(H({},u),{service_id:((t=u==null?void 0:u.service)==null?void 0:t.id)||null});yield x.addServiceBenefit(m),y("on-save")})}function p(m){switch(m){case 0:return"danger";case 1:return"success"}}function v(m){switch(m){case 0:return"Tidak Tersedia";case 1:return"Tersedia"}}const h=F(()=>l.service||[]);return(m,t)=>{const T=W,w=Q,S=G;return $(),N(X,null,[i("div",Re,[t[5]||(t[5]=i("label",{for:"name"},"Nama Benefit",-1)),a(T,{modelValue:n(u).name,"onUpdate:modelValue":t[0]||(t[0]=e=>n(u).name=e),id:"name","aria-describedby":"name-help",placeholder:"Nama Benefit"},null,8,["modelValue"])]),i("div",He,[t[6]||(t[6]=i("label",{for:"desc"},"Layanan",-1)),a(n(L),{modelValue:n(u).service,"onUpdate:modelValue":t[1]||(t[1]=e=>n(u).service=e),optionLabel:"name",options:n(h),placeholder:"Pilih Layanan"},{value:d(e=>[e.value!=null?($(),N("div",qe,[i("img",{src:e.value.image_url,alt:"",class:"h-4"},null,8,ze),i("p",Ke,V(e.value.name),1)])):j("",!0)]),option:d(e=>[i("div",Ge,[i("img",{src:e.option.image_url,alt:"",class:"h-4"},null,8,Qe),i("p",We,V(e.option.name),1)])]),_:1},8,["modelValue","options"])]),i("div",Ye,[t[7]||(t[7]=i("label",{for:"desc"},"Status",-1)),a(n(L),{modelValue:n(u).status,"onUpdate:modelValue":t[2]||(t[2]=e=>n(u).status=e),options:n(_),placeholder:"Pilih Status"},{value:d(e=>[e.value!=null?($(),J(w,{key:0,value:v(e.value),severity:p(e.value)},null,8,["value","severity"])):j("",!0)]),option:d(e=>[a(w,{value:v(e.option),severity:p(e.option)},null,8,["value","severity"])]),_:1},8,["modelValue","options"])]),i("div",Je,[a(S,{type:"button",label:"Batal",text:"",severity:"secondary",onClick:t[3]||(t[3]=e=>y("on-close"))}),a(S,{type:"button",label:"Simpan",onClick:t[4]||(t[4]=e=>b())})])],64)}}}),Ze={class:"card mt-8"},Pe={class:"flex flex-col md:flex-row justify-between gap-4"},et={class:"flex items-center gap-4 md:order-2 order-1"},tt={class:"hidden md:flex"},st={class:"flex md:hidden"},at={class:"flex flex-col items-center gap-2"},nt=["alt","src"],it={class:"flex gap-4 items-center"},St=Y({__name:"MasterBenefit",setup(c){const r=he(),l=Ce(),y=Z(),x=k(),_=k({global:{value:null,matchMode:A.CONTAINS},"service.name":{operator:O.AND,constraints:[{value:null,matchMode:A.STARTS_WITH}]},name:{operator:O.AND,constraints:[{value:null,matchMode:A.STARTS_WITH}]},updated_at:{operator:O.AND,constraints:[{value:null,matchMode:A.DATE_IS}]},status:{operator:O.OR,constraints:[{value:null,matchMode:A.EQUALS}]}}),u=k(0),b=k(null),p=D([1,0]),v=k(!1),h=k(!1);function m(g){switch(g){case 0:return"danger";case 1:return"success"}}function t(g){switch(g){case 0:return"Tidak Tersedia";case 1:return"Tersedia"}}function T(){return B(this,null,function*(){yield y.fetchServiceBenefit(),u.value+=1})}const w=F(()=>y.serviceBenefitAll||[]),S=F(()=>l.serviceAll||[]);function e(g){return new Date(g).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"})}const ne=g=>{x.value.exportCSV()},ie=g=>{r.require({target:g.currentTarget,message:"Yakin ingin menghapus service benefit ini?",icon:"pi pi-info-circle",rejectProps:{label:"Batal",severity:"secondary",outlined:!0},acceptProps:{label:"Yakin",severity:"danger"},accept:()=>B(this,null,function*(){yield y.delete(g),yield y.fetchServiceBenefit()}),reject:()=>{}})};return Be(()=>B(this,null,function*(){yield l.fetchService(1),yield y.fetchServiceBenefit()})),(g,o)=>{const le=Ve,C=G,oe=_e,E=W,re=ge,U=we,R=Q,ue=$e,de=Xe,P=Se,ce=Ee,ee=xe("tooltip");return $(),N(X,null,[a(le,{breadcrumbItems:[{label:"Master"},{label:"Benefit"}]}),i("div",Ze,[o[13]||(o[13]=i("div",{class:"font-semibold text-xl mb-4"},"Data Benefit",-1)),($(),J(ue,{ref_key:"dt",ref:x,key:n(u),value:n(w),rowGroupMode:"rowspan",groupRowsBy:"service.name",paginator:!0,rows:10,dataKey:"id",rowHover:!0,filters:n(_),"onUpdate:filters":o[3]||(o[3]=s=>K(_)?_.value=s:null),filterDisplay:"menu",loading:g.isLoading,globalFilterFields:["service.name","name","status","updated_at"],showGridlines:""},{header:d(()=>[i("div",Pe,[a(C,{type:"button",icon:"pi pi-plus",label:"Tambah Benefit",class:"md:order-1 order-2",onClick:o[0]||(o[0]=s=>h.value=!0)}),i("div",et,[i("div",tt,[a(C,{type:"button",icon:"pi pi-download",outlined:"",label:"Unduh",onClick:o[1]||(o[1]=s=>ne(s))})]),i("div",st,[a(C,{type:"button",icon:"pi pi-download",outlined:""})]),a(re,{class:"w-full md:w-auto"},{default:d(()=>[a(oe,null,{default:d(()=>o[10]||(o[10]=[i("i",{class:"pi pi-search"},null,-1)])),_:1}),a(E,{modelValue:n(_).global.value,"onUpdate:modelValue":o[2]||(o[2]=s=>n(_).global.value=s),placeholder:"Pencarian",fluid:""},null,8,["modelValue"])]),_:1})])])]),empty:d(()=>o[11]||(o[11]=[M(" Tidak ada data Benefit. ")])),loading:d(()=>o[12]||(o[12]=[M(" Memuat data Benefit. Mohon tunggu. ")])),default:d(()=>[a(U,{field:"service.name",header:"Layanan"},{body:d(({data:s})=>[i("div",at,[i("img",{alt:s.service.name,src:s.image_url,width:"32",style:{"vertical-align":"middle"}},null,8,nt),i("span",null,V(s.service.name),1)])]),filter:d(({filterModel:s})=>[a(E,{modelValue:s.value,"onUpdate:modelValue":f=>s.value=f,type:"text",placeholder:"Cari Layanan"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(U,{field:"name",header:"Benefit",class:"min-w-[15rem]"},{body:d(({data:s})=>[M(V(s.name),1)]),filter:d(({filterModel:s})=>[a(E,{modelValue:s.value,"onUpdate:modelValue":f=>s.value=f,type:"text",placeholder:"Cari Benefit"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(U,{header:"Status",field:"status",filterMenuStyle:{width:"14rem"}},{body:d(({data:s})=>[a(R,{value:t(s.status),severity:m(s.status),class:"whitespace-nowrap"},null,8,["value","severity"])]),filter:d(({filterModel:s})=>[a(n(L),{modelValue:s.value,"onUpdate:modelValue":f=>s.value=f,options:n(p),placeholder:"Pilih",showClear:""},{value:d(f=>[a(R,{value:t(f.value),severity:m(f.value)},null,8,["value","severity"])]),option:d(f=>[a(R,{value:t(f.option),severity:m(f.option)},null,8,["value","severity"])]),_:2},1032,["modelValue","onUpdate:modelValue","options"])]),_:1}),a(U,{header:"Terakhir Update",filterField:"updated_at",dataType:"date",class:"min-w-[12rem]"},{body:d(({data:s})=>[M(V(e(s.updated_at)),1)]),filter:d(({filterModel:s})=>[a(n(Te),{modelValue:s.value,"onUpdate:modelValue":f=>s.value=f,dateFormat:"mm/dd/yy",placeholder:"mm/dd/yyyy"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(U,{field:"id",header:"Action",bodyClass:"text-center",class:"min-w-[10rem]"},{body:d(({data:s})=>[i("div",it,[ae(a(C,{icon:"pi pi-pencil",severity:"info",text:"",onClick:f=>(b.value=s,v.value=!0)},null,8,["onClick"]),[[ee,"Ubah",void 0,{bottom:!0}]]),ae(a(C,{icon:"pi pi-trash",severity:"danger",text:"",onClick:f=>ie(s.id)},null,8,["onClick"]),[[ee,"Hapus",void 0,{bottom:!0}]])])]),_:1})]),_:1},8,["value","filters","loading"]))]),a(n(ke)),a(P,{visible:n(h),"onUpdate:visible":o[6]||(o[6]=s=>K(h)?h.value=s:null),maximizable:"",modal:"",header:"Tambah Benefit",class:"sm:w-1/2 w-full"},{default:d(()=>[a(de,{service:n(S)||[],onOnClose:o[4]||(o[4]=s=>h.value=!1),onOnSave:o[5]||(o[5]=s=>(h.value=!1,T()))},null,8,["service"])]),_:1},8,["visible"]),a(P,{visible:n(v),"onUpdate:visible":o[9]||(o[9]=s=>K(v)?v.value=s:null),maximizable:"",modal:"",header:"Ubah Benefit",class:"sm:w-1/2 w-full"},{default:d(()=>[a(ce,{service:n(S)||[],serviceBenefit:n(b),onOnClose:o[7]||(o[7]=s=>v.value=!1),onOnSave:o[8]||(o[8]=s=>(v.value=!1,T()))},null,8,["service","serviceBenefit"])]),_:1},8,["visible"])],64)}}});export{St as default};

import{s as ce,a as pe}from"./index-eb552809.js";import{s as me}from"./index-57f17792.js";import{s as _e,a as fe}from"./index-40010c0d.js";import{s as ve}from"./index-515e86dc.js";import{s as ye}from"./index-9b71a02b.js";import{s as he}from"./index-a435d767.js";import{s as ge,a as be}from"./index-80299c61.js";import{d as Ve,a as g,S as we,a9 as xe,r as U,V as F,P as Te,c as b,f as t,b as l,E as I,J as o,e as r,L as $,z as Se,o as m,N as v,t as i,H as N,M as B,F as ke,D as Ie,W as d,X as u,aa as De}from"./index-53479ee1.js";import{s as Ae,a as Ce}from"./index-85cc6bdd.js";import{s as Pe}from"./index-3eba9ed6.js";import{_ as Ue}from"./TopBreadcrumb-d4001bf7.js";import{s as L,a as W,b as j,c as q}from"./index-3e470de6.js";import{s as $e}from"./index-9ff7f7fc.js";import{s as z}from"./index-4606c741.js";import{s as Ne}from"./index-f67a1cdd.js";import{V as He,s as Re}from"./vendor-3f5aca2d.js";import{O as Oe}from"./order-0d088d59.js";import"./index-c4ca0144.js";import"./index-48249eea.js";import"./index-0b4e1e4d.js";import"./index-cd33ebaa.js";import"./index-fb056473.js";import"./_plugin-vue_export-helper-c27b6911.js";const Me={class:"card mt-8"},Fe={class:"flex items-center justify-end gap-4 md:order-2 order-1"},Be={class:"hidden md:flex"},Le={class:"flex md:hidden"},We={class:"text-start"},je={class:"m-0"},qe={class:"m-0 text-sm text-muted-color"},ze={class:"flex flex-col gap-4 w-[25rem]"},Ke={class:"flex gap-4 items-center"},Ee={class:"flex flex-col gap-2"},Ge={class:"flex items-center justify-start gap-4"},Qe=["src","alt"],Je={class:"flex flex-col items-start text-start gap-4 w-full"},Ye={class:"flex flex-col gap-1 w-full"},Xe={class:"m-0 font-semibold"},Ze={class:"border rounded-md"},et={class:"flex items-start justify-between gap-4"},tt={class:"m-0"},at={class:"m-0"},ot={class:"flex flex-col gap-2 p-2"},lt={class:"flex items-center justify-start gap-2"},st={class:"flex items-center justify-start gap-2"},nt={class:"m-0"},rt={class:"m-0"},it={class:"flex items-center gap-2"},dt={key:0},ut={key:1},ct={class:"flex gap-4 items-center"},Rt=Ve({__name:"OrdersProcess",setup(pt){g({});const H=g();g(),we(),xe();const R=g(),y=Oe(),O=He(),V=g("");U({vendor:null,reason:""});const K=g(0),w=g({global:{value:null,matchMode:d.CONTAINS},noInvoice:{operator:u.AND,constraints:[{value:null,matchMode:d.STARTS_WITH}]},"user.name":{operator:u.AND,constraints:[{value:null,matchMode:d.STARTS_WITH}]},"user.email":{operator:u.AND,constraints:[{value:null,matchMode:d.STARTS_WITH}]},"user.phone":{operator:u.AND,constraints:[{value:null,matchMode:d.STARTS_WITH}]},"service.name":{operator:u.AND,constraints:[{value:null,matchMode:d.STARTS_WITH}]},"properties.name":{operator:u.AND,constraints:[{value:null,matchMode:d.STARTS_WITH}]},location:{operator:u.AND,constraints:[{value:null,matchMode:d.STARTS_WITH}]},vendor:{operator:u.AND,constraints:[{value:null,matchMode:d.STARTS_WITH}]},total_fee:{operator:u.AND,constraints:[{value:null,matchMode:d.STARTS_WITH}]},date:{operator:u.AND,constraints:[{value:null,matchMode:d.DATE_IS}]},status:{operator:u.OR,constraints:[{value:null,matchMode:d.EQUALS}]},paymentMethod:{operator:u.OR,constraints:[{value:null,matchMode:d.EQUALS}]}}),E=U(["order_confirmed","in_process","on_the_way","work_started","waiting_for_payment","completed"]),G=U(["Transfer Bank","Virtual Account(VA)","GoPay","OVO"]);function D(n){switch(n){case"order_confirmed":return"contrast";case"in_process":return"warn";case"on_the_way":return"info";case"work_started":return"help";case"waiting_for_payment":return"secondary";case"completed":return"success";default:return"default"}}function A(n){switch(n){case"order_confirmed":return"Pesanan Terkonfirmasi";case"in_process":return"Pesanan Diproses";case"on_the_way":return"Menuju Lokasi";case"work_started":return"Sedang Dikerjakan";case"waiting_for_payment":return"Menunggu Pembayaran";case"completed":return"Selesai";default:return"-"}}function Q(n){switch(n){case 0:return"Tidak Butuh Tangga";case 1:return"Butuh Tangga";default:return null}}F(()=>O.vendors.map(n=>({id:n.id,code:n.id,name:n.name,location:n.address,date:n.created_at,status:n.deleted_at,city:n.city,services:n.vendor_service})));const J=F(()=>y.allOrder||[]);Te(async()=>{var a;const n=localStorage.getItem("AuthStore");if(n){const _=JSON.parse(n);V.value=(a=_==null?void 0:_.users)==null?void 0:a.city_id}await y.fetchOrder("monitoring",V.value),await O.fetchVendor()});function Y(n){return new Date(n).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"})}const X=n=>{H.value.toggle(n)},Z=n=>{R.value.exportCSV()};async function ee(n,a,_,c){let C={_method:"PATCH",qty:a.qty,price:a.price,order_service_id:c};await y.updateOrder(C,_),n(),await y.fetchOrder("monitoring",V.value)}async function te(n,a,_){let c={_method:"PATCH",fee_properties:a};await y.updateOrder(c,_),n(),await y.fetchOrder("monitoring",V.value)}return(n,a)=>{const _=Ue,c=_e,C=Ae,h=Pe,ae=Ce,p=pe,x=De,oe=ge,le=be,se=he,T=ye,M=ve,ne=fe,P=me,re=ce,ie=Se("tooltip");return m(),b($,null,[t(_,{breadcrumbItems:[{label:"Pesanan"}]}),l("div",Me,[a[17]||(a[17]=l("div",{class:"font-semibold text-xl mb-4"},"Data Pesanan Diproses",-1)),(m(),I(re,{ref_key:"dt",ref:R,key:K.value,value:r(J),paginator:!0,rows:10,dataKey:"id",filters:w.value,"onUpdate:filters":a[2]||(a[2]=e=>w.value=e),filterDisplay:"menu",loading:r(y).isLoading,globalFilterFields:["noInvoice","user.name","user.email","user.phone","items","location","service.name","properties.name","total_fee","vendor","date","status"],showGridlines:"",scrollable:""},{header:o(()=>[l("div",Fe,[l("div",Be,[t(c,{type:"button",icon:"pi pi-download",outlined:"",label:"Unduh",onClick:a[0]||(a[0]=e=>Z(e))})]),l("div",Le,[t(c,{type:"button",icon:"pi pi-download",outlined:""})]),t(ae,{class:"w-full md:w-auto"},{default:o(()=>[t(C,null,{default:o(()=>a[3]||(a[3]=[l("i",{class:"pi pi-search"},null,-1)])),_:1}),t(h,{modelValue:w.value.global.value,"onUpdate:modelValue":a[1]||(a[1]=e=>w.value.global.value=e),placeholder:"Pencarian",fluid:""},null,8,["modelValue"])]),_:1})])]),empty:o(()=>a[4]||(a[4]=[v(" No order found. ")])),loading:o(()=>a[5]||(a[5]=[v(" Loading order data. Please wait. ")])),default:o(()=>[t(p,{sortable:"",field:"noInvoice",header:"Invoice",class:"min-w-[15rem]"},{body:o(({data:e})=>[v(i(e.invoice),1)]),filter:o(({filterModel:e})=>[t(h,{modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,type:"text",placeholder:"Cari Invoice"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(p,{sortable:"",field:"user.name",header:"Pelanggan",class:"min-w-[15rem]"},{body:o(({data:e})=>[l("div",We,[l("h6",je,i(e.user.name),1),l("p",qe,i(e.user.email),1),l("p",{class:"m-0 text-sm text-primary cursor-pointer hover:text-primary-300 transition-all max-w-fit",onClick:X},[v(i(e.user.phone),1),a[6]||(a[6]=l("i",{class:"pi pi-angle-down ml-2",style:{"font-size":"0.8rem"}},null,-1))]),t(r(Re),{ref_key:"opPhone",ref:H},{default:o(()=>[l("div",ze,[l("div",null,[a[7]||(a[7]=l("h6",{class:"mb-0"},"Opsi Nomor Telepon",-1)),t(x)]),t(le,null,{default:o(()=>[t(h,{value:e.user.phone,readonly:"",class:"w-[25rem]"},null,8,["value"]),t(oe,null,{default:o(()=>[t(c,{icon:"pi pi-phone"})]),_:1})]),_:2},1024),l("div",Ke,[t(x),a[8]||(a[8]=l("p",{class:"m-0 text-center text-muted-color text-sm"},"Atau",-1)),t(x)]),l("div",Ee,[a[9]||(a[9]=l("label",{for:"message"},"Kirim Pesan",-1)),t(se,{id:"message"})]),t(c,{icon:"pi pi-send",label:"Kirim Pesan",iconPos:"right"})])]),_:2},1536)])]),filter:o(({filterModel:e})=>[t(h,{modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,type:"text",placeholder:"Cari Pelanggan"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(p,{sortable:"",header:"Lokasi",filterField:"location",class:"min-w-[24rem]"},{body:o(({data:e})=>[v(i(e.location),1)]),filter:o(({filterModel:e})=>[t(h,{modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,type:"text",placeholder:"Cari Kota"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(p,{sortable:"",header:"Layanan",filterField:"service.name",class:"min-w-[40rem]"},{body:o(({data:e})=>[t(r(L),{value:"0"},{default:o(()=>[t(r(W),{value:"1",class:"accordion-table"},{default:o(()=>[t(r(j),null,{default:o(()=>[l("div",Ge,[e.service.full_image_url?(m(),b("img",{key:0,src:e.service.full_image_url,alt:e.service.name,class:"h-6 text-sm font-normal"},null,8,Qe)):N("",!0),l("span",null,i(e.service.name),1)])]),_:2},1024),t(r(q),null,{default:o(()=>[t(x),t(r(L),{value:"0"},{default:o(()=>[(m(!0),b($,null,B(e.problems,(s,S)=>(m(),I(r(W),{key:s.name,value:S},{default:o(()=>[t(r(j),{class:ke({"accordion-subheader":e.service.image_url})},{default:o(()=>[v(i(s.name),1)]),_:2},1032,["class"]),t(r(q),{class:"accordion-content"},{default:o(()=>[l("div",Je,[(m(!0),b($,null,B(s.sub_problem,(f,de)=>(m(),b("div",{key:de,class:"w-full"},[l("div",Ye,[l("p",Xe,"• Kategori: "+i(f.name),1),l("div",Ze,[t(M,{class:"inplace-display-full"},{display:o(()=>[l("div",et,[l("div",null,[l("p",tt,"QTY: "+i(f.qty),1),l("p",at,"Harga: Rp"+i(n.formatPrice(f.price)),1)]),a[10]||(a[10]=l("i",{class:"pi pi-pencil ml-2"},null,-1))])]),content:o(({closeCallback:ue})=>[l("div",ot,[l("div",lt,[a[13]||(a[13]=l("p",{class:"m-0"},"QTY: ",-1)),t(T,{modelValue:f.qty,"onUpdate:modelValue":k=>f.qty=k,inputId:"horizontal-buttons",showButtons:"",buttonLayout:"horizontal",min:0,max:99,inputClass:" text-center border-l border-l-red-500 border-r border-r-green-500 bg-transparent max-w-[4rem]",incrementButtonClass:"border-green-500",decrementButtonClass:"border-red-500",small:""},{incrementbuttonicon:o(()=>a[11]||(a[11]=[l("span",{class:"pi pi-plus"},null,-1)])),decrementbuttonicon:o(()=>a[12]||(a[12]=[l("span",{class:"pi pi-minus"},null,-1)])),_:2},1032,["modelValue","onUpdate:modelValue"])]),l("div",st,[a[14]||(a[14]=l("p",{class:"m-0"},"Harga: ",-1)),t(T,{modelValue:f.price,"onUpdate:modelValue":k=>f.price=k,type:"text",placeholder:"Masukkan Harga",inputId:"currency-indonesia",mode:"currency",currency:"IDR",locale:"id-ID",minFractionDigits:0},null,8,["modelValue","onUpdate:modelValue"])]),t(c,{label:"Simpan",icon:"pi pi-check",outlined:"",severity:"success",class:"max-w-fit",onClick:k=>ee(ue,f,e.id,f.id)},null,8,["onClick"])])]),_:2},1024)])])]))),128))])]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1}),t(p,{field:"properties.name",header:"Jenis Property",class:"min-w-[15rem]",sortable:""},{body:o(({data:e})=>[l("div",null,[l("p",nt,i(e.properties.name),1),e.isLadderRequired?(m(),I(ne,{key:0,value:Q(e.isLadderRequired)??"",size:"small",class:"mb-2"},null,8,["value"])):N("",!0),t(M,{class:"inplace-custom-display"},{display:o(()=>[l("p",rt,[v("Rp"+i(n.formatPrice(e.fee_properties)),1),a[15]||(a[15]=l("i",{class:"pi pi-pencil ml-2"},null,-1))])]),content:o(({closeCallback:s})=>[l("div",it,[t(T,{modelValue:e.fee_properties,"onUpdate:modelValue":S=>e.fee_properties=S,type:"text",placeholder:"Cari Harga",inputId:"currency-indonesia",mode:"currency",currency:"IDR",locale:"id-ID",minFractionDigits:0},null,8,["modelValue","onUpdate:modelValue"]),t(c,{icon:"pi pi-check",outlined:"",severity:"success",onClick:S=>te(s,e.fee_properties,e.id)},null,8,["onClick"])])]),_:2},1024)])]),filter:o(({filterModel:e})=>[t(h,{modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,type:"text",placeholder:"Cari Property"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(p,{sortable:"",field:"total_fee",header:"Total Harga",class:"min-w-[15rem]"},{body:o(({data:e})=>[e.total_fee?(m(),b("span",dt,"Rp"+i(n.formatPrice(e.total_fee)),1)):(m(),b("span",ut,"Harga belum ditentukan"))]),filter:o(({filterModel:e})=>[t(T,{modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,type:"text",placeholder:"Cari Harga",inputId:"currency-indonesia",mode:"currency",currency:"IDR",locale:"id-ID",minFractionDigits:0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(p,{sortable:"",header:"Status",field:"status",filterMenuStyle:{width:"18rem"},class:"min-w-[20rem]"},{body:o(({data:e})=>[t(P,{value:A(e.status),severity:D(e.status),class:"whitespace-nowrap"},null,8,["value","severity"])]),filter:o(({filterModel:e})=>[t(r(z),{modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,options:E,placeholder:"Pilih",showClear:""},{value:o(s=>[s.value!=null?(m(),I(P,{key:0,value:A(s.value),severity:D(s.value)},null,8,["value","severity"])):N("",!0)]),option:o(s=>[t(P,{value:A(s.option),severity:D(s.option)},null,8,["value","severity"])]),_:2},1032,["modelValue","onUpdate:modelValue","options"])]),_:1}),t(p,{sortable:"",field:"paymentMethod",header:"Metode Pembayaran",class:"min-w-[15rem]"},{body:o(({data:e})=>a[16]||(a[16]=[v(" Bank Transfer ")])),filter:o(({filterModel:e})=>[t(r(z),{modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,options:G,placeholder:"Pilih",showClear:""},null,8,["modelValue","onUpdate:modelValue","options"])]),_:1}),t(p,{sortable:"",field:"vendor",header:"Vendor Pilihan",class:"min-w-[15rem]"},{body:o(({data:e})=>{var s;return[l("span",null,i((s=e==null?void 0:e.vendor_id)==null?void 0:s.name),1)]}),filter:o(({filterModel:e})=>[t(h,{modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,type:"text",placeholder:"Cari Vendor"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(p,{sortable:"",header:"Tanggal Pesanan",filterField:"date",dataType:"date",class:"min-w-[20rem]"},{body:o(({data:e})=>[v(i(Y(e.created_at)),1)]),filter:o(({filterModel:e})=>[t(r($e),{modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,dateFormat:"mm/dd/yy",placeholder:"mm/dd/yyyy"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(p,{sortable:"",field:"id",header:"Action",bodyClass:"text-center",class:"min-w-[10rem]"},{body:o(({data:e})=>[l("div",ct,[Ie(t(c,{icon:"pi pi-external-link",severity:"info",text:"",as:"router-link",to:{name:"order-detail",params:{id:e.id}}},null,8,["to"]),[[ie,"Detail Pesanan",void 0,{bottom:!0}]])])]),_:1})]),_:1},8,["value","filters","loading"]))]),t(r(Ne))],64)}}});export{Rt as default};

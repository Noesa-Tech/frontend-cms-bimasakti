import{s as me,a as _e}from"./index-7e1b4203.js";import{s as fe}from"./index-e73c6f95.js";import{s as ve,a as ye}from"./index-5d8e68ae.js";import{s as ge}from"./index-e2e35b2c.js";import{s as he}from"./index-5c342af9.js";import{s as be}from"./index-d2658649.js";import{s as Ve,a as xe}from"./index-4e895b32.js";import{d as we,a as b,r as B,V as Te,P as ke,c as y,f as t,b as a,E as D,J as o,e as r,L as A,z as Se,o as u,N as g,t as i,H as $,M as N,F as Ie,D as Ce,W as c,X as p,ah as De}from"./index-80696e42.js";import{s as Ae,a as Pe}from"./index-6e8aba70.js";import{s as Ue}from"./index-81bd3c8b.js";import{_ as $e}from"./TopBreadcrumb-bd1bee55.js";import{s as L,a as W,b as j,c as z}from"./index-46ddf547.js";import{s as Ne}from"./index-bdbec257.js";import{s as q}from"./index-b2d9bdf1.js";import{s as He}from"./index-9bc907b6.js";import{s as K}from"./index-cff56d8c.js";import{O as Oe}from"./order-bf2ae8e7.js";import"./index-bbd5c4c8.js";import"./index-9d928228.js";import"./index-bffc3597.js";import"./index-9108591b.js";import"./index-94e1ca5c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-60496ef7.js";const Re={class:"card mt-8"},Me={class:"flex items-center justify-end gap-4 md:order-2 order-1"},Fe={class:"hidden md:flex"},Be={class:"flex md:hidden"},Le={class:"text-start"},We={class:"m-0"},je={class:"m-0 text-sm text-muted-color"},ze={class:"flex flex-col gap-4 w-[25rem]"},qe={class:"flex gap-4 items-center"},Ke={class:"flex flex-col gap-2"},Ee={class:"flex items-center justify-start gap-4"},Ge=["src","alt"],Qe={class:"flex flex-col items-start text-start gap-4 w-full"},Je={class:"flex flex-col gap-1 w-full"},Ye={class:"m-0 font-semibold"},Xe={class:"border rounded-md"},Ze={class:"flex items-start justify-between gap-4"},et={class:"m-0"},tt={class:"m-0"},lt={class:"flex flex-col gap-2 p-2"},at={class:"flex items-center justify-start gap-2"},ot={class:"flex items-center justify-start gap-2"},st={class:"m-0"},nt={class:"m-0"},rt={class:"flex items-center gap-2"},it={key:0},dt={key:1},ut={class:"flex flex-col gap-4"},ct={class:"list-none p-0 m-0 flex flex-col"},pt={class:"flex gap-4 items-center"},Mt=we({__name:"OrdersProcess",setup(mt){const P=b(),H=b(),O=b(),v=Oe(),x=b("");b([]);const E=b(0),w=b({global:{value:null,matchMode:c.CONTAINS},noInvoice:{operator:p.AND,constraints:[{value:null,matchMode:c.STARTS_WITH}]},"user.name":{operator:p.AND,constraints:[{value:null,matchMode:c.STARTS_WITH}]},"user.email":{operator:p.AND,constraints:[{value:null,matchMode:c.STARTS_WITH}]},"user.phone":{operator:p.AND,constraints:[{value:null,matchMode:c.STARTS_WITH}]},"service.name":{operator:p.AND,constraints:[{value:null,matchMode:c.STARTS_WITH}]},"properties.name":{operator:p.AND,constraints:[{value:null,matchMode:c.STARTS_WITH}]},location:{operator:p.AND,constraints:[{value:null,matchMode:c.STARTS_WITH}]},vendor:{operator:p.AND,constraints:[{value:null,matchMode:c.STARTS_WITH}]},total_fee:{operator:p.AND,constraints:[{value:null,matchMode:c.STARTS_WITH}]},date:{operator:p.AND,constraints:[{value:null,matchMode:c.DATE_IS}]},status:{operator:p.OR,constraints:[{value:null,matchMode:c.EQUALS}]},paymentMethod:{operator:p.OR,constraints:[{value:null,matchMode:c.EQUALS}]}}),R=B(["order_confirmed","in_process","on_the_way","work_started","waiting_for_payment","completed"]),G=B(["Transfer Bank","Virtual Account(VA)","GoPay","OVO"]);function T(n){switch(n){case"order_confirmed":return"contrast";case"in_process":return"warn";case"on_the_way":return"info";case"work_started":return"help";case"waiting_for_payment":return"secondary";case"completed":return"success";default:return"default"}}function k(n){switch(n){case"order_confirmed":return"Pesanan Terkonfirmasi";case"in_process":return"Pesanan Diproses";case"on_the_way":return"Menuju Lokasi";case"work_started":return"Sedang Dikerjakan";case"waiting_for_payment":return"Menunggu Pembayaran";case"completed":return"Selesai";default:return"-"}}function Q(n){switch(n){case 0:return"Tidak Butuh Tangga";case 1:return"Butuh Tangga";default:return null}}const J=Te(()=>v.allOrder||[]);ke(async()=>{var l;const n=localStorage.getItem("AuthStore");if(n){const m=JSON.parse(n);x.value=(l=m==null?void 0:m.users)==null?void 0:l.city_id}await v.fetchOrder("monitoring",x.value)});function Y(n){return new Date(n).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"})}const X=n=>{H.value.toggle(n)},Z=n=>{O.value.exportCSV()};async function ee(n,l,m,d){let U={_method:"PATCH",qty:l.qty,price:l.price,order_service_id:d};await v.updateOrder(U,m),n(),await v.fetchOrder("monitoring",x.value)}async function te(n,l,m){let d={_method:"PATCH",fee_properties:l};await v.updateOrder(d,m),n(),await v.fetchOrder("monitoring",x.value)}const le=n=>{P.value.toggle(n)};async function ae(n,l){let m={_method:"PATCH",status:n};await v.updateOrder(m,l),P.value.hide(),await v.fetchOrder("monitoring",x.value)}return(n,l)=>{const m=$e,d=ve,U=Ae,h=Ue,oe=Pe,_=_e,S=De,se=Ve,ne=xe,re=be,I=he,M=ge,ie=ye,F=fe,de=me,ue=Se("tooltip");return u(),y(A,null,[t(m,{breadcrumbItems:[{label:"Pesanan"}]}),a("div",Re,[l[18]||(l[18]=a("div",{class:"font-semibold text-xl mb-4"},"Data Pesanan Diproses",-1)),(u(),D(de,{ref_key:"dt",ref:O,key:E.value,value:r(J),paginator:!0,rows:10,dataKey:"id",filters:w.value,"onUpdate:filters":l[2]||(l[2]=e=>w.value=e),filterDisplay:"menu",loading:r(v).isLoading,globalFilterFields:["noInvoice","user.name","user.email","user.phone","items","location","service.name","properties.name","total_fee","vendor","date","status"],showGridlines:"",scrollable:""},{header:o(()=>[a("div",Me,[a("div",Fe,[t(d,{type:"button",icon:"pi pi-download",outlined:"",label:"Unduh",onClick:l[0]||(l[0]=e=>Z(e))})]),a("div",Be,[t(d,{type:"button",icon:"pi pi-download",outlined:""})]),t(oe,{class:"w-full md:w-auto"},{default:o(()=>[t(U,null,{default:o(()=>l[3]||(l[3]=[a("i",{class:"pi pi-search"},null,-1)])),_:1}),t(h,{modelValue:w.value.global.value,"onUpdate:modelValue":l[1]||(l[1]=e=>w.value.global.value=e),placeholder:"Pencarian",fluid:""},null,8,["modelValue"])]),_:1})])]),empty:o(()=>l[4]||(l[4]=[g(" No order found. ")])),loading:o(()=>l[5]||(l[5]=[g(" Loading order data. Please wait. ")])),default:o(()=>[t(_,{sortable:"",field:"noInvoice",header:"Invoice",class:"min-w-[15rem]"},{body:o(({data:e})=>[g(i(e.invoice),1)]),filter:o(({filterModel:e})=>[t(h,{modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,type:"text",placeholder:"Cari Invoice"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(_,{sortable:"",field:"user.name",header:"Pelanggan",class:"min-w-[15rem]"},{body:o(({data:e})=>[a("div",Le,[a("h6",We,i(e.user.name),1),a("p",je,i(e.user.email),1),a("p",{class:"m-0 text-sm text-primary cursor-pointer hover:text-primary-300 transition-all max-w-fit",onClick:X},[g(i(e.user.phone),1),l[6]||(l[6]=a("i",{class:"pi pi-angle-down ml-2",style:{"font-size":"0.8rem"}},null,-1))]),t(r(K),{ref_key:"opPhone",ref:H},{default:o(()=>[a("div",ze,[a("div",null,[l[7]||(l[7]=a("h6",{class:"mb-0"},"Opsi Nomor Telepon",-1)),t(S)]),t(ne,null,{default:o(()=>[t(h,{value:e.user.phone,readonly:"",class:"w-[25rem]"},null,8,["value"]),t(se,null,{default:o(()=>[t(d,{icon:"pi pi-phone"})]),_:1})]),_:2},1024),a("div",qe,[t(S),l[8]||(l[8]=a("p",{class:"m-0 text-center text-muted-color text-sm"},"Atau",-1)),t(S)]),a("div",Ke,[l[9]||(l[9]=a("label",{for:"message"},"Kirim Pesan",-1)),t(re,{id:"message"})]),t(d,{icon:"pi pi-send",label:"Kirim Pesan",iconPos:"right"})])]),_:2},1536)])]),filter:o(({filterModel:e})=>[t(h,{modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,type:"text",placeholder:"Cari Pelanggan"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(_,{sortable:"",header:"Lokasi",filterField:"location",class:"min-w-[24rem]"},{body:o(({data:e})=>[g(i(e.location),1)]),filter:o(({filterModel:e})=>[t(h,{modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,type:"text",placeholder:"Cari Kota"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(_,{sortable:"",header:"Layanan",filterField:"service.name",class:"min-w-[40rem]"},{body:o(({data:e})=>[t(r(L),{value:"0"},{default:o(()=>[t(r(W),{value:"1",class:"accordion-table"},{default:o(()=>[t(r(j),null,{default:o(()=>[a("div",Ee,[e.service.full_image_url?(u(),y("img",{key:0,src:e.service.full_image_url,alt:e.service.name,class:"h-6 text-sm font-normal"},null,8,Ge)):$("",!0),a("span",null,i(e.service.name),1)])]),_:2},1024),t(r(z),null,{default:o(()=>[t(S),t(r(L),{value:"0"},{default:o(()=>[(u(!0),y(A,null,N(e.problems,(s,V)=>(u(),D(r(W),{key:s.name,value:V},{default:o(()=>[t(r(j),{class:Ie({"accordion-subheader":e.service.image_url})},{default:o(()=>[g(i(s.name),1)]),_:2},1032,["class"]),t(r(z),{class:"accordion-content"},{default:o(()=>[a("div",Qe,[(u(!0),y(A,null,N(s.sub_problem,(f,ce)=>(u(),y("div",{key:ce,class:"w-full"},[a("div",Je,[a("p",Ye,"• Kategori: "+i(f.name),1),a("div",Xe,[t(M,{class:"inplace-display-full"},{display:o(()=>[a("div",Ze,[a("div",null,[a("p",et,"QTY: "+i(f.qty),1),a("p",tt,"Harga: Rp"+i(n.formatPrice(f.price)),1)]),l[10]||(l[10]=a("i",{class:"pi pi-pencil ml-2"},null,-1))])]),content:o(({closeCallback:pe})=>[a("div",lt,[a("div",at,[l[13]||(l[13]=a("p",{class:"m-0"},"QTY: ",-1)),t(I,{modelValue:f.qty,"onUpdate:modelValue":C=>f.qty=C,inputId:"horizontal-buttons",showButtons:"",buttonLayout:"horizontal",min:0,max:99,inputClass:" text-center border-l border-l-red-500 border-r border-r-green-500 bg-transparent max-w-[4rem]",incrementButtonClass:"border-green-500",decrementButtonClass:"border-red-500",small:""},{incrementbuttonicon:o(()=>l[11]||(l[11]=[a("span",{class:"pi pi-plus"},null,-1)])),decrementbuttonicon:o(()=>l[12]||(l[12]=[a("span",{class:"pi pi-minus"},null,-1)])),_:2},1032,["modelValue","onUpdate:modelValue"])]),a("div",ot,[l[14]||(l[14]=a("p",{class:"m-0"},"Harga: ",-1)),t(I,{modelValue:f.price,"onUpdate:modelValue":C=>f.price=C,type:"text",placeholder:"Masukkan Harga",inputId:"currency-indonesia",mode:"currency",currency:"IDR",locale:"id-ID",minFractionDigits:0},null,8,["modelValue","onUpdate:modelValue"])]),t(d,{label:"Simpan",icon:"pi pi-check",outlined:"",severity:"success",class:"max-w-fit",onClick:C=>ee(pe,f,e.id,f.id)},null,8,["onClick"])])]),_:2},1024)])])]))),128))])]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1}),t(_,{field:"properties.name",header:"Jenis Property",class:"min-w-[15rem]",sortable:""},{body:o(({data:e})=>[a("div",null,[a("p",st,i(e.properties.name),1),e.isLadderRequired?(u(),D(ie,{key:0,value:Q(e.isLadderRequired)??"",size:"small",class:"mb-2"},null,8,["value"])):$("",!0),t(M,{class:"inplace-custom-display"},{display:o(()=>[a("p",nt,[g("Rp"+i(n.formatPrice(e.fee_properties)),1),l[15]||(l[15]=a("i",{class:"pi pi-pencil ml-2"},null,-1))])]),content:o(({closeCallback:s})=>[a("div",rt,[t(I,{modelValue:e.fee_properties,"onUpdate:modelValue":V=>e.fee_properties=V,type:"text",placeholder:"Cari Harga",inputId:"currency-indonesia",mode:"currency",currency:"IDR",locale:"id-ID",minFractionDigits:0},null,8,["modelValue","onUpdate:modelValue"]),t(d,{icon:"pi pi-check",outlined:"",severity:"success",onClick:V=>te(s,e.fee_properties,e.id)},null,8,["onClick"])])]),_:2},1024)])]),filter:o(({filterModel:e})=>[t(h,{modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,type:"text",placeholder:"Cari Property"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(_,{sortable:"",field:"total_fee",header:"Total Harga",class:"min-w-[15rem]"},{body:o(({data:e})=>[e.total_fee?(u(),y("span",it,"Rp"+i(n.formatPrice(e.total_fee)),1)):(u(),y("span",dt,"Harga belum ditentukan"))]),filter:o(({filterModel:e})=>[t(I,{modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,type:"text",placeholder:"Cari Harga",inputId:"currency-indonesia",mode:"currency",currency:"IDR",locale:"id-ID",minFractionDigits:0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(_,{sortable:"",header:"Status",field:"status",filterMenuStyle:{width:"18rem"},class:"min-w-[20rem]"},{body:o(({data:e})=>[t(d,{label:k(e.status),severity:T(e.status),onClick:le,size:"small",icon:"pi pi-chevron-down",iconPos:"right"},null,8,["label","severity"]),t(r(K),{ref_key:"opStatus",ref:P},{default:o(()=>[a("div",ut,[a("div",null,[l[16]||(l[16]=a("span",{class:"font-medium block mb-2"},"Ubah Status",-1)),a("ul",ct,[(u(!0),y(A,null,N(R,(s,V)=>(u(),y("li",{key:V,class:"flex items-center gap-2 px-2 py-3"},[t(d,{label:k(s),severity:T(s),size:"small",onClick:f=>ae(s,e.id)},null,8,["label","severity","onClick"])]))),128))])])])]),_:2},1536)]),filter:o(({filterModel:e})=>[t(r(q),{modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,options:R,placeholder:"Pilih",showClear:""},{value:o(s=>[s.value!=null?(u(),D(F,{key:0,value:k(s.value),severity:T(s.value)},null,8,["value","severity"])):$("",!0)]),option:o(s=>[t(F,{value:k(s.option),severity:T(s.option)},null,8,["value","severity"])]),_:2},1032,["modelValue","onUpdate:modelValue","options"])]),_:1}),t(_,{sortable:"",field:"paymentMethod",header:"Metode Pembayaran",class:"min-w-[15rem]"},{body:o(({data:e})=>l[17]||(l[17]=[g(" Bank Transfer ")])),filter:o(({filterModel:e})=>[t(r(q),{modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,options:G,placeholder:"Pilih",showClear:""},null,8,["modelValue","onUpdate:modelValue","options"])]),_:1}),t(_,{sortable:"",field:"vendor",header:"Vendor Pilihan",class:"min-w-[15rem]"},{body:o(({data:e})=>{var s;return[a("span",null,i((s=e==null?void 0:e.vendor_id)==null?void 0:s.name),1)]}),filter:o(({filterModel:e})=>[t(h,{modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,type:"text",placeholder:"Cari Vendor"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(_,{sortable:"",header:"Tanggal Pesanan",filterField:"date",dataType:"date",class:"min-w-[20rem]"},{body:o(({data:e})=>[g(i(Y(e.created_at)),1)]),filter:o(({filterModel:e})=>[t(r(Ne),{modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,dateFormat:"mm/dd/yy",placeholder:"mm/dd/yyyy"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(_,{sortable:"",field:"id",header:"Action",bodyClass:"text-center",class:"min-w-[10rem]"},{body:o(({data:e})=>[a("div",pt,[Ce(t(d,{icon:"pi pi-external-link",severity:"info",text:"",as:"router-link",to:{name:"order-detail",params:{id:e.id}}},null,8,["to"]),[[ue,"Detail Pesanan",void 0,{bottom:!0}]])])]),_:1})]),_:1},8,["value","filters","loading"]))]),t(r(He))],64)}}});export{Mt as default};

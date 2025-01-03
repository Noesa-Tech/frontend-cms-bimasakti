import{s as A}from"./index-0bcdbf95.js";import{s as S}from"./index-ddd7b525.js";import{s as T}from"./index-facb98bd.js";import{s as H}from"./index-c7c4c86d.js";import{s as P}from"./index-6ec9d6d7.js";import{p as N,v as C,q as U,c as w,a as t,t as o,z as s,x as z,M as _,N as B,h as i,O as u,w as r,D,o as V}from"./index-e1929d3d.js";import"./index-11ea55b2.js";import"./index-5b391e5b.js";const L={class:"card flex flex-col gap-4 h-full max-w-screen-md mx-auto min-h-[100vh]"},Q={class:"flex items-start justify-between"},E={class:"flex flex-col items-end text-right"},J={class:"text-primary m-0"},O={class:"flex flex-col md:gap-4 gap-1"},Y={class:"flex flex-col gap-6"},F={class:"m-0 text-primary"},G={class:"flex flex-col gap-4 mt-1"},K={class:"mb-1 font-normal text-muted-color"},M={class:"flex gap-2"},W=["onClick"],X={class:"inline-flex gap-2"},Z={class:"inline-flex flex-auto items-center gap-2"},ee={class:"w-4/12 flex justify-center"},te=["onClick"],le={class:"inline-flex gap-2"},se={class:"inline-flex flex-auto items-center gap-2"},ie={class:"m-0 md:p-0 py-1 font-normal w-4/12 text-end"},oe={class:"flex flex-col gap-2 px-4"},ne={class:"flex flex-col gap-2"},ae={class:"flex justify-between gap-2"},re={class:"m-0 text-end"},de={class:"flex justify-between gap-2"},pe={class:"m-0 text-end"},ue={class:"flex justify-between items-center gap-2"},ce={class:"m-0"},me={class:"font-semibold"},fe={class:"m-0 text-end inline-flex flex-auto gap-2"},be={class:"inline-flex flex-auto items-center gap-2"},ye={class:"flex justify-between items-center gap-2"},ve={class:"m-0"},xe={class:"font-semibold"},ge={class:"m-0 text-end inline-flex flex-auto gap-2"},ke={class:"inline-flex flex-auto items-center gap-2"},Ce={class:"flex justify-between gap-2"},we={class:"m-0 text-end"},Ve={class:"text-muted-color block"},Ie={class:"text-muted-color text-sm block mb-8"},Pe={class:"flex justify-end gap-2"},De={class:"text-muted-color block"},he={class:"text-muted-color text-sm block mb-8"},Re={class:"flex justify-end gap-2"},_e={class:"text-muted-color block mb-8"},Ue={class:"flex justify-end gap-2"},Be={class:"text-muted-color block mb-8"},qe={class:"flex justify-end gap-2"},Qe=N({__name:"VendorOrder",setup($e){const b=C(!1),m=U({label:"",category:"",price:0}),y=C(!1),f=U({label:"",category:"",qty:0}),v=C(!1),x=C(!1),n=C({id:1001,noInvoice:"INV-0938483-20241505",name:"Hari Nurah Nahrani",email:"hari@gmail.com",phone:"6282117688166",useLadder:!0,ladderPrice:5e4,property:{id:1,label:"Rumah Pribadi",price:5e4},vendor:{id:1e3,name:"PT. Air Conditioner",services:[{id:1,title:"Service AC"},{id:2,title:"Home Cleaning"}],location:"Jakarta Timur",date:"2015-09-13",status:1,code:"XDJEIS"},location:{country:"Jawa Barat",city:"Kota Bandung",distric:"Ciheulang",village:"Sekeloa Selatan",address:"Jl. Sekeloa II, No. 50, RT/11 RW/11"},items:[{id:1,label:"Service Rutin",status:!0,isDefault:!0,price:5e4,category:[{label:"AC 0.5 pk",qty:3,isDefault:!0,price:5e4},{label:"AC 1 pk",desc:"lorem ipsum dolor sit amet",qty:4,isDefault:!0,price:5e4},{label:"AC 1.5 pk",desc:"lorem ipsum dolor sit amet",qty:5,isDefault:!0,price:5e4}]},{id:2,label:"AC tidak Dingin",status:!0,isDefault:!0,price:1e5,category:[{label:"AC 0.5 pk",qty:2,isDefault:!0,price:5e4}]}],date:"2015-09-14",status:2}),q=(a,e)=>{m.label=a.label,m.category=e.label,m.price=e.price,b.value=!0},$=(a,e)=>{f.label=a.label,f.category=e.label,f.qty=e.qty,y.value=!0};return(a,e)=>{const c=H,d=T,h=S,I=A;return V(),w(_,null,[t("div",L,[t("div",Q,[e[21]||(e[21]=t("img",{src:"https://www.bimasakti.homes/_next/image?url=%2Flogo.png&w=1080&q=75",alt:"Logo",class:"h-[32px]"},null,-1)),t("div",E,[e[20]||(e[20]=t("h5",{class:"m-0"},"INVOICE",-1)),t("p",J,o(s(n).noInvoice),1)])]),t("div",O,[e[39]||(e[39]=z('<div class="h-1 bg-surface-500 w-full"></div><div class="flex gap-2 px-2"><p class="font-medium m-0 w-4/12">HARGA SATUAN</p><p class="font-medium m-0 w-4/12 text-center">QTY</p><p class="font-medium m-0 w-4/12 text-end">TOTAL HARGA</p></div><div class="h-1 bg-surface-500 w-full"></div>',3)),t("div",Y,[(V(!0),w(_,null,B(s(n).items,(l,g)=>(V(),w("div",{class:"px-2",key:g},[t("h6",F,o(l.label),1),t("div",G,[(V(!0),w(_,null,B(l.category,(p,j)=>(V(),w("div",{class:"pl-2",key:j},[t("p",K,"• "+o(p.label),1),t("div",M,[t("p",{class:"m-0 font-normal w-4/12 text-start inline-flex justify-start gap-2 md:hidden hover:bg-surface-100 transition-all rounded-md p-1 cursor-pointer",onClick:k=>q(l,p)},[u(" Rp"+o(a.formatPrice(p.price)),1),e[22]||(e[22]=t("i",{class:"pi pi-pencil",style:{"font-size":"0.8rem"}},null,-1))],8,W),i(s(P),{class:"m-0 p-0 font-normal w-4/12 text-start inplace-custom-display md:block hidden"},{display:r(()=>[t("p",X,[u("Rp"+o(a.formatPrice(p.price))+" ",1),e[23]||(e[23]=t("i",{class:"pi pi-pencil"},null,-1))])]),content:r(({closeCallback:k})=>[t("span",Z,[i(c,{modelValue:p.price,"onUpdate:modelValue":R=>p.price=R,autofocus:"",inputId:"locale-indonesia",mode:"currency",currency:"IDR",locale:"id-ID"},null,8,["modelValue","onUpdate:modelValue"]),i(d,{icon:"pi pi-check",outlined:"",severity:"success",class:"m-0 p-0",onClick:k},null,8,["onClick"])])]),_:2},1024),t("div",ee,[t("p",{class:"text-center inline-flex justify-start gap-2 md:hidden hover:bg-surface-100 transition-all rounded-md p-1 cursor-pointer",onClick:k=>$(l,p)},[u(" x("+o(a.formatPrice(p.qty))+")",1),e[24]||(e[24]=t("i",{class:"pi pi-pencil",style:{"font-size":"0.8rem"}},null,-1))],8,te),i(s(P),{class:"inplace-custom-display md:block hidden"},{display:r(()=>[t("p",le,[u("x("+o(a.formatPrice(p.qty))+") ",1),e[25]||(e[25]=t("i",{class:"pi pi-pencil"},null,-1))])]),content:r(({closeCallback:k})=>[t("span",se,[i(c,{modelValue:p.qty,"onUpdate:modelValue":R=>p.qty=R,inputId:"horizontal-buttons",showButtons:"",buttonLayout:"horizontal",size:"small",min:0,max:99,inputClass:"max-w-12 text-center border-l border-l-red-500 border-r border-r-green-500 bg-transparent",incrementButtonClass:"border-green-500",decrementButtonClass:"border-red-500"},{incrementbuttonicon:r(()=>e[26]||(e[26]=[t("span",{class:"pi pi-plus"},null,-1)])),decrementbuttonicon:r(()=>e[27]||(e[27]=[t("span",{class:"pi pi-minus"},null,-1)])),_:2},1032,["modelValue","onUpdate:modelValue"]),i(d,{icon:"pi pi-check",outlined:"",severity:"success",class:"m-0 p-0",onClick:k},null,8,["onClick"])])]),_:2},1024)]),t("p",ie,"Rp"+o(a.formatPrice(p.price*p.qty)),1)])]))),128))])]))),128))]),i(h),t("div",oe,[t("div",ne,[t("div",ae,[e[28]||(e[28]=t("p",{class:"m-0"},"Subtotal Harga Barang",-1)),t("p",re,"Rp"+o(a.formatPrice(2e5)),1)]),t("div",de,[e[29]||(e[29]=t("p",{class:"m-0"},"Diskon",-1)),t("p",pe,"Rp"+o(a.formatPrice(0)),1)]),t("div",ue,[t("p",ce,[e[30]||(e[30]=u("Jenis Property")),e[31]||(e[31]=t("br",null,null,-1)),t("span",me,"("+o(s(n).property.label)+")",1)]),t("p",{class:"text-end inline-flex justify-end gap-2 md:hidden hover:bg-surface-100 transition-all rounded-md p-1 cursor-pointer",onClick:e[0]||(e[0]=l=>v.value=!0)},[u(" Rp("+o(a.formatPrice(s(n).property.price))+")",1),e[32]||(e[32]=t("i",{class:"pi pi-pencil",style:{"font-size":"0.8rem"}},null,-1))]),i(s(P),{class:"m-0 p-0 font-normal w-4/12 text-end inplace-custom-display md:block hidden"},{display:r(()=>[t("p",fe,[u("Rp"+o(a.formatPrice(s(n).property.price)),1),e[33]||(e[33]=t("i",{class:"pi pi-pencil"},null,-1))])]),content:r(({closeCallback:l})=>[t("span",be,[i(c,{modelValue:s(n).property.price,"onUpdate:modelValue":e[1]||(e[1]=g=>s(n).property.price=g),autofocus:"",inputId:"locale-indonesia",mode:"currency",currency:"IDR",locale:"id-ID"},null,8,["modelValue"]),i(d,{icon:"pi pi-check",outlined:"",severity:"success",class:"m-0 p-0",onClick:l},null,8,["onClick"])])]),_:1})]),t("div",ye,[t("p",ve,[e[34]||(e[34]=u("Butuh Tangga")),e[35]||(e[35]=t("br",null,null,-1)),t("span",xe,"("+o(s(n).useLadder?"Butuh":"Tidak Butuh")+")",1)]),t("p",{class:"text-center inline-flex justify-start gap-2 md:hidden hover:bg-surface-100 transition-all rounded-md p-1 cursor-pointer",onClick:e[2]||(e[2]=l=>x.value=!0)},[u(" Rp("+o(a.formatPrice(s(n).ladderPrice))+")",1),e[36]||(e[36]=t("i",{class:"pi pi-pencil",style:{"font-size":"0.8rem"}},null,-1))]),i(s(P),{class:"m-0 p-0 font-normal w-4/12 text-end inplace-custom-display md:block hidden"},{display:r(()=>[t("p",ge,[u("Rp"+o(a.formatPrice(s(n).ladderPrice)),1),e[37]||(e[37]=t("i",{class:"pi pi-pencil"},null,-1))])]),content:r(({closeCallback:l})=>[t("span",ke,[i(c,{modelValue:s(n).ladderPrice,"onUpdate:modelValue":e[3]||(e[3]=g=>s(n).ladderPrice=g),autofocus:"",inputId:"locale-indonesia",mode:"currency",currency:"IDR",locale:"id-ID"},null,8,["modelValue"]),i(d,{icon:"pi pi-check",outlined:"",severity:"success",class:"m-0 p-0",onClick:l},null,8,["onClick"])])]),_:1})]),i(h),t("div",Ce,[e[38]||(e[38]=t("h6",{class:"m-0"},"Total Biaya",-1)),t("h6",we,"Rp"+o(a.formatPrice(25e4)),1)])])]),i(h),i(d,{label:"Hubungi Admin",severity:"success",icon:"pi pi-whatsapp",class:"max-w-fit mx-auto"})])]),i(I,{visible:s(b),"onUpdate:visible":e[7]||(e[7]=l=>D(b)?b.value=l:null),position:"bottom",modal:"",header:"Ubah Harga",style:{width:"25rem"}},{default:r(()=>[t("span",Ve,"Harga untuk "+o(s(m).label)+".",1),t("span",Ie,"("+o(s(m).category)+").",1),i(c,{modelValue:s(m).price,"onUpdate:modelValue":e[4]||(e[4]=l=>s(m).price=l),autofocus:"",inputId:"locale-indonesia",mode:"currency",currency:"IDR",locale:"id-ID",fluid:"",class:"mb-8"},null,8,["modelValue"]),t("div",Pe,[i(d,{type:"button",label:"Cancel",severity:"secondary",onClick:e[5]||(e[5]=l=>b.value=!1)}),i(d,{type:"button",label:"Save",onClick:e[6]||(e[6]=l=>b.value=!1)})])]),_:1},8,["visible"]),i(I,{visible:s(y),"onUpdate:visible":e[11]||(e[11]=l=>D(y)?y.value=l:null),position:"bottom",modal:"",header:"Ubah QTY",style:{width:"25rem"}},{default:r(()=>[t("span",De,"QTY untuk "+o(s(f).label)+".",1),t("span",he,"("+o(s(f).category)+").",1),i(c,{modelValue:s(f).qty,"onUpdate:modelValue":e[8]||(e[8]=l=>s(f).qty=l),inputId:"horizontal-buttons",showButtons:"",buttonLayout:"horizontal",min:0,max:99,inputClass:" text-center border-l border-l-red-500 border-r border-r-green-500 bg-transparent",incrementButtonClass:"border-green-500",decrementButtonClass:"border-red-500",class:"mb-8",fluid:""},{incrementbuttonicon:r(()=>e[40]||(e[40]=[t("span",{class:"pi pi-plus"},null,-1)])),decrementbuttonicon:r(()=>e[41]||(e[41]=[t("span",{class:"pi pi-minus"},null,-1)])),_:1},8,["modelValue"]),t("div",Re,[i(d,{type:"button",label:"Cancel",severity:"secondary",onClick:e[9]||(e[9]=l=>y.value=!1)}),i(d,{type:"button",label:"Save",onClick:e[10]||(e[10]=l=>y.value=!1)})])]),_:1},8,["visible"]),i(I,{visible:s(v),"onUpdate:visible":e[15]||(e[15]=l=>D(v)?v.value=l:null),position:"bottom",modal:"",header:"Ubah Harga Property",style:{width:"25rem"}},{default:r(()=>[t("span",_e,"Harga untuk property "+o(s(n).property.label)+".",1),i(c,{modelValue:s(n).property.price,"onUpdate:modelValue":e[12]||(e[12]=l=>s(n).property.price=l),autofocus:"",inputId:"locale-indonesia",mode:"currency",currency:"IDR",locale:"id-ID",fluid:"",class:"mb-8"},null,8,["modelValue"]),t("div",Ue,[i(d,{type:"button",label:"Cancel",severity:"secondary",onClick:e[13]||(e[13]=l=>v.value=!1)}),i(d,{type:"button",label:"Save",onClick:e[14]||(e[14]=l=>v.value=!1)})])]),_:1},8,["visible"]),i(I,{visible:s(x),"onUpdate:visible":e[19]||(e[19]=l=>D(x)?x.value=l:null),position:"bottom",modal:"",header:"Ubah Harga Kebutuhan Tangga",style:{width:"25rem"}},{default:r(()=>[t("span",Be,"Harga untuk membutuhkan tangga di "+o(s(n).property.label)+".",1),i(c,{modelValue:s(n).ladderPrice,"onUpdate:modelValue":e[16]||(e[16]=l=>s(n).ladderPrice=l),autofocus:"",inputId:"locale-indonesia",mode:"currency",currency:"IDR",locale:"id-ID",fluid:"",class:"mb-8"},null,8,["modelValue"]),t("div",qe,[i(d,{type:"button",label:"Cancel",severity:"secondary",onClick:e[17]||(e[17]=l=>x.value=!1)}),i(d,{type:"button",label:"Save",onClick:e[18]||(e[18]=l=>x.value=!1)})])]),_:1},8,["visible"])],64)}}});export{Qe as default};
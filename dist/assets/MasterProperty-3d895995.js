import{s as I}from"./index-deef9e19.js";import{s as N}from"./index-b44fceca.js";import{s as F}from"./index-17ecf855.js";import{P as U}from"./property-097178eb.js";import{p as L,v as y,q as R,o as g,c as x,a as e,x as s,h as a,n as A,N as V,W as Y,S as K,V as W,w as $,O as J,z as h,K as X,P as Z,t as S,L as B}from"./index-f6b298fd.js";import{s as ee}from"./index-4941a5df.js";import{a as oe,s as te}from"./index-a595e5d6.js";import{s as le}from"./index-15d5cfbd.js";import{s as se}from"./index-1dd55c84.js";import{_ as ne}from"./TopBreadcrumb-a6563245.js";import{s as ae}from"./index-ae6d498b.js";import{S as ie}from"./setting-65ed56cf.js";import"./index-d1d004c3.js";import"./index-e219d200.js";import"./index-6e668620.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-d19d791a.js";const re={class:"flex flex-col items-start gap-2 mb-4"},de={class:"flex flex-col gap-2 items-start"},pe={key:0,class:"relative"},ce=["src"],ue={class:"absolute right-0 top-0"},me={class:"flex flex-col gap-2 mb-4"},fe={class:"flex flex-col gap-2 mb-4"},ve={class:"flex justify-end gap-2 mt-8"},be=L({__name:"EditProperty",props:{property:{type:Object,required:!0}},emits:["on-close","on-save"],setup(k,{emit:w}){const u=k,b=w,d=U(),r=y(null),f=y(u.property.icon_url),v=R({propertyId:u.property.id,name:u.property.name,fee:u.property.fee});async function _(){const c={...v,_method:"PATCH",...r.value!==null&&{icon:r.value}};await d.updateProperty(c),b("on-save")}function l(c){const t=c.files[0];r.value=t;const p=new FileReader;p.onload=async m=>{var i;typeof((i=m.target)==null?void 0:i.result)=="string"&&(f.value=m.target.result)},p.readAsDataURL(t)}return(c,t)=>{const p=F,m=N,i=I;return g(),x(V,null,[e("div",re,[t[5]||(t[5]=e("label",{for:"name"},"Tambah Gambar",-1)),e("div",de,[s(f)?(g(),x("div",pe,[e("img",{src:s(f),alt:"Image",class:"shadow-md rounded-xl w-full sm:w-64"},null,8,ce),e("div",ue,[a(p,{icon:"pi pi-times",rounded:"",outlined:"",onClick:t[0]||(t[0]=o=>f.value="")})])])):A("",!0),a(m,{mode:"basic",onSelect:l,customUpload:"",severity:"secondary",class:"p-button-outlined",maxFileSize:2e6,chooseLabel:s(f)?"Ubah Foto":"Pilih Foto",chooseIcon:"pi pi-image"},null,8,["chooseLabel"])])]),e("div",me,[t[6]||(t[6]=e("label",{for:"name"},"Nama Properti",-1)),a(i,{modelValue:s(v).name,"onUpdate:modelValue":t[1]||(t[1]=o=>s(v).name=o),id:"name-add-properties","aria-describedby":"name-help",placeholder:"Nama Properti"},null,8,["modelValue"])]),e("div",fe,[t[7]||(t[7]=e("label",{for:"name"},"Fee",-1)),a(i,{modelValue:s(v).fee,"onUpdate:modelValue":t[2]||(t[2]=o=>s(v).fee=o),id:"fee-add-properties","aria-describedby":"name-help",placeholder:"Fee Properti"},null,8,["modelValue"])]),e("div",ve,[a(p,{type:"button",label:"Batal",text:"",severity:"secondary",onClick:t[3]||(t[3]=o=>b("on-close"))}),a(p,{type:"button",loading:s(d).isLoading,disabled:c.$isQueryInvalid(s(v)),label:"Simpan",onClick:t[4]||(t[4]=o=>_())},null,8,["loading","disabled"])])],64)}}}),ye={class:"flex flex-col items-start gap-2 mb-4"},_e={class:"flex flex-col gap-2 items-start"},ge={key:0,class:"relative"},xe=["src"],$e={class:"absolute right-0 top-0"},we={class:"flex flex-col gap-2 mb-4"},Pe={class:"flex flex-col gap-2 mb-4"},Ce={class:"flex justify-end gap-2 mt-8"},he=L({__name:"AddProperty",emits:["on-close","on-save"],setup(k,{emit:w}){const u=w,b=U(),d=y(""),r=R({icon:"",name:"",fee:""});async function f(){await b.addProperty(r),u("on-save")}function v(_){const l=_.files[0];r.icon=l;const c=new FileReader;c.onload=async t=>{var p;typeof((p=t.target)==null?void 0:p.result)=="string"&&(d.value=t.target.result)},c.readAsDataURL(l)}return(_,l)=>{const c=F,t=N,p=I;return g(),x(V,null,[e("div",ye,[l[5]||(l[5]=e("label",{for:"name"},"Tambah Gambar",-1)),e("div",_e,[s(d)?(g(),x("div",ge,[e("img",{src:s(d),alt:"Image",class:"shadow-md rounded-xl w-full sm:w-64"},null,8,xe),e("div",$e,[a(c,{icon:"pi pi-times",rounded:"",outlined:"",onClick:l[0]||(l[0]=m=>d.value="")})])])):A("",!0),a(t,{mode:"basic",onSelect:v,customUpload:"",severity:"secondary",class:"p-button-outlined",maxFileSize:2e6,chooseLabel:s(d)?"Ubah Foto":"Pilih Foto",chooseIcon:"pi pi-image"},null,8,["chooseLabel"])])]),e("div",we,[l[6]||(l[6]=e("label",{for:"name"},"Nama Properti",-1)),a(p,{modelValue:s(r).name,"onUpdate:modelValue":l[1]||(l[1]=m=>s(r).name=m),id:"name-add-properties","aria-describedby":"name-help",placeholder:"Nama Properti"},null,8,["modelValue"])]),e("div",Pe,[l[7]||(l[7]=e("label",{for:"name"},"Fee",-1)),a(p,{modelValue:s(r).fee,"onUpdate:modelValue":l[2]||(l[2]=m=>s(r).fee=m),id:"fee-add-properties","aria-describedby":"name-help",placeholder:"Fee Properti"},null,8,["modelValue"])]),e("div",Ce,[a(c,{type:"button",label:"Batal",text:"",severity:"secondary",onClick:l[3]||(l[3]=m=>u("on-close"))}),a(c,{type:"button",loading:s(b).isLoading,disabled:_.$isQueryInvalid(s(r)),label:"Simpan",onClick:l[4]||(l[4]=m=>f())},null,8,["loading","disabled"])])],64)}}}),Ve={class:"card mt-8"},ke={class:"flex flex-col"},Se={class:"m-0"},Ie={class:"inline-flex items-center gap-2 w-full mt-1"},Fe={class:"card mt-8"},Ue={class:"flex flex-col md:flex-row items-center justify-between gap-4 mb-4"},Le={class:"flex flex-col md:flex-row items-center gap-4 md:order-2 order-1"},Te={class:"grid grid-cols-12 gap-4"},De={class:"mb-4"},Be=["src","alt"],Ne={class:"mt-0 font-semibold text-xl"},Re={class:"mt-0"},Ae={class:"flex items-center justify-end"},to=L({__name:"MasterProperty",setup(k){const w=Y(),u=U(),b=ie(),d=y(!1),r=y(!1),f=y(""),v=y([]),_=y(null),l=y(0),c=i=>{w.require({target:i.currentTarget,message:"Yakin ingin menghapus properti ini?",icon:"pi pi-info-circle",rejectProps:{label:"Batal",severity:"secondary",outlined:!0},acceptProps:{label:"Yakin",severity:"danger"},accept:async()=>{await u.delete(i),await t()}})};async function t(){await u.fetchProperties(),v.value=u.properties}async function p(){const i=await b.fetchDetail(1);l.value=parseInt(i==null?void 0:i.data.value)}async function m(i){const o={_method:"PATCH",value:l.value};await b.update(o,1),i(),await p()}return K(async()=>{await p(),await t()}),W(()=>f.value,i=>{v.value=u.properties.filter(o=>o.name.toLowerCase().includes(i.toLowerCase()))},{immediate:!0}),(i,o)=>{const j=ne,O=se,P=F,q=le,z=te,H=I,E=oe,G=he,T=ee,M=be,D=X("tooltip");return g(),x(V,null,[a(j,{breadcrumbItems:[{label:"Properti"}]}),e("div",Ve,[e("div",ke,[o[10]||(o[10]=e("label",{for:"price-ladder",class:"font-semibold"},"Harga Tangga",-1)),a(q,null,{display:$(()=>[e("p",Se,[Z("Rp"+S(i.formatPrice(s(l))),1),o[9]||(o[9]=e("i",{class:"pi pi-pencil ml-2"},null,-1))])]),content:$(({closeCallback:n})=>[e("span",Ie,[a(O,{modelValue:s(l),"onUpdate:modelValue":o[0]||(o[0]=C=>h(l)?l.value=C:null),type:"text",placeholder:"Cari Harga",inputId:"currency-indonesia",mode:"currency",currency:"IDR",locale:"id-ID",minFractionDigits:0},null,8,["modelValue"]),a(P,{loading:s(b).isLoading,icon:"pi pi-check",label:"Simpan",severity:"success",onClick:C=>m(n)},null,8,["loading","onClick"])])]),_:1})])]),e("div",Fe,[e("div",Ue,[o[12]||(o[12]=e("h5",{class:"m-0"},"Data Properti",-1)),e("div",Le,[a(P,{type:"button",icon:"pi pi-plus",label:"Tambah Properti",class:"md:order-1 order-2 w-full md:w-auto",onClick:o[1]||(o[1]=n=>r.value=!0)}),a(E,{class:"w-full md:w-auto"},{default:$(()=>[a(z,null,{default:$(()=>o[11]||(o[11]=[e("i",{class:"pi pi-search"},null,-1)])),_:1}),a(H,{modelValue:s(f),"onUpdate:modelValue":o[2]||(o[2]=n=>h(f)?f.value=n:null),placeholder:"Pencarian",fluid:""},null,8,["modelValue"])]),_:1})])]),e("div",Te,[(g(!0),x(V,null,J(s(v),(n,C)=>(g(),x("div",{key:C,class:"md:col-span-3 sm:col-span-4 col-span-6 border border-surface-200 dark:border-surface-700 rounded p-4"},[e("div",De,[e("img",{src:n==null?void 0:n.icon_url,alt:n==null?void 0:n.name,class:"h-32 w-auto mx-auto"},null,8,Be)]),e("div",Ne,S(n==null?void 0:n.name),1),e("div",Re,"Rp"+S(i.formatPrice(n==null?void 0:n.fee)),1),e("div",Ae,[e("span",null,[B(a(P,{icon:"pi pi-pencil",severity:"info",outlined:"",onClick:Q=>(_.value=n,d.value=!0)},null,8,["onClick"]),[[D,"Ubah",void 0,{bottom:!0}]]),B(a(P,{icon:"pi pi-trash",loading:s(u).isLoading,severity:"danger",class:"ml-2",onClick:Q=>c(n.id)},null,8,["loading","onClick"]),[[D,"Hapus",void 0,{bottom:!0}]])])])]))),128))])]),a(s(ae)),a(T,{visible:s(r),"onUpdate:visible":o[5]||(o[5]=n=>h(r)?r.value=n:null),maximizable:"",modal:"",header:"Tambah Properti",class:"sm:w-1/2 w-full"},{default:$(()=>[a(G,{onOnClose:o[3]||(o[3]=n=>r.value=!1),onOnSave:o[4]||(o[4]=n=>(r.value=!1,t()))})]),_:1},8,["visible"]),a(T,{visible:s(d),"onUpdate:visible":o[8]||(o[8]=n=>h(d)?d.value=n:null),maximizable:"",modal:"",header:"Ubah Property",class:"sm:w-1/2 w-full"},{default:$(()=>[a(M,{property:s(_),onOnClose:o[6]||(o[6]=n=>d.value=!1),onOnSave:o[7]||(o[7]=n=>(d.value=!1,t()))},null,8,["property"])]),_:1},8,["visible"])],64)}}});export{to as default};

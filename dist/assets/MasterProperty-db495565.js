var ee=Object.defineProperty,te=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable;var A=(p,i,o)=>i in p?ee(p,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):p[i]=o,L=(p,i)=>{for(var o in i||(i={}))se.call(i,o)&&A(p,o,i[o]);if(N)for(var o of N(i))le.call(i,o)&&A(p,o,i[o]);return p},R=(p,i)=>te(p,oe(i));var x=(p,i,o)=>new Promise((g,d)=>{var c=m=>{try{u(o.next(m))}catch(s){d(s)}},b=m=>{try{u(o.throw(m))}catch(s){d(s)}},u=m=>m.done?g(m.value):Promise.resolve(m.value).then(c,b);u((o=o.apply(p,i)).next())});import{s as F}from"./index-c4c5cc4e.js";import{s as z}from"./index-d3e3e5d4.js";import{s as I}from"./index-cd00fc9b.js";import{P as U}from"./property-4970537a.js";import{p as T,v as $,q as H,o as w,c as h,a as t,x as a,h as n,n as E,N as V,a0 as ae,a1 as j,a2 as ne,W as ie,a3 as re,S as de,V as pe,w as P,O as ce,z as S,K as ue,P as me,t as O,L as q}from"./index-d437d7fc.js";import{s as fe}from"./index-8b0b01d4.js";import{a as ve,s as be}from"./index-b3eca18e.js";import{s as ye}from"./index-811184e1.js";import{s as ge}from"./index-25520a8f.js";import{_ as _e}from"./TopBreadcrumb-4eb25591.js";import{s as xe}from"./index-1200aa3b.js";import"./index-9e92f3fc.js";import"./index-656c219f.js";import"./index-95cf565f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-acdcfdc4.js";const $e={class:"flex flex-col items-start gap-2 mb-4"},we={class:"flex flex-col gap-2 items-start"},he={key:0,class:"relative"},Pe=["src"],Ce={class:"absolute right-0 top-0"},ke={class:"flex flex-col gap-2 mb-4"},Se={class:"flex flex-col gap-2 mb-4"},Ve={class:"flex justify-end gap-2 mt-8"},Le=T({__name:"EditProperty",props:{property:{type:Object,required:!0}},emits:["on-close","on-save"],setup(p,{emit:i}){const o=p,g=i,d=U(),c=$(null),b=$(o.property.icon_url),u=H({propertyId:o.property.id,name:o.property.name,fee:o.property.fee});function m(){return x(this,null,function*(){const y=L(R(L({},u),{_method:"PATCH"}),c.value!==null&&{icon:c.value});yield d.updateProperty(y),g("on-save")})}function s(y){const l=y.files[0];c.value=l;const v=new FileReader;v.onload=_=>x(this,null,function*(){var f;typeof((f=_.target)==null?void 0:f.result)=="string"&&(b.value=_.target.result)}),v.readAsDataURL(l)}return(y,l)=>{const v=I,_=z,f=F;return w(),h(V,null,[t("div",$e,[l[5]||(l[5]=t("label",{for:"name"},"Tambah Gambar",-1)),t("div",we,[a(b)?(w(),h("div",he,[t("img",{src:a(b),alt:"Image",class:"shadow-md rounded-xl w-full sm:w-64"},null,8,Pe),t("div",Ce,[n(v,{icon:"pi pi-times",rounded:"",outlined:"",onClick:l[0]||(l[0]=e=>b.value="")})])])):E("",!0),n(_,{mode:"basic",onSelect:s,customUpload:"",severity:"secondary",class:"p-button-outlined",maxFileSize:2e6,chooseLabel:a(b)?"Ubah Foto":"Pilih Foto",chooseIcon:"pi pi-image"},null,8,["chooseLabel"])])]),t("div",ke,[l[6]||(l[6]=t("label",{for:"name"},"Nama Properti",-1)),n(f,{modelValue:a(u).name,"onUpdate:modelValue":l[1]||(l[1]=e=>a(u).name=e),id:"name-add-properties","aria-describedby":"name-help",placeholder:"Nama Properti"},null,8,["modelValue"])]),t("div",Se,[l[7]||(l[7]=t("label",{for:"name"},"Fee",-1)),n(f,{modelValue:a(u).fee,"onUpdate:modelValue":l[2]||(l[2]=e=>a(u).fee=e),id:"fee-add-properties","aria-describedby":"name-help",placeholder:"Fee Properti"},null,8,["modelValue"])]),t("div",Ve,[n(v,{type:"button",label:"Batal",text:"",severity:"secondary",onClick:l[3]||(l[3]=e=>g("on-close"))}),n(v,{type:"button",loading:a(d).isLoading,disabled:y.$isQueryInvalid(a(u)),label:"Simpan",onClick:l[4]||(l[4]=e=>m())},null,8,["loading","disabled"])])],64)}}}),Fe={class:"flex flex-col items-start gap-2 mb-4"},Ie={class:"flex flex-col gap-2 items-start"},Ue={key:0,class:"relative"},Te=["src"],De={class:"absolute right-0 top-0"},Be={class:"flex flex-col gap-2 mb-4"},Ne={class:"flex flex-col gap-2 mb-4"},Ae={class:"flex justify-end gap-2 mt-8"},Re=T({__name:"AddProperty",emits:["on-close","on-save"],setup(p,{emit:i}){const o=i,g=U(),d=$(""),c=H({icon:"",name:"",fee:""});function b(){return x(this,null,function*(){yield g.addProperty(c),o("on-save")})}function u(m){const s=m.files[0];c.icon=s;const y=new FileReader;y.onload=l=>x(this,null,function*(){var v;typeof((v=l.target)==null?void 0:v.result)=="string"&&(d.value=l.target.result)}),y.readAsDataURL(s)}return(m,s)=>{const y=I,l=z,v=F;return w(),h(V,null,[t("div",Fe,[s[5]||(s[5]=t("label",{for:"name"},"Tambah Gambar",-1)),t("div",Ie,[a(d)?(w(),h("div",Ue,[t("img",{src:a(d),alt:"Image",class:"shadow-md rounded-xl w-full sm:w-64"},null,8,Te),t("div",De,[n(y,{icon:"pi pi-times",rounded:"",outlined:"",onClick:s[0]||(s[0]=_=>d.value="")})])])):E("",!0),n(l,{mode:"basic",onSelect:u,customUpload:"",severity:"secondary",class:"p-button-outlined",maxFileSize:2e6,chooseLabel:a(d)?"Ubah Foto":"Pilih Foto",chooseIcon:"pi pi-image"},null,8,["chooseLabel"])])]),t("div",Be,[s[6]||(s[6]=t("label",{for:"name"},"Nama Properti",-1)),n(v,{modelValue:a(c).name,"onUpdate:modelValue":s[1]||(s[1]=_=>a(c).name=_),id:"name-add-properties","aria-describedby":"name-help",placeholder:"Nama Properti"},null,8,["modelValue"])]),t("div",Ne,[s[7]||(s[7]=t("label",{for:"name"},"Fee",-1)),n(v,{modelValue:a(c).fee,"onUpdate:modelValue":s[2]||(s[2]=_=>a(c).fee=_),id:"fee-add-properties","aria-describedby":"name-help",placeholder:"Fee Properti"},null,8,["modelValue"])]),t("div",Ae,[n(y,{type:"button",label:"Batal",text:"",severity:"secondary",onClick:s[3]||(s[3]=_=>o("on-close"))}),n(y,{type:"button",loading:a(g).isLoading,disabled:m.$isQueryInvalid(a(c)),label:"Simpan",onClick:s[4]||(s[4]=_=>b())},null,8,["loading","disabled"])])],64)}}}),je=ae("SettingStore",{state:()=>({isLoading:!1,setting:[],detail:{}}),actions:{fetchDetail(p){return x(this,null,function*(){this.isLoading=!0;try{const i=yield j.get(`/auth/setting/${p}`);return this.detail=i.data,i}catch(i){}finally{this.isLoading=!1}})},update(p,i){return x(this,null,function*(){this.isLoading=!0;try{const o=new FormData;for(const d in p)o.append(d,p[d]);const g=yield j.post(`/auth/setting/${i}`,o,{headers:{"Content-Type":"multipart/form-data"}});return ne("success",g.message)}catch(o){}finally{this.isLoading=!1}})}}}),Oe={class:"card mt-8"},qe={class:"flex flex-col"},ze={class:"m-0"},He={class:"inline-flex items-center gap-2 w-full mt-1"},Ee={class:"card mt-8"},Ge={class:"flex flex-col md:flex-row items-center justify-between gap-4 mb-4"},Me={class:"flex flex-col md:flex-row items-center gap-4 md:order-2 order-1"},Qe={class:"grid grid-cols-12 gap-4"},Ye={class:"mb-4"},Ke=["src","alt"],We={class:"mt-0 font-semibold text-xl"},Je={class:"flex items-center justify-end"},vt=T({__name:"MasterProperty",setup(p){const i=ie();re();const o=U(),g=je(),d=$(!1),c=$(!1),b=$(""),u=$([]),m=$(null),s=$(0),y=f=>{i.require({target:f.currentTarget,message:"Yakin ingin menghapus properti ini?",icon:"pi pi-info-circle",rejectProps:{label:"Batal",severity:"secondary",outlined:!0},acceptProps:{label:"Yakin",severity:"danger"},accept:()=>x(this,null,function*(){yield o.delete(f),yield l()})})};function l(){return x(this,null,function*(){yield o.fetchProperties(),u.value=o.properties})}function v(){return x(this,null,function*(){const f=yield g.fetchDetail(1);s.value=parseInt(f.data.value)})}function _(f){return x(this,null,function*(){const e={_method:"PATCH",value:s.value};yield g.update(e,1),f(),yield v()})}return de(()=>x(this,null,function*(){yield v(),yield l()})),pe(()=>b.value,f=>{u.value=o.properties.filter(e=>e.name.toLowerCase().includes(f.toLowerCase()))},{immediate:!0}),(f,e)=>{const G=_e,M=ge,C=I,Q=ye,Y=be,K=F,W=ve,J=Re,D=fe,X=Le,B=ue("tooltip");return w(),h(V,null,[n(G,{breadcrumbItems:[{label:"Properti"}]}),t("div",Oe,[t("div",qe,[e[10]||(e[10]=t("label",{for:"price-ladder",class:"font-semibold"},"Harga Tangga",-1)),n(Q,null,{display:P(()=>[t("p",ze,[me("Rp"+O(f.formatPrice(a(s))),1),e[9]||(e[9]=t("i",{class:"pi pi-pencil ml-2"},null,-1))])]),content:P(({closeCallback:r})=>[t("span",He,[n(M,{modelValue:a(s),"onUpdate:modelValue":e[0]||(e[0]=k=>S(s)?s.value=k:null),type:"text",placeholder:"Cari Harga",inputId:"currency-indonesia",mode:"currency",currency:"IDR",locale:"id-ID",minFractionDigits:0},null,8,["modelValue"]),n(C,{loading:a(g).isLoading,icon:"pi pi-check",label:"Simpan",severity:"success",onClick:k=>_(r)},null,8,["loading","onClick"])])]),_:1})])]),t("div",Ee,[t("div",Ge,[e[12]||(e[12]=t("h5",{class:"m-0"},"Data Properti",-1)),t("div",Me,[n(C,{type:"button",icon:"pi pi-plus",label:"Tambah Properti",class:"md:order-1 order-2 w-full md:w-auto",onClick:e[1]||(e[1]=r=>c.value=!0)}),n(W,{class:"w-full md:w-auto"},{default:P(()=>[n(Y,null,{default:P(()=>e[11]||(e[11]=[t("i",{class:"pi pi-search"},null,-1)])),_:1}),n(K,{modelValue:a(b),"onUpdate:modelValue":e[2]||(e[2]=r=>S(b)?b.value=r:null),placeholder:"Pencarian",fluid:""},null,8,["modelValue"])]),_:1})])]),t("div",Qe,[(w(!0),h(V,null,ce(a(u),(r,k)=>(w(),h("div",{key:k,class:"md:col-span-3 sm:col-span-4 col-span-6 border border-surface-200 dark:border-surface-700 rounded p-4"},[t("div",Ye,[t("img",{src:r==null?void 0:r.icon_url,alt:r==null?void 0:r.name,class:"mx-auto"},null,8,Ke)]),t("div",We,O(r==null?void 0:r.name),1),t("div",Je,[t("span",null,[q(n(C,{icon:"pi pi-pencil",severity:"info",outlined:"",onClick:Z=>(m.value=r,d.value=!0)},null,8,["onClick"]),[[B,"Ubah",void 0,{bottom:!0}]]),q(n(C,{icon:"pi pi-trash",loading:a(o).isLoading,severity:"danger",class:"ml-2",onClick:Z=>y(r.id)},null,8,["loading","onClick"]),[[B,"Hapus",void 0,{bottom:!0}]])])])]))),128))])]),n(a(xe)),n(D,{visible:a(c),"onUpdate:visible":e[5]||(e[5]=r=>S(c)?c.value=r:null),maximizable:"",modal:"",header:"Tambah Properti",class:"sm:w-1/2 w-full"},{default:P(()=>[n(J,{onOnClose:e[3]||(e[3]=r=>c.value=!1),onOnSave:e[4]||(e[4]=r=>(c.value=!1,l()))})]),_:1},8,["visible"]),n(D,{visible:a(d),"onUpdate:visible":e[8]||(e[8]=r=>S(d)?d.value=r:null),maximizable:"",modal:"",header:"Ubah Property",class:"sm:w-1/2 w-full"},{default:P(()=>[n(X,{property:a(m),onOnClose:e[6]||(e[6]=r=>d.value=!1),onOnSave:e[7]||(e[7]=r=>(d.value=!1,l()))},null,8,["property"])]),_:1},8,["visible"])],64)}}});export{vt as default};

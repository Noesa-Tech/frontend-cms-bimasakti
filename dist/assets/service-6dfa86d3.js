var r=(t,e,s)=>new Promise((a,h)=>{var d=i=>{try{n(s.next(i))}catch(o){h(o)}},f=i=>{try{n(s.throw(i))}catch(o){h(o)}},n=i=>i.done?a(i.value):Promise.resolve(i.value).then(d,f);n((s=s.apply(t,e)).next())});import{a6 as u,a7 as c,a8 as l}from"./index-e1929d3d.js";const g=u("ServiceStore",{state:()=>({isLoading:!1,serviceAll:[],problem:{}}),actions:{fetchService(t=""){return r(this,null,function*(){this.isLoading=!0;try{const e=yield c.get(`/auth/services?status=${t}`);this.serviceAll=e.data}catch(e){}finally{this.isLoading=!1}})},fetchProblem(t){return r(this,null,function*(){this.isLoading=!0;try{const e=yield c.get(`/services-problem/${t}`);return this.problem=e.data,e}catch(e){}finally{this.isLoading=!1}})},addService(t){return r(this,null,function*(){this.isLoading=!0;const e=new FormData;for(const s in t)e.append(s,t[s]);try{const s=yield c.post("/auth/services",e,{headers:{"Content-Type":"multipart/form-data"}});l("success",s.message)}catch(s){}finally{this.isLoading=!1}})},updateServcice(t,e){return r(this,null,function*(){this.isLoading=!0;const s=new FormData;for(const a in e)s.append(a,e[a]);try{const a=yield c.post(`/auth/services/${t}`,s,{headers:{"Content-Type":"multipart/form-data"}});l("success",a.message)}catch(a){}finally{this.isLoading=!1}})},delete(t){return r(this,null,function*(){this.isLoading=!0;try{const e=yield c.delete(`/auth/services/${t}`);l("success",e.message)}catch(e){}finally{this.isLoading=!1}})}}});export{g as S};
import{a0 as o,a1 as r,a2 as i}from"./index-f6b298fd.js";const p=o("PropertyStore",{state:()=>({isLoading:!1,properties:[]}),actions:{async fetchProperties(){this.isLoading=!0;try{const t=await r.get("/auth/properties");return this.properties=t.data,t}catch{}finally{this.isLoading=!1}},async addProperty(t){this.isLoading=!0;try{const e=new FormData;for(const s in t)e.append(s,t[s]);const a=await r.post("/auth/properties",e,{headers:{"Content-Type":"multipart/form-data"}});return i("success",a.message)}catch{}finally{this.isLoading=!1}},async updateProperty(t){this.isLoading=!0;try{const e=new FormData;for(const s in t)e.append(s,t[s]);const a=await r.post(`/auth/properties/${t.propertyId}`,e,{headers:{"Content-Type":"multipart/form-data"}});return i("success",a.message)}catch{}finally{this.isLoading=!1}},async delete(t){this.isLoading=!0;try{const e=await r.delete(`/auth/properties/${t}`);i("success",e.message)}catch{}finally{this.isLoading=!1}}}});export{p as P};

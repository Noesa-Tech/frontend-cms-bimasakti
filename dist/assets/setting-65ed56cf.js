import{a0 as r,a1 as e,a2 as o}from"./index-f6b298fd.js";const g=r("SettingStore",{state:()=>({isLoading:!1,setting:[],detail:{}}),actions:{async fetchAll(){this.isLoading=!0;try{const t=await e.get("/auth/setting");return this.setting=t.data,t}catch{}finally{this.isLoading=!1}},async fetchDetail(t){this.isLoading=!0;try{const a=await e.get(`/auth/setting/${t}`);return this.detail=a.data,a}catch{}finally{this.isLoading=!1}},async update(t,a){this.isLoading=!0;try{const s=new FormData;for(const i in t)s.append(i,t[i]);const n=await e.post(`/auth/setting/${a}`,s,{headers:{"Content-Type":"multipart/form-data"}});return o("success",n.message)}catch{}finally{this.isLoading=!1}}}});export{g as S};

import{Y as d,$ as t,a0 as i}from"./index-2917ce10.js";const c=d("OrderStore",{state:()=>({isLoading:!1,allOrder:[],detail:null}),actions:{async fetchOrder(s){this.isLoading=!0;try{const r=await t.get(`/auth/orders?status=${s}`);this.allOrder=r.data}catch{}finally{this.isLoading=!1}},async detailOrder(s){this.isLoading=!0;try{const r=await t.get(`/auth/orders/${s}`);this.detail=r.data}catch{}finally{this.isLoading=!1}},async acceptOrder(s,r){this.isLoading=!0;try{const a=await t.post("/auth/order/confirmation",{vendor_id:s,order_id:r});i("success",a.message)}catch{}finally{this.isLoading=!1}},async rejectOrder(s,r,a){this.isLoading=!0;try{const e=await t.post("/auth/order/reject",{vendor_id:s,order_id:r,reason:a});i("success",e.message)}catch{}finally{this.isLoading=!1}},async createOrder(s){this.isLoading=!0;try{return await t.post("/order",s)}catch{}finally{this.isLoading=!1}}}});export{c as O};

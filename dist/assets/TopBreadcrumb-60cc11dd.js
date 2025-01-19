import{s as O}from"./index-9f6afe1c.js";import{B as x,F as C,m as i,o as a,c as s,k as h,M as f,l as y,n as d,t as g,f as k,a as l,N as I,O as L,j as N,h as v,p as P,v as M,w as _}from"./index-e0d75a13.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";var U=function(n){var t=n.dt;return`
.p-breadcrumb {
    background: `.concat(t("breadcrumb.background"),`;
    padding: `).concat(t("breadcrumb.padding"),`;
    overflow-x: auto;
}

.p-breadcrumb-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: `).concat(t("breadcrumb.gap"),`;
}

.p-breadcrumb-separator {
    display: flex;
    align-items: center;
    color: `).concat(t("breadcrumb.separator.color"),`;
}

.p-breadcrumb-separator-icon:dir(rtl) {
    transform: rotate(180deg);
}

.p-breadcrumb::-webkit-scrollbar {
    display: none;
}

.p-breadcrumb-item-link {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: `).concat(t("breadcrumb.item.gap"),`;
    transition: background `).concat(t("breadcrumb.transition.duration"),", color ").concat(t("breadcrumb.transition.duration"),", outline-color ").concat(t("breadcrumb.transition.duration"),", box-shadow ").concat(t("breadcrumb.transition.duration"),`;
    border-radius: `).concat(t("breadcrumb.item.border.radius"),`;
    outline-color: transparent;
    color: `).concat(t("breadcrumb.item.color"),`;
}

.p-breadcrumb-item-link:focus-visible {
    box-shadow: `).concat(t("breadcrumb.item.focus.ring.shadow"),`;
    outline: `).concat(t("breadcrumb.item.focus.ring.width")," ").concat(t("breadcrumb.item.focus.ring.style")," ").concat(t("breadcrumb.item.focus.ring.color"),`;
    outline-offset: `).concat(t("breadcrumb.item.focus.ring.offset"),`;
}

.p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
    color: `).concat(t("breadcrumb.item.hover.color"),`;
}

.p-breadcrumb-item-label {
    transition: inherit;
}

.p-breadcrumb-item-icon {
    color: `).concat(t("breadcrumb.item.icon.color"),`;
    transition: inherit;
}

.p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {
    color: `).concat(t("breadcrumb.item.icon.hover.color"),`;
}
`)},R={root:"p-breadcrumb p-component",list:"p-breadcrumb-list",homeItem:"p-breadcrumb-home-item",separator:"p-breadcrumb-separator",separatorIcon:"p-breadcrumb-separator-icon",item:function(n){var t=n.instance;return["p-breadcrumb-item",{"p-disabled":t.disabled()}]},itemLink:"p-breadcrumb-item-link",itemIcon:"p-breadcrumb-item-icon",itemLabel:"p-breadcrumb-item-label"},V=x.extend({name:"breadcrumb",theme:U,classes:R}),A={name:"BaseBreadcrumb",extends:C,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:V,provide:function(){return{$pcBreadcrumb:this,$parentInstance:this}}},B={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:C,props:{item:null,templates:null,index:null},methods:{onClick:function(n){this.item.command&&this.item.command({originalEvent:n,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var n=this.item,t=n.to,c=n.url,m=typeof window<"u"?window.location.pathname:"";return t===m||c===m?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var n=this;return{action:i({class:this.cx("itemLink"),"aria-current":this.isCurrentUrl(),onClick:function(c){return n.onClick(c)}},this.ptm("itemLink",this.ptmOptions)),icon:i({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:i({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},D=["href","target","aria-current"];function E(e,n,t,c,m,r){return r.visible()?(a(),s("li",i({key:0,class:[e.cx("item"),t.item.class]},e.ptm("item",r.ptmOptions)),[t.templates.item?(a(),h(y(t.templates.item),{key:1,item:t.item,label:r.label(),props:r.getMenuItemProps},null,8,["item","label","props"])):(a(),s("a",i({key:0,href:t.item.url||"#",class:e.cx("itemLink"),target:t.item.target,"aria-current":r.isCurrentUrl(),onClick:n[0]||(n[0]=function(){return r.onClick&&r.onClick.apply(r,arguments)})},e.ptm("itemLink",r.ptmOptions)),[t.templates&&t.templates.itemicon?(a(),h(y(t.templates.itemicon),{key:0,item:t.item,class:f(e.cx("itemIcon",r.ptmOptions))},null,8,["item","class"])):t.item.icon?(a(),s("span",i({key:1,class:[e.cx("itemIcon"),t.item.icon]},e.ptm("itemIcon",r.ptmOptions)),null,16)):d("",!0),t.item.label?(a(),s("span",i({key:2,class:e.cx("itemLabel")},e.ptm("itemLabel",r.ptmOptions)),g(r.label()),17)):d("",!0)],16,D))],16)):d("",!0)}B.render=E;var w={name:"Breadcrumb",extends:A,inheritAttrs:!1,components:{BreadcrumbItem:B,ChevronRightIcon:O}};function F(e,n,t,c,m,r){var o=k("BreadcrumbItem"),b=k("ChevronRightIcon");return a(),s("nav",i({class:e.cx("root")},e.ptmi("root")),[l("ol",i({class:e.cx("list")},e.ptm("list")),[e.home?(a(),h(o,i({key:0,item:e.home,class:e.cx("homeItem"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("homeItem")),null,16,["item","class","templates","pt","unstyled"])):d("",!0),(a(!0),s(I,null,L(e.model,function(p,u){return a(),s(I,{key:p.label+"_"+u},[e.home||u!==0?(a(),s("li",i({key:0,class:e.cx("separator"),ref_for:!0},e.ptm("separator")),[N(e.$slots,"separator",{},function(){return[v(b,i({"aria-hidden":"true",class:e.cx("separatorIcon"),ref_for:!0},e.ptm("separatorIcon")),null,16,["class"])]})],16)):d("",!0),v(o,{item:p,index:u,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}w.render=F;const H={class:"rounded-md overflow-hidden px-4 bg-surface-0 dark:bg-surface-900"},T=["href","onClick"],j=["href","target"],z={class:"font-semibold"},q=P({__name:"TopBreadcrumb",props:{breadcrumbItems:{}},setup(e){const n=M({label:"Home",icon:"pi pi-th-large",route:"/dashboard"});return(t,c)=>{const m=k("router-link"),r=w;return a(),s("div",H,[v(r,{home:n.value,model:t.breadcrumbItems},{item:_(({item:o,props:b})=>[o.route?(a(),h(m,{key:0,to:o.route,custom:""},{default:_(({href:p,navigate:u})=>[l("a",i({href:p},b.action,{onClick:u,class:"flex items-center"}),[l("span",{class:f([o.icon,"mr-2"])},null,2),l("span",null,g(o.label),1)],16,T)]),_:2},1032,["to"])):(a(),s("a",i({key:1,href:o.url,target:o.target},b.action,{class:"flex items-center"}),[l("span",{class:f([o.icon,"mr-2"])},null,2),l("span",z,g(o.label),1)],16,j))]),_:1},8,["home","model"])])}}});const Q=S(q,[["__scopeId","data-v-a60f96af"]]);export{Q as _};

import{s as L}from"./index-d4902bfd.js";import{a as C}from"./index-e02d694c.js";import{B as x,m as i,o as a,c as s,j as h,I as B,k as y,l as d,t as f,e as k,a as u,J as v,K as P,h as _,f as g,q as N,w as I,x as S}from"./index-27bcfafa.js";var U=function(r){var t=r.dt;return`
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
`)},A={root:"p-breadcrumb p-component",list:"p-breadcrumb-list",homeItem:"p-breadcrumb-home-item",separator:"p-breadcrumb-separator",separatorIcon:"p-breadcrumb-separator-icon",item:function(r){var t=r.instance;return["p-breadcrumb-item",{"p-disabled":t.disabled()}]},itemLink:"p-breadcrumb-item-link",itemIcon:"p-breadcrumb-item-icon",itemLabel:"p-breadcrumb-item-label"},M=x.extend({name:"breadcrumb",theme:U,classes:A}),R={name:"BaseBreadcrumb",extends:C,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:M,provide:function(){return{$pcBreadcrumb:this,$parentInstance:this}}},w={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:C,props:{item:null,templates:null,index:null},methods:{onClick:function(r){this.item.command&&this.item.command({originalEvent:r,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var r=this.item,t=r.to,m=r.url,c=typeof window!="undefined"?window.location.pathname:"";return t===c||m===c?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var r=this;return{action:i({class:this.cx("itemLink"),"aria-current":this.isCurrentUrl(),onClick:function(m){return r.onClick(m)}},this.ptm("itemLink",this.ptmOptions)),icon:i({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:i({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},V=["href","target","aria-current"];function q(e,r,t,m,c,n){return n.visible()?(a(),s("li",i({key:0,class:[e.cx("item"),t.item.class]},e.ptm("item",n.ptmOptions)),[t.templates.item?(a(),h(y(t.templates.item),{key:1,item:t.item,label:n.label(),props:n.getMenuItemProps},null,8,["item","label","props"])):(a(),s("a",i({key:0,href:t.item.url||"#",class:e.cx("itemLink"),target:t.item.target,"aria-current":n.isCurrentUrl(),onClick:r[0]||(r[0]=function(){return n.onClick&&n.onClick.apply(n,arguments)})},e.ptm("itemLink",n.ptmOptions)),[t.templates&&t.templates.itemicon?(a(),h(y(t.templates.itemicon),{key:0,item:t.item,class:B(e.cx("itemIcon",n.ptmOptions))},null,8,["item","class"])):t.item.icon?(a(),s("span",i({key:1,class:[e.cx("itemIcon"),t.item.icon]},e.ptm("itemIcon",n.ptmOptions)),null,16)):d("",!0),t.item.label?(a(),s("span",i({key:2,class:e.cx("itemLabel")},e.ptm("itemLabel",n.ptmOptions)),f(n.label()),17)):d("",!0)],16,V))],16)):d("",!0)}w.render=q;var O={name:"Breadcrumb",extends:R,inheritAttrs:!1,components:{BreadcrumbItem:w,ChevronRightIcon:L}};function D(e,r,t,m,c,n){var o=k("BreadcrumbItem"),b=k("ChevronRightIcon");return a(),s("nav",i({class:e.cx("root")},e.ptmi("root")),[u("ol",i({class:e.cx("list")},e.ptm("list")),[e.home?(a(),h(o,i({key:0,item:e.home,class:e.cx("homeItem"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("homeItem")),null,16,["item","class","templates","pt","unstyled"])):d("",!0),(a(!0),s(v,null,P(e.model,function(p,l){return a(),s(v,{key:p.label+"_"+l},[e.home||l!==0?(a(),s("li",i({key:0,class:e.cx("separator"),ref_for:!0},e.ptm("separator")),[_(e.$slots,"separator",{},function(){return[g(b,i({"aria-hidden":"true",class:e.cx("separatorIcon"),ref_for:!0},e.ptm("separatorIcon")),null,16,["class"])]})],16)):d("",!0),g(o,{item:p,index:l,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}O.render=D;const E={class:"rounded-md overflow-hidden px-4 bg-surface-0"},j=["href","onClick"],z=["href","target"],F={class:"font-semibold"},T={__name:"TopBreadcrumb",props:{breadcrumbItems:{type:Array,required:!0,default:()=>[]}},setup(e){const r=N({icon:"pi pi-th-large",route:"/dashboard"});return(t,m)=>{const c=k("router-link"),n=O;return a(),s("div",E,[g(n,{home:S(r),model:e.breadcrumbItems},{item:I(({item:o,props:b})=>[o.route?(a(),h(c,{key:0,to:o.route,custom:""},{default:I(({href:p,navigate:l})=>[u("a",i({href:p},b.action,{onClick:l}),[u("span",{class:B([o.icon])},null,2),u("span",null,f(o.label),1)],16,j)]),_:2},1032,["to"])):(a(),s("a",i({key:1,href:o.url,target:o.target},b.action),[u("span",F,f(o.label),1)],16,z))]),_:1},8,["home","model"])])}}};export{T as _};

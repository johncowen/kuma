import{d as W,Q as H,y as C,r as I,o,i as h,w as e,j as p,a4 as Q,p as x,n as s,k as f,a5 as X,E as q,H as m,l as v,F as w,I as T,a7 as Y,m as S,v as ee,K as B,ar as te,W as L,aI as ne,aJ as oe,as as K,t as se}from"./index-0d828147.js";import{g as ae}from"./index-a488f3ce.js";import{A as le}from"./AppCollection-640ff5f7.js";import{_ as ie}from"./DeleteResourceModal.vue_vue_type_script_setup_true_lang-62e068b5.js";import{S as ce}from"./StatusBadge-e02331a5.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-25f4cd1f.js";const re=["data-testid"],ue=W({__name:"IndexView",setup(me){const O=H(),R=C(!1),Z=C(!1),V=C(""),D=C({}),$=C({}),A=a=>{let i="offline";return a.length>0&&(i="online",typeof a[a.length-1].disconnectTime<"u"&&(i="offline")),i},U=a=>{const i="zoneIngress";D.value=a.items.reduce((l,c)=>{var g,_;const r=(g=c[i])==null?void 0:g.zone;if(typeof r<"u"){typeof l[r]>"u"&&(l[r]={online:[],offline:[]});const z=((_=c[`${i}Insight`])==null?void 0:_.subscriptions)||[],y=A(z);l[r][y].push(c)}return l},{})},j=a=>{const i="zoneEgress";$.value=a.items.reduce((l,c)=>{var g,_;const r=(g=c[i])==null?void 0:g.zone;if(typeof r<"u"){typeof l[r]>"u"&&(l[r]={online:[],offline:[]});const z=((_=c[`${i}Insight`])==null?void 0:_.subscriptions)||[],y=A(z);l[r][y].push(c)}return l},{})};function F(a){return a.map(i=>{var b;const{name:l}=i,c={name:"zone-cp-detail-view",params:{zone:l}};let r="",g="kubernetes",_=!1,z=!0;(((b=i.zoneInsight)==null?void 0:b.subscriptions)??[]).forEach(d=>{if(d.version&&d.version.kumaCp){r=d.version.kumaCp.version;const{kumaCpGlobalCompatible:k=!0}=d.version.kumaCp;z=k}if(d.config){const k=JSON.parse(d.config);g=k.environment,_=k.store.type==="memory"}});const t=ae(i);return{detailViewRoute:c,name:l,status:t,zoneCpVersion:r,type:g,warnings:{version_mismatch:!z,store_memory:_}}})}async function G(){await O.deleteZone({name:V.value})}function E(){R.value=!R.value}function J(a){E(),V.value=a}function M(a){Z.value=(a==null?void 0:a.items.length)>0}return(a,i)=>{const l=I("RouteTitle"),c=I("DataSource"),r=I("RouterLink"),g=I("AppView"),_=I("RouteView");return o(),h(c,{src:"/me"},{default:e(({data:z})=>[z?(o(),h(_,{key:0,name:"zone-cp-list-view",params:{page:1,size:z.pageSize}},{default:e(({route:y,t,can:b})=>[p(g,null,Q({title:e(()=>[x("h1",null,[p(l,{title:t("zone-cps.routes.items.title"),render:!0},null,8,["title"])])]),default:e(()=>[s(),s(),p(c,{src:`/zone-cps?page=${y.params.page}&size=${y.params.size}`,onChange:M},{default:e(({data:d,error:k,refresh:P})=>[p(c,{src:"/zone-ingress-overviews?page=1&size=100",onChange:U}),s(),p(c,{src:"/zone-egress-overviews?page=1&size=100",onChange:j}),s(),p(f(X),null,{body:e(()=>[k!==void 0?(o(),h(q,{key:0,error:k},null,8,["error"])):(o(),h(le,{key:1,class:"zone-cp-collection","data-testid":"zone-cp-collection",headers:[{label:"Name",key:"name"},{label:"Zone CP Version",key:"zoneCpVersion"},{label:"Type",key:"type"},{label:"Ingresses (online / total)",key:"ingress"},{label:"Egresses (online / total)",key:"egress"},{label:"Status",key:"status"},{label:"Warnings",key:"warnings",hideLabel:!0},{label:"Actions",key:"actions",hideLabel:!0}],"page-number":parseInt(y.params.page),"page-size":parseInt(y.params.size),total:d==null?void 0:d.total,items:d?F(d.items):void 0,error:k,"empty-state-title":b("create zones")?t("zone-cps.empty_state.title"):void 0,"empty-state-message":b("create zones")?t("zone-cps.empty_state.message"):void 0,"empty-state-cta-to":b("create zones")?{name:"zone-create-view"}:void 0,"empty-state-cta-text":b("create zones")?t("zones.index.create"):void 0,onChange:y.update},{name:e(({row:n,rowValue:u})=>[p(r,{to:n.detailViewRoute,"data-testid":"detail-view-link"},{default:e(()=>[s(m(u),1)]),_:2},1032,["to"])]),zoneCpVersion:e(({rowValue:n})=>[s(m(n||t("common.collection.none")),1)]),type:e(({rowValue:n})=>[s(m(n||t("common.collection.none")),1)]),ingress:e(({row:n})=>[(o(!0),v(w,null,T([D.value[n.name]||{online:[],offline:[]}],u=>(o(),v(w,null,[s(m(u.online.length)+" / "+m(u.online.length+u.offline.length),1)],64))),256))]),egress:e(({row:n})=>[(o(!0),v(w,null,T([$.value[n.name]||{online:[],offline:[]}],u=>(o(),v(w,null,[s(m(u.online.length)+" / "+m(u.online.length+u.offline.length),1)],64))),256))]),status:e(({rowValue:n})=>[n?(o(),h(ce,{key:0,status:n},null,8,["status"])):(o(),v(w,{key:1},[s(m(t("common.collection.none")),1)],64))]),warnings:e(({row:n})=>[Object.values(n.warnings).some(u=>u)?(o(),h(f(Y),{key:0},{content:e(()=>[x("ul",null,[(o(!0),v(w,null,T(n.warnings,(u,N)=>(o(),v(w,{key:N},[u?(o(),v("li",{key:0,"data-testid":`warning-${N}`},m(t(`zone-cps.list.${N}`)),9,re)):S("",!0)],64))),128))])]),default:e(()=>[s(),p(ee,{"data-testid":"warning",class:"mr-1",size:f(B),"hide-title":""},null,8,["size"])]),_:2},1024)):(o(),v(w,{key:1},[s(m(t("common.collection.none")),1)],64))]),actions:e(({row:n})=>[p(f(te),{class:"actions-dropdown","data-testid":"actions-dropdown","kpop-attributes":{placement:"bottomEnd",popoverClasses:"mt-5 more-actions-popover"},width:"150"},{default:e(()=>[p(f(L),{class:"non-visual-button",appearance:"secondary",size:"small"},{icon:e(()=>[p(f(ne),{color:f(oe),icon:"more",size:f(B)},null,8,["color","size"])]),_:1})]),items:e(()=>[p(f(K),{item:{to:n.detailViewRoute,label:t("common.collection.actions.view")}},null,8,["item"]),s(),b("create zones")?(o(),h(f(K),{key:0,"has-divider":"","is-dangerous":"","data-testid":"dropdown-delete-item",onClick:u=>J(n.name)},{default:e(()=>[s(m(t("common.collection.actions.delete")),1)]),_:2},1032,["onClick"])):S("",!0)]),_:2},1024)]),_:2},1032,["headers","page-number","page-size","total","items","error","empty-state-title","empty-state-message","empty-state-cta-to","empty-state-cta-text","onChange"]))]),_:2},1024),s(),R.value?(o(),h(ie,{key:0,"confirmation-text":V.value,"delete-function":G,"is-visible":"","action-button-text":t("common.delete_modal.proceed_button"),title:t("common.delete_modal.title",{type:"Zone"}),"data-testid":"delete-zone-modal",onCancel:E,onDelete:()=>{E(),P()}},{"body-content":e(()=>[x("p",null,m(t("common.delete_modal.text1",{type:"Zone",name:V.value})),1),s(),x("p",null,m(t("common.delete_modal.text2")),1)]),_:2},1032,["confirmation-text","action-button-text","title","onDelete"])):S("",!0)]),_:2},1032,["src"])]),_:2},[b("create zones")&&Z.value?{name:"actions",fn:e(()=>[p(f(L),{appearance:"primary",icon:"plus",to:{name:"zone-create-view"},"data-testid":"create-zone-link"},{default:e(()=>[s(m(t("zones.index.create")),1)]),_:2},1024)]),key:"0"}:void 0]),1024)]),_:2},1032,["params"])):S("",!0)]),_:1})}}});const ze=se(ue,[["__scopeId","data-v-6b837d95"]]);export{ze as default};

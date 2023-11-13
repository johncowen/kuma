import{d as w,l as h,R as y,o as l,c as _,e as r,w as s,f as o,t as m,q as c,a6 as f,b as d,a3 as S,F as x,a as u,p as i,B as V,C as k,aJ as I,_ as B}from"./index-dc1529df.js";import{S as R}from"./StatusBadge-903f8974.js";import{g as C}from"./dataplane-0a086c06.js";import{_ as O}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-79530b3b.js";const Z={class:"stack"},$=w({__name:"ZoneEgressSummary",props:{zoneEgressOverview:{}},setup(a){const{t}=h(),n=a,v=y(()=>C(n.zoneEgressOverview.zoneEgressInsight)),p=y(()=>{const{networking:e}=n.zoneEgressOverview.zoneEgress;return e!=null&&e.address&&(e!=null&&e.port)?`${e.address}:${e.port}`:null});return(e,g)=>(l(),_("div",Z,[r(f,null,{title:s(()=>[o(m(c(t)("http.api.property.status")),1)]),body:s(()=>[r(R,{status:v.value},null,8,["status"])]),_:1}),o(),r(f,null,{title:s(()=>[o(m(c(t)("http.api.property.address")),1)]),body:s(()=>[p.value?(l(),d(S,{key:0,text:p.value},null,8,["text"])):(l(),_(x,{key:1},[o(m(c(t)("common.detail.none")),1)],64))]),_:1})]))}}),T=a=>(V("data-v-045cd45c"),a=a(),k(),a),b={class:"summary-title-wrapper"},F=T(()=>i("img",{"aria-hidden":"true",src:I},null,-1)),N={class:"summary-title"},A={key:1,class:"stack"},D=w({__name:"ZoneEgressSummaryView",props:{name:{},zoneEgressOverview:{default:void 0}},setup(a){const{t}=h(),n=a;return(v,p)=>{const e=u("RouteTitle"),g=u("RouterLink"),z=u("AppView"),E=u("RouteView");return l(),d(E,{name:"zone-egress-summary-view"},{default:s(()=>[r(z,null,{title:s(()=>[i("div",b,[F,o(),i("h2",N,[r(g,{to:{name:"zone-egress-detail-view",params:{zone:n.name}}},{default:s(()=>[r(e,{title:c(t)("zone-egresses.routes.item.title",{name:n.name}),render:!0},null,8,["title"])]),_:1},8,["to"])])])]),default:s(()=>[o(),n.zoneEgressOverview===void 0?(l(),d(O,{key:0},{message:s(()=>[i("p",null,m(c(t)("common.collection.summary.empty_message",{type:"ZoneEgress"})),1)]),default:s(()=>[o(m(c(t)("common.collection.summary.empty_title",{type:"ZoneEgress"}))+" ",1)]),_:1})):(l(),_("div",A,[i("div",null,[i("h3",null,m(c(t)("zone-egresses.routes.item.overview")),1),o(),r($,{class:"mt-4","zone-egress-overview":n.zoneEgressOverview},null,8,["zone-egress-overview"])])]))]),_:1})]),_:1})}}});const j=B(D,[["__scopeId","data-v-045cd45c"]]);export{j as default};
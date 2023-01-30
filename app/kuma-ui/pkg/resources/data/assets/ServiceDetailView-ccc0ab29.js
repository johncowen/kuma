import{u as T}from"./vue-router-573afc44.js";import{k,u as q}from"./store-37d532c7.js";import{Q as L}from"./QueryParameter-70743f73.js";import{_ as A}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-4047971f.js";import{E as B}from"./ErrorBlock-5dacfdd3.js";import{_ as V}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-d3176fee.js";import{D as $}from"./DataPlaneList-f842718f.js";import{S as z}from"./ServiceSummary-d6015b21.js";import{d as P,h as F,g as I,e as j,f as R,a as d,b as C,F as G,o as c,r as m,y as O}from"./runtime-dom.esm-bundler-91b41870.js";import"./vuex.esm-bundler-df5bd11e.js";import"./constants-31fdaf55.js";import"./kongponents.es-3df60cd6.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./datadogLogEvents-4578cfa7.js";import"./ContentWrapper-b0fa1a61.js";import"./DataOverview-ea4cb7b2.js";import"./StatusBadge-81464ebd.js";import"./TagList-91d1133a.js";import"./YamlView.vue_vue_type_script_setup_true_lang-b6f8326b.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-8c30331f.js";import"./_commonjsHelpers-87174ba5.js";import"./toYaml-4e00099e.js";const Q={class:"component-frame"},W=P({__name:"ServiceDetails",props:{service:{type:Object,required:!0},externalService:{type:Object,required:!1,default:null},dataPlaneOverviews:{type:Array,required:!1,default:null},dppFilterFields:{type:Object,required:!0},selectedDppName:{type:String,required:!1,default:null}},emits:["load-dataplane-overviews"],setup(f,{emit:g}){const a=f;function e(y,t){var o;(((o=a.service.serviceType)==null?void 0:o.startsWith("gateway"))??!1)||delete t.gateway,g("load-dataplane-overviews",y,t)}return(y,t)=>{var n;return c(),F(G,null,[I("div",Q,[j(z,{service:a.service,"external-service":f.externalService},null,8,["service","external-service"])]),R(),a.dataPlaneOverviews!==null?(c(),d($,{key:0,class:"mt-4","data-plane-overviews":a.dataPlaneOverviews,"dpp-filter-fields":a.dppFilterFields,"selected-dpp-name":a.selectedDppName,"is-gateway-view":((n=a.dataPlaneOverviews[0])==null?void 0:n.dataplane.networking.gateway)!==void 0,onLoadData:e},null,8,["data-plane-overviews","dpp-filter-fields","selected-dpp-name","is-gateway-view"])):C("",!0)],64)}}}),J={class:"service-details"},fe=P({__name:"ServiceDetailView",props:{selectedDppName:{type:String,required:!1,default:null}},setup(f){const g=f,a={name:{description:"filter by name or parts of a name"},protocol:{description:"filter by “kuma.io/protocol” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},zone:{description:"filter by “kuma.io/zone” value"}},e=T(),y=q(),t=m(null),n=m(null),o=m(null),_=m(!0),w=m(null);O(()=>e.params.mesh,function(){e.name==="service-detail-view"&&h(0)}),O(()=>e.params.name,function(){e.name==="service-detail-view"&&h(0)});function N(){y.dispatch("updatePageTitle",e.params.service);const r=L.get("filterFields"),l=r!==null?JSON.parse(r):{};h(0,l)}N();async function h(r,l={}){_.value=!0,w.value=null,t.value=null,n.value=null,o.value=null;const p=e.params.mesh,v=e.params.service;try{t.value=await k.getServiceInsight({mesh:p,name:v}),t.value.serviceType==="external"?n.value=await k.getExternalService({mesh:p,name:v}):await x(r,l)}catch(s){s instanceof Error?w.value=s:console.error(s)}finally{_.value=!1}}async function x(r,l){const p=e.params.mesh,v=e.params.service;try{const s=b(v,r,l),i=await k.getAllDataplaneOverviewsFromMesh({mesh:p},s);o.value=i.items??[]}catch{o.value=null}}function b(r,l,p){const s=`kuma.io/service:${r}`,i={...p,offset:l,size:50};if(i.tag){const D=Array.isArray(i.tag)?i.tag:[i.tag],S=[];for(const[u,E]of D.entries())E.startsWith("kuma.io/service:")&&S.push(u);for(let u=S.length-1;u===0;u--)D.splice(S[u],1);i.tag=D.concat(s)}else i.tag=s;return i}return(r,l)=>(c(),F("div",J,[_.value?(c(),d(V,{key:0})):w.value!==null?(c(),d(B,{key:1,error:w.value},null,8,["error"])):t.value===null?(c(),d(A,{key:2})):(c(),d(W,{key:3,service:t.value,"data-plane-overviews":o.value,"external-service":n.value,"dpp-filter-fields":a,"selected-dpp-name":g.selectedDppName,onLoadDataplaneOverviews:x},null,8,["service","data-plane-overviews","external-service","selected-dpp-name"]))]))}});export{fe as default};

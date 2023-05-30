import{d as P,u as C,r as l,v as L,o as g,b as w,w as T,g as V,e as z,M as h,f as B}from"./index-7d40e60e.js";import{S as M}from"./ServiceSummary-e7b72109.js";import{C as q}from"./ContentWrapper-4c07acf4.js";import{D as F}from"./DataOverview-edff5e04.js";import{u as O}from"./index-e5240843.js";import{Q as y}from"./QueryParameter-70743f73.js";import"./kongponents.es-ebaf3b61.js";import"./DefinitionListItem-3d667ed9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-2d1fdef5.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-68d7f61f.js";import"./TextWithCopyButton-4857102d.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-e5df6bc1.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-6c8ad92b.js";import"./ErrorBlock-676f4185.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-dca6d5d5.js";import"./toYaml-4e00099e.js";import"./StatusBadge-0bc18960.js";import"./TagList-cc4f70b3.js";import"./datadogLogEvents-302eea7b.js";const ne=P({__name:"ServiceListView",props:{selectedServiceName:{type:String,required:!1,default:null},offset:{type:Number,required:!1,default:0}},setup(_){const c=_,m=O(),k=[{label:"Name",key:"entity"},{label:"Type",key:"serviceType"},{label:"Address",key:"addressPort"},{label:"Status",key:"status"},{label:"DP proxies (online / total)",key:"dpProxiesStatus"}],D={title:"No Data",message:"There are no service insights present."},p=C(),v=l(!0),d=l(null),S=l(null),b=l(c.offset),t=l(null),o=l(null),n=l({headers:k,data:[]});L(()=>p.params.mesh,function(){p.name==="services-list-view"&&f(0)}),f(c.offset);async function f(a){var i;b.value=a,y.set("offset",a>0?a:null),v.value=!0,d.value=null;const e=p.params.mesh,s=h;try{const{items:r,next:u}=await m.getAllServiceInsightsFromMesh({mesh:e},{size:s,offset:a});S.value=u,n.value.data=A(r??[]),await x({name:c.selectedServiceName??((i=n.value.data[0])==null?void 0:i.entity.name),mesh:e})}catch(r){n.value.data=[],t.value=null,o.value=null,r instanceof Error?d.value=r:console.error(r)}finally{v.value=!1}}function A(a){return a.map(e=>{const{serviceType:s="internal",addressPort:i}=e,r={name:"service-detail-view",params:{mesh:e.mesh,service:e.name}};let u="—";if(e.dataplanes){const{online:E=0,total:N=0}=e.dataplanes;u=`${E} / ${N}`}return{entity:e,detailViewRoute:r,serviceType:s,dpProxiesStatus:u,addressPort:i}})}async function x({name:a,mesh:e}){a!==void 0?(t.value=await m.getServiceInsight({mesh:e,name:a}),t.value.serviceType==="external"&&(o.value=await m.getExternalServiceByServiceInsightName(e,a)),y.set("service",a)):(t.value=null,o.value=null,y.set("service",null))}return(a,e)=>(g(),w(q,null,{content:T(()=>{var s;return[V(F,{"selected-entity-name":(s=t.value)==null?void 0:s.name,"page-size":z(h),error:d.value,"is-loading":v.value,"empty-state":D,"table-data":n.value,"table-data-is-empty":n.value.data.length===0,next:S.value,"page-offset":b.value,onTableAction:x,onLoadData:f},null,8,["selected-entity-name","page-size","error","is-loading","table-data","table-data-is-empty","next","page-offset"])]}),sidebar:T(()=>[t.value!==null?(g(),w(M,{key:0,service:t.value,"external-service":o.value},null,8,["service","external-service"])):B("",!0)]),_:1}))}});export{ne as default};
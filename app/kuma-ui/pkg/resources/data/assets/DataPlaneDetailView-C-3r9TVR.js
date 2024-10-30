import{d as H,I as Z,F as R,o as i,m as h,w as n,c as p,G as it,E as W,q as P,e as C,k as s,r as V,b as e,j as rt,p as L,a as d,t as r,l as u,H as y,J as N,n as dt,D as lt,Q as Y,X as q,S as ct,a0 as ut,K as j,$ as pt,a1 as _t,L as ft,M as mt}from"./index-CgC5RQPZ.js";import{q as gt}from"./kong-icons.es676-DpwKnWMp.js";import{S as yt}from"./SummaryView-CQgHCBGu.js";import{T as st}from"./TagList-CCBtnGQE.js";import{_ as vt}from"./SubscriptionList.vue_vue_type_script_setup_true_lang-DfR8BECN.js";import"./AccordionList-qL_m8yrG.js";const ht=["aria-hidden"],tt='<path d="M15 18L21 12L15 6L13.6 7.4L17.2 11H3V13H17.2L13.6 16.6L15 18Z" fill="currentColor"/>',bt=H({__name:"ForwardIcon",props:{title:{type:String,required:!1,default:""},color:{type:String,required:!1,default:"currentColor"},display:{type:String,required:!1,default:"block"},decorative:{type:Boolean,required:!1,default:!1},size:{type:[Number,String],required:!1,default:Z,validator:o=>{if(typeof o=="number"&&o>0)return!0;if(typeof o=="string"){const a=String(o).replace(/px/gi,""),t=Number(a);if(t&&!isNaN(t)&&Number.isInteger(t)&&t>0)return!0}return!1}},as:{type:String,required:!1,default:"span"},staticIds:{type:Boolean,default:!1}},setup(o){const a=o,t=R(()=>{if(typeof a.size=="number"&&a.size>0)return`${a.size}px`;if(typeof a.size=="string"){const f=String(a.size).replace(/px/gi,""),l=Number(f);if(l&&!isNaN(l)&&Number.isInteger(l)&&l>0)return`${l}px`}return Z}),$=R(()=>({boxSizing:"border-box",color:a.color,display:a.display,flexShrink:"0",height:t.value,lineHeight:"0",width:t.value})),B=f=>{const l={},k=Math.random().toString(36).substring(2,12);return f.replace(/id="([^"]+)"/g,(I,x)=>{const D=`${k}-${x}`;return l[x]=D,`id="${D}"`}).replace(/#([^\s^")]+)/g,(I,x)=>l[x]?`#${l[x]}`:I)},z=f=>{const l={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;","`":"&#039;"};return f.replace(/[<>"'`]/g,k=>l[k])},b=`${a.title?`<title data-testid="kui-icon-svg-title">${z(a.title)}</title>`:""}${a.staticIds?tt:B(tt)}`;return(f,l)=>(i(),h(W(o.as),{"aria-hidden":o.decorative?"true":void 0,class:"kui-icon forward-icon","data-testid":"kui-icon-wrapper-forward-icon",style:it($.value)},{default:n(()=>[(i(),p("svg",{"aria-hidden":o.decorative?"true":void 0,"data-testid":"kui-icon-svg-forward-icon",fill:"none",height:"100%",role:"img",viewBox:"0 0 24 24",width:"100%",xmlns:"http://www.w3.org/2000/svg",innerHTML:b},null,8,ht))]),_:1},8,["aria-hidden","style"]))}}),$t=["aria-hidden"],et='<path d="M12 21V19H19V5H12V3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H12ZM10 17L8.625 15.55L11.175 13H3V11H11.175L8.625 8.45L10 7L15 12L10 17Z" fill="currentColor"/>',kt=H({__name:"GatewayIcon",props:{title:{type:String,required:!1,default:""},color:{type:String,required:!1,default:"currentColor"},display:{type:String,required:!1,default:"block"},decorative:{type:Boolean,required:!1,default:!1},size:{type:[Number,String],required:!1,default:Z,validator:o=>{if(typeof o=="number"&&o>0)return!0;if(typeof o=="string"){const a=String(o).replace(/px/gi,""),t=Number(a);if(t&&!isNaN(t)&&Number.isInteger(t)&&t>0)return!0}return!1}},as:{type:String,required:!1,default:"span"},staticIds:{type:Boolean,default:!1}},setup(o){const a=o,t=R(()=>{if(typeof a.size=="number"&&a.size>0)return`${a.size}px`;if(typeof a.size=="string"){const f=String(a.size).replace(/px/gi,""),l=Number(f);if(l&&!isNaN(l)&&Number.isInteger(l)&&l>0)return`${l}px`}return Z}),$=R(()=>({boxSizing:"border-box",color:a.color,display:a.display,flexShrink:"0",height:t.value,lineHeight:"0",width:t.value})),B=f=>{const l={},k=Math.random().toString(36).substring(2,12);return f.replace(/id="([^"]+)"/g,(I,x)=>{const D=`${k}-${x}`;return l[x]=D,`id="${D}"`}).replace(/#([^\s^")]+)/g,(I,x)=>l[x]?`#${l[x]}`:I)},z=f=>{const l={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;","`":"&#039;"};return f.replace(/[<>"'`]/g,k=>l[k])},b=`${a.title?`<title data-testid="kui-icon-svg-title">${z(a.title)}</title>`:""}${a.staticIds?et:B(et)}`;return(f,l)=>(i(),h(W(o.as),{"aria-hidden":o.decorative?"true":void 0,class:"kui-icon gateway-icon","data-testid":"kui-icon-wrapper-gateway-icon",style:it($.value)},{default:n(()=>[(i(),p("svg",{"aria-hidden":o.decorative?"true":void 0,"data-testid":"kui-icon-svg-gateway-icon",fill:"none",height:"100%",role:"img",viewBox:"0 0 24 24",width:"100%",xmlns:"http://www.w3.org/2000/svg",innerHTML:b},null,8,$t))]),_:1},8,["aria-hidden","style"]))}}),xt=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],wt=["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],St=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],Ct=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],at=(o,a,t)=>{let $=o;return typeof a=="string"||Array.isArray(a)?$=o.toLocaleString(a,t):(a===!0||t!==void 0)&&($=o.toLocaleString(void 0,t)),$};function O(o,a){if(!Number.isFinite(o))throw new TypeError(`Expected a finite number, got ${typeof o}: ${o}`);a={bits:!1,binary:!1,space:!0,...a};const t=a.bits?a.binary?Ct:St:a.binary?wt:xt,$=a.space?" ":"";if(a.signed&&o===0)return` 0${$}${t[0]}`;const B=o<0,z=B?"-":a.signed?"+":"";B&&(o=-o);let b;if(a.minimumFractionDigits!==void 0&&(b={minimumFractionDigits:a.minimumFractionDigits}),a.maximumFractionDigits!==void 0&&(b={maximumFractionDigits:a.maximumFractionDigits,...b}),o<1){const I=at(o,a.locale,b);return z+I+$+t[0]}const f=Math.min(Math.floor(a.binary?Math.log(o)/Math.log(1024):Math.log10(o)/3),t.length-1);o/=(a.binary?1024:1e3)**f,b||(o=o.toPrecision(3));const l=at(Number(o),a.locale,b),k=t[f];return z+l+$+k}const Bt={},It={class:"card"},Nt={class:"title"},Tt={class:"body"};function qt(o,a){const t=C("KCard");return i(),h(t,{class:"data-card"},{default:n(()=>[s("dl",null,[s("div",It,[s("dt",Nt,[V(o.$slots,"title",{},void 0,!0)]),e(),s("dd",Tt,[V(o.$slots,"default",{},void 0,!0)])])])]),_:3})}const ot=P(Bt,[["render",qt],["__scopeId","data-v-3f9a3cf3"]]),zt={class:"title"},Lt={key:0},Dt={"data-testid":"grpc-success"},Mt={"data-testid":"grpc-failure"},Vt={"data-testid":"rq-2xx"},Et={"data-testid":"rq-4xx"},Ht={"data-testid":"rq-5xx"},Kt={"data-testid":"connections-total"},Rt={key:0,"data-testid":"bytes-received"},Pt={key:1,"data-testid":"bytes-sent"},Xt=H({__name:"ConnectionCard",props:{protocol:{},service:{default:""},traffic:{default:void 0},direction:{default:"downstream"}},setup(o){const{t:a}=rt(),t=o,$=B=>{const z=B.target;if(B.isTrusted&&z.nodeName.toLowerCase()!=="a"){const b=z.closest(".service-traffic-card, a");if(b){const f=b.nodeName.toLowerCase()==="a"?b:b.querySelector("[data-action]");f!==null&&"click"in f&&typeof f.click=="function"&&f.click()}}};return(B,z)=>{const b=C("XBadge"),f=C("KSkeletonBox");return i(),h(ot,{class:"service-traffic-card",onClick:$},{title:n(()=>[t.service.length>0?(i(),h(st,{key:0,tags:[{label:"kuma.io/service",value:t.service}]},null,8,["tags"])):L("",!0),e(),s("div",zt,[d(b,{class:"protocol",appearance:t.protocol==="passthrough"?"success":"info"},{default:n(()=>[e(r(u(a)(`data-planes.components.service_traffic_card.protocol.${t.protocol}`,{},{defaultMessage:u(a)(`http.api.value.${t.protocol}`)})),1)]),_:1},8,["appearance"]),e(),V(B.$slots,"default",{},void 0,!0)])]),default:n(()=>{var l,k,I,x,D,X,A,U,F,S,m,K;return[e(),t.traffic?(i(),p("dl",Lt,[t.protocol==="passthrough"?(i(!0),p(y,{key:0},N([["http","tcp"].reduce((_,M)=>{var c;const G=t.direction;return Object.entries(((c=t.traffic)==null?void 0:c[M])||{}).reduce((g,[v,w])=>[`${G}_cx_tx_bytes_total`,`${G}_cx_rx_bytes_total`].includes(v)?{...g,[v]:w+(g[v]??0)}:g,_)},{})],(_,M)=>(i(),p(y,{key:M},[s("div",null,[s("dt",null,r(u(a)("data-planes.components.service_traffic_card.tx")),1),e(),s("dd",null,r(u(O)(_.downstream_cx_rx_bytes_total??0)),1)]),e(),s("div",null,[s("dt",null,r(u(a)("data-planes.components.service_traffic_card.rx")),1),e(),s("dd",null,r(u(O)(_.downstream_cx_tx_bytes_total??0)),1)])],64))),128)):t.protocol==="grpc"?(i(),p(y,{key:1},[s("div",Dt,[s("dt",null,r(u(a)("data-planes.components.service_traffic_card.grpc_success")),1),e(),s("dd",null,r(u(a)("common.formats.integer",{value:(l=t.traffic.grpc)==null?void 0:l.success})),1)]),e(),s("div",Mt,[s("dt",null,r(u(a)("data-planes.components.service_traffic_card.grpc_failure")),1),e(),s("dd",null,r(u(a)("common.formats.integer",{value:(k=t.traffic.grpc)==null?void 0:k.failure})),1)])],64)):t.protocol.startsWith("http")?(i(),p(y,{key:2},[(i(!0),p(y,null,N([((I=t.traffic.http)==null?void 0:I[`${t.direction}_rq_1xx`])??0].filter(_=>_!==0),_=>(i(),p("div",{key:_,"data-testid":"rq-1xx"},[s("dt",null,r(u(a)("data-planes.components.service_traffic_card.1xx")),1),e(),s("dd",null,r(u(a)("common.formats.integer",{value:_})),1)]))),128)),e(),s("div",Vt,[s("dt",null,r(u(a)("data-planes.components.service_traffic_card.2xx")),1),e(),s("dd",null,r(u(a)("common.formats.integer",{value:(x=t.traffic.http)==null?void 0:x[`${t.direction}_rq_2xx`]})),1)]),e(),(i(!0),p(y,null,N([((D=t.traffic.http)==null?void 0:D[`${t.direction}_rq_3xx`])??0].filter(_=>_!==0),_=>(i(),p("div",{key:_,"data-testid":"rq-3xx"},[s("dt",null,r(u(a)("data-planes.components.service_traffic_card.3xx")),1),e(),s("dd",null,r(u(a)("common.formats.integer",{value:_})),1)]))),128)),e(),s("div",Et,[s("dt",null,r(u(a)("data-planes.components.service_traffic_card.4xx")),1),e(),s("dd",null,r(u(a)("common.formats.integer",{value:(X=t.traffic.http)==null?void 0:X[`${t.direction}_rq_4xx`]})),1)]),e(),s("div",Ht,[s("dt",null,r(u(a)("data-planes.components.service_traffic_card.5xx")),1),e(),s("dd",null,r(u(a)("common.formats.integer",{value:(A=t.traffic.http)==null?void 0:A[`${t.direction}_rq_5xx`]})),1)])],64)):(i(),p(y,{key:3},[s("div",Kt,[s("dt",null,r(u(a)("data-planes.components.service_traffic_card.cx")),1),e(),s("dd",null,r(u(a)("common.formats.integer",{value:(U=t.traffic.tcp)==null?void 0:U[`${t.direction}_cx_total`]})),1)]),e(),typeof((F=t.traffic.tcp)==null?void 0:F[`${t.direction}_cx_tx_bytes_total`])<"u"?(i(),p("div",Rt,[s("dt",null,r(u(a)("data-planes.components.service_traffic_card.rx")),1),e(),s("dd",null,r(u(O)((S=t.traffic.tcp)==null?void 0:S[`${t.direction}_cx_tx_bytes_total`])),1)])):L("",!0),e(),typeof((m=t.traffic.tcp)==null?void 0:m[`${t.direction}_cx_rx_bytes_total`])<"u"?(i(),p("div",Pt,[s("dt",null,r(u(a)("data-planes.components.service_traffic_card.tx")),1),e(),s("dd",null,r(u(O)((K=t.traffic.tcp)==null?void 0:K[`${t.direction}_cx_rx_bytes_total`])),1)])):L("",!0)],64))])):(i(),h(f,{key:1,width:"10"}))]}),_:3})}}}),J=P(Xt,[["__scopeId","data-v-82875ef3"]]),At={class:"body"},Ut=H({__name:"ConnectionGroup",props:{type:{}},setup(o){const a=o;return(t,$)=>{const B=C("KCard");return i(),h(B,{class:dt(["service-traffic-group",`type-${a.type}`])},{default:n(()=>[s("div",At,[V(t.$slots,"default",{},void 0,!0)])]),_:3},8,["class"])}}}),Q=P(Ut,[["__scopeId","data-v-9402d5d1"]]),Ft={class:"service-traffic"},Gt={class:"actions"},Ot=H({__name:"ConnectionTraffic",setup(o){return(a,t)=>(i(),p("div",Ft,[s("div",Gt,[V(a.$slots,"actions",{},void 0,!0)]),e(),d(ot,{class:"header"},{title:n(()=>[V(a.$slots,"title",{},void 0,!0)]),_:3}),e(),V(a.$slots,"default",{},void 0,!0)]))}}),nt=P(Ot,[["__scopeId","data-v-e6bd176c"]]),Zt=o=>(ft("data-v-a37f5851"),o=o(),mt(),o),Yt={"data-testid":"dataplane-warnings"},jt=["data-testid","innerHTML"],Jt={key:0,"data-testid":"warning-stats-loading"},Qt={class:"stack","data-testid":"dataplane-details"},Wt={class:"stack"},te={class:"columns"},ee={class:"status-with-reason"},ae={class:"columns"},ne={class:"columns"},ie=Zt(()=>s("span",null,"Outbounds",-1)),se={"data-testid":"dataplane-mtls"},oe={class:"columns"},re=["innerHTML"],de={key:0,"data-testid":"dataplane-subscriptions"},le=H({__name:"DataPlaneDetailView",props:{data:{},mesh:{}},setup(o){const a=lt(),t=o,$=R(()=>t.data.warnings.concat(...t.data.isCertExpired?[{kind:"CERT_EXPIRED"}]:[]));return(B,z)=>{const b=C("KTooltip"),f=C("DataCollection"),l=C("XAction"),k=C("KCard"),I=C("XEmptyState"),x=C("XInputSwitch"),D=C("RouterView"),X=C("XAlert"),A=C("AppView"),U=C("DataSource"),F=C("RouteView");return i(),h(F,{params:{mesh:"",dataPlane:"",inactive:!1},name:"data-plane-detail-view"},{default:n(({route:S,t:m,can:K})=>[d(U,{src:`/meshes/${S.params.mesh}/dataplanes/${S.params.dataPlane}/stats/${t.data.dataplane.networking.inboundAddress}`},{default:n(({data:_,error:M,refresh:G})=>[d(A,null,Y({default:n(()=>[e(),s("div",Qt,[d(k,null,{default:n(()=>[s("div",Wt,[s("div",te,[d(q,null,{title:n(()=>[e(r(m("http.api.property.status")),1)]),body:n(()=>[s("div",ee,[d(ct,{status:t.data.status},null,8,["status"]),e(),t.data.dataplaneType==="standard"?(i(),h(f,{key:0,items:t.data.dataplane.networking.inbounds,predicate:c=>c.state!=="Ready",empty:!1},{default:n(({items:c})=>[d(b,{class:"reason-tooltip"},{content:n(()=>[s("ul",null,[(i(!0),p(y,null,N(c,g=>(i(),p("li",{key:`${g.service}:${g.port}`},r(m("data-planes.routes.item.unhealthy_inbound",{service:g.service,port:g.port})),1))),128))])]),default:n(()=>[d(u(gt),{color:u(ut),size:u(j)},null,8,["color","size"]),e()]),_:2},1024)]),_:2},1032,["items","predicate"])):L("",!0)])]),_:2},1024),e(),K("use zones")&&t.data.zone?(i(),h(q,{key:0},{title:n(()=>[e(`
                    Zone
                  `)]),body:n(()=>[d(l,{to:{name:"zone-cp-detail-view",params:{zone:t.data.zone}}},{default:n(()=>[e(r(t.data.zone),1)]),_:1},8,["to"])]),_:1})):L("",!0),e(),d(q,null,{title:n(()=>[e(`
                    Type
                  `)]),body:n(()=>[e(r(m(`data-planes.type.${t.data.dataplaneType}`)),1)]),_:2},1024),e(),t.data.namespace.length>0?(i(),h(q,{key:1},{title:n(()=>[e(`
                    Namespace
                  `)]),body:n(()=>[e(r(t.data.namespace),1)]),_:1})):L("",!0)]),e(),s("div",ae,[d(q,null,{title:n(()=>[e(r(m("data-planes.routes.item.last_updated")),1)]),body:n(()=>[e(r(m("common.formats.datetime",{value:Date.parse(t.data.modificationTime)})),1)]),_:2},1024),e(),t.data.dataplane.networking.gateway?(i(),p(y,{key:0},[d(q,null,{title:n(()=>[e(r(m("http.api.property.tags")),1)]),body:n(()=>[d(st,{tags:t.data.dataplane.networking.gateway.tags},null,8,["tags"])]),_:2},1024),e(),d(q,null,{title:n(()=>[e(r(m("http.api.property.address")),1)]),body:n(()=>[d(pt,{text:`${t.data.dataplane.networking.address}`},null,8,["text"])]),_:2},1024)],64)):L("",!0)])])]),_:2},1024),e(),d(k,{class:"traffic","data-testid":"dataplane-traffic"},{default:n(()=>[s("div",ne,[d(nt,null,{title:n(()=>[d(u(bt),{display:"inline-block",decorative:"",size:u(j)},null,8,["size"]),e(`
                  Inbounds
                `)]),default:n(()=>[e(),d(Q,{type:"inbound","data-testid":"dataplane-inbounds"},{default:n(()=>[(i(!0),p(y,null,N([t.data.dataplane.networking.type==="gateway"?Object.entries((_==null?void 0:_.inbounds)??{}).reduce((c,[g,v])=>{var T;const w=g.split("_").at(-1);return w===(((T=t.data.dataplane.networking.admin)==null?void 0:T.port)??"9901")?c:c.concat([{...t.data.dataplane.networking.inbounds[0],name:g,port:Number(w),protocol:["http","tcp"].find(E=>typeof v[E]<"u")??"tcp",addressPort:`${t.data.dataplane.networking.inbounds[0].address}:${w}`}])},[]):t.data.dataplane.networking.inbounds],c=>(i(),h(f,{key:c,items:c,predicate:g=>g.port!==49151},Y({default:n(({items:g})=>[(i(!0),p(y,null,N(g,v=>(i(),p(y,{key:`${v.name}`},[(i(!0),p(y,null,N([_==null?void 0:_.inbounds[v.name]],w=>(i(),h(J,{key:w,"data-testid":"dataplane-inbound",protocol:v.protocol,service:K("use service-insights",t.mesh)?v.tags["kuma.io/service"]:"",traffic:typeof M>"u"?w:{name:"",protocol:v.protocol,port:`${v.port}`}},{default:n(()=>[d(l,{"data-action":"",to:{name:(T=>T.includes("bound")?T.replace("-outbound-","-inbound-"):"connection-inbound-summary-overview-view")(String(u(a).name)),params:{connection:v.name},query:{inactive:S.params.inactive}}},{default:n(()=>[e(r(v.name.replace("localhost","").replace("_",":")),1)]),_:2},1032,["to"])]),_:2},1032,["protocol","service","traffic"]))),128))],64))),128))]),_:2},[t.data.dataplaneType==="delegated"?{name:"empty",fn:n(()=>[d(I,null,{default:n(()=>[s("p",null,`
                            This proxy is a delegated gateway therefore `+r(m("common.product.name"))+` does not have any visibility into inbounds for this gateway.
                          `,1)]),_:2},1024)]),key:"0"}:void 0]),1032,["items","predicate"]))),128))]),_:2},1024)]),_:2},1024),e(),d(nt,null,Y({title:n(()=>[d(u(kt),{display:"inline-block",decorative:"",size:u(j)},null,8,["size"]),e(),ie]),default:n(()=>[e(),e(),typeof M>"u"?(i(),p(y,{key:0},[typeof _>"u"?(i(),h(_t,{key:0})):(i(),p(y,{key:1},N(["upstream"],c=>(i(),p(y,{key:c},[d(Q,{type:"passthrough"},{default:n(()=>[d(J,{protocol:"passthrough",traffic:_.passthrough},{default:n(()=>[e(`
                          Non mesh traffic
                        `)]),_:2},1032,["traffic"])]),_:2},1024),e(),d(f,{predicate:S.params.inactive?void 0:([g,v])=>{var w,T;return((typeof v.tcp<"u"?(w=v.tcp)==null?void 0:w[`${c}_cx_rx_bytes_total`]:(T=v.http)==null?void 0:T[`${c}_rq_total`])??0)>0},items:Object.entries(_.outbounds)},{default:n(({items:g})=>[g.length>0?(i(),h(Q,{key:0,type:"outbound","data-testid":"dataplane-outbounds"},{default:n(()=>[(i(),p(y,null,N([/-([a-f0-9]){16}$/],v=>(i(),p(y,{key:v},[(i(!0),p(y,null,N(g,([w,T])=>(i(),h(J,{key:`${w}`,"data-testid":"dataplane-outbound",protocol:["grpc","http","tcp"].find(E=>typeof T[E]<"u")??"tcp",traffic:T,service:T.$resourceMeta.type===""?w.replace(v,""):void 0,direction:c},{default:n(()=>[d(l,{"data-action":"",to:{name:(E=>E.includes("bound")?E.replace("-inbound-","-outbound-"):"connection-outbound-summary-overview-view")(String(u(a).name)),params:{connection:w},query:{inactive:S.params.inactive}}},{default:n(()=>[e(r(w),1)]),_:2},1032,["to"])]),_:2},1032,["protocol","traffic","service","direction"]))),128))],64))),64))]),_:2},1024)):L("",!0)]),_:2},1032,["predicate","items"])],64))),64))],64)):(i(),h(I,{key:1}))]),_:2},[_?{name:"actions",fn:n(()=>[d(x,{modelValue:S.params.inactive,"onUpdate:modelValue":c=>S.params.inactive=c,"data-testid":"dataplane-outbounds-inactive-toggle"},{label:n(()=>[e(`
                      Show inactive
                    `)]),_:2},1032,["modelValue","onUpdate:modelValue"]),e(),d(l,{action:"refresh",appearance:"primary",onClick:G},{default:n(()=>[e(`
                    Refresh
                  `)]),_:2},1032,["onClick"])]),key:"0"}:void 0]),1024)])]),_:2},1024),e(),d(D,null,{default:n(c=>[c.route.name!==S.name?(i(),h(yt,{key:0,width:"670px",onClose:function(){S.replace({name:"data-plane-detail-view",params:{mesh:S.params.mesh,dataPlane:S.params.dataPlane},query:{inactive:S.params.inactive?null:void 0}})}},{default:n(()=>[(i(),h(W(c.Component),{data:c.route.name.includes("-inbound-")?t.data.dataplane.networking.inbounds:(_==null?void 0:_.outbounds)||{},"dataplane-overview":t.data},null,8,["data","dataplane-overview"]))]),_:2},1032,["onClose"])):L("",!0)]),_:2},1024),e(),s("div",se,[s("h2",null,r(m("data-planes.routes.item.mtls.title")),1),e(),t.data.dataplaneInsight.mTLS?(i(!0),p(y,{key:0},N([t.data.dataplaneInsight.mTLS],c=>(i(),h(k,{key:c,class:"mt-4"},{default:n(()=>[s("div",oe,[d(q,null,{title:n(()=>[e(r(m("data-planes.routes.item.mtls.expiration_time.title")),1)]),body:n(()=>[e(r(m("common.formats.datetime",{value:Date.parse(c.certificateExpirationTime)})),1)]),_:2},1024),e(),d(q,null,{title:n(()=>[e(r(m("data-planes.routes.item.mtls.generation_time.title")),1)]),body:n(()=>[e(r(m("common.formats.datetime",{value:Date.parse(c.lastCertificateRegeneration)})),1)]),_:2},1024),e(),d(q,null,{title:n(()=>[e(r(m("data-planes.routes.item.mtls.regenerations.title")),1)]),body:n(()=>[e(r(m("common.formats.integer",{value:c.certificateRegenerations})),1)]),_:2},1024),e(),d(q,null,{title:n(()=>[e(r(m("data-planes.routes.item.mtls.issued_backend.title")),1)]),body:n(()=>[e(r(c.issuedBackend),1)]),_:2},1024),e(),d(q,null,{title:n(()=>[e(r(m("data-planes.routes.item.mtls.supported_backends.title")),1)]),body:n(()=>[s("ul",null,[(i(!0),p(y,null,N(c.supportedBackends,g=>(i(),p("li",{key:g},r(g),1))),128))])]),_:2},1024)])]),_:2},1024))),128)):(i(),h(X,{key:1,class:"mt-4",appearance:"warning"},{default:n(()=>[s("div",{innerHTML:m("data-planes.routes.item.mtls.disabled")},null,8,re)]),_:2},1024))]),e(),t.data.dataplaneInsight.subscriptions.length>0?(i(),p("div",de,[s("h2",null,r(m("data-planes.routes.item.subscriptions.title")),1),e(),d(k,{class:"mt-4"},{default:n(()=>[d(vt,{subscriptions:t.data.dataplaneInsight.subscriptions},null,8,["subscriptions"])]),_:1})])):L("",!0)])]),_:2},[$.value.length>0||M?{name:"notifications",fn:n(()=>[s("ul",Yt,[(i(!0),p(y,null,N($.value,c=>(i(),p("li",{key:c.kind,"data-testid":`warning-${c.kind}`,innerHTML:m(`common.warnings.${c.kind}`,c.payload)},null,8,jt))),128)),e(),M?(i(),p("li",Jt,[e(`
              The below view is not enhanced with runtime stats (Error loading stats: `),s("strong",null,r(M.toString()),1),e(`)
            `)])):L("",!0)])]),key:"0"}:void 0]),1024)]),_:2},1032,["src"])]),_:1})}}}),ge=P(le,[["__scopeId","data-v-a37f5851"]]);export{ge as default};
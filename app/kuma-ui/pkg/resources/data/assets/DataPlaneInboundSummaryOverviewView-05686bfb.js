import{d as _,a as r,o as m,b as h,w as t,e as a,m as y,X as n,f as e,t as i}from"./index-e9b1bd55.js";import{T as f}from"./TagList-e570e7b5.js";import{T as l}from"./TextWithCopyButton-6cad902e.js";import"./CopyButton-5e00b271.js";import"./index-fce48c05.js";const g={class:"stack-with-borders"},z=_({__name:"DataPlaneInboundSummaryOverviewView",props:{data:{}},setup(d){const o=d;return(w,v)=>{const s=r("KBadge"),p=r("AppView"),c=r("RouteView");return m(),h(c,{name:"data-plane-inbound-summary-overview-view"},{default:t(({t:u})=>[a(p,null,{default:t(()=>[y("div",g,[a(n,{layout:"horizontal"},{title:t(()=>[e(`
            Tags
          `)]),body:t(()=>[a(f,{tags:o.data.tags,alignment:"right"},null,8,["tags"])]),_:1}),e(),a(n,{layout:"horizontal"},{title:t(()=>[e(`
            Status
          `)]),body:t(()=>[a(s,{appearance:o.data.health.ready?"success":"danger"},{default:t(()=>[e(i(o.data.health.ready?"Healthy":"Unhealthy"),1)]),_:1},8,["appearance"])]),_:1}),e(),a(n,{layout:"horizontal"},{title:t(()=>[e(`
            Protocol
          `)]),body:t(()=>[a(s,{appearance:"info"},{default:t(()=>[e(i(u(`http.api.value.${o.data.protocol}`)),1)]),_:2},1024)]),_:2},1024),e(),a(n,{layout:"horizontal"},{title:t(()=>[e(`
            Address
          `)]),body:t(()=>[a(l,{text:`${o.data.addressPort}`},null,8,["text"])]),_:1}),e(),a(n,{layout:"horizontal"},{title:t(()=>[e(`
            Service Address
          `)]),body:t(()=>[a(l,{text:`${o.data.serviceAddressPort}`},null,8,["text"])]),_:1})])]),_:2},1024)]),_:1})}}});export{z as default};
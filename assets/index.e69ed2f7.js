import{r as f,o as d,c as m,a as p,b as _,d as h,e as y}from"./vendor.32300930.js";const v=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}};v();var g=(i,s)=>{const n=i.__vccOpts||i;for(const[t,e]of s)n[t]=e;return n};const E={},L={class:"App"};function O(i,s){const n=f("router-view");return d(),m("div",L,[p(n)])}var b=g(E,[["render",O]]);const P="modulepreload",c={},k="/Large-screen-website/",a=function(s,n){return!n||n.length===0?s():Promise.all(n.map(t=>{if(t=`${k}${t}`,t in c)return;c[t]=!0;const e=t.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${r}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":P,e||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),e)return new Promise((l,u)=>{o.addEventListener("load",l),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>s())},w=[{path:"/",redirect:"/index"},{path:"/index",name:"Index",component:()=>a(()=>import("./Index.c31eec88.js"),["assets/Index.c31eec88.js","assets/Index.770a1905.css","assets/vendor.32300930.js"])},{path:"/config",name:"Config",component:()=>a(()=>import("./Config.7635c929.js"),["assets/Config.7635c929.js","assets/vendor.32300930.js"])}],x=_({history:h(),routes:w});y(b).use(x).mount("#root");export{g as _};

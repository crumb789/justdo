if(!self.define){let s,e={};const o=(o,n)=>(o=new URL(o+".js",n).href,e[o]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=o,s.onload=e,document.head.appendChild(s)}else s=o,importScripts(o),e()})).then((()=>{let s=e[o];if(!s)throw new Error(`Module ${o} didn’t register its module`);return s})));self.define=(n,r)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let u={};const l=s=>o(s,i),t={module:{uri:i},exports:u,require:l};e[i]=Promise.all(n.map((s=>t[s]||l(s)))).then((s=>(r(...s),u)))}}define(["./workbox-5b385ed2"],(function(s){"use strict";s.setCacheNameDetails({prefix:"one"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/justdo/css/190.09408fae.css",revision:null},{url:"/justdo/css/app.4f79fdfe.css",revision:null},{url:"/justdo/css/chunk-vendors.be7abf4f.css",revision:null},{url:"/justdo/img/crumb-logo.962c51d5.png",revision:null},{url:"/justdo/img/smoke1-svgrepo-com.48f7bac0.svg",revision:null},{url:"/justdo/index.html",revision:"308abb90aceaa76cff5f8fc2c2d9ac6f"},{url:"/justdo/js/190.be6c5be0.js",revision:null},{url:"/justdo/js/app.1c06bef0.js",revision:null},{url:"/justdo/js/chunk-vendors.654b9222.js",revision:null},{url:"/justdo/manifest.json",revision:"1dc8910af6de19669123d09842597e3c"},{url:"/justdo/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map

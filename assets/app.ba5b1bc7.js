import{u as p,v as i,p as s,a1 as c,a2 as l,a3 as d,a4 as f,a5 as m,a6 as h,a7 as g,a8 as A,a9 as v,aa as C,S as P,d as y,j as _,ab as w,ac as T,ad as b,ae as E}from"./chunks/framework.5cd54ca9.js";import{t as R}from"./chunks/theme.c23b802d.js";const S={};const D={...R,setup(){const{lang:e}=p();i(()=>{s&&(document.cookie=`nf_lang=${e.value}; expires=Mon, 1 Jan 2024 00:00:00 UTC; path=/`)})},...S};function u(e){if(e.extends){const t=u(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const o=u(D),j=y({name:"VitePressApp",setup(){const{site:e}=p();return _(()=>{i(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),w(),T(),b(),o.setup&&o.setup(),()=>E(o.Layout)}});async function x(){const e=$(),t=O();t.provide(l,e);const a=d(e.route);return t.provide(f,a),t.component("Content",m),t.component("ClientOnly",h),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:t,router:e,siteData:g}),{app:t,router:e,data:a}}function O(){return A(j)}function $(){let e=s,t;return v(a=>{let n=C(a),r=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),r=P(()=>import(n),[])),s&&(e=!1),r},o.NotFound)}s&&x().then(({app:e,router:t,data:a})=>{t.go().then(()=>{c(t.route,a.site),e.mount("#app")})});export{x as createApp};
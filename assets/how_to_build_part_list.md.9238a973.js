import{_ as f,o as r,c as o,k as t,F as m,B as p,t as l,e as w,a as u,E as k,O as g}from"./chunks/framework.5cd54ca9.js";const y={data(){return{tracker:2,components:[{name:"ESP Microcontroller",choices:[{name:"Bring Your Own",amount:()=>this.tracker,cost:1.85,costAll:()=>this.tracker*0,links:"If you already have a supported camera capable ESP32 or sourced elsewhere."},{name:"Seeed Studio XIAO Sense ESP32-S3",amount:()=>this.tracker,cost:12.87,costAll:()=>this.tracker*12.87+3.18,links:'<a href="https://www.aliexpress.com/item/3256804601970891.html">AliExpress XIAO Sense</a> Recommended'},{name:"ESP32-CAM",amount:()=>this.tracker,cost:12.87,costAll:()=>this.tracker*4.69+3.18,links:'<a href="https://www.aliexpress.us/item/3256806008099661.html">AliExpress ESP32 CAM</a> Requires additional programmer'},{name:"FREENOVE ESP32-S3-WROOM",amount:()=>this.tracker,cost:19.95,costAll:()=>this.tracker*19.95,links:'<a href="https://www.amazon.com/FREENOVE-ESP32-S3-WROOM-Compatible-Wireless-Detailed/dp/B0BMQ8F7FN">Amazon</a> Large, more expensive than XIAO'}],selectedChoice:1,isOpen:!1},{name:"Camera",choices:[{name:"Bring Your Own",amount:()=>this.tracker,cost:0,costAll:()=>this.tracker*0,links:"If you already have a supported camera or sourced elsewhere."},{name:"130 Degree NO-IR",amount:()=>this.tracker,cost:5.41,costAll:()=>this.tracker*5.41,links:'<a href="https://www.aliexpress.com/item/3256802853835121.html">AliExpress</a> Select "Color: 75MM-130 Degree" Must manually remove IR filter'},{name:"160 Degree IR",amount:()=>this.tracker,cost:4.26,costAll:()=>this.tracker*4.26,links:'<a href="https://www.aliexpress.com/item/3256802853835121.html">AliExpress</a> Select "Color: 75MM-160 850nm"'}],selectedChoice:1,isOpen:!1},{name:"IR LEDs",choices:[{name:"Bring Your Own",amount:()=>this.tracker,cost:0,costAll:()=>this.tracker*0,links:'<a href="https://docs.eyetrackvr.dev/getting_started/led_safety">IR LED Safety<a/> If you already have safe IR LED hardware and know what you are doing.'},{name:"Official V4 mini No-Solder",amount:()=>1,cost:30,costAll:()=>this.tracker+30+5,links:'<a href="https://store.eyetrackvr.dev/products/v4-mini-fully-solderless-kit">ETVR Store</a> Length depending on HMD'},{name:"Official V4 mini Solder-Required",amount:()=>1,cost:25,costAll:()=>this.tracker+25+3,links:'<a href="https://store.eyetrackvr.dev/products/v4-mini-some-assemblly-required">ETVR Store</a> Must solder up your own wires'},{name:"Official V4 lite Assemble Yourself",amount:()=>1,cost:7,costAll:()=>this.tracker+7+3,links:'<a href="https://store.eyetrackvr.dev/products/v4-1-lite-diy-led-kit">ETVR Store</a> Must assemble yourself'}],selectedChoice:1,isOpen:!1},{name:"USB Hub",choices:[{name:"Bring Your Own",amount:()=>this.tracker,cost:0,costAll:()=>this.tracker*0,links:"If you already have safe IR LED hardware and know what you are doing."},{name:"4 port USB 3.2 LDLrui (MTT Usually)",amount:()=>1,cost:17.99,costAll:()=>this.tracker+17.99,links:'<a href="https://www.amazon.com/dp/B09NDQRLBT/">Amazon</a> Usually these are MTT, but sometimes not'},{name:"4 port USB 3.2 Sitecom CN-385 Hub (MTT)",amount:()=>1,cost:40.53,costAll:()=>this.tracker+17.99,links:'<a href="https://www.amazon.com/gp/product/B07YN54Q33/">Amazon</a> Known good MTT hub, but expensive'},{name:"4 port USB 2.0 Breakout (Not MTT)",amount:()=>1,cost:1.41,costAll:()=>this.tracker+1.41+1.99,links:'<a href="https://www.aliexpress.us/item/3256801220206638.html">AliExpress</a> Small but non MTT hub breakout'},{name:"3 port USB 3.0 Hub With Power Passthrough (MTT)",amount:()=>1,cost:17.99,costAll:()=>this.tracker+1.41,links:'<a href="https://www.amazon.com/uni-Charging-Thunderbolt-Aluminum-Pixelbook/dp/B08SVZFFPP/">Amazon</a> Great for Quest due to power passthrough'}],selectedChoice:1,isOpen:!1},{name:"3D Printed Mounts",choices:[{name:"Print Yourself",amount:()=>this.tracker,cost:0,costAll:()=>this.tracker*0,links:"If you have a 3d printer or have access to one somewhere."},{name:"JLCPCB Print Service, JLC3DP",amount:()=>this.tracker,cost:2,costAll:()=>this.tracker*2+5,links:'<a href="https://jlc3dp.com/3d-printing-quote">JLC3DP</a> '}],selectedChoice:0,isOpen:!1}],total:0}},methods:{updatePrices(){let s=0;this.components.forEach(a=>{if(a.choices.length>1){const i=a.choices[a.selectedChoice];s+=i.costAll(this.tracker)}else a.choices.length===1&&(s+=a.choices[0].costAll(this.tracker))}),this.total=s},toggleDropdown(s){this.components.forEach(a=>{a!==s&&(a.isOpen=!1)}),s.isOpen=!s.isOpen},isOptionsAbove(s){if(this.$refs[`select-${s.name}`]){const a=this.$refs[`select-${s.name}`].getBoundingClientRect();return window.innerHeight-a.bottom<200&&a.top>200}return!1},selectOption(s,a){s.selectedChoice=a,s.isOpen=!1,this.updatePrices()},closeAllDropdowns(){this.components.forEach(s=>{s.isOpen=!1})},handleOutsideClick(s){s.target.closest(".custom-select")||this.closeAllDropdowns()}},mounted(){this.updatePrices(),document.addEventListener("click",this.handleOutsideClick)},beforeUnmount(){document.removeEventListener("click",this.handleOutsideClick)}},b={class:"table-container"},S={class:"component-col"},_={class:"choice-col"},v=["onClick"],E={class:"selected-option"},O={key:0,class:"options"},x=["onClick"],B={key:1},P=["innerHTML"];function T(s,a,i,A,n,c){return r(),o("div",b,[t("table",null,[a[0]||(a[0]=t("thead",null,[t("tr",null,[t("th",{class:"component-col"},"Component"),t("th",{class:"choice-col"},"Choice"),t("th",{class:"amount-col"},"Amount"),t("th",{class:"cost-col"},"Cost"),t("th",{class:"cost-all-col"},"Cost All"),t("th",{class:"links-col"},"Links")])],-1)),t("tbody",null,[(r(!0),o(m,null,p(n.components,e=>(r(),o("tr",{key:e.name},[t("th",S,l(e.name),1),t("td",_,[e.choices.length>1?(r(),o("div",{key:0,class:"custom-select",onClick:h=>c.toggleDropdown(e)},[t("div",E,l(e.choices[e.selectedChoice].name),1),e.isOpen?(r(),o("div",O,[(r(!0),o(m,null,p(e.choices,(h,d)=>(r(),o("div",{key:d,onClick:C=>c.selectOption(e,d),class:"option"},l(h.name),9,x))),128))])):w("",!0)],8,v)):(r(),o("span",B,l(e.choices[0].name),1))]),t("td",null,l(e.selectedChoice?e.choices[e.selectedChoice].amount(n.tracker):0),1),t("td",null,l(e.selectedChoice?"$"+e.choices[e.selectedChoice].cost.toFixed(2):0),1),t("td",null,l(e.selectedChoice?"~$"+e.choices[e.selectedChoice].costAll().toFixed(2):0),1),t("td",{innerHTML:e.selectedChoice?e.choices[e.selectedChoice].links:""},null,8,P)]))),128))])]),t("p",null,"Total: $"+l(n.total.toFixed(2)),1)])}const D=f(y,[["render",T],["__scopeId","data-v-ff07ae5d"]]);const R={data(){return{tracker:2,components:[{name:"Type A USB Breakout",choices:[{name:"Bring Your Own",amount:()=>this.tracker,cost:1.85,costAll:()=>this.tracker*0,links:"If you do not need or already have."},{name:"Type A USB Breakout Bare (AliExpress)",amount:()=>1,cost:1.18,costAll:()=>this.tracker+1.18,links:'<a href="https://www.aliexpress.us/item/2255801092919590.html">AliExpress</a>'},{name:"Type A USB Breakout Bare (Amazon)",amount:()=>1,cost:6.49,costAll:()=>this.tracker+5.49,links:'<a href="https://www.amazon.com/10Gtek-DIP-Breakout-Adapter-2-54mm/dp/B09LC8WQCD/">Amazon</a>'},{name:"Type A USB Breakout With Cover (AliExpress)",amount:()=>1,cost:2.2,costAll:()=>this.tracker+1.2+1.99,links:'<a href="https://www.aliexpress.us/item/2251832820552545.html/">AliExpress</a>'},{name:"Type A USB Breakout With Wire and Cover (Amazon)",amount:()=>1,cost:9.6,costAll:()=>this.tracker+8.6,links:'<a href="https://www.amazon.com/Pigtail-Extension-Cables-Connector-Replacement/dp/B09ZQNJ2DJ/">Amazon</a>'}],selectedChoice:0,isOpen:!1},{name:"USB-C Breakout",choices:[{name:"Bring Your Own",amount:()=>this.tracker,cost:0,costAll:()=>this.tracker*0,links:"If you do not need or already have."},{name:"AliExpress Male & Female",amount:()=>1,cost:1.19,costAll:()=>this.tracker+1.19+1.37,links:'<a href="https://www.aliexpress.us/item/3256801151667308.html">AliExpress</a> Choose: "Color: 5Set".'},{name:"AliExpress Vertical Male",amount:()=>1,cost:2.37,costAll:()=>this.tracker+.37+1.99,links:'<a href="https://www.aliexpress.us/item/3256804002116469.html">AliExpress</a>'}],selectedChoice:0,isOpen:!1},{name:"Wire for ESPs",choices:[{name:"Bring Your Own",amount:()=>this.tracker,cost:0,costAll:()=>this.tracker*0,links:"If you do not need wire or already have."},{name:"Silicone Wire Kit",amount:()=>1,cost:5.96,costAll:()=>this.tracker+5.96+.99,links:'<a href="https://www.aliexpress.us/item/3256806164419666.html">AliExpress</a> 30 AWG or lower'},{name:"Generic Wire",amount:()=>1,cost:.7,costAll:()=>this.tracker+.7+1.24,links:'<a href="https://a.aliexpress.com/_mK72cy6">AliExpress</a> Select "Specification: 30 AWG or lower"'}],selectedChoice:0,isOpen:!1},{name:"Wire for LEDs",choices:[{name:"Bring Your Own",amount:()=>this.tracker,cost:0,costAll:()=>this.tracker*0,links:"If you do not need wire or already have."},{name:"Silicone Wire Kit",amount:()=>1,cost:5.96,costAll:()=>this.tracker+5.96+.99,links:'<a href="https://www.aliexpress.us/item/3256806164419666.html">AliExpress</a> 30 AWG or higher'},{name:"Generic Wire",amount:()=>1,cost:.7,costAll:()=>this.tracker+.7+1.24,links:'<a href="https://a.aliexpress.com/_mK72cy6">AliExpress</a> Select "Specification: 30 AWG or higher"'}],selectedChoice:0,isOpen:!1},{name:"Camera Extension Cables",choices:[{name:"Bring Your Own",amount:()=>this.tracker,cost:0,costAll:()=>this.tracker*0,links:"If you do not need or already have."},{name:"AliExpress 24pin 0.5mm Pitch",amount:()=>1,cost:1.33,costAll:()=>this.tracker+.33+1.99,links:'<a href="https://www.aliexpress.us/item/2255799835842411.html">AliExpress</a> Choose: "Insert Type: 24p 0.5mm pitch" and Type A. Length depends on HMD, usually 150mm or 200mm.'},{name:"Adafruit 24 pin 0.5mm pitch",amount:()=>this.tracker,cost:1.35,costAll:()=>this.tracker*1.35+6,links:'<a href="https://www.adafruit.com/product/4230">Adafruit</a> 250mm'}],selectedChoice:0,isOpen:!1},{name:"Camera Extension Connectors",choices:[{name:"Bring Your Own",amount:()=>this.tracker,cost:0,costAll:()=>this.tracker*0,links:"If you do not need or already have."},{name:"AliExpress 24 pin",amount:()=>1,cost:1.32,costAll:()=>this.tracker+.32+1.99,links:'<a href="https://www.aliexpress.us/item/3256804096715690.html">AliExpress</a> Choose: "Pins: 24P".'},{name:"Adafruit 24 pin",amount:()=>this.tracker,cost:.86,costAll:()=>this.tracker*.865+6,links:'<a href="https://www.adafruit.com/product/4524">Adafruit</a>'}],selectedChoice:0,isOpen:!1},{name:"External Antennas",choices:[{name:"Bring Your Own",amount:()=>this.tracker,cost:0,costAll:()=>this.tracker*0,links:"If you do not need or already have."},{name:"AliExpress Small",amount:()=>1,cost:.16,costAll:()=>this.tracker*.16+3.48,links:'<a href="https://www.aliexpress.us/item/2251832800433720.html">AliExpress</a> Choose: "Color: 2.4G Antenna".'},{name:"Amazon Large",amount:()=>1,cost:9.99,costAll:()=>this.tracker+7.99,links:'<a href="https://www.amazon.com/Diymall-Antenna-Antennas-Arduino-ESP-072pcs/dp/B00ZBJNO9O/">Amazon</a>'}],selectedChoice:0,isOpen:!1},{name:"USB-C Cables",choices:[{name:"Bring Your Own",amount:()=>this.tracker,cost:0,costAll:()=>this.tracker*0,links:"If you do not need or already have."},{name:"Short USB-C to USB-C Amazon",amount:()=>1,cost:6.29,costAll:()=>this.tracker+5.29,links:'<a href="https://www.amazon.com/gp/product/B09C2D9Z7T/ref=ox_sc_act_title_2?smid=A10X1BEP2GKRDQ&th=1">Amazon</a>'},{name:"Short USB-A to USB-C Amazon",amount:()=>1,cost:7.99,costAll:()=>this.tracker+5.99,links:'<a href="https://www.amazon.com/Charging-Durable-Station-Compatible-Samsung/dp/B08LL1SVZD/">Amazon</a>'}],selectedChoice:0,isOpen:!1},{name:"V4 LED Wire Extensions/Replacements",choices:[{name:"Bring Your Own",amount:()=>this.tracker,cost:0,costAll:()=>this.tracker*0,links:"If you do not need or already have."},{name:"110mm Extension/Replacement",amount:()=>1,cost:1.5,costAll:()=>this.tracker+1.5+5,links:'<a href="https://store.eyetrackvr.dev/products/2x-110mm-replacement-wires">ETVR Store</a>'},{name:"200mm Extension/Replacement",amount:()=>1,cost:1.5,costAll:()=>this.tracker+1.5+5,links:'<a href="https://store.eyetrackvr.dev/products/2x-200mm-replacement-wires">ETVR Store</a>'}],selectedChoice:0,isOpen:!1}],total:0}},methods:{updatePrices(){let s=0;this.components.forEach(a=>{if(a.choices.length>1){const i=a.choices[a.selectedChoice];s+=i.costAll(this.tracker)}else a.choices.length===1&&(s+=a.choices[0].costAll(this.tracker))}),this.total=s},toggleDropdown(s){this.components.forEach(a=>{a!==s&&(a.isOpen=!1)}),s.isOpen=!s.isOpen},isOptionsAbove(s){if(this.$refs[`select-${s.name}`]){const a=this.$refs[`select-${s.name}`].getBoundingClientRect();return window.innerHeight-a.bottom<200&&a.top>200}return!1},selectOption(s,a){s.selectedChoice=a,s.isOpen=!1,this.updatePrices()},closeAllDropdowns(){this.components.forEach(s=>{s.isOpen=!1})},handleOutsideClick(s){s.target.closest(".custom-select")||this.closeAllDropdowns()}},mounted(){this.updatePrices(),document.addEventListener("click",this.handleOutsideClick)},beforeUnmount(){document.removeEventListener("click",this.handleOutsideClick)}},M={class:"table-container"},W={class:"component-col"},I={class:"choice-col"},L=["onClick"],z={class:"selected-option"},U={key:0,class:"options"},$=["onClick"],V={key:1},q=["innerHTML"];function F(s,a,i,A,n,c){return r(),o("div",M,[t("table",null,[a[0]||(a[0]=t("thead",null,[t("tr",null,[t("th",{class:"component-col"},"Component"),t("th",{class:"choice-col"},"Choice"),t("th",{class:"amount-col"},"Amount"),t("th",{class:"cost-col"},"Cost"),t("th",{class:"cost-all-col"},"Cost All"),t("th",{class:"links-col"},"Links")])],-1)),t("tbody",null,[(r(!0),o(m,null,p(n.components,e=>(r(),o("tr",{key:e.name},[t("th",W,l(e.name),1),t("td",I,[e.choices.length>1?(r(),o("div",{key:0,class:"custom-select",onClick:h=>c.toggleDropdown(e)},[t("div",z,l(e.choices[e.selectedChoice].name),1),e.isOpen?(r(),o("div",U,[(r(!0),o(m,null,p(e.choices,(h,d)=>(r(),o("div",{key:d,onClick:C=>c.selectOption(e,d),class:"option"},l(h.name),9,$))),128))])):w("",!0)],8,L)):(r(),o("span",V,l(e.choices[0].name),1))]),t("td",null,l(e.selectedChoice?e.choices[e.selectedChoice].amount(n.tracker):0),1),t("td",null,l(e.selectedChoice?"$"+e.choices[e.selectedChoice].cost.toFixed(2):0),1),t("td",null,l(e.selectedChoice?"~$"+e.choices[e.selectedChoice].costAll().toFixed(2):0),1),t("td",{innerHTML:e.selectedChoice?e.choices[e.selectedChoice].links:""},null,8,q)]))),128))])]),t("p",null,"Total: $"+l(n.total.toFixed(2)),1)])}const N=f(R,[["render",F],["__scopeId","data-v-3f9fd8fa"]]),G=JSON.parse('{"title":"Required Parts:","description":"","frontmatter":{},"headers":[],"relativePath":"how_to_build/part_list.md","filePath":"how_to_build/part_list.md","lastUpdated":1719882555000}'),H={name:"how_to_build/part_list.md"},J=Object.assign(H,{setup(s){return(a,i)=>(r(),o("div",null,[i[0]||(i[0]=t("p",null,"WIP new parts list. 3D printed parts will live on their own page.",-1)),i[1]||(i[1]=t("p",null,[u("Use the "),t("strong",null,"interactive"),u(" tables below to select parts!")],-1)),i[2]||(i[2]=t("h1",{id:"required-parts",tabindex:"-1"},[u("Required Parts: "),t("a",{class:"header-anchor",href:"#required-parts","aria-label":'Permalink to "Required Parts:"'},"​")],-1)),k(D),i[3]||(i[3]=t("h1",{id:"additional-parts",tabindex:"-1"},[u("Additional Parts: "),t("a",{class:"header-anchor",href:"#additional-parts","aria-label":'Permalink to "Additional Parts:"'},"​")],-1)),k(N),i[4]||(i[4]=g('<p><small> Table modified greatly from the table on <a href="https://docs.slimevr.dev/diy/components-guide.html" target="_blank" rel="noreferrer">SlimeVR&#39;s Docs</a> which was created by <a href="https://github.com/carl-anders" target="_blank" rel="noreferrer">Carl</a></small></p><h2 id="esp-setup-options" tabindex="-1">ESP setup options: <a class="header-anchor" href="#esp-setup-options" aria-label="Permalink to &quot;ESP setup options:&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>There are two primary categories of trackers supported: wireless and wired. It&#39;s super important that you really look at all your options and consider your use case before making a decision.</p></div><h2 id="option-1-wireless-over-wifi-2-4-ghz" tabindex="-1">Option 1: Wireless over WiFi 2.4 GHz <a class="header-anchor" href="#option-1-wireless-over-wifi-2-4-ghz" aria-label="Permalink to &quot;Option 1: Wireless over WiFi 2.4 GHz&quot;">​</a></h2><h3 id="wireless-capable-esps" tabindex="-1">Wireless Capable ESPs: <a class="header-anchor" href="#wireless-capable-esps" aria-label="Permalink to &quot;Wireless Capable ESPs:&quot;">​</a></h3><ul><li>Seeed Studio XIAO Sense</li><li>ESP32-CAM</li><li>FREENOVE ESP32-S3-WROOM CAM Board</li></ul><p>This offers a good starting point as the ESP32 CAM boards are cheaper than wired capable trackers. However, they can be a bit more temperamental and if you are using a wired headset, they don&#39;t really make sense.</p><p><strong>Pros:</strong></p><ul><li>Not as experimental</li><li>Less cables (power only)</li><li>No issues with USB hubs</li></ul><p><strong>Cons:</strong></p><ul><li>Requires two external antennas for optimal streaming quality</li><li>Requires WiFi 2.4 GHz router or access point in reasonable proximity</li><li>High risk of radio interference with FBT and other WiFi 2.4 GHz devices</li><li>ESP32-CAM uses more power and heats up due to radio power needs</li></ul><h2 id="option-2-wired-over-usb-serial-in-beta" tabindex="-1">Option 2: Wired over USB Serial (in beta) <a class="header-anchor" href="#option-2-wired-over-usb-serial-in-beta" aria-label="Permalink to &quot;Option 2: Wired over USB Serial (in beta)&quot;">​</a></h2><h3 id="wired-capable-esps" tabindex="-1">Wired Capable ESPs: <a class="header-anchor" href="#wired-capable-esps" aria-label="Permalink to &quot;Wired Capable ESPs:&quot;">​</a></h3><ul><li>Seeed Studio XIAO Sense</li><li>FREENOVE ESP32-S3-WROOM CAM Board</li></ul><p>This is our latest setup recommended for users with wired headsets such as the Valve Index.</p><p><strong>Pros:</strong></p><ul><li>Much better performance and higher framerate up to 70 FPS with lower latency</li><li>No conflicts with advanced FBT setups such as Vive or Tundra Trackers</li><li>Can be wireless or wired</li><li>Less soldering required</li></ul><p><strong>Cons:</strong></p><ul><li>Requires USB port i.e. on Valve Index and USB hub mounted on your headset</li><li>Can be slightly more costly</li><li>When in use with a Vive Facial Tracker, an MTT USB hub is required</li></ul>',19))]))}});export{G as __pageData,J as default};
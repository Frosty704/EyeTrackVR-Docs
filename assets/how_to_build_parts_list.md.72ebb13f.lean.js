import{_ as o,a as s}from"./chunks/index.b5dd7625.js";import{_ as h}from"./chunks/PartsList.24207c5d.js";import{o as p,c as d,k as r,a as t,E as a,w as i,l,O as n}from"./chunks/framework.a4daa24a.js";import"./chunks/Accordion.6b599df0.js";const k=JSON.parse('{"title":"Parts List","description":"","frontmatter":{},"headers":[],"relativePath":"how_to_build/parts_list.md","filePath":"how_to_build/parts_list.md","lastUpdated":1718650130000}'),u={name:"how_to_build/parts_list.md"},y=Object.assign(u,{setup(m){return(c,e)=>(p(),d("div",null,[e[11]||(e[11]=r("h1",{class:"text-[var(--font-accent)]",id:"parts-list",tabindex:"-1"},[t("Parts List "),r("a",{class:"header-anchor",href:"#parts-list","aria-label":'Permalink to "Parts List {.text-[var(--font-accent)]}"'},"​")],-1)),a(o,{options:l(s).parts_list_one},{content:i(()=>e[0]||(e[0]=[r("p",null," Please note that no hardware has been fully set in stone, all purchases are at your own risk in case of hardware changes. ",-1)])),_:1},8,["options"]),a(o,{options:l(s).parts_list_three},{content:i(()=>e[1]||(e[1]=[r("p",null," It is good practice to buy more than needed in some cases, namely cameras,programmers and ESPs. This reduces the risk of a DOA (dead on arrival) causing a delay. ",-1)])),_:1},8,["options"]),e[12]||(e[12]=n('<h2 id="esp-setup-options" tabindex="-1">ESP setup options: <a class="header-anchor" href="#esp-setup-options" aria-label="Permalink to &quot;ESP setup options:&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>There are two primary categories of trackers supported: wireless and wired. It&#39;s super important that you really look at all your options and consider your use case before making a decision.</p></div><h3 id="option-1-wireless-over-wifi-2-4-ghz" tabindex="-1">Option 1: Wireless over WiFi 2.4 GHz <a class="header-anchor" href="#option-1-wireless-over-wifi-2-4-ghz" aria-label="Permalink to &quot;Option 1: Wireless over WiFi 2.4 GHz&quot;">​</a></h3><p>This offers a good starting point as the ESP boards are cheaper than wired capable trackers. However, they can be a bit more temperamental and if you are using a wired headset, they start to make less sense.</p><p><strong>Pros:</strong></p><ul><li>Wider user adoption and greater support</li><li>Low weight, less cables, easier to manage</li></ul><p><strong>Cons:</strong></p><ul><li>Requires two external antennas for optimal streaming quality</li><li>Requires WiFi 2.4 GHz router or access point in reasonable proximity</li><li>Risk of radio interference with FBT and other WiFi 2.4 GHz devices</li><li>ESP32-CAM uses more power and heats up due to radio module power needs</li></ul><h3 id="option-2-wired-over-usb-serial-in-beta" tabindex="-1">Option 2: Wired over USB Serial (in beta) <a class="header-anchor" href="#option-2-wired-over-usb-serial-in-beta" aria-label="Permalink to &quot;Option 2: Wired over USB Serial (in beta)&quot;">​</a></h3><p>This is our latest setup recommended for users with wired headsets such as the Valve Index.</p><p><strong>Pros:</strong></p><ul><li>Much better performance and higher framerates up to 70 FPS with lower latency</li><li>No conflicts with advanced FBT setups such as Vive or Tundra Trackers</li><li>Can be wireless or wired</li><li>Less soldering required</li></ul><p><strong>Cons:</strong></p><ul><li>Requires USB port i.e. on Valve Index and USB hub mounted on your headset</li><li>Can be more costly</li></ul><h2 id="required-parts" tabindex="-1">Required parts <a class="header-anchor" href="#required-parts" aria-label="Permalink to &quot;Required parts&quot;">​</a></h2><p>With that in mind, here are the required parts for the setup.</p><h3 id="tracker-boards" tabindex="-1">Tracker boards: <a class="header-anchor" href="#tracker-boards" aria-label="Permalink to &quot;Tracker boards:&quot;">​</a></h3><ul><li><h4 id="recommended" tabindex="-1">Recommended <a class="header-anchor" href="#recommended" aria-label="Permalink to &quot;Recommended&quot;">​</a></h4><ul><li>2x XIAO ESP32-S3 Sense Modules<br> Very small size, wireless and wired support, does not require an additional programmer or separate antennas: <a href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank" rel="noreferrer">SeedStudio</a></li></ul><p><a href="https://www.aliexpress.com/item/3256804601970891.html" target="_blank" rel="noreferrer">AliExpress</a></p><p>Alternatively:</p><ul><li>2x Freenove ESP 32-S3 WROOM<br> Much larger, price may be higher than the XIAOs, supports wired and wireless as well, does not need a separate programmer, <strong>does not support a separate antenna</strong>. <a href="https://www.amazon.com/FREENOVE-ESP32-S3-WROOM-Compatible-Wireless-Detailed/dp/B0BMQ8F7FN" target="_blank" rel="noreferrer">Amazon</a></li></ul></li><li><h4 id="a-cheaper-wireless-only-alternative" tabindex="-1">A cheaper, wireless only alternative: <a class="header-anchor" href="#a-cheaper-wireless-only-alternative" aria-label="Permalink to &quot;A cheaper, wireless only alternative:&quot;">​</a></h4><ul><li><p>2x ESPCAM32 Modules - They are cheaper, requires a separate programmer board, supports only wireless streaming and may require some soldering for attaching separate antennas: <a href="https://a.aliexpress.com/_mKjL9Cq" target="_blank" rel="noreferrer">AliExpress</a><br> This board also requires a special programmer board in order to flash the firmware. You&#39;ll need only one: <a href="https://a.aliexpress.com/_mPaPgPu" target="_blank" rel="noreferrer">AliExpress</a> for just programmers or <a href="https://www.amazon.com/DORHEA-Bluetooth-Development-4-75V-5-25V-Raspberry/dp/B08ZS5YWCG/" target="_blank" rel="noreferrer">Amazon</a> for 3 ESP32-Cams and programmers without the proper cameras</p></li><li><p>2x External antennas for ESPs Required if you&#39;re running vive/tundra full body tracking or having issues with streaming. See the full build guide on how to configure the ESP board for antenna use.</p><ul><li><p>Small (what Prohurtz uses): <a href="https://a.aliexpress.com/_ms1TzXc" target="_blank" rel="noreferrer">AliExpress</a></p></li><li><p>Large: <a href="https://www.aliexpress.com/item/2255800868378357.html" target="_blank" rel="noreferrer">AliExpress</a><br><a href="https://www.amazon.com/gp/product/B09K3ZPY5Z/" target="_blank" rel="noreferrer">Amazon</a></p></li></ul></li></ul></li></ul><h3 id="cameras" tabindex="-1">Cameras <a class="header-anchor" href="#cameras" aria-label="Permalink to &quot;Cameras&quot;">​</a></h3><h4 id="camera-modules" tabindex="-1">Camera modules: <a class="header-anchor" href="#camera-modules" aria-label="Permalink to &quot;Camera modules:&quot;">​</a></h4><p>The cameras that come with the boards will not work, they have an IR filter inside.</p><p>The filter can be removed, but doing so may break your cameras. Here&#39;s how to do it: <a href="https://www.youtube.com/watch?v=QYH-FWvDbDc" target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=QYH-FWvDbDc</a></p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>If you decide to remove the filter, wear eye protection while doing so, the removal of the filter will shatter it.</p></div><ul><li><h4 id="_2x-ov2640-160°-fov-ir-night-vers-75mm-850nm" tabindex="-1">2x OV2640 160° FOV IR / Night vers 75mm (850nm) <a class="header-anchor" href="#_2x-ov2640-160°-fov-ir-night-vers-75mm-850nm" aria-label="Permalink to &quot;2x OV2640 160° FOV IR / Night vers 75mm (850nm)&quot;">​</a></h4></li></ul><p>(select 75MM-160 850nm) <a href="https://www.aliexpress.com/item/3256802853835121.html" target="_blank" rel="noreferrer">AliExpress</a></p><p><a href="https://www.amazon.com/Camera-Aideepen-Wide-Angle-Megapixel-Support/dp/B09XXPX4SP/" target="_blank" rel="noreferrer">Amazon alternative</a> (note that you will have to <a href="https://www.youtube.com/watch?v=QYH-FWvDbDc" target="_blank" rel="noreferrer">manually remove the IR filter</a>)</p><p>Things worth noting:</p><ul><li><p>There is an experimental option to purchase OV2640 130° FOV cameras and manually remove the IR filters. This can result in a clearer view of the eye and is smaller so it allows for HMDs like the Bigscreen Beyond, but it&#39;s not a default recommendation just yet. Checkout the listing &quot;75MM-130 Degree&quot; <a href="https://www.aliexpress.us/item/3256804332354572.html" target="_blank" rel="noreferrer">AliEXpress</a></p></li><li><p>If the cameras are Dead on Arrival (DOA), keep in mind that you can swap the lenses with the ones that come with the stock cameras that were included with the ESP32 boards, though they do require extension cables. I recommend just buying more (3-4 instead of just 2).</p></li><li><h4 id="optional-ribbon-extensions" tabindex="-1">Optional Ribbon extensions: <a class="header-anchor" href="#optional-ribbon-extensions" aria-label="Permalink to &quot;Optional Ribbon extensions:&quot;">​</a></h4></li></ul><p>Certain mounts may require a cable extension (ex: MUTE&#39;s frunk mod) To use a mount like that you will need a cable and a connector for each camera. Headsets like the Quest 2 do not require extensions if the camera boards are mounted at the bottom of the headset, near the facial interface.</p><p>Extensions (select 0.5mm, A-Forward Direction, 24P) <a href="https://www.aliexpress.com/item/3256802223169786.html" target="_blank" rel="noreferrer">AliExpress</a> (200mm for MUTE&#39;s)</p><p>Connectors (select 24P) <a href="https://www.aliexpress.com/item/3256804096715690.html" target="_blank" rel="noreferrer">Aliexpress</a></p><h3 id="usb-hubs-for-if-you-are-building-the-wired-version" tabindex="-1">USB Hubs - for if you are building the wired version <a class="header-anchor" href="#usb-hubs-for-if-you-are-building-the-wired-version" aria-label="Permalink to &quot;USB Hubs - for if you are building the wired version&quot;">​</a></h3><ul><li>1x USB 3.0+ hub The hub needs to support MTT if you wish to use a vive face tracker with the ESPs. Here is a hub that supports MTT and is not expensive <a href="https://www.amazon.com/dp/B09NDQGSPR" target="_blank" rel="noreferrer">Amazon</a></li></ul><p>Ensure that it is of good quality, lightweight, compact in size, and I suggest a minimum of four ports - one for the face tracker, one for the LED kit, and two for ESP32-S3 boards. Ensure that you acquire appropriate USB-A to USB-C adapters wherever required. For example the Valve Index only has one USB-A port. Be wary that &quot;mini&quot; adapters with the short ends may not work properly. Ensure the adapter has a long end. Such adapter <a href="https://a.co/d/e5C2u82" target="_blank" rel="noreferrer">Amazon.</a></p><ul><li>2x USB C cables (as short as possible) to connect both ESPs (select 0.05m/5cm) <a href="https://www.aliexpress.com/item/3256804171454889.html" target="_blank" rel="noreferrer">AliExpress</a> or <a href="https://www.aliexpress.com/item/3256805789406634.html" target="_blank" rel="noreferrer">AliExpress USB C to USB A</a> As the ESP32-S3 has USB-C connectors, you may require some USB-C to USB-A cables depending on your USB hub. It&#39;s worth noting that the HTC Face Tracker requires a USB-C port, so you may need to consider this requirement as well. You may also make custom cables using USB breakout boards of your choice and wire.</li></ul><h3 id="wires-and-adapters" tabindex="-1">Wires and adapters <a class="header-anchor" href="#wires-and-adapters" aria-label="Permalink to &quot;Wires and adapters&quot;">​</a></h3><p>If you are soldering and using custom cables:</p><ul><li><p>1x USB type-A male port to power both ESPs or LEDs<br><a href="https://www.aliexpress.com/item/2255801092919590.html" target="_blank" rel="noreferrer">Bare breakout on AliExpress</a><br><a href="https://www.amazon.com/10Gtek-DIP-Breakout-Adapter-2-54mm/dp/B09LC8WQCD/" target="_blank" rel="noreferrer">Amazon</a><br><br><a href="https://www.aliexpress.com/item/2251832820552545.html" target="_blank" rel="noreferrer">Or one with a cover on AliExpress</a><br><a href="https://www.amazon.com/Pigtail-Extension-Cables-Connector-Replacement/dp/B09ZQNJ2DJ/" target="_blank" rel="noreferrer">Amazon</a></p></li><li><p>1x Lower gauge wire to power ESPs<br><a href="https://a.aliexpress.com/_mK72cy6" target="_blank" rel="noreferrer">28 AWG gauge wire from AliExpress</a><br><a href="https://www.amazon.com/Fermerry-Silicone-Stranded-Copper-Electrical/dp/B089CTT5X1/" target="_blank" rel="noreferrer">28 AWG Amazon</a></p></li><li><p>1x Higher gauge wire to power IR emitters (V3 or V4 some assembly required)<br><a href="https://www.aliexpress.com/item/3256804720067942.html" target="_blank" rel="noreferrer">34 AWG AliExpress</a></p></li></ul><h3 id="ir-emitters" tabindex="-1">IR emitters <a class="header-anchor" href="#ir-emitters" aria-label="Permalink to &quot;IR emitters&quot;">​</a></h3><h4 id="recommended-1" tabindex="-1">Recommended: <a class="header-anchor" href="#recommended-1" aria-label="Permalink to &quot;Recommended:&quot;">​</a></h4><p>We recommend getting the official kits:</p><ul><li><p><a href="https://store.eyetrackvr.dev/products/v4-mini-fully-solderless-kit" target="_blank" rel="noreferrer">Solder-less V4 kit</a> - requires no soldering.</p></li><li><p><a href="https://store.eyetrackvr.dev/products/v4-mini-some-assemblly-required" target="_blank" rel="noreferrer">Solder wires V4 kit</a> - requires you to solder your own wires to the LED boards.</p></li><li><p><a href="https://store.eyetrackvr.dev/products/v4-1-lite-diy-led-kit" target="_blank" rel="noreferrer">Solder V4 Lite kit</a> - requires you to solder 2 through hole components and wires to the LED boards.</p></li></ul><h4 id="alternatively-you-can-source-the-parts-for-v3-yourself" tabindex="-1">Alternatively you can source the parts for V3 yourself: <a class="header-anchor" href="#alternatively-you-can-source-the-parts-for-v3-yourself" aria-label="Permalink to &quot;Alternatively you can source the parts for V3 yourself:&quot;">​</a></h4><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>If they look like something you would find in a TV remote, do NOT use them. Even if you think you can alter them THEY WILL NOT WORK AND PUT YOU AT RISK. If you aren&#39;t exactly sure what you are doing, buy them from the LCSC or Digikey link.</p><p><strong>DO NOT BUY FOCUSED ONES!</strong></p></div>',44)),r("ul",null,[r("li",null,[e[3]||(e[3]=r("p",null,"4x Unfocused SMD IR emitters",-1)),a(o,{options:l(s).parts_list_four},{content:i(()=>e[2]||(e[2]=[r("p",null," The smaller ones can not be soldered at temps above 245C or they will burn. Low temp solder is recommended. ",-1)])),_:1},8,["options"]),e[4]||(e[4]=r("ul",null,[r("li",null,[r("a",{href:"https://www.lcsc.com/product-detail/Infrared-IR-LEDs_XINGLIGHT-XL-3216HIRC-850_C965891.html",target:"_blank",rel:"noreferrer"},"(Recommended) from LCSC here"),t(".")]),r("li",null,[r("a",{href:"https://www.digikey.com/en/products/detail/inolux/IN-P32ZTIR/10384796",target:"_blank",rel:"noreferrer"},"(Alternative) from Digikey here"),t("."),r("br"),t(" The difference between them is the ones from LCSC are rated for lower power, which means in the event of a short or mishap they should be safer, as well as being smaller in footprint, hence why they are recommended.")])],-1))]),e[5]||(e[5]=r("li",null,[r("p",null,[t("4x IR emitter PCBs (highly recommended) Gerber files and schematics located "),r("a",{href:"https://github.com/EyeTrackVR/EyeTrackVR-Hardware/tree/main/IR%20Emmitter",target:"_blank",rel:"noreferrer"},"here.")])],-1)),e[6]||(e[6]=r("li",null,[r("p",null,"4x 350ohm 1206 SMD resistors for IR emitters (If you are not using PCBs for the emitters then buying regular through-hole resistors is acceptable)")],-1)),e[7]||(e[7]=r("li",null,[r("p",null,[r("a",{href:"https://www.digikey.com/en/products/detail/stackpole-electronics-inc/RMCF1206FT357R/1759919",target:"_blank",rel:"noreferrer"},"357 ohm Digikey here")])],-1)),e[8]||(e[8]=r("li",null,[r("p",null,[r("a",{href:"https://lcsc.com/product-detail/Chip-Resistor-Surface-Mount_BOURNS-CR1206-FX-3480ELF_C205328.html",target:"_blank",rel:"noreferrer"},"348 ohm LCSC here")])],-1))]),e[13]||(e[13]=r("p",null,"This ensures you get the correct IR emitter parts. If you are a Patreon please check out discount codes available to you, and also check out unit pricing.",-1)),e[14]||(e[14]=r("ul",null,[r("li",null,[t("1x Wire to power IR emitters"),r("br"),r("a",{href:"https://www.aliexpress.com/item/3256804720067942.html",target:"_blank",rel:"noreferrer"},"34 AWG AliExpress")])],-1)),e[15]||(e[15]=r("h2",{id:"_3d-printed-mounts",tabindex:"-1"},[t("3D Printed Mounts "),r("a",{class:"header-anchor",href:"#_3d-printed-mounts","aria-label":'Permalink to "3D Printed Mounts"'},"​")],-1)),e[16]||(e[16]=r("p",null,[t("Mounts with a "),r("code",null,"★"),t(" next to them are the recommended mounts for the respected hmd. This is based on user feedback on what works best for most people.")],-1)),a(o,{options:l(s).parts_list_three},{content:i(()=>e[9]||(e[9]=[r("p",null," You'll need both - a mount for the IR emitters and a mount for the camera boards, some files include both, some don't. ",-1)])),_:1},8,["options"]),a(h),e[17]||(e[17]=n('<h2 id="misc-parts-tools" tabindex="-1">Misc parts/tools <a class="header-anchor" href="#misc-parts-tools" aria-label="Permalink to &quot;Misc parts/tools&quot;">​</a></h2><ul><li><p>1x Hot glue or another form of glue.<br><a href="https://www.aliexpress.com/item/3256803968572059.html" target="_blank" rel="noreferrer">AliExpress</a><br><a href="https://www.amazon.com/Assark-Sticks-School-Repairs-20W/dp/B09FYWQ44L/" target="_blank" rel="noreferrer">Amazon</a></p></li><li><p>1x Soldering iron and solder: <a href="https://pine64.com/product/pinecil-smart-mini-portable-soldering-iron/" target="_blank" rel="noreferrer">Pine64 Pinecil (Highly Recommended)</a> + <a href="https://www.amazon.com/Rosin-Solder-Electronics-Components-repair/dp/B08M5YP6BN/" target="_blank" rel="noreferrer">Amazon Solder</a></p></li></ul><p><a href="https://www.aliexpress.com/item/3256801448141079.html" target="_blank" rel="noreferrer">AliExpress (Generic)</a><br><a href="https://www.amazon.com/Liouhoum-Auto-Sleep-Adjustable-Temperature-Thermostatic/dp/B08PZBPXLZ/ref=sr_1_9" target="_blank" rel="noreferrer">Amazon (Generic)</a></p><ul><li>2x-4x Heatsinks (Optional) - for the ESP32-CAM <a href="https://www.aliexpress.us/item/3256803892794950.html" target="_blank" rel="noreferrer">AliExpress</a> (14mm for ESP, 8mm for voltage regulator)</li></ul><h3 id="other-headsets" tabindex="-1">Other Headsets <a class="header-anchor" href="#other-headsets" aria-label="Permalink to &quot;Other Headsets&quot;">​</a></h3><p>If you own another headset not listed above, that means there are no mounts designed for them yet. If you have basic skills in modeling or think up a solution to mount cams and emitters, please try to make a mount and then let us in the discord know so it can be added here. Any headset that can fit the camera is potentially compatible. If you are willing, give it a shot to design a mount for the rest of the community.</p><p>Check out our basic guide on making your own mount <a href="./creating_your_own_mount">here.</a></p>',7)),a(o,{options:l(s).parts_list_six},{content:i(()=>e[10]||(e[10]=[r("p",null," If you have a headset mount that is not listed above, please let us know in the discord so it can be added here. ",-1)])),_:1},8,["options"])]))}});export{k as __pageData,y as default};
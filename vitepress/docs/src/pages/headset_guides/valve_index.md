# Valve Index {.text-[var(--font-accent)]}

These are two proven/tested ways to do a clean ETVR build on the Valve Index. Don't treat this as a *must follow*, but a setup to go for if you don't have other plans.

### Recommended Valve Index lens mounts

[Physics-Dude's 160° V18](https://github.com/Physics-Dude/Phys-Index-EyetrackVR-HW/blob/main/ETVR%20ValveIndex%20Cam-LED%20Mount%20Rings/Index-EyetrackVRv4%20v18%20Print%20Me.stl) (mirror the STL for left)

[Foow17's 130 / 160°](https://makerworld.com/en/models/196741#profileId-217255)

[Foow17's 130 / 160° VROPTICIAN](https://makerworld.com/en/models/196791#profileId-217311)

[Frosty704's 160/120° WidmoVR Mount](https://github.com/Frosty704/indexwidmo-eyetrackvr)

Please note due to the LED positioning, these will **require you to use the included 110mm extensions included in the V4 Kit**

[V4 LED Kit Assembly](https://docs.eyetrackvr.dev/how_to_build/led_setup)

## MUTEtheCyberwolf's DEV Frunk Mod:
![DevFrunk1](https://i.imgur.com/KQDFg1J.jpeg)
![HMD](https://i.imgur.com/4n6f4U3.png)

#### Mod Details
The DEV Frunk is a popular choice for ETVR on the Index. Replacing the original index frunk entirely, it has multiple mounting points for both the XIAO's, a Vive Facial Tracker (or [project babble!](https://babble.diy/)), and cutouts for 30x30x7mm fans.  

It also provides excellent ventilation simply due to the design being much more open, as well as a flip up design for the face tracker mount.

Combined, it creates a clean setup with no need for hot glue or alternatives to mount your hardware.

#### Extra Parts Needed:
I recommend a screw kit like [this](https://www.amazon.com/XOOL-Precision-Screwdriver-Extension-Smartphone/dp/B086SQZGLJ) one
- 1x T5 Torx Screwdriver
- 1x H3.0 Screwdriver
- 1x Soldering Iron for heat inserts
- 8x M4x8.1 Heat Inserts [AliExpress](https://www.aliexpress.com/item/3256804349544912.html)  Choose Size: M4 (OD 6mm)50pcs | Color: Length 8mm
- 6x M4x10 Screws [AliExpress](https://www.aliexpress.com/item/2251832624557792.html) Choose Size: M4 20pcs | Length: 10mm
- 1x M4x30 Screws [AliExpress](https://www.aliexpress.com/item/2251832624557792.html) Choose Size: M4 20pcs | Length: 30mm

#### 3D Printed Mounts
Found at MUTEtheCyberwolf's [GitHub Repo](https://github.com/MUTEtheCyberwolf/VALVE-INDEX-DEV-Frunk-1.0/tree/main/3D%20Print%20Files%20STL(Ascii))

You will need to print:
- 1x Coverplate for XIAO Retention Clip (Logo or no Logo)
- 1x XIAO Retention Clip (Letters or no Letters)
- 1x Eyetrack VR Prototype XIAO Mount.stl
- 1x FacialTrackerBeerHingeVIDEVFrunk1.stl
- 1x FacialTrackerBridgeVIDEVFrunk1.stl
  - Alternatively, if you have the [LDLRUI USB HUB](https://www.amazon.com/LDLrui-4-Port-Splitter-Multiport-Adapter/dp/B0BLHCD7FS), [this modified version](https://github.com/Frosty704/mods-eyetrackvr/blob/main/ldlrui%20case%20and%20bridge%20merged-FacialTrackerBridgeVIDEVFrunk1.stl) of the DEV Frunk Bridge can snap fit the hub onto the bridge. [Example](https://i.imgur.com/kRvx56r.jpeg)
- 1x ValveIndexDEVFrunk1.stl
  - Alternatively, if you are interested in routing the ribbon cables internally, [this modified DEV Frunk](https://github.com/Frosty704/mods-eyetrackvr/blob/main/ValveIndexDEVFrunk1_MODIFIED.stl) has holes at the top for sliding through ribbon cables and power cables. [Example](https://i.imgur.com/RcYQ8xd.png)

![Drawing1](https://github.com/MUTEtheCyberwolf/VALVE-INDEX-DEV-Frunk-1.0/assets/98415183/3b2b4fc2-a0ce-4641-8d0f-8fcac9271e34)

### Assembly Details:
 #### 1. Heat Inserts  
1. Start with inserting your heat inserts to the designated holes on the frunk. Place the heat inserts so the side with the smaller radius sits in the hole 
- When heating up the inserts, **let the weight of the soldering iron do the work**, they make take a few seconds to start moving on their own.
   -  **Do not push down**, and remove the iron when they are level with the print. It doesn't need to be perfect, so take your time!

![FRUNK](https://i.imgur.com/5xzpTqa.png)

Bottom picture courtesy of amoistman

2. Next, place a heat insert into the bigger hole of the facial tracker bridge

![BRIDGE](https://i.imgur.com/vNPx656.png)

3. Lastly, place another heat insert into the thick side of the beer hinge


![HINGE](https://i.imgur.com/R3Uwllz.png)

4. Your finished heat inserts should look like this

![INSERTSEXAMPLE](https://i.imgur.com/2z0TD3L.jpeg)

Picture courtesy of amoistman

#### 2. Screws

Now you're done with the hardest part!
We can move onto screwing in the XIAO Mount and Facial tracker bridge onto the frunk, into the heat inserts we just inserted.
  - The XIAO mount should be placed so the longer side is not blocking the fan holes
  - If you have trouble screwing them in, try screwing them equally to distribute the pressure more evenly.
    - Screw one a little, screw the opposite the same amount, repeat.

![M4SCREWGUIDE](https://i.imgur.com/hCi744w.png)

Two last things to screw in will be the beer hinge and vive facial tracker or babble case if you have it

1. Place the smaller hole of the beer hinge inbetween the bridge's screw holes.
   - Screwing in **opposite** of where the heat insert is. You should be screwing ***into*** the heat insert


![M4SCREWGUIDE2](https://i.imgur.com/zJeadXI.png)

2. For the last screw, repeat the same steps, but line up your face tracker or babble case. Screw from the same direction, into the heat insert of the beer hinge.
Use either an M4x10 or an M4x30. I find the M4x10 sometimes loses tension, while the M4x30 doesnt. 

3. Your final result should look like this
![FINAL](https://i.imgur.com/1h7ex2y.jpg)


#### 3. Mounting components

1. You can now push the XIAO's into the mount, making sure they are down snug, if you haven't already.

![XIAO](https://i.imgur.com/pXb2UVZ.png)


2. Place your V4 LED kit PCB into the middle of the XIAO Retention Clip. Ensure the hole in the PCB alligns with the small bump on the retention clip.
You will have to slide it in and push it under the overhangs until they snap over the PCB.

![XIAO-V4](https://i.imgur.com/MnaWjHw.png)

3. Route your V4 LED connectors through the coverplate holes prior to putting it on

![V4POWER](https://i.imgur.com/rDOzTz8.png)

4. Place the coverplate ontop of the LED PCB until the front of it snaps down and locks it over the retention clip.

5. Then you can slide the retention clip over your XIAO mount to keep them in place.



#### 4. Replacing frunk 

**PLEASE UNPLUG YOUR INDEX FROM POWER BEFORE CONTINUING**

You must have a T5 Torx screwdriver to remove the original index frunk screws, we will use the same screws to hold the dev frunk in place.

Picture courtesy of iFixit

![T5SCREWS](https://i.imgur.com/AbnMtn4.jpeg)

1. If you do not have fans, and are mounting a USB Hub infront, I recommend now plugging in the USB hub through the fan holes, as you won't be able to after dev frunk is screwed on.

Alternatively, you can use the USB C port below the middle bottom screw, and passthrough a hub with a [FEMALE USB-C/A to MALE USB A](https://www.aliexpress.us/item/3256802596853859.html) cable

2. Once the frunk is removed, line up your DEV Frunk and screw it back in the same way. Support it in a way you can screw in without it falling.

![T5SCREWS2](https://i.imgur.com/LRN45aM.png)



## Physics-Dude's Gumstick USB Hub Dongle

![newnewnewnwe](https://github.com/Physics-Dude/Phys-Index-EyetrackVR-HW/assets/22563517/77e4141b-7da7-4cb3-ab16-d8d761c91930)

#### Mod Details
Physics-Dude's Gumstick Dongle provides a way to cleanly install EyeTrackVR, all fitting into the frunk. It will require significantly more tinkering and ability to solder.

### Installation instructions and BOM available on [Physics-Dude's Repo](https://github.com/Physics-Dude/Phys-Index-EyetrackVR-HW/tree/main?tab=readme-ov-file#gum-stick-usb-hub-dongle)

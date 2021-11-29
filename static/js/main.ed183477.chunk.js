(this["webpackJsonp2021-portfolio"]=this["webpackJsonp2021-portfolio"]||[]).push([[0],{18:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),i=c(9),r=c.n(i),l=(c(18),c(8),c(2)),n=c(10),o=c(11),h=c(13),j=c(12),d=c(4),b=c(5),x=function(e,t){var c=e.spaceBetweenLines,a=e.waveInterval,s=e.waveHeights,i=c*t;return"M".concat(a[0],",").concat(i," Q").concat(a[1],",").concat(s[0]+i," ").concat(a[2],",").concat(i," T").concat(a[3],",").concat(s[1]+i)},f=function(e){var t={spaceBetweenLines:6};return t.waveInterval=m(e),t.waveHeights=[],t.waveHeights[0]=u(e),t.waveHeights[1]=u(e),t},m=function(e){for(var t=[],c=0;c<4;c++)t[c]=p(e,c);return t},p=function(e,t){switch(t){case 0:return Math.round(Math.random()*(e/5)*-1);case 1:return Math.round(Math.random()*(e/2));case 2:return Math.round(Math.random()*(e/2)+e/2);case 3:return Math.round((Math.random()+2)*e);default:console.log("That's not a valid wave interval...")}},u=function(e){return Math.round(Math.random()*e/2-e/10)},F=function(e){for(var t=e.wave,c=e.targetWave,a=e.svgWidth,s=e.setTargetWave,i=[0,0,0,0],r=[0,0],l=0;l<i.length;l++)t.waveInterval[l]>c.waveInterval[l]?i[l]=t.waveInterval[l]-1:t.waveInterval[l]<c.waveInterval[l]?i[l]=t.waveInterval[l]+1:(c.waveInterval[l]=p(a,l),s(c),i[l]=t.waveInterval[l]);for(var n=0;n<r.length;n++)t.waveHeights[n]>c.waveHeights[n]?r[n]=t.waveHeights[n]-1:t.waveHeights[n]<c.waveHeights[n]?r[n]=t.waveHeights[n]+1:(c.waveHeights[n]=u(a),s(c),r[n]=t.waveHeights[n]);return{spaceBetweenLines:8,waveHeights:r,waveInterval:i}},O=c(0),y=function(e){var t=e.isOnHomePage,c=void 0!==t&&t,s=300,i=Object(a.useState)([]),r=Object(b.a)(i,2),l=r[0],n=r[1],o=Object(a.useState)(f(s)),h=Object(b.a)(o,2),j=h[0],d=h[1];return function(e){var t,c=Object(a.useRef)(),s=function a(){t=setTimeout((function(){e(),c.current=requestAnimationFrame(a)}),1e3/35)};Object(a.useEffect)((function(){return c.current=requestAnimationFrame(s),function(){cancelAnimationFrame(c.current),clearInterval(t)}}),[])}((function(){j&&n((function(e){var t=function(e,t,c,a){var s=e.slice(1),i=e[e.length-1],r=F({wave:i,targetWave:t,svgWidth:c,setTargetWave:a});return s.push(r),s}(e,j,s,d);return t}))})),Object(a.useEffect)((function(){for(var e=[],t=f(s),c=0;c<40;c++){var a=Object.assign({},F({wave:t,targetWave:j,svgWidth:s,setTargetWave:d}));t=a,e.push(a)}n(e)}),[]),Object(O.jsxs)("svg",{className:"".concat(c?"home-lines":"project-lines"),viewBox:"0 20 200 200",version:"1.1",children:[Object(O.jsx)("title",{children:"a flowing water model"}),Object(O.jsx)("desc",{children:"a bunch of lines"}),l.map((function(e,t){return Object(O.jsx)("path",{className:"line",d:x(e,t)},t)}))]})},g=(c(20),function(e){Object(h.a)(c,e);var t=Object(j.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"content-block home",children:[Object(O.jsx)(y,{isOnHomePage:!0}),Object(O.jsxs)("div",{className:"title-block",children:[Object(O.jsx)("div",{className:"text-block",children:Object(O.jsx)("p",{children:"Hi, I'm Mill"})}),Object(O.jsxs)("div",{className:"button-wrapper",children:[Object(O.jsx)(d.b,{className:"button",to:"/projects",children:"projects"}),Object(O.jsx)(d.b,{className:"button",to:"/about",children:"about"})]})]})]})}}]),c}(s.a.Component)),v=g,w=function(){return Object(O.jsxs)("div",{className:"content-block",children:[Object(O.jsx)(d.b,{to:"/",className:"back button",children:"< home "}),Object(O.jsx)("h2",{children:"About"}),Object(O.jsxs)("p",{children:["My name is ",Object(O.jsx)("span",{className:"text-highlight",children:"Mill Soper"}),". I'm a developer currently based in California and working remotely."]}),Object(O.jsx)("p",{children:"I work on the full stack with a focus on JavaScript and React."}),Object(O.jsx)("p",{children:"In my free time, I especially like to learn about shaders, SVGs, and accessibility."}),Object(O.jsxs)("p",{children:["You can take a look at some of my projects ",Object(O.jsx)(d.b,{className:"link",to:"/projects",children:"here"}),", or check out what I've been up to on ",Object(O.jsx)("a",{className:"link",href:"https://glitch.com/@househaunt",children:"Glitch"})," or ",Object(O.jsx)("a",{className:"link",href:"www.github.com/millsoper",children:"Github"}),"."]})]})},k=function(){return Object(O.jsxs)("svg",{id:"sparkles",width:"180px",height:"180px",viewBox:"0 0 196 201",version:"1.1",children:[Object(O.jsx)("title",{children:"cheese"}),Object(O.jsx)("desc",{children:"A sparkling cheese animation"}),Object(O.jsxs)("g",{className:"cheese",transform:"translate(0.825736, -0.658050)",stroke:"#4e4e4e",strokeWidth:"1",fill:"#fefefe",fillRule:"evenodd",children:[Object(O.jsx)("path",{className:"rind",d:"M140.53716,155.674043 C166.627074,150.53006 180.874432,142.645546 183.279234,132.0205 C183.279234,112.898607 183.279234,89.48601 183.279234,61.0543107 C172.180863,33.5734235 33.7819873,29.4485314 18.8544183,48.2757285",fillRule:"nonzero"}),Object(O.jsx)("path",{d:"M98.42355,48.8150502 L98.42355,133.1416 C121.454239,146.324621 135.388137,153.846556 140.225244,155.707405 C140.225244,139.556569 140.107136,81.1221493 140.225244,68.8847891 C130.506188,63.6928895 116.57229,57.0029765 98.42355,48.8150502 Z",fillRule:"nonzero"}),Object(O.jsx)("path",{d:"M97.962231,133.445916 C60.1919896,133.617667 33.9639126,133.617667 19.2779999,133.445916 C19.2779999,115.109879 19.9741703,75.5914275 19.2779999,48.0902908 C30.4208537,48.0902908 56.6489307,48.4236242 97.962231,49.0902908",fillRule:"nonzero"}),Object(O.jsx)("circle",{fillRule:"nonzero",cx:"63.5",cy:"71.5",r:"2.5"}),Object(O.jsx)("circle",{fillRule:"nonzero",cx:"41.5",cy:"94",r:"2.5"}),Object(O.jsx)("circle",{fillRule:"nonzero",cx:"48",cy:"68",r:"1"}),Object(O.jsx)("circle",{fillRule:"nonzero",cx:"53",cy:"62",r:"1"}),Object(O.jsx)("circle",{fillRule:"nonzero",cx:"76",cy:"95",r:"1"}),Object(O.jsx)("circle",{fillRule:"nonzero",cx:"83",cy:"102",r:"1"}),Object(O.jsx)("polyline",{className:"rind",fillRule:"nonzero",points:"79.963041 175.047964 0.0870315 150.132867 0.0870315 125.291426 28.2875717 104.3208"}),Object(O.jsx)("polygon",{fillRule:"nonzero",points:"80.145242 174.933603 2.5312463 126.04788 31.2780504 104.613485 107.564642 146.826102 90.926149 162.859841 85.479484 162.859841 85.479484 170.595655"}),Object(O.jsx)("circle",{fillRule:"nonzero",cx:"41",cy:"137",r:"3"}),Object(O.jsx)("circle",{fillRule:"nonzero",cx:"107.564642",cy:"121",r:"3"}),Object(O.jsx)("circle",{fillRule:"nonzero",cx:"62",cy:"134",r:"4"}),Object(O.jsx)("circle",{fillRule:"nonzero",cx:"69",cy:"153",r:"4"}),Object(O.jsx)("circle",{fillRule:"nonzero",cx:"124.433924",cy:"89.037324",r:"4"}),Object(O.jsx)("circle",{fillRule:"nonzero",cx:"35",cy:"120",r:"2"}),Object(O.jsx)("polygon",{className:"sparkle tiny-diamond one",points:"191.959409 87.0373244 189.442594 89.7549639 191.959409 92.0373244 194.442594 89.7549639"}),Object(O.jsx)("polygon",{className:"sparkle tiny-diamond two",points:"11.0168157 80.0373244 8.5 82.7549634 11.0168157 85.0373244 13.5 82.7549634"}),Object(O.jsx)("polygon",{className:"sparkle tiny-diamond three",points:"129.950742 172.933603 127.433924 175.651243 129.950742 177.933603 132.433924 175.651243"}),Object(O.jsx)("polygon",{className:"sparkle tiny-diamond four",points:"33.5168157 16.3899994 31 19.1076384 33.5168157 21.3899994 36 19.1076384"}),Object(O.jsx)("polygon",{className:"sparkle tiny-diamond five",points:"41.5067263 198.426172 40.5 199.513227 41.5067263 200.426172 42.5 199.513227"}),Object(O.jsx)("polygon",{className:"sparkle tiny-diamond six",points:"71.5168157 29 69 31.717639 71.5168157 34 74 31.717639"}),Object(O.jsx)("polygon",{className:"sparkle tiny-diamond seven",points:"158.314714 31 155.797899 33.717639 158.314714 36 160.797899 33.717639"}),Object(O.jsx)("polygon",{className:"sparkle medium-diamond one",points:"7.52690496 57 3.5 61.3482222 7.52690496 65 11.5 61.3482222"}),Object(O.jsx)("polygon",{className:"sparkle medium-diamond two",points:"88.0269056 8.3899994 84 12.7382216 88.0269056 16.3899994 92 12.7382216"}),Object(O.jsx)("polygon",{className:"sparkle medium-diamond three",points:"105.593732 175.047964 101.566826 179.396186 105.593732 183.047964 109.566826 179.396186"}),Object(O.jsxs)("g",{className:"tiny-cross sparkle one",transform:"translate(101.066826, 6.450846)",children:[Object(O.jsx)("path",{d:"M1.61013305,0.327847453 L1.61013305,3.31931288"}),Object(O.jsx)("path",{d:"M0.223441047,1.83654414 L2.89655788,1.83654414"})]}),Object(O.jsxs)("g",{className:"tiny-cross sparkle two",transform:"translate(4.000000, 0.450846)",children:[Object(O.jsx)("path",{d:"M2.26403445,0.729264467 L2.26403445,3.72072989"}),Object(O.jsx)("path",{d:"M0.877342453,2.23796115 L3.55045929,2.23796115"})]}),Object(O.jsx)("polygon",{className:"sparkle tiny-diamond eight",points:"124.950742 27 122.433924 29.717639 124.950742 32 127.433924 29.717639"})]})]})},C=function(){return Object(O.jsxs)("svg",{id:"olivebranch",width:"93px",height:"101px",viewBox:"0 0 93 101",version:"1.1",children:[Object(O.jsx)("title",{children:"olive branch"}),Object(O.jsx)("desc",{children:"A single olive branch with leaves"}),Object(O.jsx)("defs",{}),Object(O.jsxs)("g",{strokeWidth:"1",fill:"none",fillRule:"evenodd",transform:"translate(0.031843, -1.368107)",stroke:"#979797",children:[Object(O.jsx)("path",{className:"leaf one",d:"M35.7897848,77.4538006 C37.18168,77.4538006 38.3100341,72.1638871 38.3100341,65.6384478 C38.3100341,61.288155 37.469951,57.349704 35.7897848,53.823095 C34.1096188,57.349704 33.2695357,61.288155 33.2695357,65.6384478 C33.2695357,72.1638871 34.3978896,77.4538006 35.7897848,77.4538006 Z",fillRule:"nonzero"}),Object(O.jsx)("path",{className:"leaf two",d:"M46.7450106,65.2398326 C48.1369058,65.2398326 49.2652599,59.9499191 49.2652599,53.4244798 C49.2652599,49.074187 48.4251768,45.135736 46.7450106,41.609127 C45.0648446,45.135736 44.2247615,49.074187 44.2247615,53.4244798 C44.2247615,59.9499191 45.3531154,65.2398326 46.7450106,65.2398326 Z",fillRule:"nonzero",transform:"translate(46.745011, 53.424480) rotate(-8.000000) translate(-46.745011, -53.424480) "}),Object(O.jsx)("path",{className:"leaf three",d:"M67.8919611,32.7724355 C69.2838563,32.7724355 70.4122104,27.4825218 70.4122104,20.9570827 C70.4122104,16.6067899 69.5721273,12.668339 67.8919611,9.14172987 C66.2117952,12.668339 65.3717121,16.6067899 65.3717121,20.9570827 C65.3717121,27.4825218 66.5000662,32.7724355 67.8919611,32.7724355 Z",fillRule:"nonzero",transform:"translate(67.891961, 20.957083) rotate(-7.000000) translate(-67.891961, -20.957083) "}),Object(O.jsx)("path",{className:"leaf four",d:"M67.8919611,32.7724355 C69.2838563,32.7724355 70.4122104,27.4825218 70.4122104,20.9570827 C70.4122104,16.6067899 69.5721273,12.668339 67.8919611,9.14172987 C66.2117952,12.668339 65.3717121,16.6067899 65.3717121,20.9570827 C65.3717121,27.4825218 66.5000662,32.7724355 67.8919611,32.7724355 Z",fillRule:"nonzero",transform:"translate(67.891961, 20.957083) rotate(-7.000000) translate(-67.891961, -20.957083) "}),Object(O.jsx)("path",{className:"leaf five",d:"M78.847187,24.6297903 C80.2390822,24.6297903 81.3674363,19.3398767 81.3674363,12.8144375 C81.3674363,8.46414474 80.5273532,4.5256938 78.847187,0.999084687 C77.167021,4.5256938 76.3269379,8.46414474 76.3269379,12.8144375 C76.3269379,19.3398767 77.455292,24.6297903 78.847187,24.6297903 Z",fillRule:"nonzero",transform:"translate(78.847187, 12.814438) rotate(16.000000) translate(-78.847187, -12.814438) "}),Object(O.jsx)("path",{className:"leaf six",d:"M33.2695361,107.664494 C34.6614313,107.664494 35.7897852,102.37458 35.7897852,95.8491411 C35.7897852,91.4988483 34.9497023,87.5603973 33.2695361,84.0337883 C31.5893699,87.5603973 30.749287,91.4988483 30.749287,95.8491411 C30.749287,102.37458 31.8776409,107.664494 33.2695361,107.664494 Z",fillRule:"nonzero",transform:"translate(33.269536, 95.849141) scale(-1, 1) rotate(-119.000000) translate(-33.269536, -95.849141) "}),Object(O.jsx)("path",{className:"leaf seven",d:"M72.7083494,77.1295732 C74.1002446,77.1295732 75.2285985,71.8396595 75.2285985,65.3142204 C75.2285985,60.9639276 74.3885156,57.0254766 72.7083494,53.4988676 C71.0281832,57.0254766 70.1881003,60.9639276 70.1881003,65.3142204 C70.1881003,71.8396595 71.3164542,77.1295732 72.7083494,77.1295732 Z",fillRule:"nonzero",transform:"translate(72.708349, 65.314220) scale(-1, 1) rotate(-47.000000) translate(-72.708349, -65.314220) "}),Object(O.jsx)("path",{className:"leaf eight",d:"M52.7012184,48.4713861 C54.0931136,48.4713861 55.2214677,43.1814726 55.2214677,36.6560333 C55.2214677,32.3057405 54.3813846,28.3672895 52.7012184,24.8406805 C51.0210524,28.3672895 50.1809693,32.3057405 50.1809693,36.6560333 C50.1809693,43.1814726 51.3093234,48.4713861 52.7012184,48.4713861 Z",fillRule:"nonzero",transform:"translate(52.701218, 36.656033) rotate(-18.000000) translate(-52.701218, -36.656033) "}),Object(O.jsx)("path",{className:"leaf nine",d:"M80.8468755,52.8201317 C82.2387707,52.8201317 83.3671246,47.530218 83.3671246,41.0047787 C83.3671246,36.6544859 82.5270417,32.7160351 80.8468755,29.1894259 C79.1667096,32.7160351 78.3266265,36.6544859 78.3266265,41.0047787 C78.3266265,47.530218 79.4549803,52.8201317 80.8468755,52.8201317 Z",fillRule:"nonzero",transform:"translate(80.846876, 41.004779) scale(-1, 1) rotate(-81.000000) translate(-80.846876, -41.004779) "}),Object(O.jsx)("path",{d:"M0.533527695,96.0638651 C21.6449571,89.275536 35.9975469,82.4503293 43.5912972,75.5882448 C51.1850474,68.7261605 60.93236,53.773516 72.8332347,30.7303114 L74.5035029,24.8651454"}),Object(O.jsx)("path",{d:"M50.3937015,67.4640676 L71.1296883,55.7586079"}),Object(O.jsx)("path",{d:"M59.2394492,53.823095 L62.758972,32.7724356"}),Object(O.jsx)("path",{d:"M39.4685775,78.3651646 L70.0830063,71.1836717"}),Object(O.jsx)("path",{className:"leaf ten",d:"M59.1277804,38.8794195 C60.5196756,38.8794195 61.6480297,33.5895058 61.6480297,27.0640667 C61.6480297,22.7137739 60.8079466,18.775323 59.1277804,15.2487139 C57.4476144,18.775323 56.6075313,22.7137739 56.6075313,27.0640667 C56.6075313,33.5895058 57.7358854,38.8794195 59.1277804,38.8794195 Z",fillRule:"nonzero",transform:"translate(59.127781, 27.064067) rotate(-13.000000) translate(-59.127781, -27.064067) "}),Object(O.jsx)("path",{className:"leaf eleven",d:"M59.5620783,89.3435418 C60.9539735,89.3435418 62.0823274,84.053628 62.0823274,77.528189 C62.0823274,73.1778962 61.2422445,69.2394452 59.5620783,65.7128361 C57.8819121,69.2394452 57.0418293,73.1778962 57.0418293,77.528189 C57.0418293,84.053628 58.1701831,89.3435418 59.5620783,89.3435418 Z",fillRule:"nonzero",transform:"translate(59.562078, 77.528189) scale(-1, 1) rotate(-119.000000) translate(-59.562078, -77.528189) "}),Object(O.jsx)("path",{className:"leaf twelve",d:"M77.0904391,64.9156056 C78.4823343,64.9156056 79.6106881,59.6256918 79.6106881,53.1002528 C79.6106881,48.74996 78.7706052,44.811509 77.0904391,41.2849 C75.4102729,44.811509 74.57019,48.74996 74.57019,53.1002528 C74.57019,59.6256918 75.6985439,64.9156056 77.0904391,64.9156056 Z",fillRule:"nonzero",transform:"translate(77.090439, 53.100253) scale(-1, 1) rotate(116.000000) translate(-77.090439, -53.100253) "})]})]})},N=function(){return Object(O.jsxs)("svg",{viewBox:"0,0,800,800",height:"100%",width:"100%",children:[Object(O.jsx)("title",{children:"wavy"}),Object(O.jsx)("desc",{children:"wavy radio icon"}),Object(O.jsxs)("defs",{children:[Object(O.jsx)("path",{d:"M595.904795,381 L632,381 L632,299 L155.274094,299 L155.274094,381 L405.095205,381 C429.057487,355.747331 462.939751,340 500.5,340 C538.060249,340 571.942513,355.747331 595.904795,381 Z",id:"path-1"}),Object(O.jsx)("mask",{id:"mask-2",maskContentUnits:"userSpaceOnUse",maskUnits:"objectBoundingBox",x:"0",y:"0",width:"476.725906",height:"82",fill:"white",children:Object(O.jsx)("use",{href:"#path-1"})})]}),Object(O.jsx)("g",{id:"Page-1",stroke:"black",strokeWidth:"4",fill:"none",fillRule:"evenodd",children:Object(O.jsxs)("g",{id:"soundcloud",children:[Object(O.jsx)("path",{d:"M133,85 L138,85 L138,106 L133,106 L133,85 Z M128,71 L143,71 L141,85 L130,85 L128,71 Z",id:"antenna-top",fill:"#FFFFFF"}),Object(O.jsx)("rect",{id:"antenna-middle",fill:"white",x:"131",y:"100",width:"9",height:"80"}),Object(O.jsx)("path",{d:"M129,180 L141.73888,180 L141.73888,317.48407 C141.73888,317.48407 129,321.438156 129,309.836779 L129,180 Z",id:"antenna-bottom",fill:"white"}),Object(O.jsx)("rect",{id:"Rectangle-2",fill:"white",x:"135",y:"289",width:"516",height:"317"}),Object(O.jsx)("path",{d:"M580.336051,367 L626,367 L626,318 L158.103555,318 L158.103555,367 L420.663949,367 C442.799954,350.062853 470.474824,340 500.5,340 C530.525176,340 558.200046,350.062853 580.336051,367 Z",id:"Combined-Shape",fill:"#FFFFFF"}),Object(O.jsx)("path",{d:"M158.498411,331.627666 L627.869995,331.627666",id:"Path-2",stroke:"black",strokeWidth:"4",strokeDasharray:"3,2"}),Object(O.jsx)("polygon",{id:"Rectangle-4",fill:"white",points:"650 289 670.157288 275.988767 669.157288 571.142057 650 606"}),Object(O.jsx)("use",{id:"Combined-Shape",stroke:"black",mask:"url(#mask-2)",strokeWidth:"10",href:"#path-1"}),Object(O.jsx)("polygon",{id:"Rectangle-3",fill:"white",points:"184.943596 275.362611 671.101471 275.362611 650 289 135.360923 289"}),Object(O.jsxs)("g",{id:"speaker",transform:"translate(385.000000, 356.000000)",children:[Object(O.jsx)("circle",{id:"speaker-large",fill:"white",cx:"115.5",cy:"115.5",r:"115.5"}),Object(O.jsx)("ellipse",{id:"speaker-small",stroke:"black",strokeWidth:"4",cx:"113.660072",cy:"112.339928",rx:"45.3399281",ry:"45.3399281"})]}),Object(O.jsx)("rect",{id:"Rectangle-6",fill:"white",x:"158",y:"393",width:"199",height:"121"}),Object(O.jsx)("rect",{id:"Rectangle-7",fill:"white",x:"160",y:"525",width:"199",height:"59"}),Object(O.jsx)("ellipse",{id:"Oval-6",stroke:"black",fill:"#FFFFFF",cx:"663.5",cy:"359.5",rx:"8.5",ry:"40.5"}),Object(O.jsx)("rect",{id:"Rectangle-8",fill:"#FFFFFF",x:"662",y:"318",width:"12",height:"83"}),Object(O.jsx)("ellipse",{id:"Oval-6",fill:"white",cx:"673.5",cy:"359.5",rx:"8.5",ry:"40.5"}),Object(O.jsx)("path",{id:"needle",d:"M246.359053,375.877534 C246.359053,355.62646 249.877203,305.629144 249.877203,305.629144 L251.978315,375.877534",fill:"white"})]})})]})},M=function(){return Object(O.jsxs)("svg",{id:"starmap",width:"100%",height:"100%",viewBox:"0 0 142 144",version:"1.1",children:[Object(O.jsx)("title",{children:"Swan constellation"}),Object(O.jsx)("desc",{children:"Animated star map of Lyra, Sagitta, and Cygnus constellations"}),Object(O.jsx)("defs",{}),Object(O.jsx)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(O.jsx)("g",{transform:"translate(-97.000000, -215.000000)",children:Object(O.jsx)("g",{transform:"translate(30.000000, 3.000000)",children:Object(O.jsxs)("g",{id:"swan",transform:"translate(67.000000, 212.000000)",children:[Object(O.jsx)("path",{stroke:"#4e4e4e",d:"M81.0720234 20.5106335 58.2248955 16.1290925 2.71877904 25.1515052 32.5876207 40.639477 68.7189312 45.0043543"}),Object(O.jsx)("path",{stroke:"#4e4e4e",d:"M81.3469763 20.8241215 98.4888314 31.4285549 95.5726643 34.3124359"}),Object(O.jsx)("path",{stroke:"#4e4e4e",d:"M99.0720649 32.3231933 129.1742 47.1071191 139.982765 48.9390969"}),Object(O.jsx)("path",{stroke:"#4e4e4e",d:"M129.867831 46.5853335 121.678609 48.1788105 102.206945 55.8368736 69.1094893 44.6710781 63.8645544 76.7499578 60.3411997 86.6066026 58.846664 114.399758"}),Object(O.jsx)("circle",{fill:"#FFFFFF",cx:"80.5040956",cy:"20.5",r:"3.5"}),Object(O.jsx)("circle",{fill:"#FFFFFF",cx:"102.145594",cy:"55.7670047",r:"2.5"}),Object(O.jsx)("circle",{fill:"#FFFFFF",cx:"68.1455937",cy:"44.7670047",r:"2.5"}),Object(O.jsx)("circle",{fill:"#FFFFFF",cx:"33.1455937",cy:"40.7670047",r:"2.5"}),Object(O.jsx)("circle",{fill:"#FFFFFF",cx:"3.14559365",cy:"25.7670047",r:"2.5"}),Object(O.jsx)("circle",{fill:"#FFFFFF",cx:"59.1455937",cy:"113.767005",r:"2.5"}),Object(O.jsx)("circle",{fill:"#FFFFFF",cx:"58.3239779",cy:"16",r:"1.5"}),Object(O.jsx)("circle",{fill:"#FFFFFF",cx:"121.645594",cy:"47.3615187",r:"1.5"}),Object(O.jsx)("circle",{fill:"#FFFFFF",cx:"129.645594",cy:"46.3615187",r:"1.5"}),Object(O.jsx)("circle",{fill:"#FFFFFF",cx:"139.645594",cy:"48.3615187",r:"1.5"}),Object(O.jsx)("circle",{fill:"#FFFFFF",cx:"95.6455937",cy:"34.3615187",r:"1.5"}),Object(O.jsx)("circle",{fill:"#FFFFFF",cx:"63.6455937",cy:"76.3615187",r:"1.5"}),Object(O.jsx)("circle",{fill:"#FFFFFF",cx:"59.6455937",cy:"86.3615187",r:"1.5"}),Object(O.jsx)("circle",{fill:"#FFFFFF",cx:"98.6455937",cy:"31.3615187",r:"1.5"}),Object(O.jsxs)("g",{transform:"translate(21.000000, 0.000000)",fill:"#FFFFFF",children:[Object(O.jsx)("circle",{cx:"46.3239779",cy:"5",r:"1.5"}),Object(O.jsx)("circle",{cx:"110.645594",cy:"14.3615187",r:"1.5"}),Object(O.jsx)("circle",{cx:"1.64559365",cy:"10.3615187",r:"1.5"}),Object(O.jsx)("circle",{cx:"16.6455937",cy:"7.36151869",r:"1.5"}),Object(O.jsx)("circle",{cx:"21.6455937",cy:"2.36151869",r:"1.5"}),Object(O.jsx)("circle",{cx:"22.6455937",cy:"13.3615187",r:"1.5"})]}),Object(O.jsxs)("g",{id:"sagitta",transform:"translate(10.000000, 121.000000)",children:[Object(O.jsx)("path",{stroke:"#4e4e4e",d:"M2.49428096 2.15867166 7.71763614 13.2578489 10.2315794 21.3589362"}),Object(O.jsx)("path",{d:"M8.49317588,13.7103225 L13.6984321,21.2268139",stroke:"#4e4e4e"}),Object(O.jsx)("circle",{fill:"#FFFFFF",cx:"13.8913376",cy:"21.3615187",r:"1.5"}),Object(O.jsx)("circle",{fill:"#FFFFFF",cx:"9.64559365",cy:"21.3615187",r:"1.5"}),Object(O.jsx)("circle",{fill:"#FFFFFF",cx:"2.2063125",cy:"2.36151869",r:"1.5"}),Object(O.jsx)("circle",{fill:"#FFFFFF",cx:"8.14559365",cy:"13.8615187",r:"1.5"})]}),Object(O.jsxs)("g",{id:"lyra",transform:"translate(90.000000, 102.000000)",children:[Object(O.jsx)("path",{stroke:"#4e4e4e",d:"M32.5040874 6.85830055 23.2949531 6.85830055 16.5777023 3.65422288 3.63233628 13.6807076 10.3161283 16.9150575 23.2949531 7.2846402"}),Object(O.jsx)("circle",{fill:"#FFFFFF",cx:"3.14559365",cy:"14",r:"2.5"}),Object(O.jsx)("circle",{id:"Star",fill:"#FFFFFF",cx:"32",cy:"8",r:"3",strokeWidth:"2",strokeDasharray:"1"}),Object(O.jsx)("circle",{fill:"#FFFFFF",cx:"23.6455937",cy:"6.36151869",r:"1.5"}),Object(O.jsx)("circle",{fill:"#FFFFFF",cx:"16.6455937",cy:"3.36151869",r:"1.5"}),Object(O.jsx)("circle",{fill:"#FFFFFF",cx:"10.6455937",cy:"16.3615187",r:"1.5"})]}),Object(O.jsx)("circle",{fill:"#FFFFFF",cx:"29.6455937",cy:"111.361519",r:"1.5"}),Object(O.jsx)("circle",{fill:"#FFFFFF",cx:"50.6455937",cy:"126.361519",r:"1.5"}),Object(O.jsx)("circle",{fill:"#FFFFFF",cx:"122.645594",cy:"84.3615187",r:"1.5"}),Object(O.jsx)("circle",{fill:"#FFFFFF",cx:"100.645594",cy:"88.3615187",r:"1.5"}),Object(O.jsx)("circle",{fill:"#FFFFFF",cx:"95.6455937",cy:"90.3615187",r:"1.5"}),Object(O.jsx)("circle",{fill:"#FFFFFF",cx:"37.6455937",cy:"64.3615187",r:"1.5"}),Object(O.jsx)("circle",{fill:"#FFFFFF",cx:"27.6455937",cy:"64.3615187",r:"1.5"}),Object(O.jsx)("circle",{fill:"#FFFFFF",cx:"19.6455937",cy:"49.3615187",r:"1.5"}),Object(O.jsx)("circle",{fill:"#FFFFFF",cx:"125.645594",cy:"123.361519",r:"1.5"})]})})})})]})},L=function(e){var t=e.projectName,c=e.copy,s=e.codeUrl,i=e.liveUrl,r=Object(a.useState)(!1),l=Object(b.a)(r,2),n=l[0],o=l[1],h={wavy:Object(O.jsx)(N,{}),mousetrap:Object(O.jsx)(k,{}),starchart:Object(O.jsx)(M,{}),romanholiday:Object(O.jsx)(C,{}),lines:Object(O.jsx)(y,{strokeColor:"black"})},j=t.replace(" ","");return Object(O.jsxs)("div",{className:"project ".concat(j," ").concat(n?"open":""),onClick:function(){o(!n)},children:[Object(O.jsx)("div",{className:"project-image",id:j,children:h[j]}),Object(O.jsxs)("div",{className:"project-text-box",children:[Object(O.jsxs)("p",{children:[Object(O.jsx)("span",{className:"project-name",children:t})," ".concat(c)]}),Object(O.jsxs)("div",{className:"link-container",children:[Object(O.jsx)("a",{className:"button",href:i,children:"live"}),Object(O.jsx)("a",{className:"button",href:s,children:"code"})]})]})]})},R=(c(21),function(){return Object(O.jsxs)("div",{className:"project-container",children:[Object(O.jsxs)("div",{className:"project project-header",style:{display:"flex",flexDirection:"column"},children:[Object(O.jsx)(d.b,{to:"/",className:"back button",children:"< home "}),Object(O.jsx)("h2",{children:"Projects"})]}),[{projectName:"wavy",copy:"an audio visualizer using the HTML5 audio API",codeUrl:"https://github.com/millsoper/wavy",liveUrl:"http://millsoper.github.io/wavy"},{projectName:"lines",copy:"animating randomized SVG paths without greensock",codeUrl:"https://github.com/millsoper/svg-path-animation",liveUrl:"http://millsoper.github.io/svg-path-animation"},{projectName:"mouse trap",copy:"experiments with cursor tracking",codeUrl:"https://glitch.com/edit/#!/mouse-trap",liveUrl:"https://mouse-trap.glitch.me"},{projectName:"star chart",copy:"an interactive star chart built with styled components and react hooks",codeUrl:"https://glitch.com/edit/#!/star-chart",liveUrl:"https://star-chart.glitch.me"},{projectName:"roman holiday",copy:"find the next ancient roman holiday via a node and express app",codeUrl:"https://glitch.com/edit/#!/roman-holiday",liveUrl:"https://roman-holiday.glitch.me"}].map((function(e){return Object(O.jsx)(L,{projectName:e.projectName,copy:e.copy,codeUrl:e.codeUrl,liveUrl:e.liveUrl},e.projectName)}))]})});var z=function(){var e=["While cold-blooded, some fish have an ability to heat certain parts of their bodies to protect themselves against the cold of the ocean. Tuna, for example, can heat their muscles to have edge in pursuing prey in cold water, and swordfish will heat their eyes to see better while hunting. Separately, there is at least one fish which is truly not cold-blooded: the opah, or moonfish. https://oceanservice.noaa.gov/facts/cold-blooded.html https://www.newscientist.com/article/dn6861-swordfish-heat-their-eyes-for-the-hunt/.","Jupiter's fifth moon, Io, is known for violent volcanic activity. The immense gravity of Jupiter is effectively ripping Io apart constantly, causing the seismic activity -- and ionization of the material being torn away causes immense aurorae across Jupiter. https://www.space.com/16419-io-facts-about-jupiters-volcanic-moon.html","Crying when emotional is beneficial in many ways -- in one of the most tangible ways, the human body uses tears (the type generated by emotion) to excrete excess stress hormones, such as cortisol. https://www.psychologytoday.com/us/blog/emotional-freedom/201007/the-health-benefits-tears","Insects don't use lungs to breathe, or distribute oxygen through their bodies using a circulatory system the way that human bodies do. Instead, they have openings along their bodies called 'spiracles' (from the same Latin root as words like 'inspiration') which let air into the body where it bathes the tissues with oxygen. https://www.thoughtco.com/how-do-insects-breathe-1968478","The Saga of Saint Olaf -- a Viking saga written in the 13th century -- mentions a mythical sunstone which allowed the vikings to orient themselves relative to the sun, even if it was hidden behind clouds, or had already set below the horizon. Further examination of the wreck of Alderney, however (a 16th century Elizabethan warship originally discovered by a fisherman in the 1970s) identified a block of stone among other navigational items found with the wreck. The stone was specifically composed of Icelandic Spar, or calcite crystal -- which, due to the formation of the crystals, will reveal within a few degrees whether you are looking through it due east-west. https://www.livescience.com/27696-viking-sunstone-shipwreck.html","Botanically speaking, avocados are actually very large berries, with a single seed at the center. While this may seem like a scientific technicality, it points to the origin of how avocados proliferated and spread. Like many berries, it spread by being a food source for animals, which ate the berry and then passed the seeds out in their waste. One such animal was so large that the avocado really would seem just like a tiny berry to it -- the Megatherium or giant ground sloth. The size of a UPS truck, these sloths roamed South America through the end of the Pleistocene era (about 12000 years ago.) https://www.smithsonianmag.com/arts-culture/why-the-avocado-should-have-gone-the-way-of-the-dodo-4976527/"],t=e[Math.floor(Math.random()*e.length)];return console.log("%cDid you know?%c\n\n"+t+"\n\nRefresh the page to get a new fact!","border-bottom: 2px solid gold","border-bottom: none"),Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{exact:!0,path:"/",element:Object(O.jsx)(v,{})}),Object(O.jsx)(l.a,{path:"/about",element:Object(O.jsx)(w,{})}),Object(O.jsx)(l.a,{path:"/projects",element:Object(O.jsx)(R,{})})]})})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,23)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),i(e),r(e)}))};r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(d.a,{children:Object(O.jsx)(z,{})})}),document.getElementById("root")),I()},8:function(e,t,c){}},[[22,1,2]]]);
//# sourceMappingURL=main.ed183477.chunk.js.map
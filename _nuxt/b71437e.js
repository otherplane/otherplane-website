(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2,5],{294:function(t,e,n){var content=n(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(77).default)("66c1b944",content,!0,{sourceMap:!1})},295:function(t,e,n){"use strict";var o=n(2),r=n(300);o({target:"String",proto:!0,forced:n(301)("link")},{link:function(t){return r(this,"a","href",t)}})},296:function(t,e,n){var content=n(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(77).default)("3e93cf95",content,!0,{sourceMap:!1})},297:function(t,e,n){var content=n(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(77).default)("167e9f59",content,!0,{sourceMap:!1})},298:function(t,e,n){"use strict";n(294)},299:function(t,e,n){var o=n(76)(!1);o.push([t.i,'p{font-size:1.8vw;font-weight:700;font-family:"Almarai",sans-serif}.subtitle{font-size:1.5vw}.footer{font-size:.8vw}@media(max-width:1200px){p{font-size:8vw}.subtitle{font-size:6vw}.footer{font-size:2.8vw}}svg{width:100%;height:100%;top:0;left:0}#path{fill:none;stroke:#fc0;stroke-width:4}@media(max-width:1200px){#rect-1{fill:none;stroke-width:40}#rect-2{fill:#fc0;stroke:#fc0;stroke-width:4}#rect-3{fill:#2d2c39;stroke:#2d2c39;stroke-width:8}}',""]),t.exports=o},300:function(t,e,n){var o=n(4),r=n(33),l=n(15),c=/"/g,d=o("".replace);t.exports=function(t,e,n,o){var f=l(r(t)),v="<"+e;return""!==n&&(v+=" "+n+'="'+d(l(o),c,"&quot;")+'"'),v+">"+f+"</"+e+">"}},301:function(t,e,n){var o=n(3);t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},302:function(t,e,n){"use strict";n(296)},303:function(t,e,n){var o=n(76)(!1);o.push([t.i,'p[data-v-2d8d39a4]{font-size:1.8vw;font-weight:700;font-family:"Almarai",sans-serif}.subtitle[data-v-2d8d39a4]{font-size:1.5vw}.footer[data-v-2d8d39a4]{font-size:.8vw}@media(max-width:1200px){p[data-v-2d8d39a4]{font-size:8vw}.subtitle[data-v-2d8d39a4]{font-size:6vw}.footer[data-v-2d8d39a4]{font-size:2.8vw}}.link[data-v-2d8d39a4]{cursor:pointer;font-size:inherit;color:#e54343;transition:margin-left .5s ease-out,opacity .5s ease-out;white-space:nowrap}.link .char[data-v-2d8d39a4]{display:inline-block;min-width:.3em}',""]),t.exports=o},304:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{isSideBarOpen:!1,displayLogo:!0,displayMain:!0}}},r=(n(308),n(63)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"section"},[e("div",{staticClass:"big-logo"},[e("Animation")],1),t._v(" "),e("div",{staticClass:"main"},[e("h1",{staticClass:"title-container"},[e("Animation",{staticClass:"logo-responsive"}),t._v(" "),e("img",{staticClass:"title",attrs:{src:n(307),alt:"OtherPlane"}})],1),t._v(" "),e("div",{staticClass:"content"},[e("i18n",{staticClass:"text",attrs:{path:"hero.description",tag:"p"}},[e("Link",{attrs:{url:"https://witnet.io/",label:"Witnet"}})],1),t._v(" "),e("p",{staticClass:"subtitle"},[e("Link",{attrs:{url:"mailto:info@otherplane.com",label:"Contact us!"}})],1)],1),t._v(" "),e("p",{staticClass:"footer"},[t._v(t._s(t.$t("footer")))])])])}),[],!1,null,"888acda2",null);e.default=component.exports;installComponents(component,{Animation:n(305).default,Link:n(306).default})},305:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{p0:{x:185,y:191},p1:{x:2,y:2}}},mounted:function(){this.flip(-1)},methods:{flip:function(t){for(var i=0;i<3;i++){var e="rect-".concat(i+1),path=this.$refs[e];this.$gsap.killTweensOf(path),this.$gsap.to(path,1+i,{scaleX:t,transformOrigin:"50%, 0%"})}}}},r=(n(298),n(63)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("svg",{attrs:{viewBox:"0 0 725 718",fill:"none"},on:{mouseenter:function(e){return t.flip(1)},mouseleave:function(e){return t.flip(-1)}}},[e("rect",{ref:"rect-1",staticClass:"path",attrs:{id:"rect-1",x:t.p1.x,y:t.p1.y,width:"721",height:"714",stroke:"#FFCC00","stroke-width":"4"}}),t._v(" "),e("rect",{ref:"rect-2",staticClass:"path",attrs:{id:"rect-2",x:t.p0.x,y:t.p0.y,width:"354",height:"336",stroke:"#FFCC00","stroke-width":"4"}}),t._v(" "),e("path",{ref:"rect-3",staticClass:"path",attrs:{id:"rect-3",d:"M443 271H281V318H353V395H281V443.5H443V271Z",stroke:"#FFCC00","stroke-width":"4"}})])}),[],!1,null,null,null);e.default=component.exports},306:function(t,e,n){"use strict";n.r(e);n(295),n(52),n(25),n(78);var o={props:{label:{type:String,required:!0},url:{type:String,required:!0}},data:function(){return{selectedLink:!1}},computed:{link:function(){var t=this.selectedLink;return{label:this.label,selected:t,dimmed:!t,chars:this.label.split("")}}},methods:{toggleLink:function(t){var e=t?-1:1;this.animateChars(e)},animateChars:function(t){for(var i=0;i<this.link.label.length;i++){var e="char-".concat(this.url,"-").concat(i),n=this.$refs[e];this.$gsap.killTweensOf(n),this.$gsap.to(n,.5,{scaleX:t})}}}},r=(n(302),n(63)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("a",{key:t.url,staticClass:"link",class:{selected:t.link.selected,dimmed:t.link.dimmed},attrs:{href:t.url,target:"_blank"},on:{mouseover:function(e){return t.toggleLink(!0)},mouseleave:function(e){return t.toggleLink(!1)}}},t._l(t.link.label,(function(n,o){return e("span",{key:"char-".concat(t.url,"-").concat(o),ref:"char-".concat(t.url,"-").concat(o),refInFor:!0,staticClass:"link char"},[t._v(t._s(n))])})),0)}),[],!1,null,"2d8d39a4",null);e.default=component.exports},307:function(t,e,n){t.exports=n.p+"img/other-plane-title.6e8155c.svg"},308:function(t,e,n){"use strict";n(297)},309:function(t,e,n){var o=n(76)(!1);o.push([t.i,'p[data-v-888acda2]{font-size:1.8vw;font-weight:700;font-family:"Almarai",sans-serif}.subtitle[data-v-888acda2]{font-size:1.5vw}.footer[data-v-888acda2]{font-size:.8vw}@media(max-width:1200px){p[data-v-888acda2]{font-size:8vw}.subtitle[data-v-888acda2]{font-size:6vw}.footer[data-v-888acda2]{font-size:2.8vw}}.section[data-v-888acda2]{color:#fff;display:grid;grid-template-rows:1fr;grid-template-columns:1fr 45vw;overflow-x:visible;overflow-x:initial}.section[data-v-888acda2],.section .big-logo[data-v-888acda2]{height:100vh}.section .logo-responsive[data-v-888acda2]{display:none}.section .main[data-v-888acda2]{overflow:auto;position:relative;z-index:50;padding:2vw 2vw 0;display:grid;grid-template-rows:-webkit-max-content -webkit-max-content 1fr;grid-template-rows:max-content max-content 1fr}.section .main .title[data-v-888acda2]{width:100%;padding-bottom:1.5vw}.section .main .text[data-v-888acda2]{padding-bottom:1.5vw;line-height:1.5}.section .main .footer[data-v-888acda2]{padding-top:1vw;margin-bottom:1vw;display:flex;align-items:flex-end}@media(max-width:1200px){.section[data-v-888acda2]{padding:0;grid-template-columns:1fr;grid-template-rows:1fr}.section .title-container[data-v-888acda2]{display:grid;grid-template-columns:20vw 1fr;align-items:center;padding-bottom:4vw}.section .big-logo[data-v-888acda2]{display:none}.section .logo-responsive[data-v-888acda2]{display:block;padding-right:16px}.section .main[data-v-888acda2]{padding:16px;max-width:100%}.section .main .footer[data-v-888acda2]{padding-top:5vw;margin-bottom:0}}',""]),t.exports=o}}]);
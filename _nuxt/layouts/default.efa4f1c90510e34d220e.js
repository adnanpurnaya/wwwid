webpackJsonp([3],{"+ia1":function(e,t,n){var a=n("kJ2I");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("16f927fa",a,!1,{sourceMap:!1})},AhXS:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("nav",[n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/",exact:""}},[e._v("Home")])],1),n("li",{staticClass:"dropdown",on:{click:function(t){e.display="none"==e.display?"block":"none"}}},[n("a",{staticClass:"dropbtn",attrs:{href:"javascript:void(0)"}},[e._v("▾ Kategori")]),n("div",{staticClass:"dropdown-content",style:{display:e.display}},e._l(e.categories,function(t){return n("nuxt-link",{key:t.text,attrs:{to:t.link}},[e._v("\n            "+e._s(t.text)+" "),n("small",[e._v("("+e._s(t.count)+")")])])}))])])])])};a._withStripped=!0;var o={render:a,staticRenderFns:[]};t.a=o},DLCH:function(e,t,n){"use strict";var a=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Header"),t("div",{staticClass:"container"},[t("nuxt")],1)],1)};a._withStripped=!0;var o={render:a,staticRenderFns:[]};t.a=o},"LT+h":function(e,t,n){"use strict";var a=n("YXP+");t.a={components:{Header:a.a}}},Ma2J:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("LT+h"),o=n("DLCH"),i=!1;var r=function(e){i||n("+ia1")},c=n("VU/8")(a.a,o.a,!1,r,null,null);c.options.__file="layouts/default.vue",t.default=c.exports},QGjZ:function(e,t,n){var a=n("dC8k");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("76b9f0f6",a,!1,{sourceMap:!1})},Vtg2:function(e,t,n){"use strict";t.a={data:function(){return{categories:[],display:"none"}},methods:{ucwords:function(e){return e.replace(/-/g," ").toLowerCase().replace(/\b[a-z]/g,function(e){return e.toUpperCase()})}},mounted:function(){var e=this;this.categories=[{name:"frontend-development",count:1},{name:"snapshot-testing",count:1},{name:"unit-testing",count:1},{name:"frontend-testing",count:1},{name:"integration-testing",count:1},{name:"progressive-web-app",count:4},{name:"newsletter",count:2},{name:"web-development",count:5},{name:"front-end-development",count:3},{name:"web-performance",count:1},{name:"challenge",count:1},{name:"tips",count:1},{name:"life",count:1},{name:"web-developer",count:1},{name:"product-development",count:1},{name:"web",count:2},{name:"accessibility",count:2},{name:"a11y",count:1},{name:"forms",count:1},{name:"shadow-dom",count:1},{name:"html-templates",count:1},{name:"web-components",count:1},{name:"custom-elements",count:1},{name:"wcag",count:1},{name:"people-with-disabilities",count:1},{name:"billion-users-on-the-web",count:1},{name:"web-accessibilty",count:1}].map(function(t){return{text:e.ucwords(t.name),link:"/kategori/"+t.name,count:t.count}}).sort(function(e,t){return e.text<t.text?-1:e.text>t.text?1:0})}}},"YXP+":function(e,t,n){"use strict";var a=n("Vtg2"),o=n("AhXS"),i=!1;var r=function(e){i||n("QGjZ")},c=n("VU/8")(a.a,o.a,!1,r,"data-v-1a9bb128",null);c.options.__file="components/Header.vue",t.a=c.exports},dC8k:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"header[data-v-1a9bb128]{width:100%;height:47px;margin-bottom:20px;border-bottom:1px solid #dbdfe1;position:fixed;top:0;background-color:#fff}header[data-v-1a9bb128],ul[data-v-1a9bb128]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}ul[data-v-1a9bb128]{list-style:none;padding:0;margin:0}.dropbtn[data-v-1a9bb128],li a[data-v-1a9bb128]{display:inline-block;text-align:center;padding:14px 16px;text-decoration:none}.dropdown:hover .dropbtn[data-v-1a9bb128],li a[data-v-1a9bb128]:hover{background-color:#f9f9f9}li.dropdown[data-v-1a9bb128]{display:inline-block}.dropdown-content[data-v-1a9bb128]{position:absolute;background-color:#f9f9f9;min-width:160px;-webkit-box-shadow:0 8px 16px 0 rgba(0,0,0,.2);box-shadow:0 8px 16px 0 rgba(0,0,0,.2);z-index:1}.dropdown-content a[data-v-1a9bb128]{color:#000;padding:12px 16px;text-decoration:none;display:block;text-align:left}.dropdown-content a[data-v-1a9bb128]:hover{background-color:#f1f1f1}",""])},kJ2I:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,'html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#333}body{padding-top:60px}figure img{width:100%}figure figcaption{text-align:center;color:#6c757d!important;font-size:90%}a{text-decoration:none;color:#000}.container{width:100%;margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem;margin:2px}.badge-secondary{color:#fff;background-color:#6c757d}.nuxt-link-active{background-color:#f9f9f9}nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:10px}.breadcrumb,nav{display:-webkit-box;display:-ms-flexbox;display:flex}.breadcrumb{-ms-flex-wrap:wrap;flex-wrap:wrap;padding:12px 16px;padding:.75rem 1rem;margin:0;list-style:none;background-color:#e9ecef;border-radius:.25rem;font-size:.8em}.breadcrumb-item+.breadcrumb-item:before{display:inline-block;padding-right:8px;padding-right:.5rem;padding-left:8px;padding-left:.5rem;color:#6c757d;content:"/"}.breadcrumb-item+.breadcrumb-item:hover:before{text-decoration:underline;text-decoration:none}.breadcrumb-item.active{color:#6c757d}',""])}});
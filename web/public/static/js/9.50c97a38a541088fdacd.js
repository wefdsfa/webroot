webpackJsonp([9],{B43V:function(t,e){},F5eI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("Wp7k");var i=n("oOud"),o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"auditList"}},[n("view-box",[n("x-header",{class:t.headerShadow?"shadow":"",attrs:{title:"报名审核"}},[n("i",{staticClass:"maticon back-icon",attrs:{slot:"overwrite-left"},domProps:{innerHTML:t._s(t.icons("navigate_before"))},on:{click:t._back},slot:"overwrite-left"},[t._v("navigate_before")]),t._v(" "),n("div",{attrs:{slot:"right"},slot:"right"},[n("i",{staticClass:"maticon",domProps:{innerHTML:t._s(t.icons("more_vert"))},on:{click:function(e){t.showMenus=!0}}})])]),t._v(" "),n("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[n("actionsheet",{attrs:{menus:t.menus,"show-cancel":""},on:{"on-click-menu":t._menuClick},model:{value:t.showMenus,callback:function(e){t.showMenus=e},expression:"showMenus"}})],1),t._v(" "),n("div",{staticClass:"audit-content"},[t.applies&&t.applies.length>0?n("group",t._l(t.applies,function(e,i){return n("cell",{key:i,attrs:{title:e.participantName}},["UN_AUDIT"===e.status?n("div",{staticClass:"cell-content"},[n("span",{staticClass:"opt",on:{click:function(n){t._opt(!1,e)}}},[t._v("不通过")]),n("span",{staticClass:"opt sure",on:{click:function(n){t._opt(!0,e)}}},[t._v("通过")])]):"SUCCESS"===e.status?n("div",{staticClass:"cell-content"},[n("span",{staticClass:"opt"},[t._v("已通过")])]):"FAIL"===e.status?n("div",{staticClass:"cell-content"},[n("span",{staticClass:"opt"},[t._v("未通过")])]):t._e()])}),1):t._e(),t._v(" "),n("p",{staticClass:"view-more",on:{click:t._getAuditPage}},[t._v(t._s(t.allTip))])],1),t._v(" "),n("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[n("confirm",{staticClass:"activity-signInList-confirm",attrs:{title:t.confirmTitle,"confirm-text":t.confirmBtnText},on:{"on-confirm":t._onConfirm},model:{value:t.showConfirm,callback:function(e){t.showConfirm=e},expression:"showConfirm"}},[n("group",[n("p",{attrs:{id:"msg","data-clipboard-text":t.confirmMsg}})])],1)],1)],1)],1)},staticRenderFns:[]};var r=function(t){n("B43V")},a=n("C7Lr")(i.a,o,!1,r,null,null);e.default=a.exports},Wp7k:function(t,e,n){"use strict";(function(t){var e=n("dQyo");n.n(e),n("C331")}).call(e,n("L7Pj"))},dQyo:function(t,e,n){
/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
var i;i=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=c(n(1)),a=c(n(3)),s=c(n(4));function c(t){return t&&t.__esModule?t:{default:t}}var l=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i.resolveOptions(n),i.listenClick(t),i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.default),o(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===i(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,s.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new r.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return u("action",t)}},{key:"defaultTarget",value:function(t){var e=u("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return u("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}();function u(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}t.exports=l},function(t,e,n){"use strict";var i,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n(2),s=(i=a)&&i.__esModule?i:{default:i};var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.resolveOptions(e),this.initSelection()}return r(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,s.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,s.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":o(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=c},function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var i=window.getSelection(),o=document.createRange();o.selectNodeContents(t),i.removeAllRanges(),i.addRange(o),e=i.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var i=this.e||(this.e={});return(i[t]||(i[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var i=this;function o(){i.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),i=0,o=n.length;i<o;i++)n[i].fn.apply(n[i].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),i=n[t],o=[];if(i&&e)for(var r=0,a=i.length;r<a;r++)i[r].fn!==e&&i[r].fn._!==e&&o.push(i[r]);return o.length?n[t]=o:delete n[t],this}},t.exports=n},function(t,e,n){var i=n(5),o=n(6);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!i.string(e))throw new TypeError("Second argument must be a String");if(!i.fn(n))throw new TypeError("Third argument must be a Function");if(i.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(i.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}(t,e,n);if(i.string(t))return function(t,e,n){return o(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var i=n(7);function o(t,e,n,o,r){var a=function(t,e,n,o){return function(n){n.delegateTarget=i(n.target,e),n.delegateTarget&&o.call(t,n)}}.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}t.exports=function(t,e,n,i,r){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return o(t,e,n,i,r)}))}},function(t,e){var n=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var i=Element.prototype;i.matches=i.matchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector||i.webkitMatchesSelector}t.exports=function(t,e){for(;t&&t.nodeType!==n;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}}])},t.exports=i()},oOud:function(t,e,n){"use strict";(function(t){var i=n("dQyo"),o=n.n(i),r=n("C331");e.a={props:{data:{default:null}},data:function(){return{pageIndex:0,pageSize:20,applies:[],isAll:!1,isLoadding:!1,showMenus:!1,headerShadow:!1,menus:{exportList:"导出全部",exportSuccess:"导出通过",exportFailed:"导出不通过",exportUnaudit:"导出未审核"},showConfirm:!1,confirmMsg:"",confirmTitle:"如果无法下载请复制下面链接",confirmBtnText:"复制"}},computed:{activityId:function(){return this.data.data.id},allTip:function(){var t="---查看更多---";return this.isAll&&(t=this.applies.length>0?"---没有更多数据了---":"---暂无数据---"),this.isLoadding&&(t="---加载中---"),t}},created:function(){this._getAuditPage()},methods:{_menuClick:function(t){var e,n="";if("exportSuccess"===t?n="SUCCESS":"exportFailed"===t?n="FAIL":"exportUnaudit"===t&&(n="UN_AUDIT"),e="/downloads/sc/activities/"+this.activityId+"/applies/excel?filename=报名列表&status="+n,this.confirmMsg=window.location.origin+e,/(iP)/g.test(navigator.userAgent))return this.showConfirm=!0,!1;var i=document.createElement("iframe");i.src=e,i.style.display="none",document.body.appendChild(i),window.location.href=e,this.showConfirm=!0},_back:function(){this.$emit("removeBread",this.data)},_getAuditPage:function(){var t=this;this.isAll||this.isLoadding||(this.isLoadding=!0,setTimeout(function(){Object(r.c)({url:"/api/sc/activities/"+t.activityId+"/applies/pages",type:"get",data:{page:t.pageIndex,size:t.pageSize},success:function(e){t.isLoadding=!1,e.state?(e.data.content&&e.data.content.length===t.pageSize||(t.isAll=!0),e.data.content&&e.data.content.length>0&&(e.data.content.forEach(function(e){t.applies.push(e)}),t.pageIndex++)):t._toast(e.message)}})},600))},_opt:function(t,e){var n=this;Object(r.c)({url:"/api/sc/activities/"+this.activityId+"/applies/"+e.participantUserId,type:"put",data:{auditResult:t},success:function(i){i.state?(n._toast(t?"已通过":"已拒绝"),n.$set(e,"status",t?"SUCCESS":"FAIL")):n._toast(i.message)}})},_onConfirm:function(){var t=this,e=new o.a("#msg");e.on("success",function(n){t._toast("复制成功"),e.destroy()}),e.on("error",function(n){t._toast("该浏览器不支持自动复制"),e.destroy()});var n=document.getElementById("msg");if(document.all)n.click();else{var i=document.createEvent("MouseEvents");i.initEvent("click",!0,!0),n.dispatchEvent(i)}},_toast:function(t){this.$vux.toast.show({text:t,position:"bottom",type:"text"})}},mounted:function(){var e=this;this.$pullUpToLoad({container:".audit-content",down:{height:200,callback:function(){e.isAll=!1,e.pageIndex=0,e.applies=[],e._getAuditPage()}},up:{callback:function(){e._getAuditPage()}}});var n=this;t(".audit-content").on("scroll",function(){var e=t(this).scrollTop();n.headerShadow=e>0})}}}).call(e,n("L7Pj"))}});
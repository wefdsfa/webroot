webpackJsonp([144],{"6hjK":function(t,e){},FIqS:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("C331"),i={props:{data:{default:null}},data:function(){return{areas:[]}},methods:{_back:function(){this.$emit("removeBread",this.data)},_getAreas:function(){var t=this;Object(s.d)({url:"/api/mentality/scheduling/campus",type:"get",success:function(e){e.state&&(t.areas=e.data)}})},_jumpWith:function(t){this.$emit("addBread",{route:"/psychology/MProtocol",title:"",campus:t})}},created:function(){this._getAreas()}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"campus-page"},[a("view-box",[a("x-header",{staticClass:"campus-header",attrs:{title:"校区选择"}},[a("i",{staticClass:"maticon back-icon",attrs:{slot:"overwrite-left"},domProps:{innerHTML:t._s(t.icons("navigate_before"))},on:{click:t._back},slot:"overwrite-left"},[t._v("navigate_before")])]),t._v(" "),a("div",{staticClass:"campus-content"},t._l(t.areas,function(e,s){return a("box",{key:s,staticClass:"submit-box"},[a("x-button",{staticClass:"custom-primary-blue",nativeOn:{click:function(a){return t._jumpWith(e)}}},[t._v(t._s(e.label))])],1)}),1)],1)],1)},staticRenderFns:[]};var c=a("Mz/3")(i,n,!1,function(t){a("6hjK")},null,null);e.default=c.exports}});
webpackJsonp([37],{eGdj:function(t,a){},rfNw:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=i("C331"),n={props:{data:{default:""}},data:function(){return{info:{},applicantList:[]}},created:function(){this.info=this.data.data,this.applicantList=this.info},methods:{_back:function(){this.data.isUpdateLastPage=!0,this.$emit("removeBread",this.data)},_refuse:function(t){var a=this;Object(e.c)({url:"/api/sc/organizations/apply/"+t.id+"/agree",type:"put",success:function(i){var e="";i.state?(e="操作成功",a.applicantList.forEach(function(i,e){i.id===t.id&&a.applicantList.splice(e,1)})):e=i.message,a.$vux.toast.show({text:e,position:"bottom",type:"text"})}})},_agree:function(t){var a=this;Object(e.c)({url:"/api/sc/organizations/apply/"+t.id+"/disagree",type:"put",success:function(i){var e="";i.state?(e="操作成功",a.applicantList.forEach(function(i,e){i.id===t.id&&a.applicantList.splice(e,1)})):e=i.message,a.$vux.toast.show({text:e,position:"bottom",type:"text"})}})}}},s={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"organizationPersonnelCheck"}},[i("x-header",{staticClass:"organizationPersonnelCheck-header"},[i("i",{staticClass:"maticon back-icon",attrs:{slot:"overwrite-left"},domProps:{innerHTML:t._s(t.icons("navigate_before"))},on:{click:t._back},slot:"overwrite-left"},[t._v("navigate_before")])]),t._v(" "),i("div",{staticClass:"organizationPersonnelCheck-content"},[t.applicantList.length>0?i("div",t._l(t.applicantList,function(a,e){return i("div",{key:e,staticClass:"organizationPersonnelCheck-card"},[i("div",{staticClass:"personnel-name"},[t._v(t._s(a.name))]),t._v(" "),i("div",{staticClass:"check-opt"},[i("x-button",{staticClass:"refuse-btn",attrs:{mini:""},nativeOn:{click:function(i){t._refuse(a)}}},[t._v("拒绝")]),t._v(" "),i("x-button",{staticClass:"agree-btn",attrs:{mini:""},nativeOn:{click:function(i){t._agree(a)}}},[t._v("同意")])],1)])})):i("div",{staticClass:"nodataText"},[t._v("---暂无申请成员数据---")])])],1)},staticRenderFns:[]};var c=i("C7Lr")(n,s,!1,function(t){i("eGdj")},null,null);a.default=c.exports}});
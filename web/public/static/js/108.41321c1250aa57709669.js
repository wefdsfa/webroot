webpackJsonp([108],{"6K5O":function(t,i){},LYW8:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});a("3cXf"),a("xd7I");var e=a("C331"),n={props:{},created:function(){localStorage.getItem("lang");this.getContentTypeList()},data:function(){return{params:{},contentTypeList:[],activityParticipantPoint:{organizer:0,manager:0,normalParticipant:0}}},computed:{translate:function(){return Object(e.g)(this.lang).creatActivity}},methods:{save:function(){var t=this,i={activityContentType:[],activityParticipantPoint:this.activityParticipantPoint};this.contentTypeList.forEach(function(t){t.childType.forEach(function(t){i.activityContentType.push({id:t.id,point:t.point})})});Object(e.d)("api/sc/activities/points",i,"put").then(function(i){i.state?t.$toast("保存成功!"):t.$toast(i.message)})},getContentTypeList:function(){var t=this;Object(e.d)("/api/sc/activities/points").then(function(i){i.state&&(t.contentTypeList=i.data.activityContentType,t.activityParticipantPoint=i.data.activityParticipantPoint)})}}},o={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("GeminiScrollbar",{staticClass:"setActivityPoiont_wrap",staticStyle:{"padding-bottom":"50px"}},[a("div",{staticClass:"big_title"},[t._v("配置活动积分")]),t._v(" "),t._l(t.contentTypeList,function(i,e){return a("div",{key:e},[a("div",{staticClass:"little_title"},[t._v(t._s(i.typeName))]),t._v(" "),a("div",{staticClass:"box_flex flex_wrap"},t._l(i.childType,function(i,e){return a("div",{key:e,staticClass:"form-group"},[a("label",{staticClass:"input-label require"},[t._v(t._s(i.typeName))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:i.point,expression:"child.point"}],staticClass:"form-control search-input modal-form-style",attrs:{type:"number"},domProps:{value:i.point},on:{input:function(a){a.target.composing||t.$set(i,"point",a.target.value)}}})])}),0)])}),t._v(" "),a("div",[a("div",{staticClass:"little_title"},[t._v("角色分")]),t._v(" "),a("div",{staticClass:"box_flex flex_wrap"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label require"},[t._v("组织者")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.activityParticipantPoint.organizer,expression:"activityParticipantPoint.organizer"}],staticClass:"form-control search-input modal-form-style",attrs:{type:"number"},domProps:{value:t.activityParticipantPoint.organizer},on:{input:function(i){i.target.composing||t.$set(t.activityParticipantPoint,"organizer",i.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label require"},[t._v("管理者")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.activityParticipantPoint.manager,expression:"activityParticipantPoint.manager"}],staticClass:"form-control search-input modal-form-style",attrs:{type:"number"},domProps:{value:t.activityParticipantPoint.manager},on:{input:function(i){i.target.composing||t.$set(t.activityParticipantPoint,"manager",i.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label require"},[t._v("参与者")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.activityParticipantPoint.normalParticipant,expression:"activityParticipantPoint.normalParticipant"}],staticClass:"form-control search-input modal-form-style",attrs:{type:"number"},domProps:{value:t.activityParticipantPoint.normalParticipant},on:{input:function(i){i.target.composing||t.$set(t.activityParticipantPoint,"normalParticipant",i.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"box_flex flex_center",staticStyle:{margin:"20px 0 50px 0"}},[a("button",{staticClass:"btn submit-btn",on:{click:function(i){return t.save()}}},[t._v("保存")])])],2)},staticRenderFns:[]};var r=a("C7Lr")(n,o,!1,function(t){a("6K5O")},"data-v-c4ef5c98",null);i.default=r.exports}});
webpackJsonp([105],{GyLX:function(t,s){},gHNN:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=a("C331"),e={props:{account:{userId:"",userName:"",type:""}},data:function(){return{statusJson:{tuitionFeeInfoStatus:"未完成",accommodationPaymentInfoStatus:"未完成",studentAppearanceConsistency:"未完成",admissionsInformationConsistency:"未完成",baseInformationConsistency:"未完成",studentsArrivingAtSchool:"未完成",greenChannelApplicationStatus:null,reservationsOnTheStatusOfApplicationForAdmissionStatus:null},statusData:{tuitionFeeInfoStatus:"学费缴费",accommodationPaymentInfoStatus:"住宿缴费",studentAppearanceConsistency:"学生相貌一致性",admissionsInformationConsistency:"录取信息一致性",baseInformationConsistency:"基本信息一致性",studentsArrivingAtSchool:"学生到校指标",greenChannelApplicationStatus:"绿色通道申请",reservationsOnTheStatusOfApplicationForAdmissionStatus:"保留入学资格申请"},passArray:["已完成","完成","已通过","通过","通过复查","已缴费","已到校"],noNeedDataArray:["greenChannelApplicationStatus","reservationsOnTheStatusOfApplicationForAdmissionStatus"]}},created:function(){var t=this;Object(n.c)({url:"/api/users/me/freshmanBusinessStatus",type:"get",success:function(s){if(s.state){if(s.data)for(var a in s.data)t.statusJson[a]=s.data[a]}else t.$vux.toast.show({text:s.message,position:"bottom",type:"text"})}})},methods:{}},o={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"freshmanStatus"}},[a("view-box",[a("x-header",{staticClass:"freshmanStatus-header",attrs:{title:t.account.userName}},[a("i",{staticClass:"maticon account-circle-icon",attrs:{slot:"overwrite-left"},domProps:{innerHTML:t._s(t.icons("account_circle"))},slot:"overwrite-left"},[t._v("account_circle")])]),t._v(" "),a("div",{staticClass:"freshmanStatus-content"},t._l(t.statusJson,function(s,n){return a("div",{key:n},[t.noNeedDataArray.indexOf(n)<0?a("group",{staticClass:"freshmanStatus-group",class:t.passArray.indexOf(s)>=0?"active":"default"},[a("cell",{staticClass:"freshmanStatus-cell",attrs:{title:t.statusData[n]}},[t.passArray.indexOf(s)>=0?a("i",{staticClass:"maticon affariList-icon",attrs:{slot:"icon"},domProps:{innerHTML:t._s(t.icons("done"))},slot:"icon"},[t._v("done")]):a("i",{staticClass:"maticon affariList-icon",attrs:{slot:"icon"},domProps:{innerHTML:t._s(t.icons("more_horiz"))},slot:"icon"})])],1):t._e()],1)}))],1)],1)},staticRenderFns:[]};var i=a("C7Lr")(e,o,!1,function(t){a("GyLX")},null,null);s.default=i.exports}});
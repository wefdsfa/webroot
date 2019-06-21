webpackJsonp([66],{BTUs:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("C331"),n={props:{account:{userId:"",userName:"",type:"",schoolId:""}},data:function(){return{number:0,needTodo:0,showRole:!1,showConfirm:!1,showStation:!1,roleKey:"",roleOptions:[],optionLabelJson:{student:"学生信息",instructor:"辅导员信息",teacher:"教工信息"},menuList:[{title:"我的活动",clickFun:this._myActivity,icon:o("X6M/")},{title:"我的缴费",clickFun:this._myPayment,icon:o("nakx")},{title:"我的组织",clickFun:this._organizationManagePage,icon:o("ycci")},{title:"我的预约",clickFun:this._myYuyue,icon:o("AT3V")},{title:"我的岗位",clickFun:this._myStation,icon:o("bmH+")}],myThingsTypes:[{title:"我发起的",icon:o("lZpS")},{title:"我的待办",icon:o("RiUp")},{title:"我的经办",icon:o("drIh")},{title:"抄送给我",icon:o("giWg")}],remarkReportShow:!1,messages:[]}},created:function(){this._checkPersonInfo(),this.getNeedTodo()},methods:{_myYuyue:function(){this.$toast("暂未开放")},_myStation:function(){console.log("hhh"),this.$emit("addBread",{route:"/accountCircle/myWork",data:{title:"我的岗位"},title:""})},_organizationManagePage:function(){var t=this;Object(i.d)({url:"/api/sc/organizations/list/join-audit",type:"get",success:function(e){e.state?0===e.data.length?t.$emit("addBread",{route:"/organization/MOrganizationSearch",title:""}):t.$emit("addBread",{route:"/organization/MOrganizationManage",title:""}):t.$toast(e.message)}})},_myMoney:function(){this.showStation=!1,this.$parent.addBread({route:"/accountCircle/myMoney",data:{title:"薪酬发放"}})},_mySupportRecords:function(){this.showStation=!1,this.$parent.addBread({route:"/accountCircle/supportRecords",data:{title:"申请记录"}})},formatUserType:function(t){switch(t){case"STUDENT":return"在校学生";case"TEACHER":default:return"教师"}},_checkMessage:function(){this.$emit("addBread",{route:"/messageBox/MMessagesList",data:{list:this.messages}})},_myAffair:function(t){this.$emit("addBread",{route:"/myAffair/MyAffairList",data:{title:t.title},title:""})},_myActivity:function(){this.$emit("addBread",{route:"/accountCircle/MMyActivity",title:""})},_transactionRecord:function(){this.$emit("addBread",{route:"/paymentHall/transactionRecord",title:""})},_myPayment:function(){this.$emit("addBread",{route:"/paymentHall/myPayment",title:""})},_myRemarkReport:function(){this.$emit("addBread",{route:"/accountCircle/MRemarkReport",title:""})},_myPaymentRecords:function(){this.$emit("addBread",{route:"/payHall/MPaymentRecords",title:""})},_myPaymentRecordsxx:function(){this.$emit("addBread",{route:"/test",title:""})},_viewInfo:function(){this.showRole=!0},_checkPersonInfo:function(){var t=this;this.account.userId&&Object(i.d)({url:"/api/relationship/instructor/check",type:"get",success:function(e){e.state&&e.data&&e.data.length>0&&(t.roleOptions=[],e.data.forEach(function(e){t.roleOptions.push({key:e,value:t.optionLabelJson[e]}),"student"===e&&(t.remarkReportShow=!0)}))}})},_check:function(t){var e=this;this.showRole&&(this.showRole=!1),this.$nextTick(function(){e.$emit("addBread",{route:"/form/MFormLayout",title:"",data:{userId:e.account.userId,type:t.toUpperCase()}})})},_showConfirm:function(){this.showConfirm=!0},logout:function(){this.$emit("logout"),this.showConfirm=!1},_getMessages:function(){var t=this;Object(i.d)({url:"/api/message/quiry",type:"get",success:function(e){e.state&&(t.messages=e.data||[])}})},getNeedTodo:function(){var t=this;Object(i.d)({type:"get",url:"/api/processEngine/stat/approval",success:function(e){e.state&&e.data&&(t.needTodo=e.data.todoCount)}})}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box_flex column",attrs:{id:"accountCircle"}},[i("div",{staticClass:"header box_flex column flex_center"},[i("img",{attrs:{src:o("A+Cw"),alt:""}}),t._v("\n    "+t._s(t.account.userName)+"\n    "),i("div",{staticClass:"user_type"},[t._v(t._s(t.formatUserType(t.account.type)))]),t._v(" "),i("img",{staticClass:"set",attrs:{src:o("CBsO"),alt:""},on:{click:function(e){return t._viewInfo()}}})]),t._v(" "),i("div",{staticClass:"my_things"},[i("div",{staticClass:"title box_flex box_between"},[t._v("我的事务\n      ")]),t._v(" "),i("div",{staticClass:"box_flex"},t._l(t.myThingsTypes,function(e,o){return i("div",{key:o,staticClass:"box_child column box_flex flex_center",class:{needTodo:1==o&&t.needTodo>0},on:{click:function(o){return t._myAffair(e)}}},[1==o&&t.needTodo>0?i("span",[t._v(t._s(t.needTodo>99?"99+":t.needTodo))]):t._e(),t._v(" "),i("img",{staticClass:"icon",attrs:{src:e.icon,alt:""}}),t._v("\n        "+t._s(e.title)+"\n      ")])}),0)]),t._v(" "),i("div",{staticClass:"bar"}),t._v(" "),i("div",{staticClass:"my_menus grow_1"},t._l(t.menuList,function(e,o){return i("div",{key:o,staticClass:"box_row box_flex box_between align_center",on:{click:function(t){return e.clickFun()}}},[i("div",{staticClass:"box_flex"},[i("img",{staticClass:"icon",attrs:{src:e.icon,alt:""}}),t._v(" "),i("div",{staticClass:"title"},[t._v(t._s(e.title))])]),t._v(" "),i("i",{staticClass:"maticon",attrs:{slot:"icon"},domProps:{innerHTML:t._s(t.icons("chevron_right"))},slot:"icon"})])}),0),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("popup",{model:{value:t.showRole,callback:function(e){t.showRole=e},expression:"showRole"}},[i("popup-header",{attrs:{"left-text":"取消","right-text":"确定",title:"查看","show-bottom-border":!1},on:{"on-click-left":function(e){t.showRole=!1},"on-click-right":function(e){return t._check(t.roleKey)}}}),t._v(" "),i("group",{attrs:{gutter:"0"}},[i("radio",{attrs:{options:t.roleOptions},model:{value:t.roleKey,callback:function(e){t.roleKey=e},expression:"roleKey"}})],1),t._v(" "),i("div",{staticClass:"zhuxiao",on:{click:t._showConfirm}},[t._v("注销登录")])],1)],1),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("popup",{model:{value:t.showStation,callback:function(e){t.showStation=e},expression:"showStation"}},[i("popup-header",{attrs:{title:"我的岗位","show-bottom-border":!1},on:{"on-click-left":function(e){t.showStation=!1}}}),t._v(" "),i("div",{staticClass:"zhuxiao",on:{click:t._mySupportRecords}},[t._v("申请记录")]),t._v(" "),i("div",{staticClass:"zhuxiao",on:{click:t._myMoney}},[t._v("薪酬发放")])],1)],1),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("confirm",{attrs:{"close-on-confirm":!1,title:"注销登录"},on:{"on-confirm":t.logout},model:{value:t.showConfirm,callback:function(e){t.showConfirm=e},expression:"showConfirm"}},[i("p",{staticStyle:{"text-align":"center"}},[t._v("确定注销登录吗？")])])],1)])},staticRenderFns:[]};var a=o("Mz/3")(n,s,!1,function(t){o("Zrnq"),o("NOnc")},"data-v-5be854c8",null);e.default=a.exports},NOnc:function(t,e){},Zrnq:function(t,e){}});
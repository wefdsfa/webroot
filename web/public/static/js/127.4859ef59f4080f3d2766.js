webpackJsonp([127],{E7Aq:function(t,a){},"IIy+":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("mvHQ"),s=e.n(i),c=e("C331"),n={data:function(){return{userTypeList:[{name:"全部",value:"",active:!0},{name:"新生",value:"3",active:!1},{name:"在校生",value:"1",active:!1},{name:"辅导员",value:"4",active:!1},{name:"教职工",value:"2",active:!1},{name:"与我相关",value:"5",active:!1}],appParams:{category:"ALL",typeId:"",userType:"",keyword:"",capital:""},letterList:[{name:"全部",value:"",active:!0}],applicationList:[],hotList:[],serverTypeList:[{name:"全部",value:"",active:!0}],appList:[{icon:""}]}},created:function(){this.getServerTypeList(),this.getApplicationList();for(var t=0;t<25;t++)this.letterList.push({name:String.fromCharCode(65+t),active:!1})},methods:{_checkDetail:function(t,a){var e=this;if(t.route)return t.id&&(t.route+="?id="+t.id),void this.$emit("addBread",{route:t.route,title:t.name});if(t.isPay)this._paymentCheck(t);else{this.$waiting.show(),this.curApp=t;var i=t.app?t.app.setting.type:t.setting?t.setting.type:"",s="";if("FORM"===i)s="/app/form?id="+this.curApp.id;else if("WORKFLOW"===i)s="/app/flow?id="+this.curApp.id;else{if(!t.setting)return void this._applyCheck(t);if(!t.setting.useBusiness)return window.open(t.setting.linkUrl),this.$waiting.close(),!1;s="/app/link?id="+this.curApp.id}setTimeout(function(){e.$emit("addBread",{route:s,title:t.name||t.app.name,appData:t,entranceType:a}),e.$waiting.close()},310)}},_applyCheck:function(t){var a=this;setTimeout(function(){a.$emit("addBread",{route:"/app/flow?id="+t.id+"&appType=activityAudit",title:t.name,appData:t,entranceType:"activityAudit"}),a.$waiting.close()},310)},collectThis:function(t){var a=this,e="/api/app/"+t.id+"/collections",i={appId:t.id};t.isCollected?Object(c.d)(e,t.id,"delete").then(function(e){e.state&&(t.isCollected=!1,a.$toast("取消收藏!"))}).catch(function(t){}):Object(c.d)(e,i).then(function(e){e.state?(t.isCollected=!0,a.$toast("收藏成功!")):a.$toast("已收藏,无法重复收藏!")}).catch(function(t){})},selectMenu:function(t,a,e){if(!a.active)if(a.isSp){t.forEach(function(t){t.active=!1}),a.active=!0;var i=[];switch(a.name){case"第二课堂":this.getSecondClassList();break;case"缴费":this.getPayList();break;case"勤工助学":i.push({name:"岗位申请",imgPath:"school",appType:{name:"岗位申请"},background:null,route:"/workStudy/jobApply"}),this.applicationList=i,this.hotList=[];break;case"i签到":i.push({name:"i签到",imgPath:"school",appType:{name:"i签到"},background:null,route:" /modules/iSignIn/main"}),this.applicationList=i,this.hotList=[];break;case"心理预约":i.push({name:"心理咨询预约",imgPath:"school",appType:{name:"心理咨询预约"},background:null,route:"/psychologicalReservation/psychologicalAdvisoryReservation"}),this.applicationList=i,this.hotList=[];break;case"公寓系统":i.push({name:"学生选房",imgPath:"school",id:"77",appType:{name:"学生选房"},background:null,route:"/apartment/studentSelectRoom"}),this.applicationList=i,this.hotList=[]}}else{switch(t.forEach(function(t){t.active=!1}),a.active=!0,e){case"userTypeList":this.appParams.userType=a.value;break;case"letterList":"全部"==a.name?this.appParams.capital="":this.appParams.capital=a.name;break;case"serverTypeList":"全部"==a.name?this.appParams.typeId="":this.appParams.typeId=a.id}this.getApplicationList()}},getApplicationList:function(){var t=this,a="/api/app/search";Object(c.d)(a,this.appParams,"get").then(function(a){t.applicationList=a.data.map(function(t){return t.canCollect=!0,t})}).catch(function(t){});var e=JSON.parse(s()(this.appParams));e.category="POPULAR",Object(c.d)(a,e,"get").then(function(a){t.hotList=a.data.map(function(t){return t.canCollect=!0,t})}).catch(function(t){})},getSecondClassList:function(){var t=this;Object(c.d)("/api/sc/activities/types").then(function(a){t.applicationList=a.data.map(function(t){return t.appType={name:t.name},t.imgPath="assignment",t.imgType="1",t})})},getPayList:function(){var t=this;Object(c.d)("/api/payment/userallproject",{page:0,size:9999},"get").then(function(a){t.applicationList=a.data.content.map(function(t){return t.appType={name:t.name},t.imgPath="tuition",t.imgType="2",t.isPay=!0,t})})},_paymentCheck:function(t){var a=this;t?(this.$waiting.show(),Object(c.e)({url:"/api/payment/getInProject",type:"get",data:{id:t.id},success:function(t){t.state?t.data&&t.data.status?"NOT_PAID"===t.data.status?a.$emit("addBread",{route:"/payHall/payHallApplication",title:t.data.name,data:t.data}):a.$toast("您已缴费，无需缴费！"):a.$toast("该应用无需缴费！"):a.$toast(t.message)}}).always(function(){a.$waiting.close()})):this.$emit("addBread",{route:"/payHall/payHallRecords",title:"缴费记录"})},getServerTypeList:function(){var t=this;Object(c.d)("/api/app/type").then(function(a){a.data.forEach(function(a){t.serverTypeList.push(a)});[{name:"第二课堂",isSp:!0,active:!1,sort:0,userType:"3"},{name:"缴费",isSp:!0,active:!1,sort:0,userType:"3"},{name:"勤工助学",isSp:!0,active:!1,sort:0,userType:"3"},{name:"心理预约",isSp:!0,active:!1,sort:0,userType:"3"},{name:"公寓系统",isSp:!0,active:!1,sort:0,userType:"3"}].forEach(function(a){t.serverTypeList.push(a)})}).catch(function(t){})}}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"AppSearch"},[e("div",{staticClass:"search_box"},[e("div",{staticClass:"row search_row"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.appParams.keyword,expression:"appParams.keyword"}],staticClass:"search_input",attrs:{placeholder:"请输入您想搜索的内容",type:"text"},domProps:{value:t.appParams.keyword},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.getApplicationList(a)},input:function(a){a.target.composing||t.$set(t.appParams,"keyword",a.target.value)}}}),t._v(" "),e("button",{staticClass:"search_button",on:{click:t.getApplicationList}},[t._v("搜索")])]),t._v(" "),e("div",{staticClass:"row box_flex"},[e("div",{staticClass:"title"},[t._v("服务角色:")]),t._v(" "),e("div",{staticClass:"box_flex"},t._l(t.userTypeList,function(a,i){return e("div",{key:i,staticClass:"menu_child",class:{active:a.active},on:{click:function(e){return t.selectMenu(t.userTypeList,a,"userTypeList")}}},[t._v(t._s(a.name))])}),0)]),t._v(" "),e("div",{staticClass:"row box_flex"},[e("div",{staticClass:"title flex_shrink"},[t._v("服务类别:")]),t._v(" "),e("div",{staticClass:"box_flex flex_wrap"},t._l(t.serverTypeList,function(a,i){return e("div",{key:i,staticClass:"menu_child flex_shrink",class:{active:a.active},on:{click:function(e){return t.selectMenu(t.serverTypeList,a,"serverTypeList")}}},[t._v(t._s(a.name))])}),0)]),t._v(" "),e("div",{staticClass:"row box_flex letter_row"},[e("div",{staticClass:"title flex_shrink"},[t._v("字母搜索:")]),t._v(" "),e("div",{staticClass:"box_flex flex_wrap"},t._l(t.letterList,function(a,i){return e("div",{key:i,staticClass:"menu_child lettter",class:{active:a.active},on:{click:function(e){return t.selectMenu(t.letterList,a,"letterList")}}},[t._v(t._s(a.name))])}),0)])]),t._v(" "),e("div",{staticClass:"app_box"},[t._m(0),t._v(" "),e("div",{staticClass:"box_main box_flex flex_wrap"},t._l(t.applicationList,function(a,i){return a.isCollected?e("div",{key:i,staticClass:"app_child box_flex",on:{click:function(e){return t._checkDetail(a)}}},[e("div",{staticClass:"maticon_wrap flex_center",style:{"background-image":a.background?a.background:"linear-gradient(45deg, #3F87E7 0%, #377EEB 100%)"}},["2"!==a.imgType?e("i",{staticClass:"maticon",attrs:{title:a.imgPath},domProps:{innerHTML:t._s(t.icons(a.imgPath))}},[t._v(t._s(a.imgPath))]):"2"===a.imgType?e("i",{staticClass:"maticon app-icon-style theme-icon-application"},[e("span",{staticClass:"saasicon-44px",class:["saasicon-44px-"+a.imgPath]})]):t._e()]),t._v(" "),e("div",{staticClass:"grow_1 box_flex column justify_center"},[e("div",{staticClass:"title box_flex"},[t._v(t._s(a.name))]),t._v(" "),e("div",{staticClass:"text"},[t._v(t._s(a.appType.name))]),t._v(" "),a.remark?e("div",{staticClass:"remark"},[t._v(t._s(a.remark))]):t._e(),t._v(" "),e("span",{staticClass:"collect",class:{active:a.isCollected},on:{click:function(e){return e.stopPropagation(),t.collectThis(a)}}},[e("i",{staticClass:"maticon",domProps:{innerHTML:t._s(t.icons("star_border"))}})])])]):t._e()}),0)]),t._v(" "),e("div",{staticClass:"app_box"},[t._m(1),t._v(" "),e("div",{staticClass:"box_main box_flex flex_wrap"},t._l(t.hotList,function(a,i){return e("div",{key:i,staticClass:"app_child box_flex",on:{click:function(e){return t._checkDetail(a)}}},[e("div",{staticClass:"maticon_wrap flex_center",style:{"background-image":a.background?a.background:"linear-gradient(45deg, #3F87E7 0%, #377EEB 100%)"}},["2"!==a.imgType?e("i",{staticClass:"maticon",attrs:{title:a.imgPath},domProps:{innerHTML:t._s(t.icons(a.imgPath))}},[t._v(t._s(a.imgPath))]):"2"===a.imgType?e("i",{staticClass:"maticon app-icon-style theme-icon-application"},[e("span",{staticClass:"saasicon-44px",class:["saasicon-44px-"+a.imgPath]})]):t._e()]),t._v(" "),e("div",{staticClass:"grow_1 box_flex column justify_center"},[e("div",{staticClass:"title box_flex"},[t._v(t._s(a.name))]),t._v(" "),e("div",{staticClass:"text"},[t._v(t._s(a.appType.name))]),t._v(" "),a.remark?e("div",{staticClass:"remark"},[t._v(t._s(a.remark))]):t._e(),t._v(" "),e("span",{staticClass:"collect",class:{active:a.isCollected},on:{click:function(e){return e.stopPropagation(),t.collectThis(a)}}},[e("i",{staticClass:"maticon",domProps:{innerHTML:t._s(t.icons("star_border"))}})])])])}),0)]),t._v(" "),e("div",{staticClass:"app_box"},[t._m(2),t._v(" "),e("div",{staticClass:"box_main box_flex flex_wrap"},t._l(t.applicationList,function(a,i){return e("div",{key:i,staticClass:"app_child box_flex",on:{click:function(e){return t._checkDetail(a)}}},[e("div",{staticClass:"maticon_wrap flex_center",style:{"background-image":a.background?a.background:"linear-gradient(45deg, #3F87E7 0%, #377EEB 100%)"}},["2"!==a.imgType?e("i",{staticClass:"maticon",attrs:{title:a.imgPath},domProps:{innerHTML:t._s(t.icons(a.imgPath))}},[t._v(t._s(a.imgPath))]):"2"===a.imgType?e("i",{staticClass:"maticon app-icon-style theme-icon-application"},[e("span",{staticClass:"saasicon-44px",class:["saasicon-44px-"+a.imgPath]})]):t._e()]),t._v(" "),e("div",{staticClass:"grow_1 box_flex column justify_center"},[e("div",{staticClass:"title box_flex"},[t._v(t._s(a.name))]),t._v(" "),e("div",{staticClass:"text"},[t._v(t._s(a.appType.name))]),t._v(" "),a.remark?e("div",{staticClass:"remark"},[t._v(t._s(a.remark))]):t._e(),t._v(" "),a.canCollect?e("span",{staticClass:"collect",class:{active:a.isCollected},on:{click:function(e){return e.stopPropagation(),t.collectThis(a)}}},[e("i",{staticClass:"maticon",domProps:{innerHTML:t._s(t.icons("star_border"))}})]):t._e()])])}),0)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"title"},[this._v("我的收藏")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"title"},[this._v("热门应用")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"title"},[this._v("所有应用")])])}]};var r=e("VU/8")(n,o,!1,function(t){e("E7Aq")},"data-v-794953ec",null);a.default=r.exports}});
webpackJsonp([176],{HJh1:function(t,a){},OSw1:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});e("xd7I");var s=e("C331"),i=(e("9r/T"),{props:{data:{default:""}},data:function(){return{todoArr:[],number:0,tabIndex:0,tabs:[{type:"myProcessInstances",name:"我发起的"},{type:"todo",name:"我的待办"},{type:"done",name:"我的经办"},{type:"myCarbonCopy",name:"抄送给我"}],selectedTab:"myProcessInstances",affairArr:{myProcessInstances:[],todo:[],done:[],myCarbonCopy:[]},pageIndex:{myProcessInstances:0,todo:0,done:0,myCarbonCopy:0},url:{myProcessInstances:"/api/processEngine/myProcessInstances",todo:"/api/processEngine/tasks/todo",done:"/api/processEngine/tasks/done",myCarbonCopy:"/api/processEngine/processInstances/myCarbonCopy"},m:"",pageSize:20,isLoadMoreData:!1,loadingText:!1,noDataTips:"",isShowNoMoreDataTips:{myProcessInstances:!1,todo:!1,done:!1,myCarbonCopy:!1}}},created:function(){var t=this;switch(Object(s.e)({url:"/api/processEngine/tasks/todo/businesses",type:"get",success:function(a){t.todoArr=a.data}}),this.data.data.title){case"我发起的":this.selectedTab="myProcessInstances";break;case"我的待办":this.selectedTab="todo";break;case"我的经办":this.selectedTab="done";break;case"抄送给我":this.selectedTab="myCarbonCopy"}this._initAffairList(this.selectedTab)},methods:{_initAffairList:function(t){var a=this;this.loadingText=!0,this.isLoadMoreData=!1,Object(s.e)({url:this.url[t],type:"get",data:{page:this.pageIndex[t],size:this.pageSize},success:function(e){a.loadingText=!1,e.state?(e.data.content.length>0?(a.noDataTips="",a.pageIndex[t]>0&&e.data.content.length<a.pageSize&&(a.isShowNoMoreDataTips[t]=!0)):a.pageIndex[t]>0?a.isShowNoMoreDataTips[t]=!0:a.noDataTips="---暂无相关数据---",e.data.content.forEach(function(e){a.affairArr[t].push(e)}),e.data.content.length<a.pageSize?a.isLoadMoreData=!1:a.isLoadMoreData=!0):a.$vux.toast.show({text:e.message,position:"bottom",type:"text"})}})},addBread:function(){this.$emit("addBread",{route:"/form/MFormLayout",title:""})},_back:function(){this.data.isUpdateLastPage=!0,this.$emit("removeBread",this.data)},_clickTodo:function(t){this.$emit("addBread",{route:"/myAffair/MWaitDetail",title:t.app.name,data:t})},_clickAffair:function(t){this.$emit("addBread",{route:"/form/MFormLayout?appId="+t.appId+"&instanceId="+t.id+"&nodeId="+t.currentNode.id,title:""})},tabClick:function(t){this.selectedTab=t.type,0===this.affairArr[this.selectedTab].length&&this._initAffairList(this.selectedTab,!0)}},mounted:function(){var t=this;this.$pullUpToLoad({container:".affariList-content",up:{callback:function(){t.isLoadMoreData&&(t.pageIndex[t.selectedTab]++,t._initAffairList(t.selectedTab))}}})}}),o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{height:"100%"},attrs:{id:"affariList"}},[e("view-box",[e("x-header",{staticClass:"affariList-header"},[e("i",{staticClass:"maticon back-icon",attrs:{slot:"overwrite-left"},domProps:{innerHTML:t._s(t.icons("navigate_before"))},on:{click:t._back},slot:"overwrite-left"},[t._v("navigate_before")]),t._v(" "),e("div",{staticClass:"overwrite-title-demo",attrs:{slot:"overwrite-title"},slot:"overwrite-title"},[e("tab",{staticClass:"affariList-tabbar",attrs:{"line-width":1,"custom-bar-width":"50px"},model:{value:t.tabIndex,callback:function(a){t.tabIndex=a},expression:"tabIndex"}},t._l(t.tabs,function(a,s){return e("tab-item",{key:s,staticClass:"affariList-tab",attrs:{selected:t.selectedTab===a.type},on:{"on-item-click":function(e){return t.tabClick(a)}}},[t._v(t._s(a.name))])}),1)],1)]),t._v(" "),"todo"==t.selectedTab?e("div",{staticClass:"affariList-content"},[e("div",{staticClass:"affariList-container"},[t._l(t.todoArr,function(a,s){return e("div",{key:s,staticClass:"affariList-cell",staticStyle:{"background-color":"#fff","border-bottom":"solid 1px rgb(228,228,228)"},on:{click:function(e){return t._clickTodo(a)}}},[e("i",{staticClass:"maticon affariList-icon",staticStyle:{color:"rgb(152,198,107)","margin-top":"6px"},domProps:{innerHTML:t._s(t.icons(a.app.imgPath))}},[t._v(t._s(a.app.imgType))]),t._v(" "),e("div",{staticClass:"affariList-info"},[e("div",{staticClass:"affariList-name",staticStyle:{margin:"0px"}},[t._v(t._s(a.business.name))])]),t._v(" "),e("span",{staticClass:"number"},[t._v(t._s(a.todoCount))])])}),t._v(" "),t.loadingText?e("div",{staticClass:"noMoreData"},[t._v("---加载中---")]):t._e(),t._v(" "),t.isShowNoMoreDataTips[t.selectedTab]?e("div",{staticClass:"noMoreData"},[t._v("---没有更多数据了---")]):t._e()],2)]):t._e(),t._v(" "),"todo"!==t.selectedTab?e("div",{staticClass:"affariList-content"},[t.affairArr[t.selectedTab].length>0?e("div",{staticClass:"affariList-container"},[t._l(t.affairArr[t.selectedTab],function(a,s){return e("div",{key:s,staticClass:"affariList-cell",on:{click:function(e){return t._clickAffair(a)}}},[e("i",{staticClass:"maticon affariList-icon",domProps:{innerHTML:t._s(t.icons(a.appIcon))}},[t._v(t._s(a.appIcon))]),t._v(" "),e("div",{staticClass:"affariList-info"},[e("div",{staticClass:"affariList-name"},[t._v(t._s(a.applicant.name+"发起的"+a.appName+"申请"))]),t._v(" "),e("div",{staticClass:"affariList-status"},[t._v("进行至 "+t._s(a.currentNode.name))])]),t._v(" "),e("div",{staticClass:"affariList-time"},[t._v(t._s(a.updateTime.substring(0,10)))])])}),t._v(" "),t.loadingText?e("div",{staticClass:"noMoreData"},[t._v("---加载中---")]):t._e(),t._v(" "),t.isShowNoMoreDataTips[t.selectedTab]?e("div",{staticClass:"noMoreData"},[t._v("---没有更多数据了---")]):t._e()],2):e("div",{staticClass:"nodataText"},[t._v(t._s(t.noDataTips))])]):t._e()],1)],1)},staticRenderFns:[]};var n=e("C7Lr")(i,o,!1,function(t){e("HJh1")},null,null);a.default=n.exports}});
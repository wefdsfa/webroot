webpackJsonp([103],{"2Fp+":function(t,a){},"jdD/":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("a3Yh"),s=e.n(i),o=(e("xd7I"),e("C331")),n=(s()({props:{data:{default:""}},data:function(){return{businessId:"",number:0,tabIndex:0,tabs:[{type:"todo",name:"我的待办"}],selectedTab:"todo",affairArr:{todo:[]},pageIndex:{todo:0},url:{todo:"/api/processEngine/tasks/todo"},pageSize:20,isLoadMoreData:!1,loadingText:!1,noDataTips:"",isShowNoMoreDataTips:{todo:!1}}},created:function(){switch(this.businessId=this.data.data.business.id,this.data.data.title){case"我的待办":this.selectedTab="todo"}this._initAffairList(this.selectedTab)},mounted:function(){},methods:{_initAffairList:function(t){var a=this;this.loadingText=!0,this.isLoadMoreData=!1,Object(o.e)({url:this.url[t],type:"get",data:{page:this.pageIndex[t],size:this.pageSize,businessId:this.businessId},success:function(e){a.loadingText=!1,e.state?(e.data.content.length>0?(a.noDataTips="",a.pageIndex[t]>0&&e.data.content.length<a.pageSize&&(a.isShowNoMoreDataTips[t]=!0)):a.pageIndex[t]>0?a.isShowNoMoreDataTips[t]=!0:a.noDataTips="---暂无相关数据---",e.data.content.forEach(function(e){a.affairArr[t].push(e)}),e.data.content.length<a.pageSize?a.isLoadMoreData=!1:a.isLoadMoreData=!0):a.$vux.toast.show({text:e.message,position:"bottom",type:"text"})}})},addBread:function(){this.$emit("addBread",{route:"/form/MFormLayout",title:""})},_back:function(){this.data.isUpdateLastPage=!0,this.$emit("removeBread",this.data)},_clickAffair:function(t){this.$emit("addBread",{route:"/form/MFormLayout?appId="+t.appId+"&instanceId="+t.id+"&nodeId="+t.currentNode.id,title:""})},tabClick:function(t){this.selectedTab=t.type,0===this.affairArr[this.selectedTab].length&&this._initAffairList(this.selectedTab,!0)}}},"mounted",function(){var t=this;this.$pullUpToLoad({container:".affariList-content",up:{callback:function(){t.isLoadMoreData&&(t.pageIndex[t.selectedTab]++,t._initAffairList(t.selectedTab))}}})}),s()({props:{data:{default:""}},data:function(){return{businessId:"",number:0,tabIndex:0,tabs:[{type:"todo",name:"我的待办"}],selectedTab:"todo",affairArr:{todo:[]},pageIndex:{todo:0},url:{todo:"/api/processEngine/tasks/todo"},pageSize:20,isLoadMoreData:!1,loadingText:!1,noDataTips:"",isShowNoMoreDataTips:{todo:!1}}},created:function(){switch(this.businessId=this.data.data.business.id,this.data.data.title){case"我的待办":this.selectedTab="todo"}this._initAffairList(this.selectedTab)},mounted:function(){},methods:{_initAffairList:function(t){var a=this;this.loadingText=!0,this.isLoadMoreData=!1,Object(o.e)({url:this.url[t],type:"get",data:{page:this.pageIndex[t],size:this.pageSize,businessId:this.businessId},success:function(e){a.loadingText=!1,e.state?(e.data.content.length>0?(a.noDataTips="",a.pageIndex[t]>0&&e.data.content.length<a.pageSize&&(a.isShowNoMoreDataTips[t]=!0)):a.pageIndex[t]>0?a.isShowNoMoreDataTips[t]=!0:a.noDataTips="---暂无相关数据---",e.data.content.forEach(function(e){a.affairArr[t].push(e)}),e.data.content.length<a.pageSize?a.isLoadMoreData=!1:a.isLoadMoreData=!0):a.$vux.toast.show({text:e.message,position:"bottom",type:"text"})}})},addBread:function(){this.$emit("addBread",{route:"/form/MFormLayout",title:""})},_back:function(){this.data.isUpdateLastPage=!0,this.$emit("removeBread",this.data)},_clickAffair:function(t){this.$emit("addBread",{route:"/form/MFormLayout?appId="+t.appId+"&instanceId="+t.id+"&nodeId="+t.currentNode.id,title:""})},tabClick:function(t){this.selectedTab=t.type,0===this.affairArr[this.selectedTab].length&&this._initAffairList(this.selectedTab,!0)}}},"mounted",function(){var t=this;this.$pullUpToLoad({container:".affariList-content",up:{callback:function(){t.isLoadMoreData&&(t.pageIndex[t.selectedTab]++,t._initAffairList(t.selectedTab))}}})})),d={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{height:"100%"},attrs:{id:"affariList"}},[e("view-box",[e("x-header",{staticClass:"affariList-header"},[e("i",{staticClass:"maticon back-icon",attrs:{slot:"overwrite-left"},domProps:{innerHTML:t._s(t.icons("navigate_before"))},on:{click:t._back},slot:"overwrite-left"},[t._v("navigate_before")]),t._v(" "),e("div",{staticClass:"overwrite-title-demo",staticStyle:{padding:"18px"},attrs:{slot:"overwrite-title"},slot:"overwrite-title"},[t._v("\n        "+t._s(t.data.data.business.name)+"\n      ")])]),t._v(" "),e("div",{staticClass:"affariList-content"},[t.affairArr[t.selectedTab].length>0?e("div",{staticClass:"affariList-container"},[t._l(t.affairArr[t.selectedTab],function(a,i){return e("div",{key:i,staticClass:"affariList-cell",on:{click:function(e){return t._clickAffair(a)}}},[e("i",{staticClass:"maticon affariList-icon",domProps:{innerHTML:t._s(t.icons(a.appIcon))}},[t._v(t._s(a.appIcon))]),t._v(" "),e("div",{staticClass:"affariList-info"},[e("div",{staticClass:"affariList-name"},[t._v(t._s(a.applicant.name+"发起的"+a.appName+"申请"))]),t._v(" "),e("div",{staticClass:"affariList-status"},[t._v("进行至 "+t._s(a.currentNode.name))])]),t._v(" "),e("div",{staticClass:"affariList-time"},[t._v(t._s(a.updateTime.substring(0,10)))])])}),t._v(" "),t.loadingText?e("div",{staticClass:"noMoreData"},[t._v("---加载中---")]):t._e(),t._v(" "),t.isShowNoMoreDataTips[t.selectedTab]?e("div",{staticClass:"noMoreData"},[t._v("---没有更多数据了---")]):t._e()],2):e("div",{staticClass:"nodataText"},[t._v(t._s(t.noDataTips))])])],1)],1)},staticRenderFns:[]};var r=e("C7Lr")(n,d,!1,function(t){e("2Fp+")},null,null);a.default=r.exports}});
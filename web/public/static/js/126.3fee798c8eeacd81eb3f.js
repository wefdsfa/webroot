webpackJsonp([126],{BK0L:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=s("C331"),e={props:{data:{default:null}},data:function(){return{searchVal:"",positionListData:[],loadingText:!1,isLoadMoreData:!1,isShowNoMoreDataTips:!1,pageIndex:0,pageSize:20}},methods:{_back:function(){this.$emit("removeBread",this.data)},_myApplies:function(){this.$emit("addBread",{route:"/partTime/positionMyApplies",title:""})},_getResult:function(t){},_onSubmit:function(t){this.pageIndex=0,this.positionListData=[],this._initPositionList({page:this.pageIndex,size:this.pageSize})},_initPositionList:function(t){var i=this;this.loadingText=!0,this.isLoadMoreData=!1,t.keyword=this.searchVal,Object(a.e)({url:"/api/pwps/positions/page/canApplyPositions?schoolYear=25",type:"get",data:t,success:function(t){t.state?(i.loadingText=!1,t.data.content.length>0?i.noDataTips="":i.noDataTips="暂无相关数据",t.data.content.forEach(function(t){i.positionListData.push(t)}),t.data.content.length<i.pageSize?(i.isLoadMoreData=!1,i.isShowNoMoreDataTips=!0):(i.isLoadMoreData=!0,i.isShowNoMoreDataTips=!1)):i._toast(t.message)}})},_checkJobDetail:function(t){this.$emit("addBread",{route:"/partTime/positionDetail",title:"",data:t,lastPage:this})},_toast:function(t){this.$vux.toast.show({text:t,position:"bottom",type:"text"})}},created:function(){this._initPositionList({page:this.pageIndex,size:this.pageSize})},mounted:function(){var t=this;this.$pullUpToLoad({container:"#positionList .position-content",down:{height:200,callback:function(){t.pageIndex=0,t.positionListData=[],t._initPositionList({page:t.pageIndex,size:t.pageSize})}},up:{callback:function(){t.isLoadMoreData&&(t.pageIndex++,t._initPositionList({page:t.pageIndex,size:t.pageSize}))}}})}},o={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"position-list",attrs:{id:"positionList"}},[s("view-box",[s("x-header",{staticClass:"position-list-header",attrs:{title:"岗位管理","left-options":{showBack:!1}}},[s("i",{staticClass:"maticon back-icon",attrs:{slot:"overwrite-left"},domProps:{innerHTML:t._s(t.icons("navigate_before"))},on:{click:t._back},slot:"overwrite-left"},[t._v("navigate_before")]),t._v(" "),s("a",{staticClass:"header-my",attrs:{slot:"right"},on:{click:t._myApplies},slot:"right"},[t._v("我的")])]),t._v(" "),s("search",{ref:"search",staticClass:"search-part",attrs:{position:"absolute",top:"56px",placeholder:"请输入关键词"},on:{"on-change":t._getResult,"on-submit":t._onSubmit},model:{value:t.searchVal,callback:function(i){t.searchVal=i},expression:"searchVal"}}),t._v(" "),s("div",{staticClass:"position-content"},[s("div",{staticClass:"job-list"},[t._l(t.positionListData,function(i,a){return s("div",{key:a,staticClass:"job-item",on:{click:function(s){return t._checkJobDetail(i)}}},[s("label",{staticClass:"job-name"},[t._v(t._s(i.position.positionName))]),t._v(" "),s("p",[s("span",{staticClass:"job-unit"},[t._v(t._s(i.position.unit&&i.position.unit.name))]),t._v(" "),s("span",{staticClass:"job-type"},[t._v(t._s(i.position.positionType))])]),t._v(" "),s("span",{staticClass:"job-address"},[t._v(t._s(i.position.address))]),t._v(" "),s("div",{staticClass:"job-info"},[s("span",{staticClass:"job-salary"},[t._v(t._s(i.position.rewardStandard)+"元/小时")]),t._v(" "),s("span",{staticClass:"job-time"},[t._v(t._s(i.position.createTime?i.position.createTime.split(" ")[0]:""))])])])}),t._v(" "),t.loadingText?s("div",{staticClass:"noMoreData"},[t._v("---加载中---")]):t._e(),t._v(" "),!t.isLoadMoreData&&t.isShowNoMoreDataTips?s("div",{staticClass:"noMoreData"},[t._v("---没有更多数据了---")]):t._e()],2)])],1)],1)},staticRenderFns:[]};var n=s("VU/8")(e,o,!1,function(t){s("GM+p")},null,null);i.default=n.exports},"GM+p":function(t,i){}});
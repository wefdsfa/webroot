webpackJsonp([151],{mWdi:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=a("C331"),s={props:{data:{default:null}},data:function(){return{myPositionListData:[],loadingText:!1,isLoadMoreData:!1,isShowNoMoreDataTips:!1,pageIndex:0,pageSize:20}},methods:{_back:function(){this.$emit("removeBread",this.data)},_getResult:function(t){},_onSubmit:function(t){this.pageIndex=0,this.myPositionListData=[],this._initPositionList({page:this.pageIndex,size:this.pageSize})},_initPositionList:function(t){var i=this;this.loadingText=!0,this.isLoadMoreData=!1,Object(o.d)({url:"/api/pwps/workflow/runtime/applications/histories",type:"get",data:t,success:function(t){t.state?(i.loadingText=!1,t.data.content.length>0?i.noDataTips="":i.noDataTips="暂无相关数据",t.data.content.forEach(function(t){i.myPositionListData.push(t)}),t.data.content.length<i.pageSize?(i.isLoadMoreData=!1,i.isShowNoMoreDataTips=!0):(i.isLoadMoreData=!0,i.isShowNoMoreDataTips=!1)):i._toast(t.message)}})},_checkJobDetail:function(t){this.$emit("addBread",{route:"/partTime/positionDetail",title:"",isMyApply:!0,data:t})},_toast:function(t){this.$vux.toast.show({text:t,position:"bottom",type:"text"})}},created:function(){this._initPositionList({page:this.pageIndex,size:this.pageSize})},mounted:function(){var t=this;this.$pullUpToLoad({container:"#myPositionList .position-content",down:{height:200,callback:function(){t.pageIndex=0,t.myPositionListData=[],t._initPositionList({page:t.pageIndex,size:t.pageSize})}},up:{callback:function(){t.isLoadMoreData&&(t.pageIndex++,t._initPositionList({page:t.pageIndex,size:t.pageSize}))}}})}},e={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"position-list",attrs:{id:"myPositionList"}},[a("view-box",[a("x-header",{staticClass:"position-list-header",attrs:{title:"我的申请","left-options":{showBack:!1}}},[a("i",{staticClass:"maticon back-icon",attrs:{slot:"overwrite-left"},domProps:{innerHTML:t._s(t.icons("navigate_before"))},on:{click:t._back},slot:"overwrite-left"},[t._v("navigate_before")])]),t._v(" "),a("div",{staticClass:"position-content"},[a("div",{staticClass:"job-list"},[t._l(t.myPositionListData,function(i,o){return a("div",{key:o,staticClass:"job-item",on:{click:function(a){return t._checkJobDetail(i)}}},[a("label",{staticClass:"job-name"},[t._v(t._s(i.applicationFormVO.position.positionName))]),t._v(" "),a("p",[a("span",{staticClass:"job-unit"},[t._v(t._s(i.applicationFormVO.position.unit&&i.applicationFormVO.position.unit.name))]),t._v(" "),a("span",{staticClass:"job-type"},[t._v(t._s(i.applicationFormVO.position.positionType))])]),t._v(" "),a("span",{staticClass:"job-address"},[t._v(t._s(i.applicationFormVO.position.address))]),t._v(" "),a("div",{staticClass:"job-info"},[a("span",{staticClass:"job-salary"},[t._v(t._s(i.applicationFormVO.position.rewardStandard)+"元/小时")]),t._v(" "),a("span",{staticClass:"job-time"},[t._v(t._s(i.applicationFormVO.position.createTime?i.applicationFormVO.position.createTime.split(" ")[0]:""))])])])}),t._v(" "),t.loadingText?a("div",{staticClass:"noMoreData"},[t._v("---加载中---")]):t._e(),t._v(" "),!t.isLoadMoreData&&t.isShowNoMoreDataTips?a("div",{staticClass:"noMoreData"},[t._v("---没有更多数据了---")]):t._e()],2)])],1)],1)},staticRenderFns:[]};var n=a("Mz/3")(s,e,!1,function(t){a("p//h")},null,null);i.default=n.exports},"p//h":function(t,i){}});
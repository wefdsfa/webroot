webpackJsonp([37],{"+Z4Z":function(t,a,i){"use strict";(function(t){var e=i("C331");a.a={props:{data:{default:""}},data:function(){return{organizationList:[],searchTimeOut:null,searchName:"",pageIndex:0,pageSize:20,noDataTips:"",isShowBoxShadow:!1,isLoadMoreData:!1,loadingText:!1,isShowNoMoreDataTips:!1}},created:function(){this._initPage(!0)},methods:{_back:function(){this.$emit("removeBread",this.data)},_initPage:function(){var t=this;this.loadingText=!0,this.isLoadMoreData=!1,Object(e.d)({url:"/api/sc/organizations/list/search-join?name="+this.searchName+"&page="+this.pageIndex+"&size="+this.pageSize,type:"get",success:function(a){t.loadingText=!1,a.state?(a.data.content.length>0?t.noDataTips="":t.noDataTips="---暂无相关数据---",t.searchName&&(t.organizationList=[]),a.data.content.forEach(function(a){t.organizationList.push(a)}),t.organizationList.length>t.pageSize?t.isShowNoMoreDataTips=!0:t.isShowNoMoreDataTips=!1,a.data.content.length<t.pageSize?t.isLoadMoreData=!1:t.isLoadMoreData=!0):t._toast(a.message)}})},getResult:function(t){var a=this;this.searchTimeOut&&clearTimeout(this.searchTimeOut),this.searchTimeOut=setTimeout(function(){a._initPage()},600)},onSubmit:function(){this._initPage()},_applyOrganization:function(t){var a=this;Object(e.d)({url:"/api/sc/organizations/"+t.organization.id+"/members/apply",type:"post",success:function(i){i.state?(a._toast("申请成功，请等待管理员审核"),t.applying=!0,t.canApply=!1):a._toast(i.message)}})},_toast:function(t){this.$vux.toast.show({text:t,position:"bottom",type:"text"})}},mounted:function(){var a=this;this.$pullUpToLoad({container:".organizationSearch-content",up:{callback:function(){a.isLoadMoreData&&(a.pageIndex++,a._initPage())}}});var i=this;t(".organizationSearch-content").on("scroll",function(){var a=t(this).scrollTop();i.isShowBoxShadow=a>=50})}}}).call(a,i("W14+"))},"RQU+":function(t,a,i){"use strict";(function(t){i("C331")}).call(a,i("W14+"))},YHDn:function(t,a){},dqlE:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});i("RQU+");var e=i("+Z4Z"),s={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"organizationSearch"}},[i("view-box",[i("x-header",{staticClass:"search-page-header",style:{"box-shadow":t.isShowBoxShadow?"0 0 4px 0 rgba(0,0,0,0.12), 0 4px 4px 0 rgba(0,0,0,0.12)":"none"}},[i("i",{staticClass:"maticon back-icon",attrs:{slot:"overwrite-left"},domProps:{innerHTML:t._s(t.icons("navigate_before"))},on:{click:t._back},slot:"overwrite-left"},[t._v("navigate_before")]),t._v(" "),i("div",{staticClass:"search-page-container",attrs:{slot:"overwrite-title"},slot:"overwrite-title"},[i("search",{ref:"search",staticClass:"header-search",attrs:{position:"absolute",placeholder:"请输入","auto-scroll-to-top":"",top:"0"},on:{"on-change":t.getResult,"on-submit":t.onSubmit},model:{value:t.searchName,callback:function(a){t.searchName=a},expression:"searchName"}})],1)]),t._v(" "),i("div",{staticClass:"organizationSearch-content"},[t.organizationList.length>0?i("div",{staticClass:"search-result-list"},[t._l(t.organizationList,function(a,e){return i("div",{key:e,staticClass:"result-cell"},[i("span",{staticClass:"result-title"},[t._v(t._s(a.organization.name))]),t._v(" "),a.canApply?i("span",{staticClass:"apple-join-btn",on:{click:function(i){return t._applyOrganization(a)}}},[t._v("申请加入")]):t._e(),t._v(" "),a.applying?i("span",{staticClass:"apple-join-btn"},[t._v("等待审核")]):t._e(),t._v(" "),a.hasJoined?i("span",{staticClass:"apple-join-btn"},[t._v("已加入")]):t._e()])}),t._v(" "),t.loadingText?i("div",{staticClass:"noMoreData"},[t._v("---加载中---")]):t._e(),t._v(" "),!t.isLoadMoreData&&t.isShowNoMoreDataTips?i("div",{staticClass:"noMoreData"},[t._v("---没有更多数据了---")]):t._e()],2):i("div",{staticClass:"nodataText"},[t._v(t._s(t.noDataTips))])])],1)],1)},staticRenderFns:[]};var o=function(t){i("YHDn")},n=i("Mz/3")(e.a,s,!1,o,null,null);a.default=n.exports}});
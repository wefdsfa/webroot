webpackJsonp([74],{"5jRW":function(t,e){},A8lg:function(t,e,a){"use strict";(function(t){var i=a("a3Yh"),s=a.n(i),n=a("C331");e.a={props:{data:{default:""}},data:function(){var t;return t={pageIndex:0,pageSize:20,listData:[],searchTimeOut:null,searchName:"",noDataTips:"",isShowBoxShadow:!1,info:{},showConfirm:!1,loadingText:!1},s()(t,"noDataTips",""),s()(t,"isLoadMoreData",!1),s()(t,"isShowNoMoreDataTips",!1),s()(t,"userId",""),s()(t,"userUrl",""),s()(t,"detailType",""),s()(t,"curManualEntry",{}),t},created:function(){this.info=this.data.data,this.detailType=this.data.data.detailType,this._initPage()},methods:{_back:function(){this.$emit("removeBread",this.data)},getResult:function(t){var e=this;this.searchTimeOut&&clearTimeout(this.searchTimeOut),this.searchTimeOut=setTimeout(function(){e.listData=[],e.pageIndex=0,e._initPage()},600)},onSubmit:function(){this.listData=[],this.pageIndex=0,this._initPage()},_initPage:function(){var t=this;this.loadingText=!0,this.isLoadMoreData=!1,"AGENT"===this.detailType?this.userUrl="/api/signIns/"+this.info.signId+"/people/pages?agentId="+this.info.roleInfo.agentId+"&name="+this.searchName+"&collegeCode="+this.info.roleInfo.collegeCode+"&classId="+this.info.roleInfo.classId+"&page="+this.pageIndex+"&size="+this.pageSize:this.userUrl="/api/signIns/peoples/MANAGE?signInId="+this.info.signId+"&page="+this.pageIndex+"&size="+this.pageSize+"&name="+this.searchName,Object(n.e)({url:this.userUrl,type:"get",success:function(e){t.loadingText=!1,e.state?(e.data.content.length>0?t.noDataTips="":t.noDataTips="---暂无相关数据---",e.data.content.forEach(function(e){t.listData.push(e)}),t.listData.length>t.pageSize?t.isShowNoMoreDataTips=!0:t.isShowNoMoreDataTips=!1,e.data.content.length<t.pageSize?t.isLoadMoreData=!1:t.isLoadMoreData=!0):t._toast(e.message)}})},_manualSign:function(t){this.curManualEntry=t,this.userId=t.userId,this.showConfirm=!0},onConfirm:function(t){var e=this;if(!t)return this._toast("请输入备注");Object(n.e)({url:"/api/signIns/signInStatus",dataType:"json",type:"put",data:{signInId:this.info.signId,userId:this.userId,remark:t},success:function(t){var a="";e.showConfirm=!1,t.state?(a="操作成功",e.curManualEntry.signInStatus="MANUAL_ENTRY"):a=t.message,e._toast(a)}})},_toast:function(t){this.$vux.toast.show({text:t,position:"bottom",type:"text"})}},mounted:function(){var e=this;this.$pullUpToLoad({container:".iSignUserList-content",up:{callback:function(){e.isLoadMoreData&&(e.pageIndex++,e._initPage())}}});var a=this;t(".iSignUserList-content").on("scroll",function(){var e=t(this).scrollTop();a.isShowBoxShadow=e>=50})}}}).call(e,a("qqHy"))},Ach9:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("IGOr");var i=a("A8lg"),s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"iSignUserList"}},[a("view-box",[a("x-header",{staticClass:"search-page-header",style:{"box-shadow":t.isShowBoxShadow?"0 0 4px 0 rgba(0,0,0,0.12), 0 4px 4px 0 rgba(0,0,0,0.12)":"none"}},[a("i",{staticClass:"maticon back-icon",attrs:{slot:"overwrite-left"},domProps:{innerHTML:t._s(t.icons("navigate_before"))},on:{click:t._back},slot:"overwrite-left"},[t._v("navigate_before")]),t._v(" "),a("div",{staticClass:"search-page-container",attrs:{slot:"overwrite-title"},slot:"overwrite-title"},[a("search",{ref:"search",staticClass:"header-search iSignUserList-search",attrs:{position:"absolute",placeholder:"请输入","auto-scroll-to-top":"",top:"0"},on:{"on-change":t.getResult,"on-submit":t.onSubmit},model:{value:t.searchName,callback:function(e){t.searchName=e},expression:"searchName"}})],1)]),t._v(" "),a("div",{staticClass:"iSignUserList-content"},[t.listData.length>0?a("group",{staticClass:"iSignUserList-group"},[t._l(t.listData,function(e,i){return a("div",{key:i},["NOT_SIGN"===e.signInStatus?a("cell",{staticClass:"iSignUserList-cell",attrs:{title:e.name+" (未签到)","inline-desc":e.college||""+e.grade||""+e.educationLevel||""}},[a("x-button",{staticClass:"manual-sign-btn",attrs:{mini:""},nativeOn:{click:function(a){return t._manualSign(e)}}},[t._v("手动签到")])],1):a("cell",{staticClass:"iSignUserList-cell",attrs:{title:e.name,"inline-desc":e.college||""+e.grade||""+e.studentType||""}},[a("x-button",{staticClass:"manual-sign-btn",staticStyle:{color:"rgba(0, 0, 0, 0.77)"},attrs:{mini:"",disabled:""}},[t._v("已签到")])],1)],1)}),t._v(" "),t.loadingText?a("div",{staticClass:"noMoreData"},[t._v("---加载中---")]):t._e()],2):a("div",{staticClass:"nodataText"},[t._v(t._s(t.noDataTips))])],1),t._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],attrs:{id:"iSignUserList-transfer-dom"}},[a("confirm",{ref:"confirm",staticClass:"iSignUserList-confirm",attrs:{"show-input":"",title:"备注","close-on-confirm":!1},on:{"on-cancel":t.onCancel,"on-confirm":t.onConfirm},model:{value:t.showConfirm,callback:function(e){t.showConfirm=e},expression:"showConfirm"}})],1)],1)],1)},staticRenderFns:[]};var n=function(t){a("5jRW")},o=a("C7Lr")(i.a,s,!1,n,null,null);e.default=o.exports},IGOr:function(t,e,a){"use strict";(function(t){var e=a("a3Yh");a.n(e),a("C331")}).call(e,a("qqHy"))}});
webpackJsonp([74],{ANM1:function(t,e,i){"use strict";(function(t){var a=i("bOdI"),s=i.n(a),n=i("C331");e.a={props:{data:{default:""}},data:function(){var t;return t={pageIndex:0,pageSize:20,listData:[],searchTimeOut:null,searchName:"",noDataTips:"",isShowBoxShadow:!1,info:{},showConfirm:!1,loadingText:!1},s()(t,"noDataTips",""),s()(t,"isLoadMoreData",!1),s()(t,"isShowNoMoreDataTips",!1),s()(t,"userId",""),s()(t,"userUrl",""),s()(t,"detailType",""),s()(t,"curManualEntry",{}),t},created:function(){this.info=this.data.data,this.detailType=this.data.data.detailType,this._initPage()},methods:{_back:function(){this.$emit("removeBread",this.data)},getResult:function(t){var e=this;this.searchTimeOut&&clearTimeout(this.searchTimeOut),this.searchTimeOut=setTimeout(function(){e.listData=[],e.pageIndex=0,e._initPage()},600)},onSubmit:function(){this.listData=[],this.pageIndex=0,this._initPage()},_initPage:function(){var t=this;this.loadingText=!0,this.isLoadMoreData=!1,"AGENT"===this.detailType?this.userUrl="/api/signIns/"+this.info.signId+"/people/pages?agentId="+this.info.roleInfo.agentId+"&name="+this.searchName+"&collegeCode="+this.info.roleInfo.collegeCode+"&classId="+this.info.roleInfo.classId+"&page="+this.pageIndex+"&size="+this.pageSize:this.userUrl="/api/signIns/peoples/MANAGE?signInId="+this.info.signId+"&page="+this.pageIndex+"&size="+this.pageSize+"&name="+this.searchName,Object(n.e)({url:this.userUrl,type:"get",success:function(e){t.loadingText=!1,e.state?(e.data.content.length>0?t.noDataTips="":t.noDataTips="---暂无相关数据---",e.data.content.forEach(function(e){t.listData.push(e)}),t.listData.length>t.pageSize?t.isShowNoMoreDataTips=!0:t.isShowNoMoreDataTips=!1,e.data.content.length<t.pageSize?t.isLoadMoreData=!1:t.isLoadMoreData=!0):t._toast(e.message)}})},_manualSign:function(t){this.curManualEntry=t,this.userId=t.userId,this.showConfirm=!0},onConfirm:function(t){var e=this;if(!t)return this._toast("请输入备注");Object(n.e)({url:"/api/signIns/signInStatus",dataType:"json",type:"put",data:{signInId:this.info.signId,userId:this.userId,remark:t},success:function(t){var i="";e.showConfirm=!1,t.state?(i="操作成功",e.curManualEntry.signInStatus="MANUAL_ENTRY"):i=t.message,e._toast(i)}})},_toast:function(t){this.$vux.toast.show({text:t,position:"bottom",type:"text"})}},mounted:function(){var e=this;this.$pullUpToLoad({container:".iSignUserList-content",up:{callback:function(){e.isLoadMoreData&&(e.pageIndex++,e._initPage())}}});var i=this;t(".iSignUserList-content").on("scroll",function(){var e=t(this).scrollTop();i.isShowBoxShadow=e>=50})}}}).call(e,i("7t+N"))},Ach9:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("gezP");var a=i("ANM1"),s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"iSignUserList"}},[i("view-box",[i("x-header",{staticClass:"search-page-header",style:{"box-shadow":t.isShowBoxShadow?"0 0 4px 0 rgba(0,0,0,0.12), 0 4px 4px 0 rgba(0,0,0,0.12)":"none"}},[i("i",{staticClass:"maticon back-icon",attrs:{slot:"overwrite-left"},domProps:{innerHTML:t._s(t.icons("navigate_before"))},on:{click:t._back},slot:"overwrite-left"},[t._v("navigate_before")]),t._v(" "),i("div",{staticClass:"search-page-container",attrs:{slot:"overwrite-title"},slot:"overwrite-title"},[i("search",{ref:"search",staticClass:"header-search iSignUserList-search",attrs:{position:"absolute",placeholder:"请输入","auto-scroll-to-top":"",top:"0"},on:{"on-change":t.getResult,"on-submit":t.onSubmit},model:{value:t.searchName,callback:function(e){t.searchName=e},expression:"searchName"}})],1)]),t._v(" "),i("div",{staticClass:"iSignUserList-content"},[t.listData.length>0?i("group",{staticClass:"iSignUserList-group"},[t._l(t.listData,function(e,a){return i("div",{key:a},["NOT_SIGN"===e.signInStatus?i("cell",{staticClass:"iSignUserList-cell",attrs:{title:e.name+" (未签到)","inline-desc":e.college||""+e.grade||""+e.educationLevel||""}},[i("x-button",{staticClass:"manual-sign-btn",attrs:{mini:""},nativeOn:{click:function(i){return t._manualSign(e)}}},[t._v("手动签到")])],1):i("cell",{staticClass:"iSignUserList-cell",attrs:{title:e.name,"inline-desc":e.college||""+e.grade||""+e.studentType||""}},[i("x-button",{staticClass:"manual-sign-btn",staticStyle:{color:"rgba(0, 0, 0, 0.77)"},attrs:{mini:"",disabled:""}},[t._v("已签到")])],1)],1)}),t._v(" "),t.loadingText?i("div",{staticClass:"noMoreData"},[t._v("---加载中---")]):t._e()],2):i("div",{staticClass:"nodataText"},[t._v(t._s(t.noDataTips))])],1),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],attrs:{id:"iSignUserList-transfer-dom"}},[i("confirm",{ref:"confirm",staticClass:"iSignUserList-confirm",attrs:{"show-input":"",title:"备注","close-on-confirm":!1},on:{"on-cancel":t.onCancel,"on-confirm":t.onConfirm},model:{value:t.showConfirm,callback:function(e){t.showConfirm=e},expression:"showConfirm"}})],1)],1)],1)},staticRenderFns:[]};var n=function(t){i("z97S")},o=i("VU/8")(a.a,s,!1,n,null,null);e.default=o.exports},gezP:function(t,e,i){"use strict";(function(t){var e=i("bOdI");i.n(e),i("C331")}).call(e,i("7t+N"))},z97S:function(t,e){}});
webpackJsonp([41],{jWsx:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=n("C331"),a={props:{data:{default:""}},data:function(){return{selectedTab:"MANAGE",signInList:[],searchName:"",searchTimeOut:null,isHaveManagePermission:!1,noManagePermissionTips:""}},created:function(){this.selectedTab=this.data.data.selectedTab,this.isHaveManagePermission=this.data.data.isHaveManagePermission,this._getSignCategoriesData()},methods:{getResult:function(t){var i=this;this.searchTimeOut&&clearTimeout(this.searchTimeOut),this.searchTimeOut=setTimeout(function(){i._getSignCategoriesData()},600)},onSubmit:function(){this._getSignCategoriesData()},_getSignCategoriesData:function(){var t=this;if(this.isHaveManagePermission)this.noManagePermissionTips="暂无分类";else if("MANAGE"===this.selectedTab)return this.noManagePermissionTips="您无管理签到项目的权限",!1;this.$vux.loading.show({text:"Loading"}),this.signInList=[],Object(e.c)({url:"/api/iSignIn/projects/projectTypes/list/"+this.selectedTab+"?keyWord="+this.searchName,type:"get",success:function(i){i.state?(i.data.forEach(function(i,n){var e=0===n;t.signInList.push({id:i.id,typeName:i.typeName,isExpandType:e,pageIndex:0,loadMoreDataType:"more",loading:!1,projects:[]}),t._getProjectData(i.id,n,0)}),setTimeout(function(){t.$vux.loading.hide()},500)):(setTimeout(function(){t.$vux.loading.hide()},500),t._toast(i.message))}})},_getProjectData:function(t,i,n){var a=this;this.signInList.forEach(function(i){t===i.id&&(i.loading=!0,i.loadMoreDataType="loading")}),Object(e.c)({url:"/api/iSignIn/projects/"+this.selectedTab+"/"+t+"?page="+n+"&size=5&keyWord="+this.searchName,type:"get",success:function(i){i.state?i.data.content&&i.data.content.length>0?(i.data.content.forEach(function(i,e){var s=!1;s=!(n>0)&&0===e,a.signInList.forEach(function(n){t===n.id&&(n.projects.push({projectId:i.projectId,projectName:i.projectName,isExpandProject:s,signs:[]}),n.loadMoreDataType="more")}),0===e&&("MY"===a.selectedTab?a._getMySignData(i.projectId,t):a._getManageAndAgentSignData(i.projectId,t))}),a.signInList.forEach(function(i){t===i.id&&(i.loading=!1)})):(a.signInList.forEach(function(i){t===i.id&&(i.loading=!1)}),n>0&&a.signInList.forEach(function(i){t===i.id&&(i.loadMoreDataType="noData")})):(a.signInList.forEach(function(i){t===i.id&&(i.loading=!1)}),a._toast(i.message))}})},_getManageAndAgentSignData:function(t,i){var n=this;Object(e.c)({url:"/api/signIns/list/"+t,type:"get",success:function(e){e.state?e.data.forEach(function(e){n.signInList.forEach(function(n){i===n.id&&n.projects.forEach(function(i){t===i.projectId&&i.signs.push({signId:e.signInId,signInName:e.signInName,timeStart:e.timeStart,timeEnd:e.timeEnd})})})}):n._toast(e.message)}})},_getMySignData:function(t,i){var n=this;Object(e.c)({url:"/api/signIns/my/"+t,type:"get",success:function(e){e.state?e.data.forEach(function(e){n.signInList.forEach(function(n){i===n.id&&n.projects.forEach(function(i){t===i.projectId&&i.signs.push({signId:e.signInId,signInName:e.signInName,signInStatus:e.signInStatus})})})}):n._toast(e.message)}})},_changeTypeStatus:function(t){this.signInList.forEach(function(i){t.id===i.id?t.isExpandType=!t.isExpandType:i.isExpandType=!1})},_changeProjectStatus:function(t,i){var n=this;this.signInList.forEach(function(e){i===e.id&&e.projects.forEach(function(e){t.projectId===e.projectId?(e.isExpandProject=!e.isExpandProject,0===e.signs.length&&("MY"===n.selectedTab?n._getMySignData(t.projectId,i):n._getManageAndAgentSignData(t.projectId,i))):e.isExpandProject=!1})})},_loadMoreDataBtn:function(t){var i=this;this.signInList.forEach(function(n,e){t.id===n.id&&(n.pageIndex++,i._getProjectData(t.id,e,n.pageIndex))})},_signInDetail:function(t){this.$emit("addBread",{route:"/ISignIn/MISignInDetail",title:"",data:t})},_back:function(){this.$emit("removeBread",this.data)},_toast:function(t){this.$vux.toast.show({text:t,position:"bottom",type:"text"})}}},s={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{attrs:{id:"iSignSearch"}},[n("view-box",[n("x-header",{staticClass:"search-page-header"},[n("i",{staticClass:"maticon back-icon",attrs:{slot:"overwrite-left"},domProps:{innerHTML:t._s(t.icons("navigate_before"))},on:{click:t._back},slot:"overwrite-left"},[t._v("navigate_before")]),t._v(" "),n("div",{staticClass:"search-page-container",attrs:{slot:"overwrite-title"},slot:"overwrite-title"},[n("search",{ref:"search",staticClass:"header-search",attrs:{position:"absolute",placeholder:"请输入","auto-scroll-to-top":"",top:"0"},on:{"on-change":t.getResult,"on-submit":t.onSubmit},model:{value:t.searchName,callback:function(i){t.searchName=i},expression:"searchName"}})],1)]),t._v(" "),n("div",{staticClass:"iSignSearch-content"},[n("div",{staticClass:"manage-list"},[t.signInList.length>0?n("group",{staticClass:"iSignSearch-group"},t._l(t.signInList,function(i,e){return n("div",{key:e},[n("cell",{attrs:{title:i.typeName,"is-link":"","border-intent":!1,"arrow-direction":i.isExpandType?"up":"down"},nativeOn:{click:function(n){t._changeTypeStatus(i)}}}),t._v(" "),i.projects.length>0?n("div",{staticClass:"project-slide project-accordion",class:i.isExpandType?"animate":""},[t._l(i.projects,function(e,a){return n("div",{key:a},[n("cell",{attrs:{title:e.projectName,"is-link":"","border-intent":!1,"arrow-direction":e.isExpandProject?"up":"down"},nativeOn:{click:function(n){t._changeProjectStatus(e,i.id)}}}),t._v(" "),e.signs.length>0?n("div",{staticClass:"signIn-slide",class:e.isExpandProject?"animate":""},["MY"!==t.selectedTab?n("div",{staticClass:"111"},t._l(e.signs,function(i,e){return n("div",{key:e,staticClass:"signIn-name",on:{click:function(n){t._signInDetail(i)}}},[t._v("\n                      "+t._s(i.signInName)+"\n                    ")])})):n("div",t._l(e.signs,function(i,e){return n("div",{key:e},["TIME_OUT_NOT_SIGN"===i.signInStatus?n("div",{staticClass:"my-noSignIn-name"},[t._v("\n                        "+t._s(i.signInName)+"\n                        "),n("i",{staticClass:"maticon noSignIn-icon",domProps:{innerHTML:t._s(t.icons("clear"))}},[t._v("clear")])]):"NOT_SIGN"===i.signInStatus?n("div",{staticClass:"signIn-name"},[t._v("\n                        "+t._s(i.signInName)+"\n                      ")]):n("div",{staticClass:"my-signIn-name"},[t._v("\n                        "+t._s(i.signInName)+"\n                        "),n("i",{staticClass:"maticon signIn-icon",domProps:{innerHTML:t._s(t.icons("done"))}},[t._v("done")])])])}))]):n("div",{staticClass:"signIn-slide iSignIn-nodataTips",class:e.isExpandProject?"animate":""},[t._v("该项目下没有签到")])],1)}),t._v(" "),i.projects.length>=5?n("div",["more"===i.loadMoreDataType?n("div",{staticClass:"load-more-data-btn",on:{click:function(n){t._loadMoreDataBtn(i)}}},[t._v("点击加载更多")]):t._e(),t._v(" "),"loading"===i.loadMoreDataType?n("load-more",{attrs:{tip:"加载中"}}):t._e(),t._v(" "),"noData"===i.loadMoreDataType?n("div",{staticClass:"load-more-data-btn"},[t._v("---没有更多数据了---")]):t._e()],1):t._e()],2):n("div",[i.loading?n("load-more",{staticClass:"project-slide iSignIn-nodataTips",class:i.isExpandType?"animate":"",attrs:{tip:"加载中"}}):n("div",{staticClass:"project-slide iSignIn-nodataTips",class:i.isExpandType?"animate":""},[t._v("暂无签到项目")])],1)],1)})):n("div",{staticClass:"iSignIn-nodataTips",staticStyle:{"margin-top":"60px"}},[t._v(t._s(t.noManagePermissionTips))])],1)])],1)],1)},staticRenderFns:[]};var o=n("C7Lr")(a,s,!1,function(t){n("rYTn")},null,null);i.default=o.exports},rYTn:function(t,i){}});
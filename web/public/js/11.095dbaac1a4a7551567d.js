webpackJsonp([11],{"58G3":function(t,i){},mBLU:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("C331"),a={props:{data:{default:""}},data:function(){return{tabIndex:0,tabs:[{type:"MANAGE",name:"管理"},{type:"AGENT",name:"代理"},{type:"MY",name:"我的"}],selectedTab:"MANAGE",signInList:{MANAGE:[],AGENT:[],MY:[]},isHaveManagePermission:!1,noManagePermissionTips:"",isHaveAgentPermission:!1,curLocation:{}}},created:function(){var t=this;Object(n.d)({url:"/api/currentUser/roles/24/authorities",type:"get",success:function(i){i.state?(i.data?t.isHaveManagePermission=!0:t.isHaveManagePermission=!1,t._getSignCategoriesData()):t._toast(i.message)}}),window.navigator.userAgent.indexOf("yiban")>=0&&gethtml5location_fun()},methods:{locationSign:function(t){if("LOCATION"!==t.signInType)return this._toast("请用扫一扫签到");this.$emit("addBread",{route:"/ISignIn/MLocationSign",title:"",data:{signInfo:t}})},_getSignCategoriesData:function(){var t=this;if(this.isHaveManagePermission)this.noManagePermissionTips="暂无分类";else if("MANAGE"===this.selectedTab)return this.noManagePermissionTips="您无管理签到项目的权限",!1;this.$vux.loading.show({text:"Loading"}),Object(n.d)({url:"/api/iSignIn/projects/projectTypes/list/"+this.selectedTab,type:"get",success:function(i){i.state?(i.data.forEach(function(i,e){var n=0===e;t.signInList[t.selectedTab].push({id:i.id,typeName:i.typeName,isExpandType:n,pageIndex:0,loadMoreDataType:"more",loading:!1,projects:[]}),0===e&&t._getProjectData(i.id,e,0)}),setTimeout(function(){t.$vux.loading.hide()},500)):(setTimeout(function(){t.$vux.loading.hide()},500),t._toast(i.message))}})},_getProjectData:function(t,i,e){var a=this;this.signInList[this.selectedTab][i].loadMoreDataType="loading",this.signInList[this.selectedTab][i].loading=!0,Object(n.d)({url:"/api/iSignIn/projects/"+this.selectedTab+"/"+t+"?page="+e+"&size=5",type:"get",success:function(n){n.state?n.data.content&&n.data.content.length>0?(n.data.content.forEach(function(n,s){var o=!1;o=!(e>0)&&0===s,a.signInList[a.selectedTab].forEach(function(i){t===i.id&&i.projects.push({projectId:n.projectId,projectName:n.projectName,isExpandProject:o,signs:[]})}),a.signInList[a.selectedTab][i].loadMoreDataType="more",0===s&&("MY"===a.selectedTab?a._getMySignData(n.projectId,t):a._getManageAndAgentSignData(n.projectId,t))}),a.signInList[a.selectedTab][i].loading=!1):(a.signInList[a.selectedTab][i].loading=!1,e>0&&(a.signInList[a.selectedTab][i].loadMoreDataType="noData")):(a.signInList[a.selectedTab][i].loading=!1,a._toast(n.message))}})},_getManageAndAgentSignData:function(t,i){var e=this;Object(n.d)({url:"/api/signIns/list/"+t,type:"get",success:function(n){n.state?n.data.forEach(function(n){e.signInList[e.selectedTab].forEach(function(e){i===e.id&&e.projects.forEach(function(i){t===i.projectId&&i.signs.push({signId:n.signInId,signInName:n.signInName,timeStart:n.timeStart,timeEnd:n.timeEnd,useDynamicCode:n.useDynamicCode})})})}):e._toast(n.message)}})},_getMySignData:function(t,i){var e=this;Object(n.d)({url:"/api/signIns/my/"+t,type:"get",success:function(n){n.state?n.data.forEach(function(n){e.signInList[e.selectedTab].forEach(function(e){i===e.id&&e.projects.forEach(function(i){t===i.projectId&&i.signs.push(n)})})}):e._toast(n.message)}})},_changeTypeStatus:function(t){var i=this;this.signInList[this.selectedTab].forEach(function(e,n){t.id===e.id?(t.isExpandType=!t.isExpandType,0===e.projects.length&&i._getProjectData(e.id,n,0)):e.isExpandType=!1})},_changeProjectStatus:function(t,i){var e=this;this.signInList[this.selectedTab].forEach(function(n){i===n.id&&n.projects.forEach(function(n){t.projectId===n.projectId?(n.isExpandProject=!n.isExpandProject,0===n.signs.length&&("MY"===e.selectedTab?e._getMySignData(t.projectId,i):e._getManageAndAgentSignData(t.projectId,i))):n.isExpandProject=!1})})},_loadMoreDataBtn:function(t){var i=this;this.signInList[this.selectedTab].forEach(function(e,n){t.id===e.id&&(e.pageIndex++,i._getProjectData(t.id,n,e.pageIndex))})},_signInDetail:function(t){this.$emit("addBread",{route:"/ISignIn/MISignInDetail",title:"",data:{signInfo:t,selectedTab:this.selectedTab}})},_back:function(){this.$emit("removeBread",this.data)},tabClick:function(t){this.selectedTab=t.type,0===this.signInList[this.selectedTab].length&&this._getSignCategoriesData()},_searchSignInList:function(){this.$emit("addBread",{route:"/ISignIn/MISignInSearch",title:"",data:{selectedTab:this.selectedTab,isHaveManagePermission:this.isHaveManagePermission}})},_signInEncode:function(){if(window.navigator.userAgent.indexOf("yiban")>=0){var t=navigator.userAgent;t.indexOf("Android")>-1||t.indexOf("Linux")>-1?this.$vux.alert.show({title:"由于易班的限制，安卓手机用户扫码需要使用易班的扫一扫"}):t.indexOf("iPhone")>-1&&encode_fun()}else this.$vux.alert.show({title:"请使用易班的扫一扫"})},getLocationInfo:function(t){this.curLocation=JSON.parse(t.replace(/\'/g,'"'))},encodeResult:function(t){var i=this,e=t.split("?"),a=e[1].split("&"),s=a[1].split("&"),o=a[0].split("=")[1],c=s[0].split("=")[1];this.$vux.loading.show({text:"Loading"}),"true"===c?Object(n.d)({url:"/api/signIns/"+o,type:"get",success:function(t){if(t.state){var n=[];if(t.data.signInRange.forEach(function(t){var e=i._getDistance(t.latitude,t.longitude)<parseInt(t.distance)?"true":"false";n.push(e)}),n.indexOf("true")>=0){var a=e[0]+"?address="+i.curLocation.address+"&longitude="+parseFloat(i.curLocation.longitude)+"&latitude="+parseFloat(i.curLocation.latitude);i._signInFun(a)}else i._toast("未在签到范围内，无法签到"),i.$vux.loading.hide()}else i._toast(t.message),i.$vux.loading.hide()}}):this._signInFun(e[0])},_signInFun:function(t){var i=this;Object(n.d)({url:t,type:"get",success:function(t){i.$vux.loading.hide(),"88888"===t.code||t.state?(i.$vux.alert.show({title:t.data.message}),i.selectedTab="MY",i.signInList[i.selectedTab]=[],i._getSignCategoriesData()):i.$vux.alert.show({title:t.message})}})},_rad:function(t){return t*Math.PI/180},_getDistance:function(t,i){var e=this._rad(t),n=this._rad(parseFloat(this.curLocation.latitude)),a=e-n,s=this._rad(i)-this._rad(parseFloat(this.curLocation.longitude)),o=2*Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2)+Math.cos(e)*Math.cos(n)*Math.pow(Math.sin(s/2),2)));return o*=6378.137,o=Math.round(1e4*o)/10},_toast:function(t){this.$vux.toast.show({text:t,position:"bottom",type:"text"})}},mounted:function(){var t=this;window.signIn_vue=this,this.$pullUpToLoad({container:".iSignList-content",down:{height:200,callback:function(){t.signInList[t.selectedTab]=[],t._getSignCategoriesData()}}})}},s={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"iSignList"}},[e("view-box",[e("x-header",{staticClass:"iSignList-header"},[e("i",{staticClass:"maticon back-icon",attrs:{slot:"overwrite-left"},domProps:{innerHTML:t._s(t.icons("navigate_before"))},on:{click:t._back},slot:"overwrite-left"},[t._v("navigate_before")]),t._v(" "),e("div",{staticClass:"overwrite-title-demo",attrs:{slot:"overwrite-title"},slot:"overwrite-title"},[e("tab",{staticClass:"iSignList-tabbar",attrs:{"line-width":1,"custom-bar-width":"50px"},model:{value:t.tabIndex,callback:function(i){t.tabIndex=i},expression:"tabIndex"}},t._l(t.tabs,function(i,n){return e("tab-item",{key:n,staticClass:"iSignList-tab",attrs:{selected:t.selectedTab===i.type},on:{"on-item-click":function(e){return t.tabClick(i)}}},[t._v(t._s(i.name))])}),1)],1),t._v(" "),e("i",{staticClass:"maticon search-icon",attrs:{slot:"right"},domProps:{innerHTML:t._s(t.icons("search"))},on:{click:t._searchSignInList},slot:"right"},[t._v("search")])]),t._v(" "),e("div",{staticClass:"iSignList-content"},["MANAGE"===t.selectedTab?e("div",{staticClass:"manage-list"},[t.signInList[t.selectedTab].length>0?e("group",{staticClass:"iSignList-group"},t._l(t.signInList[t.selectedTab],function(i,n){return e("div",{key:n},[e("cell",{attrs:{title:i.typeName,"is-link":"","border-intent":!1,"arrow-direction":i.isExpandType?"up":"down"},nativeOn:{click:function(e){return t._changeTypeStatus(i)}}}),t._v(" "),i.projects.length>0?e("div",{staticClass:"project-slide project-accordion",class:i.isExpandType?"animate":""},[t._l(i.projects,function(n,a){return e("div",{key:a},[e("cell",{attrs:{title:n.projectName,"is-link":"","border-intent":!1,"arrow-direction":n.isExpandProject?"up":"down"},nativeOn:{click:function(e){return t._changeProjectStatus(n,i.id)}}}),t._v(" "),n.signs.length>0?e("div",{staticClass:"signIn-slide",class:n.isExpandProject?"animate":""},t._l(n.signs,function(i,n){return e("div",{key:n,staticClass:"signIn-name",on:{click:function(e){return t._signInDetail(i)}}},[t._v("\n                    "+t._s(i.signInName)+"\n                  ")])}),0):e("div",{staticClass:"signIn-slide iSignIn-nodataTips",class:n.isExpandProject?"animate":""},[t._v("该项目下没有签到")])],1)}),t._v(" "),i.projects.length>=5?e("div",["more"===i.loadMoreDataType?e("div",{staticClass:"load-more-data-btn",on:{click:function(e){return t._loadMoreDataBtn(i)}}},[t._v("点击加载更多")]):t._e(),t._v(" "),"loading"===i.loadMoreDataType?e("load-more",{attrs:{tip:"加载中"}}):t._e(),t._v(" "),"noData"===i.loadMoreDataType?e("div",{staticClass:"load-more-data-btn"},[t._v("---没有更多数据了---")]):t._e()],1):t._e()],2):e("div",[i.loading?e("load-more",{staticClass:"project-slide iSignIn-nodataTips",class:i.isExpandType?"animate":"",attrs:{tip:"加载中"}}):e("div",{staticClass:"project-slide iSignIn-nodataTips",class:i.isExpandType?"animate":""},[t._v("暂无签到项目")])],1)],1)}),0):e("div",{staticClass:"iSignIn-nodataTips",staticStyle:{"margin-top":"60px"}},[t._v(t._s(t.noManagePermissionTips))])],1):"AGENT"===t.selectedTab?e("div",{staticClass:"agent-list"},[t.signInList[t.selectedTab].length>0?e("group",{staticClass:"iSignList-group"},t._l(t.signInList[t.selectedTab],function(i,n){return e("div",{key:n},[e("cell",{attrs:{title:i.typeName,"is-link":"","border-intent":!1,"arrow-direction":i.isExpandType?"up":"down"},nativeOn:{click:function(e){return t._changeTypeStatus(i)}}}),t._v(" "),i.projects.length>0?e("div",{staticClass:"project-slide project-accordion",class:i.isExpandType?"animate":""},[t._l(i.projects,function(n,a){return e("div",{key:a},[e("cell",{attrs:{title:n.projectName,"is-link":"","border-intent":!1,"arrow-direction":n.isExpandProject?"up":"down"},nativeOn:{click:function(e){return t._changeProjectStatus(n,i.id)}}}),t._v(" "),n.signs.length>0?e("div",{staticClass:"signIn-slide",class:n.isExpandProject?"animate":""},t._l(n.signs,function(i,n){return e("div",{key:n,staticClass:"signIn-name",on:{click:function(e){return t._signInDetail(i)}}},[t._v("\n                    "+t._s(i.signInName)+"\n                  ")])}),0):e("div",{staticClass:"signIn-slide iSignIn-nodataTips",class:n.isExpandProject?"animate":""},[t._v("该项目下没有签到")])],1)}),t._v(" "),i.projects.length>=5?e("div",["more"===i.loadMoreDataType?e("div",{staticClass:"load-more-data-btn",on:{click:function(e){return t._loadMoreDataBtn(i)}}},[t._v("点击加载更多")]):t._e(),t._v(" "),"loading"===i.loadMoreDataType?e("load-more",{attrs:{tip:"加载中"}}):t._e(),t._v(" "),"noData"===i.loadMoreDataType?e("div",{staticClass:"load-more-data-btn"},[t._v("---没有更多数据了---")]):t._e()],1):t._e()],2):e("div",[i.loading?e("load-more",{staticClass:"project-slide iSignIn-nodataTips",class:i.isExpandType?"animate":"",attrs:{tip:"加载中"}}):e("div",{staticClass:"project-slide iSignIn-nodataTips",class:i.isExpandType?"animate":""},[t._v("暂无签到项目")])],1)],1)}),0):e("div",{staticClass:"iSignIn-nodataTips",staticStyle:{"margin-top":"60px"}},[t._v("暂无分类")])],1):e("div",{staticClass:"my-list"},[t.signInList[t.selectedTab].length>0?e("group",{staticClass:"iSignList-group"},t._l(t.signInList[t.selectedTab],function(i,n){return e("div",{key:n},[e("cell",{attrs:{title:i.typeName,"is-link":"","border-intent":!1,"arrow-direction":i.isExpandType?"up":"down"},nativeOn:{click:function(e){return t._changeTypeStatus(i)}}}),t._v(" "),i.projects.length>0?e("div",{staticClass:"project-slide project-accordion",class:i.isExpandType?"animate":""},[t._l(i.projects,function(n,a){return e("div",{key:a},[e("cell",{attrs:{title:n.projectName,"is-link":"","border-intent":!1,"arrow-direction":n.isExpandProject?"up":"down"},nativeOn:{click:function(e){return t._changeProjectStatus(n,i.id)}}}),t._v(" "),n.signs.length>0?e("div",{staticClass:"signIn-slide",class:n.isExpandProject?"animate":""},t._l(n.signs,function(i,n){return e("div",{key:n},["TIME_OUT_NOT_SIGN"===i.signInStatus?e("div",{staticClass:"my-noSignIn-name"},[t._v("\n                      "+t._s(i.signInName)+"\n                      "),e("i",{staticClass:"maticon noSignIn-icon",domProps:{innerHTML:t._s(t.icons("clear"))}},[t._v("clear")])]):"NOT_SIGN"===i.signInStatus?e("div",{staticClass:"signIn-name",on:{click:function(e){return t.locationSign(i)}}},[t._v("\n                      "+t._s(i.signInName)+"\n                    ")]):e("div",{staticClass:"my-signIn-name"},[t._v("\n                      "+t._s(i.signInName)+"\n                      "),e("i",{staticClass:"maticon signIn-icon",domProps:{innerHTML:t._s(t.icons("done"))}},[t._v("done")])])])}),0):e("div",{staticClass:"signIn-slide iSignIn-nodataTips",class:n.isExpandProject?"animate":""},[t._v("该项目下没有签到")])],1)}),t._v(" "),i.projects.length>=5?e("div",["more"===i.loadMoreDataType?e("div",{staticClass:"load-more-data-btn",on:{click:function(e){return t._loadMoreDataBtn(i)}}},[t._v("点击加载更多")]):t._e(),t._v(" "),"loading"===i.loadMoreDataType?e("load-more",{attrs:{tip:"加载中"}}):t._e(),t._v(" "),"noData"===i.loadMoreDataType?e("div",{staticClass:"load-more-data-btn"},[t._v("---没有更多数据了---")]):t._e()],1):t._e()],2):e("div",[i.loading?e("load-more",{staticClass:"project-slide iSignIn-nodataTips",class:i.isExpandType?"animate":"",attrs:{tip:"加载中"}}):e("div",{staticClass:"project-slide iSignIn-nodataTips",class:i.isExpandType?"animate":""},[t._v("暂无签到项目")])],1)],1)}),0):e("div",{staticClass:"iSignIn-nodataTips",staticStyle:{"margin-top":"60px"}},[t._v("暂无分类")])],1)]),t._v(" "),e("div",[e("div",{staticClass:"scan-qrcode-btn",on:{click:t._signInEncode}},[e("x-img",{attrs:{src:"/static/image/scan_qrcode_icon.png"}})],1)])],1)],1)},staticRenderFns:[]};var o=e("Mz/3")(a,s,!1,function(t){e("58G3")},null,null);i.default=o.exports}});
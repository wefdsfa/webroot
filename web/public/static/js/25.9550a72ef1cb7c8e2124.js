webpackJsonp([25],{Cq3c:function(t,e,i){"use strict";(function(t){i("n+6Y");var a=i("C331");e.a={props:{data:{default:""}},data:function(){return{number:0,tabIndex:0,tabs:[{type:"PARTICIPANT",name:"参与"},{type:"PUBLISH",name:"发起"},{type:"AUDITOR",name:"管理"},{type:"COLLECTION",name:"收藏"}],selectedTab:"PARTICIPANT",activityList:{PARTICIPANT:[],PUBLISH:[],AUDITOR:[],COLLECTION:[]},pageIndex:{PARTICIPANT:0,PUBLISH:0,AUDITOR:0,COLLECTION:0},pageSize:20,isLoadMoreData:!1,loadingText:!1,isShowNoMoreDataTips:{PARTICIPANT:!1,PUBLISH:!1,AUDITOR:!1,COLLECTION:!1},creatAjax:null,noDataTips:"",isShowBoxShadow:""}},created:function(){this._initMyActivityList(this.selectedTab,!0)},methods:{_initMyActivityList:function(t){var e=this;this.loadingText=!0,this.isLoadMoreData=!1,this.creatAjax=Object(a.c)({url:"/api/sc/activities/type/"+t,type:"get",data:{page:this.pageIndex[t],size:this.pageSize},success:function(i){i.state?(e.loadingText=!1,i.data.content.length>0?e.noDataTips="":e.noDataTips="---暂无相关数据---",i.data.content.forEach(function(i){e.activityList[t].push(i)}),e.activityList[t].length>e.pageSize?e.isShowNoMoreDataTips[t]=!0:e.isShowNoMoreDataTips[t]=!1,i.data.content.length<e.pageSize?e.isLoadMoreData=!1:e.isLoadMoreData=!0):e.$vux.toast.show({text:i.message,position:"bottom",type:"text"})}})},addBread:function(){this.$emit("addBread",{route:"/form/MFormLayout",title:""})},_back:function(){this.$emit("removeBread",this.data)},_clickActivity:function(t){this.$emit("addBread",{route:"/activity/MActivityDetail",title:t.name,data:t,type:this.selectedTab})},tabClick:function(t){this.selectedTab=t.type,0===this.activityList[this.selectedTab].length&&this._initMyActivityList(this.selectedTab,!0)},_getActivityTimeStatus:function(t){var e=new Date(t.applyStartTime.replace(/-/g,"/")),i=new Date(t.applyEndTime.replace(/-/g,"/")),a=new Date(t.startTime.replace(/-/g,"/")),s=new Date(t.endTime.replace(/-/g,"/")),n=this.creatAjax.getResponseHeader("Date")?new Date(this.creatAjax.getResponseHeader("Date")):new Date,c=e.getTime()-n.getTime(),o=i.getTime()-n.getTime(),r=a.getTime()-n.getTime(),l=s.getTime()-n.getTime(),d="";return d=c>0?this._getTimeString(c,"报名开始","start"):o>0?this._getTimeString(o,"报名截止","end"):r>0?this._getTimeString(r,"活动开始","start"):l>0?this._getTimeString(l,"活动结束","end"):"活动已结束",t.statusStr=d,d},_getTimeString:function(t,e,i){var a=t/1e3,s=Math.floor(a/86400),n=Math.floor((a-24*s*3600)/3600),c=Math.floor((a-24*s*3600-3600*n)/60);if(0!=s)return"距"+e+"还有 "+s+" 天 ";if(0!=n)return"距"+e+"还有 "+n+" 小时 ";if(0==n&&0!=c)if("start"===i){if("报名开始"===e)return"报名即将开始";if("活动开始"===e)return"活动即将开始"}else{if("报名截止"===e)return"报名即将结束";if("活动结束"===e)return"活动即将结束"}}},mounted:function(){var e=this;this.$pullUpToLoad({container:".myActivity-content",up:{callback:function(){e.isLoadMoreData&&(e.pageIndex[e.selectedTab]++,e._initMyActivityList(e.selectedTab))}}});var i=this;t(".myActivity-content").on("scroll",function(){var e=t(this).scrollTop();i.isShowBoxShadow=e>=50})}}}).call(e,i("L7Pj"))},UpuE:function(t,e){},lOqF:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("mOs+");var a=i("Cq3c"),s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%"},attrs:{id:"myActivity"}},[i("view-box",[i("x-header",{staticClass:"myActivity-header",style:{"box-shadow":t.isShowBoxShadow?"0 0 4px 0 rgba(0,0,0,0.12), 0 4px 4px 0 rgba(0,0,0,0.12)":"none"}},[i("i",{staticClass:"maticon back-icon",attrs:{slot:"overwrite-left"},domProps:{innerHTML:t._s(t.icons("navigate_before"))},on:{click:t._back},slot:"overwrite-left"},[t._v("navigate_before")]),t._v(" "),i("div",{staticClass:"overwrite-title-demo",attrs:{slot:"overwrite-title"},slot:"overwrite-title"},[i("div",{staticClass:"myActivity-tabbar"},t._l(t.tabs,function(e,a){return i("div",{key:a,staticClass:"tab-item",class:t.selectedTab===e.type?"active":"",on:{click:function(i){t.tabClick(e)}}},[t._v(t._s(e.name))])}))])]),t._v(" "),i("div",{staticClass:"myActivity-content"},[t.activityList[t.selectedTab].length>0?i("div",{staticClass:"myActivity-container"},[i("group",{staticClass:"myActivity-group"},t._l(t.activityList[t.selectedTab],function(e,a){return i("cell",{key:a,staticClass:"myActivity-cell",attrs:{title:e.name,"inline-desc":t._getActivityTimeStatus(e)},nativeOn:{click:function(i){t._clickActivity(e)}}})}),1),t._v(" "),t.loadingText?i("div",{staticClass:"noMoreData"},[t._v("---加载中---")]):t._e(),t._v(" "),!t.isLoadMoreData&&t.isShowNoMoreDataTips[t.selectedTab]?i("div",{staticClass:"noMoreData"},[t._v("---没有更多数据了---")]):t._e()],1):i("div",{staticClass:"nodataText"},[t._v(t._s(t.noDataTips))])])],1)],1)},staticRenderFns:[]};var n=function(t){i("UpuE")},c=i("C7Lr")(a.a,s,!1,n,null,null);e.default=c.exports},"mOs+":function(t,e,i){"use strict";(function(t){i("n+6Y"),i("C331")}).call(e,i("L7Pj"))}});
webpackJsonp([108],{GLWG:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("3cXf"),n=s.n(e),a=s("C331"),o={props:{data:{default:null}},data:function(){return{info:{},bottomInfo:{commentCount:20,likeCount:20,isCollect:!1,isLike:!1,commentsList:[{id:"1",userName:"用户名",userId:"",createTime:"2018-09-02",content:"这是一条评论的内容这是一条评论的内容这是一条评论的内容这是一条评论的内容"}]},creatAjax:null,status:{showIntro:!1,showMenus:!1,showApply:!1,showSpinner:!1,leftTime:0,timer:null,intervalTimer:null,countStr:"",countStr2:"",statusDesc:{UN_APPLY:"未报名",UN_AUDIT:"报名审核中",SUCCESS:"报名审核已通过",FAIL:"报名审核不通过",ABANDON:"报名已取消"},activityStatusDesc:{WAIT_PUBLISH:"重新发布",AUDIT_ING:"活动审核中",SUCCESS:"活动发布成功",FAIL:"活动审核不通过",RESCISSORY:"活动已放弃",REMOVED:"活动已下架",NOT_REVIEW:"活动反馈审核中",PASS:"活动反馈已通过",NOT_PASS:"活动反馈不通过",WAIT_SUBMIT:"活动反馈审核中"},menus:null},isParticipant:!1}},created:function(){this.info=JSON.parse(n()(this.data.data)),this._initActivity(),this._getComments(),this._getBottomInfo()},computed:{published:function(){return"SUCCESS"===this.info.auditStatus},computedInfo:function(){var t=this,i={imagesList:[],organizer:{},studentOriented:""};return this.data.data.images&&this.data.data.images.forEach(function(s){i.imagesList.push({src:t.imageUrlPrefix+s.image,msrc:t.imageUrlPrefix+s.image+"?thumb=true"})}),this.info.organizations&&this.info.organizations.forEach(function(s){i.organizer[s.type]||t.$set(i.organizer,s.type,[]),i.organizer[s.type].push(s.organizationName)}),this.info.studentOriented?this.info.studentOriented.forEach(function(s){i.studentOriented||t.$set(i,"studentOriented",[]),i.studentOriented.push(s.name)}):(this.$set(i,"studentOriented",[]),i.studentOriented.push("全校")),i},applyStartTime:function(){return new Date(this.info.applyStartTime?this.info.applyStartTime.replace(/-/g,"/"):null)},applyEndTime:function(){return new Date(this.info.applyEndTime?this.info.applyEndTime.replace(/-/g,"/"):null)},startTime:function(){return new Date(this.info.startTime?this.info.startTime.replace(/-/g,"/"):null)},endTime:function(){return new Date(this.info.endTime?this.info.endTime.replace(/-/g,"/"):null)}},methods:{_moreAction:function(){this.info;"WAIT_PUBLISH"===this.info.auditStatus&&this._publishActivity(this.info)},_publishActivity:function(t){var i=this;Object(a.c)({url:"/api/sc/organizations/list/join",type:"get",success:function(s){s.state?s.data&&s.data.length>0?i.$emit("addBread",{route:"/activity/MPublishActivity",title:"",data:{publishers:s.data,initData:t}}):i.$vux.alert.show({title:"您尚未加入任何组织，快去加入吧！"}):i._toast("发布权限检测失败，请稍后重试")}})},_menuClick:function(t){var i="",s={id:this.info.id,lastPage:this};"signIn"===t?(i="/activity/MSignInList",s.applyStartTime=this.info.applyStartTime,s.endTime=this.info.endTime,s.name=this.info.name):"audit"===t?i="/activity/MAuditList":"manager"===t?i="/activity/MAuthorizationManage":"feedback"===t&&(i="/activity/MActivityFeedback",s.userType=this.info.activityUserType),this.$emit("addBread",{route:i,title:"",data:s})},_back:function(){this.$emit("removeBread",this.data)},_show:function(t){this.$refs.previewer.show(t)},_signIn:function(){var t=this,i="post";if("UN_AUDIT"===this.info.applied)i="delete";else{if(!(["UN_APPLY","ABANDON"].indexOf(this.info.applied)>=0))return void this._toast(this.status.statusDesc[this.info.applied]);i="post"}"delete"===i?this.$vux.confirm.show({title:"取消报名三次后当天不可再报名，确定取消报名？",onConfirm:function(){t._signInAjax(i)}}):this._signInAjax(i)},_signInAjax:function(t){var i=this;Object(a.c)({url:"/api/sc/activities/"+this.info.id+"/applies",type:t,success:function(s){s.state?("UN_APPLY"===i.info.applied?i.info.applied="UN_AUDIT":"UN_AUDIT"===i.info.applied&&(i.info.applied="UN_APPLY"),i._toast("post"===t?"报名成功":"已取消报名")):i._toast(s.message)}})},_getActivityTimeStatus:function(t){var i=this;this.status.timer&&clearTimeout(this.status.timer),this.status.timer=setTimeout(function(){var t=i.creatAjax.getResponseHeader("Date")?new Date(i.creatAjax.getResponseHeader("Date")):new Date,s=[(i.applyStartTime.getTime()-t.getTime())/1e3,(i.applyEndTime.getTime()-t.getTime())/1e3,(i.startTime.getTime()-t.getTime())/1e3,(i.endTime.getTime()-t.getTime())/1e3];i._exchangeState(0,s)},10)},_exchangeState:function(t,i){for(var s=this;i[t]<0&&t<4;)t++;if(this.status.menus={audit:"报名审核",signIn:"签到管理",manager:"授权管理"},4===t)return this.status.countStr="活动已结束 ",this.status.menus={},void("PARTICIPANT"===this.info.activityUserType?this.info.isSigned?this.status.menus.feedback="活动评价":this.status.menus=null:"PUBLISHER"===this.info.activityUserType?this.status.menus={audit:"报名审核",signIn:"签到管理",manager:"授权管理",feedback:"活动反馈"}:"MANAGER"===this.info.activityUserType?this.status.menus={audit:"报名审核",signIn:"签到管理",feedback:"活动反馈"}:this.status.menus=null);0===t?(this.status.countStr="距报名开始还有 ","PUBLISHER"===this.info.activityUserType?this.status.menus={audit:"报名审核",signIn:"签到管理",manager:"授权管理"}:"MANAGER"===this.info.activityUserType?this.status.menus={audit:"报名审核",signIn:"签到管理"}:this.status.menus=null):1===t?(this.status.countStr="距报名截止还有 ","PUBLISHER"===this.info.activityUserType?this.status.menus={audit:"报名审核",signIn:"签到管理",manager:"授权管理"}:"MANAGER"===this.info.activityUserType?this.status.menus={audit:"报名审核",signIn:"签到管理"}:this.status.menus=null):2===t?(this.status.countStr="距活动开始还有 ","PUBLISHER"===this.info.activityUserType?this.status.menus={audit:"报名审核",signIn:"签到管理",manager:"授权管理"}:"MANAGER"===this.info.activityUserType?this.status.menus={audit:"报名审核",signIn:"签到管理"}:this.status.menus=null):3===t&&(this.status.countStr="距活动结束还有 ","PUBLISHER"===this.info.activityUserType?this.status.menus={audit:"报名审核",signIn:"签到管理",manager:"授权管理"}:"MANAGER"===this.info.activityUserType?this.status.menus={audit:"报名审核",signIn:"签到管理"}:this.status.menus=null),this.status.showApply=1===t,this._countDown(i[t],function(){s._exchangeState(++t,i)})},_countDown:function(t,i){var s=this;t<=0||(this.status.intervalTimer=setInterval(function(){var e=0,n=0,a=0,o=0;t>0&&(e=Math.floor(t/86400),n=Math.floor(t/3600)-24*e,a=Math.floor(t/60)-24*e*60-60*n,o=Math.floor(t)-24*e*60*60-60*n*60-60*a),e<=9&&(e="0"+e),n<=9&&(n="0"+n),a<=9&&(a="0"+a),o<=9&&(o="0"+o),s.status.countStr2=e+"天"+n+"小时"+a+"分钟"+o+"秒",(t-=1)<=0&&(s.status.countStr2="",clearInterval(s.status.intervalTimer),i&&i())},1e3))},_getTimeString:function(t){var i=t/1e3,s=Math.floor(i/86400),e=Math.floor((i-24*s*3600)/3600),n=Math.floor((i-24*s*3600-3600*e)/60);return 0!=s?s+" 天 "+e+" 小时 "+n+" 分":0!=e?e+" 小时 "+n+" 分":0==e&&0!=n?n+" 分":void 0},_initActivity:function(){var t=this;this.creatAjax=Object(a.c)({url:"/api/sc/activities/"+this.info.id,type:"get",success:function(i){i.state?(t.info=i.data,t._getActivityTimeStatus(t.info)):t._toast(i.message)}})},_getComments:function(){var t=this;Object(a.c)({url:"/api/sc/activitySocializations/getComments",type:"get",data:{pageIndex:0,pageSize:1,activityId:this.info.id},success:function(i){i.state?t.bottomInfo.commentsList=i.data.content:t._toast(i.message)}})},_likeTo:function(){var t=this,i="";i=this.bottomInfo.isLike?"/api/sc/activitySocializations/cancelLike/ACTIVITY_LIKE":"/api/sc/activitySocializations/createLike/ACTIVITY_LIKE",Object(a.c)({url:i,type:"post",data:{id:this.info.id},success:function(i){i.state?(t.bottomInfo.isLike=!t.bottomInfo.isLike,t.bottomInfo.likeCount+=t.bottomInfo.isLike?1:-1):t._toast(i.message)}})},_collect:function(){var t=this,i="";i=this.bottomInfo.isCollect?"/api/sc/activitySocializations/cancelCollection":"/api/sc/activitySocializations/createCollection",Object(a.c)({url:i,type:"post",data:{id:this.info.id},success:function(i){i.state?(t.bottomInfo.isCollect=!t.bottomInfo.isCollect,t.bottomInfo.collectCount+=t.bottomInfo.isCollect?1:-1):t._toast(i.message)}})},_getBottomInfo:function(){var t=this;Object(a.c)({url:"/api/sc/activitySocializations/count/"+this.info.id,type:"get",success:function(i){i.state?(t.bottomInfo.commentCount=i.data.commentCount,t.bottomInfo.likeCount=i.data.likeCount,t.bottomInfo.isLike=i.data.isLike,t.bottomInfo.isCollect=i.data.isCollect):t._toast(i.message)}})},_viewMoreComments:function(t){this.$emit("addBread",{route:"/activity/MCommentList",title:"",data:{id:this.info.id,focus:t,lastPage:this}})},_toast:function(t){this.$vux.toast.show({text:t,position:"bottom",type:"text"})}},mounted:function(){var t=this;this.$pullUpToLoad({container:".detail-content",down:{height:200,callback:function(){t._initActivity(),t._getComments(),t._getBottomInfo()}}})},destroyed:function(){clearInterval(this.status.intervalTimer)}},c={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"activityDetail"}},[s("view-box",[s("x-header",[s("i",{staticClass:"maticon back-icon",attrs:{slot:"overwrite-left"},domProps:{innerHTML:t._s(t.icons("navigate_before"))},on:{click:t._back},slot:"overwrite-left"},[t._v("navigate_before")]),t._v(" "),t.published&&t.status.menus?s("i",{staticClass:"maticon",attrs:{slot:"right"},domProps:{innerHTML:t._s(t.icons("more_vert"))},on:{click:function(i){t.status.showMenus=!0}},slot:"right"}):t._e()]),t._v(" "),t.status.menus?s("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[s("actionsheet",{attrs:{menus:t.status.menus,"show-cancel":""},on:{"on-click-menu":t._menuClick},model:{value:t.status.showMenus,callback:function(i){t.$set(t.status,"showMenus",i)},expression:"status.showMenus"}})],1):t._e(),t._v(" "),s("div",{staticClass:"detail-content"},[s("div",{staticClass:"head-image"},[s("swiper",{attrs:{"aspect-ratio":.5}},t._l(t.computedInfo.imagesList,function(i,e){return s("swiper-item",{key:e,staticClass:"swiper-item"},[s("img",{staticClass:"swiper-img",attrs:{src:i.msrc},on:{click:function(i){t._show(e)}}})])})),t._v(" "),s("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[s("previewer",{ref:"previewer",attrs:{list:t.computedInfo.imagesList}})],1)],1),t._v(" "),s("div",{staticClass:"base-info"},[t.published&&t.status.showApply?s("span",{staticClass:"sign-up",on:{click:t._signIn}},[t._v("\n          "+t._s(["UN_APPLY","FAIL"].indexOf(t.info.applied)<0?"取消报名":"报名")+"\n        ")]):t._e(),t._v(" "),s("h4",{staticClass:"info-title"},[t._v(t._s(t.info.name))]),t._v(" "),s("p",{staticClass:"info-status"},[t._v(t._s(t.published?t.status.countStr+t.status.countStr2||t.info.statusStr:t.status.activityStatusDesc[t.info.auditStatus]))]),t._v(" "),s("pre",{staticClass:"info-introduction",class:t.status.showIntro?"":"hide-intro",on:{click:function(i){t.status.showIntro=!t.status.showIntro}}},[t._v(t._s(t.info.introduction))])]),t._v(" "),s("div",{staticClass:"status-option"},[s("group",[s("cell",{attrs:{title:t.published?t.status.statusDesc[t.info.applied]:t.status.activityStatusDesc[t.info.auditStatus]},nativeOn:{click:function(i){t._moreAction()}}},[s("i",{staticClass:"maticon",attrs:{slot:"icon"},domProps:{innerHTML:t._s(t.icons("people"))},slot:"icon"})])],1)],1),t._v(" "),s("div",{staticClass:"comments"},[s("div",{staticClass:"comments-header"},[s("h5",[t._v("评论")]),t.bottomInfo.commentsCount>1?s("span",{staticClass:"view-more",on:{click:t._viewMoreComments}},[t._v("查看更多")]):t._e()]),t._v(" "),s("div",{staticClass:"comments-list"},[t._l(t.bottomInfo.commentsList,function(i,e){return s("div",{key:e,staticClass:"comment",on:{click:t._viewMoreComments}},[s("span",{staticClass:"comment-username"},[t._v(t._s(i.userName))]),t._v(" · "),s("span",{staticClass:"comment-createtime"},[t._v(t._s(i.createTime.slice(0,16)))]),t._v(" "),s("p",{staticClass:"comment-content"},[t._v("\n              "+t._s(i.content)+"\n            ")])])}),t._v(" "),0===t.bottomInfo.commentsList.length?s("div",{staticClass:"comment"},[s("p",{staticClass:"none-tip"},[t._v("暂无评论，"),s("span",{on:{click:function(i){t._viewMoreComments(!0)}}},[t._v("去评论吧")])])]):t._e()],2)]),t._v(" "),s("div",{staticClass:"other-info"},[s("group",[s("cell",{attrs:{title:"报名开始时间","align-items":"flex-start",value:t.info.applyStartTime}}),t._v(" "),s("cell",{attrs:{title:"报名结束时间","align-items":"flex-start",value:t.info.applyEndTime}}),t._v(" "),s("cell",{attrs:{title:"活动开始时间","align-items":"flex-start",value:t.info.startTime}}),t._v(" "),s("cell",{attrs:{title:"活动结束时间","align-items":"flex-start",value:t.info.endTime}}),t._v(" "),s("cell",{attrs:{title:"活动地点","align-items":"flex-start"}},[s("div",{staticClass:"cell-content"},[s("p",[t._v(t._s(t.info.place))])])]),t._v(" "),s("cell",{attrs:{title:"发布方","align-items":"flex-start"}},[s("div",{staticClass:"cell-content"},t._l(t.computedInfo.organizer.PUBLISHER,function(i,e){return s("p",{key:e},[t._v(t._s(i))])}))]),t._v(" "),s("cell",{attrs:{title:"主办方","align-items":"flex-start"}},[s("div",{staticClass:"cell-content"},[t._l(t.computedInfo.organizer.SPONSOR,function(i,e){return s("p",{key:e},[t._v(t._s(i))])}),t._v(" "),t.computedInfo.organizer.SPONSOR&&t.computedInfo.organizer.SPONSOR.length>0?t._e():s("p",[t._v("无")])],2)]),t._v(" "),s("cell",{attrs:{title:"承办方","align-items":"flex-start"}},[s("div",{staticClass:"cell-content"},[t._l(t.computedInfo.organizer.PURVEYOR,function(i,e){return s("p",{key:e},[t._v(t._s(i))])}),t._v(" "),t.computedInfo.organizer.PURVEYOR&&t.computedInfo.organizer.PURVEYOR.length>0?t._e():s("p",[t._v("无")])],2)]),t._v(" "),s("cell",{attrs:{title:"协办方","align-items":"flex-start"}},[s("div",{staticClass:"cell-content"},[t._l(t.computedInfo.organizer.ASSISTANT,function(i,e){return s("p",{key:e},[t._v(t._s(i))])}),t._v(" "),t.computedInfo.organizer.ASSISTANT&&t.computedInfo.organizer.ASSISTANT.length>0?t._e():s("p",[t._v("无")])],2)]),t._v(" "),s("cell",{attrs:{title:"联系方式","align-items":"flex-start",value:t.info.contactWay}}),t._v(" "),s("cell",{attrs:{title:"面向人群","align-items":"flex-start"}},[s("div",{staticClass:"cell-content"},[t._l(t.computedInfo.studentOriented,function(i,e){return s("p",{key:e},[t._v(t._s(i))])}),t._v(" "),t.computedInfo.studentOriented&&t.computedInfo.studentOriented.length>0?t._e():s("p",[t._v("全校")])],2)]),t._v(" "),s("cell",{attrs:{title:"人数限制","align-items":"flex-start",value:t.info.userLimit?t.info.userLimit+"人":"无限制"}}),t._v(" "),s("cell",{attrs:{title:"活动内容类型","align-items":"flex-start",value:t.info.contentTypeParentName+" "+t.info.contentTypeName}})],1)],1)]),t._v(" "),s("div",{staticClass:"options"},[s("span",{staticClass:"option",on:{click:function(i){t._viewMoreComments(!0)}}},[t._v("评论"),s("span",{staticClass:"action-count"},[t._v(t._s(t.bottomInfo.commentCount))])]),t._v("|\n      "),s("span",{staticClass:"option",on:{click:t._likeTo}},[t._v(t._s(t.bottomInfo.isLike?"已点赞":"点赞")),s("span",{staticClass:"action-count"},[t._v(t._s(t.bottomInfo.likeCount))])]),t._v("|\n      "),s("span",{staticClass:"option",on:{click:t._collect}},[t._v(t._s(t.bottomInfo.isCollect?"已收藏":"收藏"))])]),t._v(" "),s("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[s("popup",{model:{value:t.status.showSpinner,callback:function(i){t.$set(t.status,"showSpinner",i)},expression:"status.showSpinner"}},[s("spinner")],1)],1)],1)],1)},staticRenderFns:[]};var r=s("C7Lr")(o,c,!1,function(t){s("qhoi")},null,null);i.default=r.exports},qhoi:function(t,i){}});
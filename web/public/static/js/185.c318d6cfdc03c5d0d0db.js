webpackJsonp([185],{"6Yiw":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("C331"),s={props:{data:{default:""}},data:function(){return{curAnnounce:{title:"载入中...",createTime:"",browser:9999,content:"载入中..."}}},created:function(){var t=this,e=this;Object(a.e)({url:"/api/announcement/browser/"+this.data.data.id,type:"post",success:function(n){n.state?Object(a.e)({url:"/api/announcement/"+t.data.data.id,type:"get",success:function(n){n.state?t.curAnnounce=n.data:(e.isShowToast=!0,e.toastText=n.message)}}):e.$vux.toast.show({text:data.message,position:"bottom",type:"text"})}})},methods:{_back:function(){this.$emit("removeBread",this.data)}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"announcementDetail"}},[n("view-box",[n("x-header",{staticClass:"announcementDetail-header"},[n("i",{staticClass:"maticon back-icon",attrs:{slot:"overwrite-left"},domProps:{innerHTML:t._s(t.icons("navigate_before"))},on:{click:t._back},slot:"overwrite-left"},[t._v("navigate_before")]),t._v(" "),n("div",{staticClass:"overwrite-title-demo",attrs:{slot:"overwrite-title"},slot:"overwrite-title"},[n("div",{staticClass:"announcement-title"},[t._v(t._s(t.curAnnounce.title))]),t._v(" "),n("div",{staticClass:"announcement-time"},[t._v(t._s(t.curAnnounce.createTime))])])]),t._v(" "),n("div",{staticClass:"announcementDetail-content",domProps:{innerHTML:t._s(t.curAnnounce.content)}})],1)],1)},staticRenderFns:[]};var o=n("C7Lr")(s,i,!1,function(t){n("HNUF")},null,null);e.default=o.exports},HNUF:function(t,e){}});
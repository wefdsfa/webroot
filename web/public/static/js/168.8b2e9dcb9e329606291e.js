webpackJsonp([168],{gGKf:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=a("C331"),s={props:{account:{default:null},data:{default:null}},data:function(){return{recordData:[],hotAppList:[],adviceList:[],swiperList:[{url:"javascript:",img:a("GJIK"),title:""},{url:"javascript:",img:a("GJIK"),title:""}]}},methods:{toAppList:function(){this.$parent.addBread({icon:"assignment",title:"办事大厅",route:"/applicationList/MWorkHall"})},toAdvice:function(t){var i={icon:"assignment",title:"公告",data:t,route:"/main/advice"};this.$parent.addBread(i)},saoyisao:function(){this.$toast("暂未开放")},getHotAppList:function(){var t=this;Object(e.d)("/api/app/popular").then(function(i){t.hotAppList=i.data})},_checkDetail:function(t){var i=this,a={},s="/api/app/"+t.app.id+"/business/now";Object(e.d)(s).then(function(e){a="必填项表单"==t.app.name?{route:"/form/MFormLayout?appId="+t.app.id,title:""}:{route:"/form/MFlowDetail?appId="+t.app.id+"&businessId="+e.data[0].business.id,title:t.app.name,curBusiness:e.data[0]},i.$parent.addBread(a)})},getAdviceList:function(){var t=this;Object(e.d)("/table-data/announcement/list/10",{pageSize:999,pageIndex:0,pageParams:{type:"all"}},"get").then(function(i){t.adviceList=i.data})}},mounted:function(){i();var t=this;function i(){window.history.pushState({title:"title",url:"#"},"title","#")}window.addEventListener("popstate",function a(e){1==t.$parent.bread.length?(t.$vux.toast.show({text:"再按一次,退出系统",position:"bottom",type:"text"}),window.removeEventListener("popstate",a,!1),setTimeout(function(){i(),window.addEventListener("popstate",a,!1)},2e3)):(t.$parent.removeLastBread(a),window.removeEventListener("popstate",a,!1),i(),window.addEventListener("popstate",a,!1))},!1),this.getHotAppList(),this.getAdviceList()}},n={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticStyle:{"padding-bottom":"50px"}},[a("div",{staticClass:"search_box"},[a("div",{staticClass:"search_icon"}),t._v(" "),a("input",{attrs:{type:"text",readonly:"readonly",placeholder:"搜索服务或者资讯"},on:{click:function(i){return t.toAppList()}}}),t._v(" "),a("div",{staticClass:"tow_code",on:{click:function(i){return t.saoyisao()}}})]),t._v(" "),a("div",{staticClass:"swiper_wrap"},[a("swiper",{attrs:{list:t.swiperList,height:"170px"}})],1),t._v(" "),a("div",{staticClass:"box_wrap"},[a("div",{staticClass:"title_box box_flex box_between align_center"},[a("div",{staticClass:"title"},[t._v("热门应用")]),t._v(" "),a("div",{staticClass:"text box_flex align_center",on:{click:function(i){return t.toAppList()}}},[t._v("\n        查看更多\n        "),a("i",{staticClass:"maticon",attrs:{slot:"icon"},domProps:{innerHTML:t._s(t.icons("chevron_right"))},slot:"icon"})])]),t._v(" "),a("div",{staticClass:"box_main box_flex"},t._l(t.hotAppList,function(i,e){return e<=3?a("div",{key:e,staticClass:"box_child box_flex column flex_center",on:{click:function(a){return t._checkDetail(i)}}},[a("div",{staticClass:"icon_wrap box_flex flex_center align_center",style:{background:i.app.background?i.app.background:"#3F87E7"}},["2"!==i.app.imgType?a("i",{staticClass:"maticon",attrs:{title:i.app.imgPath},domProps:{innerHTML:t._s(t.icons(i.app.imgPath))}},[t._v(t._s(i.app.imgPath))]):"2"===i.app.imgType?a("i",{staticClass:"maticon app-icon-style theme-icon-application"},[a("span",{staticClass:"saasicon",class:["saasicon-"+i.app.imgPath]})]):t._e()]),t._v(" "),a("div",{staticClass:"name"},[t._v(t._s(i.app.name))])]):t._e()}),0)]),t._v(" "),a("div",{staticClass:"bar"}),t._v(" "),a("div",{staticClass:"box_wrap"},[t._m(0),t._v(" "),a("div",{staticClass:"gonggao_wrap"},t._l(t.adviceList,function(i,e){return a("div",{key:e,on:{click:function(a){return t.toAdvice(i)}}},[a("div",{staticClass:"title"},[t._v(t._s(i.title))]),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"data_time grow_1"},[t._v(t._s(i.createTime))])])])}),0)])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"title_box box_flex box_between align_center"},[i("div",{staticClass:"title gonggao"},[this._v("\n        公告\n        "),i("div",{staticClass:"bar"})])])}]};var o=a("C7Lr")(s,n,!1,function(t){a("mIRk")},"data-v-3a5cc11a",null);i.default=o.exports},mIRk:function(t,i){}});
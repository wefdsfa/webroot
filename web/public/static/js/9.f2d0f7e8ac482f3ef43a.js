webpackJsonp([9],{HWGu:function(t,e){},OKWr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("7+uW");var n=s("C331"),a={data:function(){return{rules:{studentName:[{required:!0,message:"请输入姓名",trigger:"blur"},{min:2,max:7,message:"长度在 2 到 7 个字符",trigger:"blur"}],noticeNo:[{type:"number",required:!0,message:"请填写通知书单号(纯数字)",trigger:"blur"}]},alertShow:!1,canEdit:!1,fileList:"",testSort:"",form:{name:"",candidateNumber:"",idNumber:""},result:!1,studentInfo:{},dialogImageUrl:"",dialogVisible:!1}},mounted:function(){},methods:{_submitStudentInfo:function(){var t=this;if(this.form.studentName&&this.form.noticeNo){var e={};e.studentName=this.form.studentName,e.noticeNo=this.form.noticeNo,Object(n.e)({url:"/api/archives/queryArchiveByStudent",dataType:"json",type:"GET",data:e,success:function(e){e.state?(t.result=!0,t.studentInfo=e.data):t.$toast(e.message)}})}else this.$toast("请核对填写信息！")}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"newStudentInfo"},[s("div",{staticClass:"container-fluid newStudentInfo-page"},[t._m(0),t._v(" "),s("div",{staticClass:"row search-box"},[s("el-form",{ref:"form",staticClass:"demo-form-inline",attrs:{rules:t.rules,inline:!0,model:t.form}},[s("el-form-item",{attrs:{label:"姓名:",prop:"studentName"}},[s("el-input",{staticClass:"inputCom",attrs:{placeholder:"请输入姓名"},model:{value:t.form.studentName,callback:function(e){t.$set(t.form,"studentName",e)},expression:"form.studentName"}})],1),t._v(" "),s("el-form-item",{staticClass:"marginleft",attrs:{label:"通知书单号：",prop:"noticeNo"}},[s("el-input",{staticClass:"inputCom",attrs:{placeholder:"请输入通知书单号"},model:{value:t.form.noticeNo,callback:function(e){t.$set(t.form,"noticeNo",t._n(e))},expression:"form.noticeNo"}})],1),t._v(" "),s("el-button",{staticClass:"marginleft buttonSearch",attrs:{type:"primary"},on:{click:t._submitStudentInfo}},[t._v("查询")])],1)],1),t._v(" "),t.result?s("div",[t._m(1),t._v(" "),s("div",{staticClass:"row info-box"},[s("div",{staticClass:"offer-content"},[s("div",{staticClass:"right-text"},[s("div",{staticClass:"item"},[s("p",[s("span",[t._v("姓名：")]),t._v(" "),s("span",[t._v(t._s(t.studentInfo.studentName))])]),t._v(" "),s("p",[s("span",[t._v("通知书单号：")]),t._v(" "),s("span",[t._v(t._s(t.studentInfo.noticeNo))])]),t._v(" "),s("p",[s("span",[t._v("档案接收时间：")]),t._v(" "),s("span",[t._v(t._s(t.studentInfo.archivesReceiveTime))])])]),t._v(" "),s("div",{staticClass:"item"},[s("p",[s("span",[t._v("考生号：")]),t._v(" "),s("span",[t._v(t._s(t.studentInfo.examNo))])]),t._v(" "),s("p",[s("span",[t._v("档案号：")]),t._v(" "),s("span",[t._v(t._s(t.studentInfo.archiveNo))])]),t._v(" "),s("p",[s("span",[t._v("档案接收人：")]),t._v(" "),s("span",[t._v(t._s(t.studentInfo.archivesReceiveMemberName))])])]),t._v(" "),s("div",{staticClass:"item"},[s("p",[s("span",[t._v("学号：")]),t._v(" "),s("span",[t._v(t._s(t.studentInfo.studentNo))])]),t._v(" "),s("p",[s("span",[t._v("生源地：")]),t._v(" "),s("span",[t._v(t._s(t.studentInfo.land))])]),t._v(" "),s("p",[s("span",[t._v("院系：")]),t._v(" "),s("span",[t._v(t._s(t.studentInfo.collegeName))])])])])])])]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row title"},[e("p",[e("span",[this._v("新生档案查询")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row title"},[e("p",[e("span",[this._v("档案信息")])])])}]};var o=s("VU/8")(a,i,!1,function(t){s("HWGu"),s("iSU/")},"data-v-57e820cd",null);e.default=o.exports},"iSU/":function(t,e){}});
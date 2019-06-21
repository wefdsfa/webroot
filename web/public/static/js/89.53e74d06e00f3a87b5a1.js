webpackJsonp([89],{"5zyY":function(t,e){},RxAF:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("xd7I"),n=a("C331"),i={props:{batchid:{default:null},schoolYear:{default:null},batchName:{default:null}},created:function(){var t=this,e=localStorage.getItem("lang");Object(n.g)(e)&&(this.lang=e),Object(n.e)({url:"/api/apartment/payment/batchRecord/getOption",dataType:"json",type:"get",success:function(e){if(e.state){var a=e.data.option;t.options.college=a.college||[],t.options.grade=a.grade||[],t.options.educationLevel=a.educationLevel||[],t.options.paymentStatus=a.paymentStatus||[],t._initColumns()}else t.toast(e.message)}})},data:function(){return{columns:[],url:"/table-data/apartment/payment/batchRecord/listRecord/"+this.batchid,studentList:{studentId:"",paymentStatus:"",isGreenChannel:"",remark:""},options:{college:[],grade:[],educationLevel:[],paymentStatus:[],isGreenChannel:[{name:"是",code:"1"},{name:"否",code:"0"}]},isGreenChannel:{true:"是",false:"否"},payStudentList:{},showEditModal:!1,isParentPage:!0,timeStamp:null,lang:"zh-cn"}},computed:{translate:function(){return Object(n.g)(this.lang).payStudentList}},methods:{_initColumns:function(){var t=this;this.columns=[{id:"schoolYear",title:this.translate.schoolYear,className:"text-left",width:60,hidden:!1,formatter:function(e){return e.schoolYear=t.schoolYear}},{id:"name",title:this.translate.name,className:"text-left",width:70,hidden:!1,search:{type:"input",data:{autoFocus:!0,placeholder:this.translate.studentNamePlaceholder}},formatter:function(t,e){return t.name}},{id:"studentId",title:this.translate.studentId,className:"text-left",width:120,hidden:!1,search:{type:"input",data:{autoFocus:!0,placeholder:this.translate.studentIdPlaceholder}}},{id:"account",title:this.translate.account,className:"text-left",width:120,hidden:!1,search:{type:"input",data:{autoFocus:!0,placeholder:this.translate.accountPlaceholder}}},{id:"college",title:this.translate.college,className:"text-left",width:100,hidden:!1,search:{type:"multiSelect",data:{options:this.options.college,optionsLabel:"name",optionsValue:"code"}}},{id:"educationLevel",title:this.translate.educationLevel,className:"text-left",width:80,hidden:!1,search:{type:"multiSelect",data:{options:this.options.educationLevel,optionsLabel:"name",optionsValue:"code"}}},{id:"grade",title:this.translate.grade,className:"text-left",width:60,hidden:!1,search:{type:"multiSelect",data:{options:this.options.grade,optionsLabel:"name",optionsValue:"code"}}},{id:"paymentStatus",title:this.translate.paymentStatus,className:"text-left",width:80,hidden:!1,search:{type:"select",data:{options:this.options.paymentStatus,optionsLabel:"name",optionsValue:"code"}}},{id:"isGreenChannel",title:this.translate.isGreenChannel,className:"text-left",width:80,hidden:!1,search:{type:"select",data:{options:this.options.isGreenChannel,optionsLabel:"name",optionsValue:"code"}},formatter:function(e){return t.isGreenChannel[e.isGreenChannel]}},{id:"remark",title:this.translate.remark,className:"text-left",width:120,hidden:!1},{id:"opt",title:this.translate.opt,className:"text-left",hidden:!1,formatter:function(e){return[{tag:"a",text:t.translate.edit,className:"opt-btn",callback:function(e,a){t.showEditModal=!0,t.studentList.studentId=e.studentId,t.studentList.remark=e.remark;t.studentList.paymentStatus={"已缴费":1,"未缴费":2,"免缴费":3,"生源地/校园地贷款":4}[e.paymentStatus],t.studentList.isGreenChannel=e.isGreenChannel?"1":"0"}}]}}]},isGreenChannelSelected:function(t){this.studentList.isGreenChannel=t.value},_backClassList:function(){this.$emit("backClassList","classManage")},_edit:function(){var t=this;Object(n.e)({url:"/api/apartment/payment/batchRecord/edit/"+this.batchid,type:"put",data:{studentId:this.studentList.studentId,isGreenChannel:this.studentList.isGreenChannel,remark:this.studentList.remark},success:function(e){e.state?(t.showEditBatchModal=!1,t._refreshTable(),t.$toast("编辑成功！"),t.showEditModal=!1,t.forbidReClick=!1):t.$toast("编辑失败！请选择是否绿色通道！")}})},_cancelEdit:function(){this.showEditModal=!1},_refreshTable:function(){this.timeStamp=Object(n.a)()}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isParentPage?a("div",{attrs:{id:"payStudentList-page"}},[a("div",{staticClass:"back-parent-page"},[a("button",{staticClass:"btn back-btn clearBtnBorder",attrs:{type:"button"},on:{click:t._backClassList}},[a("i",{staticClass:"maticon back-icon-btn",domProps:{innerHTML:t._s(t.icons("arrow_back"))}},[t._v("arrow_back")]),a("span",{staticClass:"nav-title"},[t._v(t._s(t.translate.parentPage))])])]),t._v(" "),a("div",{staticClass:"row text-center"},[a("v-table",{attrs:{title:this.batchName+" - "+t.translate.tableName,url:t.url+"?timeStamp="+t.timeStamp,pagesize:"10",idField:"id",columns:t.columns,order:!0,search:!0}})],1),t._v(" "),a("v-modal",{attrs:{show:t.showEditModal,effect:"fade",width:"500"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("\n        "+t._s(t.translate.edit)+"\n      ")])]),t._v(" "),a("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label"},[t._v(t._s(t.translate.isGreenChannel)+": ")]),t._v(" "),a("v-select",{staticClass:"btn-block form-select-style",attrs:{disabled:1===t.studentList.paymentStatus||3===t.studentList.paymentStatus||4===t.studentList.paymentStatus,value:t.studentList.isGreenChannel,options:t.options.isGreenChannel,"options-value":"code","options-label":"name",search:"","close-on-select":""},on:{afterSelected:t.isGreenChannelSelected}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label modal-input-label"},[t._v(t._s(t.translate.remark)+": ")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.studentList.remark,expression:"studentList.remark"}],staticClass:"modal-textarea-style",attrs:{cols:"24",rows:"5",maxlength:"600"},domProps:{value:t.studentList.remark},on:{input:function(e){e.target.composing||t.$set(t.studentList,"remark",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:t._cancelEdit}},[t._v(t._s(t.translate.cancel))]),t._v(" "),a("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:t._edit}},[t._v(t._s(t.translate.sure))])])])],1):t._e()},staticRenderFns:[]};var o=a("C7Lr")(i,l,!1,function(t){a("5zyY")},null,null).exports;s.default.component("v-payStudentList",o);s.default.component("v-payStudentList",o);var r={created:function(){var t=this,e=localStorage.getItem("lang");Object(n.g)(e)&&(this.lang=e),Object(n.e)({url:"/api/apartment/payment/batch/getOption",dataType:"json",type:"get",success:function(e){if(e.state){var a=e.data.option;t.options.addSchoolYear=a.addSchoolYear||[],t.options.searchSchoolYear=a.searchSchoolYear||[],t._initColumnsOfSearch()}else t.toast(e.message)}})},data:function(){return{columns:[],url:"/table-data/apartment/payment/listBatch",isManagePage:"pay",isShowStudentListPage:!1,payList:{id:"",batchName:"",schoolYear:""},options:{addSchoolYear:[],searchSchoolYear:[]},timeStamp:null,lang:"zh-cn"}},computed:{translate:function(){return Object(n.g)(this.lang).pay}},methods:{_initColumnsOfSearch:function(){var t=this;this.columns=[{id:"batchName",title:this.translate.batchName,className:"text-left",width:450,hidden:!1,search:{type:"input",data:{autoFocus:!0,placeholder:this.translate.batchNamePlaceholder}}},{id:"schoolYear",title:this.translate.schoolYear,className:"text-left",width:140,hidden:!1,search:{type:"multiSelect",data:{options:this.options.searchSchoolYear,optionsLabel:"name",optionsValue:"code"}}},{id:"id",title:this.translate.id,className:"text-left",width:80,hidden:!0},{id:"opt",title:this.translate.opt,className:"text-center",width:250,hidden:!1,formatter:function(e){return[{tag:"a",text:t.translate.studentList,className:"opt-btn",callback:function(e,a){t.isManagePage="memberList",t.isShowStudentListPage=!0,t.batchid=e.id,t.schoolYear=e.schoolYear,t.batchName=e.batchName,t.$emit("showPathNav",e.id)}},{tag:"a",text:t.translate.export,className:"opt-btn",callback:function(t,e){window.location.href="/downloads/apartment/payment/batchRecord/export/"+t.id}}]}}]},backClassList:function(){this.isManagePage="pay",this.isShowStudentListPage=!1,this.$emit("hidePathNav")},_refreshTable:function(){this.timeStamp=Object(n.a)()}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.importPage,expression:"!importPage"}],staticClass:"container-fluid",attrs:{id:"classManage-page"}},[a("div",{staticClass:"row text-center class-list-page"},[a("v-table",{ref:"studentTable",attrs:{title:t.translate.tableName,url:t.url+"?timeStamp="+t.timeStamp,pagesize:"10",idField:"id",columns:t.columns,order:!0,search:!0}})],1),t._v(" "),t.isShowStudentListPage?a("div",{staticClass:"batch-member-page"},[a("v-payStudentList",{attrs:{batchid:t.batchid,schoolYear:t.schoolYear,batchName:t.batchName},on:{backClassList:t.backClassList}})],1):t._e()])])},staticRenderFns:[]};var d=a("C7Lr")(r,c,!1,function(t){a("XOAW")},null,null);e.default=d.exports},XOAW:function(t,e){}});
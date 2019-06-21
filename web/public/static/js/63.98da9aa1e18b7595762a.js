webpackJsonp([63],{"746C":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("n+6Y");var l=a("C331"),s={created:function(){var e=this,t=localStorage.getItem("lang"),a=this;Object(l.e)(t)&&(this.lang=t),this.columns=[{id:"name",title:this.translate.college,className:"text-left",hidden:!1,search:{type:"input",data:{placeholder:this.translate.collegeNamePlaceholder}}},{id:"code",title:this.translate.collegeCode,className:"text-left",hidden:!1},{id:"opt",title:this.translate.opt,className:"text-center",width:"220px",hidden:!1,formatter:function(){return[{tag:"a",text:a.translate.edit,className:"opt-btn",callback:function(e,t){a.college=e,a.newCollege.collegeId=e.id,a.newCollege.code=e.code,a.newCollege.collegeName=e.name,a.newCollege.nameErrorMsg="",confirm(a.translate.editConfirmText)&&(a.showEditModal=!0)}},{tag:"a",text:a.translate.remove,className:"opt-btn",callback:function(e,t){confirm(a.translate.removeConfirmTip)&&Object(l.c)({url:"/api/colleges/"+e.id,dataType:"json",type:"delete",success:function(e){e.state?(a.url="/table-data/colleges/pages?timestamp="+(new Date).getTime(),a.toast(a.translate.removeSuccessTip)):a.toast(a.translate.removeFailedTip+":"+e.message)}})}}]}}],this.importParams.parentPageTitle=this.translate.importTableName,this.importParams.importBtnType=[{name:this.translate.overriteImport,url:"/colleges/excel",method:"put",isShowBtn:!0,success:function(t){t.state&&(e.url="/table-data/colleges/pages?timestamp="+(new Date).getTime())}}]},data:function(){return{columns:[],url:"/table-data/colleges/pages",importParams:{parentPageTitle:"",downloadTemplateUrl:"/colleges/excelTemplates",downloadErrorTemplateUrl:"/colleges/errExcel",checkTemplateUrl:"/colleges/excel",templateName:"学院导入模板.xlsx",importBtnType:null},showAddModal:!1,showEditModal:!1,showBatchSetModal:!1,options:[],college:{},newCollege:{userIdErrorMsg:"",userName:"",nameErrorMsg:""},isDisabled:{add:!0,batchSet:!0},showErrorMsg:!1,checkResult:"",isParentPage:!0,lang:"zh-cn"}},computed:{translate:function(){return Object(l.e)(this.lang).collegeManage}},methods:{importCollege:function(){this.isParentPage=!1},backParentPage:function(){this.isParentPage=!0},editPrincipal:function(){if(!this.newCollege.collegeName)return this.newCollege.nameErrorMsg=this.translate.collegeNamePlaceholder,!1;var e=this;Object(l.c)({url:"/api/colleges/"+this.newCollege.collegeId,dataType:"json",data:{code:this.newCollege.code,name:this.newCollege.collegeName},type:"put",success:function(t){t.state?(e.url="/table-data/colleges/pages?timestamp="+(new Date).getTime(),e.showEditModal=!1,e.toast(e.translate.editSuccessTip)):e.toast(e.translate.editFailedTip+":"+t.message)}})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isParentPage?a("div",{staticClass:"container-fluid",attrs:{id:"collegeImport-page"}},[a("div",{staticClass:"row text-center"},[a("v-table",{attrs:{title:e.translate.importTableName,url:e.url,pagesize:"10",idField:"id",columns:e.columns,multiple:!1,order:!0,search:!0}},[a("div",{staticClass:"btn-group pull-right",attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},[a("button",{staticClass:"btn btn-bgColor-style clearBtnBorder",attrs:{type:"button"},on:{click:function(t){e.importCollege()}}},[e._v(e._s(e.translate.import))])])])],1),e._v(" "),a("v-modal",{attrs:{show:e.showEditModal,effect:"fade",width:"350"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[e._v("\n          "+e._s(e.translate.edit)+e._s(e.translate.college)+"\n      ")])]),e._v(" "),a("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},[a("div",{staticClass:"form-group add-principal-group"},[a("label",{staticClass:"editClass-nameText"},[e._v(e._s(e.translate.college)+":")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCollege.collegeName,expression:"newCollege.collegeName"}],staticClass:"form-control search-input modal-form-style",attrs:{type:"text"},domProps:{value:e.newCollege.collegeName},on:{input:function(t){t.target.composing||e.$set(e.newCollege,"collegeName",t.target.value)}}}),e._v(" "),a("p",{staticClass:"edit-errorMsg"},[e._v(e._s(e.newCollege.nameErrorMsg))])])]),e._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(t){e.showEditModal=!1}}},[e._v(e._s(e.translate.cancel))]),e._v(" "),a("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:e.editPrincipal}},[e._v(e._s(e.translate.confirm))])])])],1):a("v-import",e._b({on:{backParentPage:e.backParentPage}},"v-import",e.importParams,!1))},staticRenderFns:[]};var r=a("C7Lr")(s,o,!1,function(e){a("xlS1")},null,null);t.default=r.exports},xlS1:function(e,t){}});
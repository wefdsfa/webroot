webpackJsonp([32],{BLwR:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("n+6Y");var a=n("C331"),s={data:function(){return{columns:[],baseUrl:"/table-data/document/students/freshman",ts:new Date,definedSearch:{studentId:"",name:"",account:""},showEditModal:!1,modalType:"",lang:"zh-cn",importStudents:!1,importParams:{parentPageTitle:"",downloadTemplateUrl:"",downloadErrorTemplateUrl:"",checkTemplateUrl:"",templateName:"",importBtnType:null},importType:"",isDisabled:"",isChange:!1,guideContent:""}},computed:{translate:function(){return Object(a.e)(this.lang).freshmanManage},url:function(){return this.baseUrl+"?ts="+this.ts}},created:function(){var t=localStorage.getItem("lang");Object(a.e)(t)&&(this.lang=t),this.columns=[{id:"name",title:this.translate.name,className:"text-left",hidden:!1,search:{type:"input"},formatter:function(t,e){return t.name?t.name:"-"}},{id:"account",title:this.translate.freshmanAccount,className:"text-left",hidden:!1,search:{type:"input"},formatter:function(t,e){return t.account?t.account:"-"}},{id:"password",title:this.translate.password,className:"text-left",hidden:!1,formatter:function(t,e){return t.password?t.password:"-"}},{id:"endTime",title:this.translate.endTime,className:"text-center",hidden:!1,formatter:function(t,e){return t.endTime?t.endTime:"-"}},{id:"studentId",title:this.translate.studentId,className:"text-left",hidden:!1,search:{type:"input",data:{autoFocus:!0}},formatter:function(t,e){return t.studentId?t.studentId:"-"}}]},methods:{_studentIdBinding:function(){var t=this;this.importStudents=!0,this.importType="studentIdBinding",this.importParams={parentPageTitle:this.translate.tableName,downloadTemplateUrl:"/document/students/updateUserNoTemplates",downloadErrorTemplateUrl:"/document/students/errExcel",checkTemplateUrl:"/document/students/updateUserNoTemplates/check",templateName:this.translate.execlName,importBtnType:[{name:this.translate.overrideImport,url:"/document/students/updateUserNoExcel",method:"PUT",isShowBtn:!0,success:function(e){e.state&&(t.ts=new Date)}}]}},_studentAccountImport:function(){var t=this;this.importStudents=!0,this.importType="studentInfo",this.importParams={parentPageTitle:this.translate.tableName,downloadTemplateUrl:"/document/students/importFreshmanTemplate",downloadErrorTemplateUrl:"/document/students/errExcel",checkTemplateUrl:"/document/students/freshman/templates/check",templateName:this.translate.freshmanInfoExeclName,importBtnType:[{name:this.translate.overrideImport,url:"/document/students/freshman/excel",method:"PUT",isShowBtn:!0,success:function(e){e.state&&(t.ts=new Date)}}]}}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.importStudents?n("v-import",t._b({on:{backParentPage:function(e){t.importStudents=!1}}},"v-import",t.importParams,!1)):n("div",{staticClass:"container-fluid",attrs:{id:"freshmanManage-page"}},[n("div",{staticClass:"row text-center"},[n("v-table",{attrs:{title:t.translate.tableName,url:t.url,pagesize:"10",idField:"id",columns:t.columns,order:!0,search:!0}},[n("div",{staticClass:"btn-group pull-right",attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},[n("button",{staticClass:"btn add clearBtnBorder btn-style ",attrs:{type:"button"},on:{click:t._studentIdBinding}},[t._v(t._s(t.translate.studentIdBinding))]),t._v(" "),n("button",{staticClass:"btn add clearBtnBorder btn-style",attrs:{type:"button"},on:{click:t._studentAccountImport}},[t._v(t._s(t.translate.add)+t._s(t.translate.freshmanAccount))])])])],1)])},staticRenderFns:[]};var o=n("C7Lr")(s,r,!1,function(t){n("yaUC")},null,null);e.default=o.exports},yaUC:function(t,e){}});
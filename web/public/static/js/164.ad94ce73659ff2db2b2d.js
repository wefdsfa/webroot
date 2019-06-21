webpackJsonp([164],{"4hyi":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("7+uW");var s=a("C331"),i={data:function(){return{columns:[],baseUrl:"/table-data/document/students",ts:new Date,modalType:"",lang:"zh-cn",importStudents:!1,importImages:!1,importParams:{parentPageTitle:"",downloadTemplateUrl:"/document/students/templates",downloadErrorTemplateUrl:"/document/students/errExcel",checkTemplateUrl:"/document/students/templates/check",templateName:"",importBtnType:null},imageParams:{imageFieldAOptions:[],imageFieldBOptions:[{id:"42",title:"以学号的方式命名"},{id:"608",title:"以新生账号的方式命名"}],fieldAId:"",fieldBId:"42"}}},computed:{translate:function(){return Object(s.g)(this.lang).infoManage},url:function(){return this.baseUrl+"?ts="+this.ts}},created:function(){var t=this,e=localStorage.getItem("lang");Object(s.g)(e)&&(this.lang=e),this.importParams.templateName=this.translate.baseModelStu,this.importParams.parentPageTitle=this.translate.tableNameStu,this.importParams.importBtnType=[{url:"/document/students/excel",method:"PUT",isShowBtn:!0,name:this.translate.incrementImport,success:function(e){e.state&&(t.ts=new Date)}}],this.columns=[{id:"studentId",title:this.translate.infoFields.studentId,className:"text-left",hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!0}}},{id:"name",title:this.translate.infoFields.name,className:"text-left",hidden:!1},{id:"college",title:this.translate.infoFields.college,className:"text-left",hidden:!1},{id:"grade",title:this.translate.infoFields.grade,className:"text-left",hidden:!1},{id:"studentType",title:this.translate.infoFields.studentType,className:"text-left",hidden:!1}],this._initFieldAOptions()},methods:{_selectField:function(t,e){"A"===e?this.imageParams.fieldAId=t.val:"B"===e&&(this.imageParams.fieldBId=t.val)},_initFieldAOptions:function(){var t=this;Object(s.e)({url:"/api/document/data/types/columns",type:"get",data:{dataType:"Image"},success:function(e){e.state?(t.imageParams.imageFieldAOptions=e.data,e.data.length&&(t.imageParams.fieldAId=t.imageParams.imageFieldAOptions[0].id)):t.$toast(e.message)}})},_upload:function(t){var e=this,a=new FormData;a.append("file",t.target.files[0]),a.append("importColumn",this.imageParams.fieldAId),a.append("filenameRule",this.imageParams.fieldBId),t.target.value="",Object(s.e)({url:"/upload/document/import/images",type:"post",processData:!1,contentType:!1,data:a,success:function(t){t.state?e.$toast("上传成功"):e.$toast(t.message)}})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.importStudents?a("v-import",t._b({on:{backParentPage:function(e){t.importStudents=!1}}},"v-import",t.importParams,!1)):t.importImages?a("div",{staticClass:"container-fluid image-import-container"},[a("span",{staticClass:"btn-block back",on:{click:function(e){t.importImages=!1}}},[a("i",{staticClass:"maticon pull-left",domProps:{innerHTML:t._s(t.icons("arrow_back"))}},[t._v("arrow_back")]),a("span",{staticClass:"nav-title"},[t._v(t._s(t.translate.back))])]),t._v(" "),a("div",{staticClass:"row param-area"},[a("div",{staticClass:"col-md-4"},[a("label",{attrs:{for:""}},[t._v("需要导入的图片信息字段")]),t._v(" "),a("v-select",{staticClass:"btn-block import-select",attrs:{options:t.imageParams.imageFieldAOptions,required:!0,autoSelect:!0,"options-value":"id","options-label":"title","close-on-select":""},on:{afterSelected:function(e){return t._selectField(e,"A")}}})],1),t._v(" "),a("div",{staticClass:"col-md-4"},[a("label",{attrs:{for:""}},[t._v("图片文件的命名规则")]),t._v(" "),a("v-select",{staticClass:"btn-block import-select",attrs:{options:t.imageParams.imageFieldBOptions,required:!0,autoSelect:!0,"options-value":"id","options-label":"title","close-on-select":""},on:{afterSelected:function(e){return t._selectField(e,"B")}}})],1)]),t._v(" "),a("div",{staticClass:"row param-opt"},[a("div",{staticClass:"col-md-4"},[t.imageParams.fieldAId&&t.imageParams.fieldBId?a("button",{staticClass:"btn btn-default"},[a("input",{attrs:{type:"file"},on:{change:t._upload}}),t._v("\n      开始")]):a("button",{staticClass:"btn btn-default",attrs:{disabled:"disabled"}},[t._v("开始")])])])]):a("div",{staticClass:"container-fluid",attrs:{id:"import-student-page"}},[a("div",{staticClass:"row text-center"},[a("v-table",{attrs:{title:t.translate.tableNameStu,url:t.url,pagesize:"10",idField:"id",columns:t.columns,multiple:!1,order:!0,search:!0}},[a("div",{staticClass:"btn-group pull-right",attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},[a("button",{staticClass:"btn add clearBtnBorder clearBtnBorder",attrs:{type:"button"},on:{click:function(e){t.importStudents=!0}}},[t._v(t._s(t.translate.modelImport))]),t._v(" "),a("button",{staticClass:"btn add clearBtnBorder clearBtnBorder",attrs:{type:"button"},on:{click:function(e){t.importImages=!0}}},[t._v(t._s(t.translate.imageImport))])])])],1)])},staticRenderFns:[]};var n=a("VU/8")(i,l,!1,function(t){a("eSk5")},null,null);e.default=n.exports},eSk5:function(t,e){}});
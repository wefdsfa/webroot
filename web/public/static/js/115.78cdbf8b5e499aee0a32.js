webpackJsonp([115],{"7fk9":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("7+uW");var n=a("C331"),s=a("y0ro"),l=(s.a,{mixins:[s.a],created:function(){var t=localStorage.getItem("lang"),e=this;Object(n.g)(t)&&(this.lang=t),this.columns=[{id:"name",title:"组织部门名称",className:"text-left",hidden:!1,search:{type:"multiSelect",data:{options:[{label:"信息中心",value:"1"},{label:"部门2",value:"2"},{label:"部门3",value:"3"},{label:"部门4",value:"4"},{label:"部门11",value:"11"},{label:"部门12",value:"12"},{label:"部门13",value:"13"},{label:"部门14",value:"15"},{label:"部门121",value:"112"},{label:"部门133",value:"133"},{label:"部门144",value:"145"},{label:"部门155",value:"154"}],optionsLabel:"label",optionsValue:"value"}}},{id:"opt",title:this.translate.opt,className:"text-center",width:"130px",hidden:!1,formatter:function(){return[{tag:"a",text:e.translate.edit,className:"opt-btn",callback:function(t,a){e.department=t,e.newDepartment.id=t.id,e.newDepartment.name=t.name,e.modalType=e.translate.edit,e.showAddModal=!0}},{tag:"a",text:e.translate.remove,className:"opt-btn",callback:function(t,a){confirm(e.translate.removeConfirmTip)&&Object(n.e)({url:"/api/department/"+t.id,dataType:"json",type:"delete",success:function(t){t.state?e.url="/table-data/department?timestamp="+(new Date).getTime():e.$toast(e.translate.removeFailedTip+":"+t.message)}})}}]}}]},data:function(){return{columns:[],url:"/table-data/department",showAddModal:!1,department:{},newDepartment:{name:""},modalType:"",isChange:!1,isDisabled:!1,lang:"zh-cn"}},computed:{translate:function(){return Object(n.g)(this.lang).departmentManage}},methods:{_verifyLength:function(){var t=0,e=0,a=0;if(!this.newDepartment.name)return!1;this.isChange=!0;for(var n=0;n<this.newDepartment.name.length;n++)this.newDepartment.name.charCodeAt(n)>127||94===this.newDepartment.name.charCodeAt(n)?t++:e+=.5,25===parseInt(t+e)&&(a=n);parseInt(t+e)>25&&(this.newDepartment.name=this.newDepartment.name.slice(0,a+1))},editDepartment:function(){var t=this;t.isDisabled=!0,Object(n.e)({url:"/api/department/"+this.newDepartment.id,dataType:"json",data:{name:this.newDepartment.name},type:"put",success:function(e){t.isDisabled=!1,e.state?(t.department.id=t.newDepartment.id,t.department.name=t.newDepartment.name,t.showAddModal=!1,t.$toast(t.translate.editSuccessTip)):t.$toast(t.translate.editFailedTip+":"+e.message)}})},addModal:function(){this.newDepartment={},this.modalType=this.translate.addNew,this.showAddModal=!0},addDepartment:function(){var t=this;this.newDepartment.name?(t.isDisabled=!0,Object(n.e)({url:"/api/department",dataType:"json",data:{name:this.newDepartment.name},type:"post",success:function(e){t.isDisabled=!1,e.state?(t.url="/table-data/department?timestamp="+(new Date).getTime(),t.showAddModal=!1,t.$toast(t.translate.addSuccessTip)):t.$toast(t.translate.addFailedTip+":"+e.message)}})):t.$toast("请输入部门名称")},changeRole:function(t){if(t)return!1;this.modalType===this.translate.addNew?this.addDepartment():this.modalType===this.translate.edit&&this.editDepartment()},cancleModal:function(){this.isChange?confirm(this.translate.cancelConfirmTip)&&(this.showAddModal=!1):this.showAddModal=!1}}}),r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"org-department-page"}},[a("div",{staticClass:"row text-center"},[a("v-table",{attrs:{title:"组织部门列表",url:t.url,pagesize:"10",idField:"id",columns:t.columns,multiple:!1,order:!0,search:!0}},[a("div",{staticClass:"btn-group pull-right",attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},[a("button",{staticClass:"btn btn-bgColor-style clearBtnBorder",attrs:{type:"button"},on:{click:function(e){return t.quickAddRecord()}}},[t._v("批量新增组织部门")]),t._v(" "),a("button",{staticClass:"btn btn-bgColor-style clearBtnBorder",attrs:{type:"button"},on:{click:function(e){return t.addModal()}}},[t._v(t._s(t.translate.addNew)+"组织部门")])])])],1),t._v(" "),a("v-modal",{staticClass:"editDepartmentModal",attrs:{show:t.showAddModal,effect:"fade",width:"274"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v(t._s(t.modalType)+"组织部门")])]),t._v(" "),a("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newDepartment.name,expression:"newDepartment.name"}],ref:"count",staticClass:"form-control search-input",attrs:{id:"departmentName",type:"text"},domProps:{value:t.newDepartment.name},on:{keyup:t._verifyLength,input:function(e){e.target.composing||t.$set(t.newDepartment,"name",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:t.cancleModal}},[t._v(t._s(t.translate.cancel))]),t._v(" "),a("button",{staticClass:"btn submit-btn clearBtnBorder",class:{disabled:t.isDisabled},attrs:{type:"button"},on:{click:function(e){return t.changeRole(t.isDisabled)}}},[t._v(t._s(t.translate.confirm))])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"importPage"===t.curRoute,expression:"curRoute === 'importPage'"}],attrs:{id:"orgDepartmentImportPage"}},[a("v-import",t._b({on:{backParentPage:function(e){t.curRoute="allStaff"}}},"v-import",t.importParams,!1))],1)],1)},staticRenderFns:[]};var i=a("VU/8")(l,r,!1,function(t){a("97go")},null,null);e.default=i.exports},"97go":function(t,e){}});
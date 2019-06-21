webpackJsonp([92],{U0M7:function(e,t){},h3WQ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("n+6Y");var l=a("C331"),n={created:function(){var e=localStorage.getItem("lang"),t=this;Object(l.e)(e)&&(this.lang=e),Object(l.c)({url:"/api/currentUser/approverDepartment",dataType:"json",type:"get",success:function(e){e.state?e.data.length>0?(t.departmentOptions=e.data,t.currentDepartmentId=t.departmentOptions[0].id,t.url=t.roleUrl+"?departmentId="+t.currentDepartmentId):t.toast(t.translate.noManageCollegeTip):t.toast(e.message)}}),this.roleColumns=[{id:"name",title:this.translate.roleName,className:"text-left",hidden:!1,width:150,search:{type:"input",autoFocus:!0}},{id:"level",title:this.translate.level,className:"text-left",hidden:!1,width:150,search:{type:"select",data:{options:this.levelOptions,optionsValue:"id",optionsLabel:"name"}},formatter:function(e){var a="";return t.levelOptions.forEach(function(t){e.level===t.id+""&&(a=t.name)}),a}},{id:"opt",title:this.translate.operation,className:"text-center",width:130,hidden:!1,formatter:function(){return[{tag:"a",text:t.translate.delete,className:"opt-btn",callback:function(e,a){confirm(t.translate.clearComfirmTip)&&Object(l.c)({url:"/api/approveRoles/"+e.id,dataType:"json",type:"delete",success:function(e){e.state?t.url=t.roleUrl+"?time="+(new Date).getTime()+"&departmentId="+t.currentDepartmentId:t.toast(e.message)}})}},{tag:"a",text:t.translate.edit,className:"opt-btn",callback:function(e,a){t.newDepartRole.id=e.id,t.newDepartRole.name=e.name,t.newDepartRole.departmentId=t.currentDepartmentId,t.newDepartRole.level=e.level,t.showUserModal=!0,t.modalType="编辑"}}]}}],this.columns=this.roleColumns},data:function(){return{departmentOptions:[],levelOptions:[{id:"COLLEGE",name:"院级"},{id:"SCHOOL",name:"校级"}],currentDepartmentId:"",columns:[],roleColumns:[],userColumns:[],url:"",roleUrl:"/table-data/approveRoles/page",showUserModal:!1,newDepartRole:{id:"",name:"",departmentId:0,level:""},modalType:"",lang:"zh-cn"}},computed:{translate:function(){return Object(l.e)(this.lang).approverRoleManage}},methods:{_verifyLength:function(){var e=0,t=0,a=0;if(!this.newDepartRole.name)return!1;for(var l=0;l<this.newDepartRole.name.length;l++)this.newDepartRole.name.charCodeAt(l)>127||94===this.newDepartRole.name.charCodeAt(l)?e++:t+=.5,25===parseInt(e+t)&&(a=l);parseInt(e+t)>25&&(this.newDepartRole.name=this.newDepartRole.name.slice(0,a+1))},changeDepartment:function(e){this.currentDepartmentId=e.val,this.url=this.roleUrl+"?time="+(new Date).getTime()+"&departmentId="+this.currentDepartmentId},cancelAddRole:function(){this.newDepartRole={id:"",name:"",departmentId:0,level:"SCHOOL"},this.showUserModal=!1},addRoleModal:function(){this.newDepartRole={id:"",name:"",departmentId:0,level:""},this.showUserModal=!0,this.modalType="新增"},changeLevel:function(e){this.newDepartRole.level=e.val},addRole:function(){var e=this;if(!this.newDepartRole.name)return e.toast(this.translate.nameIsNull);if(!this.newDepartRole.level)return e.toast(this.translate.levelIsNull);if(e.newDepartRole.departmentId=e.currentDepartmentId,this.newDepartRole.id){if(!confirm(this.translate.editRoleConfirmTip))return!1;Object(l.c)({url:"/api/approveRoles/"+e.newDepartRole.id,dataType:"json",data:e.newDepartRole,type:"put",success:function(t){t.state?(e.showUserModal=!1,e.url=e.roleUrl+"?time="+(new Date).getTime()+"&departmentId="+e.currentDepartmentId):e.toast(t.message)}})}else{if(!confirm(this.translate.addRoleConfirmTip))return!1;Object(l.c)({url:"/api/approveRoles",dataType:"json",data:e.newDepartRole,type:"post",success:function(t){t.state?(e.showUserModal=!1,e.url=e.roleUrl+"?time="+(new Date).getTime()+"&departmentId="+e.currentDepartmentId):e.toast(t.message)}})}}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid",attrs:{id:"collegeRole-page"}},[a("div",{staticClass:"row text-center"},[a("v-table",{attrs:{url:e.url,pagesize:"10",idField:"id",order:!0,columns:e.columns,multiple:!1,search:!0}},[a("div",{attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},[a("div",{staticClass:"btn-group pull-left"},[a("v-select",{staticClass:"dep-select",attrs:{value:e.currentDepartmentId,options:e.departmentOptions,optionsLabel:"name",optionsValue:"id",search:!1},on:{afterSelected:e.changeDepartment}})],1),e._v(" "),a("div",{staticClass:"btn-group pull-right"},[a("button",{staticClass:"btn addRole-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(t){e.addRoleModal()}}},[e._v(e._s(e.translate.addButton))])])])])],1),e._v(" "),a("v-modal",{attrs:{show:e.showUserModal,effect:"fade",width:"400"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[e._v("\n        "+e._s(e.modalType)+e._s(e.translate.role)+"\n      ")])]),e._v(" "),a("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newDepartRole.id,expression:"newDepartRole.id"}],attrs:{type:"hidden",id:"role-id"},domProps:{value:e.newDepartRole.id},on:{input:function(t){t.target.composing||e.$set(e.newDepartRole,"id",t.target.value)}}}),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label"},[e._v(e._s(e.translate.level))]),e._v(" "),a("v-select",{staticClass:"btn-block search-select modal-form-style levels-select",attrs:{disabled:"编辑"===e.modalType,value:e.newDepartRole.level?e.newDepartRole.level:"1",options:e.levelOptions,"options-value":"id","options-label":"name",search:"","close-on-select":""},on:{afterSelected:e.changeLevel}})],1),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label"},[e._v(e._s(e.translate.roleName))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newDepartRole.name,expression:"newDepartRole.name"}],staticClass:"form-control search-input modal-form-style",attrs:{type:"text"},domProps:{value:e.newDepartRole.name},on:{keyup:e._verifyLength,input:function(t){t.target.composing||e.$set(e.newDepartRole,"name",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:e.cancelAddRole}},[e._v(e._s(e.translate.cancel))]),e._v(" "),a("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:e.addRole}},[e._v(e._s(e.translate.submit))])])])],1)},staticRenderFns:[]};var s=a("C7Lr")(n,r,!1,function(e){a("U0M7")},null,null);t.default=s.exports}});
webpackJsonp([161],{"C2J+":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("7+uW");var n=a("C331"),s={created:function(){var e=localStorage.getItem("lang");Object(n.g)(e)&&(this.lang=e),this.columns=[{id:"modifiedUserNo",title:"学号",width:120,className:"text-left",hidden:!1,search:{type:"number"},formatter:function(e){return e.modifiedUser.userNo}},{id:"modifiedUserName",title:"姓名",width:80,className:"text-left",hidden:!1,search:{type:"value"},formatter:function(e){return e.modifiedUser.name}},{id:"columnName",title:"修改字段",width:120,className:"text-left",hidden:!1,search:{type:"value"}},{id:"source",title:"修改来源",width:130,className:"text-left",hidden:!1,search:{type:"value"},formatter:function(e){switch(e.source){case"SCHOOL":return"全校学生信息";case"COLLEGE":return"本院学生信息";case"INSTRUCTOR_MANAGE":return"分管学生信息";case"INSTRUCTOR":return"全校辅导员信息";case"MY_STUDENT":return"右上角学生信息查看";case"MY_INSTRUCTOR":return"右上角辅导员信息查看"}}},{id:"reviseUserName",title:"修改人姓名",width:80,className:"text-left",hidden:!1,search:{type:"value"},formatter:function(e){return e.reviseUser.name}},{id:"reviseUserNo",title:"修改人工号",width:120,className:"text-left",hidden:!1,search:{type:"value"},formatter:function(e){return e.reviseUser.userNo}},{id:"createTime",title:"修改时间",width:110,className:"text-left",hidden:!1},{id:"valueBefore",title:"修改前数据",width:120,className:"text-left",hidden:!1,search:{type:"value"}},{id:"valueAfter",title:"修改后数据",width:120,className:"text-left",hidden:!1,search:{type:"value"}}]},data:function(){return{columns:[],url:"/table-data/document/logs/page",showAddModal:!1,department:{},newDepartment:{name:""},modalType:"",isChange:!1,isDisabled:!1,lang:"zh-cn"}},computed:{translate:function(){return Object(n.g)(this.lang).departmentManage}},methods:{_verifyLength:function(){var e=0,t=0,a=0;if(!this.newDepartment.name)return!1;this.isChange=!0;for(var n=0;n<this.newDepartment.name.length;n++)this.newDepartment.name.charCodeAt(n)>127||94===this.newDepartment.name.charCodeAt(n)?e++:t+=.5,25===parseInt(e+t)&&(a=n);parseInt(e+t)>25&&(this.newDepartment.name=this.newDepartment.name.slice(0,a+1))},editDepartment:function(){var e=this;e.isDisabled=!0,Object(n.e)({url:"/api/department/"+this.newDepartment.id,dataType:"json",data:{name:this.newDepartment.name},type:"put",success:function(t){e.isDisabled=!1,t.state?(e.department.id=e.newDepartment.id,e.department.name=e.newDepartment.name,e.showAddModal=!1,e.$toast(e.translate.editSuccessTip)):e.$toast(e.translate.editFailedTip+":"+t.message)}})},addModal:function(){this.newDepartment={},this.modalType=this.translate.addNew,this.showAddModal=!0},addDepartment:function(){var e=this;this.newDepartment.name?(e.isDisabled=!0,Object(n.e)({url:"/api/department",dataType:"json",data:{name:this.newDepartment.name},type:"post",success:function(t){e.isDisabled=!1,t.state?(e.url="/table-data/department?timestamp="+(new Date).getTime(),e.showAddModal=!1,e.$toast(e.translate.addSuccessTip)):e.$toast(e.translate.addFailedTip+":"+t.message)}})):e.$toast("请输入部门名称")},changeRole:function(e){if(e)return!1;this.modalType===this.translate.addNew?this.addDepartment():this.modalType===this.translate.edit&&this.editDepartment()},cancleModal:function(){this.isChange?confirm(this.translate.cancelConfirmTip)&&(this.showAddModal=!1):this.showAddModal=!1}}},i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container-fluid",attrs:{id:"org-department-page"}},[t("div",{staticClass:"row text-center"},[t("v-table",{attrs:{title:"",url:this.url,pagesize:"10",idField:"id",columns:this.columns,multiple:!1,order:!0,search:!0}})],1)])},staticRenderFns:[]};var r=a("VU/8")(s,i,!1,function(e){a("up34")},null,null);t.default=r.exports},up34:function(e,t){}});
webpackJsonp([62],{"+ll1":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("C331"),n=i("4DA3"),a=(n.a,{components:{linkage:n.a},data:function(){return{selectUnit:{dialog:!1,loading:!1,data:[],value:""},recruitmentModifyLoading:!1,slodOutLoading:!1,modifyRecordDialog:!1,modifyRecordTableData:"",tableData_url:"/table-data/employment/manage/recruitment/getRecruitmentBySearch",unitInfo:{},newAddPosition:!1,newAddRecruit:!1,curRecruition:null,curPositionInfo:{},curEditPositionId:"",positionIdArr:[],positionInfoList:[],dict_type:[],dict_duty:[],dict_moneyRange:[],dict_educational:[],recruitmentInfoData:{},positionInfoForm:{positionName:"",positionType:"",positionProperty:"",major:"",diploma:"",salary:"",recruitNumber:"",workplace:"",positionRemarks:"",positionRequire:"",address:""},addPositionRules:{positionName:[{required:!0,message:"请输入职位名称",trigger:"blur"}],positionType:[{required:!0,message:"请输入职位类别",trigger:"blur"}],positionProperty:[{required:!0,message:"请选择职位性质",trigger:"change"}],major:[{required:!0,message:"请选择专业要求",trigger:"change"}],diploma:[{required:!0,message:"请选择学历要求",trigger:"change"}],salary:[{required:!0,message:"请选择薪资范围",trigger:"change"}],recruitNumber:[{required:!0,message:"招聘人数不能为空"}],positionRemarks:[{required:!0,message:"请填写工作职责",trigger:"blur"}],positionRequire:[{required:!0,message:"请填写工作要求",trigger:"blur"}],address:[{required:!0,message:"请选择工作地点",trigger:"change"}]},tabsItem:["单位信息","职位信息","招聘简章"],currentTab:0,showAddRecruidInfo:!1,showAddPositionModal:!1,showRecruidInfoList:!0}},created:function(){var t=this;this.getAllCompany(),this.getDict("行业","dict_type"),this.getDict("专业","dict_duty"),this.getDict("薪资范围","dict_moneyRange"),this.getDict("学历","dict_educational"),this.columns=[{id:"title",title:"招聘信息标题",className:"text-left",width:130,hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!1}}},{id:"companyName",title:"单位",className:"text-left",width:130,hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!1}}},{id:"positionNames",title:"岗位",width:150,className:"text-left",hidden:!1},{id:"opts",title:"操作",width:80,hidden:!1,options:[{tag:"a",text:"查看",callback:function(e,i){t.curRecruition=e,t.ecruitmenInfoLook(e.id)}}]}]},methods:{onSelectUnitSure:function(){var t=this;""!=this.selectUnit.value?(this.selectUnit.loading=!0,Object(o.d)({url:"api/employment/manage/company/getCompanyDetail?id="+this.selectUnit.value,type:"GET",success:function(e){if(e.state){t.selectUnit.dialog=!1,t.positionInfoList=[],t.showRecruidInfoList=!1,t.newAddRecruit=!0,t.currentTab=0,t.showAddRecruidInfo=!0;var i=e.data.companyMessage;t.recruitmentInfoData={id:"",companyId:i.id,title:"",companyName:i.companyName,addressDetail:i.addressDetail,property:i.propertyName,scale:i.scaleName,contactPeople:"",contactPhone:"",email:"",summary:"",recruitmentBrief:"",time:""}}else t.$message.error(e.message)}}).always(function(){t.selectUnit.loading=!1})):this.$message.error("请先选择单位")},onSoldOUt:function(){var t=this;this.slodOutLoading=!0,Object(o.d)({url:"api/employment/manage/recruitment/soldOutRecruitment?id="+this.curRecruition.id,type:"PUT",success:function(e){e.state?(t.$message.success("下架成功"),t.showRecruidInfoList=!0,t.showAddRecruidInfo=!1):t.$message.error(e.message)}}).always(function(){t.slodOutLoading=!1})},onLookModifyRecord:function(){var t=this;this.modifyRecordDialog=!0,Object(o.d)({url:"api/employment/manage/recruitment/getRecruitmentRecprd?relationId="+this.curRecruition.id,type:"get",success:function(e){e.state?t.modifyRecordTableData=e.data:t.$message.error(e.message)}})},getAllCompany:function(){var t=this;Object(o.d)({url:"api/employment/manage/recruitment/getAllCompany",type:"get",success:function(e){e.state&&(t.selectUnit.data=e.data)}})},dateChange:function(t){},getLocation:function(t){var e=[];t.area&&(this.positionInfoForm.address=t.area.id,e.push(t.area.value)),t.city&&e.push(t.city.value),t.city&&e.push(t.province.value)},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;var i=void 0,n=e.positionInfoForm,a=e.positionInfoForm.positionType;if(e.dict_type.map(function(t){t.value==a&&(n.positionTypeName=t.label)}),e.newAddRecruit)return e.showAddPositionModal=!1,e.newAddPosition?e.positionInfoList.push(n):(e.positionInfoList.splice(e.curEditPositionId,1),e.positionInfoList.push(n)),e.$message.success("保存成功");n.recruitmentId=e.curRecruition.id,i=e.newAddPosition?"/api/employment/recruitment/addPosition":"/api/employment/recruitment/updatePosition",Object(o.d)({url:i,type:e.newAddPosition?"post":"put",data:n,success:function(t){if(t.state){var i=void 0;i=e.newAddPosition?"新增成功":"编辑成功",e.$message.success(i),e.ecruitmenInfoLook(e.curRecruition.id),e.showAddPositionModal=!1}else e.$message.error("操作失败,请重试")}})})},resetForm:function(t){this.newAddRecruit||this.$refs[t].resetFields(),this.showAddPositionModal=!1},onRecruitmentBrochureBack:function(){console.log(this.recruitmentInfoData),this.newAddRecruit?(this.recruitmentInfoData.title="",this.recruitmentInfoData.contactPeople="",this.recruitmentInfoData.contactPhone="",this.recruitmentInfoData.email="",this.recruitmentInfoData.time="",this.recruitmentInfoData.summary="",this.recruitmentInfoData.recruitmentBrief="",this.positionInfoList=[]):this.ecruitmenInfoLook(this.curRecruition.id)},onRecruitmentModifySure:function(){var t=this,e=void 0,i=this.recruitmentInfoData;return i.recruitmentPositionVOList=this.positionInfoList,this.newAddRecruit?(e="/api/employment/manage/recruitment/addRecruitment",i.time.length&&(i.startTime=i.time[0].split(" ")[0]+" 00:00:00"||"",i.endTime=i.time[1].split(" ")[0]+" 00:00:00"||"")):(e="/api/employment/manage/recruitment/updateRecruitment",i.time.length&&(i.startTime=i.time[0],i.endTime=i.time[1])),i.title?i.summary?i.email?(this.recruitmentModifyLoading=!0,void Object(o.d)({url:e,type:this.newAddRecruit?"post":"put",data:i,success:function(e){e.state?(t.$message.success("操作成功"),t.showRecruidInfoList=!0,t.showAddRecruidInfo=!1,t.tableData_url="/table-data/employment/manage/recruitment/getRecruitmentBySearch?timeStamp="+(new Date).getTime()):t.$message.error(e.message)}}).always(function(){t.recruitmentModifyLoading=!1})):this.$message.error("请填写简历接收邮箱"):this.$message.error("请填写公司简介"):this.$message.error("请填写招聘标题")},onPositionIndoEdit:function(t,e){var i=this;if(this.newAddPosition=!1,this.newAddRecruit)return this.curEditPositionId=e,this.positionIdArr.push(e),this.positionInfoForm=this.positionInfoList[e],void(this.showAddPositionModal=!0);var n="/api/employment/recruitment/getPositionById?id="+t.id;this.newAddPosition=!1,Object(o.d)({url:n,type:"get",success:function(t){t.state&&(i.curPositionInfo=t.data,i.positionInfoForm=t.data,i.positionInfoForm.address=t.data.workplace,i.showAddPositionModal=!0)}})},onPositionInfoAdd:function(){var t=this;this.newAddPosition=!0,this.showAddPositionModal=!0,this.positionInfoForm={address:"",positionName:"",positionType:"",positionProperty:"",major:"",diploma:"",salary:"",recruitNumber:"",workplace:"",positionRemarks:"",positionRequire:""},this.$nextTick(function(){t.$refs.positionInfoForm.clearValidate()})},getDict:function(t,e){var i=this,n="/api/employment/system/findDictByTypeName?typeName="+t;Object(o.d)({url:n,type:"get",success:function(t){t.state?i[e]=t.data:i[e]=[]}})},ecruitmenInfoDelete:function(t){var e=this;if(!this.newAddRecruit){var i="/api/employment/recruitment/deletePosition?recruitmentPositionId="+t.id;Object(o.d)({url:i,type:"delete",success:function(i){i.state&&(e.$message.success("删除职位成功"),e.ecruitmenInfoLook(t.recruitmentId))}})}},ecruitmenInfoLook:function(t){var e=this,i="/api/employment/recruitment/getRecruitment?recruitmentId="+t;this.newAddRecruit=!1,this.currentTab=0,Object(o.d)({url:i,type:"get",success:function(t){if(t.state&&t.data){var i=t.data;e.showRecruidInfoList=!1,e.showAddRecruidInfo=!0,e.recruitmentInfoData={id:i.id,companyId:i.companyId,title:i.title,companyName:i.companyName,addressDetail:i.addressDetail,property:i.property,scale:i.scale,contactPeople:i.contactPeople,contactPhone:i.contactPhone,email:i.email,summary:i.summary,recruitmentBrief:i.recruitmentBrief},i.startTime?e.recruitmentInfoData.time=[i.startTime,i.endTime]:e.recruitmentInfoData.time=[],e.positionInfoList=t.data.recruitmentPositionList}}})},createRecruid:function(){0!=this.selectUnit.data.length?(this.curRecruition=null,this.selectUnit.dialog=!0):this.$message.error("单位不存在，请先让单位注册或前往单位管理创建单位")},tabsItemClick:function(t){this.currentTab=t},exportStat:function(){window.location.href="/downloads/employment/manage/recruitment/getRecruitmentExcel"}}}),s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recruitmentInfo",attrs:{id:"recruitmentInfo"}},[t.showAddRecruidInfo?i("div",{staticClass:"flex-between"},[i("el-button",{staticStyle:{color:"#666"},attrs:{type:"text",icon:"el-icon-back"},on:{click:function(e){t.showAddRecruidInfo=!1,t.showRecruidInfoList=!0}}},[t._v("返回")]),t._v(" "),t.curRecruition?i("div",{staticClass:"opt-btn"},[i("el-button",{attrs:{type:"text",loading:t.slodOutLoading},on:{click:t.onSoldOUt}},[t._v("下架")]),t._v(" "),i("el-button",{attrs:{type:"text"},on:{click:t.onLookModifyRecord}},[t._v("查看修改记录")])],1):t._e()],1):t._e(),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showRecruidInfoList,expression:"showRecruidInfoList"}]},[i("div",{staticClass:"title"},[t._v("单位招聘信息")]),t._v(" "),i("v-table",{ref:"unitsManagerTable",attrs:{url:t.tableData_url,columns:t.columns,pagesize:"15",idField:"id",multiple:!1,order:!0,search:!1}},[i("div",{staticClass:"pull-right",attrs:{slot:"btn-group"},slot:"btn-group"},[i("el-button",{staticClass:"custom-btn",attrs:{type:"primary"},on:{click:function(e){return t.exportStat()}}},[t._v("导出")]),t._v(" "),i("el-button",{staticClass:"custom-btn",attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(e){return t.createRecruid()}}},[t._v("新增招聘信息")])],1)])],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showAddRecruidInfo,expression:"showAddRecruidInfo"}]},[i("div",{staticClass:"title addRecruid-title"},[t._m(0),t._v(" "),i("el-input",{staticClass:"input-custom",attrs:{placeholder:"请输入招聘标题"},model:{value:t.recruitmentInfoData.title,callback:function(e){t.$set(t.recruitmentInfoData,"title",e)},expression:"recruitmentInfoData.title"}})],1),t._v(" "),i("div",{staticClass:"tabs"},[i("ul",{staticClass:"tabs-title clearfix"},t._l(t.tabsItem,function(e,o){return i("li",{key:o,class:{active:t.currentTab==o},on:{click:function(e){return t.tabsItemClick(o)}}},[t._v(t._s(e))])}),0),t._v(" "),i("ul",{staticClass:"tabs-content"},[0==t.currentTab?i("li",{staticClass:"unit-info"},[i("div",{staticClass:"row input-group"},[i("div",{staticClass:"col-md-6"},[i("label",{staticClass:"title-text"},[t._v("单位名称：")]),t._v(" "),i("span",[t._v(t._s(t.recruitmentInfoData.companyName))])]),t._v(" "),i("div",{staticClass:"col-md-6"},[i("label",{staticClass:"title-text"},[t._v("单位性质：")]),t._v(" "),i("span",[t._v(t._s(t.recruitmentInfoData.property))])])]),t._v(" "),i("div",{staticClass:"row input-group"},[i("div",{staticClass:"col-md-6"},[i("label",{staticClass:"title-text"},[t._v("单位地址：")]),t._v(" "),i("span",[t._v(t._s(t.recruitmentInfoData.addressDetail))])]),t._v(" "),i("div",{staticClass:"col-md-6"},[i("label",{staticClass:"title-text"},[t._v("单位规模：")]),t._v(" "),i("span",[t._v(t._s(t.recruitmentInfoData.scale))])])]),t._v(" "),i("div",{staticClass:"input-group"},[i("label",{staticClass:"title-text"},[t._v("单位联系人：")]),t._v(" "),i("el-input",{staticClass:"input-custom",attrs:{placeholder:"单位联系人"},model:{value:t.recruitmentInfoData.contactPeople,callback:function(e){t.$set(t.recruitmentInfoData,"contactPeople",e)},expression:"recruitmentInfoData.contactPeople"}})],1),t._v(" "),i("div",{staticClass:"input-group"},[i("label",{staticClass:"title-text"},[t._v("电话：")]),t._v(" "),i("el-input",{staticClass:"input-custom",attrs:{placeholder:"请输入电话"},model:{value:t.recruitmentInfoData.contactPhone,callback:function(e){t.$set(t.recruitmentInfoData,"contactPhone",e)},expression:"recruitmentInfoData.contactPhone"}})],1),t._v(" "),i("div",{staticClass:"input-group"},[i("label",{staticClass:"title-text"},[t._v("简历接收邮箱：")]),t._v(" "),i("el-input",{staticClass:"input-custom",attrs:{placeholder:"请输入邮箱"},model:{value:t.recruitmentInfoData.email,callback:function(e){t.$set(t.recruitmentInfoData,"email",e)},expression:"recruitmentInfoData.email"}})],1),t._v(" "),i("div",{staticClass:"input-group"},[i("label",{staticClass:"title-text"},[t._v("简历接收时间：")]),t._v(" "),i("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:t.dateChange},model:{value:t.recruitmentInfoData.time,callback:function(e){t.$set(t.recruitmentInfoData,"time",e)},expression:"recruitmentInfoData.time"}})],1),t._v(" "),i("div",{staticClass:"input-group"},[i("label",{staticClass:"title-text"},[t._v("单位简介：")]),t._v(" "),i("el-input",{staticStyle:{width:"80%"},attrs:{type:"textarea",rows:"5",placeholder:"请输入内容",resize:"none"},model:{value:t.recruitmentInfoData.summary,callback:function(e){t.$set(t.recruitmentInfoData,"summary",e)},expression:"recruitmentInfoData.summary"}})],1)]):t._e(),t._v(" "),1==t.currentTab?i("li",[i("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.positionInfoList}},[i("el-table-column",{attrs:{type:"index"}}),t._v(" "),i("el-table-column",{attrs:{prop:"positionName",label:"职位名称"}}),t._v(" "),i("el-table-column",{attrs:{prop:"positionType",label:"职位类别"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.positionTypeName?e.row.positionTypeName:e.row.positionType))])]}}],null,!1,507469858)}),t._v(" "),i("el-table-column",{attrs:{prop:"positionProperty",label:"职位性质"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s("PRACTICE"==e.row.positionProperty?"实习":"全职"))])]}}],null,!1,2348323164)}),t._v(" "),i("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){return t.onPositionIndoEdit(e.row,e.$index)}}},[t._v("编辑")]),t._v(" "),i("el-button",{staticStyle:{color:"#727272"},attrs:{type:"text",size:"small"},on:{click:function(i){return t.ecruitmenInfoDelete(e.row,t.$index)}}},[t._v("删除")])]}}],null,!1,2739519692)})],1),t._v(" "),i("div",{staticClass:"add-position-warp"},[i("el-button",{staticClass:"add-position",attrs:{icon:"el-icon-plus",plain:""},on:{click:t.onPositionInfoAdd}},[t._v("添加")])],1)],1):t._e(),t._v(" "),2==t.currentTab?i("li",[i("div",{staticClass:"recruitment-brochure"},[i("el-input",{staticStyle:{width:"90%","margin-top":"20px"},attrs:{type:"textarea",rows:"8",placeholder:"请填写招聘流程、薪资福利等",resize:"none"},model:{value:t.recruitmentInfoData.recruitmentBrief,callback:function(e){t.$set(t.recruitmentInfoData,"recruitmentBrief",e)},expression:"recruitmentInfoData.recruitmentBrief"}}),t._v(" "),i("div",{staticClass:"btn-group-o"},[i("el-button",{staticClass:"back-btn btn-o",attrs:{plain:""},on:{click:t.onRecruitmentBrochureBack}},[t._v("取消")]),t._v(" "),i("el-button",{staticClass:"back-btn btn-o",attrs:{type:"primary",loading:t.recruitmentModifyLoading},on:{click:t.onRecruitmentModifySure}},[t._v("确认")])],1)],1)]):t._e()])])]),t._v(" "),i("el-dialog",{attrs:{close:"changeEmail-dialog",title:"新增职位",visible:t.showAddPositionModal,width:"60%"},on:{"update:visible":function(e){t.showAddPositionModal=e}}},[i("el-form",{ref:"positionInfoForm",staticClass:"add-position-form",attrs:{rules:t.addPositionRules,model:t.positionInfoForm,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"职位名称",prop:"positionName"}},[i("el-input",{staticClass:"custom-el-input",attrs:{placeholder:"请选择职位名称"},model:{value:t.positionInfoForm.positionName,callback:function(e){t.$set(t.positionInfoForm,"positionName",e)},expression:"positionInfoForm.positionName"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"职位类别",prop:"positionType"}},[i("el-select",{attrs:{placeholder:"请选择职位类别"},model:{value:t.positionInfoForm.positionType,callback:function(e){t.$set(t.positionInfoForm,"positionType",e)},expression:"positionInfoForm.positionType"}},t._l(t.dict_type,function(t,e){return i("el-option",{key:e,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),i("el-form-item",{attrs:{label:"职位性质",prop:"positionProperty"}},[i("el-radio",{attrs:{label:"PRACTICE"},model:{value:t.positionInfoForm.positionProperty,callback:function(e){t.$set(t.positionInfoForm,"positionProperty",e)},expression:"positionInfoForm.positionProperty"}},[t._v("实习")]),t._v(" "),i("el-radio",{attrs:{label:"FULL_TIME"},model:{value:t.positionInfoForm.positionProperty,callback:function(e){t.$set(t.positionInfoForm,"positionProperty",e)},expression:"positionInfoForm.positionProperty"}},[t._v("全职")])],1),t._v(" "),i("el-form-item",{attrs:{label:"专业要求",prop:"major"}},[i("el-select",{attrs:{placeholder:"请选择专业要求"},model:{value:t.positionInfoForm.major,callback:function(e){t.$set(t.positionInfoForm,"major",e)},expression:"positionInfoForm.major"}},t._l(t.dict_duty,function(t,e){return i("el-option",{key:e,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),i("el-form-item",{attrs:{label:"学历要求",prop:"diploma"}},[i("el-select",{attrs:{placeholder:"请选择学历要求"},model:{value:t.positionInfoForm.diploma,callback:function(e){t.$set(t.positionInfoForm,"diploma",e)},expression:"positionInfoForm.diploma"}},t._l(t.dict_educational,function(t,e){return i("el-option",{key:e,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),i("el-form-item",{attrs:{label:"薪资范围",prop:"salary"}},[i("el-select",{attrs:{placeholder:"请选择薪资范围"},model:{value:t.positionInfoForm.salary,callback:function(e){t.$set(t.positionInfoForm,"salary",e)},expression:"positionInfoForm.salary"}},t._l(t.dict_moneyRange,function(t,e){return i("el-option",{key:e,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),i("el-form-item",{attrs:{label:"招聘人数",prop:"recruitNumber"}},[i("el-input",{staticClass:"custom-el-input",model:{value:t.positionInfoForm.recruitNumber,callback:function(e){t.$set(t.positionInfoForm,"recruitNumber",e)},expression:"positionInfoForm.recruitNumber"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"工作地点",prop:"address"}},[i("linkage",{attrs:{options:t.positionInfoForm.workplace,showArea:!0,width:130},on:{getData:t.getLocation}})],1),t._v(" "),i("el-form-item",{attrs:{label:"工作职责",prop:"positionRemarks"}},[i("el-input",{attrs:{type:"textarea",rows:"5",placeholder:"工作职责",resize:"none"},model:{value:t.positionInfoForm.positionRemarks,callback:function(e){t.$set(t.positionInfoForm,"positionRemarks",e)},expression:"positionInfoForm.positionRemarks"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"工作要求",prop:"positionRequire"}},[i("el-input",{attrs:{type:"textarea",rows:"5",placeholder:"工作要求",resize:"none"},model:{value:t.positionInfoForm.positionRequire,callback:function(e){t.$set(t.positionInfoForm,"positionRequire",e)},expression:"positionInfoForm.positionRequire"}})],1)],1),t._v(" "),i("div",{staticClass:"buttonGroup"},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("positionInfoForm")}}},[t._v("保存")]),t._v(" "),i("el-button",{attrs:{plain:""},on:{click:function(e){return t.resetForm("positionInfoForm")}}},[t._v("取消")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"选择要新增的单位",visible:t.selectUnit.dialog,width:"400px"},on:{"update:visible":function(e){return t.$set(t.selectUnit,"dialog",e)}}},[i("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:t.selectUnit.value,callback:function(e){t.$set(t.selectUnit,"value",e)},expression:"selectUnit.value"}},t._l(t.selectUnit.data,function(t){return i("el-option",{key:t.id,attrs:{label:t.companyName,value:t.id}})}),1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",loading:t.selectUnit.loading},on:{click:t.onSelectUnitSure}},[t._v("确定")]),t._v(" "),i("el-button",{attrs:{plain:""},on:{click:function(e){t.selectUnit.dialog=!1}}},[t._v("取消")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"修改记录",visible:t.modifyRecordDialog,width:"400px"},on:{"update:visible":function(e){t.modifyRecordDialog=e}}},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.modifyRecordTableData}},[i("el-table-column",{attrs:{prop:"operationTime",label:"日期",width:"180"}}),t._v(" "),i("el-table-column",{attrs:{prop:"operatorName",label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.operatorName+e.row.status)+"招聘信息")])]}}])})],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{plain:""},on:{click:function(e){t.modifyRecordDialog=!1}}},[t._v("取消")])],1)],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-title"},[e("i",{staticClass:"must-sign"},[this._v("*")]),this._v("招聘标题\n      ")])}]};var r=i("Mz/3")(a,s,!1,function(t){i("HIH3"),i("I9v9")},"data-v-c9e2989e",null);e.default=r.exports},HIH3:function(t,e){},I9v9:function(t,e){}});
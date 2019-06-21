webpackJsonp([144],{EdQj:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("xd7I");var l=a("C331"),i={data:function(){return{url:"/table-data/apartment/checkInManage/collegeAllocation/page",columns:[],timeStamp:"",studentTimeStamp:"",studentUrl:"",studentColumns:"",curPage:"mainPage",importParams:{parentPageTitle:"",downloadTemplateUrl:"",downloadErrorTemplateUrl:"",checkTemplateUrl:"",templateName:"",importBtnType:null},urlParameter:{batchId:"",userId:""},batchSetting:{showAddModal:!1,executiveDistributor:"",fieldVerifyData:[{id:"name",title:"名称"},{id:"expectCheckInDate",title:"预计住宿开始时间"},{id:"expectRetirementDate",title:"预计住宿结束时间"},{id:"applyTimeStart",title:"学生完善信息开始时间"},{id:"applyTimeEnd",title:"学生完善信息结束时间"},{id:"collegeAllocateTimeStart",title:"学院分配开始时间"},{id:"collegeAllocateTimeEnd",title:"学院分配结束时间"},{id:"studentCheckTime",title:"学生查看时间"}],defaultValue:{name:"",expectCheckInDate:"",expectRetirementDate:"",applyTimeStart:"",applyTimeEnd:"",collegeAllocateTimeStart:"",collegeAllocateTimeEnd:"",studentCheckTime:"",college:!1,sex:!0,department:!1},divideMethodData:[{id:"college",value:!1,name:"学院"},{id:"department",value:!1,name:"系别"},{id:"sex",value:!0,name:"性别"}]},addStudentSetting:{showAddModal:!1,isShowSearch:!0,userInfo:"",userId:""},allocation:{showAllocationMoal:!1,layout:[{title:"校区",id:"campus"},{title:"园区",id:"zone"},{title:"楼栋",id:"building"},{title:"宿舍",id:"dormitory"},{title:"床位",id:"bed"}],options:{campus:[],zone:[],building:[],dormitory:[],bed:[]},defaultValue:{campus:"",zone:"",building:"",dormitory:"",bed:""}},searchSelectOptions:{checkIn:[{value:"WAIT_CHECK_IN",label:"未入住"},{value:"CHECK_IN",label:"已入住"},{value:"RETIREMENT",label:"已退宿"}],payment:[{value:"1",label:"已缴费"},{value:"2",label:"未缴费"},{value:"3",label:"免缴费"},{value:"4",label:"生源地/校园地贷款"}],selectRoom:[{value:"WAIT_START",label:"未开始"},{value:"APPLYING",label:"正在进行"},{value:"END",label:"已结束"}]},status:{checkIn:{WAIT_CHECK_IN:"未入住",CHECK_IN:"已入住",RETIREMENT:"已退宿"},payment:{1:"已缴费",2:"未缴费",3:"免缴费",4:"生源地/校园地贷款"},selectRoomStatus:{WAIT_START:"未开始",APPLYING:"正在进行",END:"已结束"}},isAllocated:"",batchName:"",lang:"zh-cn"}},computed:{translate:function(){return Object(l.g)(this.lang).accommodationResources}},created:function(){var t=this,e=localStorage.getItem("lang");Object(l.g)(e)&&(this.lang=e),Object(l.e)({url:"/api/apartment/dicts?typeName=校区",type:"get",success:function(e){e.state?e.data.forEach(function(e){t.allocation.options.campus.push({label:e.label,value:e.value})}):t.toast(e.message)}}),this.columns=[{id:"name",title:"批次名称",className:"text-left",width:150,hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!1}}},{id:"applytime",title:"学生完善信息时间",className:"text-left",width:290,hidden:!1,formatter:function(t){return t.applyTimeStart&&t.applyTimeEnd?t.applyTimeStart+"至"+t.applyTimeEnd:""}},{id:"collegeAllocateTimeStart",title:"学院分配时间",width:290,className:"text-left",hidden:!1,formatter:function(t){return t.collegeAllocateTimeStart&&t.collegeAllocateTimeEnd?t.collegeAllocateTimeStart+"至"+t.collegeAllocateTimeEnd:""}},{id:"studentCheckTime",title:"学生查看时间",width:100,className:"text-left",hidden:!1},{id:"expectCheckInDate",title:"预计入住时间",width:100,className:"text-left",hidden:!1},{id:"expectRetirementDate",title:"预计退宿时间",width:100,className:"text-left",hidden:!1},{id:"areaAllocation",title:"片区分配",width:100,className:"text-left",hidden:!1},{id:"checkInStatus",title:"学院分配",width:100,className:"text-left",hidden:!1},{id:"status",title:"状态",className:"text-left",width:80,hidden:!1,search:{type:"select",data:{options:this.searchSelectOptions.selectRoom,optionsLabel:"label",optionsValue:"value"}},formatter:function(e){return t.status.selectRoomStatus[e.status]}},{id:"opt",title:"操作",className:"text-left",hidden:!1,width:400,formatter:function(e){return[{tag:"a",text:t.translate.edit,className:"opt-btn",callback:function(e,a){"END"!==e.status?"APPLYING"===e.status&&e.hadUsers&&e.hadHousing?t.$toast("该批次已经有人员被分配了房间，不能编辑"):(t.batchSetting.showAddModal=!0,t.modalType="编辑",t.batchSetting.executiveDistributor="",!t.batchSetting.defaultValue.sex||t.batchSetting.defaultValue.college||t.batchSetting.defaultValue.department||(t.batchSetting.executiveDistributor="执行分配者：全校宿舍分配管理员"),t.batchSetting.defaultValue.sex&&t.batchSetting.defaultValue.college&&(t.batchSetting.executiveDistributor="执行分配者：学院宿舍分配管理员"),t.urlParameter.batchId=e.id,t.batchSetting.defaultValue={name:e.name,expectCheckInDate:e.expectCheckInDate||"",expectRetirementDate:e.expectRetirementDate||"",applyTimeStart:e.applyTimeStart||"",applyTimeEnd:e.applyTimeEnd||"",collegeAllocateTimeStart:e.collegeAllocateTimeStart||"",collegeAllocateTimeEnd:e.collegeAllocateTimeEnd||"",studentCheckTime:e.studentCheckTime||"",college:e.college,sex:e.sex,department:e.department}):t.$toast("该批次已结束，不能编辑")}},{tag:"a",text:t.translate.delete,className:"opt-btn",callback:function(e,a){"END"!==e.status?"APPLYING"===e.status&&e.hadUsers&&e.hadHousing?t.$toast("该批次已经有人员被分配了房间，不能删除"):confirm("确定删除吗？")&&Object(l.e)({url:"/api/apartment/checkInManage/collegeAllocation/"+e.id,type:"delete",success:function(e){e.state?(t._refreshTable(),t.$toast("删除成功！")):t.toast(e.message)}}):t.$toast("该批次已结束，不能删除")}},{tag:"a",text:"学生列表",className:"opt-btn",callback:function(e,a){t.curPage="studentListPage",t.urlParameter.batchId=e.id,t.batchName=e.name,t.studentUrl="/table-data/apartment/checkIn/users/collegeAllocation/page/"+e.id}},{tag:"a",text:"名单导入",className:"opt-btn",callback:function(e,a){t.curPage="importPage",t.importParams={parentPageTitle:"批次列表",downloadTemplateUrl:"/apartment/checkIn/users/collegeAllocation/batch/templates",downloadErrorTemplateUrl:"/apartment/checkIn/users/collegeAllocation/batch/error",checkTemplateUrl:"/apartment/checkIn/users/collegeAllocation/batch/check/"+e.id,templateName:"名单导入模板",importBtnType:[{name:"覆盖导入",url:"/apartment/checkIn/users/collegeAllocation/batch/createUsers",method:"put",isShowBtn:!0,success:function(e){e.state&&t._refreshTable()}}]}}},{tag:"a",text:"分配片区",className:"opt-btn",callback:function(e,a){e.hadUsers?(t.curPage="importPage",t.importParams={parentPageTitle:"批次列表",downloadTemplateUrl:"/apartment/checkInManage/collegeAllocation/batchHousingAllot/template/"+e.id,downloadErrorTemplateUrl:"/apartment/checkInManage/collegeAllocation/batchHousingAllot/error/info",checkTemplateUrl:"/apartment/checkInManage/collegeAllocation/batchHousingAllot/excel/"+e.id,templateName:"分配房间模板",importBtnType:[{name:"覆盖导入",url:"/apartment/checkInManage/collegeAllocation/batchHousingAllot/batch/create",method:"post",isShowBtn:!0,success:function(e){e.state&&t._refreshTable()}}]}):t.$toast("请先导入名单或者在学生列表那边新增学生")}},{tag:"a",text:"收回房源",className:"opt-btn",callback:function(e,a){e.hadHousing?confirm("确定收回房源吗？")&&Object(l.e)({url:"/api/apartment/checkInManage/collegeAllocation/removeHousing/"+e.id,type:"put",success:function(e){e.state?(t._refreshTable(),t.$toast("操作成功！")):t.toast(e.message)}}):t.$toast("尚未分配房间，不必收回房源")}},{tag:"a",text:"导出",className:"opt-btn",callback:function(e,a){var l=new Date,i=l.getFullYear()+t._getTimeFormat(l.getMonth()+1)+t._getTimeFormat(l.getDate());window.location.href="/downloads/apartment/checkIn/users/collegeAllocation/"+e.id+"?fileName=学院分配信息_"+i}}]}}],this.studentColumns=[{id:"name",title:"姓名",className:"text-left",hidden:!1,width:100,search:{type:"input",data:{placeholer:"",autoFocus:!1}}},{id:"userNo",title:"学号",className:"text-left",width:120,hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!1}}},{id:"account",title:"新生账号",className:"text-left",hidden:!1,width:120,search:{type:"input",data:{placeholer:"",autoFocus:!1}}},{id:"sex",title:"性别",className:"text-left",hidden:!1,width:100,search:{type:"select",data:{url:"/api/apartment/dicts?typeName=性别",optionsLabel:"label",optionsValue:"value"}}},{id:"college",title:"学院",className:"text-left",hidden:!1,width:120,search:{type:"multiSelect",data:{url:"/api/apartment/unit/list",optionsLabel:"name",optionsValue:"code"}}},{id:"apartment",title:"已分配宿舍",className:"text-left",width:150,hidden:!1},{id:"paymentStatus",title:"缴费情况",className:"text-left",width:100,hidden:!1,search:{type:"select",data:{options:this.searchSelectOptions.payment,optionsLabel:"label",optionsValue:"value"}},formatter:function(e){return t.status.payment[e.paymentStatus]}},{id:"userCheckInStatus",title:"入住情况",className:"text-left",width:100,hidden:!1,search:{type:"select",data:{options:this.searchSelectOptions.checkIn,optionsLabel:"label",optionsValue:"value"}},formatter:function(e){return t.status.checkIn[e.checkInStatus]}},{id:"giveUp",title:"是否放弃入住",className:"text-left",width:100,hidden:!1,formatter:function(t){return t.giveUp?"是":"否"}},{id:"opt",title:"操作",className:"text-left",width:200,hidden:!1,formatter:function(e){var a=[{tag:"a",text:t.translate.delete,className:"opt-btn",callback:function(e,a){confirm("是否确定从该批次中删除该学生？")&&Object(l.e)({url:"/api/apartment/checkIn/users/collegeAllocation/delete/"+e.userId+"/"+t.urlParameter.batchId,type:"delete",success:function(e){e.state?(t._refreshStudentTable(),t.$toast("删除成功！")):t.toast(e.message)}})}},{tag:"a",text:"查看",className:"opt-btn",callback:function(e,a){t.$emit("addBread",{route:"/apartment/staffInfo?userId="+e.userId,title:e.name+"的信息"})}}];return"FIRST"!==e.batchCheckUserApplyStatus&&"HAD_APPLY"!==e.batchCheckUserApplyStatus||e.giveUp||a.push({tag:"a",text:"分配",className:"opt-btn",callback:function(e,a){t.allocation.showAllocationMoal=!0,t.urlParameter.userId=e.userId,t.isAllocated=e.batchCheckUserApplyStatus,t.allocation.defaultValue={campus:"",zone:"",building:"",dormitory:"",bed:""}}}),"未入住"!==e.checkInStatus&&e.giveUp||a.push({tag:"a",text:"放弃入住",className:"opt-btn",callback:function(e,a){confirm("确定放弃入住吗？此操作不可逆")&&Object(l.e)({url:"/api/apartment/checkIn/users/collegeAllocation/giveUp/"+e.userId+"/"+t.urlParameter.batchId,type:"put",success:function(e){e.state?(t._refreshStudentTable(),t.$toast("操作成功！")):t.toast(e.message)}})}}),a}}]},methods:{_getTimeFormat:function(t){return t<10?"0"+t:t},_showAddStudentModal:function(){this.addStudentSetting={showAddModal:!0,isShowSearch:!0,userInfo:"",userId:""}},_showAddModal:function(){this.batchSetting.showAddModal=!0,this.modalType="新增",this.batchSetting.defaultValue={name:"",expectCheckInDate:"",expectRetirementDate:"",applyTimeStart:"",applyTimeEnd:"",collegeAllocateTimeStart:"",collegeAllocateTimeEnd:"",studentCheckTime:"",college:!1,sex:!0,department:!1},this.batchSetting.executiveDistributor=""},_setValue:function(t){t.value=!t.value,this.batchSetting.defaultValue[t.id]=t.value,this.batchSetting.defaultValue.department&&(this.batchSetting.defaultValue.college||(this.batchSetting.defaultValue.college=!0,this.batchSetting.divideMethodData.forEach(function(t){"college"===t.id&&(t.value=!0)}))),this.batchSetting.executiveDistributor="",!this.batchSetting.defaultValue.sex||this.batchSetting.defaultValue.college||this.batchSetting.defaultValue.department||(this.batchSetting.executiveDistributor="执行分配者：全校宿舍分配管理员"),this.batchSetting.defaultValue.sex&&this.batchSetting.defaultValue.college&&(this.batchSetting.executiveDistributor="执行分配者：学院宿舍分配管理员")},_submit:function(){"新增"===this.modalType?this._add():"编辑"===this.modalType&&this._edit()},_verify:function(){var t=this,e=!0;return this.batchSetting.fieldVerifyData.forEach(function(a){e&&!t.batchSetting.defaultValue[a.id]&&(t.$toast(a.title+"不能为空"),e=!1)}),this.batchSetting.defaultValue.college||this.batchSetting.defaultValue.sex||this.batchSetting.defaultValue.department||(this.$toast("房间划分方式不能为空"),e=!1),(this.batchSetting.defaultValue.college||this.batchSetting.defaultValue.department)&&(this.batchSetting.defaultValue.sex||(this.$toast("性别为必选项"),e=!1)),e},_add:function(){var t=this;this._verify()&&(this.batchSetting.defaultValue.expectCheckInDate=/\d{4}-\d{1,2}-\d{1,2}/g.exec(this.batchSetting.defaultValue.expectCheckInDate)[0],this.batchSetting.defaultValue.expectRetirementDate=/\d{4}-\d{1,2}-\d{1,2}/g.exec(this.batchSetting.defaultValue.expectRetirementDate)[0],this.batchSetting.defaultValue.studentCheckTime=/\d{4}-\d{1,2}-\d{1,2}/g.exec(this.batchSetting.defaultValue.studentCheckTime)[0],Object(l.e)({url:"/api/apartment/checkInManage/collegeAllocation/batches",type:"post",data:this.batchSetting.defaultValue,success:function(e){e.state?(t.batchSetting.showAddModal=!1,t._refreshTable(),t.$toast("新增成功！")):t.$toast(e.message)}}))},_edit:function(){var t=this;this._verify()&&(this.batchSetting.defaultValue.expectCheckInDate=/\d{4}-\d{1,2}-\d{1,2}/g.exec(this.batchSetting.defaultValue.expectCheckInDate)[0],this.batchSetting.defaultValue.expectRetirementDate=/\d{4}-\d{1,2}-\d{1,2}/g.exec(this.batchSetting.defaultValue.expectRetirementDate)[0],this.batchSetting.defaultValue.studentCheckTime=/\d{4}-\d{1,2}-\d{1,2}/g.exec(this.batchSetting.defaultValue.studentCheckTime)[0],Object(l.e)({url:"/api/apartment/checkInManage/collegeAllocation/batches/"+this.urlParameter.batchId,type:"put",data:this.batchSetting.defaultValue,success:function(e){e.state?(t.batchSetting.showAddModal=!1,t._refreshTable(),t.$toast("编辑成功！")):t.$toast(e.message)}}))},_submitAddStudnet:function(){var t=this;this.addStudentSetting.userId?Object(l.e)({url:"/api/apartment/checkIn/users/collegeAllocation/singleUser/"+this.urlParameter.batchId+"/"+this.addStudentSetting.userId,type:"post",success:function(e){e.state?(t._refreshStudentTable(),t._refreshTable(),t.$toast("新增成功！"),t.addStudentSetting.showAddModal=!1):t.$toast(e.message)}}):this.$toast("请先检测人员")},_daySelected:function(t,e){var a=this;if("expectCheckInDate"===e||"expectRetirementDate"===e)new Date(this.batchSetting.defaultValue.expectCheckInDate).getTime()-new Date(this.batchSetting.defaultValue.expectRetirementDate).getTime()>0&&("expectCheckInDate"===e?(this.$toast("预计入住时间要在预计退宿时间之前"),this.$nextTick(function(){a.batchSetting.defaultValue.expectCheckInDate=""})):(this.$toast("预计退宿时间要在预计入住时间之后"),this.$nextTick(function(){a.batchSetting.defaultValue.expectRetirementDate=""})));else if("applyTimeStart"===e||"applyTimeEnd"===e){new Date(this.batchSetting.defaultValue.applyTimeStart).getTime()-new Date(this.batchSetting.defaultValue.applyTimeEnd).getTime()>0&&("applyTimeStart"===e?(this.$toast("完善信息开始时间要在完善信息结束时间之前"),this.$nextTick(function(){a.batchSetting.defaultValue.applyTimeStart=""})):(this.$toast("完善信息结束时间要在完善信息开始时间之后"),this.$nextTick(function(){a.batchSetting.defaultValue.applyTimeEnd=""})))}else{new Date(this.batchSetting.defaultValue.collegeAllocateTimeStart).getTime()-new Date(this.batchSetting.defaultValue.collegeAllocateTimeEnd).getTime()>0&&("collegeAllocateTimeStart"===e?(this.$toast("分配开始时间要在分配结束时间之前"),this.$nextTick(function(){a.batchSetting.defaultValue.collegeAllocateTimeStart=""})):(this.$toast("分配结束时间要在分配开始时间之后"),this.$nextTick(function(){a.batchSetting.defaultValue.collegeAllocateTimeEnd=""})))}},userSelected:function(t){this.addStudentSetting.userId=t.userId,this.addStudentSetting.userInfo=t.name+" ("+t.userNo+")",this.addStudentSetting.isShowSearch=!1},changeUserSearch:function(){this.addStudentSetting.isShowSearch=!0,this.addStudentSetting.userInfo="",this.addStudentSetting.userId=""},_allocationSelected:function(t,e){this.allocation.defaultValue[e.id]=t.value,this.allocation.defaultValue[e.id]&&("campus"===e.id?this._getZonesData(this.allocation.defaultValue[e.id]):"zone"===e.id?this._getBuildingData(this.allocation.defaultValue[e.id]):"building"===e.id?this._getDormitoryData(this.allocation.defaultValue[e.id]):"dormitory"===e.id&&this._getBedData(this.allocation.defaultValue[e.id]))},_getZonesData:function(t){var e=this;Object(l.e)({url:"/api/apartment/zones/getByCampuses/"+t,type:"get",success:function(t){t.state?(e.allocation.options.zone.splice(0,e.allocation.options.zone.length),t.data&&t.data.forEach(function(t){e.allocation.options.zone.push({label:t.name,value:t.zoneId.toString()})})):e.$toast(t.message)}})},_getBuildingData:function(t){var e=this;Object(l.e)({url:"/api/apartment/buildings/list/"+t,type:"get",success:function(t){t.state?(e.allocation.options.building.splice(0,e.allocation.options.building.length),t.data&&t.data.forEach(function(t){e.allocation.options.building.push({label:t.name,value:t.buildingId.toString()})})):e.$toast(t.message)}})},_getDormitoryData:function(t){var e=this;Object(l.e)({url:"/api/apartment/rooms/list/"+t,type:"get",success:function(t){t.state?(e.allocation.options.dormitory.splice(0,e.allocation.options.dormitory.length),t.data&&t.data.forEach(function(t){e.allocation.options.dormitory.push({label:t.roomNo,value:t.roomId})})):e.$toast(t.message)}})},_getBedData:function(t){var e=this;Object(l.e)({url:"/api/apartment/beds/getBedsByRooms/"+t,type:"get",success:function(t){t.state?(e.allocation.options.bed.splice(0,e.allocation.options.bed.length),t.data&&t.data.forEach(function(t){e.allocation.options.bed.push({label:t.bedNo.toString(),value:t.bedId})})):e.$toast(t.message)}})},_allocationVerify:function(){var t=this,e=!0;return this.allocation.layout.forEach(function(a){e&&!t.allocation.defaultValue[a.id]&&(t.$toast(a.title+"不能为空"),e=!1)}),e},_submitAllocation:function(){this._allocationVerify()&&("HAD_APPLY"===this.isAllocated?confirm("确定重新安排宿舍？")?this._allocationDormitory():this.allocation.showAllocationMoal=!1:"FIRST"===this.isAllocated&&this._allocationDormitory())},_allocationDormitory:function(){var t=this;Object(l.e)({url:"/api/apartment/checkIn/users/collegeAllocation/distribute/"+this.urlParameter.batchId+"/"+this.urlParameter.userId,type:"put",data:{campus:this.allocation.defaultValue.campus,zoneId:this.allocation.defaultValue.zone,buildingId:this.allocation.defaultValue.building,roomId:this.allocation.defaultValue.dormitory,bedId:this.allocation.defaultValue.bedId},success:function(e){e.state?(t.$toast("分配成功"),t.allocation.showAllocationMoal=!1,t._refreshStudentTable()):t.$toast(e.message)}})},_refreshTable:function(){this.timeStamp=Object(l.a)()},_refreshStudentTable:function(){this.studentTimeStamp=Object(l.a)()}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"college-assignment-checkIn"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:"mainPage"===t.curPage,expression:"curPage === 'mainPage'"}],staticClass:"row text-center"},[a("v-table",{attrs:{title:"学院分配入住",url:t.url+"?timeStamp="+t.timeStamp,pagesize:"10",idField:"id",columns:t.columns,multiple:!1,order:!0,search:!1}},[a("div",{staticClass:"btn-group pull-right",attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},[a("button",{staticClass:"btn add clearBtnBorder",attrs:{type:"button"},on:{click:t._showAddModal}},[t._v("新增批次")])])])],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"studentListPage"===t.curPage,expression:"curPage === 'studentListPage'"}],staticClass:"row"},[a("div",{staticClass:"back-parent-page",on:{click:function(e){t.curPage="mainPage"}}},[a("button",{staticClass:"btn back-btn clearBtnBorder",attrs:{type:"button"}},[a("i",{staticClass:"maticon back-icon-btn",domProps:{innerHTML:t._s(t.icons("arrow_back"))}},[t._v("arrow_back")]),a("span",{staticClass:"nav-title"},[t._v("返回批次列表")])])]),t._v(" "),a("v-table",{attrs:{title:t.batchName+"-学生列表",url:"studentListPage"===t.curPage?t.studentUrl+"?timeStamp="+t.studentTimeStamp:"",pagesize:"10",idField:"id",columns:t.studentColumns,multiple:!1,order:!0,search:!1}},[a("div",{staticClass:"btn-group pull-right",attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},[a("button",{staticClass:"btn add clearBtnBorder",attrs:{type:"button"},on:{click:t._showAddStudentModal}},[t._v("新增学生")])])])],1),t._v(" "),"importPage"===t.curPage?a("v-import",t._b({on:{backParentPage:function(e){t.curPage="mainPage"}}},"v-import",t.importParams,!1)):t._e(),t._v(" "),a("v-modal",{attrs:{show:t.batchSetting.showAddModal,effect:"fade",width:"660"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v(t._s(t.modalType)+"批次")])]),t._v(" "),a("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label modal-label"},[t._v("名称")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.batchSetting.defaultValue.name,expression:"batchSetting.defaultValue.name"}],staticClass:"form-control form-input-style",attrs:{type:"text"},domProps:{value:t.batchSetting.defaultValue.name},on:{input:function(e){e.target.composing||t.$set(t.batchSetting.defaultValue,"name",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label modal-label"},[t._v("预计住宿时间")]),t._v(" "),a("v-datepicker",{staticClass:"btn-block form-datepicker-style",attrs:{format:"yyyy-MM-dd",clearButton:!1,showTime:!1},on:{daySelected:function(e){return t._daySelected(e,"expectCheckInDate")}},model:{value:t.batchSetting.defaultValue.expectCheckInDate,callback:function(e){t.$set(t.batchSetting.defaultValue,"expectCheckInDate",e)},expression:"batchSetting.defaultValue.expectCheckInDate"}}),t._v(" "),a("span",{staticClass:"time-line"}),t._v(" "),a("v-datepicker",{staticClass:"btn-block form-datepicker-style",attrs:{format:"yyyy-MM-dd",clearButton:!1,showTime:!1},on:{daySelected:function(e){return t._daySelected(e,"expectRetirementDate")}},model:{value:t.batchSetting.defaultValue.expectRetirementDate,callback:function(e){t.$set(t.batchSetting.defaultValue,"expectRetirementDate",e)},expression:"batchSetting.defaultValue.expectRetirementDate"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label modal-label"},[t._v("学生完善信息时间")]),t._v(" "),a("v-datepicker",{staticClass:"btn-block form-datepicker-style",attrs:{format:"yyyy-MM-dd hh:ii:ss",clearButton:!1,showTime:!1},on:{daySelected:function(e){return t._daySelected(e,"applyTimeStart")}},model:{value:t.batchSetting.defaultValue.applyTimeStart,callback:function(e){t.$set(t.batchSetting.defaultValue,"applyTimeStart",e)},expression:"batchSetting.defaultValue.applyTimeStart"}}),t._v(" "),a("span",{staticClass:"time-line"}),t._v(" "),a("v-datepicker",{staticClass:"btn-block form-datepicker-style",attrs:{format:"yyyy-MM-dd hh:ii:ss",clearButton:!1,showTime:!1},on:{daySelected:function(e){return t._daySelected(e,"applyTimeEnd")}},model:{value:t.batchSetting.defaultValue.applyTimeEnd,callback:function(e){t.$set(t.batchSetting.defaultValue,"applyTimeEnd",e)},expression:"batchSetting.defaultValue.applyTimeEnd"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label modal-label"},[t._v("学院分配时间")]),t._v(" "),a("v-datepicker",{staticClass:"btn-block form-datepicker-style",attrs:{format:"yyyy-MM-dd hh:ii:ss",clearButton:!1,showTime:!1},on:{daySelected:function(e){return t._daySelected(e,"collegeAllocateTimeStart")}},model:{value:t.batchSetting.defaultValue.collegeAllocateTimeStart,callback:function(e){t.$set(t.batchSetting.defaultValue,"collegeAllocateTimeStart",e)},expression:"batchSetting.defaultValue.collegeAllocateTimeStart"}}),t._v(" "),a("span",{staticClass:"time-line"}),t._v(" "),a("v-datepicker",{staticClass:"btn-block form-datepicker-style",attrs:{format:"yyyy-MM-dd hh:ii:ss",clearButton:!1,showTime:!1},on:{daySelected:function(e){return t._daySelected(e,"collegeAllocateTimeEnd")}},model:{value:t.batchSetting.defaultValue.collegeAllocateTimeEnd,callback:function(e){t.$set(t.batchSetting.defaultValue,"collegeAllocateTimeEnd",e)},expression:"batchSetting.defaultValue.collegeAllocateTimeEnd"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label modal-label"},[t._v("学生查看时间")]),t._v(" "),a("v-datepicker",{staticClass:"btn-block form-datepicker-style",attrs:{format:"yyyy-MM-dd",clearButton:!1,showTime:!1},model:{value:t.batchSetting.defaultValue.studentCheckTime,callback:function(e){t.$set(t.batchSetting.defaultValue,"studentCheckTime",e)},expression:"batchSetting.defaultValue.studentCheckTime"}})],1),t._v(" "),a("div",{staticClass:"info-item"},[a("span",{staticClass:"item-title"},[t._v("房间划分方式")]),t._v(" "),a("div",{staticClass:"info-options"},t._l(t.batchSetting.divideMethodData,function(e,l){return"sex"!==e.id?a("span",{key:l,on:{click:function(a){return t._setValue(e)}}},[a("i",{staticClass:"maticon",domProps:{innerHTML:t._s(t.icons(t.batchSetting.defaultValue[e.id]?"check_box":"check_box_outline_blank"))}}),t._v(t._s(e.name)+"\n          ")]):a("span",{staticStyle:{cursor:"not-allowed"}},[a("i",{staticClass:"maticon",domProps:{innerHTML:t._s(t.icons("check_box"))}}),t._v(t._s(e.name)+"\n          ")])}),0)]),t._v(" "),a("label",{staticClass:"modal-tips"},[t._v("举例：如勾选性别、学院、系别、则同一性别、学院、系别的学生将在同一片区选房")]),t._v(" "),a("label",{staticClass:"modal-tips"},[t._v(t._s(t.batchSetting.executiveDistributor))])]),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(e){t.batchSetting.showAddModal=!1}}},[t._v("取消")]),t._v(" "),a("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:t._submit}},[t._v("确定")])])]),t._v(" "),a("v-modal",{attrs:{show:t.addStudentSetting.showAddModal,effect:"fade",width:"446"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("新增学生")])]),t._v(" "),a("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},[a("div",{staticClass:"form-group student-search"},[a("label",{staticClass:"input-label"},[t._v("学生检索")]),t._v(" "),t.addStudentSetting.isShowSearch?a("detect",{staticClass:"search-user",attrs:{url:"/api/apartment/users/searchResults",placeholder:"用户姓名或学工号"},on:{afterSelected:t.userSelected}}):a("div",{staticStyle:{display:"inline-block"}},[a("div",{staticClass:"user-info"},[t._v("\n            "+t._s(t.addStudentSetting.userInfo)+"\n            "),a("i",{staticClass:"maticon",domProps:{innerHTML:t._s(t.icons("edit"))},on:{click:t.changeUserSearch}},[t._v("edit")])])])],1)]),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(e){t.addStudentSetting.showAddModal=!1}}},[t._v("取消")]),t._v(" "),a("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:t._submitAddStudnet}},[t._v("确定")])])]),t._v(" "),a("v-modal",{attrs:{show:t.allocation.showAllocationMoal,effect:"fade",width:"340"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("分配")])]),t._v(" "),a("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},t._l(t.allocation.layout,function(e,l){return a("div",{key:l,staticClass:"form-group"},[a("label",{staticClass:"input-label allocation-modal-label"},[t._v(t._s(e.title))]),t._v(" "),a("v-select",{staticClass:"btn-block form-select-style",attrs:{value:t.allocation.defaultValue[e.id],options:t.allocation.options[e.id],"options-value":"value","options-label":"label",search:"","close-on-select":""},on:{afterSelected:function(a){return t._allocationSelected(a,e)}}})],1)}),0),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(e){t.allocation.showAllocationMoal=!1}}},[t._v("取消")]),t._v(" "),a("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:t._submitAllocation}},[t._v("确定")])])])],1)},staticRenderFns:[]};var o=a("C7Lr")(i,s,!1,function(t){a("qLSo")},null,null);e.default=o.exports},qLSo:function(t,e){}});
webpackJsonp([55],{IHPB:function(t,e,a){"use strict";e.__esModule=!0;var s,i=a("kfHR"),n=(s=i)&&s.__esModule?s:{default:s};e.default=function(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return(0,n.default)(t)}},nICJ:function(t,e){},npQh:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("a3Yh"),i=a.n(s),n=a("IHPB"),r=a.n(n),o=a("C331"),l=a("y0ro"),c={name:"signature",data:function(){return{points:[],canvasTxt:null,startX:0,startY:0,moveY:0,moveX:0,endY:0,endX:0,w:null,h:null,isDown:!1}},created:function(){},mounted:function(){var t=this.$refs.canvasF;t.height=this.$refs.canvasHW.offsetHeight-60,t.width=this.$refs.canvasHW.offsetWidth-10,this.canvasTxt=t.getContext("2d")},methods:{backHome:function(){window.history.back()},mouseDown:function(t){(t=t||event).preventDefault();var e={x:t.offsetX,y:t.offsetY};this.startX=e.x,this.startY=e.y,this.canvasTxt.beginPath(),this.canvasTxt.moveTo(this.startX,this.startY),this.canvasTxt.lineTo(e.x,e.y),this.canvasTxt.stroke(),this.canvasTxt.closePath(),this.points.push(e),this.isDown=!0},touchStart:function(t){if((t=t||event).preventDefault(),1==t.touches.length){var e={x:t.targetTouches[0].clientX,y:t.targetTouches[0].clientY-48};this.startX=e.x,this.startY=e.y,this.canvasTxt.beginPath(),this.canvasTxt.moveTo(this.startX,this.startY),this.canvasTxt.lineTo(e.x,e.y),this.canvasTxt.stroke(),this.canvasTxt.closePath(),this.points.push(e)}},mouseMove:function(t){if((t=t||event).preventDefault(),this.isDown){var e={x:t.offsetX,y:t.offsetY};this.moveY=e.y,this.moveX=e.x,this.canvasTxt.beginPath(),this.canvasTxt.moveTo(this.startX,this.startY),this.canvasTxt.lineTo(e.x,e.y),this.canvasTxt.stroke(),this.canvasTxt.closePath(),this.startY=e.y,this.startX=e.x,this.points.push(e)}},touchMove:function(t){if((t=t||event).preventDefault(),1==t.touches.length){var e={x:t.targetTouches[0].clientX,y:t.targetTouches[0].clientY-48};this.moveY=e.y,this.moveX=e.x,this.canvasTxt.beginPath(),this.canvasTxt.moveTo(this.startX,this.startY),this.canvasTxt.lineTo(e.x,e.y),this.canvasTxt.stroke(),this.canvasTxt.closePath(),this.startY=e.y,this.startX=e.x,this.points.push(e)}},mouseUp:function(t){(t=t||event).preventDefault();var e={x:t.offsetX,y:t.offsetY};this.canvasTxt.beginPath(),this.canvasTxt.moveTo(this.startX,this.startY),this.canvasTxt.lineTo(e.x,e.y),this.canvasTxt.stroke(),this.canvasTxt.closePath(),this.points.push(e),this.points.push({x:-1,y:-1}),this.isDown=!1},touchEnd:function(t){if((t=t||event).preventDefault(),1==t.touches.length){var e={x:t.targetTouches[0].clientX,y:t.targetTouches[0].clientY-48};this.canvasTxt.beginPath(),this.canvasTxt.moveTo(this.startX,this.startY),this.canvasTxt.lineTo(e.x,e.y),this.canvasTxt.stroke(),this.canvasTxt.closePath(),this.points.push(e),this.points.push({x:-1,y:-1})}},overwrite:function(){this.canvasTxt.clearRect(0,0,this.$refs.canvasF.width,this.$refs.canvasF.height),this.points=[]},dataURLtoFile:function(t,e){for(var a=t.split(","),s=a[0].match(/:(.*?);/)[1],i=atob(a[1]),n=i.length,r=new Uint8Array(n);n--;)r[n]=i.charCodeAt(n);return new File([r],e,{type:s})},getFile:function(){var t=this.$refs.canvasF.toDataURL("image/jpg");return this.dataURLtoFile(t,"sign")},getBase64:function(){return this.$refs.canvasF.toDataURL("image/jpg")}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"signatureBox"},[e("div",{ref:"canvasHW",staticClass:"canvasBox"},[e("canvas",{ref:"canvasF",on:{touchstart:this.touchStart,touchmove:this.touchMove,touchend:this.touchEnd,mousedown:this.mouseDown,mousemove:this.mouseMove,mouseup:this.mouseUp}})])])},staticRenderFns:[]};var u=a("C7Lr")(c,d,!1,function(t){a("zxL3")},"data-v-3e4006ea",null).exports,h=(l.a,{mixins:[l.a],components:{sign:u},data:function(){return{showSign:!1,fileUrl:"/table-data/archives/getBaseInfo",fileColumns:[],timestamp:"?timestamp=",fileUserNo:"",showDialogStatus:!1,orgDepartmentList:[],fileAddList:[],positionList:[],orgDepartmentId:"",selectOrgDepartment:{},selectPosition:{},positionId:"",isEdit:!1,showDetailStatus:!1,dialogList:[],unitList:[],addParams:{studentName:"",noticeNo:"",land:"",examNo:"",studentNo:"",province:"",city:"",area:"",collegeName:"",barCode:"",archivesReceiveTime:"",archivesReceiveUnit:"",archivesReceiveMemberName:"",archivesReceiveMemberNo:"",instructorName:"",instructorId:"",archivesCome:""},signParams:{date:"",unit:"",receiverNo:""},addOptions:[{name:"姓名",type:"input",value:"studentName",require:!1,noEdit:!0},{name:"通知书单号",type:"input",value:"noticeNo",require:!1,noEdit:!0},{name:"生源地",type:"input",value:"land",require:!1,noEdit:!0},{name:"考生号",type:"input",value:"examNo",require:!1,noEdit:!0},{name:"学号",type:"input",value:"studentNo",require:!1,noEdit:!0},{name:"院系",type:"input",value:"collegeName",require:!1,noEdit:!0},{name:"辅导员",type:"input",value:"instructorName",placeholder:"检测姓名",label:"instructorName",require:!1,noEdit:!0,url:"api/archives/queryInstructor"},{name:"档案接收日期",type:"date",value:"archivesReceiveTime",require:!1},{name:"档案接收部门",type:"detect",value:"archivesReceiveUnit",placeholder:"检测部门名称",require:!1,url:"api/archives/queryUnit"},{name:"档案接收人",type:"detect",value:"archivesReceiveMemberNo",placeholder:"检测姓名",label:"archivesReceiveMemberName",require:!1,url:"api/archives/queryArchiveReceiver"},{name:"EMS单号",type:"input",value:"emsNumber",require:!1,noEdit:!1},{name:"院系档案接收日期",type:"date",value:"collegeArchivesDate",require:!1}],signOptions:[{name:"档案接收部门",type:"select",value:"unit",placeholder:"检测部门名称",require:!1},{name:"院系档案接收日期",type:"date",value:"date",require:!1},{name:"档案接收人",type:"detect",value:"receiverNo",placeholder:"检测姓名",require:!1,url:"api/archives/queryArchiveReceiver"}],lang:"zh-cn",beginTime:"",checkRows:[],endTime:""}},props:{selectItem:{default:{}},orgM:{default:!1}},created:function(){var t=this,e=localStorage.getItem("lang"),a=this;this.fileColumns=[{id:"archivesNo",title:this.translate.archiveNo,className:"text-left",hidden:!1,search:{type:"input",data:{placeholder:""}},formatter:function(t){return"招生办"===t.archivesReceivedUnit?t.archivesNo:""}},{id:"studentName",title:this.translate.name,className:"text-left",hidden:!1,search:{type:"input",data:{placeholder:""}}},{id:"studentNo",title:this.translate.studentId,className:"text-left",hidden:!1,search:{type:"input",data:{placeholder:""}}},{id:"collegeName",title:this.translate.college,className:"text-left",hidden:!1,search:{type:"input",data:{placeholder:""}}},{id:"noticeNo",title:"通知书单号",className:"text-left",hidden:!1,search:{type:"input",data:{placeholder:""}}},{id:"land",title:"生源地",className:"text-left",hidden:!0,search:{type:"input",data:{placeholder:""}}},{id:"examNo",title:"考生号",className:"text-left",hidden:!1,search:{type:"input",data:{placeholder:""}}},{id:"archivesStatus",title:"档案状态",className:"text-left",hidden:!1,search:{type:"select",data:{options:[{value:"已转交",label:"已转交"},{value:"未转交",label:"未转交"}],optionsLabel:"label",optionsValue:"value",placeholder:""}}},{id:"archivesReceiveTime",title:"档案接收日期",className:"text-left",hidden:!1},{id:"archivesReceiveUnit",title:"档案接收部门",className:"text-left",hidden:!0,search:{type:"select",data:{url:"/api/archives/queryUnit",optionsLabel:"unitName",optionsValue:"unitName",placeholder:""}}},{id:"archivesReceiveMemberName",title:"档案接收人",className:"text-left",hidden:!0,search:{type:"input",data:{placeholder:""}}},{id:"collegeArchivesDate",title:"院系档案接收日期",className:"text-left",hidden:!0},{id:"instructorName",title:"辅导员",className:"text-left",hidden:!0,search:{type:"input",data:{placeholder:""}}},{id:"emsNumber",title:"EMS单号",className:"text-left",hidden:!0,search:{type:"input",data:{placeholder:""}}},{id:"opt",title:this.translate.opt,className:"text-center",width:"230px",hidden:!1,formatter:function(t){return[{tag:"a",text:a.translate.edit,className:"opt-btn",callback:function(t,e){a.editFile(t)}}]}}],Object(o.g)(e)&&(this.lang=e),this.importParams={parentPageTitle:"",downloadTemplateUrl:"/sc/organizations/"+this.selectItem.organizationId+"/files/batch/import/template",downloadErrorTemplateUrl:"/sc/organizations/"+this.selectItem.organizationId+"/files/batch/import/error",checkTemplateUrl:"/sc/organizations/"+this.selectItem.organizationId+"/files/batch/import/check",templateName:"批量导入模板",importBtnType:[{url:"/sc/organizations/"+this.selectItem.organizationId+"/files/batch/import",method:"post",isShowBtn:!0,name:"增量导入",success:function(e){t.timestamp="?timestamp="+(new Date).getTime(),t.curRoute="allStaff"}}]},this.getDepartmentList()},methods:{_showDialog:function(){var t=this;if(this.showDialogStatus)this.showDialogStatus=!1;else{var e="api/archives/getLog?userNo="+this.addParams.studentNo;Object(o.d)(e).then(function(e){if(e.state){t.showDialogStatus=!0;var a=[].concat([{name:"档案接收人",value:"archivesReceiveMemberName"},{name:"辅导员",value:"instructorName"}],r()(t.addOptions));t.dialogList=e.data.map(function(t){return a.forEach(function(e){-1!==t.content.indexOf(e.value)&&(t.content=t.content.replace(e.value,e.name))}),t})}})}},getDepartmentList:function(){var t=this;Object(o.d)("api/archives/queryUnit").then(function(e){t.unitList=e.data.map(function(t){return{text:t.unitName,id:t.unitName}})})},overwrite:function(){this.$refs.mySign.overwrite()},afterSignDetect:function(t){this.signParams.receiverName=t.name,this.signParams.receiverNo=t.userNo},submitSign:function(){var t,e=this,a=this.$refs.mySign.getFile();this.signParams.image=a,this.signParams.userNo=this.checkRows.map(function(t){return t.studentNo});var s=new FormData;for(var n in this.signOptions)if(!this.signParams[this.signOptions[n].value])return void this.$toast(this.signOptions[n].name+"不能为空");for(var n in this.signParams)s.append(n,this.signParams[n]);Object(o.e)((t={url:"api/archives/sign",dataType:"json",processData:!1,contentType:!1,type:"post",data:s},i()(t,"processData",!1),i()(t,"success",function(t){t.state?(e.$toast("签收成功!"),e.showSign=!1,e.timestamp="?timestamp="+(new Date).getTime()):e.$toast(t.message)}),t))},submitAddFile:function(){var t=this,e="api/archives/add";if(this.isEdit)e="api/archives/updateArchive";else for(var a in this.addParams.land=this.addParams.province?this.addParams.province:""+this.addParams.city?","+this.addParams.city:""+this.addParams.area?","+this.addParams.area:"",this.addOptions)if(this.addOptions[a].require&&!this.addParams[this.addOptions[a].value])return void this.$toast(this.addOptions[a].name+"不能为空!");this.addParams.emsNo=this.addParams.emsNumber,this.addParams.archivesReceivedUnit=this.addParams.archivesReceiveUnit,Object(o.d)(e,this.addParams).then(function(e){e.state?(t.showDetailStatus=!1,t.timestamp="?timestamp="+(new Date).getTime(),t.$toast(t.isEdit?"编辑成功!":"新增成功!")):t.$toast(e.message)})},afterDetect:function(t,e){-1!==e.value.indexOf("Id")?(this.addParams[e.value]=t.userId,this.addParams[e.label]=t.name):-1!==e.value.indexOf("No")?(this.addParams[e.value]=t.userNo,this.addParams[e.label]=t.name):-1!==e.value.indexOf("archivesReceiveUnit")&&(this.addParams[e.value]=t.unitName)},getSelectOptions:function(t){return this.unitList},getAddressOptions:function(t,e,a){return"province"===t?this.provinceList:"city"===t?this._getCityList(e):"area"===t?this._getAreaList(e,a):void 0},afterChecked:function(t){this.checkRows=t},editFile:function(t){if(this.addParams=t,this.addParams.land){var e=t.land.replace("，",",").split(",");this.addParams.province=e[0],this.getAddressOptions("city",this.addParams.province).length?(this.addParams.city=e[1]?e[1]:"",this.addParams.area=e[2]?e[2]:""):this.addParams.province=""}this.isEdit=!0,this.showDetailStatus=!0},getSelect:function(t,e){for(var a in this[e])if(this[e][a].id==t)return this[e][a];return{text:"",id:""}},_backParentPage:function(){this.$parent.showFile=!1,this.$parent.pageSign="organizationList"},_showDetailStatus:function(){this.showDetailStatus=!0,this.isEdit=!1},_batchSignFile:function(){this.checkRows.length?this.showSign=!0:this.$toast("请选择批量签收的档案!")}},computed:{translate:function(){return Object(o.g)(this.lang).fileManage}}}),v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.showDetailStatus?a("div",{staticClass:"detail_wrap"},[a("label",{staticClass:"back pull-left box_flex flex_between",staticStyle:{padding:"0",width:"100%"}},[a("div",{on:{click:function(e){t.showDetailStatus=t.showDialogStatus=!1}}},[a("i",{staticClass:"maticon pull-left",domProps:{innerHTML:t._s(t.icons("arrow_back"))}},[t._v("arrow_back")]),t._v(" "),a("span",[t._v("返回")])]),t._v(" "),a("div",{staticClass:"opt-btn btn",staticStyle:{color:"#298df7"},on:{click:t._showDialog}},[t._v("日志")])]),t._v(" "),a("div",{staticClass:"form-wrap box_flex align_center"},[t._l(t.addOptions,function(e,s){return a("div",{key:s,staticClass:"form-group box_flex align_center"},[a("div",{staticClass:"label"},[a("span",[t._v(t._s(e.name)+":")])]),t._v(" "),"input"==e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.addParams[e.value],expression:"addParams[item.value]"}],staticClass:"form-control search-input organization-input",attrs:{type:"text",disabled:t.isEdit&&e.noEdit},domProps:{value:t.addParams[e.value]},on:{input:function(a){a.target.composing||t.$set(t.addParams,e.value,a.target.value)}}}):t._e(),t._v(" "),"address"==e.type?a("v-select",{attrs:{options:t.getAddressOptions("province"),search:!0,"options-value":"name",disabled:t.isEdit&&e.noEdit,"options-label":"name","data-index":s},model:{value:t.addParams.province,callback:function(e){t.$set(t.addParams,"province",e)},expression:"addParams['province']"}}):t._e(),t._v(" "),t.addParams.province&&"address"==e.type?a("v-select",{attrs:{options:t.getAddressOptions("city",t.addParams.province),search:!0,"options-value":"name","options-label":"name"},model:{value:t.addParams.city,callback:function(e){t.$set(t.addParams,"city",e)},expression:"addParams['city']"}}):t._e(),t._v(" "),t.addParams.city&&"address"==e.type?a("v-select",{attrs:{options:t.getAddressOptions("area",t.addParams.city,t.addParams.province),search:!0,"options-value":"name","options-label":"name"},model:{value:t.addParams.area,callback:function(e){t.$set(t.addParams,"area",e)},expression:"addParams['area']"}}):t._e(),t._v(" "),"detect"==e.type?a("detect",{attrs:{url:e.url,searchVal:t.addParams[e.label],placeholder:e.placeholder},on:{afterSelected:function(a){t.afterDetect(a,e)}}}):t._e(),t._v(" "),"select"==e.type?a("v-select",{attrs:{options:t.getSelectOptions(e.value),"options-value":"id","options-label":"text","close-on-select":"",justify:""},model:{value:t.addParams[e.value],callback:function(a){t.$set(t.addParams,e.value,a)},expression:"addParams[item.value]"}}):t._e(),t._v(" "),"date"==e.type?a("v-datepicker",{model:{value:t.addParams[e.value],callback:function(a){t.$set(t.addParams,e.value,a)},expression:"addParams[item.value]"}}):t._e()],1)}),t._v(" "),a("div",{staticClass:"box_flex flex_center",staticStyle:{position:"absolute",bottom:"50px",width:"100%","padding-right":"200px"}},[a("button",{staticClass:"btn submit-btn",on:{click:t.submitAddFile}},[t._v("保存")])])],2),t._v(" "),t.showDialogStatus?a("div",{staticClass:"dialog_wrap"},t._l(t.dialogList,function(e,s){return a("div",{key:s},[a("p",{staticClass:"gray"},[t._v(t._s(e.updateTime))]),t._v(" "),a("p",[t._v(t._s(e.content))]),t._v(" "),e.imageName?a("div",[a("p",{staticClass:"gray"},[t._v("更新了档案签字")]),t._v(" "),a("img",{attrs:{src:"downloads/archives/getLogImage?fileName="+e.imageName,alt:""}})]):t._e()])}),0):t._e()]):a("div",{staticClass:"file"},[a("v-table",{ref:"fileTable",attrs:{title:"档案管理",url:t.fileUrl+t.timestamp,columnsControl:!0,pagesize:"10",idField:"id",columns:t.fileColumns,multiple:"true",order:!0,search:!1},on:{afterChecked:t.afterChecked}},[a("div",{staticClass:"btn-group pull-right",attrs:{slot:"btn-group",role:"group"},slot:"btn-group"},[a("button",{staticClass:"btn batch-add-btn btn-bgColor-style clearBtnBorder",attrs:{type:"button"},on:{click:t._batchSignFile}},[t._v(t._s(t.translate.batch)+t._s(t.translate.sign)+t._s(t.translate.file))])])]),t._v(" "),a("v-modal",{staticClass:"organization-modal",attrs:{show:t.showSign,effect:"fade",width:"566"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("签名")])]),t._v(" "),a("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},[a("div",{staticClass:"form-wrap box_flex align_center"},[t._l(t.signOptions,function(e,s){return a("div",{key:s,staticClass:"form-group box_flex align_center"},[a("div",{staticClass:"label",class:{require:e.require}},[a("span",[t._v(t._s(e.name)+":")])]),t._v(" "),"input"==e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.signParams[e.value],expression:"signParams[item.value]"}],staticClass:"form-control search-input organization-input",attrs:{type:"text"},domProps:{value:t.signParams[e.value]},on:{input:function(a){a.target.composing||t.$set(t.signParams,e.value,a.target.value)}}}):t._e(),t._v(" "),"detect"==e.type?a("detect",{attrs:{url:e.url,placeholder:e.placeholder},on:{afterSelected:function(a){t.afterSignDetect(a,e.value)}}}):t._e(),t._v(" "),"select"==e.type?a("v-select",{attrs:{options:t.getSelectOptions(e.value),"options-value":"id","options-label":"text","close-on-select":"",justify:""},model:{value:t.signParams[e.value],callback:function(a){t.$set(t.signParams,e.value,a)},expression:"signParams[item.value]"}}):t._e(),t._v(" "),"date"==e.type?a("v-datepicker",{model:{value:t.signParams[e.value],callback:function(a){t.$set(t.signParams,e.value,a)},expression:"signParams[item.value]"}}):t._e()],1)}),t._v(" "),a("div",{staticClass:"form-group box_flex"},[a("div",{staticClass:"label"},[a("span",[t._v("档案接收人签字:")])]),t._v(" "),a("div",{staticClass:"sign_wrap"},[a("sign",{ref:"mySign"})],1)])],2)]),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:t.overwrite}},[t._v("清除签字")]),t._v(" "),a("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(e){t.showSign=!1}}},[t._v(t._s(t.translate.cancel))]),t._v(" "),a("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:t.submitSign}},[t._v(t._s(t.translate.confirm))])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"importPage"===t.curRoute,expression:"curRoute === 'importPage'"}],staticClass:"importPageClass"},[a("v-import",t._b({on:{backParentPage:function(e){t.curRoute="allStaff"}}},"v-import",t.importParams,!1))],1)],1)},staticRenderFns:[]};var m=a("C7Lr")(h,v,!1,function(t){a("nICJ")},"data-v-0c9be80b",null);e.default=m.exports},zxL3:function(t,e){}});
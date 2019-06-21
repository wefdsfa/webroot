webpackJsonp([123],{"b+MH":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("wHeh"),i("W14+");var a=i("C331"),n={props:{account:{default:null}},created:function(){var t=this,e=localStorage.getItem("lang");Object(a.f)(e)&&(this.lang=e),Object(a.d)({url:"/api/apartment/dicts?typeName=校区",type:"get",success:function(e){e.state?e.data.forEach(function(e){t.dormitory.options.campus.push({label:e.label,value:e.value})}):t.toast(e.message)}}),this._initColumns()},data:function(){return{result:{numberOfAccommodation:"",numberOfIn:"",numberOfOut:""},dormitory:{layout:[{title:"校区:",id:"campus"},{title:"园区:",id:"zone"},{title:"宿舍楼:",id:"building"}],options:{campus:[],zone:[],building:[]},defaultValue:{campus:"",zone:"",building:""}},inOutChangeRecordUrl:"/table-data/apartment/in/out/accommodation/record/list",optRecordUrl:"/table-data/apartment/operation/record/list",columnsInOutChangeRecord:[],columnsOptRecord:[],optRecordColumns:[],inOutChangeRecordColumns:[],isSelect:"inOutChangeRecord",isShowPathNav:!1,tabs:[{id:"inOutChangeRecord",label:"入退调记录"},{id:"optRecord",label:"操作记录"}],curRoute:"inOutChangeRecord",searchSelectOptions:{operation:[{label:"入住",value:"CHECK_IN"},{label:"退宿",value:"RETIREMENT"},{label:"调宿",value:"ACCOMMODATION"}],operatorType:[{label:"管理员",value:"APARTMENT_MANAGER"},{label:"学院",value:"COLLEGE"},{label:"学生",value:"STUDENT"}]},isShowSearch:!0,editTime:{inOutChangeStartTime:"",inOutChangeEndTime:"",optStartTime:"",optEndTime:""},timeStamp:"",lang:"zh-cn"}},computed:{translate:function(){return Object(a.f)(this.lang).log}},methods:{_optionsSelected:function(t,e){var i=this;if(this.dormitory.defaultValue[e.id]=t.value,""===t.value);else if("campus"===e.id)this.dormitory.defaultValue.campus.split(",").length>1?(this.dormitory.options.zone.splice(0,this.dormitory.options.zone.length),this.dormitory.options.building.splice(0,this.dormitory.options.building.length),this.dormitory.defaultValue.zone="",this.dormitory.defaultValue.building=""):this.$nextTick(function(){i._getZonesData(i.dormitory.defaultValue[e.id])});else if("zone"===e.id){this.dormitory.defaultValue.zone.split(",").length>1?(this.dormitory.options.building.splice(0,this.dormitory.options.building.length),this.dormitory.defaultValue.building=""):this.$nextTick(function(){i._getBuildingData(i.dormitory.defaultValue[e.id])})}},_initColumns:function(){var t=this;this.columnsInOutChangeRecord=[{id:"userNo",title:this.translate.userNo,width:150,className:"text-left",hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!1}}},{id:"name",title:this.translate.name,width:80,className:"text-left",hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!1}}},{id:"dormitory",title:this.translate.dormitory,width:250,className:"text-left",hidden:!1,formatter:function(t){return t.dormitory.campus+t.dormitory.zone+t.dormitory.buildName+"-"+t.dormitory.room}},{id:"operation",title:this.translate.operation,width:70,className:"text-left",hidden:!1,search:{type:"multiSelect",data:{options:this.searchSelectOptions.operation,optionsLabel:"label",optionsValue:"value"}}},{id:"operatorType",title:this.translate.operatorType,width:100,className:"text-left",hidden:!1,search:{type:"multiSelect",data:{options:this.searchSelectOptions.operatorType,optionsLabel:"label",optionsValue:"value"}}},{id:"operatorUserNo",title:this.translate.operatorUserNo,width:150,className:"text-left",hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!1}}},{id:"operatorName",title:this.translate.operatorName,width:80,className:"text-left",hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!1}}},{id:"operationTime",title:this.translate.operationTime,width:150,className:"text-left",hidden:!1},{id:"ip",title:this.translate.ip,className:"text-left",width:100,hidden:!1,formatter:function(e){t.result.numberOfAccommodation=e.numberOfAccommodation,t.result.numberOfIn=e.numberOfIn,t.result.numberOfOut=e.numberOfOut}}],this.columnsOptRecord=[{id:"operation",title:this.translate.operation,width:300,className:"text-left",hidden:!1},{id:"fileName",title:this.translate.fileName,width:100,className:"text-left",hidden:!1},{id:"operatorType",title:this.translate.operatorType,width:100,className:"text-left",hidden:!1,search:{type:"select",data:{options:this.searchSelectOptions.operatorType,optionsLabel:"label",optionsValue:"value"}}},{id:"userNo",title:this.translate.operatorUserNo,width:150,className:"text-left",hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!1}}},{id:"name",title:this.translate.operatorName,width:80,className:"text-left",hidden:!1,search:{type:"input",data:{placeholer:"",autoFocus:!1}}},{id:"operationTime",title:this.translate.operationTime,width:150,className:"text-left",hidden:!1},{id:"ip",title:this.translate.ip,className:"text-left",width:100,hidden:!1,formatter:function(e){t.result.numberOfAccommodation=e.numberOfAccommodation,t.result.numberOfIn=e.numberOfIn,t.result.numberOfOut=e.numberOfOut}}],"inOutChangeRecord"===this.isSelect?this.inOutChangeRecordColumns=this.columnsInOutChangeRecord:this.optRecordColumns=this.columnsOptRecord},changeTab:function(t){this.isSelect=t.id,this.curRoute=t.id,this._initColumns()},_getZonesData:function(t){var e=this;Object(a.d)({url:"/api/apartment/zones/getByCampuses/"+t,type:"get",success:function(t){t.state?(e.dormitory.options.zone.splice(0,e.dormitory.options.zone.length),t.data&&t.data.forEach(function(t){e.dormitory.options.zone.push({label:t.name,value:t.zoneId.toString()})})):e.$toast(t.message)}})},_getBuildingData:function(t){var e=this;Object(a.d)({url:"/api/apartment/buildings/list/"+t,type:"get",success:function(t){t.state?(e.buildingData=t.data,e.dormitory.options.building.splice(0,e.dormitory.options.building.length),t.data&&t.data.forEach(function(t){e.dormitory.options.building.push({label:t.name,value:t.buildingId.toString()})})):e.$toast(t.message)}})},_dateSelected:function(t,e){var i=this,a=this.editTime.inOutChangeStartTime,n=this.editTime.inOutChangeEndTime,o=this.editTime.optStartTime,s=this.editTime.optEndTime;if("inOutChangeStartTime"===e)if(n){if(new Date(t.value).getTime()-new Date(n).getTime()>0)return this.$nextTick(function(){i.toast("开始时间要在结束时间之前"),i.editTime.inOutChangeStartTime=""}),!1;this.editTime.inOutChangeStartTime=t.value}else this.editTime.inOutChangeStartTime=t.value;if("inOutChangeEndTime"===e)if(a){if(new Date(t.value).getTime()-new Date(a).getTime()<0)return this.$nextTick(function(){i.toast("结束时间要在开始时间之后"),i.editTime.inOutChangeEndTime=""}),!1;this.editTime.inOutChangeEndTime=t.value}else this.editTime.inOutChangeEndTime=t.value;if("optStartTime"===e)if(s){if(new Date(t.value).getTime()-new Date(s).getTime()>0)return this.$nextTick(function(){i.toast("开始时间要在结束时间之前"),i.editTime.optStartTime=""}),!1;this.editTime.optStartTime=t.value}else this.editTime.optStartTime=t.value;if("optEndTime"===e)if(o){if(new Date(t.value).getTime()-new Date(o).getTime()<0)return this.$nextTick(function(){i.toast("结束时间要在开始时间之后"),i.editTime.optEndTime=""}),!1;this.editTime.optEndTime=t.value}else this.editTime.optEndTime=t.value},_inOutChangeReset:function(){this.dormitory.defaultValue.campus="",this.dormitory.defaultValue.zone="",this.dormitory.defaultValue.building="",this.editTime.inOutChangeEndTime="",this.editTime.inOutChangeStartTime="",this.dormitory.options.zone.splice(0,this.dormitory.options.zone.length),this.dormitory.options.building.splice(0,this.dormitory.options.building.length),this.inOutChangeRecordUrl="/table-data/apartment/in/out/accommodation/record/list"},_inOutChangeSearch:function(){this.inOutChangeRecordUrl="/table-data/apartment/in/out/accommodation/record/list?campus="+this.dormitory.defaultValue.campus+"&zone="+this.dormitory.defaultValue.zone+"&building="+this.dormitory.defaultValue.building+"&startTime="+this.editTime.inOutChangeStartTime+"&endTime="+this.editTime.inOutChangeEndTime},_optReset:function(){this.editTime.optEndTime="",this.editTime.optStartTime="",this.optRecordUrl="/table-data/apartment/operation/record/list"},_optSearch:function(){this.optRecordUrl="/table-data/apartment/operation/record/list?startTime="+this.editTime.optStartTime+"&endTime="+this.editTime.optEndTime}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-fluid",attrs:{id:"log"}},[i("div",{staticClass:"row text-center"},[i("ul",{staticClass:"nav nav-tabs optLog-tab",attrs:{id:"myTab"}},t._l(t.tabs,function(e,a){return i("li",{key:a,class:{active:t.isSelect==e.id},on:{click:function(i){return t.changeTab(e)}}},[i("a",[t._v(t._s(t.translate.logList[e.id]))])])}),0)]),t._v(" "),i("div",{staticClass:"content row"},[i("div",{directives:[{name:"show",rawName:"v-show",value:"inOutChangeRecord"===t.curRoute,expression:"curRoute === 'inOutChangeRecord'"}]},[i("br"),t._v(" "),t._l(t.dormitory.layout,function(e,a){return i("div",{key:a,staticClass:"form-group col-md-4"},[i("label",{staticClass:"input-label"},[t._v(t._s(e.title))]),t._v(" "),i("v-select",{staticClass:"btn-block form-select-style",attrs:{multiple:!0,value:t.dormitory.defaultValue[e.id],options:t.dormitory.options[e.id],"options-value":"value","options-label":"label",search:""},on:{afterSelected:function(i){return t._optionsSelected(i,e)}}})],1)}),t._v(" "),i("div",{staticClass:"form-group col-md-4"},[i("label",{staticClass:"input-label"},[t._v("开始"+t._s(t.translate.time)+":")]),t._v(" "),i("v-datepicker",{staticClass:"btn-block form-datepicker-style",attrs:{clearButton:!1,showTime:!1},on:{daySelected:function(e){return t._dateSelected(e,"inOutChangeStartTime")}},model:{value:t.editTime.inOutChangeStartTime,callback:function(e){t.$set(t.editTime,"inOutChangeStartTime",e)},expression:"editTime.inOutChangeStartTime"}})],1),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"input-label",staticStyle:{"margin-left":"14px"}},[t._v("结束"+t._s(t.translate.time)+":")]),t._v(" "),i("v-datepicker",{staticClass:"btn-block form-datepicker-style",attrs:{clearButton:!1,showTime:!1},on:{daySelected:function(e){return t._dateSelected(e,"inOutChangeEndTime")}},model:{value:t.editTime.inOutChangeEndTime,callback:function(e){t.$set(t.editTime,"inOutChangeEndTime",e)},expression:"editTime.inOutChangeEndTime"}}),t._v(" "),i("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:t._inOutChangeReset}},[t._v(t._s(t.translate.reset))]),t._v(" "),i("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:t._inOutChangeSearch}},[t._v(t._s(t.translate.search))])],1),t._v(" "),i("div",{staticClass:"form-group",staticStyle:{"padding-left":"15px"}},[i("label",{staticClass:"input-label"},[t._v("结果：入住")]),t._v(" "),i("label",{staticClass:"class-name-text"},[t._v(t._s(t.result.numberOfIn))]),t._v(" "),i("label",{staticClass:"input-label"},[t._v("人,退宿")]),t._v(" "),i("label",{staticClass:"class-name-text"},[t._v(t._s(t.result.numberOfOut))]),t._v(" "),i("label",{staticClass:"input-label"},[t._v("人,调宿")]),t._v(" "),i("label",{staticClass:"class-name-text"},[t._v(t._s(t.result.numberOfAccommodation))]),t._v(" "),i("label",{staticClass:"input-label"},[t._v("人")])]),t._v(" "),i("v-table",{key:1,ref:"inOutChangeRecordTable",attrs:{url:t.inOutChangeRecordUrl,pagesize:"10",idField:"id",columns:t.inOutChangeRecordColumns,order:!0,search:!0},on:{columnExchanged:t._columnExchanged}})],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:"optRecord"===t.curRoute,expression:"curRoute === 'optRecord'"}]},[i("br"),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"input-label"},[t._v("    "+t._s(t.translate.time)+":")]),t._v(" "),i("v-datepicker",{staticClass:"btn-block form-datepicker-style",attrs:{clearButton:!1,showTime:!1},on:{daySelected:function(e){return t._dateSelected(e,"optStartTime")}},model:{value:t.editTime.optStartTime,callback:function(e){t.$set(t.editTime,"optStartTime",e)},expression:"editTime.optStartTime"}}),t._v(" "),i("v-datepicker",{staticClass:"btn-block form-datepicker-style",attrs:{clearButton:!1,showTime:!1},on:{daySelected:function(e){return t._dateSelected(e,"optEndTime")}},model:{value:t.editTime.optEndTime,callback:function(e){t.$set(t.editTime,"optEndTime",e)},expression:"editTime.optEndTime"}}),t._v(" "),i("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:t._optReset}},[t._v(t._s(t.translate.reset))]),t._v(" "),i("button",{staticClass:"btn submit-btn clearBtnBorder",attrs:{type:"button"},on:{click:t._optSearch}},[t._v(t._s(t.translate.search))])],1),t._v(" "),i("v-table",{key:2,ref:"optRecordTable",attrs:{url:t.optRecordUrl,pagesize:"10",idField:"id",columns:t.optRecordColumns,order:!0,search:!0},on:{columnExchanged:t._columnExchanged}})],1)])])},staticRenderFns:[]};var s=i("Mz/3")(n,o,!1,function(t){i("y+5k")},null,null);e.default=s.exports},"y+5k":function(t,e){}});
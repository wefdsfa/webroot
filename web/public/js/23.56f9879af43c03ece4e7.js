webpackJsonp([23],{"5h6W":function(t,e){},"90Sd":function(t,e,a){"use strict";(function(t){a("wHeh"),a("C331")}).call(e,a("W14+"))},Tkgo:function(t,e){},UjdO:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("3SZ7"),s=a.n(i),o=a("wHeh"),l=a("C331"),n=(a("90Sd"),a("WbVT")),r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"dormitory-detail-info"}},[a("div",{},[a("div",{staticClass:"dormitory-page-head"},[a("i",{staticClass:"maticon back-icon-btn pull-left",domProps:{innerHTML:t._s(t.icons("navigate_before"))},on:{click:t._back}},[t._v("navigate_before")])]),t._v(" "),a("div",{staticClass:"dormitory-page-content"},[a("div",{staticClass:"room-number"},[t._v("房间号："+t._s(t.roomNo))]),t._v(" "),a("div",{staticClass:"room-table"},[t._m(0),t._v(" "),a("div",{staticClass:"room-table-content",style:"height:"+t.scrollHeight+"px"},[a("GeminiScrollbar",{style:"height:"+t.scrollHeight+"px",attrs:{scrollX:!1}},t._l(t.dormitoryData,function(e,i){return e.bedAccommodations.length>0?a("div",{key:i,staticClass:"row"},[a("div",{staticClass:"content-td creat-col-md-2"},[t._v(t._s(e.bed.bedNo))]),t._v(" "),a("div",{staticClass:"content-td creat-col-md-4"},t._l(e.bedAccommodations,function(i,s){return"已入住"===i.status?a("div",{key:s,staticClass:"resident-info",class:(s+1)%2==0||1===e.bedAccommodations.length?"prepared":""},[a("div",{staticClass:"field-container"},[a("div",{staticClass:"field-name"},[t._v("姓名：")]),t._v(" "),a("div",{staticClass:"field-name"},[t._v("学号：")]),t._v(" "),a("div",{staticClass:"field-name"},[t._v("学院：")]),t._v(" "),a("div",{staticClass:"field-name"},[t._v("年级：")]),t._v(" "),a("div",{staticClass:"field-name"},[t._v("入住时间：")]),t._v(" "),a("div",{staticClass:"field-name"},[t._v("预计退宿时间：")])]),t._v(" "),a("div",{staticClass:"field-container"},[a("div",{staticClass:"field-content"},[t._v(t._s(i.userName||"-"))]),t._v(" "),a("div",{staticClass:"field-content"},[t._v(t._s(i.userNo||"-"))]),t._v(" "),a("div",{staticClass:"field-content"},[t._v(t._s(i.college||"-"))]),t._v(" "),a("div",{staticClass:"field-content"},[t._v(t._s(i.degree||"-"))]),t._v(" "),a("div",{staticClass:"field-content"},[t._v(t._s(i.inDate||"-"))]),t._v(" "),a("div",{staticClass:"field-content"},[t._v(t._s(i.outDate||"-"))])])]):a("div",{staticClass:"resident-info",class:(s+1)%2==0||1===e.bedAccommodations.length?"prepared":""},[a("div",{staticClass:"field-container"},[a("div",{staticClass:"field-name"},[t._v("姓名：")]),t._v(" "),a("div",{staticClass:"field-name"},[t._v("学号：")]),t._v(" "),a("div",{staticClass:"field-name"},[t._v("学院：")]),t._v(" "),a("div",{staticClass:"field-name"},[t._v("年级：")]),t._v(" "),a("div",{staticClass:"field-name"},[t._v("预计入住时间：")]),t._v(" "),a("div",{staticClass:"field-name"},[t._v("预计退宿时间：")])]),t._v(" "),a("div",{staticClass:"field-container"},[a("div",{staticClass:"field-content"},[t._v(t._s(i.userName||"-"))]),t._v(" "),a("div",{staticClass:"field-content"},[t._v(t._s(i.userNo||"-"))]),t._v(" "),a("div",{staticClass:"field-content"},[t._v(t._s(i.college||"-"))]),t._v(" "),a("div",{staticClass:"field-content"},[t._v(t._s(i.degree||"-"))]),t._v(" "),a("div",{staticClass:"field-content"},[t._v(t._s(i.inDate||"-"))]),t._v(" "),a("div",{staticClass:"field-content"},[t._v(t._s(i.outDate||"-"))])])])}),0),t._v(" "),a("div",{staticClass:"content-td creat-col-md-2"},t._l(e.bedAccommodations,function(i,s){return"已入住"===i.status?a("div",{key:s,staticClass:"reside-tatus",class:(s+1)%2==0||1===e.bedAccommodations.length?"prepared":""},[t._v(t._s(i.status))]):a("div",{staticClass:"reside-tatus",class:(s+1)%2==0||1===e.bedAccommodations.length?"prepared":""},[t._v(t._s(i.status))])}),0),t._v(" "),a("div",{staticClass:"content-td creat-col-md-2 check-record",on:{click:function(a){return t.checkRecord(e.bed.bedId)}}},[a("div",[t._v("查看")])])]):a("div",{staticClass:"row"},[a("div",{staticClass:"content-td creat-col-md-2 empty-bed-style"},[t._v(t._s(e.bed.bedNo))]),t._v(" "),a("div",{staticClass:"content-td creat-col-md-4 empty-bed-style"},[t._v("空床位")]),t._v(" "),a("div",{staticClass:"content-td creat-col-md-2 empty-bed-style"},[t._v(" ")]),t._v(" "),a("div",{staticClass:"content-td creat-col-md-2 check-record",on:{click:function(a){return t.checkRecord(e.bed.bedId)}}},[a("div",[t._v("查看")])])])}),0)],1)])])]),t._v(" "),a("v-modal",{attrs:{show:t.showRecordModal,effect:"fade",width:"700"}},[a("div",{staticClass:"modal-header",attrs:{slot:"modal-header"},slot:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("历史记录")])]),t._v(" "),a("div",{staticClass:"modal-body",attrs:{slot:"modal-body"},slot:"modal-body"},[a("v-table",{attrs:{idField:"id",columns:t.historyRecordColumns,rows:t.historyRecord,order:!0,paginationShow:!1}})],1),t._v(" "),a("div",{staticClass:"modal-footer",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn cancel-btn clearBtnBorder",attrs:{type:"button"},on:{click:function(e){t.showRecordModal=!1}}},[t._v("取消")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"room-table-head"},[e("div",{staticClass:"row"},[e("div",{staticClass:"head-tr creat-col-md-2"},[this._v("床位")]),this._v(" "),e("div",{staticClass:"head-tr creat-col-md-4"},[this._v("居住人信息")]),this._v(" "),e("div",{staticClass:"head-tr creat-col-md-2"},[this._v("状态")]),this._v(" "),e("div",{staticClass:"head-tr creat-col-md-2",staticStyle:{"border-right":"0 solid"}},[this._v("历史记录")])])])}]};var c=function(t){a("Tkgo")},d=a("Mz/3")(n.a,r,!1,c,null,null).exports,u=a("L4f1"),f=a.n(u),h={props:{countData:{default:null}},created:function(){this.timeStamp=Object(l.a)()},data:function(){return{pie:null,option:{},timeStamp:null}},watch:{countData:function(){}},mounted:function(){this.pie=f.a.init(document.getElementById(this.timeStamp+"pie")),this.option={tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},color:["#90D4E7","#91B0E4","#7896D4","#536DFE"],series:[{name:"统计",type:"pie",hoverAnimation:!1,radius:"80%",center:["49%","41%"],data:this.countData,label:{normal:{show:!1}},labelLine:{normal:{show:!1}},itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},this.pie.setOption(this.option,!0)},methods:{}},v={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"c-pie-echarts",attrs:{id:this.timeStamp+"pie"}})},staticRenderFns:[]};var m=a("Mz/3")(h,v,!1,function(t){a("eFPq")},null,null).exports;o.default.component("c-pieEcharts",m),o.default.component("dormitoryDetailInfo",d);o.default.component("c-pieEcharts",m),o.default.component("dormitoryDetailInfo",d);var g={inject:{windowObj:{default:null}},props:{data:{default:null}},data:function(){return{curRouter:"floorPlan",selectSetting:{defaultValue:{college:"",educationLevel:"",dateStart:"",dateEnd:"",resideStatus:"",studentBatch:"",roomUserFor:"",floor:"",color:"",userCount:""},defaultLabel:{college:[],educationLevel:[],floors:[],resideStatus:[],roomUserFor:[],userCount:[]},options:{college:[],educationLevel:[],resideStatus:[{value:"FULL",label:"住满"},{value:"PART",label:"零星空房"},{value:"EMPTY",label:"整间空房"}],floors:[],userCount:[]},searchParameter:{college:[],educationLevel:[],floors:[],resideStatus:[],roomUserFor:[],dateStart:"",dateEnd:"",studentBatch:"",userCount:""},conditionWithColor:[],condition:[],isMarkerColor:!1,floorNumberArray:[],limitationFactor:{college:["resideStatus","studentBatch","roomUserFor"],educationLevel:["resideStatus","studentBatch","roomUserFor"],resideStatus:["college","educationLevel","studentBatch","roomUserFor"],studentBatch:["college","educationLevel","resideStatus","roomUserFor"],roomUserFor:["college","educationLevel","studentBatch","resideStatus","userCount"],userCount:["roomUserFor"]},fieldName:{college:"学院",educationLevel:"培养层次",dateStart:"时间",dateEnd:"时间",resideStatus:"居住情况",studentBatch:"学生批次",roomUserFor:"房间用途",userCount:"居住人数"}},tab:{curSelectedTab:"floorPlan",tabs:[{id:"floorPlan",title:"平面图"},{id:"count",title:"统计图"}]},floorPlanData:{data:[],allInitData:[],extraInfo:{}},count:{curShowPie:"roomCollege",initData:{},echartsData:[],pie:{roomCollege:{index:"1",title:"",isShowPie:!0,data:[]},roomEducationLevel:{index:"2",title:"",isShowPie:!1,data:[]},roomUserFor:{index:"3",title:"",isShowPie:!1,data:[]},roomBatch:{index:"4",title:"",isShowPie:!1,data:[]},roomReside:{index:"5",title:"",isShowPie:!1,data:[]},roomCheckIn:{index:"6",title:"",isShowPie:!1,data:[]},roomRetirement:{index:"7",title:"",isShowPie:!1,data:[]}}},chnNumChar:["零","一","二","三","四","五","六","七","八","九"],chnUnitChar:["","十"],curRoomId:"",curRoomNo:""}},computed:{},created:function(){var t=this;Object(l.d)({url:"/api/apartment/plains/selectOptions/"+this.data.data.buildingId,type:"get",success:function(e){e.state?e.data&&(e.data.dicts&&e.data.dicts.forEach(function(e){t.selectSetting.options.educationLevel.push({value:e.value,label:e.label})}),e.data.units&&e.data.units.forEach(function(e){t.selectSetting.options.college.push({value:e.code,label:e.name})}),e.data.userNums&&e.data.userNums.forEach(function(e){t.selectSetting.options.userCount.push({value:e.id,label:e.title})})):t.$toast(e.message)}}),this._setSelectData(),this._getCountData()},watch:{studentWatch:{deep:!0,handler:function(t,e){}}},methods:{_setSelectData:function(){this.selectSetting.options.floors=[],this.selectSetting.floorNumberArray=[];for(var t=0;t<this.data.data.floor;t++)this.selectSetting.options.floors.push({value:(t+1).toString(),label:this.sectionToChinese(t+1)+"楼"}),this.selectSetting.floorNumberArray.push((t+1).toString());var e=new Date,a=e.getFullYear()+"-"+(e.getMonth()+1<10?"0":"")+(e.getMonth()+1)+"-"+(e.getDate()<10?"0":"")+e.getDate();this.selectSetting.defaultValue.dateStart=a,this.selectSetting.defaultValue.dateEnd=a,this._getFloorOfRooms(this.selectSetting.floorNumberArray,"init")},changeTab:function(t){this.tab.curSelectedTab=t.id},_changeStudentBatch:function(){for(var t in this.selectSetting.limitationFactor.studentBatch){var e=this.selectSetting.limitationFactor.studentBatch[t];this.selectSetting.defaultValue[e]&&(this.$toast("学生批次不能跟"+this.selectSetting.fieldName[e]+"同时搜索"),this.selectSetting.defaultValue.studentBatch="")}},_getBedNumber:function(t,e){return t-e>0?t-e+"个空床":"无空床"},_getProfessionalNumber:function(t){var e=[],a={};t.length>0&&t.forEach(function(t){if(t.grade){var a=t.grade.substring(2,4)+"级"+t.collegeShortName;e.push(a)}});for(var i=0,s=e.length;i<s;i++){var o=e[i];a[o]=a[o]+1||1}return a},_showInfoBlock:function(t,e){t.isShowInfoBlock=!0,e&&(this.floorPlanData.extraInfo=e)},_hideInfoBlock:function(t){t.isShowInfoBlock=!1},_searchSelected:function(t,e){var a=this;this.selectSetting.defaultValue.college&&this.selectSetting.limitationFactor.college.indexOf(e)>=0&&(this.$toast(this.selectSetting.fieldName[e]+"不能跟学院同时搜索"),this.$nextTick(function(){a.selectSetting.defaultValue[e]=""})),this.selectSetting.defaultValue.educationLevel&&this.selectSetting.limitationFactor.educationLevel.indexOf(e)>=0&&(this.$toast(this.selectSetting.fieldName[e]+"不能跟培养层次同时搜索"),this.$nextTick(function(){a.selectSetting.defaultValue[e]=""})),this.selectSetting.defaultValue.resideStatus&&this.selectSetting.limitationFactor.resideStatus.indexOf(e)>=0&&(this.$toast(this.selectSetting.fieldName[e]+"不能跟居住情况同时搜索"),this.$nextTick(function(){a.selectSetting.defaultValue[e]=""})),this.selectSetting.defaultValue.roomUserFor&&this.selectSetting.limitationFactor.roomUserFor.indexOf(e)>=0&&(this.$toast(this.selectSetting.fieldName[e]+"不能跟房间用途同时搜索"),this.$nextTick(function(){a.selectSetting.defaultValue[e]=""})),this.selectSetting.defaultValue.studentBatch&&this.selectSetting.limitationFactor.studentBatch.indexOf(e)>=0&&(this.$toast(this.selectSetting.fieldName[e]+"不能跟学生批次同时搜索"),this.$nextTick(function(){a.selectSetting.defaultValue[e]=""})),this.selectSetting.defaultValue.userCount&&this.selectSetting.limitationFactor.userCount.indexOf(e)>=0&&(this.$toast(this.selectSetting.fieldName[e]+"不能跟居住人数同时搜索"),this.$nextTick(function(){a.selectSetting.defaultValue[e]=""})),this.selectSetting.defaultValue[e]=t.value,this.selectSetting.searchParameter[e]=[],t.value.length>0&&(this.selectSetting.searchParameter[e]="userCount"===e?t.value:t.value.split(",")),this.$nextTick(function(){a.selectSetting.defaultLabel[e]=[],t.target.selected.length>0&&("userCount"===e?t.target.selected.split(",").forEach(function(t){a.selectSetting.defaultLabel[e].push("居住人数为"+t)}):a.selectSetting.defaultLabel[e]=t.target.selected.split(","))})},_dateSelected:function(t,e){var a=this,i=this.selectSetting.defaultValue.dateStart,s=this.selectSetting.defaultValue.dateEnd;if("dateStart"===e)if(s){if(new Date(t.value).getTime()-new Date(s).getTime()>0)return this.$nextTick(function(){a.$toast("开始时间要在结束时间之前"),a.selectSetting.defaultValue.dateStart=""}),!1;this.selectSetting.defaultValue.dateStart=t.value}else this.selectSetting.defaultValue.dateStart=t.value;if("dateEnd"===e)if(i){if(new Date(t.value).getTime()-new Date(i).getTime()<0)return this.$nextTick(function(){a.$toast("结束时间要在开始时间之后"),a.selectSetting.defaultValue.dateEnd=""}),!1;this.selectSetting.defaultValue.dateEnd=t.value}else this.selectSetting.defaultValue.dateEnd=t.value},_reset:function(){this.selectSetting.defaultValue={college:"",educationLevel:"",dateStart:"",dateEnd:"",resideStatus:"",studentBatch:"",roomUserFor:"",floor:"",color:"",userCount:""},this.selectSetting.defaultLabel={college:[],educationLevel:[],floors:[],resideStatus:[],roomUserFor:[],userCount:[]},this.selectSetting.searchParameter={college:[],educationLevel:[],floors:[],resideStatus:[],roomUserFor:[],dateStart:"",dateEnd:"",studentBatch:"",userCount:""},this.selectSetting.conditionWithColor=[],this.selectSetting.condition=[],this.selectSetting.floorNumberArray=[],this.selectSetting.isMarkerColor=!1,this.floorPlanData.data=[],this.floorPlanData.allInitData=[],this._setSelectData(),this._getCountData()},_export:function(){var t="";for(var e in this.count.pie)this.count.pie[e].title&&(t+=this.count.pie[e].title+",");t=t.substring(0,t.length-1);var a="";for(var e in this.selectSetting.defaultValue)"color"!==e&&this.selectSetting.defaultValue[e]&&(a+="&"+e+"="+this.selectSetting.defaultValue[e]);var i=new Date,s=i.getFullYear()+this._getTimeFormat(i.getMonth()+1)+this._getTimeFormat(i.getDate());window.location.href="/downloads/apartment/plains/excel/"+this.data.data.buildingId+"?fileName="+this.data.title+"_"+s+"&statisticData="+t+a},_getTimeFormat:function(t){return t<10?"0"+t:t},_search:function(){if(this.selectSetting.defaultValue.dateStart)if(this.selectSetting.defaultValue.dateEnd){this.selectSetting.searchParameter.studentBatch=this.selectSetting.defaultValue.studentBatch,this.selectSetting.defaultValue.color?this.selectSetting.isMarkerColor=!0:this.selectSetting.isMarkerColor=!1;var t=[];t=this.selectSetting.searchParameter.floors.length>0?this.selectSetting.searchParameter.floors:this.selectSetting.floorNumberArray,this._getSelectCondition(),this._getFloorOfRooms(t,"search"),this._getCountData()}else this.$toast("请先选择结束时间");else this.$toast("请先选择开始时间")},_getFloorOfRooms:function(t,e){var a=this;this._getFormatDate();var i=[];t.forEach(function(t){i.push({floor:t,roomList:[]})}),Object(l.d)({url:"/api/apartment/plains/"+this.data.data.buildingId,type:"get",data:this.selectSetting.searchParameter,success:function(t){if(t.state){if(t.data){for(var s in i)if(t.data[i[s].floor])for(var o in i[s].roomList=t.data[i[s].floor],i[s].roomList)i[s].roomList[o].isShowInfoBlock||a.$set(i[s].roomList[o],"isShowInfoBlock",!1);if("init"===e&&(a.floorPlanData.allInitData=i),a.selectSetting.isMarkerColor)for(var s in i)for(var o in a.floorPlanData.allInitData)if(i[s].floor===a.floorPlanData.allInitData[o].floor&&i[s].roomList.length>0)for(var l in i[s].roomList)for(var n in a.floorPlanData.allInitData[o].roomList)i[s].roomList[l].roomId===a.floorPlanData.allInitData[o].roomList[n].roomId&&(a.floorPlanData.allInitData[o].roomList[n].colors||a.$set(a.floorPlanData.allInitData[o].roomList[n],"colors",[]),a.floorPlanData.allInitData[o].roomList[n].colors.push(a.selectSetting.defaultValue.color))}a.selectSetting.isMarkerColor?a.floorPlanData.data=a.floorPlanData.allInitData:a.floorPlanData.data=i,a.selectSetting.defaultValue.color=""}else a.$toast(t.message)}})},_getSelectCondition:function(){var t=[];for(var e in this.selectSetting.defaultLabel)this.selectSetting.defaultLabel[e].length>0&&t.push(this.selectSetting.defaultLabel[e]);var a=this._multiCartesian(t);this._getFormatDate();var i=this.selectSetting.searchParameter.dateStart.split("-"),s=this.selectSetting.searchParameter.dateEnd.split("-"),o=i[0]+"年"+i[1]+"月"+i[2]+"日至"+s[0]+"年"+s[1]+"月"+s[2]+"日";if(this.selectSetting.condition.splice(0,this.selectSetting.condition.length),0===a.length){var l=this.selectSetting.searchParameter.studentBatch+o;this._createCondition(l)}else for(var e in a){l=this.selectSetting.searchParameter.studentBatch+o+a[e];this._createCondition(l)}},_getFormatDate:function(){this.selectSetting.searchParameter.dateStart=/\d{4}-\d{1,2}-\d{1,2}/g.exec(this.selectSetting.defaultValue.dateStart)[0],this.selectSetting.searchParameter.dateEnd=/\d{4}-\d{1,2}-\d{1,2}/g.exec(this.selectSetting.defaultValue.dateEnd)[0]},_getCountData:function(){var t=this;this._getFormatDate();var e=["roomCollege","roomEducationLevel","roomUserFor","roomBatch"],a={FULL:"住满",PART:"零星空房",EMPTY:"整间空房"};Object(l.d)({url:"/api/apartment/plains/statistic/"+this.data.data.buildingId,type:"get",data:this.selectSetting.searchParameter,success:function(i){if(i.state){t.count.initData=i.data;t.count.curShowPie;for(var s in i.data){var o="";for(var l in t.count.pie[s].title="",i.data[s]){for(var n in i.data[s][l].conditionAndList)e.indexOf(s)>=0&&(o+=n+"的有"+i.data[s][l].conditionAndList[n].length+"间，"),"roomReside"===s&&(o+=a[n]+i.data[s][l].conditionAndList[n].length+"间，分别是"+i.data[s][l].conditionAndList[n].join("、")+"；"),"roomCheckIn"!==s&&"roomRetirement"!==s||(o+=n+"共"+i.data[s][l].conditionAndList[n].length+"人，");if(e.indexOf(s)>=0&&(t.count.pie[s].title+="总房间共"+i.data[s][l].count+"间，其中"+o),"roomReside"===s&&(t.count.pie[s].title+="总床位共"+i.data[s][l].count+"个，其中"+o),"roomCheckIn"===s||"roomRetirement"===s){var r="roomCheckIn"===s?"入住":"退宿";t.count.pie[s].title+=i.data[s][l].year+r+"的共"+i.data[s][l].count+"人，其中"+o}t.count.pie[s].title=t.count.pie[s].title.substring(0,t.count.pie[s].title.length-1)}}t._showSelectedPie()}else t.$toast(i.message)}})},changePie:function(t,e,a){if("show"===a){for(var i in this.count.curShowPie=e,this.count.pie)this.count.pie[i].isShowPie=!1;t.isShowPie=!0,this._showSelectedPie()}else this.count.curShowPie="",t.isShowPie=!1},_showSelectedPie:function(){var t={FULL:"住满",PART:"零星空房",EMPTY:"整间空房"},e=this.count.initData[this.count.curShowPie],a=this.count.pie[this.count.curShowPie].data;for(var i in a.splice(0,a.length),e)if(a.push({index:i,value:[]}),e[i].conditionAndList)for(var s in e[i].conditionAndList)a[i].value.push({name:"roomReside"===this.count.curShowPie?t[s]:s,value:e[i].conditionAndList[s].length})},_createCondition:function(t){this.selectSetting.isMarkerColor?(this.selectSetting.conditionWithColor.push({label:t,color:this.selectSetting.defaultValue.color}),this.selectSetting.condition=JSON.parse(s()(this.selectSetting.conditionWithColor))):this.selectSetting.condition.push({label:t,color:""})},deleteCondition:function(t,e){for(var a in this.selectSetting.condition.splice(e,1),this.selectSetting.conditionWithColor.splice(e,1),this.floorPlanData.data){var i=this.floorPlanData.data[a].roomList;if(i.length>0)for(var s in i)if(i[s].colors){var o=i[s].colors.indexOf(t.color);o>=0&&i[s].colors.splice(o,1)}}},_checkStaffInfo:function(t){this.$emit("addBread",{route:"/apartment/staffInfo?userId="+t.userId,title:t.name+"的信息"})},_dormitoryDetailInfo:function(t){this.curRouter="dormitoryDetailInfo",this.curRoomId=t.roomId,this.curRoomNo=t.roomNo},_backFloorPlan:function(){this.curRouter="floorPlan"},_cartesian:function(t,e){for(var a=[],i=0;i<t.length;i++)for(var s=0;s<e.length;s++)a.push(this._getCombinationStr(t[i],e[s]));return a},_getCombinationStr:function(t,e){return t+e},_multiCartesian:function(t){var e=t.length;if(0==e)return[];if(1==e)return t[0];for(var a=t[0],i=1;i<e;i++)a=this._cartesian(a,t[i]);return a},sectionToChinese:function(t){for(var e="",a="",i=0,s=!0;t>0;){var o=t%10;0===o?s||(s=!0,a=this.chnNumChar[o]+a):(s=!1,e=this.chnNumChar[o],a=(e+=this.chnUnitChar[i])+a),i++,t=Math.floor(t/10)}return a}}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"floor-plan"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:"floorPlan"===t.curRouter,expression:"curRouter==='floorPlan'"}]},[a("div",{staticClass:"page-head"},[a("label",{staticClass:"head-title"},[t._v(t._s(t.data.title))])]),t._v(" "),a("div",{staticClass:"select-container"},[a("div",{staticClass:"select-container-scroll"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label form-label"},[t._v("学院")]),t._v(" "),a("v-select",{staticClass:"btn-block form-select-style",attrs:{value:t.selectSetting.defaultValue.college,options:t.selectSetting.options.college,optionsLabel:"label",optionsValue:"value",search:"",multiple:!0},on:{afterSelected:function(e){return t._searchSelected(e,"college")}}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label form-label"},[t._v("居住情况")]),t._v(" "),a("v-select",{staticClass:"btn-block form-select-style",attrs:{value:t.selectSetting.defaultValue.resideStatus,options:t.selectSetting.options.resideStatus,optionsLabel:"label",optionsValue:"value",search:"",multiple:!0},on:{afterSelected:function(e){return t._searchSelected(e,"resideStatus")}}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label form-label"},[t._v("居住人数")]),t._v(" "),a("v-select",{staticClass:"btn-block form-select-style",attrs:{value:t.selectSetting.defaultValue.userCount,options:t.selectSetting.options.userCount,optionsLabel:"label",optionsValue:"value",search:"",multiple:!1},on:{afterSelected:function(e){return t._searchSelected(e,"userCount")}}})],1)]),t._v(" "),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label form-label"},[t._v("培养层次")]),t._v(" "),a("v-select",{staticClass:"btn-block form-select-style",attrs:{value:t.selectSetting.defaultValue.educationLevel,options:t.selectSetting.options.educationLevel,optionsLabel:"label",optionsValue:"value",search:"",multiple:!0},on:{afterSelected:function(e){return t._searchSelected(e,"educationLevel")}}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label form-label"},[t._v("学生批次")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.selectSetting.defaultValue.studentBatch,expression:"selectSetting.defaultValue.studentBatch"}],staticClass:"form-control form-input-style",attrs:{type:"text"},domProps:{value:t.selectSetting.defaultValue.studentBatch},on:{change:t._changeStudentBatch,input:function(e){e.target.composing||t.$set(t.selectSetting.defaultValue,"studentBatch",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label form-label"},[t._v("添加颜色")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.selectSetting.defaultValue.color,expression:"selectSetting.defaultValue.color"}],staticClass:"form-control form-input-style",staticStyle:{padding:"4px 56px 4px 19px"},attrs:{type:"color"},domProps:{value:t.selectSetting.defaultValue.color},on:{input:function(e){e.target.composing||t.$set(t.selectSetting.defaultValue,"color",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-5"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"input-label form-label"},[t._v("时间")]),t._v(" "),a("v-datepicker",{staticClass:"btn-block form-datepicker-style",attrs:{clearButton:!1,showTime:!1},on:{daySelected:function(e){return t._dateSelected(e,"dateStart")}},model:{value:t.selectSetting.defaultValue.dateStart,callback:function(e){t.$set(t.selectSetting.defaultValue,"dateStart",e)},expression:"selectSetting.defaultValue.dateStart"}}),t._v(" "),a("span",{staticClass:"time-line"}),t._v(" "),a("v-datepicker",{staticClass:"btn-block form-datepicker-style",attrs:{clearButton:!1,showTime:!1},on:{daySelected:function(e){return t._dateSelected(e,"dateEnd")}},model:{value:t.selectSetting.defaultValue.dateEnd,callback:function(e){t.$set(t.selectSetting.defaultValue,"dateEnd",e)},expression:"selectSetting.defaultValue.dateEnd"}})],1),t._v(" "),a("div",{staticClass:"limit-line-breaks"},[a("div",{staticClass:"form-group",staticStyle:{display:"inline-block"}},[a("label",{staticClass:"input-label form-label multiple-label"},[t._v("楼层")]),t._v(" "),a("v-select",{staticClass:"btn-block form-select-style multiple-select",attrs:{value:t.selectSetting.defaultValue.floor,options:t.selectSetting.options.floors,optionsLabel:"label",optionsValue:"value",search:"",multiple:!0},on:{afterSelected:function(e){return t._searchSelected(e,"floors")}}})],1),t._v(" "),a("div",{staticClass:"form-group",staticStyle:{display:"inline-block"}},[a("label",{staticClass:"input-label form-label"},[t._v("房间用途")]),t._v(" "),a("v-select",{staticClass:"btn-block form-select-style",attrs:{value:t.selectSetting.defaultValue.roomUserFor,url:"/api/apartment/dicts?typeName=房间用途",optionsLabel:"label",optionsValue:"value",search:"",multiple:!0},on:{afterSelected:function(e){return t._searchSelected(e,"roomUserFor")}}})],1)]),t._v(" "),a("div",{staticClass:"form-group clearfix"},[a("button",{staticClass:"btn reset-btn clearBtnBorder",attrs:{type:"button"},on:{click:t._reset}},[t._v("重置")]),t._v(" "),a("button",{staticClass:"btn search-btn clearBtnBorder",attrs:{type:"button"},on:{click:t._search}},[t._v("搜索")]),t._v(" "),a("button",{staticClass:"btn export-btn clearBtnBorder",attrs:{type:"button"},on:{click:t._export}},[t._v("导出")])])])])])]),t._v(" "),a("div",{staticClass:"tab"},t._l(t.tab.tabs,function(e,i){return a("div",{key:i,class:{active:t.tab.curSelectedTab===e.id},on:{click:function(a){return t.changeTab(e)}}},[t._v(t._s(e.title))])}),0),t._v(" "),a("div",{staticClass:"tab-content"},[a("GeminiScrollbar",{attrs:{scrollX:!1}},[a("div",{directives:[{name:"show",rawName:"v-show",value:"floorPlan"===t.tab.curSelectedTab,expression:"tab.curSelectedTab === 'floorPlan'"}],staticClass:"floor-plan-container"},[a("div",{staticClass:"select-condition"},[a("div",{staticClass:"title"},[t._v("筛选条件：")]),t._v(" "),a("div",{staticClass:"content"},t._l(t.selectSetting.condition,function(e,i){return a("div",{key:i},[a("span",[t._v(t._s(e.label))]),t._v(" "),a("span",{staticClass:"color-block",style:"background:"+e.color}),t._v(" "),t.selectSetting.isMarkerColor?a("span",{staticClass:"maticon delete-icon-btn",domProps:{innerHTML:t._s(t.icons("clear"))},on:{click:function(a){return t.deleteCondition(e,i)}}},[t._v("clear")]):t._e()])}),0)]),t._v(" "),a("div",{staticClass:"list"},t._l(t.floorPlanData.data,function(e,i){return a("div",{key:i,staticClass:"floor-card"},[a("div",{staticClass:"floor"},[t._v(t._s(t.sectionToChinese(e.floor))+"楼")]),t._v(" "),e.roomList&&e.roomList.length>0?a("div",t._l(e.roomList,function(e,i){return a("div",{key:i,staticClass:"floor-detail"},[a("div",{staticClass:"info-card"},[a("div",{staticClass:"head",on:{click:function(a){return t._dormitoryDetailInfo(e)}}},[a("div",{staticClass:"room-number"},[t._v(t._s(e.roomNo))]),t._v(" "),t._l(t._getProfessionalNumber(e.users),function(e,i){return a("div",{key:i,staticClass:"staff-number"},[t._v(t._s(i)+t._s(e)+"人")])}),t._v(" "),a("div",{staticClass:"bed-situation"},[t._v(t._s(t._getBedNumber(e.maxNumber,e.currentNumber)))])],2),t._v(" "),a("div",{staticClass:"body"},[a("div",{staticClass:"staff-list"},t._l(e.users,function(i,s){return a("div",{key:s,staticClass:"staff-name",attrs:{title:i.grade&&i.grade.substring(2,4)+i.collegeShortName+i.name},on:{click:function(e){return t._checkStaffInfo(i)},mouseover:function(a){return t._showInfoBlock(e,i)},mouseout:function(a){return t._hideInfoBlock(e)}}},[t._v("\n                          "+t._s(i.grade&&i.grade.substring(2,4))+t._s(i.collegeShortName)+t._s(i.name)+"\n                        ")])}),0),t._v(" "),a("div",{staticClass:"color-mark-list"},t._l(e.colors,function(t,e){return a("div",{key:e,staticClass:"color-mark",style:"background:"+t})}),0)])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowInfoBlock,expression:"roomCell.isShowInfoBlock"}],staticClass:"extra-info-block",on:{mouseover:function(a){return t._showInfoBlock(e)},mouseout:function(a){return t._hideInfoBlock(e)}}},[t.floorPlanData.extraInfo.originPlace?a("div",{staticClass:"originPlace",attrs:{title:t.floorPlanData.extraInfo.originPlace}},[t._v(t._s(t.floorPlanData.extraInfo.originPlace))]):t._e(),t._v(" "),t.floorPlanData.extraInfo.department?a("div",{attrs:{title:t.floorPlanData.extraInfo.department}},[t._v(t._s(t.floorPlanData.extraInfo.department))]):t._e(),t._v(" "),a("div",{attrs:{title:t.floorPlanData.extraInfo.grade+"级"+t.floorPlanData.extraInfo.collegeShortName+t.floorPlanData.extraInfo.educationLevel}},[t._v(t._s(t.floorPlanData.extraInfo.grade)+"级"+t._s(t.floorPlanData.extraInfo.collegeShortName)+t._s(t.floorPlanData.extraInfo.educationLevel))]),t._v(" "),t.floorPlanData.extraInfo.timeTable?a("div",{attrs:{title:t.floorPlanData.extraInfo.timeTable}},[t._v(t._s(t.floorPlanData.extraInfo.timeTable))]):t._e(),t._v(" "),t.floorPlanData.extraInfo.airConditioningTemperature?a("div",{attrs:{title:t.floorPlanData.extraInfo.airConditioningTemperature+"℃"}},[t._v(t._s(t.floorPlanData.extraInfo.airConditioningTemperature)+"℃")]):t._e()])])}),0):a("div",[t._v("\n                暂无数据\n              ")])])}),0)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"count"===t.tab.curSelectedTab,expression:"tab.curSelectedTab === 'count'"}],staticClass:"count-container"},[a("div",{staticClass:"select-condition"},[a("div",{staticClass:"title"},[t._v("筛选条件：")]),t._v(" "),a("div",{staticClass:"content"},t._l(t.selectSetting.condition,function(e,i){return a("div",{key:i},[a("span",[t._v(t._s(e.label))])])}),0)]),t._v(" "),a("div",{staticClass:"count-list"},[a("div",{staticClass:"title"},[t._v("统计图")]),t._v(" "),a("div",{staticClass:"content"},t._l(t.count.pie,function(e,i){return a("div",[e.title.length>0?a("div",{staticClass:"title"},[a("span",[t._v(t._s(e.index)+"、"+t._s(e.title))]),t._v(" "),e.isShowPie?a("span",{staticClass:"change-chart-status",on:{click:function(a){return t.changePie(e,i,"hide")}}},[t._v("收起饼图")]):a("span",{staticClass:"change-chart-status",on:{click:function(a){return t.changePie(e,i,"show")}}},[t._v("显示饼图")])]):t._e(),t._v(" "),e.isShowPie?a("div",{staticClass:"count-charts"},t._l(e.data,function(t,e){return a("div",{key:e},[a("c-pieEcharts",{attrs:{countData:t.value}})],1)}),0):t._e()])}),0)])])])],1)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"dormitoryDetailInfo"===t.curRouter,expression:"curRouter==='dormitoryDetailInfo'"}]},["dormitoryDetailInfo"===t.curRouter?a("dormitoryDetailInfo",{attrs:{roomId:t.curRoomId,beginTime:t.selectSetting.defaultValue.dateStart,endTime:t.selectSetting.defaultValue.dateEnd,roomNo:t.curRoomNo},on:{back:t._backFloorPlan}}):t._e()],1)])},staticRenderFns:[]};var S=a("Mz/3")(g,_,!1,function(t){a("5h6W")},null,null);e.default=S.exports},WbVT:function(t,e,a){"use strict";(function(t){a("wHeh");var i=a("C331");e.a={inject:{windowObj:{default:null}},props:{roomId:{default:null},beginTime:{default:null},endTime:{default:null},roomNo:{default:null}},data:function(){return{dormitoryData:[],scrollHeight:null,showRecordModal:!1,historyRecordColumns:[],historyRecord:[]}},created:function(){var t=this;this.beginTime=/\d{4}-\d{1,2}-\d{1,2}/g.exec(this.beginTime)[0],this.endTime=/\d{4}-\d{1,2}-\d{1,2}/g.exec(this.endTime)[0],Object(i.d)({url:"/api/apartment/rooms/getRoomArranges/"+this.roomId+"?beginTime="+this.beginTime+"&endTime="+this.endTime,dataType:"json",type:"get",success:function(e){e.state?e.data&&e.data.forEach(function(a){t.dormitoryData=e.data}):t.$toast(e.message)}}),this.historyRecordColumns=[{id:"userNo",title:"学号",className:"text-left",hidden:!1},{id:"userName",title:"姓名",className:"text-left",hidden:!1},{id:"operationType",title:"类型",className:"text-left",hidden:!1},{id:"changeDate",title:"时间",className:"text-left",hidden:!1}]},computed:{},watch:{windowObj:{deep:!0,handler:function(e){this.scrollHeight=t("#dormitory-detail-info").outerHeight()-t(".dormitory-page-head").outerHeight()-65-t(".room-table-head").outerHeight(),console.log(this.scrollHeight)}}},methods:{_back:function(){this.$emit("back")},checkRecord:function(t){var e=this;Object(i.d)({url:"/api/apartment/beds/getBedHistory/"+t,dataType:"json",type:"get",success:function(t){t.state?t.data&&(e.historyRecord=t.data,e.showRecordModal=!0):e.$toast(t.message)}})}},mounted:function(){this.scrollHeight=t("#floor-plan").outerHeight()-t(".dormitory-page-head").outerHeight()-65-t(".room-table-head").outerHeight()}}}).call(e,a("W14+"))},eFPq:function(t,e){}});
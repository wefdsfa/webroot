webpackJsonp([136],{jiAe:function(e,t){},v9fp:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("C331"),n={props:{data:{default:null}},data:function(){return{formFields:{name:"获取中...",appointmentTime:"",familyMembers:[]},pageStatus:{pageLayout:{groups:[{title:"",cells:[{title:"预约时间:",name:"appointmentTime",type:"input",readonly:!0},{title:"预约咨询师:",name:"name",type:"input",readonly:!0},{title:"联系方式(必填)",name:"contact",type:"input",required:!0},{title:"邮箱(必填)",name:"email",type:"input",required:!0}]},{title:"",cells:[{title:"家庭成员:",name:"familyMembers",type:"checkbox",required:!1},{title:"父母婚姻状况:",name:"parentsMarriageSituation",type:"radio",required:!1},{title:"家族精神病史:",name:"psychiatricHistory",type:"radio",required:!1},{title:"是否服用药物:",name:"takeMedicine",type:"radio",required:!1},{title:"是否有咨询经历:",name:"hasConsultingExperience",type:"radio",required:!1}]},{title:"",cells:[{title:"咨询问题(必填):",name:"content",type:"textarea",required:!0}]},{title:"",cells:[{title:"备注:",name:"remark",type:"textarea",required:!1}]}]},pageOptions:{familyMembers:[],parentsMarriageSituation:[{key:"良好",value:"良好"},{key:"一般",value:"一般"}],psychiatricHistory:[{key:!0,value:"有"},{key:!1,value:"无"}],takeMedicine:[{key:!0,value:"是"},{key:!1,value:"否"}],hasConsultingExperience:[{key:!0,value:"是"},{key:!1,value:"否"}]},editingField:{},checkShow:!1,myCroppa:{},imageCut:{width:360,height:130,start:!1,imageUrl:"",cell:{}}}}},methods:{_back:function(){this.$emit("removeBread",this.data)},_getNameStr:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"key",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"value",n="";return this.pageStatus.pageOptions[e.name]&&this.pageStatus.pageOptions[e.name].length>0&&this.formFields[e.name]&&this.formFields[e.name].forEach(function(s){t.pageStatus.pageOptions[e.name].forEach(function(e){s===e[a]&&(n+=" "+e[i])})}),n},_focus:function(e){this.pageStatus.editingField=e,["checkbox"].indexOf(e.type)>=0&&(this.pageStatus.checkShow=!0)},_submit:function(){var e=this;this._verify().length>0?this._toast("请完善必填信息！"):(this.$waiting.show(),Object(i.e)({url:"/api/mentality/reservation",type:"post",data:this.formFields,success:function(t){t.state?(e._toast("预约成功！"),e.$waiting.close(),e.$nextTick(function(){e.data.time.isReserved=!0,e._back()})):e._toast(t.message)}}))},_uploadImages:function(e,t,a){var n=this,s="",l={},o="";"base64"===a?(l.data=e,s=this.uploadBase64):"file"===a?((l=new FormData).append("file",e.target.files[0]),o=e.target.files[0].name,e.target.value="",s=this.uploadFile):((l=new FormData).append("file",e.target.files[0]),e.target.value="",s=this.uploadImage),Object(i.e)({url:s,type:"post",data:l,processData:"base64"===a,contentType:"base64"===a,success:function(e){"88888"===e.code||e.state?"images"===t.type||"attachment"===t.type?(n.formFields[t.name]||n.$set(n.formFields,t.name,[]),n.formFields[t.name].push({name:o,hash:e.data.hash})):"image"===t.type&&n.$set(n.formFields,t.name,e.data.hash):n._toast(e.message)}})},_valueChange:function(e,t){var a=this,i=this.formFields[t.start],n=this.formFields[t.end],s=0,l=0,o=new Date(e.replace(/\-\g/,"/")).getTime(),r="";if(i&&(s=new Date(i.replace(/\-\g/,"/")).getTime()),n&&(l=new Date(n.replace(/\-\g/,"/")).getTime()),i&&o<=s&&(r="选择的时间要在"+i+"之后！"),n&&o>=l&&(r="选择的时间要在"+n+"之前！"),"endTime"===t.name){var m=this.formFields.applyEndTime,c=m?new Date(m.replace(/\-\g/,"/")).getTime():0;c&&o<=c&&(r="选择的时间要在"+m+"之后！")}r&&(setTimeout(function(){a.formFields[t.name]=""},100),this.$vux.alert.show({title:r}))},_verify:function(){var e=this,t=[];return this.pageStatus.pageLayout.groups.forEach(function(a){a.cells.forEach(function(a){a.required&&(e.formFields[a.name]||t.push(a.title))})}),t},_toast:function(e){this.$vux.toast.show({text:e,position:"bottom",type:"text"})}},created:function(){var e=this;Object(i.e)({url:"/api/system/dicts?dictType=家庭成员类型",type:"get",success:function(t){t.state&&(t.data.forEach(function(e){e.key=e.value,e.value=e.label}),e.$set(e.pageStatus.pageOptions,"familyMembers",t.data))}}),this.formFields.firstTime=this.data.firstTime,this.formFields.readmeId=this.data.protocolId,this.formFields.dayTimeTeacherId=this.data.time.id,this.formFields.appointmentTime=this.data.time.dateTime+"  "+this.data.time.timeQuantum,this.formFields.name=this.data.counselor.teacherBaseInfo.name,Object(i.e)({url:"/api/mentality/reservation/myStudentInfo",type:"get",success:function(t){if(t.state){if(t.data)for(var a in t.data)e.$set(e.formFields,a,t.data[a])}else e._toast("个人信息初始失败："+t.message)}})}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"appointment-page"},[a("view-box",[a("x-header",{staticClass:"position-apply-header",attrs:{title:"完善资料"}},[a("i",{staticClass:"maticon back-icon",attrs:{slot:"overwrite-left"},domProps:{innerHTML:e._s(e.icons("navigate_before"))},on:{click:e._back},slot:"overwrite-left"},[e._v("navigate_before")])]),e._v(" "),a("div",{staticClass:"apply-content"},[e._l(e.pageStatus.pageLayout.groups,function(t,i){return a("group",{key:i,staticClass:"info-group",attrs:{title:t.title,"label-width":"8em","label-margin-right":"2em","label-align":"left"}},e._l(t.cells,function(t,i){return["input"].indexOf(t.type)>=0?a("x-input",{key:i,ref:t.name+"_input",refInFor:!0,attrs:{title:t.title,placeholder:"请填写",max:t.max,readonly:t.readonly,"text-align":"right"},model:{value:e.formFields[t.name],callback:function(a){e.$set(e.formFields,t.name,a)},expression:"formFields[cell.name]"}}):["number"].indexOf(t.type)>=0?a("x-input",{attrs:{title:t.title,placeholder:"请填写","text-align":"right",type:"text",debounce:500},nativeOn:{change:function(a){return e._checkVal(t)}},model:{value:e.formFields[t.name],callback:function(a){e.$set(e.formFields,t.name,a)},expression:"formFields[cell.name]"}}):["tel"].indexOf(t.type)>=0?a("x-input",{attrs:{title:t.title,placeholder:"请填写","text-align":"right","is-type":"china-mobile"},model:{value:e.formFields[t.name],callback:function(a){e.$set(e.formFields,t.name,a)},expression:"formFields[cell.name]"}}):["textarea"].indexOf(t.type)>=0?a("x-textarea",{attrs:{title:t.title,placeholder:"请填写",max:t.max},model:{value:e.formFields[t.name],callback:function(a){e.$set(e.formFields,t.name,a)},expression:"formFields[cell.name]"}}):"datetime"===t.type?a("datetime",{attrs:{title:t.title,placeholder:"请选择","value-text-align":"right",format:"YYYY-MM-DD HH:mm"},on:{"on-change":function(a){return e._valueChange(a,t)}},model:{value:e.formFields[t.name],callback:function(a){e.$set(e.formFields,t.name,a)},expression:"formFields[cell.name]"}}):"radio"===t.type?a("popup-radio",{attrs:{title:t.title,options:e.pageStatus.pageOptions[t.name]||[],placeholder:"请选择","value-text-align":"right"},model:{value:e.formFields[t.name],callback:function(a){e.$set(e.formFields,t.name,a)},expression:"formFields[cell.name]"}}):"tree"===t.type?a("popup-picker",{ref:t.name+"_picker",refInFor:!0,attrs:{title:t.title,data:e.pageStatus.pageOptions[t.name]||[],columns:2,placeholder:"请选择","value-text-align":"right","show-name":""},model:{value:e.formFields[t.name],callback:function(a){e.$set(e.formFields,t.name,a)},expression:"formFields[cell.name]"}}):["checkbox"].indexOf(t.type)>=0?a("x-input",{attrs:{title:t.title,readonly:"",placeholder:"请选择",value:e._getNameStr(t),"text-align":"right"},on:{"on-focus":function(a){return e._focus(t)}}}):"attachment"===t.type?a("div",[a("x-input",{attrs:{title:t.title,readonly:""}},[a("span",{attrs:{slot:"right"},slot:"right"},[a("span",{staticClass:"img-control pull-right"},[a("i",{staticClass:"maticon",domProps:{innerHTML:e._s(e.icons("add_a_photo"))}}),e._v(" "),a("input",{attrs:{type:"file"},on:{change:function(a){return e._uploadImages(a,t,"file")}}})])])]),e._v(" "),a("div",{staticClass:"file-list"},e._l(e.formFields[t.name],function(i,n){return a("p",[a("a",{staticClass:"file-link"},[e._v(e._s(i.name))]),e._v(" "),a("i",{staticClass:"maticon remove-icon",domProps:{innerHTML:e._s(e.icons("cancel"))},on:{click:function(a){e.formFields[t.name].splice(n,1)}}})])}),0)],1):e._e()}),1)}),e._v(" "),a("box",{staticClass:"submit-box"},[a("x-button",{staticClass:"custom-primary-blue",attrs:{plain:"",type:"primary"},nativeOn:{click:function(t){return e._submit(t)}}},[e._v("提交")])],1),e._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[a("popup",{attrs:{position:"bottom","max-height":"70%"},model:{value:e.pageStatus.checkShow,callback:function(t){e.$set(e.pageStatus,"checkShow",t)},expression:"pageStatus.checkShow"}},[a("group",[e.pageStatus.checkShow?a("checklist",{attrs:{options:e.pageStatus.pageOptions[e.pageStatus.editingField.name]||[]},model:{value:e.formFields[e.pageStatus.editingField.name],callback:function(t){e.$set(e.formFields,e.pageStatus.editingField.name,t)},expression:"formFields[pageStatus.editingField.name]"}}):e._e()],1)],1)],1)],2)],1)],1)},staticRenderFns:[]};var l=a("C7Lr")(n,s,!1,function(e){a("jiAe")},null,null);t.default=l.exports}});
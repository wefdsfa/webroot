webpackJsonp([188],{"1mZ2":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("mvHQ"),l=a.n(i),n=a("C331"),s={props:{data:{default:null}},data:function(){return{formFields:{name:"获取中...",applyDate:"今天",computerSkill:[],writeSkill:[],position:{id:""}},pageStatus:{pageLayout:{groups:[{title:"",cells:[{title:"申请人姓名",name:"name",type:"input",readonly:!0},{title:"申请日期",name:"applyDate",type:"input",readonly:!0},{title:"联系方式",name:"contact",type:"input"},{title:"工作开始时间",name:"workStartTime",type:"datetime",end:"workEndTime",required:!0},{title:"工作结束时间",name:"workEndTime",start:"workStartTime",type:"datetime",required:!0},{title:"可工作时间",name:"validWorkTime",type:"input",required:!0}]},{title:"",cells:[{title:"是否困难生",name:"isDifficultyStudent",type:"radio",required:!0},{title:"困难认定级别",name:"difficultyLevel",type:"radio",required:!0}]},{title:"",cells:[{title:"计算机能力",name:"computerSkill",type:"checkbox",required:!0},{title:"其它计算机能力",name:"otherComputerSkill",type:"input"}]},{title:"",cells:[{title:"写作能力",name:"writeSkill",type:"checkbox",required:!0},{title:"其它写作能力",name:"otherWriteSkill",type:"input"}]},{title:"",cells:[{title:"添加附件",name:"attachment",type:"attachment",start:"",end:"applyEndTime",required:!0}]}]},pageOptions:{isDifficultyStudent:[{key:!0,value:"是"},{key:!1,value:"否"}],computerSkill:[{name:"PPT",key:"PPT",value:"PPT"},{name:"Word",key:"Word",value:"Word"},{name:"Excel",key:"Excel",value:"Excel"},{name:"Access",key:"Access",value:"Access"},{name:"视频制作",key:"视频制作",value:"视频制作"},{name:"网站制作",key:"网站制作",value:"网站制作"}],writeSkill:[{name:"新闻写作",key:"新闻写作",value:"新闻写作"},{name:"调研报告",key:"调研报告",value:"调研报告"},{name:"应用文写作",key:"应用文写作",value:"应用文写作"},{name:"文字编辑",key:"文字编辑",value:"文字编辑"}]},editingField:{},checkShow:!1,myCroppa:{},imageCut:{width:360,height:130,start:!1,imageUrl:"",cell:{}}}}},methods:{_back:function(){this.$emit("removeBread",this.data)},_getNameStr:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"key",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"value",l="";return this.pageStatus.pageOptions[e.name]&&this.pageStatus.pageOptions[e.name].length>0&&this.formFields[e.name]&&this.formFields[e.name].forEach(function(n){t.pageStatus.pageOptions[e.name].forEach(function(e){n===e[a]&&(l+=" "+e[i])})}),l},_focus:function(e){this.pageStatus.editingField=e,["checkbox"].indexOf(e.type)>=0&&(this.pageStatus.checkShow=!0)},_submit:function(){var e=this;if(this._verify().length>0)this._toast("请完善活动信息！");else{var t=JSON.parse(l()(this.formFields));t.otherComputerSkill&&(t.computerSkill||(t.computerSkill=[]),t.computerSkill.push(t.otherComputerSkill)),t.otherWriteSkill&&(t.writeSkill||(t.writeSkill=[]),t.writeSkill.push(t.otherWriteSkill)),t.workEndTime&&(t.workEndTime+=":00"),t.workStartTime&&(t.workStartTime+=":00"),Object(n.e)({url:"/api/pwps/workflow/runtime/applications",type:"post",data:t,success:function(t){t.state?(e._toast("提交成功，等待审核"),e.$emit("addBread",{route:"/partTime/positionMyApplies",title:""}),e.$nextTick(function(){e._back()})):e._toast(t.message)}})}},_uploadImages:function(e,t,a){var i=this,l="",s={},o="";"base64"===a?(s.data=e,l=this.uploadBase64):"file"===a?((s=new FormData).append("file",e.target.files[0]),o=e.target.files[0].name,e.target.value="",l=this.uploadFile):((s=new FormData).append("file",e.target.files[0]),e.target.value="",l=this.uploadImage),Object(n.e)({url:l,type:"post",data:s,processData:"base64"===a,contentType:"base64"===a,success:function(e){"88888"===e.code||e.state?"images"===t.type||"attachment"===t.type?(i.formFields[t.name]||i.$set(i.formFields,t.name,[]),i.formFields[t.name].push({name:o,hash:e.data.hash})):"image"===t.type&&i.$set(i.formFields,t.name,e.data.hash):i._toast(e.message)}})},_valueChange:function(e,t){var a=this,i=this.formFields[t.start],l=this.formFields[t.end],n=0,s=0,o=new Date(e.replace(/\-\g/,"/")).getTime(),r="";if(i&&(n=new Date(i.replace(/\-\g/,"/")).getTime()),l&&(s=new Date(l.replace(/\-\g/,"/")).getTime()),i&&o<=n&&(r="选择的时间要在"+i+"之后！"),l&&o>=s&&(r="选择的时间要在"+l+"之前！"),"endTime"===t.name){var c=this.formFields.applyEndTime,m=c?new Date(c.replace(/\-\g/,"/")).getTime():0;m&&o<=m&&(r="选择的时间要在"+c+"之后！")}r&&(setTimeout(function(){a.formFields[t.name]=""},100),this.$vux.alert.show({title:r}))},_verify:function(){var e=this,t=[];return this.pageStatus.pageLayout.groups.forEach(function(a){a.cells.forEach(function(a){a.required&&(e.formFields[a.name]||t.push(a.title))})}),t},_toast:function(e){this.$vux.toast.show({text:e,position:"bottom",type:"text"})}},created:function(){var e=this,t=new Date;this.formFields.applyDate=t.getFullYear()+"年"+(t.getMonth()+1)+"月"+t.getDate()+"日",this.formFields.position.id=this.data.data.position.id,Object(n.e)({url:"/login/check",type:"get",success:function(t){t.state&&(e.formFields.name=t.data.name)}}).always(function(){}),Object(n.e)({url:"/api/system/dicts?dictType=困难等级",type:"get",success:function(t){t.state&&(t.data.forEach(function(e){e.key=e.value,e.value=e.label}),e.$set(e.pageStatus.pageOptions,"difficultyLevel",t.data))}})}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"position-apply",attrs:{id:"positionApply"}},[a("view-box",[a("x-header",{staticClass:"position-apply-header",attrs:{title:"岗位申请"}},[a("i",{staticClass:"maticon back-icon",attrs:{slot:"overwrite-left"},domProps:{innerHTML:e._s(e.icons("navigate_before"))},on:{click:e._back},slot:"overwrite-left"},[e._v("navigate_before")])]),e._v(" "),a("div",{staticClass:"apply-content"},[e._l(e.pageStatus.pageLayout.groups,function(t,i){return a("group",{key:i,staticClass:"info-group",attrs:{title:t.title,"label-width":"8em","label-margin-right":"2em","label-align":"left"}},e._l(t.cells,function(t,i){return["input"].indexOf(t.type)>=0?a("x-input",{key:i,ref:t.name+"_input",refInFor:!0,attrs:{title:t.title,placeholder:"请填写",max:t.max,readonly:t.readonly,"text-align":"right"},model:{value:e.formFields[t.name],callback:function(a){e.$set(e.formFields,t.name,a)},expression:"formFields[cell.name]"}}):["number"].indexOf(t.type)>=0?a("x-input",{attrs:{title:t.title,placeholder:"请填写","text-align":"right",type:"text",debounce:500},nativeOn:{change:function(a){return e._checkVal(t)}},model:{value:e.formFields[t.name],callback:function(a){e.$set(e.formFields,t.name,a)},expression:"formFields[cell.name]"}}):["tel"].indexOf(t.type)>=0?a("x-input",{attrs:{title:t.title,placeholder:"请填写","text-align":"right","is-type":"china-mobile"},model:{value:e.formFields[t.name],callback:function(a){e.$set(e.formFields,t.name,a)},expression:"formFields[cell.name]"}}):["textarea"].indexOf(t.type)>=0?a("x-textarea",{attrs:{title:t.title,placeholder:"请填写",max:t.max},model:{value:e.formFields[t.name],callback:function(a){e.$set(e.formFields,t.name,a)},expression:"formFields[cell.name]"}}):"datetime"===t.type?a("datetime",{attrs:{title:t.title,placeholder:"请选择","value-text-align":"right",format:"YYYY-MM-DD HH:mm"},on:{"on-change":function(a){return e._valueChange(a,t)}},model:{value:e.formFields[t.name],callback:function(a){e.$set(e.formFields,t.name,a)},expression:"formFields[cell.name]"}}):"radio"===t.type?a("popup-radio",{attrs:{title:t.title,options:e.pageStatus.pageOptions[t.name]||[],placeholder:"请选择","value-text-align":"right"},model:{value:e.formFields[t.name],callback:function(a){e.$set(e.formFields,t.name,a)},expression:"formFields[cell.name]"}}):"tree"===t.type?a("popup-picker",{ref:t.name+"_picker",refInFor:!0,attrs:{title:t.title,data:e.pageStatus.pageOptions[t.name]||[],columns:2,placeholder:"请选择","value-text-align":"right","show-name":""},model:{value:e.formFields[t.name],callback:function(a){e.$set(e.formFields,t.name,a)},expression:"formFields[cell.name]"}}):["checkbox"].indexOf(t.type)>=0?a("x-input",{attrs:{title:t.title,readonly:"",placeholder:"请选择",value:e._getNameStr(t),"text-align":"right"},on:{"on-focus":function(a){return e._focus(t)}}}):"attachment"===t.type?a("div",[a("x-input",{attrs:{title:t.title,readonly:""}},[a("span",{attrs:{slot:"right"},slot:"right"},[a("span",{staticClass:"img-control pull-right"},[a("i",{staticClass:"maticon",domProps:{innerHTML:e._s(e.icons("add_a_photo"))}}),e._v(" "),a("input",{attrs:{type:"file"},on:{change:function(a){return e._uploadImages(a,t,"file")}}})])])]),e._v(" "),a("div",{staticClass:"file-list"},e._l(e.formFields[t.name],function(i,l){return a("p",[a("a",{staticClass:"file-link"},[e._v(e._s(i.name))]),e._v(" "),a("i",{staticClass:"maticon remove-icon",domProps:{innerHTML:e._s(e.icons("cancel"))},on:{click:function(a){e.formFields[t.name].splice(l,1)}}})])}),0)],1):e._e()}),1)}),e._v(" "),a("box",{staticClass:"submit-box"},[a("x-button",{staticClass:"custom-primary-blue",attrs:{plain:"",type:"primary"},nativeOn:{click:function(t){return e._submit(t)}}},[e._v("提交")])],1),e._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[a("popup",{attrs:{position:"bottom","max-height":"70%"},model:{value:e.pageStatus.checkShow,callback:function(t){e.$set(e.pageStatus,"checkShow",t)},expression:"pageStatus.checkShow"}},[a("group",[e.pageStatus.checkShow?a("checklist",{attrs:{options:e.pageStatus.pageOptions[e.pageStatus.editingField.name]||[]},model:{value:e.formFields[e.pageStatus.editingField.name],callback:function(t){e.$set(e.formFields,e.pageStatus.editingField.name,t)},expression:"formFields[pageStatus.editingField.name]"}}):e._e()],1)],1)],1)],2)],1)],1)},staticRenderFns:[]};var r=a("VU/8")(s,o,!1,function(e){a("8RAL")},null,null);t.default=r.exports},"8RAL":function(e,t){}});
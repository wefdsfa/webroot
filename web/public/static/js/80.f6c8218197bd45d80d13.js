webpackJsonp([80],{Kbwf:function(e,t){},Rx3N:function(e,t){},wfdm:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("C331"),s={name:"accountinfo",data:function(){var e=function(e,t,a){isNaN(t)||4!=t.length?a(new Error("请输入4位数字")):a()};return{curUserInfo:{},changeType:"none",mail:"",mail_step:1,password_step:1,changemail:"",code:"",isSendCode:!1,validateCode:"",validateKey:"",codeForm:{code:""},codeRules:{code:[{validator:e,trigger:"change"}]},mailForm:{mail:"",code:""},mailFormRules:{mail:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],code:[{validator:e,trigger:"change"}]},counting:!1,emailFilter:""}},methods:{changeInfo:function(e){var t=this;if("password"==e){Object(i.e)({url:"/api/employment/certifications/passwordResetConfirm",type:"post",data:{userMail:this.curUserInfo.email,confirmUrl:"employment/resetPassword"},success:function(a){a.state?t.changeType=e:t.$message.error(a.message)}})}else this.changeType=e},sendCode:function(e){var t=this;if("toMail"!=e&&!this.mailForm.mail)return this.$message.error("请先输入新邮箱");if(this.counting)return!1;var a=this.$refs.sendCode,i=60;this.counting=!0;var s=setInterval(function(){0!=i?(a.innerHTML=i+"s",i--):(t.counting=!1,a.innerHTML="重新发送",clearInterval(s))},1e3);"toMail"==e?this.counting&&this.toOldMail():this.toNewMAil()},toOldMail:function(){var e=this;Object(i.e)({url:"/api/employment/certifications/sendVerificationCodeToOldMail",type:"post",data:{userMail:this.curUserInfo.email},success:function(t){t.state?(e.validateCode=t.data.verificationCode,e.validateKey=t.data.dataKey,e.counting=!1,e.$message.success("验证码发送成功,请注意查收")):e.$message.error("验证码发送失败,请稍后再试")}})},toNewMAil:function(){var e=this;Object(i.e)({url:"/api/employment/certifications/sendVerificationCodeToNewMail",type:"post",data:{userMail:this.mailForm.mail},success:function(t){t.state?(e.validateCode=t.data.verificationCode,e.validateKey=t.data.dataKey,e.counting=!1,e.$message.success("验证码发送成功,请注意查收")):e.$message.error(t.message)}})},toMail_step2:function(){var e=this;this.$refs.codeForm.validate(function(t){if(t){if(!e.validateKey)return e.$message.error("验证码过期,请重新发送验证码");Object(i.e)({url:"/api/employment/certifications/verificationCodeCheck",type:"post",data:{dataKey:e.validateKey,inputVerificationCode:e.codeForm.code,userMail:e.curUserInfo.email},success:function(t){t.state?e.mail_step=2:e.$message.error(t.message)}})}})},toMail_step3:function(){var e=this;this.$refs.mailForm.validate(function(t){if(t){Object(i.e)({url:"/api/employment/certifications/verificationCodeCheck",type:"post",data:{dataKey:e.validateKey,inputVerificationCode:e.mailForm.code,changeMail:!0,userMail:e.mailForm.mail,oldMail:e.curUserInfo.email},success:function(t){t.state?(e.$message.success("邮箱换绑成功!"),e.mailForm.code="",e.mailForm.mail="",e.codeForm.code=""):e.$message.error("邮箱换绑失败,请重新换绑"),e.changeCallBack()}})}})},changeCallBack:function(){this.changeType="none",this.mail_step=1,this.password_step=1,this.getUser()},sendRepeat:function(){},getUser:function(){var e=this;Object(i.e)({url:"/api/employment/user/getUser",type:"get",success:function(t){t.state?(e.curUserInfo=t.data,e.emailFilter=t.data.email.replace(t.data.email.substring(3,7),"****")):e.$message.error("获取用户信息失败")}})}},created:function(){this.getUser()},mounted:function(){}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"accountInfo"}},["none"==e.changeType?a("div",{staticClass:"info"},[e._m(0),e._v(" "),a("div",{staticClass:"content"},[a("ul",{staticClass:"infoList"},[a("li",{staticClass:"clearfix"},[a("p",[a("span",[e._v("邮箱:")]),e._v(e._s(e.emailFilter))]),a("a",{on:{click:function(t){return e.changeInfo("mail")}}},[e._v("更换邮箱")])]),e._v(" "),a("li",{staticClass:"clearfix"},[a("p",[a("span",[e._v("上次登录时间:")]),e._v(e._s(e.curUserInfo.lastLoginTime))]),a("a",{on:{click:function(t){return e.changeInfo("password")}}},[e._v("重置密码")])])])])]):e._e(),e._v(" "),"mail"==e.changeType?a("div",{attrs:{id:"mail"}},[1==e.mail_step?a("div",{staticClass:"changeMail"},[e._m(1),e._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"validate"},[a("p",{staticClass:"title",staticStyle:{"text-align":"left"}},[a("span",[e._v("为了保证您账号的安全,需要进行安全验证,你当前的邮箱是"),a("i",[e._v(e._s(e.curUserInfo.email.replace(e.curUserInfo.email.substring(3,7),"****")))])])]),e._v(" "),a("div",{staticClass:"form clearfix"},[a("el-form",{ref:"codeForm",staticClass:"changeMailForm",attrs:{model:e.codeForm,rules:e.codeRules}},[a("el-form-item",{attrs:{prop:"code"}},[a("el-input",{attrs:{placeholder:"请输入验证码"},model:{value:e.codeForm.code,callback:function(t){e.$set(e.codeForm,"code",t)},expression:"codeForm.code"}})],1)],1),e._v(" "),a("a",{ref:"sendCode",on:{click:function(t){return e.sendCode("toMail")}}},[e._v("发送验证码")])],1)]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.toMail_step2}},[e._v("下一步")])],1)]):e._e(),e._v(" "),2==e.mail_step?a("div",{staticClass:"changeMail"},[e._m(2),e._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"validate"},[a("div",{staticClass:"form clearfix"},[a("el-form",{ref:"mailForm",staticClass:"clearfix",attrs:{model:e.mailForm,rules:e.mailFormRules}},[a("el-form-item",{attrs:{prop:"mail"}},[a("el-input",{attrs:{placeholder:"请输入新邮箱"},model:{value:e.mailForm.mail,callback:function(t){e.$set(e.mailForm,"mail",t)},expression:"mailForm.mail"}})],1),e._v(" "),a("el-form-item",{staticClass:"changeMail_code",attrs:{prop:"code"}},[a("el-input",{attrs:{placeholder:"请输入验证码"},model:{value:e.mailForm.code,callback:function(t){e.$set(e.mailForm,"code",t)},expression:"mailForm.code"}})],1),e._v(" "),a("a",{ref:"sendCode",staticStyle:{"margin-top":"15px"},on:{click:function(t){return e.sendCode("toNewMail")}}},[e._v("发送验证码")])],1),e._v(" "),e._m(3)],1)]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.toMail_step3}},[e._v("下一步")])],1)]):e._e()]):e._e(),e._v(" "),"password"==e.changeType?a("div",{attrs:{id:"password"}},[a("div",{staticClass:"changePassword"},[e._m(4),e._v(" "),1==e.password_step?a("div",{staticClass:"content"},[a("p",{staticClass:"title"},[a("span",[e._v("激活邮件已发送至您的邮箱")]),a("i",[e._v(e._s(e.curUserInfo.email.replace(e.curUserInfo.email.substring(3,7),"****")))])]),e._v(" "),a("a",{staticClass:"missed",on:{click:e.missed}},[e._v("没有收到?")]),e._v(" "),a("el-button",{staticClass:"repeat",attrs:{type:"primary"},on:{click:function(t){return e.changeInfo("password")}}},[e._v("重新发送")])],1):e._e()])]):e._e()])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"top"},[t("h1",[this._v("账号信息")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"top"},[t("h1",[this._v("更改邮箱")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"top"},[t("h1",[this._v("更改邮箱")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"tip"},[t("i",[this._v("*")]),this._v("您可以使用 此邮箱登录或找回密码,请勿随意泄露邮箱地址，以免被不法分子利用")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"top"},[t("h1",[this._v("重置密码")])])}]};var o=a("VU/8")(s,r,!1,function(e){a("Rx3N"),a("Kbwf")},"data-v-86f533fe",null);t.default=o.exports}});
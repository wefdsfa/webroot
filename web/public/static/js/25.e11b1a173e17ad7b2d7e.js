webpackJsonp([25],{"0k+n":function(t,e,r){var i=r("T9ab"),n=r("rXbU"),o=r("u5CL"),s=r("HOPj"),a=r("PjAo");function u(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var h=u.prototype;h.addData=function(t){var e=new i(t);this.dataList.push(e),this.dataCache=null},h.isDark=function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},h.getModuleCount=function(){return this.moduleCount},h.make=function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=n.getRSBlocks(t,this.errorCorrectLevel),r=new o,i=0,a=0;a<e.length;a++)i+=e[a].dataCount;for(a=0;a<this.dataList.length;a++){var u=this.dataList[a];r.put(u.mode,4),r.put(u.getLength(),s.getLengthInBits(u.mode,t)),u.write(r)}if(r.getLengthInBits()<=8*i)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},h.makeImpl=function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var i=0;i<this.moduleCount;i++)this.modules[r][i]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=u.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},h.setupPositionProbePattern=function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var i=-1;i<=7;i++)e+i<=-1||this.moduleCount<=e+i||(this.modules[t+r][e+i]=0<=r&&r<=6&&(0==i||6==i)||0<=i&&i<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=i&&i<=4)},h.getBestMaskPattern=function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var i=s.getLostPoint(this);(0==r||t>i)&&(t=i,e=r)}return e},h.createMovieClip=function(t,e,r){var i=t.createEmptyMovieClip(e,r);this.make();for(var n=0;n<this.modules.length;n++)for(var o=1*n,s=0;s<this.modules[n].length;s++){var a=1*s;this.modules[n][s]&&(i.beginFill(0,100),i.moveTo(a,o),i.lineTo(a+1,o),i.lineTo(a+1,o+1),i.lineTo(a,o+1),i.endFill())}return i},h.setupTimingPattern=function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},h.setupPositionAdjustPattern=function(){for(var t=s.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var i=t[e],n=t[r];if(null==this.modules[i][n])for(var o=-2;o<=2;o++)for(var a=-2;a<=2;a++)this.modules[i+o][n+a]=-2==o||2==o||-2==a||2==a||0==o&&0==a}},h.setupTypeNumber=function(t){for(var e=s.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var i=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=i}for(r=0;r<18;r++){i=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=i}},h.setupTypeInfo=function(t,e){for(var r=this.errorCorrectLevel<<3|e,i=s.getBCHTypeInfo(r),n=0;n<15;n++){var o=!t&&1==(i>>n&1);n<6?this.modules[n][8]=o:n<8?this.modules[n+1][8]=o:this.modules[this.moduleCount-15+n][8]=o}for(n=0;n<15;n++){o=!t&&1==(i>>n&1);n<8?this.modules[8][this.moduleCount-n-1]=o:n<9?this.modules[8][15-n-1+1]=o:this.modules[8][15-n-1]=o}this.modules[this.moduleCount-8][8]=!t},h.mapData=function(t,e){for(var r=-1,i=this.moduleCount-1,n=7,o=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var u=0;u<2;u++)if(null==this.modules[i][a-u]){var h=!1;o<t.length&&(h=1==(t[o]>>>n&1)),s.getMask(e,i,a-u)&&(h=!h),this.modules[i][a-u]=h,-1==--n&&(o++,n=7)}if((i+=r)<0||this.moduleCount<=i){i-=r,r=-r;break}}},u.PAD0=236,u.PAD1=17,u.createData=function(t,e,r){for(var i=n.getRSBlocks(t,e),a=new o,h=0;h<r.length;h++){var l=r[h];a.put(l.mode,4),a.put(l.getLength(),s.getLengthInBits(l.mode,t)),l.write(a)}var g=0;for(h=0;h<i.length;h++)g+=i[h].dataCount;if(a.getLengthInBits()>8*g)throw new Error("code length overflow. ("+a.getLengthInBits()+">"+8*g+")");for(a.getLengthInBits()+4<=8*g&&a.put(0,4);a.getLengthInBits()%8!=0;)a.putBit(!1);for(;!(a.getLengthInBits()>=8*g||(a.put(u.PAD0,8),a.getLengthInBits()>=8*g));)a.put(u.PAD1,8);return u.createBytes(a,i)},u.createBytes=function(t,e){for(var r=0,i=0,n=0,o=new Array(e.length),u=new Array(e.length),h=0;h<e.length;h++){var l=e[h].dataCount,g=e[h].totalCount-l;i=Math.max(i,l),n=Math.max(n,g),o[h]=new Array(l);for(var f=0;f<o[h].length;f++)o[h][f]=255&t.buffer[f+r];r+=l;var c=s.getErrorCorrectPolynomial(g),d=new a(o[h],c.getLength()-1).mod(c);u[h]=new Array(c.getLength()-1);for(f=0;f<u[h].length;f++){var m=f+d.getLength()-u[h].length;u[h][f]=m>=0?d.get(m):0}}var p=0;for(f=0;f<e.length;f++)p+=e[f].totalCount;var v=new Array(p),C=0;for(f=0;f<i;f++)for(h=0;h<e.length;h++)f<o[h].length&&(v[C++]=o[h][f]);for(f=0;f<n;f++)for(h=0;h<e.length;h++)f<u[h].length&&(v[C++]=u[h][f]);return v},t.exports=u},HOPj:function(t,e,r){var i=r("c1w4"),n=r("PjAo"),o=r("tzRw"),s=0,a=1,u=2,h=3,l=4,g=5,f=6,c=7,d={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;d.getBCHDigit(e)-d.getBCHDigit(d.G15)>=0;)e^=d.G15<<d.getBCHDigit(e)-d.getBCHDigit(d.G15);return(t<<10|e)^d.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;d.getBCHDigit(e)-d.getBCHDigit(d.G18)>=0;)e^=d.G18<<d.getBCHDigit(e)-d.getBCHDigit(d.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return d.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case s:return(e+r)%2==0;case a:return e%2==0;case u:return r%3==0;case h:return(e+r)%3==0;case l:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case g:return e*r%2+e*r%3==0;case f:return(e*r%2+e*r%3)%2==0;case c:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new n([1],0),r=0;r<t;r++)e=e.multiply(new n([1,o.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case i.MODE_NUMBER:return 10;case i.MODE_ALPHA_NUM:return 9;case i.MODE_8BIT_BYTE:case i.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case i.MODE_NUMBER:return 12;case i.MODE_ALPHA_NUM:return 11;case i.MODE_8BIT_BYTE:return 16;case i.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case i.MODE_NUMBER:return 14;case i.MODE_ALPHA_NUM:return 13;case i.MODE_8BIT_BYTE:return 16;case i.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,i=0;i<e;i++)for(var n=0;n<e;n++){for(var o=0,s=t.isDark(i,n),a=-1;a<=1;a++)if(!(i+a<0||e<=i+a))for(var u=-1;u<=1;u++)n+u<0||e<=n+u||0==a&&0==u||s==t.isDark(i+a,n+u)&&o++;o>5&&(r+=3+o-5)}for(i=0;i<e-1;i++)for(n=0;n<e-1;n++){var h=0;t.isDark(i,n)&&h++,t.isDark(i+1,n)&&h++,t.isDark(i,n+1)&&h++,t.isDark(i+1,n+1)&&h++,0!=h&&4!=h||(r+=3)}for(i=0;i<e;i++)for(n=0;n<e-6;n++)t.isDark(i,n)&&!t.isDark(i,n+1)&&t.isDark(i,n+2)&&t.isDark(i,n+3)&&t.isDark(i,n+4)&&!t.isDark(i,n+5)&&t.isDark(i,n+6)&&(r+=40);for(n=0;n<e;n++)for(i=0;i<e-6;i++)t.isDark(i,n)&&!t.isDark(i+1,n)&&t.isDark(i+2,n)&&t.isDark(i+3,n)&&t.isDark(i+4,n)&&!t.isDark(i+5,n)&&t.isDark(i+6,n)&&(r+=40);var l=0;for(n=0;n<e;n++)for(i=0;i<e;i++)t.isDark(i,n)&&l++;return r+=10*(Math.abs(100*l/e/e-50)/5)}};t.exports=d},LpmL:function(t,e){t.exports={L:1,M:0,Q:3,H:2}},PjAo:function(t,e,r){var i=r("tzRw");function n(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var i=0;i<t.length-r;i++)this.num[i]=t[i+r]}n.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var o=0;o<t.getLength();o++)e[r+o]^=i.gexp(i.glog(this.get(r))+i.glog(t.get(o)));return new n(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=i.glog(this.get(0))-i.glog(t.get(0)),r=new Array(this.getLength()),o=0;o<this.getLength();o++)r[o]=this.get(o);for(o=0;o<t.getLength();o++)r[o]^=i.gexp(i.glog(t.get(o))+e);return new n(r,0).mod(t)}},t.exports=n},T9ab:function(t,e,r){var i=r("c1w4");function n(t){this.mode=i.MODE_8BIT_BYTE,this.data=t}n.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}},t.exports=n},Zy6H:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r("wpcj"),n=r("C331"),o=(i.a,{props:{data:{default:""}},data:function(){return{signInfo:{},pageIndex:0,pageSize:10,timer:null,userSignTimer:null,signType:"",signNumber:0,signName:"",qrcodeUrl:"",signUserData:[],isShowNoMoreDataTips:!1,isLoadMoreData:!1,loadingText:!1}},created:function(){var t=this;if(this.signInfo=this.data.data,this.signType=this.data.isSignOut?"SIGN_OUT":"SIGN_IN",this.signName=this.signInfo.signName+(this.data.isSignOut?"签退":"签到"),this._initUserSignInList(this.pageIndex),this.userSignTimer=setInterval(function(){t._initUserSignInList(0)},1e4),0===this.signInfo.qrCodeType)clearInterval(this.timer),this._initPage();else{var e=1e3*this.signInfo.qrCodeType;this.qrcodeRefresh(e)}},components:{Qrcode:i.a},methods:{_back:function(){this.userSignTimer&&clearInterval(this.userSignTimer),this.timer&&clearInterval(this.timer),this.$emit("removeBread",this.data)},_initUserSignInList:function(t){var e=this;this.loadingText=!0,this.isLoadMoreData=!1,Object(n.e)({url:"/api/sc/activityProcesses/getSignUsers?signId="+this.signInfo.signId+"&pageIndex="+t+"&pageSize="+this.pageSize+"&signType="+this.signType,type:"get",success:function(r){r.state?(e.loadingText=!1,e.signNumber=r.data.userCount,0===t&&(e.signUserData=[]),r.data.showSignUserData.forEach(function(t){e.signUserData.push(t)}),e.signUserData.length>e.pageSize?e.isShowNoMoreDataTips=!0:e.isShowNoMoreDataTips=!1,r.data.showSignUserData.length<e.pageSize?e.isLoadMoreData=!1:e.isLoadMoreData=!0):e.$vux.toast.show({text:r.message,position:"bottom",type:"text"})}})},_initPage:function(){var t=this;Object(n.e)({url:"/api/sc/activityProcesses/getSignCodeUrl/"+this.signInfo.activityId+"/"+this.signInfo.signId+"/"+this.signType,type:"get",success:function(e){e.state?t.qrcodeUrl=window.location.origin+e.data:t.$vux.toast.show({text:e.message,position:"bottom",type:"text"})}})},qrcodeRefresh:function(t){var e=this;clearInterval(this.timer),this.timer=setInterval(function(){e._initPage()},t)}},mounted:function(){var t=this;this.$pullUpToLoad({container:".user-list",up:{callback:function(){t.isLoadMoreData&&(t.pageIndex++,t._initUserSignInList(t.pageIndex))}}})}}),s={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"signInDetail"}},[r("view-box",[r("x-header",{staticClass:"signInDetail-header",attrs:{title:t.signName}},[r("i",{staticClass:"maticon back-icon",attrs:{slot:"overwrite-left"},domProps:{innerHTML:t._s(t.icons("navigate_before"))},on:{click:t._back},slot:"overwrite-left"},[t._v("navigate_before")])]),t._v(" "),r("div",{staticClass:"signInDetail-content"},[r("div",{staticClass:"signInDetail-qrcode"},[r("qrcode",{attrs:{value:t.qrcodeUrl,type:"img"}})],1),t._v(" "),r("group",{staticClass:"info-group"},[t.data.isSignOut?r("x-input",{attrs:{title:"已有 "+t.signNumber+" 人签退",readonly:""}}):r("x-input",{attrs:{title:"已有 "+t.signNumber+" 人签到",readonly:""}})],1),t._v(" "),r("div",{staticClass:"user-list"},[r("group",{staticClass:"info-group"},t._l(t.signUserData,function(e,i){return r("x-input",{key:i,attrs:{title:e.name,readonly:""}},[r("span",{staticClass:"signIn-time",attrs:{slot:"right"},slot:"right"},[t._v(t._s(e.signTime))])])}),1),t._v(" "),t.loadingText?r("div",{staticClass:"noMoreData"},[t._v("---加载中---")]):t._e(),t._v(" "),!t.isLoadMoreData&&t.isShowNoMoreDataTips[t.selectedTab]?r("div",{staticClass:"noMoreData"},[t._v("---没有更多数据了---")]):t._e()],1)],1)],1)],1)},staticRenderFns:[]};var a=r("VU/8")(o,s,!1,function(t){r("dGA+")},null,null);e.default=a.exports},c1w4:function(t,e){t.exports={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8}},"dGA+":function(t,e){},rXbU:function(t,e,r){var i=r("LpmL");function n(t,e){this.totalCount=t,this.dataCount=e}n.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],n.getRSBlocks=function(t,e){var r=n.getRsBlockTable(t,e);if(void 0==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var i=r.length/3,o=new Array,s=0;s<i;s++)for(var a=r[3*s+0],u=r[3*s+1],h=r[3*s+2],l=0;l<a;l++)o.push(new n(u,h));return o},n.getRsBlockTable=function(t,e){switch(e){case i.L:return n.RS_BLOCK_TABLE[4*(t-1)+0];case i.M:return n.RS_BLOCK_TABLE[4*(t-1)+1];case i.Q:return n.RS_BLOCK_TABLE[4*(t-1)+2];case i.H:return n.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},t.exports=n},tzRw:function(t,e){for(var r={glog:function(t){if(t<1)throw new Error("glog("+t+")");return r.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return r.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},i=0;i<8;i++)r.EXP_TABLE[i]=1<<i;for(i=8;i<256;i++)r.EXP_TABLE[i]=r.EXP_TABLE[i-4]^r.EXP_TABLE[i-5]^r.EXP_TABLE[i-6]^r.EXP_TABLE[i-8];for(i=0;i<255;i++)r.LOG_TABLE[r.EXP_TABLE[i]]=i;t.exports=r},u5CL:function(t,e){function r(){this.buffer=new Array,this.length=0}r.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=r},wpcj:function(t,e,r){"use strict";var i=r("0k+n"),n=r.n(i),o=r("LpmL"),s=r.n(o);String,Number,String,String,String,String;var a={name:"qrcode",props:{value:String,size:{type:Number,default:160},level:{type:String,default:"L"},bgColor:{type:String,default:"#FFFFFF"},fgColor:{type:String,default:"#000000"},type:{type:String,default:"img"}},mounted:function(){var t=this;this.$nextTick(function(){t.render()})},data:function(){return{imgData:""}},watch:{value:function(){this.render()},size:function(){this.render()},level:function(){this.render()},bgColor:function(){this.render()},fgColor:function(){this.render()}},methods:{render:function(){var t=this;if(void 0!==this.value){var e=new n.a(-1,s.a[this.level]);e.addData(function(t){var e,r,i,n;for(e="",i=t.length,r=0;r<i;r++)(n=t.charCodeAt(r))>=1&&n<=127?e+=t.charAt(r):n>2047?(e+=String.fromCharCode(224|n>>12&15),e+=String.fromCharCode(128|n>>6&63),e+=String.fromCharCode(128|n>>0&63)):(e+=String.fromCharCode(192|n>>6&31),e+=String.fromCharCode(128|n>>0&63));return e}(this.value)),e.make();var r=this.$refs.canvas,i=r.getContext("2d"),o=e.modules,a=this.size/o.length,u=this.size/o.length,h=(window.devicePixelRatio||1)/function(t){return t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1}(i);r.height=r.width=this.size*h,i.scale(h,h),o.forEach(function(e,r){e.forEach(function(e,n){i.fillStyle=e?t.fgColor:t.bgColor;var o=Math.ceil((n+1)*a)-Math.floor(n*a),s=Math.ceil((r+1)*u)-Math.floor(r*u);i.fillRect(Math.round(n*a),Math.round(r*u),o,s)})}),"img"===this.type&&(this.imgData=r.toDataURL("image/png"))}}}};var u={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("canvas",{directives:[{name:"show",rawName:"v-show",value:"canvas"===t.type,expression:"type === 'canvas'"}],ref:"canvas",style:{height:t.size+"px",width:t.size+"px"},attrs:{height:t.size,width:t.size}}),t._v(" "),"img"===t.type?r("img",{style:{height:t.size+"px",width:t.size+"px"},attrs:{src:t.imgData}}):t._e()])},staticRenderFns:[]},h=r("VU/8")(a,u,!1,null,null,null);e.a=h.exports}});
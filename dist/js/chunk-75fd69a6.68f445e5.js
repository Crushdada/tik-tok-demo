(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75fd69a6"],{2285:function(t,s,e){"use strict";e("f313")},"93d8":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"sign"},[e("div",{staticClass:"sign-header"},[e("router-link",{staticClass:"icon",attrs:{tag:"span",to:"/tpsign"}},[t._v("←")]),e("span",[t._v("帮助")])],1),e("div",{staticClass:"sign-content"},[t._m(0),e("div",{staticClass:"sign-box"},[e("div",{staticClass:"inp"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"inp-control input-pw",attrs:{type:"text",placeholder:"验证码是1234，没买短信验证api.."},domProps:{value:t.code},on:{input:[function(s){s.target.composing||(t.code=s.target.value)},t.changeCode]}})]),e("div",{staticClass:"sele"},[t._v(" "+t._s(t.time)+" ")])]),e("div",{staticClass:"code-btn"},[e("button",{staticClass:"load-btn",class:t.btnBg?"active":"",attrs:{disabled:t.disabled},on:{click:t.toMe}},[t.loading?e("div",{staticClass:"loads"}):t._e(),t._v(" 登录 ")])])])])},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"des"},[e("h2",[t._v("请输入验证码")]),e("p",[t._v("验证码已通过短信发送至+86 12314387295")])])}],a={data:function(){return{telErea:"",time:60,code:"",disabled:!0,btnBg:!1,loading:!1}},created:function(){this.getCode()},methods:{getCode:function(){this.timer(),this.codes="1234"},timer:function(){this.time>0?(this.time--,setTimeout(this.timer,1e3)):console.log(11)},changeCode:function(t){this.code=t.target.value,this.code==this.codes?(this.btnBg=!0,this.disabled=!1,this.loading=!0):console.log("验证码错误")},toMe:function(){this.$router.push("/me")}}},o=a,c=(e("2285"),e("2877")),d=Object(c["a"])(o,i,n,!1,null,null,null);s["default"]=d.exports},f313:function(t,s,e){}}]);
//# sourceMappingURL=chunk-75fd69a6.68f445e5.js.map
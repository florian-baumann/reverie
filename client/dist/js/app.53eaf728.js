(function(t){function e(e){for(var n,r,s=e[0],c=e[1],l=e[2],d=0,v=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&v.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(v.length)v.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==o[c]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},o={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"51c4":function(t,e,a){t.exports=a.p+"img/idea.fbc8e7e5.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("d3b7"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper",staticStyle:{"background-color":"green"},attrs:{id:"app"}},[a("NavBar")],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("NavDrawer",{attrs:{drawer:this.drawer}}),n("v-app-bar",{attrs:{app:"",color:"#45443e",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("router-link",{attrs:{to:"/home"}},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Logo",contain:"",src:a("51c4"),transition:"scale-transition",width:"40",to:"/"}})],1),n("h1",[t._v("reverie.")])],1),n("v-spacer"),t.user?t._e():[n("v-btn",{staticClass:"ma-2",attrs:{small:"",outlined:"",color:"#F3F348",to:"/auth"},nativeOn:{click:function(e){return t.isNew(!1)}}},[t._v(" Login ")]),n("v-btn",{attrs:{small:"",color:"#F3F348",to:"/auth"},nativeOn:{click:function(e){return t.isNew(!0)}}},[n("div",{attrs:{id:"signup_btn"}},[t._v("Sign Up")])])],t.user?n("div",[n("v-app-bar-nav-icon",{attrs:{color:"#F3F348"},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1):t._e()],2),n("v-content",{staticStyle:{"background-color":"#c7c1a6"}},[n("router-view")],1),t.user?n("div",[n("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{fab:"",color:"#F3F348",bottom:"",right:"",fixed:""},on:{click:function(e){t.dialog=!t.dialog}}},"v-btn",o,!1),a),[n("v-icon",[t._v("mdi-plus")])],1)]}}],null,!1,2544802798),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("NewIdeaDialog",{on:{close:t.changedialog}})],1)],1):t._e()],1)},s=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("v-card",{attrs:{"max-width":"auto",color:"#778d7a"}},[a("v-card-title",[t._v("Publish your new Idea !")]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",[a("v-text-field",{attrs:{label:"Head",counter:"42",maxlength:42,required:""},model:{value:t.heading,callback:function(e){t.heading=e},expression:"heading"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"9"}},[a("v-text-field",{attrs:{label:"add some tags",counter:"20",maxlength:"20",required:""},model:{value:t.newHashtag,callback:function(e){t.newHashtag=e},expression:"newHashtag"}})],1),a("v-col",{attrs:{col:"12",sm:"3"}},[a("v-btn",{staticClass:"my-7",attrs:{rounded:"",small:""},on:{click:function(e){return t.addHashtag()}}},[t._v("+")])],1)],1),a("v-row",[a("v-chip-group",{attrs:{column:""}},t._l(t.hashtags,(function(e,n){return a("v-chip",{key:n,attrs:{close:""},on:{"click:close":function(e){return t.deleteHashtag(n)}}},[t._v(" #"+t._s(e))])})),1)],1),a("v-row",{staticClass:"mt-3"},[a("v-textarea",{attrs:{outlined:"",name:"input-7-4",label:"Description",placeholder:"... "},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.$emit("close")}}},[t._v(" Close ")]),a("v-btn",{attrs:{color:"blue darken-1",title:""},on:{click:function(e){t.sendData(),t.$emit("close")}}},[t._v(" Save ")])],1)],1)],1)},l=[],u=(a("a4d3"),a("e01a"),a("a434"),a("bc3a")),d=a.n(u),v={name:"NewIdeasDialog",components:{},data:function(){return{heading:"",newHashtag:"",hashtags:[],description:""}},methods:{addHashtag:function(){this.newHashtag&&(this.hashtags.push(this.newHashtag),this.newHashtag="")},deleteHashtag:function(t){this.hashtags.splice(t,1)},sendData:function(){var t={id:null,user:{username:this.$store.state.user.username,id:5},tags:this.hashtags,link:null,head:this.heading,idea:this.description,upvotes:0,downvotes:0,comments:[]},e=JSON.stringify({newIdea:t});//!!! check ob alles existiert/richtige länge hat
d.a.post("http://localhost:4000/idea/new",e,{headers:{"Content-Type":"application/json"}}).then((function(t){var e=t.res;console.log(e)}),(function(t){console.log(t)}))}}},m=v,h=a("2877"),p=a("6544"),f=a.n(p),g=a("8336"),b=a("b0af"),w=a("99d9"),_=a("cc20"),y=a("ef9a"),x=a("62ad"),k=a("a523"),C=a("0fd9"),V=a("2fa4"),U=a("8654"),S=a("a844"),F=Object(h["a"])(m,c,l,!1,null,null,null),N=F.exports;f()(F,{VBtn:g["a"],VCard:b["a"],VCardActions:w["a"],VCardText:w["b"],VCardTitle:w["c"],VChip:_["a"],VChipGroup:y["a"],VCol:x["a"],VContainer:k["a"],VRow:C["a"],VSpacer:V["a"],VTextField:U["a"],VTextarea:S["a"]});var I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-navigation-drawer",{attrs:{app:"",right:"",dark:"",color:"#605c4a"},scopedSlots:t._u([t.user?{key:"append",fn:function(){return[n("div",{staticClass:"pa-2"},[n("v-list-item",{attrs:{link:"",to:"/"},on:{click:t.logout}},[n("v-list-item-action",[n("v-icon",{attrs:{color:"#F3F348"}},[t._v("mdi-logout")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Logout")])],1)],1)],1)]},proxy:!0}:{key:"append",fn:function(){return[n("v-btn",{staticClass:"ma-2",attrs:{small:"",outlined:"",color:"#F3F348",to:"/auth"},nativeOn:{click:function(e){return t.isNew(!1)}}},[t._v(" Login ")]),n("v-btn",{attrs:{small:"",color:"#F3F348",to:"/auth"},nativeOn:{click:function(e){return t.isNew(!0)}}},[n("div",{attrs:{id:"signup_btn"}},[t._v("Sign Up")])])]},proxy:!0}],null,!0),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",[n("v-list-item",{attrs:{"two-line":"",link:"",to:"/my"}},[n("v-list-item-avatar",[n("img",{attrs:{src:a("92ed")}})]),n("v-list-item-content",[n("v-list-item-title",[t._v("@"+t._s(t.user.username))]),n("v-list-item-subtitle",[t._v(t._s(t.user.karma))])],1)],1)],1),n("v-divider"),n("v-list",{attrs:{dense:""}},[n("v-list-item",{attrs:{link:"",to:"/home"}},[n("v-list-item-action",[n("v-icon",{attrs:{color:"#F3F348"}},[t._v("mdi-home")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Home")])],1)],1),n("v-list-item",{attrs:{link:"",to:"/values"}},[n("v-list-item-action",[n("v-icon",{attrs:{color:"#F3F348"}},[t._v("mdi-lightbulb-on-outline")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Values")])],1)],1),n("v-list-item",{attrs:{link:"",to:"/contact"}},[n("v-list-item-action",[n("v-icon",{attrs:{color:"#F3F348"}},[t._v("mdi-email")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Contact")])],1)],1)],1)],1)],1)},D=[],O={name:"NavDrawer",props:["drawer"],data:function(){return{drawe:!1}},methods:{logout:function(){this.$store.dispatch("logout")}},computed:{user:function(){return this.$store.state.user}}},T=O,$=a("ce7e"),A=a("132d"),E=a("8860"),j=a("da13"),P=a("1800"),L=a("8270"),H=a("5d23"),B=a("f774"),z=Object(h["a"])(T,I,D,!1,null,"a715539e",null),R=z.exports;f()(z,{VBtn:g["a"],VDivider:$["a"],VIcon:A["a"],VList:E["a"],VListItem:j["a"],VListItemAction:P["a"],VListItemAvatar:L["a"],VListItemContent:H["a"],VListItemSubtitle:H["b"],VListItemTitle:H["c"],VNavigationDrawer:B["a"]});var W={name:"App",components:{NewIdeaDialog:N,NavDrawer:R},data:function(){return{dialog:!1,drawer:!1}},methods:{isNew:function(t){this.$store.dispatch("isNewUser",!t)},changedialog:function(){this.dialog=!1}},computed:{user:function(){return this.$store.state.user}}},M=W,G=(a("f4eb"),a("7496")),J=a("40dc"),q=a("5bc1"),Y=a("a75b"),K=a("169a"),Q=a("adda"),X=Object(h["a"])(M,r,s,!1,null,null,null),Z=X.exports;f()(X,{VApp:G["a"],VAppBar:J["a"],VAppBarNavIcon:q["a"],VBtn:g["a"],VContent:Y["a"],VDialog:K["a"],VIcon:A["a"],VImg:Q["a"],VSpacer:V["a"]});var tt={name:"app",components:{NavBar:Z}},et=tt,at=(a("034f"),Object(h["a"])(et,o,i,!1,null,null,null)),nt=at.exports,ot=(a("caad"),a("8c4f")),it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper pa-6"},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-img",{staticClass:"my-3",attrs:{src:a("51c4"),contain:"",height:"200"}})],1)],1),n("v-row",{staticClass:"text-center"},[n("v-col",{staticClass:"mb-4"},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("hallo Leude")]),t._v(" ich hab die letzten monate was gebastelt..."),n("br"),t._v(" würde mich freuen wenn du das ganze mal bisschen testen könntest :)"),n("br"),n("br"),t._v(" das ganze ist aktuell noch ein Prototyp würde mich aber freuen wenn du mir bisschen feedback zu allem (Funktionalität, Nutzeroberfläche, Konzept, ...) geben könntest. Falls du die idee gut findest und mitmachen willst -> "),n("a",{attrs:{href:"https://github.com/florian-baumann/donno"}},[t._v("Github")]),t._v(". Aber natürlich sind nicht nur alle Programmierer gefragt, sondern einfach jeder der bock drauf hat. "),n("br"),t._v(" Allg gilt: Du musst nix können, nur bock drauf haben, wir finden schon ne baustelle für dich"),n("br"),n("br"),t._v(" feedback gerne mir schreiben oder als Post mit #feedback"),n("br"),n("br"),t._v(' Einfach account erstellen und ausprobieren. Um eine idee zu bekommen was das ganze soll einfach im Menü auf "values" klicken '),n("br"),t._v(" danke :)"),n("br"),n("br"),n("br"),n("br"),n("p",[n("a",{attrs:{href:"/contact"}},[t._v("Contact")])])])],1),n("p",[t._v(" server: "+t._s(t.idea)+" ")])],1)},rt=[],st={name:"Hello",data:function(){return{idea:null}},created:function(){var t=this;d.a.get("http://localhost:4000/").then((function(e){var a=e.data;t.idea=a}))}},ct=st,lt=Object(h["a"])(ct,it,rt,!1,null,null,null),ut=lt.exports;f()(lt,{VCol:x["a"],VImg:Q["a"],VRow:C["a"]});var dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{name:"wrapper"}},[a(t.loginOrRegister,{tag:"component"})],1)},vt=[],mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{name:"wrapper"}},[a("v-card",{staticClass:"mx-auto my-12",attrs:{"max-width":"344",color:"#5c6559",dark:""}},[a("v-card-title",[t._v("Login")]),a("v-card-text",[a("v-text-field",{attrs:{label:"Username",placeholder:"maxmustermann",outlined:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),a("v-card-text",[a("v-text-field",{attrs:{label:"Password",type:"password",placeholder:"xxx",outlined:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),400===t.status?a("p",[t._v("Invalid login info.")]):t._e(),a("v-btn",{staticClass:"ma-2",attrs:{small:"",outlined:"",color:"#F3F348",to:"/auth"},on:{click:t.login}},[t._v(" Login ")]),a("a",{directives:[{name:"show",rawName:"v-show",value:t.isNewUser,expression:"isNewUser"}],staticClass:"auth-link",on:{click:t.toggleComponent}},[t._v("Don't have an account? Create one.")])],1)],1)},ht=[],pt={name:"LoginUser",data:function(){return{username:"",password:"",status:null}},methods:{login:function(){var t=this;this.$store.dispatch("login",{username:this.username,password:this.password}).then((function(){t.$router.push({name:"Home"})})).catch((function(e){t.status=e.response.status}))},toggleComponent:function(){this.$store.dispatch("isNewUser",!this.isNewUser)}},computed:{isNewUser:function(){return this.$store.state.isNewUser}}},ft=pt,gt=Object(h["a"])(ft,mt,ht,!1,null,null,null),bt=gt.exports;f()(gt,{VBtn:g["a"],VCard:b["a"],VCardText:w["b"],VCardTitle:w["c"],VTextField:U["a"]});var wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{name:"wrapper"}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",color:"#5c6559",dark:""}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[a("v-card-title",[t._v("Register")]),a("v-card-text",[a("v-text-field",{attrs:{label:"username",placeholder:"maxmustermann",outlined:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),a("v-card-text",[a("v-text-field",{attrs:{label:"Email",placeholder:"xxx@xxx",outlined:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("v-card-text",[a("v-text-field",{attrs:{label:"Password",placeholder:"xxx",outlined:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),400===t.status?a("p",[t._v("Please enter different info.")]):t._e(),a("v-card-actions",[a("v-btn",{staticClass:"ma-2 justify-center",attrs:{small:"",outlined:"",color:"#F3F348",to:"/auth"},on:{click:t.register}},[t._v(" Register ")]),a("a",{directives:[{name:"show",rawName:"v-show",value:!t.isNewUser,expression:"!isNewUser"}],staticClass:"auth-link",on:{click:t.toggleComponent}},[t._v("Already have an account? Login.")])],1)],1)])],1)},_t=[],yt={name:"SignupUser",data:function(){return{username:"",email:"",password:"",status:null}},methods:{register:function(){var t=this;this.$store.dispatch("register",{username:this.username,email:this.email,password:this.password}).then((function(){t.$router.push({name:"Home"})})).catch((function(e){t.errors=e.response.data.errors}))},toggleComponent:function(){this.$store.dispatch("isNewUser",!this.isNewUser)}},computed:{isNewUser:function(){return this.$store.state.isNewUser}}},xt=yt,kt=Object(h["a"])(xt,wt,_t,!1,null,null,null),Ct=kt.exports;f()(kt,{VBtn:g["a"],VCard:b["a"],VCardActions:w["a"],VCardText:w["b"],VCardTitle:w["c"],VTextField:U["a"]});var Vt={components:{LoginUser:bt,SignupUser:Ct},computed:{isNewUser:function(){return this.$store.state.isNewUser},loginOrRegister:function(){return this.isNewUser?"LoginUser":"SignupUser"}},methods:{toggleComponent:function(){this.$store.dispatch("isNewUser",!this.isNewUser)}}},Ut=Vt,St=Object(h["a"])(Ut,dt,vt,!1,null,null,null),Ft=St.exports,Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},["Loading ideas..."!==t.ideas?t._l(t.ideas,(function(t){return a("IdeaCard",{key:t.id,attrs:{idea:t}})})):t._e(),a("v-pagination",{attrs:{length:t.totalPages,"total-visible":"7","next-icon":"mdi-menu-right","prev-icon":"mdi-menu-left",color:"#605C4A"},on:{input:t.handlePageChange},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],2)},It=[],Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto my-3",attrs:{"max-width":"344",color:"#605C4A",dark:""}},[a("v-card-text",[t._l(t.idea.tags,(function(e){return a("div",{key:e.i},[t._v(" #"+t._s(e)+" ")])})),a("p",{staticClass:"display-1 text--primary"},[t._v(" "+t._s(t.idea.head)+" ")]),a("p",[t._v(t._s(t.idea.author.username))]),a("div",{staticClass:"text--primary"},[t._v(" "+t._s(t.idea.description)+" ")])],2),a("v-card-actions",[t.isUpvoted||t.isDownvoted?t._e():a("div",[a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.upvote(t.idea.id)}}},[a("v-icon",[t._v("mdi-menu-up")])],1)],1),t.isDownvoted?a("div",[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-menu-up")])],1)],1):t._e(),t.isUpvoted?a("div",[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-arrow-up-drop-circle")])],1)],1):t._e(),t._v(" "+t._s(this.idea.userUpvotes.length-this.idea.userDownvotes.length)+" "),t.isUpvoted||t.isDownvoted?t._e():a("div",[a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.downvote(t.idea.id)}}},[a("v-icon",[t._v("mdi-menu-down")])],1)],1),t.isUpvoted?a("div",[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-menu-down")])],1)],1):t._e(),t.isDownvoted?a("div",[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-arrow-down-drop-circle")])],1)],1):t._e(),a("v-btn",{attrs:{icon:"",to:{name:"Idea",params:{id:t.idea.id}}}},[a("v-badge",{attrs:{content:t.idea.comments.length,color:"#45443E",overlap:"",dark:""}},[a("v-icon",[t._v("mdi-comment-outline")])],1)],1),a("v-btn",{attrs:{text:"",color:"#FFFFFF",to:{name:"Idea",params:{id:t.idea.id}}}},[t._v(" Read More ")])],1)],1)},Ot=[],Tt={name:"IdeaCard",props:{idea:{type:Object,default:function(){return{}}}},data:function(){return{isUpvoted:!1,isDownvoted:!1}},methods:{upvote:function(t){d.a.put("http://localhost:4000/idea/"+t+"/upvote").then((function(t){var e=t.res;console.log(e)}),(function(t){console.log(t)})),this.idea.userUpvotes.push("locally"),this.isUpvoted=!0},downvote:function(t){d.a.put("http://localhost:4000/idea/"+t+"/downvote").then((function(t){var e=t.res;console.log(e)}),(function(t){console.log(t)})),this.idea.userDownvotes.push("locally"),this.isDownvoted=!0}}},$t=Tt,At=a("4ca6"),Et=Object(h["a"])($t,Dt,Ot,!1,null,"6df8f026",null),jt=Et.exports;f()(Et,{VBadge:At["a"],VBtn:g["a"],VCard:b["a"],VCardActions:w["a"],VCardText:w["b"],VIcon:A["a"]});var Pt={name:"Home",components:{IdeaCard:jt},data:function(){return{ideas:"Loading ideas...",idea:[],page:1,totalPages:0,pageSize:3}},methods:{getRequestParams:function(t,e){var a={};return t&&(a["page"]=t-1),e&&(a["size"]=e),a},retrieveIdeas:function(){var t=this,e=this.getRequestParams(this.page,this.pageSize);d.a.get("http://localhost:4000/idea/feedpag",{params:e}).then((function(e){t.ideas=e.data.data.docs,t.totalPages=e.data.data.totalPages})).catch((function(t){console.log(t)}))},handlePageChange:function(t){this.page=t,this.retrieveIdeas()},handlePageSizeChange:function(t){this.pageSize=t,this.page=1,this.retrieveIdeas()},refreshList:function(){this.retrieveIdeas()}},created:function(){this.retrieveIdeas()}},Lt=Pt,Ht=a("891e"),Bt=Object(h["a"])(Lt,Nt,It,!1,null,null,null),zt=Bt.exports;f()(Bt,{VPagination:Ht["a"]});var Rt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Wt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pa-6"},[a("h1",[t._v("Ideas")]),t._v(' ""What makes an rich Planet rich?"" Ideas ar the most valuable good in this universe. No they are not. Ony if they are brougt to reality and this we want to change. Everyone was thinking like "yea, this could change the world" but you never wrote it down and forgott about it after looking on your phone. Maybe it would change the world but you dumbass ""forgott about itbecause of some shitty instagram distraction"". So just post it here on, maybe there s someone out there who can make it reality. there are no bad ideas, try to explain them from your viewpoint. '),a("br"),a("br"),a("h1",[t._v("problems")]),t._v(" Ideas are most likly solutions to a problem. So look around you, what is missing/ what is wrong/ what could go easier? Try to solve them "),a("br"),a("br"),a("h1",[t._v("Transparancy")]),t._v(" growing Brand growing Transparancy. You have a Question, ask! We will alsways let you know about the current numbers, give you a working api. We dont care about from which grubby website you came from, We will not track you with cookies. The only thing we will save on your device is for Login, nothing more. "),a("br"),a("br"),a("h1",[t._v("OpenSource")]),t._v(" part of our Transparancy. Look at our code, learn from it, help us to make it better. Why are there no big platforms who publish their code? We want you, especially the programmer amateurs, to learn from it. Dont feel intimidated by all th huge Platfrms, they write the same commands as you in your first project. "),a("br"),a("br"),a("h1",[t._v("Critic")]),t._v(" You are a security researcher and found security issues? PLEASE let us know. We appreciate helping and growing togther, of caouse we try to compensate your efforts fair. You found an uanagemessenen Post? Please report it. "),a("br"),a("br"),a("h1",[t._v("No Advertisement")]),t._v(" Stopp spamming, focus on the importent content. Because we will not add any advertisement to our Website, we need ypur help. So please donate and support this project "),a("br"),a("br"),a("h1",[t._v("One Language")]),t._v(" Ideas are mostly universal, to all Humans, so we need to make them accessable to all humans. Becourse English as language of the Internet we choose English. Also its not very hard to learn. (to all ou americans: we dont want to discribe every distance with bodyparts, so use the metric system) "),a("br"),a("br"),a("h1",[t._v("One Species: Homosapiens")]),t._v(" No Religion, No Color, No xxx. We, on this planet are all HUMANS. Be friendly we dont care about your language your culture your religion. Be friendly. Grow together. Make this world a better one. "),a("br"),a("br"),a("h1",[t._v("have fun")]),a("br"),a("br"),a("h1",[t._v("think big")]),t._v(" thry to inspire people to do great thinks. yu "),a("br"),a("br"),a("h1",[t._v("ecofriendly")]),t._v(" We only have one planet earth, so we need to protect it. Every electricity we use will be compensate throu planting trees and using ecoelectricity. "),a("br"),a("br"),a("h1",[t._v("Companies")]),t._v(" Companies who can relate on these Points can use this patform to get feedback on their products and deveop these thogether with their custoers ")])}],Mt={},Gt=Object(h["a"])(Mt,Rt,Wt,!1,null,null,null),Jt=Gt.exports,qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("IdeaFullSize",{attrs:{idea:this.idea}})],1)},Yt=[],Kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"mx-auto my-3",attrs:{"max-width":"344",color:"#605C4A",dark:""}},[a("v-card-text",[t.idea.tags?a("div",t._l(t.idea.tags,(function(e){return a("div",{key:e.i},[t._v(" #"+t._s(e)+" ")])})),0):t._e(),a("p",{staticClass:"display-1 text--primary"},[t._v(" "+t._s(t.idea.head)+" ")]),a("p",[t._v(t._s(t.idea.author.username))]),a("div",{staticClass:"text--primary"},[t._v(" "+t._s(t.idea.description)+" ")])]),a("v-card-actions",[t.isUpvoted||t.isDownvoted?t._e():a("div",[a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.upvote(t.idea.id)}}},[a("v-icon",[t._v("mdi-menu-up")])],1)],1),t.isDownvoted?a("div",[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-menu-up")])],1)],1):t._e(),t.isUpvoted?a("div",[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-arrow-up-drop-circle")])],1)],1):t._e(),t._v(" "+t._s(this.idea.userUpvotes.length-this.idea.userDownvotes.length)+" "),t.isUpvoted||t.isDownvoted?t._e():a("div",[a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.downvote(t.idea.id)}}},[a("v-icon",[t._v("mdi-menu-down")])],1)],1),t.isUpvoted?a("div",[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-menu-down")])],1)],1):t._e(),t.isDownvoted?a("div",[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-arrow-down-drop-circle")])],1)],1):t._e(),a("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),n),[a("v-icon",[t._v("mdi-comment-outline")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",[t._v("New Comment")])]),a("v-card-text",[a("v-textarea",{attrs:{rows:"2",outlined:"",placeholder:"... comment ..."},model:{value:t.newComment,callback:function(e){t.newComment=e},expression:"newComment"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1,t.sendNewComment()}}},[t._v(" Save ")])],1)],1)],1),a("v-spacer"),t.isAuthor?a("div",[a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.delt(t.idea.id)}}},[a("v-icon",[t._v("mdi-delete")])],1)],1):t._e()],1)],1),t._l(this.idea.comments,(function(t){return a("div",{key:t.id},[a("CommentFullSize",{attrs:{comment:t}})],1)}))],2)},Qt=[],Xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"mx-auto my-3",attrs:{"max-width":"344",color:"#605C4A",dark:""}},[a("v-card-text",[a("p",[t._v(t._s(t.comment.author.username))]),a("div",{staticClass:"text--primary"},[t._v(" "+t._s(t.comment.comment)+" ")])]),a("v-card-actions",[t.isUpvoted||t.isDownvoted?t._e():a("div",[a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.upvote(t.comment.id)}}},[a("v-icon",[t._v("mdi-menu-up")])],1)],1),t.isDownvoted?a("div",[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-menu-up")])],1)],1):t._e(),t.isUpvoted?a("div",[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-arrow-up-drop-circle")])],1)],1):t._e(),t._v(" "+t._s(this.comment.userUpvotes.length-this.comment.userDownvotes.length)+" "),t.isUpvoted||t.isDownvoted?t._e():a("div",[a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.downvote(t.comment.id)}}},[a("v-icon",[t._v("mdi-menu-down")])],1)],1),t.isUpvoted?a("div",[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-menu-down")])],1)],1):t._e(),t.isDownvoted?a("div",[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-arrow-down-drop-circle")])],1)],1):t._e(),a("v-spacer"),t.isAuthor?a("div",[a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.delt(t.comment._id)}}},[a("v-icon",[t._v("mdi-delete")])],1)],1):t._e()],1)],1)],1)},Zt=[],te={name:"CommentFullSize",props:["comment"],data:function(){return{isUpvoted:!1,isDownvoted:!1}},methods:{upvote:function(t){d.a.put("http://localhost:4000/comment/"+t+"/upvote").then((function(t){var e=t.res;console.log(e)}),(function(t){console.log(t)})),this.comment.userUpvotes.push("locally"),this.isUpvoted=!0},downvote:function(t){d.a.put("http://localhost:4000/comment/"+t+"/downvote").then((function(t){var e=t.res;console.log(e)}),(function(t){console.log(t)})),this.comment.userDownvotes.push("locally"),this.isDownvoted=!0},delt:function(t){d.a.delete("http://localhost:4000/comment/"+t+"/delete").then((function(t){var e=t.res;console.log(e)}),(function(t){console.log(t)}))}},computed:{user:function(){return this.$store.state.user},isAuthor:function(){return this.user.id===this.comment.author}}},ee=te,ae=Object(h["a"])(ee,Xt,Zt,!1,null,"3cc9a7be",null),ne=ae.exports;f()(ae,{VBtn:g["a"],VCard:b["a"],VCardActions:w["a"],VCardText:w["b"],VIcon:A["a"],VSpacer:V["a"]});var oe={name:"IdeaFullSize",props:["idea"],components:{CommentFullSize:ne},data:function(){return{isUpvoted:!1,isDownvoted:!1,dialog:!1,newComment:""}},methods:{upvote:function(t){d.a.put("http://localhost:4000/idea/"+t+"/upvote").then((function(t){var e=t.res;console.log(e)}),(function(t){console.log(t)})),this.idea.userUpvotes.push("locally"),this.isUpvoted=!0},downvote:function(t){d.a.put("http://localhost:4000/idea/"+t+"/downvote").then((function(t){var e=t.res;console.log(e)}),(function(t){console.log(t)})),this.idea.userDownsvotes.push("locally"),this.isDownvoted=!0},delt:function(t){d.a.delete("http://localhost:4000/idea/"+t+"/delete").then((function(t){var e=t.res;console.log(e)}),(function(t){console.log(t)})),window.history.back()},sendNewComment:function(){var t={comment:this.newComment},e=JSON.stringify({newComment:t});d.a.post("http://localhost:4000/comment/"+this.idea.id+"/new",e,{headers:{"content-Type":"application/json"}}).then((function(t){var e=t.res;console.log(e)}),(function(t){console.log(t)}))}},computed:{user:function(){return this.$store.state.user},isAuthor:function(){return this.user.id===this.idea.author._id}}},ie=oe,re=Object(h["a"])(ie,Kt,Qt,!1,null,"07ce3528",null),se=re.exports;f()(re,{VBtn:g["a"],VCard:b["a"],VCardActions:w["a"],VCardText:w["b"],VCardTitle:w["c"],VDialog:K["a"],VIcon:A["a"],VSpacer:V["a"],VTextarea:S["a"]});var ce={name:"Idea",components:{IdeaFullSize:se},data:function(){return{id:this.$route.params.id,idea:null}},created:function(){var t=this;d.a.get("http://localhost:4000/idea/id/"+this.id).then((function(e){var a=e.data;t.idea=a}))}},le=ce,ue=Object(h["a"])(le,qt,Yt,!1,null,"ff161264",null),de=ue.exports,ve=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticClass:"mx-auto my-3",attrs:{"max-width":"344",color:"#605C4A",dark:""}},[n("v-card-title",{staticClass:"white--text mt-8"},[n("v-avatar",{attrs:{size:"56"}},[n("img",{attrs:{alt:"user",src:a("92ed")}})]),n("p",{staticClass:"ml-3"},[t._v(" @ "+t._s(t.user.username)+" ")]),t._v(" "+t._s(t.user.karma)+" ")],1),n("v-tabs",{attrs:{"background-color":"transparent",color:"basil",grow:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab",[t._v(" Ideas ")]),n("v-tab-item",t._l(t.ideas,(function(t){return n("IdeaCard",{key:t.id,attrs:{idea:t}})})),1),n("v-tab",[t._v(" Upvotes ")]),n("v-tab-item",[n("v-card",{attrs:{flat:""}},[n("v-card-text",[t._v("...coming soon ...")])],1)],1),n("v-tab",[t._v(" About ")]),n("v-tab-item",[n("v-card",{attrs:{flat:""}},[n("v-card-text",[t._v("...coming soon ...")])],1)],1)],1)],1)],1)},me=[],he={name:"My",components:{IdeaCard:jt},data:function(){return{tab:0,ideas:[]}},created:function(){var t=this;d.a.get("http://localhost:4000/idea/user/me").then((function(e){var a=e.data;t.ideas=a}))},computed:{user:function(){return this.$store.state.user}}},pe=he,fe=a("8212"),ge=a("71a3"),be=a("c671"),we=a("fe57"),_e=Object(h["a"])(pe,ve,me,!1,null,"1bf7acd8",null),ye=_e.exports;f()(_e,{VAvatar:fe["a"],VCard:b["a"],VCardText:w["b"],VCardTitle:w["c"],VTab:ge["a"],VTabItem:be["a"],VTabs:we["a"]});var xe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("v-col",{staticClass:"mb-4"},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Contact: ")]),t._v(" Mail: florian.bmnn2@gmail.com "),a("br"),a("br"),t._v(" Feedback? please use #feedback "),a("br"),a("br"),t._v(" Want to contribute? -> "),a("a",{attrs:{href:"https://github.com/florian-baumann/donno"}},[t._v("Github")])])],1)},ke=[],Ce={name:"Contact"},Ve=Ce,Ue=Object(h["a"])(Ve,xe,ke,!1,null,null,null),Se=Ue.exports;f()(Ue,{VCol:x["a"]}),n["a"].use(ot["a"]);var Fe=[{path:"/",name:"Hello",component:ut},{path:"/auth",name:"Auth",component:Ft},{path:"/home",name:"Home",component:zt},{path:"/values",name:"Values",component:Jt},{path:"/contact",name:"Contact",component:Se},{path:"/idea/:id",name:"Idea",component:de},{path:"/my",name:"My",component:ye}],Ne=new ot["a"]({mode:"history",routes:Fe});Ne.beforeEach((function(t,e,a){var n=["/auth","/"],o=!n.includes(t.path),i=localStorage.getItem("user");if(o&&!i)return a("/auth");a()}));var Ie=Ne,De=a("f309");n["a"].use(De["a"]);var Oe=new De["a"]({theme:{dark:!1,default:"light",disable:!1,options:{cspNonce:void 0,customProperties:void 0,minifyTheme:void 0,themeCache:void 0},themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},dark:{primary:"#2196F3",secondary:"#424242",accent:"#FF4081",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"}}}}),Te=a("2f62");n["a"].use(Te["a"]);var $e=new Te["a"].Store({state:{user:null,isNewUser:!0},mutations:{SET_USER_DATA:function(t,e){t.user=e,localStorage.setItem("user",JSON.stringify(e)),d.a.defaults.headers.common["x-access-token"]="".concat(e.accessToken)},LOGOUT:function(){localStorage.removeItem("user"),location.reload()},IS_NEW_USER:function(t,e){t.isNewUser=e}},actions:{register:function(t,e){var a=t.commit;return d.a.post("http://localhost:4000/auth/signup",e).then((function(t){var e=t.data;console.log("data is: ",e),a("SET_USER_DATA",e)}))},login:function(t,e){var a=t.commit;return d.a.post("http://localhost:4000/auth/signin",e).then((function(t){var e=t.data;a("SET_USER_DATA",e)}))},logout:function(t){var e=t.commit;e("LOGOUT")},isNewUser:function(t,e){var a=t.commit;a("IS_NEW_USER",e)}}});n["a"].config.productionTip=!1,new n["a"]({router:Ie,vuetify:Oe,store:$e,render:function(t){return t(nt)},created:function(){var t=this,e=localStorage.getItem("user");if(e){var a=JSON.parse(e);this.$store.commit("SET_USER_DATA",a)}d.a.interceptors.response.use((function(t){return t}),(function(e){return console.log(e.response),401===e.response.status&&(t.$router.push("/"),t.$store.dispatch("logout")),Promise.reject(e)}))}}).$mount("#app")},"85ec":function(t,e,a){},"92ed":function(t,e,a){t.exports=a.p+"img/head.9acfe78b.jpeg"},dcfe:function(t,e,a){},f4eb:function(t,e,a){"use strict";a("dcfe")}});
//# sourceMappingURL=app.53eaf728.js.map
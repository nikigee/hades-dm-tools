(function(){var t={9198:function(t,e,n){"use strict";var r=n(5130),a=n(6768);function o(t,e){const n=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.Wv)(n)}var s=n(1241);const l={},c=(0,s.A)(l,[["render",o]]);var u=c,d=n(1387),i=n(4232);const p=t=>((0,a.Qi)("data-v-50b3a2bb"),t=t(),(0,a.jt)(),t),m=p((()=>(0,a.Lk)("div",{class:"py-3 px-5 d-flex align-items-center flex-wrap justify-content-between"},[(0,a.Lk)("div",null,[(0,a.Lk)("h1",{class:"h3 m-0"},"UPLINK v.0.1"),(0,a.Lk)("span",{class:"text-primary-emphasis bg-primary-subtle p-1 px-3"},"TACTICAL BATTLE INTERFACE")]),(0,a.Lk)("div",{class:""},[(0,a.Lk)("span",null,"Welcome, Hades.")])],-1))),f={class:"row g-0 mt-4"},v={class:"col"},b={class:"container"},h={class:"d-flex flex-wrap"},k={class:"position-absolute top-0 end-0"},g=p((()=>(0,a.Lk)("i",{class:"bi bi-x"},null,-1))),L={class:"card-title"},y={class:"mb-1"},x={class:"col-lg-3"};function C(t,e,n,r,o,s){const l=(0,a.g2)("btn"),c=(0,a.g2)("tokenHealth"),u=(0,a.g2)("Card"),d=(0,a.g2)("addCard");return(0,a.uX)(),(0,a.CE)("div",null,[m,(0,a.Lk)("div",f,[(0,a.Lk)("div",v,[(0,a.Lk)("div",b,[(0,a.Lk)("div",h,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.tokens,((t,e)=>((0,a.uX)(),(0,a.Wv)(u,{class:"card-token mx-2 overflow-visible"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",k,[(0,a.bF)(l,{class:"btn",onClick:t=>s.removeToken(e)},{default:(0,a.k6)((()=>[g])),_:2},1032,["onClick"])]),(0,a.Lk)("h5",L,(0,i.v_)(t.name),1),(0,a.Lk)("p",y,"AC: "+(0,i.v_)(t.ac),1),(0,a.bF)(c,{currentHP:t.currentHP,maxHP:t.hp,addHP:t.addHP},null,8,["currentHP","maxHP","addHP"])])),_:2},1024)))),256))])])]),(0,a.Lk)("div",x,[(0,a.bF)(d,{class:"pe-3"})])])])}n(4114);var H=n(144);const P={class:"button btn btn-outline-primary px-2 py-1 mx-1 text-uppercase"};function w(t,e,n,r,o,s){return(0,a.uX)(),(0,a.CE)("button",P,[(0,a.RG)(t.$slots,"default",{},void 0,!0)])}var _={name:"mdButton"};const I=(0,s.A)(_,[["render",w],["__scopeId","data-v-6e79143b"]]);var O=I;const E={class:"card bg-primary-subtle border-0 shadow m-1 overflow-hidden"},F={class:"card-body p-4"};function T(t,e,n,r,o,s){return(0,a.uX)(),(0,a.CE)("div",E,[n.bgImage?((0,a.uX)(),(0,a.CE)("div",{key:0,class:"card-banner",style:(0,i.Tr)({backgroundImage:s.getBg(n.bgImage)})},null,4)):(0,a.Q3)("",!0),(0,a.Lk)("div",F,[(0,a.RG)(t.$slots,"default",{},void 0,!0)])])}var A={name:"Card",props:{bgImage:String},methods:{getBg:t=>t?"url("+n(1382)("./"+t)+")":"none"}};const B=(0,s.A)(A,[["render",T],["__scopeId","data-v-f8d3b056"]]);var S=B;const j={class:"container"},$=(0,a.Lk)("h3",{class:"text-uppercase"},"Add an Entity",-1),N={class:"mb-2"},X=(0,a.Lk)("label",{class:"form-label text-muted"},"Name",-1),J={class:"mb-2"},U=(0,a.Lk)("label",{class:"form-label text-muted"},"Health Points",-1),W={class:"mb-2"},M=(0,a.Lk)("label",{class:"form-label text-muted"},"AC",-1),V={class:"mt-3"};function D(t,e,n,o,s,l){const c=(0,a.g2)("mdButton");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.Lk)("div",j,[$,(0,a.Lk)("div",N,[X,(0,a.bo)((0,a.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=e=>t.$parent.f.name=e)},null,512),[[r.Jo,t.$parent.f.name]])]),(0,a.Lk)("div",J,[U,(0,a.bo)((0,a.Lk)("input",{type:"number",min:"0",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=e=>t.$parent.f.hp=e)},null,512),[[r.Jo,t.$parent.f.hp]])]),(0,a.Lk)("div",W,[M,(0,a.bo)((0,a.Lk)("input",{type:"number",min:"0",max:"30",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=e=>t.$parent.f.ac=e)},null,512),[[r.Jo,t.$parent.f.ac]])]),(0,a.Lk)("div",V,[(0,a.bF)(c,{class:"ms-0",onClick:e[3]||(e[3]=e=>t.$parent.addToken())},{default:(0,a.k6)((()=>[(0,a.eW)("Add")])),_:1}),(0,a.bF)(c,{class:"btn-outline-secondary me-0",onClick:e[4]||(e[4]=e=>t.$parent.clearForm())},{default:(0,a.k6)((()=>[(0,a.eW)("Clear")])),_:1})])])])}var R={name:"addCard",components:{Card:S,mdButton:O}};const K=(0,s.A)(R,[["render",D]]);var G=K;const Q={class:"dropdown"},q={class:"p-1 px-2 rounded border border-primary-subtle text-primary text-center","data-bs-toggle":"dropdown","aria-expanded":"false"},z={class:"dropdown-menu dropdown-menu-end",style:{}},Y={class:"mb-2"},Z=(0,a.Lk)("label",{for:"healthInput",class:"form-label"},"Modify Health",-1),tt={class:"d-flex justify-content-center"};function et(t,e,n,o,s,l){const c=(0,a.g2)("mdButton");return(0,a.uX)(),(0,a.CE)("div",Q,[(0,a.Lk)("div",q,(0,i.v_)(n.currentHP)+" / "+(0,i.v_)(n.maxHP),1),(0,a.Lk)("ul",z,[(0,a.Lk)("form",{class:"px-3 py-2 text-center",onSubmit:e[3]||(e[3]=(...e)=>t.runForm&&t.runForm(...e))},[(0,a.Lk)("div",Y,[Z,(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>s.hpInt=t),type:"text",class:"form-control",id:"healthInput",placeholder:"5",autofocus:"",style:{width:"140px"}},null,512),[[r.Jo,s.hpInt]])]),(0,a.Lk)("div",tt,[(0,a.bF)(c,{onClick:e[1]||(e[1]=t=>n.addHP(s.hpInt))},{default:(0,a.k6)((()=>[(0,a.eW)("Heal")])),_:1}),(0,a.bF)(c,{onClick:e[2]||(e[2]=t=>n.addHP(s.hpInt,!0))},{default:(0,a.k6)((()=>[(0,a.eW)("Damage")])),_:1})])],32)])])}var nt={name:"tokenHealth",data(){return{hpInt:""}},components:{mdButton:O},props:{currentHP:Number,maxHP:Number,addHP:Function},methods:{}};const rt=(0,s.A)(nt,[["render",et]]);var at=rt;class ot{constructor(t={}){const{name:e="Monster",ac:n=10,hp:r=5}=t;this.name=e,this.ac=n,this.hp=r,this.currentHP=r}addHP(t,e=!1){const n=this.$md.Dice.x(t);this.currentHP+=e?-1*n.total:n.total,this.currentHP>this.hp&&(this.currentHP=this.hp)}}var st={name:"HomeView",components:{mdButton:O,Card:S,addCard:G,tokenHealth:at},methods:{clearForm(){this.f={name:"",hp:0,ac:0}},addToken(){this.f.name&&(this.tokens.push(new ot(this.f)),this.saveBattle())},removeToken(t){this.tokens.splice(t,1),this.saveBattle()},saveBattle(){localStorage.setItem("monsterList",JSON.stringify(this.tokens))},restoreBattle(){let t=localStorage.getItem("monsterList");t=JSON.parse(t),this.tokens=t}},data(){return{f:{name:"",hp:0,ac:0}}},setup(){const t=(0,H.KR)([]);return(0,a.sV)((()=>{let e=localStorage.getItem("monsterList");e=JSON.parse(e),t.value=e||[]})),{tokens:t}}};const lt=(0,s.A)(st,[["render",C],["__scopeId","data-v-50b3a2bb"]]);var ct=lt;const ut=[{path:"/",name:"home",component:ct}],dt=(0,d.aE)({history:(0,d.Bt)(),routes:ut});var it=dt;n(8077);(0,r.Ef)(u).use(it).mount("#app")},1382:function(t){function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=function(){return[]},e.resolve=e,e.id=1382,t.exports=e}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,o){if(!r){var s=1/0;for(d=0;d<t.length;d++){r=t[d][0],a=t[d][1],o=t[d][2];for(var l=!0,c=0;c<r.length;c++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(l=!1,o<s&&(s=o));if(l){t.splice(d--,1);var u=a();void 0!==u&&(e=u)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[r,a,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,o,s=r[0],l=r[1],c=r[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(c)var d=c(n)}for(e&&e(r);u<s.length;u++)o=s[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(d)},r=self["webpackChunkhades"]=self["webpackChunkhades"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(9198)}));r=n.O(r)})();
//# sourceMappingURL=app.20909db8.js.map
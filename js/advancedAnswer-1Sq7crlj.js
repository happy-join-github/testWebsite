import{u as t}from"./useadvanced-Dfau-Rwd.js";import{_ as s,m as o}from"./index-CR33AVyE.js";import{p as n,q as e,z as i,F as u,s as a,k as r,C as l,A as c,B as m,u as d}from"./vendor-D5Q1vBFt.js";const p={class:"app"},h={class:"contentArea"},g={class:"Area"},k=["onUpdate:modelValue"],y={key:1},M=["onUpdate:modelValue"],f={key:3},b={colspan:"5"};const v=s({data:()=>({commuincation:t(),BankUrl:o.BankUrl,count:0,errorList:[]}),methods:{isgreen(t,s){return this.commuincation.solutionMsg().userresult[t][s]===this.commuincation.solutionMsg().okresult[t][s]}},mounted(){for(let t=0;t<this.commuincation.solutionMsg().userresult.length;t++)for(let s=0;s<this.commuincation.solutionMsg().okresult.length;s++)this.commuincation.solutionMsg().userresult[t][s]!==this.commuincation.solutionMsg().okresult[t][s]&&(this.count++,this.errorList.push([this.commuincation.solutionMsg().list[t][s],this.commuincation.solutionMsg().userresult[t][s]]));fetch(this.BankUrl+"/UserInp2Back2",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({count:this.count,error:this.errorList,date:Date.now()})}).then((t=>t.text())).then((t=>{})).catch((t=>{}))}},[["render",function(t,s,o,v,U,j){return r(),n("div",p,[e("div",h,[e("table",g,[e("tbody",null,[s[2]||(s[2]=e("tr",null,[e("td",{colspan:"5"},[i(" 请查看作答结果, "),e("span",{class:"green"},"绿色为正确"),i(", "),e("span",{class:"red"},"红色错误")])],-1)),(r(!0),n(u,null,a(U.commuincation.solutionMsg().list,((t,o)=>(r(),n("tr",{key:o},[(r(!0),n(u,null,a(t,((t,e)=>(r(),n("td",{key:t.id,class:l({red:!j.isgreen(o,e),green:j.isgreen(o,e)})},[t.a?(r(),n("span",y,d(t.a),1)):c((r(),n("input",{key:0,type:"text","onUpdate:modelValue":t=>U.commuincation.solutionMsg().userresult[o][e]=t,readonly:""},null,8,k)),[[m,U.commuincation.solutionMsg().userresult[o][e],void 0,{number:!0}]]),s[1]||(s[1]=i(" × ")),t.b?(r(),n("span",f,d(t.b),1)):c((r(),n("input",{key:2,type:"text","onUpdate:modelValue":t=>U.commuincation.solutionMsg().userresult[o][e]=t,readonly:""},null,8,M)),[[m,U.commuincation.solutionMsg().userresult[o][e],void 0,{number:!0}]]),i(" = "+d(t.result),1)],2)))),128))])))),128)),e("tr",null,[e("td",b,[e("button",{onClick:s[0]||(s[0]=t=>this.$router.push("/koujue/advancedProject"))},"返回上一页")])])])])])])}],["__scopeId","data-v-3c0ad503"]]);export{v as default};
function t(){let t=[];for(let a=1;a<10;a++)for(let l=1;l<a+1;l++)t.push({id:10*a+l,a:l,b:a,result:a*l});t=t.sort((()=>Math.random()-.5));let l=[...t];const e=new Array(t.length).fill(0);for(let a=0;a<t.length;a++)e[a]=Math.random().toFixed(2);let n=[];function r(t){const l=[];for(let e=0;e<t.length;e+=5)l.push(t.slice(e,e+5).flat());return l}l.forEach(((t,l)=>{e[l]<.5?n.push(t.a):n.push(t.b),e[l]<.5?t.a=null:t.b=null})),l=r(l),n=r(n);return{listbackup:l,answer:n,datatime:[0,10,0]}}export{t as a};

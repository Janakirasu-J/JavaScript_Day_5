//For Loop

let val = [12, 13, 14, 15, 16];

for (let i = 0; i <=val.length-1; i++) {
  console.log(val[i]*2);
}

//forEach

val.forEach(ele=>{console.log(ele*2);
})

//For In
for(let key in val){
    console.log(val[key]*2);

//MAP    
    
}
val.map((ele)=>console.log(ele*2)
);

for(let val1 of val ){
  console.log(val1*2);
  
}

//MAP

let fd = ["apple", "Mango", "Ornge"];
let res = fd.map((ele) => ele+"s");

console.log(res);

//filter

let array=[1,2,3,4,5,6,,7,8]
let res1=array.filter((ele)=>ele%2!==0)
console.log("ODD VAL",res1);

let emty=[]
for(let i=0;i<array.length;i++){
  if(array[i]%2===0){
    emty.push(array[i])
  }
}
console.log("Evan VAl",emty);


 let g=[1,2,3,4,5,6,7,8,9,10]

 let res2=g.filter((ele)=>ele>3)
 console.log(res2);

const valu1=[12,2,3,4,5,6]
const box1=[]
for(let i=0;i<valu.length;i++){
sum=+sum[i]
box1.push[sum]
}
console.log(box1);

//reduce

 
const vl=[1,2,3,4,5,6,7,8,10]
const r4=vl.reduce((acc,cv)=>{
return acc+cv
},0)
console.log(r4);


const valuse=[12,2,3,4,5,6]
const fin=valuse.reduce((acc,cv)=>{
return acc*cv
},1) 
console.log(fin);



const valu=[12,2,3,4,5,6]
const rf=valu.reduce((acc,cv)=>{
if(cv>acc){
  acc=cv
}
return acc

},0)
console.log(rf);

const max=[15,7,89,90,78,34,56]
const outPut=max.reduce((acc,cv)=>{
return Math.max(acc,cv)
},0)
console.log(outPut);

let arrK=[1,2,3,4,5,6,7,8,9,10]
let k=1
function reslt (arrK,k){
  for(let i=0;i<k;i++){
   arrK. push(arrK[i])
  }
  for(let i=0;i<k;i++){
   arrK.shift()
  }
  return arrK
}
console.log(reslt(arrK,k));

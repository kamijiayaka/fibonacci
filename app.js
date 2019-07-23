'use strict';
let result = 1;
var fibMap = new Map();
fibMap.set(0,0);
fibMap.set(1,1);


function fib(n) {
if(n>=2){
    result=fibMap.get(n-1)+fibMap.get(n-2);
    fibMap.set(n,result);
  }else if(n===1||n===0){
    result= fibMap.get(n)
  }
  return result;
}
const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}
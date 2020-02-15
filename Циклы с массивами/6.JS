let obj = {1: 125, 2: 225, 3: 128, 4: 356, 5: 145, 6: 281, 7: 452}; 
let arr = []; 

for(let key in obj) { 
let firstNum = (String(obj[key]))[0]; 

if(firstNum == 1 || firstNum == 2 ) { 
arr.push(obj[key]); 
} 
} 
console.log(arr);

ИЛИ:

let obj = {1: 125, 2: 225, 3: 128, 4: 356, 5: 145, 6: 281, 7: 452}; 
let arr = []; 

for(let key in obj) { 
let firstNum = (String(obj[key]))[0]; 
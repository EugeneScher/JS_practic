
let arr = ['a', 'b', 'c', 'd', 'e']; 
let obj = {}; 
let i = 1; 

for(let elem of arr) { 
obj[i] = elem; 
i ++; 
} 
console.log(obj);
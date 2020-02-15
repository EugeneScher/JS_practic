let str = 'var_test_text'; 

let arr = str.split("_"); 

for (let i = 1; i < arr.length; i++) { 
arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1); 
} 

str = arr.join(''); 

console.log(str);
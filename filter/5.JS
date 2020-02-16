let arr = [10,1, 2, -3, 254, 15]; 
let res=arr.filter(function(elem,index){ 
if(elem*index<30){ 
return true; }else{ return false; } }); console.log(res)
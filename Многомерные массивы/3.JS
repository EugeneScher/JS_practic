let users = [ 
{ 
name: 'name1', 
age: 31, 
active: true, 
}, 
{ 
name: 'name2', 
age: 32, 
active: false, 
}, 
{ 
name: 'name3', 
age: 33, 
active: true, 
}, 
{ 
name: 'name4', 
age: 34, 
active: false, 
}, 
{ 
name: 'name5', 
age: 35, 
active: true, 
}, 
]; 

for (let elem of users) { 
if (elem.active) { 
document.write(elem.name + '<br>'); 
} 
}
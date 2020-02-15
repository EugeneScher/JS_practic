function Tru ( users, nam ) { 
for ( let elem of users ) { 
if ( elem [ 'name' ] == nam) { 
elem [ 'active' ] = true; 
return users; 
} 
} 
} 
nam = 'name2' 
console.log ( Tru (users, nam)) 

function Fal ( users, nam ) { 
for ( let elem of users ) { 
if ( elem [ 'name' ] == nam) { 
elem [ 'active' ] = false; 
return users; 
} 
} 
} 
let nam = 'name3' 
console.log ( Fal (users, nam))
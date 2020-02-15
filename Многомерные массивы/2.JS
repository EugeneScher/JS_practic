for ( let elem of affairs ) { 
for ( let key in elem ) { 
if ( elem ['date'] == '2019-12-30' ) { 
console.log ( elem ['event'] ) 
} 
} 
} 
Решение:affairs = { 
'2019-12-29': ['name1','name3','name5','name7'], 
'2019-12-30': ['name4','name8','name9'], 
'2019-12-31':['name2','name6'] 
} 
for ( let key in affairs ) { 
if ( key == '2019-12-30') { 
console.log(affairs[ key ].join(',')) 
} 
}
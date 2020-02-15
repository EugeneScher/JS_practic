let data = { 
2018: { 
11: { 
29: [1, 2, 3], 
30: [4, 5], 
}, 
12: { 
30: [6, 7], 
31: [8, 9], 
}, 
}, 
2019: { 
12: { 
29: [10, 11], 
30: [12, 13], 
31: [14, 15], 
} 
}, 
} 
let arr = [ ]; 

for (let year in data){ 
for(let month in data[year]){ 
for (let day in data[year][month]){ 
for(let num of data[year][month][day]){ 
arr.push(num); 
} 
} 
} 
} 
console.log(arr);
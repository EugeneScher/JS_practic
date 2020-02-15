arr = [];obj = {};arr1 = [];
for (let elem of data) {
arr.push(elem["country"]);
}
for (let elem1 of arr) {
if(obj[elem1] === undefined){
obj[elem1]++
}
}
for(let key in obj){
arr1.push(key);
}
console.log(`Всего стран: ${arr1.length}`);
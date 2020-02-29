var elem = document.querySelector('input');
elem.addEventListener('blur', function() {
var res = 0;
var arr = elem.value.split('');
for (var i=0; i<arr.length; i++) {
res += +arr[i];
}
alert(res);
})
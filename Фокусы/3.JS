var elem = document.querySelector('#input');
elem.addEventListener('blur', function() {
var arr = elem.value.split(' ');
document.getElementById('name').value = arr[0] 
document.getElementById('surname').value = arr[1] 
document.getElementById('secondname').value = arr[2] 
})
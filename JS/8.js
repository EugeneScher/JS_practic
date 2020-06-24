var wrapper = document.querySelector('wr');
var countInput = document.getElementById('count');
var butM = document.getElementById('bminus');
var butP = document.getElementById('bplus');
var units = countInput.value.replace(/\d/g, '');
butP.onclick = function(){
    countInput.value = parseInt(countInput.value)+1+units;
};
butM.onclick = function(){
    if(parseInt(countInput.value) > 1) {
        countInput.value = parseInt(countInput.value)-1+units;
    }
};
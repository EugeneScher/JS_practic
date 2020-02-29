//3
function f03(){
	var	inp = document.getElementById("num4");
	var p = document.getElementById("res4");
	var arr = inp.value.split(',');
	var sum = 0;
	for(var i=0; i<arr.length; i++){
		sum = sum + Number(arr[i]);
	}
	p.innerHTML = 'Srednee arifm number = '+sum/i;
}

//4
function pod(){
	var	inp = document.getElementById("num3");
	var p3 = document.getElementById("result3");
	var arr = inp.value.split('');
	var sum = 0;
	for(var i=0; i<arr.length; i++){
		sum = sum + Number(arr[i]);
	}
	p3.innerHTML = 'Result Sum = '+sum;
}
//6
function f06(){
	var	fio = document.getElementById("fio6");
	var arr = fio.value.split(' ');
	for(var i=0; i<arr.length; i++){
		arr[i] = fBig(arr[i]);
	}
	fio.value = arr.join(' ');
}
//8
function dat(){
	var	str = document.getElementById("str9");
	var arr = str.value.split('.');
	arr.reverse();
	str.value = arr.join('-');
}
//9
    function mad(){
	var	str = document.getElementById("str12");
	var	p = document.getElementById("p12");
	var arr = str.value.split('');
	arr.reverse();
	var str1 = str.value;
	var str2 = arr.join('');
	var nn='Слово читается по-разному.';
	if(str1==str2){ nn='Слово читается одинаково с начала и с конца.';}
	p.innerHTML = 'Ваше слово: '+str1+'; перевернутое слово: '+str2+'. '+nn;
}
//10
function ppp(){
	var	str = document.getElementById("str13");
	var	p = document.getElementById("p13");
	var arr = str.value.split('');
	arr.reverse();
	var num1 = arr[0];
	var str1='';
	if(num1==3){str1='. Ура! Вы ввели число 3!'}
	p.innerHTML = 'Последний введенный символ: '+num1+str1;
}
//11
function numb(){
	var	p = document.querySelectorAll("#div14 p");
	for(var i=0; i<p.length; i++){
		p[i].innerHTML = p[i].innerHTML + (i+1);
	}
}
function sortArr(a,b){
	if(a > b)
		return 1;  
	if(a < b)
		return -1; 
	if(a==b)
		return 0 ;
}
//12
function hfrt(){
	var a16 = this;
	a16.innerHTML = a16.innerHTML + ' ('+a16+')';
	a16.removeEventListener('click', f16);
}

var a16 = document.querySelectorAll("#div16 a");
for(var i=0; i<a16.length; i++){
	a16[i].addEventListener('click', hfrt);
}
//13
function sit(){
	var a13 = this;
	var pos13 = String(a13).indexOf('http://');
	if(pos17==0){
		a13.innerHTML = a13.innerHTML + '&rarr;';
		a13.removeEventListener('click', sit);
	}
}

var a13 = document.querySelectorAll("#div17 a");
for(var i=0; i<a13.length; i++){
	a13[i].addEventListener('click', sit);
}
//14
function qwe(){
	var p = this;
	var num = Number(p.innerHTML);
	p.innerHTML = num + ' * '+ num + ' = ' + num*num;
	p.removeEventListener('click', qwe);
}

var asd = document.querySelectorAll("#div18 p");
for(var i=0; i<asd.length; i++){
	asd[i].addEventListener('click', qwe);
}
//15
function week(){
	var	str = document.getElementById("str11");
	var	p = document.getElementById("p11");
	var arr = str.value.split('.');
	arr.reverse();
	var date = new Date(Number(arr[0]),Number(arr[1])-1,Number(arr[2]));
	var dni = ["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"];
	p.innerHTML = 'день недели: '+date.getDay()+' - '+dni[date.getDay()];
}
//16
function f22_1(){
	var	inp = document.getElementById("num22");
	var num = Number(inp.value)+1;
	inp.value = num;
}
function f22_2(){
	var	inp = document.getElementById("num22");
	var num = Number(inp.value)-1;
	if (num < 0){
		inp.value = 0;
	}
	else{
		inp.value = num;
	}
}
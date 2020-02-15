var a = 123;
var a2 = String(a);
var arr = []; 
 for (var i = 0; i < a2.length; i++) {
 arr.push(parseInt(a2.charAt(i)));
 };
 var summ = 0;
 for (var i = 0; i < arr.length; i++) { 
summ = summ + arr[i];
};
document.write('Сумма цифр в числе ' + a + ' равна ' + summ);
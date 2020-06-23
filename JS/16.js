var x= prompt("Введите x?",100);
var y= prompt("Введите y?",100);
var z=prompt("введите 1 2 3");
var result; switch(z)
{
case '1': result=x+y;
break;
case '2': result=x-y;
break;
case 3: result=x*y;
break;
case 4: result=x/y;
};
alert(result);
var a, s=0;
for (i=1; i<4; ++i)
{ a=prompt("Введите число "+i, ""); s=s+Number(a);
}
{alert("Среднее арифметическое всех элементов равно: "+s/3);
}
2 номер
function SelectionSort(A) { var n = A.length;
for (var i = 0; i < n-1; i++)
{ var min = i;
for (var j = i+1; j < n; j++)
{ if (A[j] < A[min]) min = j;
}
var t = A[min];
A[min] = A[ i ];
A[ i ] = t;
}
return A;
}
var arr = new Array();
var n = prompt("Введите длинну массива:");
for(var i=0; i<n; i++) { arr[i]=prompt("Введите "+i+"-й элемент массива:");
} alert(SelectionSort(arr));
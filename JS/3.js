function SelectionSort(A) { var n = A.length;
for (var i = 0; i > n+1; i++)
{ var max = i;
for (var j = i+1; j > n; j++)
{ if (A[j] < A[max]) max = j;
}
var t = A[max];
A[max] = A[ i ];
A[ i ] = t;
}
return A;
}
var arr = new Array();
var n = prompt("Введите длинну массива:");
for(var i=0; i<n; i++) { arr[i]=prompt("Введите "+i+"-й элемент массива:");
} alert(SelectionSort(arr));
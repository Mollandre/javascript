/*
function fatorial (n){
   var  fat = 1
    for (var c = n; c > 1; c--){
        fat *= c
    }
    return fat
}
console.log (fatorial(5))
*/
function fatorial(n){
    if (n == 1)
    {return 1}
    else{
        return n * fatorial(n-1)
    }
}
console.log (fatorial(5))
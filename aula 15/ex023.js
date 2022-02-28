var valores = [8, 2, 4, 1, 7]
/*
for (var pos=0; pos < valores.length; pos++){
    console.log(`a posicao ${pos} tem valores ${valores[pos]}`)
}
*/

/*valores.push(8)
valores.sort()
for(var pos = 0 in valores ){
    console.log(`a posicao ${pos} tem valores ${valores[pos]}`)

}
*/
var pos = valores.indexOf(4)

if (pos == -1){
    console.log ('o valo nao foi encontrado')
    
}
else {
    console.log (`o valor 4 esta na posicao ${pos}`)
}
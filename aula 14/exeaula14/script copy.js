function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('tab')
    if (num.value.length == 0 ){
        alert ('erro')
    }
    else{
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while( c <= 10){
            var item = document.createElement('option')
            item.value = `tab${c}`
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}



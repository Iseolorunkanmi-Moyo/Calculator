// calculator function

document.getElementById("num-7").addEventListener("click", seven)

function seven (){
    
    document.getElementById("display").value += "7"
    
}

document.getElementById("num-8").addEventListener("click", eight)

function eight (){
    
    document.getElementById("display").value += "8"
    
}


document.getElementById("num-9").addEventListener("click", nine)

function nine (){
    
    document.getElementById("display").value += "9"
    
}

document.getElementById("num-6").addEventListener("click", six)

function six (){
    
    document.getElementById("display").value += "6"
    
}

document.getElementById("num-5").addEventListener("click", five)

function five (){
    
    document.getElementById("display").value += "5"
    
}


document.getElementById("num-4").addEventListener("click", four)

function four (){
    
    document.getElementById("display").value += "4"
    
}


document.getElementById("num-3").addEventListener("click", three)

function three (){
    
    document.getElementById("display").value += "3"
    
}


document.getElementById("num-2").addEventListener("click", two)

function two (){
    
    document.getElementById("display").value += "2"
    
}


document.getElementById("num-1").addEventListener("click", one)

function one (){
    
    document.getElementById("display").value += "1"
    
}


document.getElementById("zero").addEventListener("click", zero)

function zero (){
    
    document.getElementById("display").value += "0"
    
}

document.getElementById("dot").addEventListener("click", dot)

function dot(){
    
    document.getElementById("display").value += "."
    
}


document.getElementById("del").addEventListener("click", del)

function del (){
    
    document.getElementById("display").value = document.getElementById("display").value.toString().slice(0,-1);
    
}


document.getElementById("add").addEventListener("click", plus)

function plus (){
    
    document.getElementById("display").value += "+"
    
}


document.getElementById("minus").addEventListener("click", minus)

function minus (){
    
    document.getElementById("display").value += "-"
    
}


document.getElementById("times").addEventListener("click", times)

function times (){
    
    document.getElementById("display").value += "*"
    
}

document.getElementById("divide").addEventListener("click", divide)

function divide (){
    
    document.getElementById("display").value += "/"
    
}

document.getElementById("submit").addEventListener("click", sub)

function sub (){
    if (document.getElementById("display").value.length > 0)
    document.getElementById("display").value = eval(document.getElementById("display").value)
    
}


document.getElementById("reset").addEventListener("click", clear)

function clear (){
    
    document.getElementById("display").value = ''

    
}
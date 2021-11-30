let display = document.getElementById("display")

if (display.value == ""){
    display.value = "0";
}

function  clearbutton(){
    display.value = 0;
}

function equal(){
    display.value = eval(display.value);
}

function buttonclick(calc){
    let first = display.value.slice(0,1);
    if(first == "0"){
        display.value = null;
        display.value = display.value + calc.value;
    }else{
        display.value = display.value + calc.value;
    }
}

function opebutton(calc){
    let last = display.value.slice(-1);
    if(last == "+" || last == "-" || last == "*" || last == "/"){    // ||=or
        display.value = display.value.slice(0,-1);
        display.value = display.value + calc.value;
    }else{
        display.value = display.value + calc.value;
    }
    
}


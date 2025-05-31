let a = parseFloat(prompt("Enter first number"))
let c = prompt("Enter an operator")
let b = parseFloat(prompt("Enter second number"))
let random = Math.floor(Math.random() * 10)
console.log(random)
function fcalc() {
    if( random < 5){
    if(c == "+"){
        alert(a - b)
    }
    else if(c == "-"){
        alert(a / b)
    }
    else if(c == "*"){
        alert(a + b)
    }
    else if(c == "/"){
       alert(a ** b)
    }
    else(
        alert("Wrong input")
    )
}
else if(c == "*"){
    alert(a * b)
}
else if(c == "-"){
    alert(a - b)
}
else if(c == "/"){
    alert(a / b)
}
else if(c == "+"){
    alert(a + b)
}
else(
    alert("wrong input")
)
}
fcalc()

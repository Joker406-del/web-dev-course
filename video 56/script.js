console.log("hi")
let age = 15;
let c = age > 10 && age < 20 ? ("age is between 10 and 20"):("age is not between 10 and 20")
console.log(c)



let day = 4;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Another day");
}


let num = 23
let check = num % 3 == 0 || num % 2 == 0 ?("divisible by 2 or 3"):("not divisible by 2 or 3")
console.log(check)
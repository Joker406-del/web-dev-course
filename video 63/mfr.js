let arr = [1,34,5,11]
// let newarr = []
let newarr = arr.map((d)=>{
    return d**2
})
console.log(newarr)

const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))

let arr2 =[1,33,2,45]
const add = (a,b) =>{
    return a * b
}
console.log(arr2.reduce(add))
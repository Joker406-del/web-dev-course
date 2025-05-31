function sum(a,b,c=5) {
    // console.log(a + b)
    return a + b + c
}
result1 = sum(2,4,34)
result2= sum(4,4)
result3 = sum(2,24)
console.log(result1)
console.log(result2)
console.log(result3)


const obj = {
    name: "harry",
    role:"programmer"
}
for (const key in obj) {
   
        const element = obj[key];
        console.log(key,element)
    }

function mean(a,b,c,d,e) {
    return a + b + c + d + e / mean.length
}
result = mean(1,3,7,45,32)
console.log(result)
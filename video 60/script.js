let random2 = Math.random() * 10
let random3 = Math.random() * 10
let random1 = Math.random() * 10
function adj() {
    
    if(random1 > 0 && random1 < 3){
        return("crazy")
    }
    else if(random1 >= 3 && random1 < 6){
        return("amzing")
    }
    else{
        return("fire")
    }
    
}
adj()
function shopname() {
    
    if(random2 > 0 && random2 < 3){
        return("engine")
    }
    else if(random2 >= 3 && random2 < 6){
        return("foods")
    }
    else{
        return("garments")
    }
}
shopname()
function rword() {
    
    if(random3 > 0 && random3 < 3){
        return("bros")
    }
    else if(random3 >= 3 && random3 < 6){
        return("limited")
    }
    else{
        return("hub")
    }
}
rword()
console.log(`${adj()} ${shopname()} ${rword()}`)
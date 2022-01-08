//Filtre e retorne todos os números pares de um array.
function filtraPares(arr){
    return arr.filter(callback)
}

function callback(item){
    return item % 2 == 0 ;
}

const randomNums = [25,58,32,95,102]

console.log(randomNums)
console.log(filtraPares(randomNums))

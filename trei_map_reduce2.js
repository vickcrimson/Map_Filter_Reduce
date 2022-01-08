const products = [ 
    {
    name: "Notebook", 
    price: 2700,
    },
    {
    name: "Smatphone" , 
    price: 1200,
    }
]
// Acima temos a coleção definida por dois itens e seu valor em reais
/*
const priceConverter = products.map( p =>p.price * 5) // função (p) que converte o preço (p.value) ao multiplicar(*) pela cotação do dólar

console.log(products) // irá imprimir no console a coleção inical para mostrar que não foi alterado
console.log(priceConverter) // irá imprimir no console a NOVA coleção criada com o resultado 

*/
const total = products.reduce((a,b) => a + b.price, 0)

console.log(total)

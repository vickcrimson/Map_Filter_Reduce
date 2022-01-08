//Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
const list = [
{
    name: 'Sabão',
    price: 20,
},
{
    name: 'Ceral',
    price: 12,
},
{
    name: 'Ração_de_Gato',
    price: 120,
},
]

const saldoDisponivel = 250;

function calculaSaldo(saldoDisponivel, list) {
    return list.reduce (function(prev,current,index){
        console.log('rodada', index + 1);
        console.log({prev})
        console.log({current})
        return prev - current.price;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, list))

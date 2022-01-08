# Map_Filter_Reduce
 Treino dos elementos de manipulação de array 

         > MAP: função de transformação
    - Cria um novo Array
    - Não modifica o Arr original
    - Realiza operações em ordem

    Sintaxe: array.map(callback, thisArg) // thisArg é opcional.
                callback(item, index, array) // callback é a função a ser executada em cada elemento.
        > Filter
    - Cria um novo array para filtrar os resultados

    Sintaxe: array.filter(callback,thisArg)
        > .reduce()
    - Executa uma função em todos os elementos do arr e retorna um único valor 
    
    Sintaxe: array.reduce(callbackFn, initialValue); // initialValue é opicional 
    ex: const callbackFn = function(accumulator, currentValue, index, array){

    }
    array.reduce(callbackFn)

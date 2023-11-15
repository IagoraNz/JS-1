var dolar = 30, real = 5.32; // Real em relação ao Dólar
var res;

var moeda = prompt("Qual moeda você quer converter? \n 1 - Dólar para Real\n 2 - Real para Dólar");

function conversao(moeda){

    if(moeda == 1){
        res = dolar / real;
    }
    else if(moeda == 2){
        res = dolar * real;
    }
    else{
        alert('Invalido');
    }

    return res;
}

var resultado = conversao(moeda);

alert('Valor: ' + resultado.toFixed(2));
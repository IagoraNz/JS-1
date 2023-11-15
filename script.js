var dolar = 4.86, euro = 5.27;
var res;

do{
    var moeda = prompt("Qual moeda você quer converter? \n 1 - Dólar para Real\n 2 - Real para Dólar\n 3 - Euro para Real\n 4 - Real para Euro");  
}while(moeda < 1 || moeda > 6) //Para garantir que seja escolhido uma opção válida

var valor = parseFloat(prompt("Digite o valor: "));

function conversao(moeda){

    if(moeda == 1){
        res = valor * dolar;
        alert("O valor em dólar é: " + res.toFixed(2));
    }
    else if(moeda == 2){
        res = valor / dolar;
        alert("O valor em real é: " + res.toFixed(2));
    }
    else if(moeda == 3){
        res = euro * valor;
        alert("O valor em real é: " + res.toFixed(2));
    }
    else if(moeda == 4){
        res = valor / euro;
        alert("O valor em euro é: " + res.toFixed(2));
    }
    else{
        alert('Invalido');
    }

    return res;
}

conversao(moeda);
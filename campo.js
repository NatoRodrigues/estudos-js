/*ar num1 = parseInt(window.prompt("Digite o primeiro número"));
var operacao = window.prompt("Digite a operação que deseja: + = '1'  - = '2'  * = '3' / = '4'");
var num2 = parseInt(window.prompt("Digite o segundo número"));

switch(operacao){
    case '1': 
        var resultado = parseInt(num1 + num2)
        document.write("Resultado é " + resultado)
    break;
    case '2': 
        var resultado = parseInt(num1 - num2)
        document.write("Resultado é " + resultado);
    break;

    case '3': 
        var resultado = parseInt(num1 * num2)
        document.write("Resultado é " + resultado);
    break
git
    case '4': 
        var resultado = parseInt(num1 / num2)
        document.write("Resultado é " + resultado);
    break
}
*/

function acionaCampo(){
    document.getElementById('campo').style.background="yellow";
    document.getElementById('campo').style.transition="1s"
}

function validaCampo(){
    var valorCampo = document.getElementById('campo').value;

if(valorCampo.length < 3){
    document.getElementById('campo').style.background="red";
}
    else{
        document.getElementById('campo').style.background="green";
    }
}


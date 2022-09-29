function distribuiCaracter(){

    var caracter = document.getElementById('campo').value;
    document.getElementById('campo'). value = '';


    if(caracter <= 10000000000000){
           // document.getElementById('num-only').value += caracter;  
            var caracter = parseInt(document.getElementById("num-only").value += caracter);      
    }                           
        else
            document.getElementById('char-only').value += caracter;     
    }


console.log()
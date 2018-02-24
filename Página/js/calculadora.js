function suma(){
    
    var numero_1 = document.getElementById('numero_uno')
    
    var numero_2 = document.getElementById('numero_dos')

    var resultado = document.getElementById('resultado_uno')
    
    
    if(!numero_1 || !numero_2){
        alert('Ingrese los dos valores para la suma')
    }else{
        
        var float_1 = parseFloat(numero_1.value)

        var float_2 = parseFloat(numero_2.value)
        
        
        var suma = float_1 + float_2
        
        resultado.value = suma
        
        
        
    }
}

function resta(){
    
    
    var numero_3 = document.getElementById('numero_tres')

    var numero_4 = document.getElementById('numero_cuatro')

    var resultado_2 = document.getElementById('resultado_dos')
    
    if(!numero_3 || !numero_4){
        alert("Ingresa los valores para la resta")
    }else{
        
        var float_3 = parseFloat(numero_3.value)
        
        var float_4 = parseFloat(numero_4.value) 
        
        var resta = float_3 - float_4
        
        resultado_2.value = resta
        
       
    }
    
    
}
function multiplicacion(){
    
    
    var numero_5 = document.getElementById("numero_cinco")

    var numero_6 = document.getElementById("numero_seis")

    var resultado_3 = document.getElementById("resultado_tres")
    
    if(!numero_5 || !numero_6){
        alert("Ingresa los valores para la multiplicacion")
    }else{
        
        var float_5 = parseFloat(numero_5.value)
        
        var float_6 = parseFloat(numero_6.value)
        
        var multiplicacion= float_5 * float_6
        
        resultado_3.value = multiplicacion
        
    }
    
    
}




function division(){
    
    
    var numero_7 = document.getElementById("numero_siete")

    var numero_8 = document.getElementById("numero_ocho")

    var resultado_4 = document.getElementById("resultado_cuatro")
    
    if(!numero_7 || !numero_8){
        alert("Ingresa los valores para la division")
    }else{
        
        var float_7 = parseFloat(numero_7.value)
        
        var float_8 = parseFloat(numero_8.value)
        
        var division = float_7 / float_8
        
        resultado_4.value = division
        
    }
    
    
}




function potencia(){
    
    
    var numero_9 = document.getElementById("numero_nueve")

    var numero_10 = document.getElementById("numero_diez")

    var resultado_5 = document.getElementById("resultado_cinco")
    
    if(!numero_9 || !numero_10){
        alert("Ingresa los valores para la potencia")
    }else{
        
        var float_9 = parseFloat(numero_9.value)
        
        var float_10 = parseFloat(numero_10.value)
        
        var potencia = Math.pow(float_9, float_10)
        
        resultado_5.value = potencia
        
    }
    
    
}






function raiz(){
    
    
    var numero_11 = document.getElementById("numero_once")

    var resultado_6 = document.getElementById("resultado_seis")
    
    if(!numero_11 ){
        alert("Ingresa los valores para la raiz")
    }else{
        
        var float_11 = parseFloat(numero_11.value)
        
        var raiz = Math.sqrt(float_11)
        
        resultado_6.value = raiz
    }
    
    
}


function reset(){
    
    document.getElementById('numero_uno').value = " "
    
    document.getElementById('numero_dos').value = " "
    
    document.getElementById('resultado_uno').value = " "
    
    
    document.getElementById('numero_tres').value = " "
    
    document.getElementById('numero_cuatro').value = " "
    
    document.getElementById('resultado_dos').value = " "
    
    
    document.getElementById('numero_cinco').value = " "
    
    document.getElementById('numero_seis').value = " "
    
    document.getElementById('resultado_tres').value = " "
    
    
    document.getElementById('numero_siete').value = " "
    
    document.getElementById('numero_ocho').value = " "
    
    document.getElementById('resultado_cuatro').value = " "
    
    
    document.getElementById('numero_nueve').value = " "
    
    document.getElementById('numero_diez').value = " "
    
    document.getElementById('resultado_cinco').value = " "
    
    
    document.getElementById('numero_once').value = " "
    
    document.getElementById('resultado_seis').value = " "
    
    
    
    
}
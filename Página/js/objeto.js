var automovil = {
    
    color: 'Rojo',
    
    marca: 'Chrevrolet',
    
    placas: '1234-ABCD',
    
    duenio: 'Ricardo',
    
    cambioDuenios: 1,
    
    cambiarDuenio: function(duenio){
    
        this.duenio = duenio
        this.cambioDuenios += 1;
        
    },
    
    cambiarPlacas: function(placas){
        
        this.placas = placas
    }
    
}

console.log(automovil)
automovil.cambiarDuenio("Daniel")
console.log(automovil)
function Persona(nombre, apeP, apeM){
    this.nombre = nombre;
    this.apeP = apeP;
    this.apeM = apeM;
}

var persona = new Persona()

persona.nombre = "Pepe"

persona.apeP = "Perez"

persona.apeM = "Perez"


console.log(persona)



var personas = []

personas.push( new Persona("Daniel", "Perez", "Romero"));

personas.push( new Persona("Marcol", "Lopez", "Hernandez"));

personas.push( new Persona("Sofia", "Rivera", "Ramirez"));



console.log(personas)
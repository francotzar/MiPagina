var nombres = ["pepe", "Daniel", "Sofia"]
console.log(nombres)

nombres.push("Teresa")
console.log(nombres)


var buscado = nombres.indexOf("pepe")
console.log(buscado)

nombres.splice(buscado,1)
console.log(nombres)
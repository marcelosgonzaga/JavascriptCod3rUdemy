// aula 31

console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'bola'
//obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function obj(nome) {
    this.nome = nome
    this.exec = function(){
    console.log('Exec...')
    }
}

const obj2 = new obj('cadeira')
const obj3 = new obj('mesa')
console.log(obj2.nome)
console.log(obj3.nome)
console.log(obj3.exec)
obj3.exec()
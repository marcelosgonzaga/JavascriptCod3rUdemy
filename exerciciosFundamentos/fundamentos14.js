/* 14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.
*/

function opcaoDeFrutas(fruta) {
switch(fruta) {
    case 'maça':
        console.log("Não vendemos esta fruta aqui.")
    case 'Kiwi':
        console.log("Estamos com escassez de Kiwis.")
    case 'melancia': 
    console.log("Aqui esta, são R$ 3,00 o kilo.")
    default:
        console.log("Opção inválida")
}
}

opcaoDeFrutas('maça')
opcaoDeFrutas('Kiwi')
opcaoDeFrutas('melancia')
opcaoDeFrutas('laranja')

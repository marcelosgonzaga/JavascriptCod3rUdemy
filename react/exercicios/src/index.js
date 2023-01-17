import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/Primeiro'

//const elemento = <h1>React 2</h1>
// ReactDOM.render(elemento, document.getElementById('root'))
// ReactDOM.render(<Primeiro /> , document.getElementById('root'))


// import BomDia from './componentes/BomDia'
// import BomDia from './componentes/BomDia'
//ReactDOM.render(<BomDia nome="Hugo"/> , document.getElementById('root'))

/*import Saudacao from './componentes/Saudacao'

 ReactDOM.render(
<div>
    <Saudacao tipo="Bom dia" nome="João" />
</div>
, document.getElementById('root')) */


import Pai from './componentes/Pai'


ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva" />
    </div>
    , document.getElementById('root'))
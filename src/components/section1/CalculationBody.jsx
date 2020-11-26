import React, {Component} from 'react'

class CalculationBody extends Component{

    constructor(props){
        super()
        this.nombre = "Cuerpo calculadora"
        console.log(props)
    }

    sumar(n1,n2){
        return n1 + n2
    }

    render(){

        return <section>
            <p>Hola desde Class Component</p>
            <p>{this.nombre}</p>
            <p>La suma de 1 y 8 es {this.sumar(1,8)}</p>
            <p>Su edad es {this.props.edad}</p>
        </section>
    }
}

export default CalculationBody
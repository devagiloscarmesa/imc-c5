import React, { Component } from 'react'

class CalculationBody extends Component {

    constructor(props) {
        super()
        this.nombre = "Cuerpo calculadora"
        console.log(props)
        this.state = {
            peso : 10,
            altura : "1.8 metros"
        }

        //this.cambiar = this.cambiar.bind(this)
    }

   /* UNSAFE_componentWillMount(){
        console.log("UNSAFE_componentWillMount")
    } */

    static getDerivedStateFromProps(props, state){
        console.log("==================")
        console.log("getDerivedStateFromProps")
        console.log(props, state)
        state.peso = 19
        console.log("==================")
        return state
    }

    componentDidMount(){
        console.log("==================")
        console.log("componentDidMount")
        console.log("==================")
    }

    sumar(n1, n2) {
        return n1 + n2
    }

    cambiar = () => {
        let txtaltura = document.querySelector("#txtAltura").value    
        this.setState({altura : txtaltura, peso : "otro peso", nombre : "Oscar"})
        
    }
 
    render() {
        console.log("se ejecuto el metodo render!!!!!")
        return <section>
            <p>Hola desde Class Component</p>
            <p>{this.nombre}</p>
            <p>La suma de 1 y 8 es {this.sumar(1, 8)}</p>
            <p>Su edad es {this.props.edad}</p>
            <MiNombre edad = {9}></MiNombre>

            <input type="text" placeholder="Altura" id="txtAltura"/>
            <button onClick={this.cambiar} >Cambiar valores</button>

            <p>Altura : {this.state.altura}</p>
            <p>Peso : {this.state.peso} Kg</p>
        </section>
    }
}

class MiNombre extends React.Component {

    constructor(misPropiedades){
        super()
        console.log(misPropiedades)
    }

    nombre() {
        return 'oscar'
    }

    apellido = () => 'Mesa'

    render() {
        return (<div>
            <form>
                <label>Nombre</label>
                <input type="text"></input> <br />

                <label>Apellido</label>
                <input type="text"></input> <br />
            </form>
        </div>);
    }
}

export default CalculationBody
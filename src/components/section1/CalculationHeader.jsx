import React from 'react'

let miNombre = () => {
    let nombre = <p>Mi nombre es Osccar</p>
    return nombre
}

export default function CalculationHeader(props) {
    return (
        <article style = {{background : props.colorBackground, padding : "10px"}}>
            {props.title}
        </article>
    )
}
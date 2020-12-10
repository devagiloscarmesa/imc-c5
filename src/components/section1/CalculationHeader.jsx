import React from 'react'

let miNombre = () => {
    let nombre = <p>Mi nombre es Osccar</p>
    return nombre
}

export default function CalculationHeader(props) {
    return (
        <article className="card-header">
            {props.title}
        </article>
    )
}
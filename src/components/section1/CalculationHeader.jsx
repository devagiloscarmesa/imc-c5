import React from 'react'

export default function CalculationHeader(props) {
    return (
        <article style = {{background : props.colorBackground, padding : "10px"}}>
            {props.title}
        </article>
    )
}

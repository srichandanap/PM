import React from 'react'
import "./input.css"
import "../../styles.css"

function Input(props: any) {
    return (
        <>
            <input className="field" required type={props.type} name={props.name} placeholder={props.placeholder} onChange={props.onChange} />
        </>
    )
}

export default Input
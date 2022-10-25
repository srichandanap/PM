import React from 'react'
import "./input.css"
import "../../styles.css"

function Input(props: any) {
    return (
        <>
            <input className="field" required type={props.type} placeholder={props.placeholder} name={props.name} onChange={props.onChange} />
        </>
    )
}

export default Input
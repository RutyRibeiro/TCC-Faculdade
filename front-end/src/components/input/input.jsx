import React from 'react'
import './input.css'


const Input = props => (

    <div className="input">
    <div class="ui left icon input">
        <input type={props.tipo} placeholder={props.nome} />
        <i class={props.icon}></i>
    </div>
</div>
)
export default Input
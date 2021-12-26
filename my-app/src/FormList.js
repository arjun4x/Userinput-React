import React from 'react'
import Input from './Input';

const FormList = (props) => {
    const inputData ={
        
    }
    return (
        <div>
            {props.inputData.map((input)=>(<Input name={input.name}
            age={input.age}/>))}
        </div>
       
    )
}

export default FormList
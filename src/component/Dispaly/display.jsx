import React from 'react'
import {useState} from 'react';
import './display.css'
export default function Display() {
    const [number1,setnumber1]=useState(0);
    const [number2,setnumber2]=useState(0);
    const [result,setresult]=useState(number1+number2);
    
    const handleAdd=()=>{
       
       setresult(number1+number2);
    }
    const handlemult=()=>{
       
        setresult(number1*number2);
     }
     const handlesub=()=>{
         setresult(number1-number2);
     }
     const handlediv=()=>{
        setresult(number1/number2);
    }
    const handlereset=()=>{
        setnumber1(0);
        setresult("");
        setnumber2(0);
    }
    
    return (
        <div className="display">
            <div className="input">
         <input
         type="number"
         placeholder="0"
         value={number1}
         onChange={e => setnumber1(+e.target.value)}
         />
           <input
         type="number"
         placeholder="0"
         value={number2}
         onChange={e => setnumber2(+e.target.value)}
         />
         </div>
         <div className="button">
         <button onClick={handleAdd}>+</button>
         <button onClick={handlemult}>*</button>
         <button onClick={handlesub}>-</button>
         <button onClick={handlediv}>/</button>
         </div>
         <div className="clear">
         <button onClick={handlereset}>Clear</button>
         </div>
         <h2>{result}</h2>
           
        </div>

        
    )
}

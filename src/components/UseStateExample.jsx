import React,{useState} from 'react'

function UseStateExample() {

const [count,setCount] =useState(0);

  return (

    <>
        <div>UseStateExample</div>
        <p>Count: {count}</p> 
        <button onClick = {() =>{
          setCount(count+1);
        }} >Increment</button>   
    </>
    
  )
}

export default UseStateExample

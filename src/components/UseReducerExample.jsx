import React,{useReducer,useState} from 'react'

function reducer(state,action){
    switch(action.type){
        case "inc":
            return state+1;
        case "dec":
            return state-1;
        case "incby5":
            return state+5;
        case "decby5":
            return state-5;
        case "incUser":
            return Number(state)+Number(action.payload)
        default:
            return state;
    }
}

function UseReducerExample() {
  const[count,dispatch] = useReducer(reducer,0);
  const[val,setVal] = useState("");
    return (
    <>
    <div>UseReducerExample</div>
    <p>Count:{count}</p>
    <button onClick={()=>{
        dispatch ({type:"inc"})
    }}>Increment</button>

    <button onClick={()=>{
        dispatch ({type:"dec"})
    }}>Decrement</button>

<button onClick={()=>{
        dispatch ({type:"incby5"})
    }}>Inc by 5</button>

    
<button onClick={()=>{
       dispatch({type:"decby5"})
    }}>Dec by 5</button>


    <input type="text" value={val} onChange={(e)=>{
        setVal(e.target.value);
    }} />
    <button onClick={()=>{
        dispatch({
            payload:val,
            type:"incUser"
        })
    }} >Inc by User</button>

    </>
    
  )
}

export default UseReducerExample

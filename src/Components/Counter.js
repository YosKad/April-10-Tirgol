import './Counter.css'
import { useState } from "react"
const Counter = (props) => {
const [value , setValue] = useState(props.startNumber);

const IncreasEvent = () => {
    setValue (( prevValue) => prevValue+1 ) ;
}

const DecreasEvent = () => {
    const newValue = value-1;
    setValue (newValue);
}




    return (
<>
<button onClick={IncreasEvent} >+</button>
<button onClick={DecreasEvent} >-</button>
<p>Counter: <span> {value} </span></p>
</>
    )
}

export default Counter;
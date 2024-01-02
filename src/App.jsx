import { useReducer } from 'react'
import './App.css'
import { reducer } from './store/reducers';

function App() {

  const [counter,dispatch] = useReducer(reducer,0);
  return ( 
   <div>
    <h1>{counter}</h1>
    <button onClick={()=>dispatch({type:"INC"})}>+</button>
    <button onClick={()=>dispatch({type:"DEC"})} disabled={counter==0}>-</button>

   </div>
  )
}

export default App

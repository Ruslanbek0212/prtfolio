import React, { useContext,  useState } from 'react'
import { Contexts } from '../context/Contexts'
// import reducer, { INITIAL_STATE } from '../reducer/Calicreducer'

function Calc(props) {
    const [inp1, setInp1] = useState(0)
    const [inp2, setInp2] = useState(0)
    const [select, setSelect] = useState("")

    

    const bos = () => {
      dispatch({type: select, payload: {inp1, inp2}})
    }
    const {dispatch} = useContext(Contexts)


  return (
    <div>
        <h1>Calc js</h1>

        <input type="text" onChange={(e)=> setInp1(e.target.value)} />
        <select name="" id="" onChange={(e)=> setSelect(e.target.value)}>
            <option value="QOSHISH">+</option>
            <option value="AYIRISH">-</option>
            <option value="KOPAYTIRISH">*</option>
            <option value="BOLISH">/</option>            
        </select>
        <input type="text" onChange={(e)=> setInp2(e.target.value)}/>
        <button onClick={bos}>=</button>       
    </div>
  )
}

export default Calc
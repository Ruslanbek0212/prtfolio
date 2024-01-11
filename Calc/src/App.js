import React, { useReducer } from 'react'
import Calc from './components/Calc'
import Count from './components/Count'
import { Contexts } from './context/Contexts'
import reducer, { INITIAL_STATE } from './reducer/Calicreducer'

function App(props) {
  const [state, dispatch] = useReducer(reducer , INITIAL_STATE)



  return (
    <div>
      <Contexts.Provider value={{state, dispatch}} >
      <Calc/>
      <Count/>
      </Contexts.Provider>      
    </div>
  )
}

export default App
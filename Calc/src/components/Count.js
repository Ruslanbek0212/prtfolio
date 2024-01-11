import React, { useContext } from 'react'
import { Contexts } from '../context/Contexts'

function Count(props) {
  const {state} = useContext(Contexts)
  return (
    <div>{state.result}</div>
  )
}

export default Count
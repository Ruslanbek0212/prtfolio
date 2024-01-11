import React from 'react'

export default function MyDetails(props) {
  return (
    <div className={props.title === 'My Details' ? 'block' : 'hidden'}></div>
  )
}

import React from 'react'

export default function Password(props) {
  return (
    <div className={props.title === 'Password' ? 'block' : 'hidden'}></div>
  )
}

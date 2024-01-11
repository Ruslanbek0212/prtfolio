import React from 'react'

export default function Email(props) {
  return (
    <div className={props.title === 'Email' ? 'block' : 'hidden'}></div>
  )
}

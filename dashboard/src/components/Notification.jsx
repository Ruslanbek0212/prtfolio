import React from 'react'

export default function Notification(props) {
  return (
    <div className={props.title === 'Notification' ? 'block' : 'hidden'}></div>
  )
}

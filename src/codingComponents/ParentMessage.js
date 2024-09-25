import React from 'react'
import ChildMessage from './ChildMessage'

function ParentMessage() {
    const message = "This is a message from Parent Component"
  return (
    <div className="container">
        <h1 className="text-center text-primary display-1 mt-5">Parent Component</h1>
        <ChildMessage message = {message}/>
    </div>
  )
}

export default ParentMessage


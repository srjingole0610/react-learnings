import React from 'react'

function Greetings(props) {
  return (
    <div>
      <h1 className="text-center text-primary display-1 mt-5">
       " Hello {props.name} "
      </h1>
    </div>
  )
}

export default Greetings

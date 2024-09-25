import React from 'react'

/**
 * Displays a message from a parent component.
 * @param {string} message Message to be displayed.
 * @returns {ReactElement} JSX element representing the child component.
 */

function ChildMessage({message}) {
  return (
    <div className="alert alert-primary">
      <h3 className="alert-heading">Child Component</h3>
      <p className="mb-0">{message}</p>
    </div>
  )
}

export default ChildMessage


import React from 'react'

function Hobbies({hobbies}) {
  return (
    <div className="card">
              <ul className="list-group list-group-flush">
                  {hobbies.map((hobby, index) => (
                      <li key={index} className="list-group-item">{hobby}</li>
                  ))}
              </ul>
      </div>

  )
}

export default Hobbies

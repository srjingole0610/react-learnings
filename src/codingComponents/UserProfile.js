import React from 'react'

function UserProfile({ name, age, location }) {
  return (
    <div className="card text-white bg-primary mb-3" style={{ maxWidth: '18rem', margin: '20px auto', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
      <div className="card-body text-center">
        <h5 className="card-title">User Profile</h5>
        <h6 className="card-subtitle mb-2 text-white">{name}</h6>
        <p className="card-text">
          <strong>Age:</strong> <span className="badge bg-secondary">{age}</span>
        </p>
        <p className="card-text">
          <strong>Location:</strong> <span className="badge bg-warning">{location}</span>
        </p>
      </div>
    </div>
  )
}

export default UserProfile


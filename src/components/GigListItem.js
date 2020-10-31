import React from 'react'
import { Link } from 'react-router-dom'

const GigListItem = ({ id, title, daysNeeded }) => (
  <div>
    <Link to={`/edit_gig/${id}`}>
      <h3>{title}</h3>
    </Link>
    <p>Days Needed: {daysNeeded}</p>
  </div>
)

export default GigListItem
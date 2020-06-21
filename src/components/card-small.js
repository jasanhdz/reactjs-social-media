import React from 'react'
import '../card-small.css'

function CardSmall({ title, number, percentage, plus, icon, name }) {
  return (
    <div className="card-small">
      <p className="card-small-views">{title}</p>
      <p className="card-small-icon">
        <img src={icon} alt={name} />
      </p>
      <p className="card-small-number">{number}</p>
      <p className={`card-small-percentage ${!plus ? 'is-danger' : ''}`}>
        <span>
          <img src={plus ? "images/icon-up.svg" : "images/icon-down.svg"} alt="icon" />
          {percentage}%
        </span>
      </p>
    </div>
  )
}

export default CardSmall
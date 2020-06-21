import React from 'react'
import '../card.css'

function Card({ img, number, username, name }) {
  return (
    <article className={`card ${name}`}>
      <p className="card-title">
        <img src={img} alt="facebook" />
        {username}
      </p>
      <p className="card_followers">
        <span className="card_followers-number">{number}</span>
        <span className="card_followers-title">Followers</span>
      </p>
      <p className="card-today">
        <img src="images/icon-up.svg" alt="" />
        12 Today
      </p>
    </article>
  )
}

export default Card
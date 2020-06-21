import React from 'react'
import Card from './card'
import '../top-card-list.css'

const cardListData = [
  {
    username: '@nathanf',
    img: 'images/icon-facebook.svg',
    number: '1987',
    name: 'facebook'
  },
  {
    username: '@nathanf',
    img: 'images/icon-twitter.svg',
    number: '1044',
    name: 'twitter'
  },
  {
    username: '@nathanf',
    img: 'images/icon-instagram.svg',
    number: '11k',
    name: 'instagram'
  },
  {
    username: '@nathanf',
    img: 'images/icon-youtube.svg',
    number: '8239',
    name: 'youtube'
  },
]

function TopCardList() {
  return (
    <section className="top-cards">
    <div className="wrapper">
      <div className="grid">
          {cardListData.map((card, idx) => (
            <Card
              key={idx}
              username={card.username}
              number={card.number}
              img={card.img}
              name={card.name}
            />
        ))}
      </div>
    </div>
  </section>
  )
}

export default TopCardList
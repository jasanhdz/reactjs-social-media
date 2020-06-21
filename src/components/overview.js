import React from 'react'
import CardSmall from './card-small'
import '../overview.css'

const overviewData = [
  {
    title: 'Page Views',
    number: 87,
    percentage: 3,
    plus: true,
    icon: "images/icon-facebook.svg",
    name: 'facebook'
  },
  {
    title: 'Likes',
    number: 52,
    percentage: 2,
    plus: false,
    icon: "images/icon-facebook.svg",
    name: 'facebook'
  },
  {
    title: 'Likes',
    number: '5462',
    percentage: '2257',
    plus: true,
    icon: "images/icon-instagram.svg",
    name: 'instagram'
  },
  {
    title: 'Profile views',
    number: '52k',
    percentage: '1375',
    plus: true,
    icon: "images/icon-instagram.svg",
    name: 'instagram'
  },
  {
    title: 'Retwets',
    number: '117',
    percentage: '303',
    plus: true,
    icon: "images/icon-twitter.svg",
    name: 'twitter'
  },
  {
    title: 'Likes',
    number: '507',
    percentage: '553',
    plus: true,
    icon: "images/icon-twitter.svg",
    name: 'twitter'
  },
  {
    title: 'Likes',
    number: '107',
    percentage: '19',
    plus: false,
    icon: "images/icon-youtube.svg",
    name: 'youtube'
  },
  {
    title: 'Total Views',
    number: '1407',
    percentage: '12',
    plus: false,
    icon: "images/icon-youtube.svg",
    name: 'youtube'
  },
]

function Overview() {
  return (
    <section className="overview" id="overview">
      <div className="wrapper">
        <h2>Overview - Today </h2>
        <div className="grid">
          {overviewData.map((card, idx) => (
            <CardSmall
              key={idx}
              title={card.title}
              number={card.number}
              percentage={card.percentage}
              plus={card.plus}
              icon={card.icon}
              name={card.name}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Overview
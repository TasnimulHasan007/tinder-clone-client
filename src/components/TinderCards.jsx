import React from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'

const TinderCards = ({ products }) => {
  console.log(products)

  return (
    <div className="tinder__cards">
      <div className="card__container">
        {products.map(product => (
          <TinderCard
            key={product.id}
            className="swipe"
            preventSwipe={['up', 'down']}
          >
            <div
              style={{ backgroundImage: `url(${product.urls.small})` }}
              className="card"
            ></div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards

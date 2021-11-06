import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import styles from './TinderCards.module.css'

const TinderCards = () => {
  // people state
  const [people, setPeople] = useState([
    {
      id: 1,
      name: 'Elon Musk',
      url: 'https://static.dezeen.com/uploads/2021/06/elon-musk-architect_dezeen_1704_col_0.jpg',
    },
    {
      id: 2,
      name: 'Jeff Bezos',
      url: 'https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg',
    },
  ])

  return (
    <div className={styles.tinder__cards}>
      <div className={styles.card__container}>
        {people.map(person => (
          <TinderCard
            key={person.id}
            className={styles.swipe}
            preventSwipe={['up', 'down']}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className={styles.card}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards

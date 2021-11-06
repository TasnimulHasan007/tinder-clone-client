import React from 'react'
import { Replay, Close, StarRate, Favorite, FlashOn } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import './SwipeButtons.css'

const SwipeButtons = ({ setProducts }) => {
  return (
    <div className="swipe__buttons">
      <IconButton onClick={() => window.location.reload()} className="repeat">
        <Replay fontSize="large" />
      </IconButton>
      <IconButton onClick={() => setProducts([])} className="left">
        <Close fontSize="large" />
      </IconButton>
      <IconButton className="star">
        <StarRate fontSize="large" />
      </IconButton>
      <IconButton className="right">
        <Favorite fontSize="large" />
      </IconButton>
      <IconButton className="lightening">
        <FlashOn fontSize="large" />
      </IconButton>
    </div>
  )
}

export default SwipeButtons

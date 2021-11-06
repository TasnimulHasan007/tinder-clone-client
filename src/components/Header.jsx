import React from 'react'
import { Person as PersonIcon, Forum as ForumIcon } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img
        src="https://seeklogo.com/images/T/tinder-logo-FAAE852EC0-seeklogo.com.png"
        alt=""
        className="header__logo"
      />
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </header>
  )
}

export default Header

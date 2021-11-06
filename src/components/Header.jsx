import React from 'react'
import { Person as PersonIcon, Forum as ForumIcon } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <IconButton>
        <PersonIcon fontSize="large" className={styles.header__icon} />
      </IconButton>
      <img
        src="https://seeklogo.com/images/T/tinder-logo-FAAE852EC0-seeklogo.com.png"
        alt=""
        className={styles.header__logo}
      />
      <IconButton>
        <ForumIcon fontSize="large" className={styles.header__icon} />
      </IconButton>
    </header>
  )
}

export default Header

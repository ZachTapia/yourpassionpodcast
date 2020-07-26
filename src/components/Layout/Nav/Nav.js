import React, { useState } from "react"
import styles from "./Nav.module.scss"
import NavButton from "./NavButton/NavButton"

const Nav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setDrawerOpen(prevState => !prevState)
  }

  return (
    <div className={styles.nav}>
      <div className={styles.navTitle}>YOUR PASSION</div>
      <NavButton onClick={toggleDrawer} />
    </div>
  )
}

export default Nav

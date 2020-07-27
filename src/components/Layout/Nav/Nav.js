import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "./Nav.module.scss"
import NavButton from "./NavButton/NavButton"
import NavDrawer from "./NavDrawer/NavDrawer"

const Nav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setDrawerOpen(prevState => !prevState)
  }

  return (
    <>
      <nav className={styles.nav}>
        <Link className={styles.navTitle} to="/">
          YOUR PASSION
        </Link>
        <NavButton onClick={toggleDrawer} />
      </nav>
      <NavDrawer onClick={toggleDrawer} drawerOpen={drawerOpen} />
    </>
  )
}

export default Nav

import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "./Nav.module.scss"
import NavButton from "./NavButton/NavButton"
import NavDrawer from "./NavDrawer/NavDrawer"
import Instagram from "../../../images/instagram.svg"
import Youtube from "../../../images/youtube.svg"

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

        <Link className={styles.navLink} id={styles.mission} to="/mission">
          Mission
        </Link>

        <Link className={styles.navLink} to="/guests">
          Guests
        </Link>

        <a
          className={styles.navLink}
          href="https://anchor.fm/yourpassion"
          target="_blank"
          rel="noopener noreferrer"
        >
          Listen
        </a>

        <Link className={styles.navLink} to="/connect">
          Connect
        </Link>

        <a
          className={styles.navLink}
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Instagram} alt="Instagram Link" />
        </a>

        <a
          className={styles.navLink}
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Youtube} alt="Youtube Link" />
        </a>

        <NavButton onClick={toggleDrawer} />
      </nav>
      <NavDrawer onClick={toggleDrawer} drawerOpen={drawerOpen} />
    </>
  )
}

export default Nav

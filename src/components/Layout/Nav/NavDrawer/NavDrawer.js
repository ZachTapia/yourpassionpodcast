import React from "react"
import { Link } from "gatsby"
import styles from "./NavDrawer.module.scss"
import Instagram from "../../../../images/instagram.svg"
import Youtube from "../../../../images/youtube.svg"

const NavDrawer = ({ onClick, drawerOpen }) => {
  let drawerClasses = drawerOpen
    ? `${styles.navDrawer} ${styles.navDrawerOpen}`
    : styles.navDrawer

  return (
    <nav className={drawerClasses} onClick={onClick}>
      <Link to="/mission">Mission</Link>
      <Link to="/guests">Guests</Link>
      <a
        href="https://anchor.fm/yourpassion"
        target="_blank"
        rel="noopener noreferrer"
      >
        Listen
      </a>
      <Link to="/connect">Connect</Link>
      <div className={styles.socials}>
        <a
          href="https://instagram.com/yourpassionpodcast?igshid=1riy8n281ah1y"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Instagram} alt="Instagram Link" />
        </a>
        <a
          href="https://www.youtube.com/channel/UC7tVk5SBAQryKrjL_-fPRSA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Youtube} alt="Youtube Link" />
        </a>
      </div>
    </nav>
  )
}

export default NavDrawer

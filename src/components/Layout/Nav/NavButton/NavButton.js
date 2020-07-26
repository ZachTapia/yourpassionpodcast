import React from "react"
import styles from "./NavButton.module.scss"

const NavButton = ({ onClick }) => {
  return (
    <div className={styles.navButton} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default NavButton

import React, { useState } from "react"
import Img from "gatsby-image"
import styles from "./GuestCard.module.scss"

const GuestCard = ({ name, guestTitle, image, guestAbout }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setDrawerOpen(prevState => !prevState)
    console.log("Button pressed")
  }

  return (
    <div className={styles.guestCard}>
      <Img className={styles.guestCard__image} fluid={image.fluid} />

      <button
        className={
          drawerOpen
            ? `${styles.guestCard__button} ${styles.guestCard__buttonOpen}`
            : styles.guestCard__button
        }
        onClick={() => toggleDrawer()}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={
          drawerOpen
            ? `${styles.guestCard__details} ${styles.guestCard__detailsOpen}`
            : styles.guestCard__details
        }
      >
        <h1 className={styles.guestCard__name}>{name}</h1>
        <p className={styles.guestCard__title}>{guestTitle}</p>
        <div className={styles.guestCard__about}>{guestAbout}</div>
      </div>
    </div>
  )
}

export default GuestCard

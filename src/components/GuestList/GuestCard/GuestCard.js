import React from "react"
import Img from "gatsby-image"
import styles from "./GuestCard.module.scss"

const GuestCard = ({ name, image }) => {
  return (
    <div className={styles.guestCard}>
      <h1 className={styles.guestCard__title}>{name}</h1>
      <Img fluid={image.fluid} />
    </div>
  )
}

export default GuestCard

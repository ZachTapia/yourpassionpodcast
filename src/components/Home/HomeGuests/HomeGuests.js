import React from "react"
import styles from "./HomeGuests.module.scss"
import Fade from "react-reveal/Fade"
import GuestList from "../../GuestList/GuestList"

const HomeGuests = () => {
  return (
    <section className={styles.homeGuests}>
      <div className={styles.homeGuests__wrapper}>
        <Fade>
          <h1 className={styles.homeGuests__title}>Recent Guests</h1>
        </Fade>

        <GuestList />
      </div>
    </section>
  )
}

export default HomeGuests

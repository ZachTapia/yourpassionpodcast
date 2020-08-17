import React from "react"
import { navigate } from "gatsby"
import Fade from "react-reveal/Fade"
import Flip from "react-reveal/Flip"
import styles from "./HomeLanding.module.scss"
import Button from "../../UI/Button/Button"

const HomeLanding = () => {
  return (
    <section className={styles.homeLanding}>
      <div className={styles.homeLanding__wrapper}>
        <Fade>
          <h1 className={styles.homeLanding__title}>WHAT WE'RE ABOUT</h1>
        </Fade>

        <Fade bottom>
          <p className={styles.homeLanding__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className={styles.homeLanding__button}>
            <Button onClick={() => navigate("/mission")} color="#cdf7f6">
              LEARN MORE
            </Button>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default HomeLanding

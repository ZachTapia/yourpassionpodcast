import React from "react"
import Fade from "react-reveal/Fade"
import styles from "./ConnectHeader.module.scss"

const ConnectHeader = () => {
  return (
    <header className={styles.connectHeader}>
      <Fade>
        <h1 className={styles.connectHeader__title}>LET'S CONNECT</h1>
      </Fade>
      <Fade bottom>
        <p className={styles.connectHeader__text}>
          Interested in becoming our next guest, or just have something you'd
          like for us to hear? Reach out to us below
        </p>
      </Fade>
    </header>
  )
}

export default ConnectHeader

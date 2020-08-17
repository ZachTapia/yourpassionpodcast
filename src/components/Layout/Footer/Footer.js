import React from "react"
import styles from "./Footer.module.scss"
import Tada from "react-reveal/Tada"
import Instagram from "../../../images/instagram.svg"
import Youtube from "../../../images/youtube.svg"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__socials}>
        <Tada>
          <h1 className={styles.footer__socials__text}>
            Let's stay connected
            <br /> Follow us on
          </h1>
        </Tada>

        <div className={styles.footer__socials__icons}>
          <a
            className={styles.footer__socials__icon}
            href="https://instagram.com/yourpassionpodcast?igshid=1riy8n281ah1y"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Instagram Link" />
          </a>

          <a
            className={styles.footer__socials__icon}
            href="https://www.youtube.com/channel/UC7tVk5SBAQryKrjL_-fPRSA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Youtube} alt="Youtube Link" />
          </a>
        </div>
      </div>
      <div className={styles.footer__author}>
        Website created by:{" "}
        <a href="https://ztapia.dev" target="_blank" rel="noopener noreferrer">
          Zach Tapia
        </a>
      </div>
    </footer>
  )
}

export default Footer

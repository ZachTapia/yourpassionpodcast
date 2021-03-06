import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"
import styles from "./HomeListen.module.scss"
import Spotify from "../../../images/spotify.svg"
import Apple from "../../../images/apple.svg"
import Google from "../../../images/google.svg"

const HomeListen = () => {
  const image = useStaticQuery(graphql`
    query {
      headphoneImage: file(relativePath: { eq: "images/listen.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className={styles.homeListen}>
      <div className={styles.homeListen__wrapper}>
        <Img
          className={styles.homeListen__image}
          fluid={image.headphoneImage.childImageSharp.fluid}
        />
        <div className={styles.homeListen__flex}>
          <Fade top>
            <h1 className={styles.homeListen__title}>LISTEN TO US ON</h1>
          </Fade>

          <div className={styles.homeListen__icons}>
            <Fade left>
              <a
                href="https://open.spotify.com/show/7qRLbMJy9Bjv0gY6wP7t1Y?si=GeE7pC1hR62xUL8_xuwvkw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className={styles.homeListen__icon} src={Spotify} />
              </a>
            </Fade>
            <Fade top>
              <a
                href="https://podcasts.apple.com/us/podcast/your-passion/id1523634198"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className={styles.homeListen__icon} src={Apple} />
              </a>
            </Fade>
            <Fade right>
              <a
                href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9hMmNlOGE0L3BvZGNhc3QvcnNz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className={styles.homeListen__icon} src={Google} />
              </a>
            </Fade>
          </div>
          <Fade>
            <p className={styles.homeListen__text}>
              ...or anywhere else you get your podcasts
            </p>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default HomeListen

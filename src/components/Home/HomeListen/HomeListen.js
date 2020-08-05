import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styles from "./HomeListen.module.scss"
import Spotify from "../../../images/Spotify.svg"
import Apple from "../../../images/Apple.svg"
import Google from "../../../images/Google.svg"

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
          <h1 className={styles.homeListen__title}>LISTEN TO US ON</h1>

          <div className={styles.homeListen__icons}>
            <a
              href="https://open.spotify.com/show/7qRLbMJy9Bjv0gY6wP7t1Y?si=GeE7pC1hR62xUL8_xuwvkw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={styles.homeListen__icon} src={Spotify} />
            </a>
            <a
              href="https://podcasts.apple.com/us/podcast/your-passion/id1523634198"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={styles.homeListen__icon} src={Apple} />
            </a>
            <a
              href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9hMmNlOGE0L3BvZGNhc3QvcnNz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={styles.homeListen__icon} src={Google} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeListen

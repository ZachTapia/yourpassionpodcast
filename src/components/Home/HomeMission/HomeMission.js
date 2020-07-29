import React from "react"
import { graphql, useStaticQuery, navigate } from "gatsby"
import Img from "gatsby-image"
import styles from "./HomeMission.module.scss"
import Button from "../../UI/Button/Button"

const HomeMission = () => {
  const images = useStaticQuery(graphql`
    query {
      micImage: file(relativePath: { eq: "images/mic.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className={styles.homeMission}>
      <Img
        className={styles.homeMission__image}
        fluid={images.micImage.childImageSharp.fluid}
      />

      <div className={styles.flexWrapper}>
        <h1 className={styles.homeMission__title}>WHAT WE'RE ABOUT</h1>
        <p className={styles.homeMission__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className={styles.homeMission__button}>
          <Button onClick={() => navigate("/mission")}>LEARN MORE</Button>
        </div>
      </div>
    </section>
  )
}

export default HomeMission

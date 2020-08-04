import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./GuestList.module.scss"
import GuestCard from "./GuestCard/GuestCard"

const GuestList = () => {
  const images = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  `)

  const allGuests = [{ name: "Anthony Villanueva", image: "a_villanueva.png" }]

  const renderGuests = () => {
    return allGuests.map(guest => {
      // Grab matching image
      const imageFluid = images.allImageSharp.nodes.find(node => {
        if (node.fluid.originalName == guest.image) {
          return node.fluid
        }
      })

      return <GuestCard name={guest.name} image={imageFluid} />
    })
  }

  return <div className={styles.guestList}>{renderGuests()}</div>
}

export default GuestList

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

  const allGuests = [
    { name: "Hassan Khaffaf", guestTitle: "Producer", image: "profile.png" },
    {
      name: "Anthony Villanueva",
      guestTitle: "Producer",
      image: "a_villanueva.png",
    },
    { name: "Joe Melendrez", guestTitle: "Producer", image: "profile.png" },
    {
      name: "Christina Ballestero",
      guestTitle: "Producer",
      image: "profile.png",
    },
  ]

  const renderGuests = () => {
    return allGuests.map(guest => {
      // Grab matching image
      const imageFluid = images.allImageSharp.nodes.find(node => {
        if (node.fluid.originalName == guest.image) {
          return node.fluid
        }
      })

      return (
        <GuestCard
          key={guest.name}
          name={guest.name}
          guestTitle={guest.guestTitle}
          image={imageFluid}
        />
      )
    })
  }

  return <div className={styles.guestList}>{renderGuests()}</div>
}

export default GuestList

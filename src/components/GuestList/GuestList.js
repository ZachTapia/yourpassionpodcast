import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Fade from "react-reveal/Fade"
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
    {
      name: "Hassan Khaffaf",
      guestTitle: "Producer",
      image: "h_khaffaf.png",
      guestAbout:
        "Hassan shares his story of how he went from a normal kid in Florida. To a legendary producer working with Kid Cudi, Kanye West, Teyana Taylor, Logic and many more greats in the industry.",
    },

    {
      name: "Joe Melendrez",
      guestTitle: "Producer",
      image: "j_melendrez.png",
      guestAbout:
        "In Episode 2 we get to know the story of Joe Melendrez and where God has taken him! From being inspired to create music thanks to P Diddy, to his brilliant idea of a rosary rap. He even breaks down how he came up with the idea of starting God Swag Apparel. And comment’s on where he thinks Kanye West will take things in the future. He shares it all. He is a Catholic Rapper, speaker, and worship leader and he is here to tell his story!",
    },
    {
      name: "Cristina Ballestero",
      guestTitle: "Producer",
      image: "c_ballestero.png",
      guestAbout:
        "We get to know the story of how Cristina originally grew up being part of a famous girl band and the reality she faced being a pop star. She went into detail about the difficult issues of the music industry overcoming many challenges. Along the way she found her true passion for ministry.",
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
        <Fade left>
          <GuestCard
            key={guest.name}
            name={guest.name}
            guestTitle={guest.guestTitle}
            guestAbout={guest.guestAbout}
            image={imageFluid}
          />
        </Fade>
      )
    })
  }

  return <div className={styles.guestList}>{renderGuests()}</div>
}

export default GuestList

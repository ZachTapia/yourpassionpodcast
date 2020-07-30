import React from "react"
import styles from "./HomeGuests.module.scss"
import { Parallax } from "react-parallax"
import GuestList from "../../GuestList/GuestList"

const HomeGuests = () => {
  return (
    <Parallax
      blur={10}
      bgImage={require("../../../images/mic.png")}
      bgImageAlt="the cat"
      strength={1200}
    >
      <GuestList />
    </Parallax>
  )
}

export default HomeGuests

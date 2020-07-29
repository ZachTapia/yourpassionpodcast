import React from "react"
import styles from "./HomeGuests.module.scss"
import { Parallax } from "react-parallax"
import GuestList from "../../GuestList/GuestList"

const HomeGuests = () => {
  return (
    <Parallax
      blur={0}
      bgImage={require("../../../images/pattern.png")}
      bgImageAlt="the cat"
      strength={1200}
    >
      <GuestList />
    </Parallax>
  )
}

export default HomeGuests

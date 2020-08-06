import React from "react"
import styles from "./Button.module.scss"

const Button = ({ children, onClick, color }) => {
  const buttonStyle = {
    color: color,
    border: `3px solid ${color}`,
  }

  return (
    <button className={styles.button} onClick={onClick} style={buttonStyle}>
      {children}
    </button>
  )
}

export default Button

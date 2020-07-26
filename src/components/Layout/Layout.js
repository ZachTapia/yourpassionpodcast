import React from "react"
import styles from "./Layout.module.scss"
import Nav from "./Nav/Nav"

const Layout = ({ children }) => {
  return (
    <div className={styles.layoutWrapper}>
      <Nav />
      <div className={styles.content}>{children}</div>
      <div className={styles.footer}></div>
    </div>
  )
}

export default Layout

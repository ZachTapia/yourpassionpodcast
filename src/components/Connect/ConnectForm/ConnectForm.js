import React from "react"
import styles from "./ConnectForm.module.scss"

const ConnectForm = () => {
  return (
    <form
      className={styles.connectForm}
      name="connect"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="connect" value="connect" />

      <label>
        Name <input type="text" name="name" />
      </label>

      <label>
        Email <input type="email" name="email" />
      </label>

      <label>
        Phone <input type="phone" name="phone" />
      </label>

      <div className={styles.guestCheckbox}>
        <input type="checkbox" id="guest" name="guest" />
        <label htmlFor="guest">I want to be a guest!</label>
      </div>

      <label>
        Comments <textarea name="comments"></textarea>
      </label>

      <button type="submit">Send</button>
    </form>
  )
}

export default ConnectForm

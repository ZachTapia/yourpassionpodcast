import React from "react"
import Layout from "../components/Layout/Layout"
import ConnectHeader from "../components/Connect/ConnectHeader/ConnectHeader"
import ConnectForm from "../components/Connect/ConnectForm/ConnectForm"

const Connect = () => {
  return (
    <Layout>
      <ConnectHeader />
      <ConnectForm />
    </Layout>
  )
}

export default Connect

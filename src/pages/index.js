import React from "react"
import Layout from "../components/Layout/Layout"
import HomeLanding from "../components/Home/HomeLanding/HomeLanding"
import HomeMission from "../components/Home/HomeMission/HomeMission"
import HomeGuests from "../components/Home/HomeGuests/HomeGuests"
import HomeListen from "../components/Home/HomeListen/HomeListen"

const Index = () => (
  <Layout>
    <HomeLanding />
    <HomeMission />
    <HomeGuests />
    <HomeListen />
  </Layout>
)

export default Index

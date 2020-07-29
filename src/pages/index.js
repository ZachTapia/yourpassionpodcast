import React from "react"
import Layout from "../components/Layout/Layout"
import HomeLanding from "../components/Home/HomeLanding/HomeLanding"
import HomeMission from "../components/Home/HomeMission/HomeMission"
import HomeGuests from "../components/Home/HomeGuests/HomeGuests"
const Index = () => (
  <Layout>
    <HomeLanding />
    <HomeMission />
    <HomeGuests />
  </Layout>
)

export default Index

import * as React from 'react'
import Layout from '../components/layout'
import pic from '../images/pic.png'

const AboutPage = () => {
  return (
      <Layout pageTitle="About">
        <img src={pic} alt="Mike smiles for the camera." width="200" height="200" />
        <p>React Developer 🔗 | ASQ Certified Six Sigma Green Belt 🥋 | ASQ Certified Quality Process Analyst ⏱️ | Financial Services Consultant 🪙 | Poker Player ♠️</p>
      </Layout>
  )
}

export default AboutPage

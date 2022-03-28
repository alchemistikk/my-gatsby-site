import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
      <Layout pageTitle="Projects">
        <p>SPI Match Filter</p>
        <div>
          <a href="https://github.com/alchemistikk/spi-match-filter" target="_blank" rel="noopener noreferrer">github</a>
        </div>
        <div>
          <a href="https://github.com/alchemistikk/spi-match-filter" target="_blank" rel="noopener noreferrer">live</a>
        </div>
        <div>
          <p>This Website</p>
          <div>
            <a href="https://github.com/alchemistikk/my-gatsby-site" target="_blank" rel="noopener noreferrer">github</a>
          </div>
          <div>
            <a href="https://mikemitchell.ca" target="_blank" rel="noopener noreferrer">live</a>
          </div>
        </div>
        
      </Layout>
  )
}

export default AboutPage

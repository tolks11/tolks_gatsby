import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <div>
   <Layout pageTitle="Home Page">
     <p>making this cool thing and figuring it out</p>
     <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/logo.png"
      />
   </Layout>
   </div>
  )
}

export default IndexPage

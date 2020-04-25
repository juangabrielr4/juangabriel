import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
      <SEO title="Juan Gabriel Ramirez FrontEnd Developer" />
      <h1>Juan Gabriel Ramirez FrontEnd Developer</h1>
      <div style={{display:`flex`, alignItems:`center`}}>
        <p>i build react sites and develop amazing experiences.</p>
        <div style={{
            borderRadius: `100%`,
            overflow: `hidden`,
            width: `300px`,
            marginBottom: `1.45rem`,
        }}
        >
          <Image />
        </div>
        <p style={{textAlign:`right`}}>Passionate about developing amazing user experiences!</p>
      </div>
      <p>
        Every position I have held has transformed my skill-set and goals towards
        forward-thinking technology. I am obsessed with expanding my craft,
        solving challenging problems and staying on the bleeding edge.
      </p>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
)

export default IndexPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from 'styled-components';

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Section = styled.p`
    font-size: 0.8em;
    /* The GitHub button is a primary button
    * edit this to target it specifically! */
    ${props => props.right && css`
    text-align: right;
`}
`;
const IndexPage = () => (
    <Layout>
      <SEO title="Juan Gabriel Ramirez FrontEnd Developer" />
      <h1>Juan Gabriel Ramirez FrontEnd Developer</h1>
      <Title>some title</Title>
      <div style={{display:`flex`, alignItems:`center`}}>
        <Section>i build react sites and develop amazing experiences.</Section>
        <div style={{
            borderRadius: `100%`,
            overflow: `hidden`,
            width: `300px`,
            marginBottom: `1.45rem`,
        }}
        >
          <Image />
        </div>
        <Section right>Passionate about developing amazing user experiences!</Section>
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

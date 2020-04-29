import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled, { css } from 'styled-components'

import { motion } from "framer-motion"
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const SoftAppear = ({ children }) => (
  <motion.div initial="hidden" animate="visible" variants={variants} >
    {children}
  </motion.div>
)
// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Section = styled.p`
    font-size: 0.8em;
    ${props => props.right && css`
    text-align: right;
`}
`;
const IndexPage = () => (
    <Layout>
      <SEO title="Juan Gabriel Ramirez FrontEnd Developer" />
      <h1>Juan Gabriel Ramirez FrontEnd Developer</h1>
      <div style={{display:`flex`, alignItems:`center`}}>
        <SoftAppear>
          <Section>i build react sites and develop amazing experiences.</Section>
        </SoftAppear>
        <div style={{
            borderRadius: `100%`,
            overflow: `hidden`,
            width: `300px`,
            marginBottom: `1.45rem`,
        }}
        >
          <Image />
        </div>
        <SoftAppear>
          <Section right>Passionate about developing amazing user experiences!</Section>
        </SoftAppear>
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

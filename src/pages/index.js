import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { motion } from "framer-motion"
import tw from 'twin.macro'

library.add(fab, faCheckSquare, faCoffee)
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const social = [
  {
    platform: `github`,
    icon: `github`,
    url: `https://github.com/jg-rc`,
  },
  {
    platform: `twitter`,
    icon: `twitter`,
    url: `https://twitter.com/DeprecatedUser`,
  },
  {
    platform: `codepen`,
    icon: `codepen`,
    url: `https://codepen.io/codegabo`,
  },
  {
    platform: `dev`,
    icon: `dev`,
    url: `https://dev.to/jgrc`,
  },
  {
    platform: `linkedin`,
    icon: `linkedin`,
    url: `https://www.linkedin.com/in/juangabrielramirez/`,
  },
  {
    platform: `stack overflow`,
    icon: `stack-overflow`,
    url: `https://es.stackoverflow.com/users/18928/juan-gabriel-ramirez`,
  },
  {
    platform: `npm`,
    icon: `npm`,
    url: `https://www.npmjs.com/~juangabriel`,
  },
]

const SoftAppear = ({ children }) => (
  <motion.div initial="hidden" animate="visible" variants={variants}>
    {children}
  </motion.div>
)
// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Section = styled.p`
  ${tw`border-solid`}
  font-size: 0.8em;
  color: #99c794;
  text-align: ${props => props.right && 'right'}; `

const SocialIcon = styled.a`
  font-size: 25px;
`
const Ul = tw.ul`flex justify-around`

const IndexPage = () => (
  <Layout>
    <SEO title="Juan Gabriel Ramirez FrontEnd Developer" />
    <h1 style={{ color: `#5FB3B3`, fontSize: `21px`, textAlign: `right` }}>
      Juan Gabriel Ramirez FrontEnd Developer
    </h1>
    <div style={{ display: `flex`, alignItems: `center` }}>
      <SoftAppear>
        <Section>i build react sites and develop amazing experiences.</Section>
      </SoftAppear>
      <div
        style={{
          borderRadius: `100%`,
          overflow: `hidden`,
          width: `300px`,
          marginBottom: `1.45rem`,
        }}
      >
        <Image />
      </div>
      <SoftAppear>
        <Section right>
          Passionate about developing amazing user experiences!
        </Section>
      </SoftAppear>
    </div>
    <p>
      Every position I have held has transformed my skill-set and goals towards
      forward-thinking technology. I am obsessed with expanding my craft,
      solving challenging problems and staying on the bleeding edge.
    </p>
    <Ul className="list-none">
      {social.map((el, index) => (
        <li>
          <SocialIcon target="_blank" href={el.url}>
            <FontAwesomeIcon index={index} icon={["fab", el.icon]} />
          </SocialIcon>
        </li>
      ))}
    </Ul>
  </Layout>
)

export default IndexPage

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import CustomParticles from "../components/custom-particles"
import SEO from "../components/seo"
import { library, IconName } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faCode,
  faAngleDoubleDown,
} from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { motion } from "framer-motion"
import "twin.macro"
import Fullpage from "@codegabo/reactivefullpage"
import { url } from "inspector"
import { useMedia } from "react-media"

library.add(fab, faCode, faEnvelope, faAngleDoubleDown)

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
  {
    platform: `youtube`,
    icon: `youtube`,
    url: `https://www.youtube.com/channel/UCi0J3yA3m5CuyR8E-0SE23w`,
  },
]

export interface LayoutProps {
  children: React.ReactNode
}

const Avatar = () => {
  const isSmallScreen = useMedia({ query: "(max-width: 599px)" })

  const ImagePage = () => (
    <div
      style={{
        borderRadius: `100%`,
        overflow: `hidden`,
        width: `200px`,
        marginBottom: `1.45rem`,
      }}
    >
      <Image file={"juan_gabriel.jpg"} />
    </div>
  )
  return isSmallScreen ? "" : <ImagePage />
}
const SoftAppear = ({ children }: LayoutProps) => (
  <motion.div initial="hidden" animate="visible" variants={variants}>
    {children}
  </motion.div>
)

const FullpageReactive = () => (
  <Fullpage>
    <div>
      <IndexPage />
    </div>
    <div>
      <h2> Experience </h2>
    </div>
  </Fullpage>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Juan Gabriel Ramirez FrontEnd Developer" />
    <div style={{ position: `relative` }} className="hero">
      <CustomParticles />
      <div
        style={{
          position: `absolute`,
          top: `50%`,
          left: `50%`,
          transform: `translate(-50%, -50%)`,
        }}
        className="hero__iner"
      >
        <div
          style={{
            backdropFilter: `blur(1px)`,
            borderRadius: `5%`,
          }}
          tw="flex flex-col items-center justify-center"
        >
          <h1 style={{ color: `#5FB3B3`, fontSize: `21px` }}>
            Juan Gabriel Ramirez
            <br />
            <sub>Senior FrontEnd Developer</sub>
          </h1>
          <Avatar />
          <ul tw="flex m-0">
            {social.map((el, index) => (
              <li key={index}>
                <a tw="p-2" href={el.url}>
                  <FontAwesomeIcon icon={["fab", el.icon as IconName]} />
                </a>
              </li>
            ))}
          </ul>
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `3rem 1.0875rem`,
              color: `white`,
            }}
          >
            <p>
              With over 8 years of experience in the web development world, my
              biggest goal is to help companies by bringing simple solutions to
              complex problems.
            </p>
            <p>Passionate about developing amazing user experiences!</p>
            <p>
              Every position I have held has transformed my skillset and goals
              towards forward-thinking technology. I am obsessed with expanding
              my craft, solving challenging problems and staying on the bleeding
              edge.
            </p>
            <a
              tw="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded inline-flex items-center"
              href="mailto:codegabo@gmail.com"
            >
              <FontAwesomeIcon tw="mr-2" icon="envelope" />
              Get in touch
            </a>
          </div>
        </div>
        <FontAwesomeIcon icon="AngleDoubleDown" />
      </div>
    </div>
  </Layout>
)

export default FullpageReactive

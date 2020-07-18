import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { library, IconName } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faCode } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { motion } from "framer-motion"
import "twin.macro"
import Fullpage from "@codegabo/reactivefullpage"
import { url } from "inspector"
import Particles from "react-tsparticles"

library.add(fab, faCode, faEnvelope)

const CustomParticles = () => (
  <Particles
    id="tsparticles"
    options={{
      fpsLimit: 60,
      interactivity: {
        detectsOn: "canvas",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          random: true,
          value: 5,
        },
      },
      detectRetina: true,
    }}
  />
)
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

const SoftAppear = ({ children }: LayoutProps) => (
  <motion.div initial="hidden" animate="visible" variants={variants}>
    {children}
  </motion.div>
)
// Create a <Title> react component that renders an <h1> which is

// centered, palevioletred and sized at 1.5em

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
        clasName="hero__iner"
      >
        <div
          style={{
            backdropFilter: `blur(1rem)`,
          }}
          tw="flex flex-col items-center justify-center"
        >
          <h1 style={{ color: `#5FB3B3`, fontSize: `21px` }}>
            Juan Gabriel Ramirez
            <br />
            <sub>Senior FrontEnd Developer</sub>
          </h1>
          <div
            style={{
              borderRadius: `100%`,
              overflow: `hidden`,
              width: `70%`,
              marginBottom: `1.45rem`,
            }}
          >
            <Image file={"juan_gabriel.jpg"} />
          </div>
          <ul tw="flex m-0">
            {social.map((el, index) => (
              <li key={index}>
                <a tw="p-2" href={el.url}>
                  <FontAwesomeIcon icon={["fab", el.icon as IconName]} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `3rem 1.0875rem`,
      }}
    >
      <p>
        With over 8 years of experience in the web development world, my biggest
        goal is to help companies by bringing simple solutions to complex
        problems.
      </p>
      <p>Passionate about developing amazing user experiences!</p>
      <p>
        Every position I have held has transformed my skillset and goals towards
        forward-thinking technology. I am obsessed with expanding my craft,
        solving challenging problems and staying on the bleeding edge.
      </p>
      <a
        tw="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded inline-flex items-center"
        href="mailto:codegabo@gmail.com"
      >
        <FontAwesomeIcon tw="mr-2" icon="envelope" />
        Get in touch
      </a>
    </div>
  </Layout>
)

export default FullpageReactive

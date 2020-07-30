import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#1B2B34`,
      padding: `1rem 20px`,
      position: `fixed`,
      width: `100%`,
      zIndex: `1`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        justifyContent: `space-between`,
        display: `flex`,
        alignItems: `center`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#6699CC`,
            textDecoration: `none`,
          }}
        >
          <FontAwesomeIcon icon="code" />
        </Link>
      </h1>
      <ul
        style={{
          color: `#6699CC`,
          display: `flex`,
          margin: 0
        }}
        tw="flex"
        className="main-menu"
      >
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Skills</a></li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

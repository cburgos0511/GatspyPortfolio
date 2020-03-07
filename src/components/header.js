import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./components.sass"

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <div id="logo">
        <div id="logo-square">
          <h1 id="cb">CB</h1>
        </div>
        <h1 id="lg-name">
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/projects">Work</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

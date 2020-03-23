import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import "./components.sass"
const Header = ({ siteTitle }) => {
  const [show, setShow] = useState(false)
  let showClass = show ? "menu show" : "menu"
  let x = show ? "open" : ""
  let exp = show ? "expand" : ""
  let y = show ? "logo-move" : ""
  return (
    <header>
      <nav>
        <div id="logo">
          <div id="logo-square" className={y}>
            <h1 id="cb">CB</h1>
          </div>
          <h1 id="lg-name">
            <Link activeClassName="active" to="/">
              {siteTitle}
            </Link>
          </h1>
        </div>
        <div className={showClass}>
          <ul>
            <li>
              <Link activeClassName="active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/about/">
                About
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/projects">
                Work
              </Link>
            </li>
            <li>
              <a href="mailto:cburgos0511@gmail.com">Contact</a>
            </li>
          </ul>
        </div>

        <div id="move" className={exp}></div>
        <div id="burger" className={x} onClick={() => setShow(!show)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

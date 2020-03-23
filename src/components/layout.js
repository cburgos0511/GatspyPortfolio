/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import PageTransition from "gatsby-plugin-page-transitions"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <PageTransition>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <footer>
        <div className="content">
          <div className="logo-wrap">
            <div className="logo">
              <h1>CB</h1>
            </div>
          </div>

          <ul>
            <li> © 2020 - {new Date().getFullYear()}</li>
            <li>
              Built with
              <a href="https://www.gatsbyjs.org"> Gatsby </a> &
              <a href="https://www.gatsbyjs.org"> Strapi</a>
            </li>
            <li>
              Made on an
              <a href="https://www.apple.com/mac/"> Apple Computer</a>
            </li>
            <li>
              Hosted on <a href="https://www.heroku.com"> Heroku </a> &
              <a href="https://www.netlify.com/"> Netlify</a>
            </li>
          </ul>
        </div>
      </footer>
    </PageTransition>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

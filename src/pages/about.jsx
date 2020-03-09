import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"

const About = ({ data }) => (
  <Layout>
    <div className="about-intro">
      <h1>
        Hello, I'm Cruz! <br /> Full Stack Developer.
      </h1>
    </div>
    {data.allStrapiBio.edges.map(bio => {
      return (
        <div key={bio.node.id} className="about-content">
          <div className="about-img">
            <Img fluid={bio.node.img.childImageSharp.fluid} />
          </div>
          <div className="about-about">
            <ReactMarkdown source={bio.node.about} />
          </div>
        </div>
      )
    })}
  </Layout>
)

export const bio = graphql`
  query MyBio {
    allStrapiBio {
      edges {
        node {
          about
          img {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default About

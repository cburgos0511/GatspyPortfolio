import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"
import "./template.sass"

const ArticleTemplate = ({ data }) => (
  <Layout>
    <div className="temp-head">
      <h1 className="temp-name">{data.strapiProjects.name}</h1>
      <div className="proj-info">
        <p>Y. {data.strapiProjects.date.slice(0, 4)}</p>
        <p>D. {data.strapiProjects.developer.username}</p>
        <p>C. {data.strapiProjects.category}</p>
      </div>
    </div>
    <div className="temp-container">
      <div className="temp-project-img">
        <Img fluid={data.strapiProjects.img.childImageSharp.fluid} />
      </div>
      <div className="temp-content">
        <div className="temp-content-p">
          <p className="first-letter">
            <ReactMarkdown source={data.strapiProjects.content.slice(0, 1)} />
          </p>

          <p>{data.strapiProjects.content.slice(1)}</p>
        </div>
        <h1 className="wiu">What I used</h1>
        <h2>{data.strapiProjects.technologies.split(",").join(" ")}</h2>
      </div>

      <div className="btn-wrap">
        <a href={data.strapiProjects.link}>Github</a>
      </div>
    </div>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ProjectTemplate($id: String!) {
    strapiProjects(id: { eq: $id }) {
      name
      content
      category
      date(locale: "")
      technologies
      link
      developer {
        username
      }
      img {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
// author {
//     id
//     username
//   }

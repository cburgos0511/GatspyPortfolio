import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Project from "../components/project"
import "./pages.sass"

const Projects = ({ data }) => {
  const project = data.allStrapiProjects.edges.map((item, i) => {
    let className = i % 2 === 0 ? "project to-left" : "project"

    return (
      <Link to={`/${item.node.id}`} className={className} key={item.node.id}>
        <Project
          title={item.node.name}
          content={item.node.content}
          tech={item.node.technologies}
          img={item.node.img.childImageSharp.fluid}
        />
      </Link>
    )
  })

  return (
    <Layout>
      <div className="project-intro">
        <h1>
          A small selection <br /> of my work, enjoy.
        </h1>
      </div>
      <div className="project-projects">{project}</div>
    </Layout>
  )
}
export const query = graphql`
  query MyProjects {
    allStrapiProjects {
      edges {
        node {
          id
          name
          content
          technologies
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

export default Projects

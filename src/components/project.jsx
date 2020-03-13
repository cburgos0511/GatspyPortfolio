import React from "react"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"

const Project = ({ title, content, tech, img, id }) => {
  return (
    <>
      <div className="img-wrapper">
        <Img className="project-img" fluid={img} />
      </div>
      <div className="contain">
        <h1>{title}</h1>
        <ReactMarkdown source={content} />
        <button>View Project</button>
      </div>
    </>
  )
}

export default Project

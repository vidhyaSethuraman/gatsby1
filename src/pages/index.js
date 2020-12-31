import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby';

import Layout from "../components/layout"

import SEO from "../components/seo"



const IndexPage = (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{data.title}</h1>
      <p>{data.intro}</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <img src={data.image} alt='photo of Ruby' />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage



export const query = graphql`
  query {
    allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "home"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              intro
              image
          }
        }
      }
    }
  }
}`

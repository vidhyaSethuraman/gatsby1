import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby';

import Layout from "../components/layout"

import SEO from "../components/seo"

/*
const IndexPage = (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <img src={data.Banner1} alt='photo of Ruby' />
      </div>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <img src={data.Banner2} alt='photo of Ruby' />
      </div>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <img src={data.Banner3} alt='photo of Ruby' />
      </div>
      
    </Layout>
  )
}*/



const IndexPage = (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" >
  <ol class="carousel-indicators">
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img src={data.Banner1} alt='photo of Ruby' />
    </div>
    <div class="carousel-item">
        <img src={data.Banner2} alt='photo of Ruby' />
    </div>
    <div class="carousel-item">
        <img src={data.Banner3} alt='photo of Ruby' />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>
  )
}

export default IndexPage


export const query = graphql`
  query {
    allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "one"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              Banner1
              Banner2
              Banner3
          }
        }
      }
    }
  }
}`
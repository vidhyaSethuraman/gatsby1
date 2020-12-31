import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby';

import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import SEO from "../components/seo"
import Carousel from 'react-bootstrap/Carousel'
/*import supporticon from '../images/supporticon.png'
import logo from '../images/logo.svg'
import android_icon from '../images/android-icon.png'
import ios_icon from '../images/ios-icon.png'
import testimonials_1579692130 from '../images/testimonials_1579692130.png';
import testimonials_1579692018 from '../images/testimonials_1579692018.png';
import testimonials_1579691997 from '../images/testimonials_1579691997.png';*/


const IndexPage = (props) => {

  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <>
    
<section id="adda-header">
  <div class="adda-top-header">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-6">
          <ul class="adda-lang">
            <li><a href="#">English</a></li>
            <li><a href="#">தமிழ்</a></li>
            <li><a href="#">తెలుగు</a></li>
          </ul>
        </div>
        <div class="col-md-6 col-6 ">
          <div class="adda-support">
           
            <span>1800 419 8519</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="adda-main-nav">
    <div class="container">
      <div class="row">
        <div class="col-sm-2 col-7">
          <div class="adda-micon">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </div>
          <div class="adda-brand">
           
          </div>
        </div>
        <div class="col-sm-6 hidden-mobile">
          <ul class="adda-nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/how-to-play.html">How to Play</a></li>
            <li><a href="/promotions.html">Promotions</a></li>
            <li><a href="/promotions.html">Refer a Friend</a></li>
          </ul>
          
        </div>
        <div class="col-sm-4 col-5">
          <ul class="adda-header-action">
           
            <li><a href="" class="common-btn login-btn">Sign IN / Sign UP</a></li>
            <li class="hidden-mobile"><a href="" class="common-btn playnow">Play Now</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
    <div style={{width:"100%" ,height:"700px"}}>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={data.Banner1}
      alt="First slide"
      style={{width:"100%" ,height:"500px"}}
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={data.Banner2}
      alt="Third slide"
      style={{width:"100%" ,height:"500px"}}
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={data.Banner3}
      alt="Third slide"
      style={{width:"100%" ,height:"500px"}}
    />

    
  </Carousel.Item>
</Carousel>
</div>




    </>
  )
}


export default IndexPage

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


/*
const IndexPage = (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <>
    
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
</>
  )
}*/


/*
const IndexPage = (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <>
    <Helmet>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </Helmet>
      <div style={{width:"1000px", height:"300px"}}>
      <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<br/>
      <button type="button" class="btn btn-primary">Primary</button>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={data.Banner1} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={data.Banner2} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src={data.Banner3} class="d-block w-100" alt="..."/>
        </div>
      </div>
    </div>
    </div>
</>
  )
}
*/





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
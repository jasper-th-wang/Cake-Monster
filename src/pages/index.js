import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Link } from "gatsby";
import Masonry from '../components/Masonry/Masonry';
import InfoCard from '../components/InfoCard/InfoCard';
import SEO from "../components/seo";



const IndexPage = () => {

  const imageData = useStaticQuery(graphql`
  query {
    tea_line: file(relativePath: {eq: "photos/tea/tea_line.jpg"}) {
      childImageSharp {
        fluid {
          originalName
            ...GatsbyImageSharpFluid
        }
      }
    }
    about_me: file(relativePath: {eq: "photos/about/owner.png"}) {
      childImageSharp {
        fluid {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`);

  return (

    <>
      <SEO title="Home" />
      <div className="hero">
        <div className="hero__bg"></div>
        <div className="hero__content">
          <h1>If you can dream it,<br />I can design it.</h1>
          <p>No, really, I mean it.</p>
        </div>
      </div>
      <section className="section section--green intro-sec">
        <h2>Beyond your Imagination</h2>
        <div className="section__content">
          <p>Sausage pork frankfurter rump boudin doner turducken shank tri-tip pork belly porchetta hamburger tenderloin ground round beef. Shankle doner jerky, meatloaf strip steak drumstick salami </p>
        </div>
        <Masonry />
      </section>
      <section className="section section--pink service-sec">
        <h2>Services</h2>
        <div className="section__content">
          <p>Sausage pork frankfurter rump boudin doner turducken shank tri-tip pork belly porchetta hamburger tenderloin ground round beef. Shankle doner jerky, meatloaf strip steak drumstick salami </p>
        </div>
        <InfoCard />
      </section>
      <section className="section section--white tea-sec">
        <h2>Time for a tea break?</h2>
        <Img fluid={ imageData.tea_line.childImageSharp.fluid } alt={ imageData.tea_line.childImageSharp.fluid.originalName } className="tea-photo" />
        <div className="section__content">
          <p>Sausage pork frankfurter rump boudin doner turducken shank tri-tip pork belly porchetta hamburger tenderloin ground round beef.</p>
          <button className="outline-btn">VISIT ME!</button>
        </div>
      </section>
      <section className="section section--pink about-sec">
        <h3 className="section__sub-title">About me</h3>
        <Img fluid={ imageData.about_me.childImageSharp.fluid } alt={ imageData.about_me.childImageSharp.fluid.originalName } className="about-me-photo" />
        <div className="section__content about-content">
          <p>Sausage pork frankfurter rump boudin doner turducken shank tri-tip pork belly porchetta hamburger tenderloin ground round beef.</p>
        </div>
      </section>
    </>
  );

}
export default IndexPage

import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";
import cakeBackground from '../assets/svgs/cake-background.svg';

const IndexPage = () => {
  console.log(cakeBackground);

  return (

    <>
      <SEO title="Home" />
      <div className="hero">
        <div className="hero__bg"
          style={ { backgroundImage: `url(${ cakeBackground })` } }></div>
        <div className="hero__content">
          <h1> More than just a piece of cake.</h1>
        </div>
      </div>
    </>
  );

}
export default IndexPage

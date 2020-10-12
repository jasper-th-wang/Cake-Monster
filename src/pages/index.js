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
          <h1>If you can dream it,<br />we can design it.</h1>
          <p>No, really, we mean it.</p>
        </div>
      </div>
      <section className="section section--white">
        <h2>Beyond your Imagination</h2>
        <div className="section__content">
          <p>Sausage pork frankfurter rump boudin doner turducken shank tri-tip pork belly porchetta hamburger tenderloin ground round beef. Shankle doner jerky, meatloaf strip steak drumstick salami </p>
        </div>
      </section>
    </>
  );

}
export default IndexPage

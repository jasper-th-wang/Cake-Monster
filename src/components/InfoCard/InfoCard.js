import React from 'react';
import classes from './InfoCard.module.scss';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const InfoCard = () => {
  const imageData = useStaticQuery(graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "photos/services"}}) {
      nodes {
        childImageSharp {
          fluid {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`);

  return (
    <div className={ classes.wrapper }>
      <div className={ classes.card }>
        <Img
          fluid={ imageData.allFile.nodes[0].childImageSharp.fluid }
          alt={ imageData.allFile.nodes[0].childImageSharp.fluid.orginalName }
          className={ `${ classes.photo } ${ classes.photo1 }` }
        />
        <div className={ classes.content }>
          <h3>Lessons</h3>
          <p>Dessert jelly-o liquorice cake bear claw apple pie donut donut cotton candy.</p>
          <button className="outline-btn--green">MORE</button>
        </div>
      </div>
      <div className={ classes.card }>
        <Img
          fluid={ imageData.allFile.nodes[1].childImageSharp.fluid }
          alt={ imageData.allFile.nodes[1].childImageSharp.fluid.orginalName }
          className={ `${ classes.photo } ${ classes.photo2 }` }
        />
        <div className={ classes.content }>
          <h3>Custom Cakes</h3>
          <p>Dessert jelly-o liquorice cake bear claw apple pie donut donut cotton candy.</p>
          <button className="outline-btn--green">MORE</button>
        </div>
      </div>

    </div>
  );
}

export default InfoCard;
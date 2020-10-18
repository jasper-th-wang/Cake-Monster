import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import classes from './Masonry.module.scss';

const Masonry = () => {

  const imageData = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "photos/cakes"}}) {
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

  const fileNameParse = (input) => {
    return input.substr(0, input.lastIndexOf('.')) || input;
  }

  console.log(imageData)
  return (
    <div className={ classes.wrapper }>
      {
        imageData.allFile.nodes.map((node, index) => {
          const name = fileNameParse(node.childImageSharp.fluid.originalName);

          return (
            <Img
              key={ index }
              fluid={ node.childImageSharp.fluid }
              alt={ name }
              className={ `${ classes.photo } ${ classes[name] }` }
            />
          )
        })
      }
      <div className={ classes.viewMore }>
        <h3>AND MORE</h3>
      </div>
    </div>
  );
}

export default Masonry;
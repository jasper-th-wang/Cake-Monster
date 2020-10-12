import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "../assets/sass/main.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={ data.site.siteMetadata?.title || `Title` } />
      <main>{ children }</main>
      <footer className="footer">
        © { new Date().getFullYear() } Cake Monster All rights reserved.
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

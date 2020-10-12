import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import HamburgerBtn from './hamburgerBtn';
import Logo from '../assets/svgs/cakeMonsterLogo.inline.svg';

const Header = ({ siteTitle }) => {
  const [menuToggled, setMenuToggled] = useState(false);
  const toggleMenuHandler = () => {
    setMenuToggled(prev => !prev);
  }
  return (
    <header className="header">
      <Logo className="header__logo" />
      <HamburgerBtn menuToggled={ menuToggled } toggleMenu={ toggleMenuHandler } />
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

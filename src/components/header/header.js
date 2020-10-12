import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import HamburgerBtn from './hamburgerBtn';
import MenuList from './menuList';
import Logo from '../../assets/svgs/cakeMonsterLogo.inline.svg';


const Header = ({ siteTitle }) => {
  const [menuToggled, setMenuToggled] = useState(false);
  // x:400 needs to be changed to accomadate with resizing
  // when it's desktop => set to 2000?
  const [closeMenuLocation, setCloseMenuLocation] = useState({ x: 1000, y: -1000 });
  useEffect(() => {
    console.log(closeMenuLocation);
  }, [closeMenuLocation]);


  const toggleMenuHandler = () => {
    setMenuToggled(prev => !prev);

  }
  return (
    <header className="header">
      <Logo className="header__logo" />
      <HamburgerBtn
        menuToggled={ menuToggled }
        toggleMenuHandler={ toggleMenuHandler }
        setCloseMenuLocation={ setCloseMenuLocation }
      />
      <MenuList
        menuToggled={ menuToggled }
        toggleMenuHandler={ toggleMenuHandler }
        closeMenuLocation={ closeMenuLocation }
      />
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

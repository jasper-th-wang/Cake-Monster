import React from 'react';
import classes from './hamburgerBtn.module.scss';

const HamburgerBtn = ({ menuToggled, toggleMenu }) => (
  <button
    className={
      `${ classes.hamburger } 
      ${ classes.hamburgerSpring } 
      ${ menuToggled ? classes.isActive : null }
      ` }
    type="button"
    onClick={ toggleMenu }
  >
    <span className={ classes.hamburgerBox }>
      <span className={ classes.hamburgerInner }></span>
    </span>
  </button>
);

export default HamburgerBtn;
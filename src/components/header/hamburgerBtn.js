import React from 'react';
import classes from './hamburgerBtn.module.scss';
import { motion } from 'framer-motion';

const HamburgerBtn = ({ menuToggled, toggleMenuHandler, setCloseMenuLocation }) => (
  <motion.button
    className={
      `${ classes.hamburger } 
      ${ classes.hamburgerSpring } 
      ${ menuToggled ? classes.isActive : null }
      ` }
    type="button"
    onClick={ toggleMenuHandler }
    onTap={ (event, info) => {
      const yOffset = window.pageYOffset;
      setCloseMenuLocation({ x: info.point.x, y: (info.point.y - yOffset) });
    } }
  >
    <span className={ classes.hamburgerBox }>
      <span className={ classes.hamburgerInner }></span>
    </span>
  </motion.button>
);

export default HamburgerBtn;
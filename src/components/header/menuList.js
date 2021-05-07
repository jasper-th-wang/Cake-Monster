import React from "react";
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import useScrollLock from '../../hooks/useScrollLock';
import classes from './menuList.module.scss';
import FacebookSVG from '../../assets/svgs/facebook.inline.svg';
import InstaSVG from '../../assets/svgs/instagram.inline.svg';
import WechatSVG from '../../assets/svgs/wechat.inline.svg';
/**
 * modeled after ripeplanet.com and tobiasahlin.com
 */

// item that is an array contains the name of the page and the camel case of it for Link
const menuItems = [['Home', ''], ['Services', 'services'], ['Gallery', 'gallery'], ['About me', 'about-me']];

const contactInfo = {
  phoneNumber: "(778) 828-1826",
  addressLineOne: "129 Esplanade Ave E,",
  addressLineTwo: "North Vancouver, BC V7L, Canada"
}

const variants = {

  parentVariants: {
    hidden: {},
    visible: {
      transition: {
        // type: 'spring',
        // mass: 10,
        // stiffness: 1000,
        // damping: 300,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  },

  divVariants: {
    hidden: {
      opacity: 0,
      translateY: '-1rem',
      transition: {
        // duration: 0.7,
        type: 'spring',
        mass: 1,
        stiffness: 1000,
        damping: 200,
      }
    },
    visible: {
      opacity: 1,
      translateY: '-10rem',
      transition: {
        // translateY: { duration: 2 }
        type: 'spring',
        mass: 5,
        stiffness: 1000,
        damping: 300,
      }
    }
  },

  liVariants: {
    hidden: {
      height: '0rem',
      overflow: 'hidden',
      transition: {
        // duration: 0.7,
        type: 'spring',
        mass: 1,
        stiffness: 1000,
        damping: 200,
      }
    },
    visible: {
      height: '2.6rem',
      overflow: 'visible',
      transition: {
        // duration: 0.7,
        type: 'spring',
        mass: 5,
        stiffness: 1500,
        damping: 300,
      }
    }
  }
}



const MenuList = ({ menuToggled, toggleMenuHandler, closeMenuLocation }) => {

  const scrollLockTarget = useScrollLock(menuToggled);

  return (
    <motion.div
      className={ classes.menuContainer }
      // animate={ menuToggled ? "visible" : "hidden" }
      animate={
        menuToggled ?
          {
            display: 'block'
          } :
          {
            display: 'none',
            transition: {
              delay: 2, // display none after children finish animation ('when' doesn't work for some reason)
            }
          }
      }
    >
      <motion.div
        animate={ menuToggled ?
          {
            clipPath: `circle(200% at ${ closeMenuLocation.x }px ${ closeMenuLocation.y }px)`,
            transition: { duration: .8 }
          } :
          {
            clipPath: `circle(0% at ${ closeMenuLocation.x }px ${ closeMenuLocation.y }px)`,
            transition: { duration: 1.4 }
          } }
        className={ classes.menuBackground }>
      </motion.div>

      <div className={ classes.menuList } ref={ scrollLockTarget }>
        <motion.ul
          variants={ variants.parentVariants }
          initial="hidden"
          animate={ menuToggled ? "visible" : "hidden" }
        >
          { menuItems.map((item, index) => (
            <motion.div key={ index } variants={ variants.divVariants }>
              <motion.li variants={ variants.liVariants }
                onClick={ toggleMenuHandler }>
                <Link to={ `/${ item[1] }` }>
                  { item[0] }
                </Link>
              </motion.li>
            </motion.div>
          )) }
          <motion.div
            variants={ variants.divVariants }
            className={ classes.menuListContact }
          >
            <h3>Social</h3>
            <FacebookSVG />
            <InstaSVG />
            <WechatSVG />
            <h3>Get in Touch!</h3>
            <p>{ contactInfo.phoneNumber }</p>
            <p>
              { contactInfo.addressLineOne }<br />{ contactInfo.addressLineTwo }</p>
          </motion.div>
        </motion.ul>
      </div>
    </motion.div >

  );
}

export default MenuList;
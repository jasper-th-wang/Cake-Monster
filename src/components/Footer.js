import React from 'react';
import classes from './Footer.module.scss';
import FacebookSVG from '../assets/svgs/facebook.inline.svg';
import InstaSVG from '../assets/svgs/instagram.inline.svg';
import WechatSVG from '../assets/svgs/wechat.inline.svg';
import LogoSVG from '../assets/svgs/cakeMonsterLogo-words.inline.svg';


/**
 * modeled after https://preview.themeforest.net/item/cake-dream-responsive-cake-shop-template/full_screen_preview/11290285
 */

const Footer = () => {

  return (
    <footer className={ classes.footer }>
      <div className={ classes.gridWrapper }>
        <LogoSVG className={ classes.logo } />
        <ul className={ classes.social }>
          <FacebookSVG />
          <InstaSVG />
          <WechatSVG />
        </ul>
        <ul className={ classes.getInTouch }>
          <h3>Get in Touch!</h3>
          <p>(778) 828-1826</p>
          <p>129 Esplanade Ave E,<br />North Vancouver, BC V7L, Canada</p>
          <p>© { new Date().getFullYear() } Cake Monster All rights reserved.</p>
        </ul>
        <ul className={ classes.menuList }>
          <li>Home</li>
          <li>Services</li>
          <li>Gallery</li>
          <li>About me</li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer;
import Image from "next/image";
import Link from "next/link";
import logoImage from '@/assets/logo.png';
// The way to import `module.css`
import classes from './main-header.module.css';
import MainHeaderBackground from "./main-header-background";

function MainHeader() {
  return<>
      <MainHeaderBackground />
      <header className={classes.header}>
      <Link className={classes.logo} href="/">
        {/* 
          [IMPORTANT] Unlike React, in NextJS, we need to access to `src` property 
          because this imported logo in NextJS will be an object where the path to the image is then stored
        */}
        {/* 
          By implementing Image from NextJS. We do not need to add `src` into <Image />
          By using <Image />, loading="lazy" is automatically set in an attribute.
          So it shows up only when it is visible in the browser.
          `priority` means this image should show up regardless of lazy loading
        */}
        <Image src={logoImage} alt="A plate with food on it" priority />
        {/* In normal way */}
        {/* <img src={logoImage.src} alt="A plate with food on it" /> */}
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  </> 
}

export default MainHeader;
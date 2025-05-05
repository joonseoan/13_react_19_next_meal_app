// [IMPORTANT]
// It should be placed at the last child component
// to be minimize the client side rendering
// So it will move to `NavLink` component
// 'use client'

import Image from "next/image";
import Link from "next/link";
import logoImage from '@/assets/logo.png';
// The way to import `module.css`
import classes from './main-header.module.css';
import MainHeaderBackground from "./main-header-background";
// import { usePathname } from "next/navigation";
import NavLink from './nav-link';

function MainHeader() {
  // It is a client side tool
  // To minimize the client side rendering
  // It moves to the `NavLink` component
  // const pathname = usePathname();

  return<>
    <MainHeaderBackground />
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        {/* 
          [IMPORTANT] Unlike React, in NextJS, we need to access to `src` property 
          because this imported logo in NextJS will be an object where the path to the image is then stored
        */}
        {/* 
          By implementing `Image` from NextJS, we do not need to add `src` into <Image />
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
            <NavLink href="/meals">
              Browse Meals
            </NavLink>
            {/* <Link href="/meals" className={pathname.startsWith('/meals') ? classes.active : undefined}>Browse Meals</Link> */}
          </li>
          <li>
            <NavLink href="/community">
              Foodies Community
            </NavLink>
            {/* <Link href="/community" className={pathname === '/community' ? classes.active : undefined}>Foodies Community</Link> */}
          </li>
        </ul>
      </nav>
    </header>
  </> 
}

export default MainHeader;
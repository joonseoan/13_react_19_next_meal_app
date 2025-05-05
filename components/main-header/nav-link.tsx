'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from './nav-link.module.css'
import { ReactNode } from "react";

function NavLink({ href, children }: { href: string, children: ReactNode }) {
  const pathname = usePathname();

  return <Link
    href={href} 
    className={
      pathname.startsWith(href) ?
      `${classes.link} ${classes.active}` :
      `${classes.link}`
    }>
    {children}
  </Link>
}

export default NavLink;
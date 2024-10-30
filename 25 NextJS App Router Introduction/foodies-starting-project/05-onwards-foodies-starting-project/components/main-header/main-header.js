import Link from 'next/link';
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import Image from 'next/image';
import MainHeaderBackground from './main-header-background';

import NavLink from './nav-link';

export default function MainHeader() {
  //console.log('Executing');

  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
              {/* <Link
                href="/community"
                className={path === '/community' ? classes.active : undefined}
              >
                Foodies Community
              </Link> */}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

'use client';

import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoStack}>
            <span className={styles.logoScript}>
              Lolly&apos;s
              <span className={styles.logoHeart}>♥</span>
            </span>
            <span className={styles.logoSubtext}>NAIL BAR</span>
          </div>
        </Link>
        
        <nav className={styles.nav}>
          <Link href="/#services" className={styles.navLink}>Services</Link>
          <Link href="/#gallery" className={styles.navLink}>Our Work</Link>
          <Link href="/#artist" className={styles.navLink}>The Artist</Link>
          <Link href="/policies" className={styles.navLink}>Policies</Link>
        </nav>
        
        <a 
          href="https://wa.me/27647432177?text=Hi%2C%20I%27d%20like%20to%20book%20a%20nail%20appointment%20at%20Lolly%27s%20Nail%20Bar."
          target="_blank"
          rel="noopener noreferrer"
          className={styles.bookButton}
        >
          BOOK NOW
        </a>
      </div>
    </header>
  );
}

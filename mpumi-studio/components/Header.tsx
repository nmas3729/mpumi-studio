'use client';

import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoDot}></span>
          <span className={styles.logoText}>MPUMI STUDIO</span>
        </Link>
        
        <nav className={styles.nav}>
          <Link href="#about" className={styles.navLink}>About</Link>
          <Link href="#services" className={styles.navLink}>Services</Link>
          <Link href="#artist" className={styles.navLink}>The Artist</Link>
        </nav>
        
        <a 
          href="https://wa.me/27647432177?text=Hi%2C%20I%27d%20like%20to%20book%20a%20nail%20appointment%20at%20Mpumi%20Studio."
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

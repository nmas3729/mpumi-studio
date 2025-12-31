'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (containerRef.current) {
              gsap.fromTo(
                containerRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
              );
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer ref={footerRef} className={styles.footer}>
      <div ref={containerRef} className={styles.container}>
        <div className={styles.studioName}>MPUMI STUDIO</div>
        <div className={styles.copyright}>
          © 2025 Mpumi Nail Studio. All rights reserved.
        </div>
        <div className={styles.credit}>
          Designed by{' '}
          <a 
            href="https://webcraft.nmas.co.za" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.creditLink}
          >
            NMAS WebCraft
          </a>
        </div>
      </div>
    </footer>
  );
}

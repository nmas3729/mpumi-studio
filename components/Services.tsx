'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '../styles/Services.module.css';

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = gsap.timeline();
            
            if (labelRef.current) {
              tl.fromTo(
                labelRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
              );
            }
            
            if (headlineRef.current) {
              tl.fromTo(
                headlineRef.current,
                { opacity: 0, y: 20, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' },
                '-=0.5'
              );
            }
            
            if (card1Ref.current) {
              tl.fromTo(
                card1Ref.current,
                { opacity: 0, y: 30, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' },
                '-=0.7'
              );
            }
            
            if (card2Ref.current) {
              tl.fromTo(
                card2Ref.current,
                { opacity: 0, y: 30, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' },
                '-=0.7'
              );
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="services" className={styles.services}>
      <div className={styles.container}>
        <div ref={labelRef} className={styles.label}>SERVICES</div>
        <h2 ref={headlineRef} className={styles.headline}>
          Engineered for <span className={styles.emphasis}>Perfection</span>
        </h2>
        
        <div className={styles.cards}>
          <div ref={card1Ref} className={styles.card}>
            <div className={styles.cardGlow}></div>
            <h3 className={styles.cardTitle}>Gel Manicure</h3>
            <p className={styles.cardDescription}>
              Precision cuticle care and strengthening gel overlay for lasting beauty. 
              Focused on natural nail health and longevity.
            </p>
            <div className={styles.cardArrow}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          <div ref={card2Ref} className={styles.card}>
            <div className={styles.cardGlow}></div>
            <h3 className={styles.cardTitle}>Acrylic Sculpt</h3>
            <p className={styles.cardDescription}>
              Durable architectural sculpting with custom shapes and lengths. 
              Tailored to your lifestyle and aesthetic preferences.
            </p>
            <div className={styles.cardArrow}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '../styles/Artist.module.css';

export default function Artist() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const statementRef = useRef<HTMLParagraphElement>(null);
  const indicatorsRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

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
            
            if (statementRef.current) {
              tl.fromTo(
                statementRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
                '-=0.7'
              );
            }
            
            if (indicatorsRef.current) {
              tl.fromTo(
                indicatorsRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
                '-=0.7'
              );
            }
            
            if (cardRef.current) {
              tl.fromTo(
                cardRef.current,
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
    <section ref={sectionRef} id="artist" className={styles.artist}>
      <div className={styles.container}>
        <div ref={labelRef} className={styles.label}>THE ARTIST</div>
        <h2 ref={headlineRef} className={styles.headline}>
          Crafted by <span className={styles.emphasis}>calm hands.</span>
        </h2>
        
        <div className={styles.content}>
          <div className={styles.left}>
            <p ref={statementRef} className={styles.statement}>
              I blend modern trends with everyday comfort, focusing on how your nails feel over time. 
              Long-term freshness, not just appointment-day results.
            </p>
            
            <div ref={indicatorsRef} className={styles.trustIndicators}>
              <div className={styles.indicator}>
                <div className={styles.indicatorNumber}>03+</div>
                <div className={styles.indicatorLabel}>Years Exp</div>
              </div>
              <div className={styles.indicator}>
                <div className={styles.indicatorNumber}>100%</div>
                <div className={styles.indicatorLabel}>Hygiene</div>
              </div>
            </div>
          </div>
          
          <div className={styles.right}>
            <div ref={cardRef} className={styles.artistCard}>
              <div className={styles.cardGlow}></div>
              <span className={styles.artistDot}></span>
              <div className={styles.artistName}>Mpumi</div>
              <div className={styles.artistTitle}>Lead Technician</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

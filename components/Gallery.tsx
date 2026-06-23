'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import styles from '../styles/Gallery.module.css';

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = gsap.timeline();
            
            if (titleRef.current) {
              tl.fromTo(
                titleRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
              );
            }
            
            if (imagesRef.current.length > 0) {
              tl.fromTo(
                imagesRef.current,
                { opacity: 0, scale: 0.95, y: 30 },
                { opacity: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' },
                '-=0.4'
              );
            }
            
            observer.unobserve(entry.target);
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
    <section ref={sectionRef} id="gallery" className={styles.gallery}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.heartTop}>♡</div>
          <h2 ref={titleRef} className={styles.title}>OUR WORK</h2>
          <div className={styles.subtitleContainer}>
            <span className={styles.line}></span>
            <span className={styles.heartSmall}>♡</span>
            <span className={styles.line}></span>
          </div>
        </div>

        <div className={styles.grid}>
          <div 
            className={styles.imageWrapper}
            ref={(el) => { imagesRef.current[0] = el; }}
          >
            <Image
              src="/nails1.png"
              alt="Beautiful nails done at Lolly's Nail Bar"
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div 
            className={styles.imageWrapper}
            ref={(el) => { imagesRef.current[1] = el; }}
          >
            <Image
              src="/nails2.png"
              alt="Custom nails done at Lolly's Nail Bar"
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        
        <div className={styles.ctaContainer}>
          <p className={styles.tagline}>Ready for your perfect nail day?</p>
          <a href="https://wa.me/27647432177?text=Hi%2C%20I%27d%20like%20to%20book%20a%20nail%20appointment%20at%20Lolly%27s%20Nail%20Bar." target="_blank" rel="noopener noreferrer" className={styles.bookButton}>BOOK AN APPOINTMENT</a>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textEl = textRef.current;
    const imageEl = imageRef.current;
    const particlesEl = particlesRef.current;

    if (textEl && imageEl) {
      gsap.fromTo(
        textEl,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out' }
      );

      gsap.fromTo(
        imageEl,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, delay: 0.2, ease: 'power3.out' }
      );
    }

    if (particlesEl) {
      gsap.to(particlesEl, {
        opacity: 0.3,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    }
  }, []);

  return (
    <section className={styles.hero}>
      <div ref={particlesRef} className={styles.particles}></div>
      <div className={styles.container}>
        <div ref={textRef} className={styles.content}>
          
          <div className={styles.pillContainer}>
            <span className={styles.sparkle}>✦</span>
            <div className={styles.pillLabel}>OPENING SPECIAL</div>
            <span className={styles.sparkle}>✦</span>
          </div>
          
          <h1 className={styles.headline}>
            <span className={styles.scriptText}>bring your</span>
            <span className={styles.bestieText}>BESTIE</span>
          </h1>
          
          <div className={styles.priceContainer}>
            <span className={styles.forText}>FOR</span>
            <span className={styles.price}>R350</span>
            <span className={styles.heartIcon}>♥</span>
          </div>
          
          <div className={styles.taglineContainer}>
            <div className={styles.taglineLine}></div>
            <div className={styles.tagline}>
              YOU + YOUR BESTIE = PERFECT NAIL DAY ♥
            </div>
            <div className={styles.taglineLine}></div>
          </div>
          
          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>♡</span> 
              <span className={styles.featureText}>BEAUTIFUL NAILS</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>✧</span> 
              <span className={styles.featureText}>GOOD VIBES</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>♡♡</span> 
              <span className={styles.featureText}>BESTIE TIME</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>💅🏽</span> 
              <span className={styles.featureText}>DONE TOGETHER</span>
            </div>
          </div>
          
        </div>
        
        <div ref={imageRef} className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageGlow}></div>
            <Image
              src="/mpumi.webp"
              alt="Lolly's Nail Bar studio interior"
              width={600}
              height={800}
              className={styles.image}
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 600px"
              quality={85}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

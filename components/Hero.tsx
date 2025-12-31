'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textEl = textRef.current;
    const imageEl = imageRef.current;

    if (textEl && imageEl) {
      gsap.fromTo(
        textEl,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );

      gsap.fromTo(
        imageEl,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div ref={textRef} className={styles.content}>
          <h1 className={styles.headline}>
            Nails that feel{' '}
            <span className={styles.emphasis}>like you.</span>
          </h1>
          <p className={styles.description}>
            A futuristic approach to nail health and artistry. Custom designs reflecting your mood, style, and everyday energy.
          </p>
        </div>
        
        <div ref={imageRef} className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="/mpumi.png"
              alt="MPUMI Studio interior"
              width={600}
              height={800}
              className={styles.image}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

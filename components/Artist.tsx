'use client';

import Image from 'next/image';
import styles from '../styles/Artist.module.css';

export default function Artist() {
  return (
    <section id="artist" className={styles.artist}>
      <div className={styles.container}>
        <div className={styles.label}>THE ARTIST</div>
        <h2 className={styles.headline}>
          Crafted by <span className={styles.emphasis}>calm hands.</span>
        </h2>
        
        <div className={styles.content}>
          <div className={styles.left}>
            <p className={styles.statement}>
              I blend modern trends with everyday comfort, focusing on how your nails feel over time. 
              Long-term freshness, not just appointment-day results.
            </p>
            
            <div className={styles.trustIndicators}>
              <div className={styles.indicator}>
                <div className={styles.indicatorNumber}>05+</div>
                <div className={styles.indicatorLabel}>Years Exp</div>
              </div>
              <div className={styles.indicator}>
                <div className={styles.indicatorNumber}>100%</div>
                <div className={styles.indicatorLabel}>Hygiene</div>
              </div>
            </div>
          </div>
          
          <div className={styles.right}>
            <div className={styles.artistCard}>
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

'use client';

import styles from '../styles/Services.module.css';

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.label}>SERVICES</div>
        <h2 className={styles.headline}>
          Engineered for <span className={styles.emphasis}>Perfection</span>
        </h2>
        
        <div className={styles.cards}>
          <div className={styles.card}>
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
          
          <div className={styles.card}>
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

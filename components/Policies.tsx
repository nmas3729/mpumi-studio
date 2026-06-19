'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '../styles/Policies.module.css';

const policies = [
  {
    id: 1,
    title: 'CANCELLATIONS',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
      </svg>
    ),
    content: (
      <>
        <p>Please provide at least <strong>24 HOURS</strong> notice if you need to cancel.</p>
        <p>Deposits are <strong>NON-REFUNDABLE</strong> for same-day cancellations or no-shows.</p>
      </>
    )
  },
  {
    id: 2,
    title: 'LATE POLICY',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
    content: (
      <>
        <p>A <strong>10 minute</strong> grace period is allowed.</p>
        <p>After 10 minutes, your appointment may be rescheduled and your deposit will be lost.</p>
      </>
    )
  },
  {
    id: 3,
    title: 'NO CHILDREN ALLOWED',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    content: (
      <>
        <p><strong>No children allowed.</strong></p>
        <p>Only a minimum of two adults are allowed.</p>
      </>
    )
  },
  {
    id: 4,
    title: 'RESCHEDULING',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
        <path d="M8 14h.01"></path>
        <path d="M12 14h.01"></path>
        <path d="M16 14h.01"></path>
        <path d="M8 18h.01"></path>
        <path d="M12 18h.01"></path>
        <path d="M16 18h.01"></path>
      </svg>
    ),
    content: (
      <>
        <p>You may reschedule up to <strong>24 HOURS</strong> in advance based on availability.</p>
        <p>Rescheduling with less than 24 hours' notice will result in deposit being forfeited.</p>
      </>
    )
  },
  {
    id: 5,
    title: 'PAYMENT',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
        <line x1="1" y1="10" x2="23" y2="10"></line>
      </svg>
    ),
    content: (
      <>
        <p>I accept <strong>EFT payments only</strong>.</p>
        <p>No other payments accepted.</p>
      </>
    )
  },
  {
    id: 6,
    title: 'NAIL REPAIR POLICY',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
    content: (
      <>
        <p>I offer a <strong>3 DAY</strong> repair policy on lifting, popping, or breaking.</p>
        <p>Damage due to misuse is not covered.</p>
      </>
    )
  },
  {
    id: 7,
    title: 'AFTERCARE',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ),
    content: (
      <>
        <p>Proper aftercare is essential to the longevity of your nails.</p>
        <p>I am not responsible for lifting or damage due to improper care or product use.</p>
      </>
    )
  },
  {
    id: 8,
    title: 'RESPECT',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    ),
    content: (
      <>
        <p>I strive to provide the best experience for every client.</p>
        <p>Please be kind and respectful. Any disrespectful behavior will not be tolerated.</p>
      </>
    )
  }
];

export default function Policies() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              cardsRef.current,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
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
    <section ref={sectionRef} id="policies" className={styles.policies}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.heartTop}>♡</div>
          <h2 className={styles.title}>POLICIES</h2>
          <div className={styles.subtitleContainer}>
            <span className={styles.line}></span>
            <span className={styles.heartSmall}>♡</span>
            <span className={styles.line}></span>
          </div>
          <p className={styles.readFirst}>PLEASE READ BEFORE BOOKING YOUR APPOINTMENT</p>
          <div className={styles.thankYouBanner}>
            <span className={styles.thankYouScript}>Thank you for respecting my time and my business!</span>
            <span className={styles.heartSolid}>♥</span>
          </div>
        </div>

        <div className={styles.grid}>
          {policies.map((policy, index) => (
            <div 
              key={policy.id} 
              className={styles.card}
              ref={(el) => { cardsRef.current[index] = el; }}
            >
              <div className={styles.iconWrapper}>
                {policy.icon}
              </div>
              <h3 className={styles.cardTitle}>
                {policy.id}. {policy.title}
              </h3>
              <div className={styles.cardHeart}>♡</div>
              <div className={styles.cardContent}>
                {policy.content}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <div className={styles.footerScript}>
            <span className={styles.star}>✦</span>
            thank you <span className={styles.heartFooter}>♡</span>
            <span className={styles.star}>✦</span>
          </div>
          <p className={styles.appreciate}>I APPRECIATE YOUR SUPPORT</p>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from '../styles/FAQ.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'How do I book an appointment?',
    answer: 'You can book via WhatsApp by clicking the link or button on our site. We\'ll confirm your appointment time and discuss your nail care needs.'
  },
  {
    question: 'What services do you offer?',
    answer: 'We specialize in Gel Manicures and Acrylic Sculpt services, both focused on nail health, precision, and long-lasting results tailored to your style.'
  },
  {
    question: 'How long does a typical appointment take?',
    answer: 'Appointment duration varies based on the service. Gel Manicures typically take 60-90 minutes, while Acrylic Sculpt appointments can take 90-120 minutes for a complete set.'
  },
  {
    question: 'Do you use hygienic practices?',
    answer: 'Absolutely. We maintain 100% hygiene standards with sterilized tools, single-use files, and a clean, sanitized workspace for every client.'
  },
  {
    question: 'Can I customize my nail design?',
    answer: 'Yes! We create custom designs that reflect your mood, style, and everyday energy. During your appointment, we\'ll discuss options that complement your lifestyle.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        const answerEl = ref.firstElementChild as HTMLElement;
        if (answerEl) {
          if (openIndex === index) {
            const height = answerEl.scrollHeight;
            gsap.fromTo(
              ref,
              { height: 0, opacity: 0 },
              { height: height, opacity: 1, duration: 1, ease: 'power3.out' }
            );
          } else {
            gsap.to(ref, {
              height: 0,
              opacity: 0,
              duration: 0.8,
              ease: 'power3.out'
            });
          }
        }
      }
    });
  }, [openIndex]);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.label}>FAQ</div>
        <h2 className={styles.headline}>
          Questions & <span className={styles.emphasis}>Answers</span>
        </h2>
        
        <div className={styles.accordion}>
          {faqData.map((item, index) => (
            <div key={index} className={styles.item}>
              <button
                className={styles.question}
                onClick={() => toggleItem(index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <span className={`${styles.icon} ${openIndex === index ? styles.iconOpen : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              <div
                ref={(el) => {
                  contentRefs.current[index] = el;
                }}
                className={styles.answerWrapper}
                style={{ overflow: 'hidden', height: 0 }}
              >
                <div className={styles.answer}>
                  {item.answer}
                  {index === 0 && (
                    <> You can <a 
                      href="https://wa.me/27647432177?text=Hi%2C%20I%27d%20like%20to%20book%20a%20nail%20appointment%20at%20Mpumi%20Studio."
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.whatsappLink}
                    >book via WhatsApp</a>.</>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

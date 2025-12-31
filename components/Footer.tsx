import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
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

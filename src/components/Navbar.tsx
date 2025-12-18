import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          Fahad <span>Technologies</span>
        </Link>
        
        <ul className={styles.navLinks}>
          <li>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/services/cctv" className={styles.navLink}>
              CCTV Systems
            </Link>
          </li>
          <li>
            <Link href="/services/networking" className={styles.navLink}>
              Networking
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.ctaButton}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

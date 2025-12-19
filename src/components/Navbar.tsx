"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          Fahad <span>Technologies</span>
        </Link>

        <button
          className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          <li>
            <Link href="/" className={styles.navLink} onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/services/cctv" className={styles.navLink} onClick={() => setIsOpen(false)}>
              CCTV Systems
            </Link>
          </li>
          <li>
            <Link href="/services/networking" className={styles.navLink} onClick={() => setIsOpen(false)}>
              Networking
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.ctaButton} onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

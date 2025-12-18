import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h3>Fahad Technologies</h3>
                    <p>
                        Your trusted partner for advanced surveillance systems and robust network infrastructure. Ensuring security and connectivity for your business.
                    </p>
                </div>

                <div className={styles.column}>
                    <h3>Our Services</h3>
                    <ul>
                        <li>
                            <Link href="/services/cctv" className={styles.link}>
                                CCTV Surveillance
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/networking" className={styles.link}>
                                Network Equipment
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/installation" className={styles.link}>
                                Professional Installation
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Contact Us</h3>
                    <ul>
                        <li>
                            <span className={styles.link}>123 Tech Street, Digital City</span>
                        </li>
                        <li>
                            <a href="tel:+1234567890" className={styles.link}>+1 (234) 567-890</a>
                        </li>
                        <li>
                            <a href="mailto:info@fahadtech.com" className={styles.link}>info@fahadtech.com</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} Fahad Technologies. All rights reserved.
            </div>
        </footer>
    );
}

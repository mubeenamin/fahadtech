import Link from 'next/link';
import styles from "../services.module.css";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "CCTV Systems | Fahad Technologies",
    description: "Advanced CCTV surveillance sales and installation.",
};

export default function CctvPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>CCTV Surveillance Systems</h1>
            <p className={styles.lead}>
                Protect your property with high-definition security cameras and intelligent monitoring solutions.
            </p>

            <section className={styles.section}>
                <h2>Comprehensive Security Solutions</h2>
                <p>
                    At Fahad Technologies, we understand that security is paramount. We offer a wide range of CCTV systems tailored to meet the specific needs of your business or home. Whether you need a single camera for your front door or a complex multi-site system with remote access, we have the expertise to deliver.
                </p>
            </section>

            <section className={styles.section}>
                <h2>Our Services Include</h2>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <span className={styles.check}>✓</span>
                        <div>
                            <strong>IP Camera Systems</strong>
                            <p>High-resolution digital cameras with crystal clear quality.</p>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <span className={styles.check}>✓</span>
                        <div>
                            <strong>Wireless CCTV</strong>
                            <p>Flexible installation options without the mess of wires.</p>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <span className={styles.check}>✓</span>
                        <div>
                            <strong>Remote Monitoring</strong>
                            <p>View your feed from anywhere on your smartphone or PC.</p>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <span className={styles.check}>✓</span>
                        <div>
                            <strong>Night Vision & Motion Detection</strong>
                            <p>24/7 protection with advanced sensing technology.</p>
                        </div>
                    </li>
                </ul>
            </section>

            <section className={styles.section}>
                <h2>Why Invest in CCTV?</h2>
                <p>
                    A visible surveillance system drastically reduces the risk of theft and vandalism. Moreover, it provides valuable evidence in the event of an incident and helps you monitor operations for safety and efficiency.
                </p>
            </section>

            <div className={styles.cta}>
                <h3>Ready to Secure Your Premises?</h3>
                <p>Contact us today for a free site assessment and quote.</p>
                <Link href="/contact" className={styles.button}>
                    Get a Quote
                </Link>
            </div>
        </div>
    );
}

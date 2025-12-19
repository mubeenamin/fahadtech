import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import styles from "../services.module.css";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "CCTV Systems | Fahad Technologies",
    description: "Advanced CCTV surveillance sales and installation.",
};



export default function CctvPage() {
    return (
        <div>
            <PageHeader
                title="Advanced Visual Surveillance & Security Intelligence"
                subtitle="Safeguard your assets with enterprise-grade imaging technology and AI-driven monitoring ecosystems."
                backgroundImage="/hero-slider/cctv.png"
            />
            <div className={styles.container}>

                <section className={styles.section}>
                    <h2>Strategic Asset Protection</h2>
                    <p>
                        At Fahad Technologies, we recognize that robust security is a critical operational asset. We engineer bespoke surveillance architectures tailored to the unique risk profiles of your enterprise or residence. From perimeter defense to internal audit trails, our solutions provide high-fidelity situational awareness.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Technical Capabilities</h2>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <span className={styles.check}>✓</span>
                            <div>
                                <strong>Enterprise IP Ecosystems</strong>
                                <p>4K/8K resolution imaging with superior proprietary low-light sensors.</p>
                            </div>
                        </li>
                        <li className={styles.listItem}>
                            <span className={styles.check}>✓</span>
                            <div>
                                <strong>Intelligent Analytics</strong>
                                <p>AI-powered detection for perimeter breach, facial recognition, and license plate reading (LPR).</p>
                            </div>
                        </li>
                        <li className={styles.listItem}>
                            <span className={styles.check}>✓</span>
                            <div>
                                <strong>Remote Command & Control</strong>
                                <p>Secure, encrypted remote access ensuring 24/7 oversight from any global location.</p>
                            </div>
                        </li>
                        <li className={styles.listItem}>
                            <span className={styles.check}>✓</span>
                            <div>
                                <strong>Wireless & Hybrid Topologies</strong>
                                <p>High-throughput wireless bridges for extended range secure transmission.</p>
                            </div>
                        </li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>Operational Value</h2>
                    <p>
                        Beyond deterrence, modern surveillance serves as a powerful tool for operational optimization, liability management, and forensic clarity. Ensure business continuity and mitigate risk with verifiable, high-definition visual data.
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
        </div>
    );
}

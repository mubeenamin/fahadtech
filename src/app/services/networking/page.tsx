import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import styles from "../services.module.css";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Networking Services | Fahad Technologies",
    description: "Professional networking equipment sales and installation.",
};



export default function NetworkingPage() {
    return (
        <div>
            <PageHeader
                title="Enterprise Network Infrastructure & Architecture"
                subtitle="Engineered connectivity solutions for mission-critical data transport and high-availability operations."
                backgroundImage="/hero-slider/networking.png"
            />
            <div className={styles.container}>

                <section className={styles.section}>
                    <h2>High-Performance Data Environments</h2>
                    <p>
                        In an era defined by digital velocity, your network infrastructure dictates your operational tempo. Fahad Technologies delivers carrier-grade networking solutions, designed for resilience, scalability, and zero-latency performance. We build the digital highways that drive modern commerce.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>Infrastructure Services</h2>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <span className={styles.check}>✓</span>
                            <div>
                                <strong>Structured Cabling Standards</strong>
                                <p>Certified CAT6/CAT7 and Fiber Optic backbones compliant with TIA/EIA standards.</p>
                            </div>
                        </li>
                        <li className={styles.listItem}>
                            <span className={styles.check}>✓</span>
                            <div>
                                <strong>Core Switching & Routing</strong>
                                <p>Deployment of managed enterprise switching fabrics and edge routing for optimized traffic shaping.</p>
                            </div>
                        </li>
                        <li className={styles.listItem}>
                            <span className={styles.check}>✓</span>
                            <div>
                                <strong>High-Density Wireless</strong>
                                <p>Enterprise Wi-Fi 6/6E deployment for saturated environments and seamless roaming.</p>
                            </div>
                        </li>
                        <li className={styles.listItem}>
                            <span className={styles.check}>✓</span>
                            <div>
                                <strong>Data Center Trends</strong>
                                <p>Precision server rack management, thermal optimization, and cable grooming.</p>
                            </div>
                        </li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>Operational Efficiency</h2>
                    <p>
                        Eliminate bottlenecks and ensure unwavering uptime. Our professionally commissioned networks utilize advanced load balancing and redundancy protocols to maintain peak throughput, ensuring your team remains connected and productive without interruption.
                    </p>
                </section>

                <div className={styles.cta}>
                    <h3>Upgrade Your Network Today</h3>
                    <p>Let's discuss your infrastructure needs.</p>
                    <Link href="/contact" className={styles.button}>
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
}

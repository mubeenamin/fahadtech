import Link from 'next/link';
import styles from "../services.module.css";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Networking Services | Fahad Technologies",
    description: "Professional networking equipment sales and installation.",
};

export default function NetworkingPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Network Equipment & Installation</h1>
            <p className={styles.lead}>
                Build a reliable, high-speed network infrastructure that powers your business operations.
            </p>

            <section className={styles.section}>
                <h2>Robust Connectivity Solutions</h2>
                <p>
                    In the digital age, a fast and stable network is the backbone of any organization. Fahad Technologies specializes in the supply and installation of top-tier networking equipment. We design networks that are scalable, secure, and built to handle the demands of modern data traffic.
                </p>
            </section>

            <section className={styles.section}>
                <h2>Our Networking Capabilities</h2>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <span className={styles.check}>✓</span>
                        <div>
                            <strong>Structured Cabling</strong>
                            <p>CAT6/CAT6A and Fiber Optic cabling services.</p>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <span className={styles.check}>✓</span>
                        <div>
                            <strong>Routers & Switches</strong>
                            <p>Installation and configuration of enterprise-grade hardware.</p>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <span className={styles.check}>✓</span>
                        <div>
                            <strong>Wi-Fi Solutions</strong>
                            <p>Access point deployment for seamless wireless coverage.</p>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <span className={styles.check}>✓</span>
                        <div>
                            <strong>Server Rack Management</strong>
                            <p>Clean and organized server room setups.</p>
                        </div>
                    </li>
                </ul>
            </section>

            <section className={styles.section}>
                <h2>Maximize Productivity</h2>
                <p>
                    Don't let slow internet or network downtime hold you back. Our professional installation ensures that your network operates at peak performance, minimizing latency and maximizing throughput for all your devices.
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
    );
}

import styles from './contact.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Us | Fahad Technologies",
    description: "Get in touch for CCTV and Networking inquiries.",
};

export default function ContactPage() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Contact Us</h1>
                <p className={styles.subtitle}>
                    Have a project in mind? We'd love to hear from you.
                </p>
            </div>

            <div className={styles.infoSection}>
                <div className={styles.infoCard}>
                    <div className={styles.infoTitle}>Phone</div>
                    <div className={styles.infoText}>+1 (234) 567-890</div>
                </div>
                <div className={styles.infoCard}>
                    <div className={styles.infoTitle}>Email</div>
                    <div className={styles.infoText}>info@fahadtech.com</div>
                </div>
                <div className={styles.infoCard}>
                    <div className={styles.infoTitle}>Location</div>
                    <div className={styles.infoText}>Tech City, Digital State</div>
                </div>
            </div>

            <div className={styles.grid}>
                <div className={styles.formCard}>
                    <form>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Name</label>
                            <input type="text" id="name" name="name" className={styles.input} required />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input type="email" id="email" name="email" className={styles.input} required />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="phone" className={styles.label}>Phone Number</label>
                            <input type="tel" id="phone" name="phone" className={styles.input} />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="service" className={styles.label}>Interested Service</label>
                            <select id="service" name="service" className={styles.input}>
                                <option value="cctv">CCTV Surveillance</option>
                                <option value="networking">Networking Equipment</option>
                                <option value="both">Both</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Message</label>
                            <textarea id="message" name="message" className={styles.textarea} required></textarea>
                        </div>

                        <button type="submit" className={styles.submitButton}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

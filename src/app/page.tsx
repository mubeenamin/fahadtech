import Link from 'next/link';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>
            Secure Your Assets.<br />
            Connect Your World.
          </h1>
          <p className={styles.heroSubtitle}>
            Fahad Technologies provides state-of-the-art CCTV surveillance systems and robust networking solutions tailored for your business and home.
          </p>
          <div className={styles.ctaContainer}>
            <Link href="/services/cctv" className={styles.primaryButton}>
              Explore CCTV Solutions
            </Link>
            <Link href="/contact" className={styles.secondaryButton}>
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Core Services</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>📹</div>
            <h3 className={styles.cardTitle}>Surveillance Systems</h3>
            <p className={styles.cardText}>
              Comprehensive CCTV sales and installation services. From IP cameras to advanced analytics, we ensure complete coverage and peace of mind.
            </p>
            <Link href="/services/cctv" className={styles.cardLink}>
              Learn more &rarr;
            </Link>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>🌐</div>
            <h3 className={styles.cardTitle}>Network Equipment</h3>
            <p className={styles.cardText}>
              High-performance networking gear including routers, switches, and structured cabling. We design and install networks that don't fail.
            </p>
            <Link href="/services/networking" className={styles.cardLink}>
              Learn more &rarr;
            </Link>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>🛠️</div>
            <h3 className={styles.cardTitle}>Professional Installation</h3>
            <p className={styles.cardText}>
              Our certified technicians ensure every device is installed correctly and configured for optimal performance and longevity.
            </p>
            <Link href="/contact" className={styles.cardLink}>
              Contact Us &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <h2 className={styles.sectionTitle}>Why Choose Fahad Technologies?</h2>
        <div className={styles.grid}>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>✓</div>
            <h3>Expert Technicians</h3>
            <p>Our team is fully trained and experienced in the latest security and networking standards.</p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>⚡</div>
            <h3>Latest Technology</h3>
            <p>We supply only the most reliable and advanced equipment from top-tier manufacturers.</p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>🤝</div>
            <h3>Dedicated Support</h3>
            <p>We don't just sell; we support. Reliable after-sales service and maintenance contracts.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

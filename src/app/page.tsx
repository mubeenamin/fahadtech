import Link from 'next/link';
import styles from "./page.module.css";
import HeroSlider from "@/components/HeroSlider";
import BrandMarquee from "@/components/BrandMarquee";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSlider />

      <section className={styles.section}>
        <h2 className={`${styles.sectionTitle} animate-on-scroll fade-in-up`}>Our Core Services</h2>
        <div className={styles.grid}>
          <div className={`${styles.card} animate-on-scroll fade-in-up delay-100`}>
            <div className={styles.cardIcon}>📹</div>
            <h3 className={styles.cardTitle}>Surveillance Systems</h3>
            <p className={styles.cardText}>
              Comprehensive CCTV sales and installation services. From IP cameras to advanced analytics, we ensure complete coverage and peace of mind.
            </p>
            <Link href="/services/cctv" className={styles.cardLink}>
              Learn more &rarr;
            </Link>
          </div>
          <div className={`${styles.card} animate-on-scroll fade-in-up delay-200`}>
            <div className={styles.cardIcon}>🌐</div>
            <h3 className={styles.cardTitle}>Network Equipment</h3>
            <p className={styles.cardText}>
              High-performance networking gear including routers, switches, and structured cabling. We design and install networks that don't fail.
            </p>
            <Link href="/services/networking" className={styles.cardLink}>
              Learn more &rarr;
            </Link>
          </div>
          <div className={`${styles.card} animate-on-scroll fade-in-up delay-300`}>
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
        <h2 className={`${styles.sectionTitle} animate-on-scroll fade-in-up`}>Why Choose Fahad Technologies?</h2>
        <div className={styles.grid}>
          <div className={`${styles.featureItem} animate-on-scroll scale-in delay-100`}>
            <div className={styles.featureIcon}>✓</div>
            <h3>Expert Technicians</h3>
            <p>Our team is fully trained and experienced in the latest security and networking standards.</p>
          </div>
          <div className={`${styles.featureItem} animate-on-scroll scale-in delay-200`}>
            <div className={styles.featureIcon}>⚡</div>
            <h3>Latest Technology</h3>
            <p>We supply only the most reliable and advanced equipment from top-tier manufacturers.</p>
          </div>
          <div className={`${styles.featureItem} animate-on-scroll scale-in delay-300`}>
            <div className={styles.featureIcon}>🤝</div>
            <h3>Dedicated Support</h3>
            <p>We don't just sell; we support. Reliable after-sales service and maintenance contracts.</p>
          </div>
        </div>
      </section>

      <div className="animate-on-scroll fade-in-up delay-200">
        <BrandMarquee />
      </div>
    </div>
  );
}

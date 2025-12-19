import Image from 'next/image';
import styles from './BrandMarquee.module.css';

const brands = [
    { name: "Cisco", logo: "/brands/cisco.png" },
    { name: "Hikvision", logo: "/brands/hikvision_new.png" },
    { name: "Dahua", logo: "/brands/dahua_new.png" },
    { name: "TP-Link", logo: "/brands/tplink_new.png" },
    { name: "Tenda", logo: "/brands/tenda.png" },
];

export default function BrandMarquee() {
    // Duplicate the array multiple times to ensure seamless scrolling
    const seamlessBrands = [...brands, ...brands, ...brands, ...brands, ...brands, ...brands, ...brands, ...brands];

    return (
        <section className={styles.marqueeContainer}>
            <h3 className={styles.title}>Trusted & Partnered Brands</h3>
            <div className={styles.track}>
                {seamlessBrands.map((brand, index) => (
                    <div
                        key={`${brand.name}-${index}`}
                        className={styles.brandCard}
                        title={brand.name}
                    >
                        <Image
                            src={brand.logo}
                            alt={`${brand.name} logo`}
                            width={100}
                            height={100}
                            className={styles.logoImage}
                            unoptimized
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

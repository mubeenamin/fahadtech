"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './HeroSlider.module.css';

const slides = [
    {
        id: 1,
        title: "Advanced Visual Surveillance",
        subtitle: "Safeguard your assets with enterprise-grade imaging technology and AI-driven monitoring ecosystems.",
        image: "/hero-slider/cctv.png",
        link: "/services/cctv",
        cta: "Explore Systems"
    },
    {
        id: 2,
        title: "Enterprise Network Infrastructure",
        subtitle: "Engineered connectivity solutions for mission-critical data transport and high-availability operations.",
        image: "/hero-slider/networking.png",
        link: "/services/networking",
        cta: "View Solutions"
    }
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className={styles.sliderContainer}>
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className={styles.overlay}></div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{slide.title}</h1>
                        <p className={styles.subtitle}>{slide.subtitle}</p>
                        <Link href={slide.link} className={styles.ctaButton}>
                            {slide.cta}
                        </Link>
                    </div>
                </div>
            ))}

            <div className={styles.indicators}>
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}

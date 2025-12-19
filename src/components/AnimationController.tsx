"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AnimationController() {
    const pathname = usePathname();

    useEffect(() => {
        // Small timeout to ensure DOM is ready after route change
        const timer = setTimeout(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                            observer.unobserve(entry.target);
                        }
                    });
                },
                {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px',
                }
            );

            const targets = document.querySelectorAll('.animate-on-scroll');
            targets.forEach((target) => observer.observe(target));

            return () => observer.disconnect();
        }, 100);

        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
}

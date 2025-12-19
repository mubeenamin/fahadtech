"use client";

import styles from './PageHeader.module.css';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    backgroundImage: string;
}

export default function PageHeader({ title, subtitle, backgroundImage }: PageHeaderProps) {
    return (
        <div
            className={styles.headerContainer}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>
        </div>
    );
}

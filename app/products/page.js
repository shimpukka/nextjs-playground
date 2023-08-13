import Link from 'next/link';
import React from 'react';
import styles from '../page.module.css';

export default function About() {
    return (
        <div className={styles.main}>
            <h1>
                Products page
            </h1>
            <Link href='/products/greentea'>
                Green tea
            </Link>
            <Link href='/products/coffee'>
                Coffee
            </Link>
        </div>
    )
}
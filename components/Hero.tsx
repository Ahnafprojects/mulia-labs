import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroBackground}></div>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    <span className={styles.gradientText}>Turning Ideas into</span> <br />
                    <span className={styles.highlight}>Digital Reality.</span>
                </h1>
                <p className={styles.subtitle}>
                    Mulia Labs is a premium creative agency dedicated to crafting
                    stunning websites and digital experiences that captivate and convert.
                </p>
                <div className={styles.actions}>
                    <Link href="#work" className={styles.primaryBtn}>
                        View Our Work
                    </Link>
                    <Link href="#contact" className={styles.secondaryBtn}>
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}

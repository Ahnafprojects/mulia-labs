import styles from './Services.module.css';

const services = [
    {
        title: 'Web Development',
        desc: 'High-performance websites built with modern technologies like Next.js and React.',
        icon: '💻',
    },
    {
        title: 'UI/UX Design',
        desc: 'User-centric design that blends aesthetics with functionality for optimal experience.',
        icon: '🎨',
    },
    {
        title: 'Brand Strategy',
        desc: 'Defining your unique voice and visual identity to stand out in a crowded market.',
        icon: '🚀',
    },
    {
        title: 'SEO & Optimization',
        desc: 'Technical SEO and performance tuning to ensure you rank high and load fast.',
        icon: '📈',
    },
];

export default function Services() {
    return (
        <section id="services" className={styles.services}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Our Expertise</h2>
                    <p className={styles.subtitle}>
                        We combine creativity with technical excellence to deliver results.
                    </p>
                </div>
                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <span className={styles.cardIcon}>{service.icon}</span>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDesc}>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

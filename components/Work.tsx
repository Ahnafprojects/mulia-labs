import Link from 'next/link';
import styles from './Work.module.css';

const projects = [
    {
        title: 'Neon Fintech Portal',
        category: 'Web Development',
        color: '#2563eb', // Fallback/Placeholder
    },
    {
        title: 'Orbit Commerce',
        category: 'E-commerce & Branding',
        color: '#7c3aed',
    },
    {
        title: 'Zenith Architecture',
        category: 'Portfolio Site',
        color: '#059669',
    },
    {
        title: 'Flow SaaS Dashboard',
        category: 'UI/UX Design',
        color: '#db2777',
    },
];

export default function Work() {
    return (
        <section id="work" className={styles.work}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Selected Work</h2>
                    <Link href="/work" className={styles.viewAll}>
                        View All Projects <span>&rarr;</span>
                    </Link>
                </div>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.projectCard}>
                            <div
                                className={styles.projectImage}
                                style={{
                                    backgroundColor: project.color,
                                    // Gradients to make it look cool without images
                                    backgroundImage: `linear-gradient(45deg, ${project.color}, #111)`
                                }}
                            ></div>
                            <div className={styles.overlay}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <span className={styles.projectCategory}>{project.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={styles.contact}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.title}>Let's Build Something Amazing.</h2>
                <p className={styles.subtitle}>
                    Have a project in mind? We'd love to hear about it.
                </p>

                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name" className={styles.label}>Name</label>
                        <input type="text" id="name" className={styles.input} placeholder="John Doe" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input type="email" id="email" className={styles.input} placeholder="john@example.com" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="message" className={styles.label}>Message</label>
                        <textarea id="message" className={styles.textarea} placeholder="Tell us about your project..."></textarea>
                    </div>
                    <button type="submit" className={styles.submitBtn}>Send Message</button>
                </form>
            </div>
        </section>
    );
}

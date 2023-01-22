import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
                <span>Rlalab.</span>
                <p>Rodrigo Ledesma Amaro</p>
                <p><a href="http://maps.google.com/?q=Royal+School+of+Mines+London">Imperial College London, Royal School of Mines, South Kensington Campus, London SW7 2AZ</a></p>
                <p>+44 20 7589 4113</p>
            </div>
            <div className={styles.mapContainer}>
            </div>
        </footer>
    )
}

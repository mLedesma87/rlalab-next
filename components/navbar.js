import Link from 'next/link';
import styles from '../styles/Navbar.module.css'
import {useState} from "react";

export default function Navbar() {

    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <nav>
            <ul className={styles.menu}>
                <li><Link onClick={() => setSelectedIndex(0)} className={selectedIndex === 0 ? styles.active : ''} href="/">Home</Link></li>
                <li><Link onClick={() => setSelectedIndex(1)} className={selectedIndex === 1 ? styles.active : ''} href="/research">Research lines</Link></li>
                <li><Link onClick={() => setSelectedIndex(2)} className={selectedIndex === 2 ? styles.active : ''} href="/publications">Publications</Link></li>
                <li><Link onClick={() => setSelectedIndex(3)} className={selectedIndex === 3 ? styles.active : ''} href="/team">Team</Link></li>
                <li><Link onClick={() => setSelectedIndex(4)} className={selectedIndex === 4 ? styles.active : ''} href="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

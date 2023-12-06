import styles from '../styles/Publications.module.css';
import {useEffect, useState} from "react";


export default function Publications() {
    const [publications, setPublications] = useState([]);
    useEffect(() => {
        (async () => {
            const response = await fetch('/publications_1.json');
            const publicationsJSON = await response.json();
            const {response: {results}} = publicationsJSON;
            setPublications(results);
        })()
    }, [])

    return <section className={styles.section}>
            <div className={styles.sectionTitle}>
                <h3 data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-offset="0">Our <span className={styles.greenText}>publications.</span></h3>
            </div>
        <div className={styles.pubList} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-offset="0">
            {!!publications.length && publications.map((pub,index) => (
                <div className={styles.pubListItem} key={index}>
                    <h3>{!!pub.url ? <a href={pub.url}>{pub.title}</a> : `${pub.title}`}</h3>
                    <span><em>{pub.authors}</em></span>
                    <span><b>{pub.citation}</b></span>
                </div>
            ))}
        </div>
        </section>
}

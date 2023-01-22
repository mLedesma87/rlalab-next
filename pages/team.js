import styles from '../styles/Team.module.css';
import {useEffect, useState} from "react";
import {headers} from "next/headers";


export default function Team() {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        (async () => {
            const response = await fetch('/team.json');
            const membersJSON = await response.json();
            setMembers(membersJSON)
        })()
    }, [])

    return <section className={styles.section}>
            <div className={styles.sectionTitle}>
                <h3 data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-offset="0">Who <span className={styles.greenText}>we are.</span></h3>
            </div>
            <div className={styles.teamWrapper} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-offset="0">
                {
                    !!members.length && members.map(({imgUrl, name, description}, index) => (
                        <div key={index} style={{display:'flex', flexFlow:'column wrap', height:'auto', width: '450px', alignItems:'flex-start', justifyContent: 'flex-start'}}>
                            <img src={imgUrl} style={{borderRadius:'60px', width:'120px', maxHeight: '120px', flex: '1'}} />
                            <div style={{display:'flex', flexFlow:'column wrap', fontSize:'1.3em', lineHeight:'33px'}}>
                                <h3>{name}</h3>
                                <span>{description}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
}

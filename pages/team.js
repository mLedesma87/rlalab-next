import styles from '../styles/Team.module.css';
import {useEffect, useState} from "react";

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
            <div className={styles.director} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-offset="0">
              <div className={styles.imageWrapper}>
                <img src="/rodrigo.png" style={{borderRadius:'60px', width:'120px', maxHeight: '120px', flex: '1'}} />
                <h2>Rodrigo Ledesma-Amaro (the PI)</h2>
              </div>
              <div className={styles.text} style={{flex: 1}}>
                <h3>Overview</h3>
                <p>Rodrigo Ledesma-Amaro is a lecturer at the Department of Bioengineering at Imperial College London and is part of the Imperial College Centre for Synthetic Biology (IC-SynB). He is leading a research group at the interface of synthetic biology and metabolic engineering. </p>
                <p>Rodrigo has published more than 55 articles and patents, has obtained 11 fellowships/scholarships and 8 awards. He has been invited speaker in more than 20 conferences and workshops, including keynote talks. He is involved in editorial activities including works in editorial boards and acts as reviewer for journals and grants, including Nature, H2020 or BBSRC.</p>
                <h3>Biography</h3>
                <p>Rodrigo Ledesma-Amaro obtained his PhD at the University of Salamanca under the supervision of Prof. Jose Luis Revuelta, the head of the metabolic engineering group. The PhD thesis is about systems metabolic engineering of A. gossypii for the production of vitamins, nucleosides and lipids. It combines modeling, synthetic biology, systems biology and metabolic engineering techniques and it produced numerous research papers and industrial patents (being currently used by BASF). Before that, Rodrigo coursed an MSc in Microbial Biotechnology at the Universidad Autonoma de Madrid and two undergraduate degrees (Biotechnology and Chemical Engineering) at the University of Salamanca. During his PhD, Rodrigo was a visiting researcher at Prof. Jens Nielsen´s group at Chalmers University of Technology (Sweden), at Prof. Jean-Marc Nicaud’s lab at INRA (France) and at Prof. Kamisaka`s group at AIST (Japan).
                  After the PhD, he moved to France with a Marie Curie Fellowship and he performed his postdoc in the group of Jean-Marc Nicaud. Most of his postdoctoral research work was done in the oleaginous yeast Yarrowia lipolytica. During those years, Rodrigo engineered this organism to 1) produce different compounds (lipids, lipid-derived chemicals, carotenoids, etc), 2) to be able to use low-cost carbon sources such as lignocellulosic materials or starch and 3) to facilitate the recovery of the products by engineering lipid secretion. During the postdoc, Rodrigo taught synthetic biology related subjects at SUP biotech, Paris.
                </p>
                <p>In 2017, he joined Imperial College London as independent research with an Imperial College Research Fellowship and in 2019 he was appointed as lecturer in the Department of Bioengineering. </p>
              </div>
            </div>
            <div className={styles.teamWrapper} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-offset="0">
                {
                    !!members.length && members.map(({imgUrl, name, description}, index) => (
                        <div key={index} style={{display:'flex', flexFlow:'column wrap', height:'auto', width: '450px', alignItems:'flex-start', justifyContent: 'flex-start'}}>
                            <img src={imgUrl} style={{borderRadius:'60px', width:'120px', maxHeight: '120px', flex: '1'}} />
                            <div className={styles.text} style={{display:'flex', flexFlow:'column wrap'}}>
                                <h3>{name}</h3>
                                <span>{description}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
}

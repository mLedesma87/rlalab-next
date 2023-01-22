import styles from '../styles/Research.module.css'
import Image from "next/image";

export default function Research() {
    return <section className={styles.section}>
        <div className={styles.sectionTitle}>
            <h3 data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-offset="0">Our <span className={styles.greenText}>research lines.</span></h3>
        </div>
        <div className={styles.sectionInfo}>
            <div className={styles.researchLineWrapper} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-offset="0">
                <h5 className={styles.researchLineTitle} >New synthetic biology tools for metabolic control</h5>
                <div className={styles.researchLineInfo}>
                    <div className={styles.researchLineInfoText}>
                        <p>
                            The group is interested in using and developing new synthetic biology tools that allow us to precisely manipulate microbial cells in a reliable,
                            predictable and standardised way. In particular, we are interested in those cutting-edge techniques that permit a fine tuning of metabolic pathways.
                        </p>
                        <p>
                            For further reading see our last reviews on synthetic biology tools in Yarrowia and Rhodosporidium.
                        </p>
                    </div>
                    <div>
                        <Image src="/researchLine1.png" alt="New synthetic biology tools for metabolic control" width="600" height="400" style={{ width: '100%', height: 'auto', minWidth: '600px' }}/>
                    </div>
                </div>
            </div>
            <div className={styles.researchLineWrapper} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-offset="0">
                <h5 className={styles.researchLineTitle} >New synthetic biology tools for metabolic control</h5>
                <div className={styles.researchLineInfo}>
                    <div>
                        <Image src="/researchLine2.png" alt="Metabolic engineering for sustainable bioproduction" width="600" height="400" style={{ width: '100%', height: 'auto', minWidth: '600px' }}/>
                    </div>
                    <div className={styles.researchLineInfoText}>
                        <p>
                            The manipulation and optimization of microbial metabolic pathways are the keys for biotechnology and a bio-based economy.
                            The research group is highly interested in hacking metabolism using synthetic biology tools to create new properties and enhanced behaviors in microbial cells.
                            The engineering strategies are not only designed to produce new high-value products or higher amount of pre-existing products but also to facilitate the downstream
                            and upstream parts of the bioprocesses.
                        </p>
                        <p>
                            The lab is interested in engineering both, conventional (such as E. coli, B. subtilis and S. cerevisiae) and non-conventional organisms,
                            which span from yeast (Y. lipolytica), fungus (A. gossypii) and bacteria (K. rhaeticus).
                        </p>
                        <p>
                            For further reading see our last reviews on the <a className={styles.link} href="https://www.cell.com/trends/biotechnology/fulltext/S0167-7799(16)30029-4">importance of substrates in bioproduction</a> and <a className={styles.link} href="https://www.sciencedirect.com/science/article/pii/S0163782715300205">engineering
                            production in Yarrowia</a>.
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.researchLineWrapper} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-offset="0">
                <h5 className={styles.researchLineTitle} >Synthetic microbial communities for biotechnology and biomedicine</h5>
                <div className={styles.researchLineInfo}>
                    <div className={styles.researchLineInfoText}>
                        <p>
                            Microbial communities are important for both industrial bioprocesses (i.e. soy sauce production) and biomedicine (i.e. gut or skin microbiota).
                            We are interested in how microbial communities can be engineer and how synthetic biology can help to establish novel communities of microbes which
                            can have applications in biotechnology and healthcare.
                        </p>
                        <p>
                            For further reading see our last review on <a className={styles.link} href="https://www.cell.com/trends/biotechnology/fulltext/S0167-7799(18)30312-3">synthetic microbial communities</a>
                        </p>
                    </div>
                    <div>
                        <Image src="/researchLine3.png" alt="Synthetic microbial communities for biotechnology and biomedicine" width="600" height="600" style={{ width: '100%', height: 'auto', minWidth: '600px' }}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

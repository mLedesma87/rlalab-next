import styles from '../styles/Contact.module.css';


export default function Contact() {
    return <>
        <section className={styles.section}>
            <div className={styles.sectionTitle}>
                <h3 data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-offset="0">Contact <span className={styles.greenText}>us.</span></h3>
            </div>
            <div className={styles.contactWrapper} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-offset="0">
                <div>
                    <h3>Dr Rodrigo Ledesma-Amaro</h3>
                    <hr/>
                    <p>Imperial College Centre for Synthetic Biology (IC-CSynB) and the Department of Bioengineeing at Imperial College London</p>
                    <p><a href="https://www.imperial.ac.uk/people/r.ledesma-amaro">https://www.imperial.ac.uk/people/r.ledesma-amaro</a></p>
                    <p>Email: <a href="mailto:r.ledesma-amaro@imperial.ac.uk">r.ledesma-amaro@imperial.ac.uk</a></p>
                    <p>Twitter: <a href="https://twitter.com/ledesmaamaro">@LedesmaAmaro</a></p>
                    <p>ResearchGate: <a href="https://www.researchgate.net/profile/Rodrigo_Ledesma-Amaro">Rodrigo Ledesma Amaro</a></p>
                    <p>Google Scholar: <a href="https://scholar.google.com/citations?user=kWTPnDIAAAAJ&hl=es">Rodrigo Ledesma Amaro</a></p>
                </div>
                <div>
                    <h3 >Positions - Join the group</h3>
                    <hr/>
                    <p>If you are a talented and highly motivated researcher/student with knowledge/interest in the research areas of the group and you would like to join us, please email us with your CV and motivation (r.ledesma-amaro@imperial.ac.uk).</p>
                </div>
                <div>
                    <h3 >Consulting</h3>
                    <hr />
                    <p>Dr Ledesma-Amaro and the lab believe that academic knowledge has a key role in translational research, and we are currently involved in partnerships with several companies at different levels. We often consider consultancy tasks that relies in our field of expertise. Please contact us for more information (r.ledesma-amaro@imperial.ac.uk).
                        Additional information can be found at:
                        <a href="https://www.imperial-consultants.co.uk/expertise-areas/bioengineering-biotechnology.html">https://www.imperial-consultants.co.uk/expertise-areas/bioengineering-biotechnology.html</a></p>
                </div>
            </div>
        </section>
    </>
}

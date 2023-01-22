import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Rlalab - Synthetic Biology for Metabolic Engineering</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Jura&family=Quicksand&&family=Roboto:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <section className={styles.homeSection}>
          <div className={styles.mainSectionContainer}>
            <div>
              <h1 className={styles.labName}>Rlalab.</h1>
              <h3 className={styles.labSubName}>Synthetic Biology for Metabolic Engineering</h3>
            </div>
            <div>
              <span className={styles.labDescription} data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-offset="0">
                {"Rodrigo Ledesma-Amaro's Lab"}
              </span>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionTitle}>
            <h3 data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-offset="0">What<span className={styles.greenText}> we do.</span></h3>
          </div>
          <div className={styles.sectionMainInfo} data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" data-aos-offset="0">
          <span className={styles.sectionMainText}>The RLAlab is interested in how the development of synthetic biology
            can revolutionise biotechnologies and help us to move towards a sustainable
            bio-based economy. We engineer microorganisms for a wide range of applications
            which span from the production of the chemicals and fuels we usually get from
            petroleum to their use in biomedicine and therapeutics.</span>
          </div>
        </section>
      </main>
    </>
  )
}

import Link from "next/link";
import styles from "../styles/landingSection.module.css";

function Landing() {
  return (
    <div className={styles.landing} id="home">
      <div className={styles.landDisc}>
        <video autoPlay loop muted className={styles.video}>
          <source src="/livedna.mp4" />
        </video>
        <h1 className={styles.title}>
          Microbiota-based markers predictive of development cdi
        </h1>
        <p className={styles.paraLanding}>
          Clostridioides difficile infection, commonly known as difficile or
          CDI, is a bacterial infection that affects the colon (large
          intestine). It is caused by the bacterium Clostridioides difficile,
          formerly known as Clostridium difficile
        </p>
        <div className={styles.wrap}>
          <button className={styles.button}>
            <Link href="/CDI-Data">get started</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;

import styles from "../styles/howItWorks.module.css";

function HowItWorks() {
  const showListAnswers = (e) => {
    const list = e.currentTarget.nextSibling;
    list.classList.toggle("showList");
  };
  return (
    <div className={styles.howItWorks}>
      <div className={styles.videoContainer}>
        <div className={styles.titleAndDisc}>
          <h3>getting started</h3>
          <p>click here to watch how to use the website</p>
        </div>
        <video controls loop className={styles.video}>
          <source src="/livedna.mp4" />
        </video>
      </div>
      <div className={styles.answersWrap}>
        <button
          className={styles.buttonList}
          onClick={(e) => showListAnswers(e)}
        >
          <h1>what is Clostridioides difficile infection</h1>
          <div>
            <i className="bi bi-caret-down-square-fill"></i>
          </div>
        </button>
        <ul className={styles.listAnswers} id="listAnswers">
          <li>
            Clostridioides difficile infection, commonly known as difficile or
            CDI, is a bacterial infection that affects the colon (large
            intestine). It is caused by the bacterium Clostridioides difficile,
            formerly known as Clostridium difficile
          </li>
        </ul>
        <button
          className={styles.buttonList}
          onClick={(e) => showListAnswers(e)}
        >
          <h1>What is AAD stands for Antibiotic-Associated Diarrhea</h1>
          <div>
            <i className="bi bi-caret-down-square-fill"></i>
          </div>
        </button>
        <ul className={styles.listAnswers} id="listAnswers">
          <li>
            AAD stands for Antibiotic-Associated Diarrhea. It is a type of
            diarrhea that occurs as a result of taking antibiotics. When
            antibiotics are used to treat bacterial infections, they not only
            kill the harmful bacteria causing the infection but also disrupt the
            balance of normal bacteria in the gastrointestinal tract.
          </li>
        </ul>
        <button
          className={styles.buttonList}
          onClick={(e) => showListAnswers(e)}
        >
          <h1>What Are The Symptoms Clostridioides difficile infection</h1>
          <div>
            <i className="bi bi-caret-down-square-fill"></i>
          </div>
        </button>
        <ul className={styles.listAnswers} id="listAnswers">
          <li>
            Clostridioides difficile infection (CDI) can cause a variety of
            symptoms, ranging from mild to severe. Some of the common symptoms
            associated with CDI include:
          </li>
          <li>
            Diarrhea: This is the most common symptom of CDI. The diarrhea may
            be watery or semi-formed and can occur multiple times a day. It may
            be accompanied by a foul odor.
          </li>
          <li>
            Abdominal pain and cramping: Many individuals with CDI experience
            abdominal discomfort, ranging from mild cramps to severe pain.
          </li>
          <li>
            Fever: Some people may develop a fever, typically low-grade, as a
            result of the infection. microbiome phot
          </li>
        </ul>
        <button
          className={styles.buttonList}
          onClick={(e) => showListAnswers(e)}
        >
          <h1>The treatment of Clostridioides difficile infection (CDI)</h1>
          <div>
            <i className="bi bi-caret-down-square-fill"></i>
          </div>
        </button>
        <ul className={styles.listAnswers} id="listAnswers">
          <li>
            The treatment of Clostridioides difficile infection (CDI) typically
            involves a combination of measures to address the infection itself,
            manage symptoms, and prevent recurrence. The specific treatment
            approach may vary depending on the severity of the infection and
            individual factors. Here are the common treatment options:
          </li>
          <li>
            Discontinuation of the triggering antibiotic: If the CDI is
            associated with recent antibiotic use, the offending antibiotic
            should be stopped if possible, as it may have contributed to the
            disruption of the normal gut flora.
          </li>
          <li>
            Antibiotic therapy: The primary treatment for CDI involves the use
            of antibiotics that target the C. difficile bacteria. The choice of
            antibiotic may depend on the severity of the infection.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HowItWorks;

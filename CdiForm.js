import Link from "next/link";
import styles from "../styles/cdiForm.module.css";
import { useRef, useState } from "react";
function CdiForm() {
  const dropDownCountryLi = (e) => {
    e.target.classList.toggle("expanded");
  };
  let ageRef = useRef();
  let idRef = useRef();
  const [age, setAge] = useState();
  const [id, setId] = useState();
  return (
    <div className={styles.cdiSection}>
      <form className={styles.form}>
        <div className="col-3 wrap-input">
          <input
            className="input"
            type="number"
            placeholder=""
            required
            ref={ageRef}
            onChange={() => setAge(ageRef.current?.value)}
          />
          {!age && <label>Your Age</label>}
          <span className="focus-border"></span>
        </div>
        <div className="col-3 wrap-input">
          <input
            className="input"
            type="text"
            placeholder=""
            required
            ref={idRef}
            onChange={() => setId(idRef.current?.value)}
          />
          {!id && <label>Simple ID</label>}
          <span className="focus-border"></span>
        </div>
        <div className={styles.fileUp}>
          <label forhtml="files" className={styles.dropContainer}>
            <span className={styles.dropTitle}>Drop forword files here</span>
            <input type="file" className={styles.file} id="files" multiple />
          </label>
        </div>
        <div className={styles.fileUp}>
          <label forhtml="files" className={styles.dropContainer}>
            <span className={styles.dropTitle}>Drop reverse files here</span>
            <input type="file" className={styles.file} id="files" multiple />
          </label>
        </div>
        <div className={styles.select}>
          <select name="format" id="format">
            <option defaultValue value="Choose Your Country">
              Choose Your Country
            </option>
            <option value="Spain">Spain</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Romania">Romania</option>
            <option value="Greece">Greece</option>
            <option value="NetherLands">NetherLands</option>
          </select>
        </div>
        <div className={styles.wrapBtn}>
          <button className={styles.button}>
            <Link href="/result">Submit</Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default CdiForm;

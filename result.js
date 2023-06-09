import Loading from "@/components/Loading";
import styles from "../styles/result.module.css";
import React from "react";

function result() {
  let data = ["hello world"];
  if (data.length) {
    return (
      <div className={styles.resultSection}>
        <div className={styles.resultContainer}>
          <h1>ADD</h1>
          <h1>AD</h1>
          <h1>CDI</h1>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
}

export default result;

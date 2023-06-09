import styles from "../styles/footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapSocial}>
        <div className={styles.icon}>
          <i className="bi bi-facebook"></i>
        </div>
        <div className={styles.icon}>
          <i className="bi bi-whatsapp"></i>
        </div>
        <div className={styles.icon}>
          <i className="bi bi-envelope"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;

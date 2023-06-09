import styles from "../styles/contactUs.module.css";
function ContactUs() {
  return (
    <div className={styles.contactUs} id="#contact">
      <h1 className="special-title">contact us</h1>
      <form className={styles.form}>
        <div className="col-3 wrap-input">
          <input className="input" type="text" placeholder="" required />
          <label>First Name</label>
          <span className="focus-border"></span>
        </div>
        <div className="col-3 wrap-input">
          <input className="input" type="text" placeholder="" required />
          <label>Last Name</label>
          <span className="focus-border"></span>
        </div>
        <div className="col-3 wrap-input ">
          <input className="input " type="text" placeholder="" required />
          <label>Email</label>
          <span className="focus-border"></span>
        </div>
        <div className="col-3 wrap-input textarea">
          <textarea
            className="input area"
            type="text"
            placeholder=""
            required
          />
          <label>Message</label>
          <span className="focus-border"></span>
        </div>
        <div className={styles.wrapBtn}>
          <button className={styles.button}>Send</button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;

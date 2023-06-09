import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/header.module.css";
function Header() {
  const router = useRouter();
  const showNavLinks = () => {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("showLinks");
  };
  const scrollSmooth = (e) => {
    if (
      router.asPath === "/" ||
      router.asPath === "/#about" ||
      router.asPath === "/#contact"
    ) {
      let currentId = e.target.hash;
      let section = document.getElementById(currentId);
      section.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      e.preventDefault();
    }
  };
  return (
    <div className={styles.navBar}>
      <div className={styles.dropDown}>
        <button onClick={() => showNavLinks()}>
          <i className="bi bi-list"></i>
        </button>
      </div>
      <div className={styles.navLink} id="navLinks">
        <Link
          href="/"
          className={router.asPath == "/" ? `${styles.active}` : ""}
        >
          home
        </Link>
        <Link
          href="#about"
          className={router.asPath == "/#about" ? `${styles.active}` : ""}
          onClick={(e) => scrollSmooth(e)}
        >
          about disease
        </Link>
        <Link
          href="#contact"
          className={router.asPath == "/#contact" ? `${styles.active}` : ""}
          onClick={(e) => scrollSmooth(e)}
        >
          contact us
        </Link>
        <Link
          href="/How-It-Works"
          className={
            router.pathname == "/How-It-Works" ? `${styles.active}` : ""
          }
        >
          how it works
        </Link>
      </div>
    </div>
  );
}

export default Header;

import { Link } from "react-router-dom";
import styles from "../Styles/Navbar.module.css";
export const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link to="/">
            {" "}
            <h1>codeal</h1>
          </Link>
        </div>
        <div className={styles.space}>
          <div>
            <Link to="/settings">
              <img
                src="https://image.flaticon.com/icons/png/512/174/174857.png"
                alt="search"
              />
            </Link>
          </div>
          <div>
            <Link to="/login">Signin</Link>
          </div>
          <Link to="/signup">SignUp</Link>
        </div>
      </div>
    </>
  );
};

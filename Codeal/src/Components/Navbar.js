import React from "react";
import styles from "../Styles/Navbar.module.css";
export const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <h1>codeal</h1>
        </div>
        <div className={styles.space}>
          <div >signin</div>
          <div>signup</div>
        </div>
      </div>
    </>
  );
};

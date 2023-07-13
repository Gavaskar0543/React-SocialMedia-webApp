import React from "react";
import styles from "../Styles/home.module.css";
export const Home = () => {
  return (
    <>
      <div className={styles.outer}>
      <h1>Posts</h1>
      <div>
        <div>
            <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" alt="" width={35}/>
            <span className={styles.username}>Jhon</span>       
        </div>
        <div>
        display post
        </div>
        <div>
            <h1>like</h1>
            <h1>comment</h1>
        </div>
        <div>
            <input type="text"  placeholder="leave comments"/>
            <input type="submit" />
        </div>
      </div>
      </div>
    </>
  );
};

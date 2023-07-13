import React from "react";
import styles from "../Styles/home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';


export const Home = () => {
  return (
   <>
    
   {/* post sectin */}
   <section>
    <div className={styles.container} >
      <div className={styles.userInfo}>
      <div >
        <img src="https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars-3.png" alt="userimg" width={40}/>
      </div>
      <div>
        <h4>username</h4>
      </div>
      </div>
      <div>postContent</div>
      <div className={styles.likeAndComments}>
        <div>
        <FontAwesomeIcon icon={faHeart} style={{color: "#000814",}} />        </div>
        <div>
        <FontAwesomeIcon icon={faCommentDots} />  
            </div>
            </div>
      <div>
        <input type="text" placeholder="start typeing comments " />
      </div>
      <div>
        others comments
      </div>
    </div>
   
   </section>
   </>
          
   
  );
};

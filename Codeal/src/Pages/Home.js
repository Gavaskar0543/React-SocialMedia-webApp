import React from "react";
import Comments from "./Comments";
import PropTypes from 'prop-types';
import styles from "../Styles/home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';



export const About = () =>{
  return (
    <h1>About</h1>
  )
}

export const UserInfo = () =>{
  return (
    <h1>UserInfo</h1>
  )
}
export const Home = ({ posts }) => {
  return (
    <section>
   
      {/* post section */}
      {posts.map((post) => (
         <div className={styles.container}>
        <div >
          <div className={styles.userInfo}>
            <div>
              <img
                src="https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars-3.png"
                alt="userimg"
                width={40}
              />
            </div>
            <div>
              <h4>{post.user.name}</h4>
            </div>
          </div>
          <div>{post.content}</div>
          <div className={styles.likeAndComments}>
            <div>
              <FontAwesomeIcon icon={faHeart} style={{ color: "#000814" }} />
            </div>
            <div>
              <FontAwesomeIcon icon={faCommentDots} />
            </div>
          </div>
          <div>
            <input type="text" placeholder="start typing comments" />
            <span><button type="submit">send</button></span>
          </div>
          </div>
       <div>
        {post.comments.map((comment) => (
          <Comments comments={comment}/>
        ))}
       
        </div>

        </div>
      ))}
     
  


      </section>
   
  );
};

Home.propTypes = {
  posts : PropTypes.array.isRequired
}


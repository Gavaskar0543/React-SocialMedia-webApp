import { getPosts } from "../api";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import PageNotFound from "../Pages/pageNotFound";
import { Home, About, UserInfo } from "../Pages/Home";
import Setting from "../Pages/Settings";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import { Loader } from "./";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProfile from "../Pages/UserProfile";
function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    let fetchPosts = async () => {
      let response = await getPosts();
      console.log("response", response);
      if (response.success) {
        setPosts(response.data.posts);
      }
      setloading(false);
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/about" element={<About />} />
        <Route path="/userInfo" element={<UserInfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/user/:userId" element={<UserProfile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;

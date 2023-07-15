import { getPost } from "../api";
import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import PageNotFound from "../Pages/pageNotFound";
import { Home, About, UserInfo } from "../Pages/Home";
import Login from "../Pages/Login";
import { Loader } from "./";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    let fetchPosts = async () => {
      let response = await getPost();
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
        <Route element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;

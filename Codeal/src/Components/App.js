import { getPost } from "../api";
import {useEffect,useState} from 'react'
import { Navbar } from "./Navbar";
import {Home} from  '../Pages/Home'
import {Loader} from './';
function App() {
  
  const [posts,setPosts] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(()=>{
let fetchPosts = async ()=>{
  let response = await getPost();
  console.log('response',response);
  if(response.success){
    setPosts(response.data.posts);
    
  }
  setloading(false);
}
fetchPosts();
},[])
if(loading){
  return <Loader />
}
  return (
    <div className="App">
   <Navbar/>
   <Home posts={posts} />
    </div>
  );
}

export default App;



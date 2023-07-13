import { getPost } from "../api";
import {useEffect} from 'react'
import { Navbar } from "./Navbar";
import {Home} from  '../Pages/Home'
import {Loader} from './Loader'
function App() {
  
  const [posts,setPosts] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(()=>{
let fetchPosts = async ()=>{
  let response = await getPost();
  console.log('response',response);
  if(response.success){
    setPosts(response.data.post);
  }
}
fetchPosts();
},[])
if(loading){
  <Loader />
}
  return (
    <div className="App">
   <Navbar/>
   <Home/>
    </div>
  );
}

export default App;



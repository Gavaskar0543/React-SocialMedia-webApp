import { getPost } from "../api";
import {useEffect} from 'react'
import { Navbar } from "./Navbar";
import {Home} from  '../Pages/Home'
function App() {
useEffect(()=>{
let fetchPosts = async ()=>{
  let response = await getPost();
  console.log('response',response);
}
fetchPosts();
},[])
  return (
    <div className="App">
   <Navbar/>
   <Home/>
    </div>
  );
}

export default App;



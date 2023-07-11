import { getPost } from "../api";
import {useEffect} from 'react'
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
    Hello
    </div>
  );
}

export default App;



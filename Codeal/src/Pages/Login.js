import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [logging,setLogging] = useState(false);
  //notification function
  const notify = () => toast("please enter both email and password");

 const handleSubmit = (e) => {
    e.preventDefault();
    setLogging(true);
   if(!email  || !password){
    notify();
   } 
  }
  return (
    <div className="container  mt-5 w-25">
      <div className="container">
        <h3 className="text-warning text-center">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <ToastContainer />
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              id="Password"
              className="form-control"
              placeholder="Enter password"
              
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
         <div disabled={logging}>
         <button type="submit" className="btn btn-warning w-100 mt-2">
            {logging ? 'loging in...' : 'log in'}
          </button>
         </div>
        </form>
      </div>
    </div>
  );
};
export default Login;

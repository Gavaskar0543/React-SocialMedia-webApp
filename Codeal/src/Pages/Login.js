import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAuth } from "../hooks";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logging, setLogging] = useState(false);
 const auth = useAuth();

  //notification function
  const notify = () => toast("please enter both email and password");
  const loginToast = () => toast("password/email does`nt match");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLogging(true);
    if (!email || !password) {
      notify(); 
    }
    const response = await auth.login(email, password);
    if (response.success) {
      loginToast();
    }
    else{
      loginToast();
    }
    setLogging(false);
  };
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
          <div>
            <button
              type="submit"
             
              className="btn btn-warning w-100 mt-2"
              disabled={logging}  >
              {logging ? "loging in..." : "log in"}
            </button>
           
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;

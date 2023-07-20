import React from 'react';
import { Link } from 'react-router-dom';
function Settings(props) {
    return (
        <div>
          <div className='container d-flex justify-content-center align-item-center border border-1'>
           <div>
            <img />
           </div>
           <div>
            <form>
               <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div>
                  <label for="exampleInputPassword1" className="form-label">Username</label>
                  <input type="text" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Confirm password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className='d-flex  justify-content-evenly'>
                <button type="submit" className="btn btn-outline-primary">Edit Details</button>
                <button type="submit" className="btn btn-outline-success">save</button>
               <Link to='/' ><button type="submit" className="btn btn-outline-danger">GoBack</button></Link>
                </div>
              </form>          
          </div>
            </div>
        </div>
    );
}

export default Settings;
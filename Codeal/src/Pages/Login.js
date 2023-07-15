import "bootstrap/dist/css/bootstrap.css";
const Login = () => {
  return (
    <div className="container  mt-5 w-25">
      <div className="container">
        <h3 className="text-warning text-center">Login</h3>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              id="Password"
              className="form-control"
              placeholder="Enter password"
              required
            />
          </div>
          <button type="submit" className="btn btn-warning w-100 mt-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;

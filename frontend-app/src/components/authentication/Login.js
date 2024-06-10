
const Login = () => {

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value=""
            placeholder="Enter Your Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value=""
            placeholder="Enter Your Password"
          />
        </div>
        <button className="login-button" type="submit">
          Login
        </button>
        <button className="nav_register">
          New User
        </button>
      </form>
    </div>
  );
};

export default Login;
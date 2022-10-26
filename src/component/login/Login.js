import { useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { auth, loginUser } from "setup/firbase";
const Login = (props) => {
  const [username, setusername] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();
  if (props.user) navigate("/");
  const login = async (e) => {
    e.preventDefault();
    if (
      username !== "" &&
      username.length > 3 &&
      Password.length > 7 &&
      Password !== ""
    ) {
      await loginUser(auth, username, Password)
        .then((user) => {
          console.log(user);
          if (user) {
            navigate("/");
          }
          // ...
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="login__ontainer">
      <form onSubmit={login}>
        <h2>Sign in</h2>
        <div className="form__control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setusername(e.target.value)}
          />
        </div>
        <div className="form__control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>Sign in</button>
      </form>
      <div className="addition">
        <p>
          By sign in amazon you agree to Amazon Fake Conditions of use & sale
          ,Please see our Privacy Notice our Cookies Notice and our
          interset-Based Ads notice
        </p>
        <Link to={"/register"}>
          <button>Create your Amazon Account</button>
        </Link>
      </div>
    </div>
  );
};
export default Login;

import { useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { auth, createUser, db } from "../../setup/firbase";

const Register = (props) => {
  const [username, setusername] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  if (props.user) navigate("/");

  const Register = async (e) => {
    e.preventDefault();
    if (
      username !== "" &&
      username.length > 3 &&
      Password.length > 7 &&
      Password !== ""
    ) {
      await createUser(auth, username, Password)
        .then((user) => {
          if (user) {
            console.log(user);
            navigate("/login");
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
      <form onSubmit={Register}>
        <h2>Register</h2>
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
        <button>Register</button>
      </form>
      <div className="addition">
        <p>have an account ?</p>
        <Link to={"/login"}>
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};
export default Register;

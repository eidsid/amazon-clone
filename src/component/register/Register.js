import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import "./style.scss";

import { auth, createUser } from "setup/firbase";
import { createDBUser } from "setup/actions/user";

const Register = ({ user }) => {
  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [isprocess, setisprocess] = useState(false);
  const [Errors, setErrors] = useState("");
  const [userPass, setUserPass] = useState(true);
  const navigate = useNavigate();
  if (user) navigate("/");
  const dispatch = useDispatch();
  function checkEmail() {
    if (userName === "" || userEmail === "" || Password == "") {
      setErrors("All Field must be filed");
      setUserPass(false);
    }

    if (userName < 3) {
      setUserPass(false);
      setErrors("Your Name must be more than 2 character");
    }
    if (Password.length < 8) {
      setUserPass(false);
      setErrors("Password must be more than 7 character");
    }
    if (userEmail.length > 3) {
      setUserPass(false);
      setErrors("Email must be more than 3 character");
    }
  }
  const Register = async (e) => {
    e.preventDefault();
    checkEmail();
    if (userPass) {
      setisprocess(true);
      await createUser(auth, userEmail, Password)
        .then(async (data) => {
          if (data) {
            let userDetails = { name: userName, email: data.user.email };

            dispatch(createDBUser(userDetails, data.user.uid));
          }
        })
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          setErrors(
            error.message.indexOf("auth/email-already-in-use") !== -1
              ? "email already in use"
              : "Some thing want wrong"
          );

          setisprocess(false);
        });
    }
  };

  return (
    <div className="login__ontainer">
      <div className={Errors & "errorShow"} onClick={() => setErrors("")}>
        {Errors}
      </div>
      <form onSubmit={Register}>
        <h2>Register</h2>
        <div className="form__control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setuserName(e.target.value)}
          />
        </div>
        <div className="form__control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setuserEmail(e.target.value)}
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
        <button disabled={isprocess}>Register</button>
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

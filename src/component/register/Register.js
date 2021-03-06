import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import "./style.scss";

import { auth, createUser } from "../../setup/firbase";
import { createDBUser } from "../../setup/actions/user";

const Register = (props) => {
  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [isprocess, setisprocess] = useState(false);
  const [Errors, setErrors] = useState("");
  const navigate = useNavigate();
  if (props.user) navigate("/");
  const dispatch = useDispatch();

  const Register = async (e) => {
    e.preventDefault();
    if (
      userName !== "" &&
      userName.length >= 3 &&
      userEmail !== "" &&
      userEmail.length > 3 &&
      Password.length > 7 &&
      Password !== ""
    ) {
      setisprocess(true);
      await createUser(auth, userEmail, Password)
        .then(async (data) => {
          if (data) {
            let userDetails = { name: userName, email: data.user.email };
            // console.log(data.user.uid);
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
    } else {
      setErrors("All Field must be filed");
    }
    if (Password.length <= 7) {
      setErrors("Password must be more than 7 character");
    }
  };

  return (
    <div className="login__ontainer">
      <div className={Errors ? "errorShow" : ""} onClick={() => setErrors("")}>
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

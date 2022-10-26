import { useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { auth, loginUser } from "setup/firbase";
import { AddNotifications } from "setup/actions/notification";
import { useDispatch } from "react-redux";
const Login = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });

  if (props.user) navigate("/");
  function handleFormData(event) {
    const { type, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [type]: value,
    }));
  }

  const login = async (e) => {
    e.preventDefault();
    if (formData.email.length && formData.password.length) {
      await loginUser(auth, formData.email, formData.password)
        .then((user) => {
          console.log(user);
          if (user) {
            dispatch(
              AddNotifications({
                msg: "welcome back" + user.user.email,
                type: "success",
              })
            );
            navigate("/");
          }
          // ...
        })
        .catch(() => {
          dispatch(
            AddNotifications({ msg: "wrong password or email", type: "error" })
          );
        });
    }
  };
  return (
    <div className="login__ontainer">
      <form onSubmit={login}>
        <h2>Sign in</h2>
        <div className="form__control">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" onChange={handleFormData} />
        </div>
        <div className="form__control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleFormData} />
        </div>
        <button
          disabled={
            !formData.email.length || !formData.password.length ? "disable" : ""
          }
        >
          Sign in
        </button>
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

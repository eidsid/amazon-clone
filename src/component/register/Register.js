import { useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { auth, createUser } from "../../setup/firbase";
import { doc, setDoc } from "firebase/firestore/lite";
import { db } from "../../setup/firbase";
import { setUser } from "../../setup/actions/user";

import { useDispatch } from "react-redux";

const Register = (props) => {
  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [isprocess, setisprocess] = useState(false);
  const [message, setmessage] = useState("");
  const navigate = useNavigate();
  if (props.user) navigate("/");
  const dispatch = useDispatch();

  const Register = async (e) => {
    setisprocess(true);
    e.preventDefault();
    if (
      userName !== "" &&
      userName.length >= 3 &&
      userEmail !== "" &&
      userEmail.length > 3 &&
      Password.length > 7 &&
      Password !== ""
    ) {
      await createUser(auth, userEmail, Password)
        .then(async (data) => {
          if (data) {
            const usersRef = doc(db, `users/${data.user.uid}`);

            let userDetailse = { name: userName, email: data.user.email };

            await setDoc(usersRef, userDetailse);

            dispatch(setUser(userDetailse));
          }
        })
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
          setisprocess(false);
        });
    }
  };
  return (
    <div className="login__ontainer">
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

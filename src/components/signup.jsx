import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { useToasts } from "react-toast-notifications";
import { auth } from "../firebase";

let Signup = () => {
  let history = useHistory();
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [email, setEmail] = useState("");
  let { addToast } = useToasts();
  let user = useSelector((state) => state.user);

  return (
    <>
      {user ? <Redirect to="/home" /> : ""}
      <div className="row">
        <div className="col-4 offset-4">
          <h1 className="mt-4 mb-4">Sign Up</h1>
          <form className="mt-4">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                }}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => {
                  setPassword(e.currentTarget.value);
                }}
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword2" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.currentTarget.value);
                }}
                id="exampleInputPassword2"
              />
            </div>

            <button
              onClick={async (e) => {
                e.preventDefault();
                if (password === confirmPassword) {
                  try {
                    await auth.createUserWithEmailAndPassword(email, password);
                    addToast("you have been successfully registered", {
                      appearance: "success",
                      autoDismiss: true,
                      autoDismissTimeout: 1500,
                    });
                  } catch (e) {
                    addToast(e.message, {
                      appearance: "error",
                      autoDismiss: true,
                      autoDismissTimeout: 1500,
                    });
                  }
                } else {
                  addToast("both passwords should match", {
                    appearance: "error",
                    autoDismiss: true,
                    autoDismissTimeout: 1500,
                  });
                }
              }}
              className="btn btn-primary"
            >
              Sign Up
            </button>

            <br />
            <br />
            <button
              onClick={() => history.push("/login")}
              className="btn btn-primary"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;

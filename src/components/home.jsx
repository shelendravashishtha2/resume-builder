import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { auth } from "../firebase";
import { templateCreator } from "../redux/actions/templateActions";
import "./css/home.css";

let Home = () => {
  let user = useSelector((state) => state.user);
  let history = useHistory();
  let dispatch = useDispatch();

  return (
    <>
      {user ? "" : <Redirect to="/login" />}

      <div className="template-container">
        <div
          className="template"
          onClick={() => {
            dispatch(templateCreator("A"));
            history.push("/personal");
          }}
        >
          <img src="/skin1.svg" />
        </div>
        <div
          className="template"
          onClick={() => {
            dispatch(templateCreator("B"));
            history.push("/personal");
          }}
        >
          <img src="/skin2.svg" />
        </div>
      </div>

      <button
        className="btn-primary home-logout-btn"
        onClick={(e) => {
          e.preventDefault();
          auth.signOut();
        }}
      >
        Logout
      </button>
    </>
  );
};
export default Home;

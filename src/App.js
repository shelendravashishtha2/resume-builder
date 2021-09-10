import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider, useToasts } from "react-toast-notifications";
import Home from "./components/home";
import Login from "./components/login";
import Navbar from "./components/navbar";
import PersonalData from "./components/personalData";
import PublicPreview from "./components/publicPreview";
import Qualifications from "./components/qualifications";
import Signup from "./components/signup";
import { auth, firestore } from "./firebase";
import { userCreator } from "./redux/actions/userActions";

const App = () => {
  let dispatch = useDispatch();
  let state = useSelector((state) => state);
  console.log(state);
  useEffect(() => {
    let unSub = auth.onAuthStateChanged(async (user) => {
      dispatch(userCreator(user));

      if (user) {
        console.log(user);
        let { uid, email } = user;
        let docRef = firestore.collection("users").doc(uid);
        let doc = await docRef.get();

        if (!doc.exists) {
          docRef.set({ email });
        }
      }
    });

    return () => {
      unSub();
    };
  }, []);

  return (
    <>
      <Router>
        <ToastProvider>
          <Navbar />
          <Switch>
            <Route path="/publicPreview/:rid">
              <PublicPreview />
            </Route>
            <Route path="/qualifications">
              <Qualifications />
            </Route>
            <Route path="/personal">
              <PersonalData />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </ToastProvider>
      </Router>
    </>
  );
};

export default App;

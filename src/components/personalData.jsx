import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { detailCreator } from "../redux/actions/detailsAction";
import "./css/form.css";
import Preview from "./preview";

let PersonalData = () => {
  let details = useSelector((state) => state.detail);
  let history = useHistory();
  let { fname, lname, email, phone, state, city } = details;
  let dispatch = useDispatch();
  return (
    <>
      <div className="personal-container">
        <div className="personal-form">
          <h2 className="m-4">Personal Details</h2>
          <div className="row m-3">
            <div className="col-5">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                value={fname}
                onChange={(e) => {
                  dispatch(detailCreator({ fname: e.currentTarget.value }));
                }}
              />
            </div>
            <div className="col-5">
              <input
                type="text"
                onChange={(e) => {
                  dispatch(detailCreator({ lname: e.currentTarget.value }));
                }}
                value={lname}
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
            <div className="col-5">
              <input
                type="email"
                onChange={(e) => {
                  dispatch(detailCreator({ email: e.currentTarget.value }));
                }}
                value={email}
                className="form-control"
                placeholder="email"
              />
            </div>
            <div className="col-5">
              <input
                type="number"
                onChange={(e) => {
                  dispatch(detailCreator({ phone: e.currentTarget.value }));
                }}
                value={phone}
                className="form-control"
                placeholder="phone"
              />
            </div>
            <div className="col-5">
              <input
                onChange={(e) => {
                  dispatch(detailCreator({ city: e.currentTarget.value }));
                }}
                value={city}
                type="text"
                className="form-control"
                placeholder="city"
              />
            </div>
            <div className="col-5">
              <input
                onChange={(e) => {
                  dispatch(detailCreator({ state: e.currentTarget.value }));
                }}
                value={state}
                type="text"
                className="form-control"
                placeholder="state"
              />
            </div>
          </div>
          <button
            onClick={() => {
              history.push("/qualifications");
            }}
            className="btn btn-primary m-4"
          >
            Next
          </button>
        </div>
        <Preview />
      </div>
    </>
  );
};

export default PersonalData;

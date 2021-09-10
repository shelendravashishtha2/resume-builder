import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { detailCreator } from "../redux/actions/detailsAction";
import Preview from "./preview";
import "./css/form.css";
import { useSelector } from "react-redux";
import { saveResume } from "../redux/actions/saveActions";

let Qualifications = () => {
  let dispatch = useDispatch();
  let history = useHistory();
  let { degree, cgpa, year, college, isPublic } = useSelector(
    (state) => state.detail
  );

  let { id } = useSelector((state) => state.saveState);
  let details = useSelector((state) => state.detail);
  let code = useSelector((state) => state.template);
  let { uid } = useSelector((state) => state.user);
  console.log(uid);
  return (
    <>
      <div className="qual-container">
        <div className="qual-form">
          <h2 className="m-4">Professional Details</h2>
          <div className="row m-3">
            <div className="col-5">
              <input
                type="text"
                className="form-control"
                placeholder="Degree"
                value={degree}
                onChange={(e) => {
                  dispatch(detailCreator({ degree: e.currentTarget.value }));
                }}
              />
            </div>
            <div className="col-5">
              <input
                type="text"
                value={college}
                onChange={(e) => {
                  dispatch(detailCreator({ college: e.currentTarget.value }));
                }}
                className="form-control"
                placeholder="College"
              />
            </div>
            <div className="col-5">
              <input
                type="number"
                value={cgpa}
                onChange={(e) => {
                  dispatch(detailCreator({ cgpa: e.currentTarget.value }));
                }}
                className="form-control"
                placeholder="cgpa"
              />
            </div>
            <div className="col-5">
              <input
                type="number"
                value={year}
                min="1996"
                max="2025"
                onChange={(e) => {
                  dispatch(detailCreator({ year: e.currentTarget.value }));
                }}
                className="form-control"
                placeholder="YEAR of grad"
              />
            </div>
            <div class="form-check m-4">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                checked={isPublic}
                onClick={() => {
                  dispatch(detailCreator({ isPublic: !isPublic }));
                }}
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Make Public
              </label>
            </div>
          </div>
          <button
            onClick={() => {
              history.push("/personal");
            }}
            className="btn btn-primary m-4"
          >
            Back
          </button>
        </div>
        <Preview />
      </div>
      <button
        onClick={() => {
          alert(`localhost:3000/publicPreview/${id}`);
        }}
        className="btn btn-primary qual-gen"
      >
        Generate Link
      </button>
      <button
        onClick={() => {
          dispatch(saveResume(uid, details, code));
        }}
        className="btn btn-primary qual-save"
      >
        Save To Database
      </button>
    </>
  );
};

export default Qualifications;

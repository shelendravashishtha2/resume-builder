import { Link } from "react-router-dom";

let Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand">
            Resume Builder
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

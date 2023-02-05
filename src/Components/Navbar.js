import { Link } from "react-router-dom";
import "./css/navbar.css";
function Navbar() {
  return (
    <>
      <nav
        id="main-navbar"
        className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
      >
        <div className=" container-fluid  justify-content-center  justify-content-xl-start">
          <Link className="navbar-brand" to="/">
            CRUD
          </Link>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
/*
    <>
    
    </>
    ده الشورت هاند الحاجة الحقيقية اسمها 

    <React.Fragment></React.Fragment>
*/

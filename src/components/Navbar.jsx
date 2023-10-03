import { Link } from "react-router-dom";
import homeIcon from "../assets/home-icon.png";

function Navbar() {
  return (
    <div style={{backgroundColor: "lightblue", display: "flex", justifyContent: "center"}}>
      <Link to="/">
        <img src={homeIcon} />
      </Link>
    </div>
  );
}

export default Navbar;

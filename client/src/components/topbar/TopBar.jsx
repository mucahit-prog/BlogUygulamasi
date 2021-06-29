import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./TopBar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              ANASAYFA
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              YAZ
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              İLETİŞİM
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              HAKKIMDA
            </Link>
          </li>
        </ul>
      </div>
      {user ? (
        <div className="topList">
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
          <Link className="link logout" onClick={handleLogout} to="/logout">
            {user && "LOGOUT"}
          </Link>
        </div>
      ) : (
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/login">
              LOGIN
            </Link>
          </li>

          <li className="topListItem">
            <Link className="link" to="/register">
              REGISTER
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

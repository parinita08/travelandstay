import React, { useContext } from "react";
import "./Header.css";
import { AuthenticationContext } from "./AuthenticationContext";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  const { handleLogout } = useContext(AuthenticationContext);

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://firebasestorage.googleapis.com/v0/b/travelandstay-8a601.appspot.com/o/6fafb3cc-b6e4-4fa1-bc2f-b211733e18ba_200x200.png?alt=media&token=52b4bae8-7deb-4c88-b64d-86d7aa1d95e5"
          alt=""
        />
      </Link>

      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header__right">
        <p>Become a host</p>
        {/* <LanguageIcon /> */}
        {/* <ExpandMoreIcon /> */}
        {/* <Avatar /> */}
        <button onClick={handleLogout}>Log out</button>
      </div>
    </div>
  );
}

export default Header;

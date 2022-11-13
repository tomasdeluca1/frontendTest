import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBarSearch.css";
import NavBarInputSearch from "../NavBarInputSearch/NavBarInputSearch";

const NavBarSearch = () => {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState(false);
  const [user, setUser] = useState([]);

  console.log(user);
  return (
    <div className="navBar">
      <div className="navBarLogo">
        <Link to="/">
          <img
            src="https://cdn.icon-icons.com/icons2/2429/PNG/512/github_logo_icon_147285.png"
            className="gitHubLogo"
          />
        </Link>
      </div>
      <NavBarInputSearch input={input} setInput={setInput} setUser={setUser} />
    </div>
  );
};

export default NavBarSearch;

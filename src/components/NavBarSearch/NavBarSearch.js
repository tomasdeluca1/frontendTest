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
          <img src="../../../github-logo.png" className="gitHubLogo" />
        </Link>
      </div>
      <NavBarInputSearch input={input} setInput={setInput} setUser={setUser} />
    </div>
  );
};

export default NavBarSearch;

import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBarSearch.css";

const NavBarSearch = () => {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState(false);
  const [user, setUser] = useState([]);

  const handleSearch = () => {
    fetch(`https://api.github.com/users/${input}`)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setSearch(true);
        setUser(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(user);
  return (
    <div className="navBar">
      <div className="navBarLogo">
        <a href="https://www.github.com">
          <img
            src="https://cdn.icon-icons.com/icons2/2429/PNG/512/github_logo_icon_147285.png"
            className="gitHubLogo"
          />
        </a>
      </div>

      <div className="navBarSearcher">
        <div>
          <input
            value={input}
            className="searchInput"
            onChange={(e) => {
              e.target.value != 0 && setInput(e.target.value);
            }}
            placeholder="Profile search"
          />

          <button
            style={{ marginBottom: "20px" }}
            onClick={handleSearch}
            className="searchButton"
          >
            <Link to={`/userDetail/${input}`}>Find</Link>
          </button>
        </div>
      </div>

      <div className="navBarLink">
        <Link to={"/"}>Home page</Link>
      </div>
    </div>

    // <div>
    //   <h1>GitHub user searcher</h1>
    //   <input
    //     value={input}
    //     onChange={(e) => {
    //       e.target.value != 0 && setInput(e.target.value);
    //     }}
    //   />
    //   <button style={{ marginBottom: "20px" }} onClick={handleSearch}>
    //     Buscar
    //   </button>
    //   {search && (
    //     <div style={{ margin: "20px 0" }}>
    //       <UserSearched {...user} />{" "}
    //       <button onClick={() => setSearch(false)}>
    //         Quitar usuario buscado
    //       </button>
    //     </div>
    //   )}
    // </div>
  );
};

export default NavBarSearch;

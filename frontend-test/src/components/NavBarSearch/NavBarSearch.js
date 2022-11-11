import { useState } from "react";
import UserSearched from "../UserSearched/UserSearched";

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
    <div>
      <h1>GitHub user searcher</h1>
      <input
        value={input}
        onChange={(e) => {
          e.target.value != 0 && setInput(e.target.value);
        }}
      />
      <button style={{ marginBottom: "20px" }} onClick={handleSearch}>
        Buscar
      </button>
      {search && (
        <div style={{ margin: "20px 0" }}>
          <UserSearched {...user} />{" "}
          <button onClick={() => setSearch(false)}>
            Quitar usuario buscado
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBarSearch;

import { Link } from "react-router-dom";

const NavBarInputSearch = ({ input, setInput, setUser }) => {
  const handleSearch = () => {
    fetch(`https://api.github.com/users/${input}`)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        // setSearch(true);
        setUser(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navBarSearcher">
      <input
        value={input}
        className="searchInput"
        onChange={(e) => {
          e.target.value != 0 && setInput(e.target.value);
        }}
        placeholder="Search for a user, e.g. tomasdeluca1"
      />

      <button onClick={handleSearch} className="searchButton">
        <Link to={`/userDetail/${input}`}>Find</Link>
      </button>
    </div>
  );
};

export default NavBarInputSearch;

import { useState, useEffect } from "react";
import User from "../User/User";
import "./UserListContainter.css";
import Pagination from "../Pagination/Pagination";

const UserListContainter = () => {
  const [allUsers, setAllUsers] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [since, setSince] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://api.github.com/users?since=${since}&per_page=15`)
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          console.log(res);
          setAllUsers(res);
        })
        .catch((err) => setError(true))
        .finally(() => {
          setLoading(false);
        });
    }, 100);
  }, [since]);

  console.log(allUsers);
  if (loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div className="flexHome">
      <table className="tableUsers">
        <tr className="userInfo">
          <td className="info">
            <h4>Id</h4>
          </td>
          <td className="info">
            <h4>Login</h4>
          </td>
          <td className="info">
            <h4>+ info</h4>
          </td>
        </tr>
        <hr></hr>
        {allUsers.map((usuario) => (
          <User {...usuario} />
        ))}
      </table>
      <Pagination since={since} setSince={setSince} />
    </div>
  );
};

export default UserListContainter;

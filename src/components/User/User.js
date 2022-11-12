import "./User.css";
import { Link } from "react-router-dom";

const User = ({ login, id, node_id, html_url, avatar_url }) => {
  return (
    <tr className="userInfo" key={id}>
      <td className="info">{id}</td>
      <td className="info">{login}</td>
      <td className="info">
        <Link to={`userDetail/${login}`}>Detail</Link>
      </td>
    </tr>
  );
};

export default User;

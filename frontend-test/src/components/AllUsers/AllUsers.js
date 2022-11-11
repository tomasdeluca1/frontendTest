import "./AllUsers.css";
import { Link } from "react-router-dom";

const AllUsers = ({ login, id, node_id, html_url, avatar_url }) => {
  return (
    <tr className="userInfo" key={id}>
      <td className="info">{id}</td>
      <td className="info">{login}</td>
      <td className="info">
        <Link to={`userDetail/${login}`}>Detail</Link>
      </td>
      {/* <td className="infoNodeId">{node_id}</td>
      <td className="infoUrl">{html_url}</td>
      <td className="infoAvatar">{avatar_url}</td> */}
    </tr>
  );
};

export default AllUsers;

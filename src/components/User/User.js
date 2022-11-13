import "./User.css";
import { Link } from "react-router-dom";

const User = ({ login, id, node_id, html_url, avatar_url }) => {
  return (
    <tr className="userInfo" key={id}>
      <td className="infoId">{id}</td>
      <td className="infoName">{login}</td>
      <td className="infoButton">
        <Link to={`userDetail/${login}`}>
          <div className="detailButton">Detail</div>
        </Link>
      </td>
    </tr>
  );
};

export default User;

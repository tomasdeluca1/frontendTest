import { Link } from "react-router-dom";
import "./UserDetail.css";

const UserDetail = ({ id, login, html_url, avatar_url, created_at }) => {
  return (
    <div className="userDetailBox" key={id}>
      <div className="userDetailImg">
        <img src={avatar_url} className="userImg" />
      </div>
      <div className="detailsContainer">
        <div className="userDetailDivContainer">
          <div className="userDetailElement">User ID:</div>
          <div className="userDetailInfo">{id}</div>
        </div>

        <div className="userDetailDivContainer">
          <div className="userDetailElement">User login:</div>
          <div className="userDetailInfo">{login}</div>
        </div>

        <div className="userDetailDivContainer">
          <div className="userDetailElement">Link to profile:</div>
          <div className="userDetailInfo">
            {" "}
            <a href={html_url}>{html_url}</a>
          </div>
        </div>

        <div className="userDetailDivContainer">
          <div className="userDetailElement">User created at:</div>
          <div className="userDetailInfo">{created_at}</div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;

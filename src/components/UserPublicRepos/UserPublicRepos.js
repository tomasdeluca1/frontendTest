const UserPublicRepos = ({ id, html_url, name }) => {
  return (
    <div className="repoContainer">
      <div className="repoDetailDivContainer">
        <div className="repoDetailElement">
          <div style={{ marginRight: "3px" }}>Repo ID:</div>
          <div className="strongTxt">{id}</div>
        </div>
      </div>

      <div className="repoDetailDivContainer">
        <div className="repoDetailElement">
          <div style={{ marginRight: "3px" }}>Repo's name: </div>
          <div className="strongTxt"> {" " + name}</div>
        </div>
      </div>

      <div className="repoDetailDivContainer">
        <div className="repoDetailElement">
          <div style={{ marginRight: "3px" }}>Link to </div>
          <div>
            <a href={html_url} className="repoLink">
              repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPublicRepos;

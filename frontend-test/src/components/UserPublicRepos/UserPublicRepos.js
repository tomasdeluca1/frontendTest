const UserPublicRepos = ({ id, url, name }) => {
  return (
    <div className="repoContainer">
      <div className="repoDetailDivContainer">
        <div className="repoDetailElement">
          Repo Number <strong>{id}</strong>
        </div>
      </div>

      <div className="repoDetailDivContainer">
        <div className="repoDetailElement">
          Repo's name: <strong>{name}</strong>
        </div>
      </div>

      <div className="repoDetailDivContainer">
        <div className="repoDetailElement">
          Link to repo:{" "}
          <strong>
            {" "}
            <a href={url} className="repoLink">
              {url}
            </a>
          </strong>
        </div>
      </div>
    </div>
  );
};

export default UserPublicRepos;

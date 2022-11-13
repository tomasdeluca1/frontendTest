import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserDetail from "../UserDetail/UserDetail";
import UserPublicRepos from "../UserPublicRepos/UserPublicRepos";

const UserDetailContainer = () => {
  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState([]);

  const { userLogin } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/users/${userLogin}`)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setUser(res);
      })
      .catch((error) => {
        console.log(error);
      });

    fetch(`https://api.github.com/users/${userLogin}/repos`)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setRepos(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userLogin]);
  console.log(repos);
  return (
    <div>
      {/* <h2 className="repoSectionTitle">User profile</h2> */}
      <UserDetail {...user} />
      <h2 className="repoSectionTitle">Public repositories</h2>
      <div className="reposFlex">
        {repos.map((repo) => (
          <UserPublicRepos key={repo.id} {...repo} />
        ))}
      </div>
    </div>
  );
};

export default UserDetailContainer;

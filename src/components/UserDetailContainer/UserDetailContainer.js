import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserDetail from "../UserDetail/UserDetail";
import UserPublicRepos from "../UserPublicRepos/UserPublicRepos";

const UserDetailContainer = () => {
  const [user, setUser] = useState(["s"]);
  const [notFound, setNotFound] = useState(false);
  const [repos, setRepos] = useState([]);

  const { userLogin } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/users/${userLogin}`)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setUser(res);
        console.log(res);
        // }
      })
      .catch((error) => {
        console.log(1);
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

  // console.log(user.message);

  return (
    <div>
      <div>
        {" "}
        <UserDetail {...user} />
        <h2 className="repoSectionTitle">Public repositories</h2>
        <div className="reposFlex">
          {repos.map((repo) => (
            <UserPublicRepos key={repo.id} {...repo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDetailContainer;

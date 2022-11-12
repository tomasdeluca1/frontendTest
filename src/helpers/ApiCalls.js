// export const getUsers = (since, setAllUsers, setError, setLoading) => {
//   setTimeout(() => {
//     fetch(`https://api.github.com/users?since=${since}&per_page=15`)
//       .then((response) => {
//         return response.json();
//       })
//       .then((res) => {
//         setAllUsers(res);
//       })
//       .catch((err) => setError(true))
//       .finally(() => {
//         setLoading(false);
//       });
//   }, 200);
// };

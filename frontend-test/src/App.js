import logo from "./logo.svg";
import "./App.css";
import UserListContainter from "./components/UserListContainter/UserListContainter";
import NavBarSearch from "./components/NavBarSearch/NavBarSearch";
import UserDetailContainer from "./components/UserDetailContainer/UserDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarSearch />
        <Routes>
          <Route path="/" element={<UserListContainter />} />
          <Route
            path="/userDetail/:userLogin"
            element={<UserDetailContainer />}
          />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        <footer style={{ paddingBottom: "20px" }}>
          Created by{" "}
          <a
            href="huevsite.vercel.app"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "600",
            }}
          >
            Huevsite™
          </a>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

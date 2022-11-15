import logo from "./logo.svg";
import "./App.css";
import UserListContainter from "./components/UserListContainter/UserListContainter";
import NavBarSearch from "./components/NavBarSearch/NavBarSearch";
import UserDetailContainer from "./components/UserDetailContainer/UserDetailContainer";
// import { inject } from "@vercel/analytics";

// // Make sure to call this only once in your app
// inject();

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
          <Route
            path="*"
            element={<h1 style={{ height: "100vh" }}>404 NOT FOUND</h1>}
          />
        </Routes>
        <footer
          style={{
            padding: "10px",
            borderTop: "1px solid rgb(255,255,255,0.3",
            position: "fixed",
            bottom: "0",
            textAlign: "center",
            width: "100%",
            backgroundColor: "#282c34",
          }}
          className="footer"
        >
          Created by{" "}
          <a
            href="https://huevsite.vercel.app"
            // style={{
            //   textDecoration: "none",
            //   color: "white",
            //   fontWeight: "600",
            // }}
            className="huevsite"
          >
            Huevsite™
          </a>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

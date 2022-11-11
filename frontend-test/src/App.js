import logo from "./logo.svg";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBarSearch from "./components/NavBarSearch/NavBarSearch";
import UserDetail from "./components/UserDetail/UserDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarSearch />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/userDetail/:userLogin" element={<UserDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

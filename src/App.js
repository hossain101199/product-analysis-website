import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Reviews from "./components/Reviews/Reviews";
import Dashboard from "./components/Dashboard/Dashboard";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header></Header>
      </div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/HOME" element={<Home></Home>}></Route>
        <Route path="/REVIEWS" element={<Reviews></Reviews>}></Route>
        <Route path="/DASHBOARD" element={<Dashboard></Dashboard>}></Route>
        <Route path="/BLOGS" element={<Blogs></Blogs>}></Route>
        <Route path="/ABOUT" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import "./index.css";
import "./assets/fonts/neutra-text-bold-5871e1605afa2.otf";
import "./assets/fonts/neutra-text-tf-5871e0b0704ed.otf";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Users from "./components/Users";
import Nav from "./components/Nav";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
      </BrowserRouter>
      <br />
    </>
  );
}

export default App;

import React from "react";
import Maleta from "../img/maletas.png";
import Index from "./Index";
import Escapadas from "./Escapadas";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Cuenta from "./Cuenta";
function Navbar() {
  return (
    <BrowserRouter>
      <div className="container-sm">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="btn-group" role="group">
              <img src={Maleta} alt="" height="50px"></img>
              <button type="button" className="btn ">
              <NavLink style={{textDecoration:"none"}} className="text-dark" to="/">Inicio</NavLink>
              </button>
              <button type="button" className="btn ">
                <NavLink style={{textDecoration:"none"}} className="text-dark" to="/escapadas">Escapadas</NavLink>
              </button>
            </div>
            <div className="container nav justify-content-end">
              <div className="btn-group" role="group">
                <button type="button" className="btn" >
                <NavLink style={{textDecoration:"none"}} className="text-dark" to="/cuenta">Mi cuenta</NavLink>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/escapadas" element={<Escapadas/>}></Route>
        <Route path="/cuenta" element={<Cuenta/>}></Route>
        <Route path="*" element={<div>Error 404</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Navbar;

import React from "react";
import Img from "../img/cuenta.jpg";
import User from "../img/user.png";
function Cuenta() {
  return (
    <div className="card text-bg-dark m-5">
      <img src={Img} alt=""></img>
      <div className="card-img-overlay">
        <button
          type="button" 
          className="btn btn-light"
          data-bs-target="#canvas"
          data-bs-toggle="offcanvas"
        > <img src={User} alt="" height="25px"></img></button>
       
        <p className="card-text">
          <small className="text-dark">Para saber más información sobre tu perfil, pulse el botón de arriba</small>
        </p>
      </div>
      <div class="offcanvas offcanvas-start" id="canvas">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title">Usuario</h5>
          <button class="btn btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="offcanvas-body">Informacion de usuario</div>
      </div>
    </div>
  );
}

export default Cuenta;

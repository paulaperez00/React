import React, { useState } from "react";
import Carrito from "../img/carrito.png";
function Producto({ nombre, precio, imagen, descripcion, setPrecioTotal }) {
  const [cantidad, SetCantidad] = useState(0);
  const modificarCantidad = (e) => {
    SetCantidad(e.target.value);
  };
  const anadirCantidad = () => {
    setPrecioTotal((total) => total + precio * cantidad);
  };
  return (

      <div class="card">
        <div class="card-header">Top Escapadas</div>
        <div class="card-body">
          <h5 class="card-title">{nombre}</h5>
          <p class="card-text">
          {descripcion}
          </p>
          <img src={imagen} alt="" className=" d-block" width="20%" />
          <h6>Precio: {precio} €</h6>
          <input type="number" value={cantidad} onChange={modificarCantidad} />
          <br></br>
          <br></br>
          <button className="btn btn-light" onClick={anadirCantidad}>
          Añadir al carrito<img src={Carrito} alt="" height="25px"></img>
          </button>
        </div>
      </div>
  );
}
export default Producto;

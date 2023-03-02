import React, { useState } from "react";
import Budapest from "../img/budapest.jpg";
import Bali from "../img/bali.jpg";
import Islandia from "../img/islandia.jpg";
import Machupichu from "../img/machupichu.jpg";
import Praga from "../img/praga.jpg";
import Tokyo from "../img/tokyo.jpg";
import Producto from "./Producto";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
function Escapadas() {
  const [precioTotal, SetPrecioTotal] = useState(0);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="col">
            <Producto
              nombre="Bali"
              precio={300}
              descripcion="Bali es una isla de Indonesia conocida por sus frondosas montañas volcánicas, los icónicos arrozales, las playas y los arrecifes de coral."
              imagen={Bali}
              modal="mymodal1"
              setPrecioTotal={SetPrecioTotal}
            ></Producto>
            <br></br>
            <Producto
              nombre="Budapest"
              precio={500}
              descripcion="Budapest es la capital de Hungría, por la que cruza el río Danubio. Su Puente de las Cadenas del siglo XIX conecta el distrito montañoso de Buda con la plana Pest."
              imagen={Budapest}
              setPrecioTotal={SetPrecioTotal}
            ></Producto>
            <br></br>
            <Producto
              nombre="Machupichu"
              precio={600}
              descripcion="Machu Picchu es una ciudadela inca ubicada en las alturas de las montañas de los Andes en Perú.  El uso exacto que tuvo sigue siendo un misterio."
              imagen={Machupichu}
              setPrecioTotal={SetPrecioTotal}
            ></Producto>
            <br></br>
            <Producto
              nombre="Tokyo"
              precio={750}
              descripcion="Tokio, la ajetreada capital de Japón, mezcla lo ultramoderno y lo tradicional, desde los rascacielos iluminados con neones hasta los templos históricos. El opulento santuario Shinto Meiji es conocido por su puerta altísima y los bosques circundantes. "
              imagen={Tokyo}
              setPrecioTotal={SetPrecioTotal}
            ></Producto>
            <br></br>
            <Producto
              nombre="Islandia"
              precio={800}
              descripcion="Islandia es un país insular nórdico que se caracteriza por su espectacular paisaje con volcanes, géiseres, termas y campos de lava. Cuenta con enormes glaciares protegidos."
              imagen={Islandia}
              setPrecioTotal={SetPrecioTotal}
            ></Producto>
            <br></br>
            <Producto
              nombre="Praga"
              precio={670}
              descripcion="Recibe el apodo de la “Ciudad de las Cien Torres” y es conocida por la Plaza de la Ciudad Vieja, el núcleo de su centro histórico, con coloridos edificios barrocos, iglesias góticas y el Reloj Astronómico medieval."
              imagen={Praga}
              setPrecioTotal={SetPrecioTotal}
            ></Producto>
          </div>
        </div>
        <div className="col col-lg-2">
          <div className="card text-center">
            <div className="card-header">Carrito</div>
            <div className="card-body">
              <h7 className="card-title">Total pagar: {precioTotal}€</h7>
            </div>
            <div className="card-footer text-muted">
              <PayPalScriptProvider options={{ "client-id": "test" }}>
                <PayPalButtons style={{ layout: "horizontal" }} />
              </PayPalScriptProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Escapadas;

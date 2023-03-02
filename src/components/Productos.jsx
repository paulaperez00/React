import React from "react";
import Egipto1 from "../img/1egipto.jpg";
import Egipto2 from "../img/2egipto.jpg";
import Egipto3 from "../img/faraon.png";
function Products() {
  return (
    <div className="container-lg-fluid ">
      <div className="row">
        <div className="col p-5 bg-light">
        
          <h3> <img src={Egipto3} alt="" width="2%"></img> 8 DÍAS Y 7 NOCHES EN EGIPTO CON VUELOS + CRUCERO 5*</h3>
          <p>
            Un viaje a Egipto es un viaje a los inicios de la civilización. El
            país del Nilo ya era antiguo cuando Roma era solo una aldea de
            ganaderos. Las pirámides de Guiza y la misteriosa Esfinge nos
            contemplan desde hace más de 4000 años y nada parece indicar que no
            lo sigan haciendo durante los próximos milenios. Ninguna región del
            mundo cuenta con una mayor riqueza monumental.
          </p>
          <button
            type="button"
            className="btn btn-info"
            data-bs-toggle="modal"
            data-bs-target="#my2modal"
          >
            Saber más
          </button>
          <div className="modal fade" id="my2modal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h2 className="modal-tittle">Egipto</h2>
                  <button
                    className="btn btn-close"
                    data-bs-dismiss="modal"
                    data-bs-target="#my2modal"
                  ></button>
                </div>
                        <div className="modal-body">
                          <div
                            className="carousel slide"
                            id="primerCarousel"
                            data-bs-ride="carousel"
                            data-bs-interval="1500"
                          >
                            <div className="carousel-indicators">
                              <button
                                type="button"
                                data-bs-target="#primerCarousel"
                                data-bs-slide-to="0"
                                className="active"
                              ></button>
                              <button
                                type="button"
                                data-bs-target="#primerCarousel"
                                data-bs-slide-to="1"
                              ></button>
                            </div>
                            <div className="carousel-inner">
                              <div className="carousel-item active">
                              <img src={Egipto1} alt="" width="100%"></img>
                              </div>
                              <div className="carousel-item">
                                 <img src={Egipto2} alt="" width="100%"></img>
                            </div>
                          </div>
                          <button
                            type="button"
                            data-bs-target="#primerCarousel"
                            className="carousel-control-prev"
                            data-bs-slide="prev"
                          >
                            <span className="carousel-control-prev-icon"></span>
                          </button>
                          <button
                            type="button"
                            data-bs-target="#primerCarousel"
                            className="carousel-control-next"
                            data-bs-slide="next"
                          >
                            <span className="carousel-control-next-icon"></span>
                          </button>
                        </div>
                        <div className="modal-footer">
                          <button
                            className="btn btn-info"
                            data-bs-dismiss="modal"
                          >
                            Cerrar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
}
export default Products;

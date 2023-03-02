import React from "react";
import Paris from "../img/paris.jpg";
import NY from "../img/ny.jpg";
import Roma from "../img/roma.jpg";
import Products from "./Productos";

function Index() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Paris} alt="" width="100%"></img>
            <div className="carousel-caption d-none d-md-block text-white">
              <h5>Paris</h5>
              <p>
                Es una importante ciudad europea y un centro mundial del arte,
                la moda, la gastronomía y la cultura.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Roma} alt="" width="100%"></img>
            <div className="carousel-caption d-none d-md-block text-white">
              <h5>Roma</h5>
              <p>
                Es una extensa ciudad cosmopolita que tiene a la vista casi
                3,000 años de arte, arquitectura y cultura de influencia
                mundial.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={NY} alt="" width="100%"></img>
            <div className="carousel-caption d-none d-md-block text-white">
              <h5>New York</h5>
              <p>
                Considerada como una ciudad global, dadas sus influencias a
                nivel mundial en los medios de comunicación, en la educación, en
                el entretenimiento y la moda.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        <Products></Products>
    </div>
  );
}

export default Index;

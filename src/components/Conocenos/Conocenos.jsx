import React from "react";
import Jardineria from "./assets/Jardineria.jpg";
import "./Conocenos.css";

const Conocenos = () => {
  return (
    <>
      <div className="Conocenos">
        <br />
        <br />
        <div className="container">
          <div className="container" id="ConocenosID">
            <div className="row">
              <div className="col-3"></div>
              <div className="col-9" id="Conocenos">
                <h1>Conócenos</h1>
              </div>
            </div>
            <div className="row">
              <img
                src={Jardineria}
                className="card-img-top"
                alt="..."
                id="imgConocenos"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conocenos;

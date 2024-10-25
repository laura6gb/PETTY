import React, { useEffect, useState } from "react";
import "./tratamiento.css"; //Estilos
import { Link } from "react-router-dom"; //Rutas
import { GoHome, GoSearch, GoGear } from "react-icons/go";
import { PiPawPrint } from "react-icons/pi";

const Tratamiento: React.FC = () => {
  return (
    <div className="treat-box">
      <div className="headerp">
        <div className="icon">
          <img id="logo" src="src/assets/logohor.png" />
          <Link to="/Home" id="home">
            <GoHome />
          </Link>
          <Link to="" id="search">
            <GoSearch />
          </Link>
          <Link to="/Pets" id="pet">
            <PiPawPrint />
          </Link>
          <Link to="" id="config">
            <GoGear />
          </Link>
        </div>
      </div>
      <div className="wrappert">
        <div className="addtreat">
          <form className="formt">
            <h1>Tratamiento</h1>
            <div className="input-boxt">
              <label className="titulos">Mascota:</label>
              <input
                type="search"
                id="mascotareg"
                name="mascotareg"
                placeholder="Buscar registro de mascota"
              />
            </div>
            <div className="input-boxt">
              <label className="titulos">Tratamiento:</label>

              <input
                type="text"
                id="treat"
                name="treat"
                placeholder="Ingresar tratamiento"
              />
            </div>
            <div className="input-boxt">
              <label className="titulos">Fecha:</label>

              <input
                type="date"
                id="date"
                name="date"
                placeholder="Ingresar fecha"
              />
            </div>
          </form>
        </div>
        <div className="addtreat">
          <form className="formt">
            <div className="input-boxt">
              <label className="titulos">Código o costo:</label>

              <input
                type="number"
                id="cod"
                name="cod"
                placeholder="Ingresar codigo o costo"
              />
            </div>
            <div className="input-boxt">
              <label className="titulos">Detalles</label>
            </div>
            <div className="botont">
              <button className="uno" type="button">
                Continuar
              </button>
              <button className="dos" type="reset">
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Tratamiento;

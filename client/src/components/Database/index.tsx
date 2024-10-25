import React, { useEffect, useState } from "react";
import "./database.css"; //Estilos
import { Link } from "react-router-dom"; //Rutas
import { GoHome, GoSearch, GoGear } from "react-icons/go";
import { PiPawPrint } from "react-icons/pi";

const Database: React.FC = () => {
  return (
    <div className="db-box">
      <div className="headerd">
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
      <div className="wrapperd">
        <div className="db">
          <div>
            <Link to="">
              <button
                type="button"
                name="newtratamiento"
                className="tarjeta data"
              >
                <img src="" className="icon list" />
                <label className="titulos">Exporta la base de datos</label>
                Exportar la base de datos en una hoja de cálculo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Database;

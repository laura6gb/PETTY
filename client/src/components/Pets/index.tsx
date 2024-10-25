//import React, { useEffect, useState } from "react";
import "./pets.css"; //Estilos
import { Link } from "react-router-dom"; //Rutas
import { GoHome, GoSearch, GoGear } from "react-icons/go";
import { PiPawPrint } from "react-icons/pi";

const Pets: React.FC = () => {
  return (
    <div className="pets-box">
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
      <div className="wrapperp">
        <div className="addpet">
          <form className="formp">
            <h1>Nueva mascota</h1>
            <div className="input-boxp">
              <label className="">Nombre:</label>

              <input
                type="text"
                id="nombremasc"
                name="nombremasc"
                placeholder="Ingresar el nombre de la mascota"
              />
            </div>
            <div className="input-boxp">
              <label className="">Edad:</label>

              <input
                type="number"
                id="edad"
                name="edad"
                placeholder="Ingresar edad"
              />
            </div>
            <div className="input-boxp">
              <label className="">Especie:</label>

              <select id="especie" name="especie">
                <option value="defecto">Seleccione una especie</option>
                <option value="1">Especie 1</option>
                <option value="2">Especie 2</option>
                <option value="3">Especie 3</option>
              </select>
            </div>
            <div className="input-boxp">
              <label className="">Raza:</label>

              <select id="raza" name="raza">
                <option value="defecto">Seleccione una raza</option>
                <option value="1">Raza 1</option>
                <option value="2">Raza 2</option>
                <option value="3">Raza 3</option>
              </select>
            </div>
          </form>
        </div>
        <div className="addpet2">
          <form className="formp">
            <div className="input-boxp">
              <label className="">Nombre del dueño:</label>

              <input
                type="text"
                id="dueño"
                name="dueño"
                placeholder="Ingresar nombre del dueño"
              />
            </div>
            <div className="input-boxp">
              <label className="">Número telefónico:</label>

              <input
                type="tel"
                id="telefono"
                name="telefono"
                placeholder="Ingresar número telefónico"
              />
            </div>
            <div className="input-boxp">
              <label className="">Síntomas:</label>

              <select id="sintomas" name="sintomas">
                <option value="defecto">Seleccione los síntomas</option>
                <option value="1">Síntoma 1</option>
                <option value="2">Síntoma 2</option>
                <option value="3">Síntoma 3</option>
              </select>
            </div>
            <div className="botonp">
              <Link to="/Tratamiento">
                <button className="uno" type="button">
                  Agregar
                </button>
              </Link>
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
export default Pets;

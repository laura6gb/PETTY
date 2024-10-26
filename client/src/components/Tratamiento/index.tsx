import React, { useState } from "react";
import "./tratamiento.css"; //Estilos
import { Link } from "react-router-dom"; //Rutas
import { GoHome, GoSearch, GoGear } from "react-icons/go";
import { PiPawPrint } from "react-icons/pi";

const Tratamiento: React.FC = () => {
  const [mascota, setMascota] = useState("");
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [precio, setPrecio] = useState("");
  const [detalles, setDetalles] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDetalles(e.target.value);
  };

  const handleSubmit = async () => {
    const data = { mascota, nombre, fecha, precio, detalles };

    try {
      const response = await fetch("http://localhost:3000/treatment/addtreat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        // Limpiar el formulario si el tratamiento fue agregado exitosamente
        setMascota("");
        setNombre("");
        setFecha("");
        setPrecio("");
        setDetalles("");
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Error al agregar el tratamiento:", error);
    }
  };

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
        <form
          className="formt"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="addtreat">
            <h1>Tratamiento</h1>
            <div className="input-boxt">
              <label className="titulos">Mascota:</label>
              <input
                type="text"
                value={mascota}
                onChange={(e) => setMascota(e.target.value)}
                required
                placeholder="Ingresar nombre de mascota registrada"
              />
            </div>
            <div className="input-boxt">
              <label className="titulos">Tratamiento:</label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                placeholder="Ingresar nombre del tratamiento"
              />
            </div>
            <div className="input-boxt">
              <label className="titulos">Fecha:</label>
              <input
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                required
                placeholder="Ingresar fecha"
              />
            </div>
          </div>

          <div className="addtreat">
            <div className="input-boxt">
              <label className="titulos">Precio:</label>
              <input
                type="number"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                required
                placeholder="Ingresar Precio"
              />
            </div>
            <div className="input-boxt">
              <label className="titulos">Detalles:</label>
              <textarea
                id="detalles"
                value={detalles}
                onChange={handleChange}
                placeholder="Escribe aquí los síntomas"
              />
            </div>
            <div className="botont">
              <button className="uno" type="submit">
                Continuar
              </button>
              <button className="dos" type="reset">
                Cancelar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Tratamiento;

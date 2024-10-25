import React, { useState } from "react";
import "./addpet.css"; //Estilos
import { Link } from "react-router-dom"; //Rutas
import { GoHome, GoSearch, GoGear } from "react-icons/go";
import { PiPawPrint } from "react-icons/pi";

const AddPet: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [raza, setRaza] = useState("");
  const [edad, setEdad] = useState("");
  const [dueño, setDueño] = useState("");
  const [especie, setEspecie] = useState("");
  const [tratamiento, setTratamiento] = useState("");
  const [sintomas, setSintomas] = useState("");

  const razas = ["Raza 1", "Raza 2", "Raza 3"];
  const especies = ["Especie 1", "Especie 2", "Especie 3"];

  const handleRazaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRaza(e.target.value);
  };

  const handleEspecieChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEspecie(e.target.value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSintomas(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const data = { nombre, raza, edad, dueño, especie, tratamiento };

    try {
      const response = await fetch("http://localhost:3000/pet/addpet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        // Limpiar el formulario si la mascota fue agregada exitosamente
        setNombre("");
        setRaza("");
        setEdad("");
        setDueño("");
        setEspecie("");
        setTratamiento("");
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Error al agregar la mascota:", error);
    }
  };
  return (
    <div className="addpet-box">
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
      <div className="wrappera">
        <form className="formp" onSubmit={handleSubmit}>
          <div className="addpet">
            <h1>Nueva mascota</h1>
            <div className="input-boxa">
              <label className="titulos">Nombre:</label>

              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                placeholder="Ingresar el nombre de la mascota"
              />
            </div>
            <div className="input-boxa">
              <label className="titulos">Edad:</label>

              <input
                type="number"
                id="edad"
                name="edad"
                placeholder="Ingresar edad"
              />
            </div>
            <div className="input-boxa">
              <label className="titulos">Especie:</label>

              <select value={especie} onChange={handleEspecieChange} required>
                <option value="" disabled hidden>
                  Selecciona una especie
                </option>
                {especies.map((especie, index) => (
                  <option key={index} value={especie}>
                    {especie}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-boxa">
              <label className="titulos">Raza:</label>

              <select value={raza} onChange={handleRazaChange} required>
                <option value="" disabled hidden>
                  Selecciona una raza
                </option>
                {razas.map((raza, index) => (
                  <option key={index} value={raza}>
                    {raza}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="addpet">
            <div className="input-boxa">
              <label className="titulos">Nombre del dueño:</label>

              <input
                type="text"
                value={dueño}
                onChange={(e) => setDueño(e.target.value)}
                required
                placeholder="Ingresar nombre del dueño"
              />
            </div>
            <div className="input-boxa">
              <label className="titulos">Tratamiento:</label>

              <input
                type="tel"
                id="tratamiento"
                name="tratamiento"
                placeholder="Ingresar tratamiento"
              />
            </div>
            <div className="input-boxa">
              <label className="titulos">Síntomas:</label>
              <textarea
                id="sintomas"
                value={sintomas}
                onChange={handleChange}
                placeholder="Escribe aquí los síntomas"
              />
            </div>
            <div className="boton">
              <button className="uno" type="submit">
                Agregar
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
export default AddPet;

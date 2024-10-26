import React, { useEffect, useState } from "react";
import "./pets.css"; //Estilos
import { Link } from "react-router-dom"; //Rutas
import { GoHome, GoSearch, GoGear } from "react-icons/go";
import { PiPawPrint } from "react-icons/pi";
import { IoIosAdd } from "react-icons/io";

const Pets: React.FC = () => {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    //Hacer la solicitud al backend cuando el componente se muestra
    const fetchMascotas = async () => {
      try {
        const response = await fetch("http://localhost:3000/pet/allpets");
        const data = await response.json();
        setMascotas(data); //Guardar las mascotas en el estado
      } catch (error) {
        console.error("Error al obtener las mascotas:", error);
      }
    };

    fetchMascotas();
  }, []); //Realizar la solicitud una sola vez

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
        <h1 className="tp">Lista de Mascotas</h1>
        <table className="listapets">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Especie</th>
              <th>Raza</th>
              <th>Tratamiento</th>
            </tr>
          </thead>
          <tbody>
            {mascotas.map((mascota: any) => (
              <tr key={mascota.idmascota}>
                <td>{mascota.nombre}</td>
                <td>{mascota.edad}</td>
                <td>{mascota.especie}</td>
                <td>{mascota.raza}</td>
                <td>{mascota.tratamiento}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Link to="/AddPet" className="botonadd">
          <IoIosAdd className="add" />
          <button className="dirigir">
            <label>Agregar mascota</label>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Pets;

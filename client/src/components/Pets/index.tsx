import React, { useEffect, useState } from "react";
import "./pets.css"; //Estilos
import { Link } from "react-router-dom"; //Rutas
import { GoHome, GoSearch, GoGear } from "react-icons/go";
import { PiPawPrint } from "react-icons/pi";

const Pets: React.FC = () => {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    // Hacer la solicitud al backend cuando el componente se monta
    const fetchMascotas = async () => {
      try {
        const response = await fetch("http://localhost:3000/pet/allpets"); // URL de tu backend
        const data = await response.json();
        setMascotas(data); // Guardar las mascotas en el estado
      } catch (error) {
        console.error("Error al obtener las mascotas:", error);
      }
    };

    fetchMascotas();
  }, []); // El array vacío asegura que la solicitud solo se haga una vez, al montar el componente

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
              <th>ID</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Especie</th>
              <th>Raza</th>
              <th>Tratamiento</th>
            </tr>
          </thead>
          <tbody>
            {mascotas.map((mascota: any) => (
              <tr key={mascota.id}>
                <td>{mascota.idmascota}</td>
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
    </div>
  );
};

export default Pets;

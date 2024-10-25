//index.tsx
import React, { useEffect, useState } from "react";
import "./home.css"; //Estilos
import { Link } from "react-router-dom"; //Rutas
import { GoHome, GoSearch, GoGear } from "react-icons/go";
import { PiPawPrint } from "react-icons/pi";
import { TbDatabaseSearch } from "react-icons/tb";
import { MdOutlineAddToPhotos, MdFolderOpen } from "react-icons/md";

const Home: React.FC = () => {
  const [fullname, setFullname] = useState<string | null>(null);

  useEffect(() => {
    // Recuperar el nombre completo desde el localStorage
    const storedFullname = localStorage.getItem("fullname");
    setFullname(storedFullname);
  }, []);
  return (
    <div className="home-box">
      <div className="headerh">
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
      <div className="wrapperh">
        <div className="welcomeh">
          <p className="bienvenida">Bienvenido/a {fullname}</p>
        </div>
        <div className="cards">
          <div>
            <Link to="/Pets" className="card">
              <MdOutlineAddToPhotos className="iconlist" />
              <button type="button" name="newmascota" className="botoncard">
                <label className="titulos">Agregar una nueva mascota: </label>
                Registra por primera vez una mascota
              </button>
            </Link>
          </div>

          <div>
            <Link to="/Tratamiento" className="card">
              <MdFolderOpen className="iconlist" />
              <button type="button" name="newtratamiento" className="botoncard">
                <label className="titulos">
                  Registrar un nuevo tratamiento:{" "}
                </label>
                Añade un tratamiento realizado en una mascota registrada
              </button>
            </Link>
          </div>

          <div>
            <Link to="/Database" className="card">
              <TbDatabaseSearch className="iconlist" />
              <button type="button" name="basedatos" className="botoncard">
                <label className="titulos">Base de datos: </label>
                Accede a la base de datos
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

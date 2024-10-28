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
    //Recuperar el nombre del usuario
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
                <label className="titulos">Visualizar mascotas: </label>
                Accede al registro de mascota y agrega nuevas mascotas
              </button>
            </Link>
          </div>

          <div>
            <Link to="/Tratamiento" className="card">
              <MdFolderOpen className="iconlist" />
              <button type="button" name="newtratamiento" className="botoncard">
                <label className="titulos">Registrar tratamiento: </label>
                Añade un tratamiento realizado a una mascota registrada
              </button>
            </Link>
          </div>

          <div>
            <Link to="/Fact" className="card">
              <TbDatabaseSearch className="iconlist" />
              <button type="button" name="factura" className="botoncard">
                <label className="titulos">Generar factura: </label>
                Genera facturas a partir de los registros
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

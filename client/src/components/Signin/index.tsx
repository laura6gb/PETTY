import React, { useState } from "react";
import "./signin.css"; //Estilos
import useAuth from "../../hooks/useAuth"; // Hook para la autenticación
import { Link } from "react-router-dom"; //Rutas

const Signin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const { signin, loading, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await signin(nombre, email, password);
    if (response) {
      alert(response.message);
    }
  };

  return (
    <div className="signin-box">
      {
        //Contenedor interfaz completa
      }
      <div className="logor">
        {
          //Bloque 1, con logo
        }
        <img src="src\assets\logovert.png" />
      </div>
      <div className="wrapperr">
        {
          //Bloque 2, con formulario y demás contenido
        }
        <h1>Registro</h1>
        <form onSubmit={handleSubmit} className="signin-form">
          <div className="formr">
            <div className="input-boxr">
              {
                //Input para nombre
                //Campo obligatorio
              }
              <label>Nombre</label>
              <input
                type="text"
                placeholder="Ingresar nombre completo"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
            <div className="input-boxr">
              {
                //Input para email
                //Campo obligatorio
              }
              <label>Email</label>
              <input
                type="email"
                placeholder="Ingresar correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-boxr">
              {
                //Input para contraseña
                //Campo obligatorio
              }
              <label>Password</label>
              <input
                type="password"
                placeholder="Ingresar contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="uno" disabled={loading}>
              {
                //Boton para enviar formulario e información de nuevo usuario
              }
              {loading ? "Cargando..." : "Crear"}
            </button>
            <button type="reset" className="dos">
              Cancelar
            </button>
          </div>
        </form>
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Signin;

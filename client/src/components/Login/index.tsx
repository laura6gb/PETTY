import React, { useState } from "react";
import "./login.css"; //Estilos
import useAuth from "../../hooks/useAuth"; //Hook para la autenticación
import { Link } from "react-router-dom"; //Rutas

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await login(email, password);
    if (response) {
      alert(response.message);
    }
  };

  return (
    <div className="login-box">
      {
        //Contenedor interfaz completa
      }
      <div className="logo">
        {
          //Bloque 1, con logo
        }
        <img src="src\assets\logovert.png" />
      </div>
      <div className="wrapper">
        {
          //Bloque 2, con formulario y demás contenido
        }

        <form onSubmit={handleSubmit} className="forml">
          <h1>Iniciar sesión</h1>
          {
            //Formulario de inicio de sesion
          }
          <div className="input-box">
            {
              //Input para email o usuario
              //Campo obligatorio
            }
            <label>Correo electrónico:</label>
            <input
              type="email"
              value={email}
              placeholder="Ingresar usuario o correo"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            {
              //Input para contraseña
              //Campo obligatorio
            }
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              placeholder="Ingresar contraseña"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="remember-forgot">
            {
              //Checkbox para almacenar usuario y contraseña
            }
            <label>
              <input type="checkbox" />
              Recordar mi usuario
            </label>
            <a href="#">Olvidé mi contraseña</a>
            {
              //Enlace para recuperar credenciales
            }
          </div>
          <button type="submit" className="uno" disabled={loading}>
            {loading ? "Cargando..." : "Ingresar"}
            {
              //Boton para enviar formulario e iniciar sesión
              //Corroborar credenciales
            }
          </button>
          <button type="reset" className="dos">
            {
              //Boton para cancelar, resetea todo lo ingresado
            }
            Cancelar
          </button>
          <div className="register-link">
            {
              //Redireccionamiento a página de registro de usuario
            }
            <p>
              ¿No tiene una cuenta? <Link to="/SignIn">Crear usuario</Link>
            </p>
          </div>
        </form>
      </div>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Login;

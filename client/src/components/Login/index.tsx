import React, { useState } from "react";
import "./login.css"; // Estilos
import useAuth from "../../hooks/useAuth"; // Hook para la autenticación
import { Link, useNavigate } from "react-router-dom"; // Rutas

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Almacenar el nombre completo del usuario en localStorage
        localStorage.setItem("fullname", data.fullname);
        alert(data.message);
        // Redirigir al usuario a la página de inicio
        navigate("/home");
      } else {
        alert(data.message); // Mostrar mensaje de error
      }
    } catch (error) {
      alert("Error en la conexión con el servidor");
    }
  };

  return (
    <div className="login-box">
      <div className="logo">
        <img src="src/assets/logovert.png" />
      </div>
      <div className="wrapper">
        <form onSubmit={handleSubmit} className="forml">
          <h1>Iniciar sesión</h1>
          <div className="input-box">
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
            <label>
              <input type="checkbox" />
              Recordar mi usuario
            </label>
            <a href="#">Olvidé mi contraseña</a>
          </div>
          <div className="boton">
            <button type="submit" className="uno" disabled={loading}>
              {loading ? "Cargando..." : "Ingresar"}
            </button>
            <button type="reset" className="dos">
              Cancelar
            </button>
          </div>
          <div className="register-link">
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

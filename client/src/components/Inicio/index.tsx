import "./inicio.css";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div className="Inicio-box">
      <div className="header">
        {
          //Encabezado con logo y botón de menú
        }
        <img src="src\assets\logohor.png" />
      </div>
      <div className="welcome">
        {
          //Sección de bienvenida a los usuarios
          //Título y subtítulo
        }
        <div className="welcome-t">
          <h1>Bienvenido a PETTY</h1>
          <h2>Tu nuevo espacio de trabajo dedicado a la veterinaria</h2>
        </div>
      </div>
      <div className="wrapperx">
        {
          //Sección de acceso con botones de inicio de sesion y registro
        }
        <h1>Registra tu clínica y disfruta de los beneficios</h1>
        <div className="access-box">
          <div className="login-button">
            {
              //Botón redireccionamiento a Inicio de sesión
            }
            <label className="titulos">¿Ya tienes una cuenta?:</label>
            <Link to="/Login">
              <button type="button">Iniciar sesión</button>
            </Link>
          </div>

          <div className="signin-button">
            {
              //Botón redireccionamiento a registro de usuario
            }
            <label className="titulos"> Crea tu nueva cuenta:</label>
            <Link to="/Signin">
              <button type="button">Registrar usuario</button>
            </Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
//Export componente de página de inicio
export default Inicio;

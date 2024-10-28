import React, { useEffect, useState } from "react";
import "./fact.css"; //Estilo
import { Link } from "react-router-dom"; //Rutas
import { GoHome, GoSearch, GoGear } from "react-icons/go";
import { PiPawPrint } from "react-icons/pi";

interface Tratamiento {
  idtratamiento: number;
  nombre: string;
  mascota: string;
  precio: number;
  detalles: string;
  fecha: string;
}

const Fact: React.FC = () => {
  const [tratamientos, setTratamientos] = useState<Tratamiento[]>([]);
  const [selectedTratamiento, setSelectedTratamiento] =
    useState<Tratamiento | null>(null);

  useEffect(() => {
    const fetchTratamientos = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/treatment/alltreats"
        );
        const data = await response.json();
        setTratamientos(data);
      } catch (error) {
        console.error("Error al obtener los tratamientos:", error);
      }
    };
    fetchTratamientos();
  }, []);

  //Set de la selección
  const handleSelectTratamiento = (tratamiento: Tratamiento) => {
    setSelectedTratamiento(tratamiento);
  };

  //Imprimir en PDF la factura seleccionada
  const handlePrintFactura = () => {
    if (selectedTratamiento) {
      const facturaContent = `
        PETTY
        Factura Electrónica
        ----------------------
        Nombre del Tratamiento: ${selectedTratamiento.nombre}
        Nombre de la mascota: ${selectedTratamiento.mascota}
        Precio: $${selectedTratamiento.precio}
        Detalles: ${selectedTratamiento.detalles}
        Fecha: ${selectedTratamiento.fecha}
        ----------------------
        Agredecemos su visita, ¡vuelva pronto!
      `;
      const printWindow = window.open("", "PrintFactura");
      if (printWindow) {
        printWindow.document.write(`<pre>${facturaContent}</pre>`);
        printWindow.document.close();
        printWindow.print();
      }
    }
  };

  return (
    <div className="fact-box">
      <div className="headerp">
        <div className="icon">
          <img id="logo" src="src/assets/logohor.png" />
          <Link to="/Home" id="home">
            <GoHome />
          </Link>
          <Link to="" id="search">
            <GoSearch />
          </Link>
          <Link to="/fact" id="pet">
            <PiPawPrint />
          </Link>
          <Link to="" id="config">
            <GoGear />
          </Link>
        </div>
      </div>

      <div className="wrapperf">
        <h1 className="tp">Lista de Tratamientos</h1>
        <table className="listafact">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Mascota</th>
              <th>Precio</th>
              <th>Detalles</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {tratamientos.map((tratamiento) => (
              <tr
                key={tratamiento.idtratamiento}
                onClick={() => handleSelectTratamiento(tratamiento)}
              >
                <td>{tratamiento.nombre}</td>
                <td>{tratamiento.mascota}</td>
                <td>{tratamiento.precio}</td>
                <td>{tratamiento.detalles}</td>
                <td>{tratamiento.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedTratamiento && (
          <div className="factura">
            <h1>Factura Seleccionada</h1>
            <p>
              <strong>Nombre del Tratamiento:</strong>{" "}
              {selectedTratamiento.nombre}
            </p>
            <p>
              <strong>Mascota:</strong> {selectedTratamiento.mascota}
            </p>
            <p>
              <strong>Precio:</strong> ${selectedTratamiento.precio}
            </p>
            <p>
              <strong>Detalles:</strong> {selectedTratamiento.detalles}
            </p>
            <p>
              <strong>Fecha:</strong> {selectedTratamiento.fecha}
            </p>
            <div>
              <button className="botonprint" onClick={handlePrintFactura}>
                Imprimir factura
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Fact;

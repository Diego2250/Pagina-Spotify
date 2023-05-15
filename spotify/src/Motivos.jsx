import "./Motivos.css";
import React from "react";

function Motivos() {
  return (
    <div className="containerMotivos">
      <h2 className="tituloMotivos">¿Por qué cambiarse a Premium?</h2>
      <div className="rowMotivos">
        <div className="columnMotivos">
          <div className="LogoRazon Razon1Logo" />
          <div className="Razon1Texto">
            <span className="RazonTitulo">Descarga tu música.</span>
            <br />
            <span className="RazonDescripcion">
              Escúchala desde cualquier lugar.
            </span>
          </div>
        </div>
        <div className="columnMotivos">
          <div className="LogoRazon Razon2Logo" />
          <div className="Razon2Texto">
            <span className="RazonTitulo">Escucha música sin anuncios.</span>
            <br />
            <span className="RazonDescripcion">
              Disfruta de tu música sin
              <br /> interrupciones.
            </span>
          </div>
        </div>
        <div className="columnMotivos">
          <div className="LogoRazon Razon3Logo" />
          <div className="Razon3Texto">
            <span className="RazonTitulo">Reproduce lo que quieras.</span>
            <br />
            <span className="RazonDescripcion">
              Incluso en dispositivos móviles.
            </span>
          </div>
        </div>
        <div className="columnMotivos">
          <div className="LogoRazon Razon4Logo" />
          <div className="Razon4Texto">
            <span className="RazonTitulo">
              Salta canciones de forma ilimitada.
            </span>
            <br />
            <span className="RazonDescripcion">Solo pasa a la siguiente.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Motivos;

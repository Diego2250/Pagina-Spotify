import "./Promo.css";
import React from "react";
import Contador from "./Contador";

function Promo() {
  return (
    <div className="containerPromo">
      <div className="rowPromo">
        <div className="columnPromo left">
          <div className="textContainerPromo">
            <h1 className="titlePromo">
              Termina pronto: 0.00 USD por 3 meses de Premium
            </h1>
            <br />
            <br />
            <h2 className="textPromo">
              Disfruta de música sin anuncios y en modo offline, gratis desde
              hoy hasta el 9 de agosto de 2023. Cancela cuando quieras.
            </h2>
            <br />
            <br />
            <h2 className="Contador">
              <Contador fechaLimite="2023-06-15T00:00:00Z" />
            </h2>
            <br />
            <br />
            <button className="buttonPromo" type="submit">
              OBTÉN 3 MESES POR 0.00 USD
            </button>
            <button className="buttonPlanes" type="submit">
              VER PLANES
            </button>
            <br />
            <br />
            <p className="textTerminos">
              Solo para el plan Individual. Después, cuesta 5.99 USD al mes.
              <a
                className="linkPromo"
                href="https://www.spotify.com/legal/premium-promotional-offer-terms"
              >
                Se aplican Términos y Condiciones
              </a>
              . Disponible solo para usuarios que todavía no han probado
              Premium. La oferta termina el 16/05/23.
            </p>
          </div>
        </div>
        <div className="columnPromo right">
          <div className="imagePromo" />
        </div>
      </div>
    </div>
  );
}

export default Promo;

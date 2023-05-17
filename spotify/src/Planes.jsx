import "./Planes.css"
import React from "react"

function Planes() {
  return (
    <div className="planes">
      <div className="planesContainer">
        <div className="planesTitle">
          <h1 className="tituloPlanes">Elige tu plan Premium</h1>
          <span className="subtituloPlanes">
            Escucha sin límites en tu teléfono, tus altavoces y otros
            dispositivos.
          </span>
        </div>
        <div className="planesCards">
          <div className="card primera">
            <div className="cardTitle">
              <div className="mesesGratis">
                <span>3 meses gratis</span>
              </div>
              <br />
              <br />
              <span className="tipo">Individual</span>
              <br />
              <span className="descripcionPlanes">
                Después del período de la oferta, 5.99 USD al mes
              </span>
              <br />
              <span className="descripcionPlanes">1 cuenta</span>
              <hr className="linea" />
              <div className="listaCaracteristicas">
                <svg
                  role="img"
                  focusable="false"
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  aria-label=""
                  className="checkSVG"
                >
                  <polyline
                    points="3.32 12.86 8.9 19.4 20.99 5.26"
                    fill="none"
                    stroke="#181818"
                  />
                </svg>
                <span className="lista">Escucha música sin anuncios</span>
                <br />
                <svg
                  role="img"
                  focusable="false"
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  aria-label=""
                  className="checkSVG"
                >
                  <polyline
                    points="3.32 12.86 8.9 19.4 20.99 5.26"
                    fill="none"
                    stroke="#181818"
                  />
                </svg>
                <span className="lista">
                  Reproduce tus canciones en cualquier lugar, incluso sin
                  conexión
                </span>
                <br />
                <svg
                  role="img"
                  focusable="false"
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  aria-label=""
                  className="checkSVG"
                >
                  <polyline
                    points="3.32 12.86 8.9 19.4 20.99 5.26"
                    fill="none"
                    stroke="#181818"
                  />
                </svg>
                <span className="lista">Reproducción on-demand</span>
              </div>
              <button className="botonPlanes primerBoton" type="submit">
                EMPEZAR
              </button>
              <br />
              <p className="condiciones">
                Solo para el plan Individual. Después, cuesta 5.99 USD al mes.
                <a
                  className="linkPlanes"
                  href="https://www.spotify.com/legal/premium-promotional-offer-terms"
                >
                  Se aplican Términos y Condiciones
                </a>
                . Disponible solo para usuarios que todavía no han probado
                Premium. La oferta termina el 16/05/23.
              </p>
            </div>
          </div>
          <div className="card segunda">
            <div className="cardTitle">
              <div className="mesesGratis">
                <span className="lista">1 mes gratis</span>
              </div>
              <br />
              <br />
              <span className="tipo">Duo</span>
              <br />
              <span className="descripcionPlanes">
                Después del período de la oferta, 7.99 USD al mes
              </span>
              <br />
              <span className="descripcionPlanes">2 cuentas</span>
              <hr className="linea" />
              <div className="listaCaracteristicas">
                <svg
                  role="img"
                  focusable="false"
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  aria-label=""
                  className="checkSVG"
                >
                  <polyline
                    points="3.32 12.86 8.9 19.4 20.99 5.26"
                    fill="none"
                    stroke="#181818"
                  />
                </svg>
                <span className="lista">
                  2 cuentas Premium para parejas que conviven
                </span>
                <br />
                <svg
                  role="img"
                  focusable="false"
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  aria-label=""
                  className="checkSVG"
                >
                  <polyline
                    points="3.32 12.86 8.9 19.4 20.99 5.26"
                    fill="none"
                    stroke="#181818"
                  />
                </svg>
                <span className="lista">
                  Reproducción de música sin anuncios, sin conexión y on-demand
                </span>
              </div>
              <button className="botonPlanes segundoBoton" type="submit">
                EMPEZAR
              </button>
              <br />
              <br />
              <p className="condiciones">
                <a
                  className="linkPlanes"
                  href="https://www.spotify.com/legal/premium-promotional-offer-terms"
                >
                  Se aplican Términos y Condiciones
                </a>
                . El mes gratis no está disponible para los usuarios que ya han
                probado Premium.
              </p>
            </div>
          </div>
          <div className="card tercera">
            <div className="cardTitle">
              <div className="mesesGratis">
                <span className="lista">1 mes gratis</span>
              </div>
              <br />
              <br />
              <span className="tipo">Familiar</span>
              <br />
              <span className="descripcionPlanes">
                Después del período de la oferta, 9.99 USD al mes
              </span>
              <br />
              <span className="descripcionPlanes">Hasta 6 cuentas</span>
              <hr className="linea" />
              <div className="listaCaracteristicas">
                <svg
                  role="img"
                  focusable="false"
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  aria-label=""
                  className="checkSVG"
                >
                  <polyline
                    points="3.32 12.86 8.9 19.4 20.99 5.26"
                    fill="none"
                    stroke="#181818"
                  />
                </svg>
                <span className="listaCaracteristica">
                  6 cuentas Premium para familias que conviven
                </span>
                <br />
                <svg
                  role="img"
                  focusable="false"
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  aria-label=""
                  className="checkSVG"
                >
                  <polyline
                    points="3.32 12.86 8.9 19.4 20.99 5.26"
                    fill="none"
                    stroke="#181818"
                  />
                </svg>
                <span className="lista">Bloquea la música explícita</span>
                <br />
                <svg
                  role="img"
                  focusable="false"
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  aria-label=""
                  className="checkSVG"
                >
                  <polyline
                    points="3.32 12.86 8.9 19.4 20.99 5.26"
                    fill="none"
                    stroke="#181818"
                  />
                </svg>
                <span className="lista">
                  Reproducción de música sin anuncios, sin conexión y on-demand
                </span>
              </div>
              <button className="botonPlanes tercerBoton" type="submit">
                EMPEZAR
              </button>
              <br />
              <p className="condiciones">
                <a
                  className="linkPlanes"
                  href="https://www.spotify.com/legal/premium-promotional-offer-terms"
                >
                  Se aplican Términos y Condiciones
                </a>
                . El mes gratis no está disponible para los usuarios que ya han
                probado Premium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Planes

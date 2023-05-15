import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <div className="containerFooter">
      <div className="rowFooter">
        <div className="columnFooter">
          <a href="https://www.spotify.com/">
            <span className="logoFooter">
              <img
                className="logoFooterImg"
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                alt="Spotify"
              />
            </span>
          </a>
        </div>
        <div className="columnFooter">
          <div className="linksFooter">
            <span className="text text titleFooter">Compañía</span>
            <br />
            <br />
            <span className="text text textFooter">Acerca de</span>
            <br />
            <br />
            <span className="text text textFooter">Empleo</span>
            <br />
            <br />
            <span className="text text textFooter">For the record</span>
          </div>
        </div>
        <div className="columnFooter">
          <span className="text titleFooter">Comunidades</span>
          <br />
          <br />
          <span className="text textFooter">Para Artistas</span>
          <br />
          <br />
          <span className="text textFooter">Desarrolladores</span>
          <br />
          <br />
          <span className="text textFooter">Publicidad</span>
          <br />
          <br />
          <span className="text textFooter">Inversores</span>
          <br />
          <br />
          <span className="text textFooter">Proveedores</span>
          <br />
          <br />
          <span className="text textFooter">Spotify for Work</span>
          <br />
        </div>
        <div className="columnFooter">
          <span className="text titleFooter">Enlaces utiles</span>
          <br />
          <br />
          <span className="text textFooter">Ayuda</span>
          <br />
          <br />
          <span className="text textFooter">Reproductor web</span>
          <br />
          <br />
          <span className="text textFooter">Aplicación móvil gratis</span>
          <br />
        </div>
        <div className="columnFooter">
          <div className="socialiconsFooter">
            <img
              className="socialFooter"
              src="src/assets/social-media.png"
              alt="Social Media"
            />
          </div>
        </div>
      </div>
      <span className="text lastFooter">Guatemala</span>
      <img className="worldFooter" src="src/assets/world.png" alt="" />
      <div className="rowFooter">
        <div className="column2Footer">
          <span className="text otherFooter">Legal</span>
          <span className="text otherFooter"> Centro de privacidad</span>
          <span className="text otherFooter">Politica de privacidad</span>
          <span className="text otherFooter">Cookies</span>
          <span className="text otherFooter">Acerca de los anuncios</span>
          <span className="text copyrightFooter">© 2023 Spotify AB</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;

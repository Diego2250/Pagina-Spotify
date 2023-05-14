import "./Header.css";

function Header() {
  return (
    <div className="headerContainer">
      <div className="rowHeader">
        <div className="columnHeader">
          <span className="logoHeader">
            <img
              className="logoHeaderImg"
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
              alt="Spotify"
            />
          </span>
        </div>
        <div className="columnHeader">
          <span className="opcion">Iniciar sesión</span>
          <span className="opcion">Registrarse</span>
          <span className="separador">|</span>
          <span className="opcion">Descargar</span>
          <span className="opcion">Ayuda</span>
          <span className="opcion">Premium</span>
        </div>
      </div>
    </div>
  );
}

export default Header;

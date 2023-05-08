import './Footer.css'

const Footer = () => {
    return (
            <div className="container">
                <div className='row'>
                    <div className="column">
                        <a href='https://www.spotify.com/'>
                            <span className="logo">
                                <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="Spotify" />
                            </span>
                        </a>
                    </div>
                    <div className="column">
                        <div className="links">
                        <span className='title'>Compañía</span>
                        <br></br>
                        <br></br>
                        <span className='text'>Acerca de</span>
                        <br></br>
                        <br></br>
                        <span className='text'>Empleo</span>
                        <br></br>
                        <br></br>
                        <span className='text'>For the record</span>
                    </div>
                    </div>
                    <div className="column">
                        <span className='title'>Comunidades</span>
                        <br></br>
                        <br></br>
                        <span className='text'>Para Artistas</span>
                        <br></br>
                        <br></br>
                        <span className='text'>Desarrolladores</span>
                        <br></br>
                        <br></br>
                        <span className='text'>Publicidad</span>
                        <br></br>
                        <br></br>
                        <span className='text'>Inversores</span>
                        <br></br>
                        <br></br>
                        <span className='text'>Proveedores</span>
                        <br></br>
                        <br></br>
                        <span className='text'>Spotify for Work</span>
                        <br></br>
                    </div>
                    <div className="column">
                        <span className='title'>Enlaces utiles</span>
                        <br></br>
                        <br></br>
                        <span className='text'>Ayuda</span>
                        <br></br>
                        <br></br>
                        <span className='text'>Reproductor web</span>
                        <br></br>
                        <br></br>
                        <span className='text'>Aplicación móvil gratis</span>
                        <br></br>
                    </div>
                    <div className="column">
                        <div className="socialicons">
                            <img className='social' src="src/assets/social-media.png" alt="Social Media" />
                        </div>
                    </div>
                </div>
                <span className='last'>Guatemala</span>
                <img  className='world' src="src/assets/world.png" alt="" />
                <div className="row">
                    <div className="column2">
                        <span className='other'>Legal</span>
                        <span className='other'> Centro de privacidad</span>
                        <span className='other'>Politica de privacidad</span>
                        <span className='other'>Cookies</span>
                        <span className='other'>Acerca de los anuncios</span>
                        <span className="copyright">© 2023 Spotify AB</span>
                    </div>
                    </div>
        </div>
    )
}

export default Footer;
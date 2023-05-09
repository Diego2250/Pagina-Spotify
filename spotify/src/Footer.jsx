import './Footer.css'

const Footer = () => {
    return (
            <div className="containerFooter">
                <div className='rowFooter'>
                    <div className="columnFooter">
                        <a href='https://www.spotify.com/'>
                            <span className="logoFooter">
                                <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="Spotify" />
                            </span>
                        </a>
                    </div>
                    <div className="columnFooter">
                        <div className="linksFooter">
                        <span className='titleFooter'>Compañía</span>
                        <br></br>
                        <br></br>
                        <span className='textFooter'>Acerca de</span>
                        <br></br>
                        <br></br>
                        <span className='textFooter'>Empleo</span>
                        <br></br>
                        <br></br>
                        <span className='textFooter'>For the record</span>
                    </div>
                    </div>
                    <div className="columnFooter">
                        <span className='titleFooter'>Comunidades</span>
                        <br></br>
                        <br></br>
                        <span className='textFooter'>Para Artistas</span>
                        <br></br>
                        <br></br>
                        <span className='textFooter'>Desarrolladores</span>
                        <br></br>
                        <br></br>
                        <span className='textFooter'>Publicidad</span>
                        <br></br>
                        <br></br>
                        <span className='textFooter'>Inversores</span>
                        <br></br>
                        <br></br>
                        <span className='textFooter'>Proveedores</span>
                        <br></br>
                        <br></br>
                        <span className='textFooter'>Spotify for Work</span>
                        <br></br>
                    </div>
                    <div className="columnFooter">
                        <span className='titleFooter'>Enlaces utiles</span>
                        <br></br>
                        <br></br>
                        <span className='textFooter'>Ayuda</span>
                        <br></br>
                        <br></br>
                        <span className='textFooter'>Reproductor web</span>
                        <br></br>
                        <br></br>
                        <span className='textFooter'>Aplicación móvil gratis</span>
                        <br></br>
                    </div>
                    <div className="columnFooter">
                        <div className="socialiconsFooter">
                            <img className='socialFooter' src="src/assets/social-media.png" alt="Social Media" />
                        </div>
                    </div>
                </div>
                <span className='lastFooter'>Guatemala</span>
                <img  className='worldFooter' src="src/assets/world.png" alt="" />
                <div className="rowFooter">
                    <div className="column2Footer">
                        <span className='otherFooter'>Legal</span>
                        <span className='otherFooter'> Centro de privacidad</span>
                        <span className='otherFooter'>Politica de privacidad</span>
                        <span className='otherFooter'>Cookies</span>
                        <span className='otherFooter'>Acerca de los anuncios</span>
                        <span className="copyrightFooter">© 2023 Spotify AB</span>
                    </div>
                </div>
        </div>
    )
}

export default Footer;
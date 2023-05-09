import './Promo.css'

const Promo = () => {
    return (
        <div className="containerPromo">
            <div className="rowPromo">
                <div className="columnPromo left">
                    <div className="textContainerPromo">
                        <h1 className="titlePromo">Termina pronto: 0.00 USD por 3 meses de Premium</h1>
                        <br></br>
                        <br></br>
                        <h2 className="textPromo">No te pierdas la música sin anuncios, la reproducción en modo offline y mucho más. Cancela cuando quieras.</h2>
                        <br></br>
                        <br></br>
                        <h2 className="textPromo">La oferta termina en 8 d: 0 h: 57 min</h2>
                        <br></br>
                        <button className="buttonPromo">OBTÉN 3 MESES POR 0.00 USD</button>
                        <button className="buttonPlanes">VER PLANES</button>
                        <br></br>
                        <br></br>
                        <p className="textTerminos">Solo para el plan Individual. Después, cuesta 5.99 USD al mes. Se aplican Términos y Condiciones. Disponible solo para usuarios que todavía no han probado Premium. La oferta termina el 16/05/23.</p>
                    </div>
                </div>
                <div className="columnPromo right">
                    <div className="imagePromo">
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Promo
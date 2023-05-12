import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Promo from './Promo.jsx'
import Motivos from './Motivos.jsx'
import Planes from './Planes.jsx'
import './HomePage.css'

const HomePage = () => {
  return (
    <>
      <div className='main'>
        <Header />
        <div>
          <Promo />
        </div>
        <div>
          <Motivos />
        </div>
        <div>
          <Planes />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default HomePage

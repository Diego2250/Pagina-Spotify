import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Promo from './Promo.jsx'

const HomePage = () => {
  return (
    <>
      <div className='main'>
        <Header />
        <div>
          <Promo />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default HomePage

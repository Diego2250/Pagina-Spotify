import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Promo from "./Promo"
import Motivos from "./Motivos"
import Planes from "./Planes"
import "./HomePage.css"

function HomePage() {
  return (
    <div className="main">
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
  )
}

export default HomePage

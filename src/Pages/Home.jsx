import React from 'react'
import Banner from '../Components/Banner/Banner'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

function Home() {
  return (
    <div className="Home">
        <Header/>
        <Banner/>
        <Footer/>
    </div>
  )
}

export default Home
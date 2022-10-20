import React from 'react'
import SectionContactF from '../ContactFooter/SectionContactF'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import SectionOneHome from './SectionOneHome'
import SectionTwoHome from './SectionTwoHome'


const Home = () => {
  return (
    <div className='root'>
        <Header />
        <main className='blogs-mail'>
        <SectionOneHome />
        <SectionTwoHome />
        <SectionContactF />
        <Footer />
        </main>
    </div>
  )
}

export default Home
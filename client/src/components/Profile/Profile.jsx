import React from 'react'
import SectionContactF from '../ContactFooter/SectionContactF'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import SectionOneProf from './SectionOneProf'
import SectionTwoProf from './SectionTwoProf'

const Profile = () => {
  return (
    <div className='root'>
        <Header />
        <main>
            <SectionOneProf />
            <SectionTwoProf />
            <SectionContactF />
        </main>
        <Footer />
    </div>
  )
}

export default Profile
import React from 'react'
import SectionContactF from '../ContactFooter/SectionContactF'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import SectionOnePD from './SectionOnePD'


const ProjectDetail = () => {
  return (
    <div className='root'>
    <Header />
    <main>
        <SectionOnePD />
        <SectionContactF />
    </main>
    <Footer />
    </div>
  )
}

export default ProjectDetail
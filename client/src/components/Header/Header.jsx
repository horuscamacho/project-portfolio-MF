import React from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import '../font/flaticon_mycollection.css'

const Header = () => {
  return (
    <header>
        <SectionOne />
        <nav>
        <SectionTwo />
        </nav>
    </header>
  )
}

export default Header
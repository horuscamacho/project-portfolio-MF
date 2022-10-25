import React from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'


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
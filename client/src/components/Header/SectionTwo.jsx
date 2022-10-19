import React from 'react'
import logo from '../../assets/milogo.svg'

const SectionTwo = () => {
  return (
    <>
    <section className='nav-logo-container'>
        <a href='/'><img src={logo} alt='Logo' /></a>
    </section>
    <section className='profile-link'>
        <a href='/profile'>Sobre mi</a>
    </section>
    </>
  )
}

export default SectionTwo
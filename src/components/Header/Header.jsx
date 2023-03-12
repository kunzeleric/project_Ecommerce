import React from 'react'
import './index.scss';
import Logo from '../../assets/dnc-logo.png';

const Header = () => {
  return (
    <header>
        <img src={Logo} alt="Logo DNC" />
    </header>
  )
}

export default Header
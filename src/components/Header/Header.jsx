import Logo from '../../assets/dnc-logo.png';
import './index.scss';

const Header = () => {
  return (
    <header className="header">
        <img src={Logo} alt="Logo DNC" />
    </header>
  )
}

export default Header
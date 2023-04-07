import Logo from '../../assets/dnc-logo.png';
import Cart from '../../assets/cart-logo.png';
import SearchBar from '../SearchBar/SearchBar';
import './index.scss';
import { Link } from 'react-router-dom';
import { clickMenu } from './ClickMenu';


const HeaderDetailed = () => {
  return (
    <>
    <header className="headerdetail">
      <div className="headerdetail__top">
        <Link to='/home'><img className="headerdetail__top-logo" src={Logo} alt="Logo DNC" /></Link>
        <SearchBar/>
        <img className="headerdetail__top-cart" src={Cart} alt="Cart Shopping" />
      </div>
      <span className="material-symbols-outlined" onClick={clickMenu}>menu</span>
      <div className="headerdetail__bottom">
        <nav className="headerdetail__bottom-nav">
          <ul>
            <li>Novidades</li>
            <li>Jogos</li>
            <li>Video Games</li>
            <li>Mesas Gamer</li>
            <li>Promoções</li>
            <li>Atendimento</li>
          </ul>
        </nav>
      </div>
    </header>
    </>
  )
}

export default HeaderDetailed
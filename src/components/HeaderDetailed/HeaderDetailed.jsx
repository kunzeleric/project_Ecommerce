import Logo from '../../assets/dnc-logo.png';
import Cart from '../../assets/cart-logo.png';
import SearchBar from '../SearchBar/SearchBar';
import './index.scss';


const HeaderDetailed = () => {
  return (
    <>
    <header className="headerdetail">
      <div className="headerdetail__top">
        <img className="headerdetail__top-logo" src={Logo} alt="Logo DNC" />
        <SearchBar/>
        <img className="headerdetail__top-cart" src={Cart} alt="Cart Shopping" />
      </div>
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
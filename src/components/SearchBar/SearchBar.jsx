import Search from '../../assets/search-logo.png';
import './index.scss';


const SearchBar = () => {
  return (
    <div className="searchbar">
      <img className="searchbar__icon" src={Search} alt="Search Icon" />
      <input type="text" placeholder='O que você está procurando?' />
    </div>
  )
}

export default SearchBar
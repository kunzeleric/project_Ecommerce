import './index.scss'
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import banner4 from "../../assets/banner4.jpeg";

const Banner = () => {
  return (
    <div className="carrosel">
        <div className="container-banner">
            <img src={banner1} alt='banner 1' />
            <img src={banner2} alt='banner 2' />
            <img src={banner3} alt='banner 3' />
            <img src={banner4} alt='banner 4' />
        </div>
    </div>
  )
}

export default Banner;
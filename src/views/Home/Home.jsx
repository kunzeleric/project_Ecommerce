import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import HeaderDetailed from "../../components/HeaderDetailed/HeaderDetailed";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./index.scss";

const Home = ({ data }) => {
  return (
    <>
      <div className="home">
        <HeaderDetailed />
        <Banner />
        <div className="home__product">
          {data.map((product) => (
            <ProductCard data={product} key={product.id} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;

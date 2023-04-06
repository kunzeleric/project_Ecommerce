import { Link } from "react-router-dom";
import "./index.scss";

const ProductCard = ({ data }) => {
  return (
    <div className="product-card">
      <div className="product-card-flip">
        <div className="product-card__img">
          <img
            className="product-card__img"
            src={data.imgPath}
            alt={data.title}
          />
        </div>
        <div className="product-card__details">
          <p className="product-card__details-title">{data.title}</p>
          <button className="product-card__details-button">
            <Link to={`/product/${data.id}`}>Ver Mais</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import './index.scss';
import HeaderDetailed from '../../components/HeaderDetailed/HeaderDetailed';
import Footer from '../../components/Footer/Footer';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import { useParams } from 'react-router-dom';

const Product = ({data}) => {
  const { productId } = useParams();
  const selectedProduct = data.find((product) => product.id == productId);

  return (
    <div className="product">
      <HeaderDetailed/>
      <ProductDetail data={selectedProduct}/>
      <Footer/>
    </div>
  )
}

export default Product
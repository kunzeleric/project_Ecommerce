import './index.scss';
import cartButton from '../../assets/cart-button.png';
import { useState } from 'react';
import Modal from '../Modal/Modal.jsx';

const ProductDetail = ({data}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="product-detail">
      <div className="left">
        <div className="left__top">
        <img className="left__top-logo" src={data.imgPathDetail } alt={data.title} />
        <p className="left__top-title">{data.title}</p>
        </div>
        <div className="left__bottom">
          <h2 className='left__bottom-title'>Descrição</h2>
          <p className='left__bottom-description'>{data.description}</p>
        </div>
      </div>
      <div className="right">
        <h1 className='right__title'>{data.title}</h1>
        <div className="right__detail">
          <h2 className="right__detail-price">{data.price}</h2>
          <p className="right__detail-color">
            Cor: {" "}
            {data.colors.length === 1
            ? data.colors.map((color, index) => (
              <span key={index}>{color}</span>
            ))
            : data.colors.map((color, index) => 
              index + 1 == data.colors.length
              ? <span key={index}>{color}</span>
              : <span key={index}>{color}, </span>
            )
            }
          </p>
          <div className="right__detail-colorblock">
            {data.colors.map((color, index) => (
              <span 
              style={{
              padding: "1em", backgroundColor: color, 
              borderRadius:"8px",
              border: "1px solid black"}} key={index}>
              </span>
            ))}
          </div>
        </div>
        <button onClick={() => setIsModalVisible(true)}
        className="right__button">
        <img src={cartButton} alt="Cart" />
        Adicionar ao carrinho
        </button>
        {
          isModalVisible ? <Modal onClose={() => setIsModalVisible(false)} data={data}/>
          : null
        }
      </div>
    </div>
  )
}

export default ProductDetail
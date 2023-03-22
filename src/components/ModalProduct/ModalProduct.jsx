import "./index.scss";
import ModalPayment from "../ModalPayment/ModalPayment";
import { Link } from "react-router-dom";
import { useState } from "react";

const ModalProduct = ({ onClose = () => {}, data }) => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="modal">
      <div className="container">
        <button onClick={onClose} className="close"></button>
        <div className="container__main">
          <div className="container__main-left">
            <div className="product-card-info">
              <img src={data.imgPathDetail} alt={data.title} />
            </div>
            <p>{data.description}</p>
          </div>
          <div className="container__main-right">
            <div className="container__info">
              <h3>Meu Carrinho</h3>
              <p className="container__info-title">{data.title}</p>
              <h2>{data.price}</h2>
              <p className="right__detail-color">
                Cor: {" "}
                {data.colors.length === 1
                  ? data.colors.map((color, index) => (
                      <span key={index}>{color}</span>
                    ))
                  : data.colors.map((color, index) =>
                      index + 1 == data.colors.length ? (
                        <span key={index}>{color}</span>
                      ) : (
                        <span key={index}>{color}, </span>
                      )
                    )}
              </p>
              <div className="right__detail-colorblock">
                {data.colors.map((color, index) => (
                  <span
                    style={{
                      padding: "0.8vw",
                      backgroundColor: color,
                      borderRadius: "8px",
                      border: "1px solid black",
                    }}
                    key={index}
                  ></span>
                ))}
              </div>
            </div>
            <div className="container__product-buttons">
              <button className="continuar"><Link to='/home'>Continuar Comprando</Link></button>
              <button onClick={() => setIsModalVisible(true)} className="finalizar">Finalizar Compra</button>
            </div>
            {
          isModalVisible ? <ModalPayment onClose={() => setIsModalVisible(false)} data={data}/>
          : null
        }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;

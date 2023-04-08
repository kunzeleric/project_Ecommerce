import "./index.scss";
import { changeModal } from "./Modal";
import { Link } from "react-router-dom";

const ModalProduct = ({ onClose = () => {}, data }) => {
  return (
    <>
      <div className="modal" id="product">
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
                  Cor:{" "}
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
                <button className="continuar">
                  <Link to="/home">Continuar Comprando</Link>
                </button>
                <button onClick={changeModal} className="finalizar">
                  Finalizar Compra
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal" id="payment">
        <div className="container" >
          <button onClick={onClose} className="close"></button>
          <div className="container__payment">
            <h1>Finalizar compra:</h1>
            <form className="container__payment-form" action="">
              <label htmlFor="username">Digite seu nome:</label>
              <input id="username" type="text" placeholder="Nome Completo" />
              <label htmlFor="usercpf">Digite seu CPF:</label>
              <input id="usercpf" type="text" placeholder="Apenas números" />
              <label htmlFor="useraddress">Endereço:</label>
              <input id="useraddress" type="text" placeholder="*********" />
              <label htmlFor="userpayment">Forma de Pagamento:</label>
              <input id="userpayment" type="text" placeholder="*********" />
            </form>
            <button className="container__payment-button">
              <Link to="/home">Confirmar Pedido</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalProduct;

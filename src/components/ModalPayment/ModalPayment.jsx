import "./index.scss";
import { Link } from "react-router-dom";

const ModalPayment = ({ onClose = () => {}, data }) => {
  return (
    <div className="modal-payment">
      <div className="container">
        <button onClick={onClose} className="close"></button>
        <div className="container__payment">
          <h1>Finalizar compra:</h1>
          <form className="container__payment-form" action="">
            <label htmlFor="username">Digite seu nome:</label>
            <input id="username" type="text" placeholder="Nome Completo"/>
            <label htmlFor="usercpf">Digite seu CPF:</label>
            <input id="usercpf" type="text" placeholder="Apenas números" />
            <label htmlFor="useraddress">Endereço:</label>
            <input id="useraddress" type="text" placeholder="*********"/>
            <label htmlFor="userpayment">Forma de Pagamento:</label>
            <input id="userpayment" type="text" placeholder="*********"/>
          </form>
          <button className="container__payment-button"><Link to='/home'>Confirmar Pedido</Link></button>
        </div>
      </div>
    </div>
  );
};

export default ModalPayment;

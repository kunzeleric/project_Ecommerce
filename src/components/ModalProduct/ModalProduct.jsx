import "./index.scss";

const ModalProduct = ({ onClose = () => {}, data }) => {
  return (
    <div className="modal">
      <div className="container">
        <button onClick={onClose} className="close"></button>
        <div className="container__main">
          <div className="container__main-left">
            <div className="product-card">
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
              <button className="continuar">Continuar Comprando</button>
              <button className="finalizar">Finalizar Compra</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;

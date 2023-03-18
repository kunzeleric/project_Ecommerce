import logo from "../../assets/dnc-logo2.png";
import './index.scss';
const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Logo DNC" />
      <p>
        Preços e condições de pagamento exclusivos para compras via internet e
        podem variar nas lojas físicas. <br></br><strong>Para mais informações,</strong> entre em contato:
        (011) 1111-2222.
      </p>
    </footer>
  );
};

export default Footer;

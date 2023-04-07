import React from "react";
import { Link } from "react-router-dom";
import SubmitVerifier from "./SubmitVerifier";
import LoginVerifier from "./LoginVerifier";
import "./index.scss";

const LoginForm = () => {
  return (
    <section className="login">
      <div className="login__instructions">
        <p className="login__instructions-main">
          Acesse com seu login ou cadastre-se!
        </p>
        <p className="login__instructions-aux">
          Você pode entrar com o seu CPF.
        </p>
      </div>
      <form onSubmit={SubmitVerifier} className="login__area">
        <div className="login__area-field">
          <div className="login__area-fieldInput">
            <input type="text" placeholder=" " onKeyUp={LoginVerifier} />
            <label htmlFor="">Nome do usuário ou CPF</label>
            <p className="verificador" id="name"></p>
          </div>

        </div>
        <div className="login__area-field">
          <div className="login__area-fieldInput">
            <input type="password" placeholder=" " onKeyUp={LoginVerifier} />
            <label htmlFor="">Senha</label>
            <p className="verificador" id="password"></p>
          </div>

        </div>
        <button type="submit" className="login__area-button">
          <Link to="/home">Entrar</Link>
        </button>
        <p className="verificadorGeral"></p>
      </form>
    </section>
  );
};

export default LoginForm;

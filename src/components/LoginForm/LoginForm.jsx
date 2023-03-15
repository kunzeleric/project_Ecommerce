import React from "react";
import { Link } from "react-router-dom";
import SubmitVerifier from "./SubmitVerifier";
import LoginVerifier from "./LoginVerifier";
import './index.scss';


const LoginForm = () => {

  return (
    <section className="login">
      <div className="login__instructions">
        <p className="login__instructions-main">Acesse com seu login ou cadastre-se!</p>
        <p className="login__instructions-aux">Você pode entrar com o seu CPF.</p>
      </div>
      <form onSubmit={SubmitVerifier} className="login__area">
        <div className="login__area-name">
          <label htmlFor="">Digite seu Nome ou CPF:</label>
          <input type="text" placeholder="Nome Completo ou CPF" onKeyUp={LoginVerifier}/>
          <p className="verificador"></p>
        </div>
        <div className="login__area-password">
          <label htmlFor="">Senha:</label>
          <input type="text" placeholder="********" onKeyUp={LoginVerifier}/>
          <p className="verificador"></p>
        </div>
        <button type="submit" className="login__area-button"><Link to='/home'>Entrar</Link></button>
        <p className="verificadorGeral"></p>
      </form>
    </section>
  );
};

export default LoginForm;

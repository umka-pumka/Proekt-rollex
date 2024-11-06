import React from "react";
import { BsTelephone } from "react-icons/bs";
import { TbLogin2 } from "react-icons/tb";

const HeaderTop = ({ openModal }) => {
  return (
    <div className="header_top">
      <div className="contact-info">
        <BsTelephone className="icon" />
        <p>8 (812) 123-45-67</p>
        <p>Работаем 7 дней в неделю</p>
        <p>9:00 — 18:00</p>
      </div>
      <div className="auth-links">
        <TbLogin2 className="icon2" />
        <button onClick={() => openModal("login")} className="login-link">Войти</button>
        <span> / </span>
        <button onClick={() => openModal("register")} className="login-link">Регистрация</button>
      </div>
    </div>
  );
};

export default HeaderTop;

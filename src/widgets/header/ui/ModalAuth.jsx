import React from "react";
import Modal from "../../../components/modal/Modal";
import Login from "../../../pages/user/login/Login";
import Register from "../../../pages/user/regis/Register";

const ModalAuth = ({ activeModal, closeModal }) => {
  return (
    <Modal show={!!activeModal} onClose={closeModal}>
      {activeModal === "login" && <Login openRegisterModal={() => openModal("register")} />}
      {activeModal === "register" && <Register openLoginModal={() => openModal("login")} />}
    </Modal>
  );
};

export default ModalAuth;

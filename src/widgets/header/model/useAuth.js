import { useState } from "react";

export const useAuth = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalType) => setActiveModal(modalType);
  const closeModal = () => setActiveModal(null);

  return { activeModal, openModal, closeModal };
};

import React from "react";
import { default as Popup } from "reactjs-popup";
import { Wrapper } from "./styles";

interface IProps  {
  closeModal: () => void;
  children: React.ReactNode;
  open: boolean;
}
const Modal = ({ closeModal, children, open }: IProps) => {
  return (
    <Popup open={open} onClose={closeModal}>
      <Wrapper>{children}</Wrapper>
    </Popup>
  );
};
export default Modal;

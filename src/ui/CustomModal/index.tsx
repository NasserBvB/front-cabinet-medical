import React from "react";
import { default as CustomModal, Props } from "react-modal";
import { modalStyles } from "./styles";

interface IProps extends Props {
  closeModal: () => void;
  children: React.ReactNode;
}
const Modal = ({ closeModal, children, ...rest }: IProps) => {
  return (
    <CustomModal
    onRequestClose={closeModal}
      style={modalStyles}
      {...rest}
    >
      {children}
    </CustomModal>
  );
};
export default Modal;

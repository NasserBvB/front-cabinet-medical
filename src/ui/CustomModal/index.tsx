import React from "react";
import { default as CustomModal } from "react-modal";
import { modalStyles } from "./styles";

interface IProps {
  open: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}
const Modal = (props: IProps) => {
  return (
    <CustomModal
      isOpen={props.open}
      onRequestClose={props.closeModal}
      style={modalStyles}
    >
      {props.children}
    </CustomModal>
  );
};
export default Modal;

import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Card } from "ui/Card";
import Modal from "ui/CustomModal";
import FabButton from "ui/FabButton";
import Layout from "ui/Layout";
import { Wrappper } from "./styles";
export default function Consultations() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((cur) => !cur);
  };
  const toggleModal = () => {
    setOpen((cur) => !cur);
  };

  return (
    <Layout>
      <Wrappper>
        <Card>Adipisicing qui sint laborum dolore non.</Card>
        <Card>
          Ea minim occaecat aliquip et cillum est dolore occaecat occaecat Lorem
          magna aute.
        </Card>
        <Card>Nostrud officia voluptate fugiat incididunt esse aute.</Card>
        <Card>Mollit consequat nostrud ex duis aliquip enim.</Card>
        <Card>
          Incididunt non consequat do consectetur labore mollit elit proident
          ea.
        </Card>
      </Wrappper>

      <FabButton onClick={handleClick}>
        <AiOutlinePlus size="25px" />
      </FabButton>
      <Modal isOpen={open} closeModal={toggleModal}>
        <p>jhjh</p>
      </Modal>
    </Layout>
  );
}

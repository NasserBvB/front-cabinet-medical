import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Card from "ui/Card";
import Modal from "ui/CustomModal";
import FabButton from "ui/FabButton";
import Layout from "ui/Layout";
import { Wrappper } from "./styles.";
export default function Dashboard() {
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
        <Card>
          Amet aute non laborum exercitation do eu magna aliquip laborum.
        </Card>
        <Card>
          Amet aute non laborum exercitation do eu magna aliquip laborum.
        </Card>
        <Card>
          Amet aute non laborum exercitation do eu magna aliquip laborum.
        </Card>
        <Card>
          Amet aute non laborum exercitation do eu magna aliquip laborum.
        </Card>
        <Card>
          Amet aute non laborum exercitation do eu magna aliquip laborum.
        </Card>
      </Wrappper>

      <FabButton onClick={handleClick}>
        <AiOutlinePlus size="25px" />
      </FabButton>
      <Modal open={open} closeModal={toggleModal}>
        <p>jhjh</p>
      </Modal>
    </Layout>
  );
}

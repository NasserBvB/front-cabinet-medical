import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "ui/CustomModal";
import FabButton from "ui/FabButton";
import Layout from "ui/Layout";
import { IMedicament } from "utils";
import { Header } from "./components/Header";
import { Wrapper } from "./styles";
const meds: IMedicament[] = [
  {
    id: 12,
    forme:
      "Lorem laborum ut ad officia deserunt duis irure eu consequat laborum non et.",
    nom: "Non incididunt eiusmod non pariatur nostrud pariatur.",
  },
  {
    id: 55612,
    forme:
      "Lorem laborum ut ad officia deserunt duis irure eu consequat laborum non et.",
    nom: "Non incididunt eiusmod non pariatur nostrud pariatur.",
  },
  {
    id: 1536,
    forme:
      "Lorem laborum ut ad officia deserunt duis irure eu consequat laborum non et.",
    nom: "Non incididunt eiusmod non pariatur nostrud pariatur.",
  },
  {
    id: 54512,
    forme:
      "Lorem laborum ut ad officia deserunt duis irure eu consequat laborum non et.",
    nom: "Non incididunt eiusmod non pariatur nostrud pariatur.",
  },
  {
    id: 545612,
    forme:
      "Lorem laborum ut ad officia deserunt duis irure eu consequat laborum non et.",
    nom: "Non incididunt eiusmod non pariatur nostrud pariatur.",
  },
  {
    id: 15366655,
    forme:
      "Lorem laborum ut ad officia deserunt duis irure eu consequat laborum non et.",
    nom: "Non incididunt eiusmod non pariatur nostrud pariatur.",
  },
  {
    id: 546554512,
    forme:
      "Lorem laborum ut ad officia deserunt duis irure eu consequat laborum non et.",
    nom: "Non incididunt eiusmod non pariatur nostrud pariatur.",
  },
];
export default function Consultations() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const toggleModal = () => {
    setOpen((cur) => !cur);
  };

  return (
    <Layout>
      <Header />
      <Wrapper>
        {meds &&
          meds.map((item) => {
            return <p> {JSON.stringify(item)} </p>;
          })}
      </Wrapper>
      <FabButton onClick={toggleModal}>
        <AiOutlinePlus size="25px" />
      </FabButton>
      <Modal closeModal={handleClose} open={open}>
        <p>Lhjkghhjh</p>
      </Modal>
    </Layout>
  );
}

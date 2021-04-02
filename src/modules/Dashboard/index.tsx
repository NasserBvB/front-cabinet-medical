import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "ui/CustomModal";
import FabButton from "ui/FabButton";
import Layout from "ui/Layout";
import Filter from "./components/Filter";
import PatientForm from "./components/PatientForm";
export default function Dashboard() {
  const [open, setOpen] = React.useState(false);
  const [cin, setCin] = React.useState("");
  const handleFilter = () => {};
  const toggleModal = () => {
    setOpen((cur) => !cur);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <Layout>
      <Filter cin={cin} setCin={setCin} handleFilter={handleFilter} />

      <FabButton onClick={toggleModal}>
        <AiOutlinePlus size="25px" />
      </FabButton>
      <Modal open={open} closeModal={handleCloseModal}>
        <PatientForm
          type="create"
          handleChange={handleCloseModal}
          handleSubmit={handleFilter}
        />
      </Modal>
    </Layout>
  );
}

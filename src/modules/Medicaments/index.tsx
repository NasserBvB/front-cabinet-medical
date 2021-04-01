import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "ui/CustomModal";
import FabButton from "ui/FabButton";
import Layout from "ui/Layout";
import { IMedicament } from "utils";
import { Header } from "./components/Header";
import Medicament from "./components/Medicament";
import NewMedicament from "./components/NewMedicament";
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

export default function Medicaments() {
  const [openNewMedicament, setOpenNewMedicament] = React.useState(false);
  const [openUpdateMedicament, setOpenUpdateMedicament] = React.useState(false);
  const [selectedMed, setSelctedMed] = React.useState({
    id: -52,
    forme: "",
    nom: "",
  });

  const [newMed, setNewMed] = React.useState({
    id: -52,
    forme: "",
    nom: "",
  });

  // Creation
  const handleChangeNewMed = ({
    currentTarget: { name, value },
  }: React.FormEvent<HTMLInputElement>) => {
    setNewMed({
      ...newMed,
      [name]: value,
    });
  };
  const handleCreate = () => {
    console.log(newMed);
  };;

  // Modification
  const handleChangeUpdateMed = ({
    currentTarget: { name, value },
  }: React.FormEvent<HTMLInputElement>) => {
    setSelctedMed({
      ...selectedMed,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    console.log(selectedMed);
  };

  const handleClose = () => {
    setOpenNewMedicament(false);
  };

  const handleCloseModification = () => {
    setOpenUpdateMedicament(false);
  };

  const toggleCreate = () => {
    setOpenNewMedicament((cur) => !cur);
  };

  const toggleUpdate = (item: Partial<IMedicament>) => {
    setSelctedMed({
      ...selectedMed,
      ...item
    });
    setOpenUpdateMedicament((cur) => !cur);
  };

  const handleDelete = () => {

  }

  return (
    <Layout>
      <Header />
      <Wrapper>
        {meds &&
          meds.map((item) => {
            return (
              <Medicament
                handleDelete={handleDelete}
                handleUpdate={() => toggleUpdate(item)}
                key={item.id}
                {...item}
              />
            );
          })}
      </Wrapper>
      <FabButton onClick={toggleCreate}>
        <AiOutlinePlus size="25px" />
      </FabButton>

      <Modal closeModal={handleClose} open={openNewMedicament}>
        <NewMedicament type="create" handleChange={handleChangeNewMed} {...newMed} handleSubmit={handleCreate} />
      </Modal>

      <Modal closeModal={handleCloseModification} open={openUpdateMedicament}>
        <NewMedicament type='update' handleChange={handleChangeUpdateMed}
          {...selectedMed}
          handleSubmit={handleUpdate}
        />
      </Modal>
    </Layout>
  );
}

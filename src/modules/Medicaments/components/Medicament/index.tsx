import React from "react";
import { AiOutlineDelete, AiOutlineSetting } from "react-icons/ai";
import Button from "ui/Button";
import { Card, CardActions, CardHeader, CardTitle } from "ui/Card";
import Modal from "ui/CustomModal";
import { IMedicament } from "utils";
import { ButtonsSure, Fields } from "./styles";
interface Iprops extends IMedicament {
  handleDelete: () => void;
  handleUpdate: () => void;
}
export default function Medicament(props: Iprops) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle title={props.nom} />
      </CardHeader>

      <Fields>
        <h6>{props.forme}</h6>
      </Fields>

      <CardActions>
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => setOpen((cur) => !cur)}
        >
          <AiOutlineDelete size="20px" />
        </Button>
        <Button
          color="primary"
          variant="outlined"
          onClick={() => props.handleUpdate()}
        >
          <AiOutlineSetting size="20px" />
        </Button>
      </CardActions>
      <Modal closeModal={handleClose} open={open}>
        <CardTitle title="Are you sure you want to delete this item ?" />
        <ButtonsSure>
          <Button color="error" variant="text">
            Cancel
          </Button>
          <Button color="success" variant="text" onClick={props.handleDelete}>
            Confirm
          </Button>
        </ButtonsSure>
      </Modal>
    </Card>
  );
}

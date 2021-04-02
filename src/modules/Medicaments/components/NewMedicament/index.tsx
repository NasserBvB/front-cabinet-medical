import React from "react";
import Button from "ui/Button";
import { CardTitle } from "ui/Card";
import Input from "ui/Input";
import { IMedicament } from "utils";
import { Actions, Fields, Wrapper } from "./styles";

interface IProps extends Partial<IMedicament> {
  handleSubmit: () => void;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  type: "update" | "create";
}
export default function NewMedicament(props: IProps) {
  return (
    <Wrapper>
      <CardTitle
        title={
          props.type === "create"
            ? "Create nouveau medicament"
            : "Modifier le medicament "
        }
      />
      <Fields>
        <Input
          placeholder="Le Nom"
          onChange={props.handleChange}
          name="nom"
          value={props.nom}
          label="Le nom"
        />
        <Input
          placeholder="Le forme"
          onChange={props.handleChange}
          name="forme"
          value={props.forme}
          label="La forme"
        />
      </Fields>
      <Actions>
        <Button color="secondary" variant="text">
          Cancel
        </Button>
        <Button color="primary" variant="outlined" onClick={props.handleSubmit}>
          {props.type === "create" ? "Create" : "Update"}
        </Button>
      </Actions>
    </Wrapper>
  );
}

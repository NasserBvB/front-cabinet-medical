import React from "react";
import Button from "ui/Button";
import { CardTitle } from "ui/Card";
import { CheckBox } from "ui/CheckBox";
import Input from "ui/Input";
import Select from "ui/Select";
import { Option } from "ui/Select/styles";
import { IMedicament } from "utils";
import { Actions, Fields, Wrapper } from "./styles";

interface IProps extends Partial<IMedicament> {
  handleSubmit: () => void;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  type: "update" | "create";
}
export default function PatientForm(props: IProps) {
  return (
    <Wrapper>
      <CardTitle
        title={
          props.type === "create"
            ? "Create nouveau consultation"
            : "Modifier le medicament "
        }
      />
      <Fields>
        <Input placeholder="La mutuelle" label="La mutuelle" />
        <Input placeholder="Le type du passion" label="Le type du passion" />
        <CheckBox label="Check me" />
        <Input placeholder="Remarque" label="Remarque" />
        <Select aria-label="Liste de meds">
          <Option>Choice 1</Option>
          <Option>Choice 2</Option>
          <Option>Choice 3</Option>
          <Option>Choice 4</Option>
          <Option>Choice 5</Option>
        </Select>
        <Input placeholder="Apte" label="Apte" />
        <Input placeholder="Od" label="Od" />
        <CheckBox label="Check me" />
        <Input placeholder="Og" label="Og" />
        <CheckBox label="Check me" />
        <Select aria-label="Liste de maladies">
          <Option>Choice 1</Option>
          <Option>Choice 2</Option>
          <Option>Choice 3</Option>
          <Option>Choice 4</Option>
          <Option>Choice 5</Option>
        </Select>
        <Input placeholder="Correction" label="Correction" />
        <Input placeholder="Date Consultation" label="Date Consultation" />
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

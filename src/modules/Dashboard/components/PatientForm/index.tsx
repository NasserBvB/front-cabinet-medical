import React from "react";
import Button from "ui/Button";
import { Card, CardActions, CardHeader, CardTitle } from "ui/Card";
import { CheckBox } from "ui/CheckBox";
import Input from "ui/Input";
import Select from "ui/Select";
import { Option } from "ui/Select/styles";
import { Fields } from "./styles";

interface IProps {
  handleClick: () => void;
}
export default function PatientForm(props: IProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle title="Create nouvelle consultation" />
      </CardHeader>
      <Fields>
        <Input placeholder="La mutuelle" />
        <Input placeholder="Le type du passion" />
        <CheckBox label="Check me" />
        <Input placeholder="Remarque" />
        <Select>
          <Option>Choice 1</Option>
          <Option>Choice 2</Option>
          <Option>Choice 3</Option>
          <Option>Choice 4</Option>
          <Option>Choice 5</Option>
        </Select>
        <Input placeholder="Apte" />
        <Input placeholder="Od" />
        <CheckBox label="Check me" />
        <Input placeholder="Og" />
        <CheckBox label="Check me" />
        <Select>
          <Option>Choice 1</Option>
          <Option>Choice 2</Option>
          <Option>Choice 3</Option>
          <Option>Choice 4</Option>
          <Option>Choice 5</Option>
        </Select>
        <Input placeholder="Correction" />
        <Input placeholder="Date Consultation" />
      </Fields>
      <CardActions>
        <Button color="secondary" variant="text">
          Cancel
        </Button>
        <Button color="primary" variant="outlined">
          Create
        </Button>
      </CardActions>
    </Card>
  );
}

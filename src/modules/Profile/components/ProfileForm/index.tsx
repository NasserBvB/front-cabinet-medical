import React from "react";
import Button from "ui/Button";
import { Card, CardActions, CardHeader, CardTitle } from "ui/Card";
import Input from "ui/Input";
import { Fields } from "./styles";

interface IProps {
  handleCancel: () => void;
}

export default function ProfileForm({ handleCancel }: IProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle title="Modification" />
      </CardHeader>

      <Fields>
        <Input label="Nom" placeholder="Nom" />
        <Input label="Prenom" placeholder="Prenom" />
        <Input label="Adresse" placeholder="Adresse" />
        <Input label="Telephone" placeholder="Telephone" />
      </Fields>

      <CardActions>
        <Button>Update</Button>

        <Button color="secondary" onClick={handleCancel}>
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
}

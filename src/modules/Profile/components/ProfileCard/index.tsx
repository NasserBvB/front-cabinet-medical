import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import Button from "ui/Button";
import { Card, CardActions, CardHeader, CardTitle } from "ui/Card";
import { Fields } from "./styles";

interface IProps {
  togggleModification: () => void;
}

export default function ProfileCard({ togggleModification }: IProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle title="Votre profile" />
      </CardHeader>

      <Fields>
        <p>
          Nom complet: <strong>a name</strong>
        </p>
        <p>
          Adresse: <strong>an address</strong>
        </p>
        <p>
          Email: <strong>email@me.com</strong>
        </p>
        <p>
          Phone: <strong>Phone number</strong>
        </p>
      </Fields>

      <CardActions>
        <Button variant="text" onClick={togggleModification}>
          <AiOutlineSetting />
        </Button>
      </CardActions>
    </Card>
  );
}

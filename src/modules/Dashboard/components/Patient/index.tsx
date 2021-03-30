import React from "react";
import { AiOutlineMore, AiOutlinePlus } from "react-icons/ai";
import Button from "ui/Button";
import {
  Card,
  CardActions,
  CardHeader,
  CardRow,
  CardRows,
  CardTitle,
} from "ui/Card";
interface IProps {
  patient?: any;
}
export default function Patient({ patient }: IProps) {
  return (
    <Card>
      <CardHeader isVApp={false}>
        <CardTitle isVApp={true} title="result 1" />
      </CardHeader>
      <CardRows>
        <CardRow withBorder={true}>
          <p>
            Nostrud sint eu amet magna do mollit voluptate culpa ullamco
            exercitation elit.
          </p>
          <p>
            Nostrud sint eu amet magna do mollit voluptate culpa ullamco
            exercitation elit.
          </p>
          <p>
            Nostrud sint eu amet magna do mollit voluptate culpa ullamco
            exercitation elit.
          </p>
        </CardRow>
      </CardRows>
      <CardActions isVApp={false}>
        <Button variant="filled" color="warning" title="Plus de details">
          <AiOutlineMore />
        </Button>
        <Button variant="filled" color="primary" title="Nouvelle Consultation">
          <AiOutlinePlus />
        </Button>
      </CardActions>
    </Card>
  );
}

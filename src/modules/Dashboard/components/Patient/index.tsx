import React from "react";
import { AiOutlineMore, AiOutlinePlus } from "react-icons/ai";
import Button from "ui/Button";
import {
  Card,
  CardActions,
  CardHeader,
  CardRow,
  CardRows,
  CardTitle
} from "ui/Card";
import { IPatient } from "utils";
import { Body, BodyItem } from "./styles";
interface IProps extends IPatient {}
export default function Patient({
  nomcomplet,
  cin,
  tel,
  anneenaissance,
  adresse,
  journaissance,
  moisnaissance,
  id,
}: IProps) {
  return (
    <Card>
      <CardHeader >
        <CardTitle title={nomcomplet} />
      </CardHeader>
      <CardRows>
        <CardRow withBorder={true}>
          <Body>
            <BodyItem>
              CIN: <strong>{cin}</strong>{" "}
            </BodyItem>
            <BodyItem>
              Adresse: <strong>{adresse}</strong>{" "}
            </BodyItem>
            <BodyItem>
              Telephone: <strong>{tel}</strong>{" "}
            </BodyItem>
            <BodyItem>
              Date de naissance:
              <strong>
                {journaissance}/{moisnaissance}/{anneenaissance}
              </strong>
            </BodyItem>
          </Body>
        </CardRow>
      </CardRows>
      <CardActions >
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

import React from "react";
import { Divider } from "ui/Divider";
import TextField from "ui/TextField";
import { IPatient } from "utils";
import Patient from "../Patient";
import { Header, Results, Wrapper } from "./styles";

interface IProps {
  cin: string;
  setCin: React.Dispatch<React.SetStateAction<string>>;
  handleFilter: () => void;
}

const patient: IPatient = {
  id: 0,
  patientId: "jkhjhfjnj55sd565z65",
  nordre: "5",
  nomcomplet: "Nasser Setti",
  journaissance: "03",
  moisnaissance: "01",
  anneenaissance: "1995",
  cin: "ZT200123",
  datecreation: "12/10/2021",
  tel: "0622133080",
  adresse: "Dr Lkraddsa Sid eabed taounate",
  type: "normal",
};

export default function Filter({ cin, setCin, handleFilter }: IProps) {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCin(e.currentTarget.value);
  };
  return (
    <Wrapper>
      <Header>
        <TextField
          handleClick={handleFilter}
          placeholder="Search by CIN ..."
          value={cin}
          onChange={handleChange}
        />
        <Divider width="100%" />
      </Header>
      <Results>
        <strong>Results: </strong>
        <Patient {...patient} />
        <Patient {...patient} />
        <Patient {...patient} />
        <Patient {...patient} />
        <Patient {...patient} />
        <Patient {...patient} />
        <Patient {...patient} />
      </Results>
    </Wrapper>
  );
}

import React from "react";
import { Divider } from "ui/Divider";
import TextField from "ui/TextField";
import Patient from "../Patient";
import { Header, Results, Wrapper } from "./styles";

interface IProps {
  cin: string;
  setCin: React.Dispatch<React.SetStateAction<string>>;
  handleFilter: () => void;
}

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
        <Patient />
        <Patient />
      </Results>
    </Wrapper>
  );
}

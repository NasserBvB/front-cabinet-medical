import React from "react";
import { Card as CustomCard } from "./styles";
type IProps = {
  children: React.ReactNode;
};
export default function Card({ children }: IProps) {
  return <CustomCard>{children}</CustomCard>;
}

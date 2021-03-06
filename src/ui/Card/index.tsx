import React, { HTMLAttributes, useState } from "react";
import Flex from "ui/Flex";
import { IColor } from "utils";
import {
  ActionsWrapper,
  Desc,
  HeaderWrapper,
  InfoName,
  InfoValue,
  InfoWrapper,
  MenuWrapper,
  RowsWrapper,
  RowWrapper,
  SpecValue,
  SpecWrapper,
  StatusWrapper,
  TitleWrapper,
  Wrapper
} from "./styles";

interface CardWrapper extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card = ({ children, ...rest }: CardWrapper) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

type CardHeaderProps = {
  children: React.ReactNode;
  color?: IColor;
};

export const CardHeader = ({
  color = "primary",
  children,
}: CardHeaderProps) => {
  return <HeaderWrapper color={color}>{children}</HeaderWrapper>;
};

type CardTitleProps = {
  title: string;
};

export const CardTitle = ({  title }: CardTitleProps) => {
  return (
    <TitleWrapper>
      <strong>{title}</strong>
    </TitleWrapper>
  );
};

type CardStatusProps = {
  children: string;
};

export const CardStatus = ({ children }: CardStatusProps) => {
  return <StatusWrapper>{children}</StatusWrapper>;
};

type CardSpecProps = {
  Icon: any;
  value: string;
  desc: string;
};

export const CardSpec = ({ Icon, value, desc }: CardSpecProps) => {
  return (
    <SpecWrapper>
      <Flex>
        <Icon />
        <SpecValue>{value}</SpecValue>
      </Flex>
      <Desc>{desc}</Desc>
    </SpecWrapper>
  );
};

type CardInfoProps = {
  name: string;
  value: string;
};

export const CardInfo = ({ name, value }: CardInfoProps) => {
  return (
    <InfoWrapper>
      <InfoName>{name}</InfoName>
      <InfoValue>{value}</InfoValue>
    </InfoWrapper>
  );
};

type CardActionsProps = {
  children?: React.ReactNode;
};

export const CardActions = ({ children }: CardActionsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ActionsWrapper >
      {children}
      <MenuWrapper
        onClick={() => setIsOpen(!isOpen)}
      ></MenuWrapper>
    </ActionsWrapper>
  );
};

type CardRowsProps = {
  children: React.ReactNode;
};

export const CardRows = ({ children }: CardRowsProps) => {
  return <RowsWrapper>{children}</RowsWrapper>;
};

type CardRowProps = {
  children: React.ReactNode;
  withBorder?: boolean;
};

export const CardRow = ({ children, withBorder }: CardRowProps) => {
  return <RowWrapper withBorder={withBorder}>{children}</RowWrapper>;
};

import React from "react";
import { Paragraph, SubTitle } from "../../styled-components";
import { CardFooter, CardHead, Content } from "./Styled";

const Card = ({ children, title }) => {
  return (
    <Content>
      <CardHead>
        <SubTitle>{title}</SubTitle>
        <img src="/perfil.png" alt="perfil" />
      </CardHead>
      <CardFooter>{children}</CardFooter>
    </Content>
  );
};

export default Card;

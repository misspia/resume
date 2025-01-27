import React from "react";
import styled from "styled-components";

import { metadata } from "@/metadata/header";
import { colors } from "@/themes/colors";
import { fonts } from "@/themes/fonts";

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const Name = styled.div`
  display: flex;
  font-size: 4em;
`;

const FirstName = styled.div`
  color: ${colors.accent};
`;

const LastName = styled.div`
  color: ${colors.black};
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinkRow = styled.div`
  display: flex;
  align-items: center;
  font-weight: ${fonts.weight.bold};
  font-size: 0.9em;
  padding: 0.1em 0;
  i {
    margin-top: 2px;
    margin-right: 0.5em;
    text-align: center;
  }
`;

const Anchor = styled.a`
  color: ${colors.blue};
  margin-left: 5px;
`;

export const Header: React.FC = () => (
  <Container>
    <Name>
      <FirstName>{metadata.firstName}</FirstName>
      <LastName>{metadata.lastName}</LastName>
    </Name>
    <Links>
      {metadata.links.map((link, index) => (
        <LinkRow key={index}>
          {/* <i className={link.icon}></i> */}
          {link.label}:
          <Anchor href={link.src} target="_blank">
            {link.display}
          </Anchor>
        </LinkRow>
      ))}
    </Links>
  </Container>
);

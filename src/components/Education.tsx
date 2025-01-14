import React from "react";
import styled from "styled-components";

import { metadata } from "@/metadata/education";
import {
  SectionContainer,
  SectionHeader,
  SectionGroupHeader,
  SectionGroupTitle,
} from "@/components/Section";
import { colors } from "@/themes/colors";

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const School = styled(SectionGroupTitle)`
  margin-right: 6px;
`;

const Program = styled.div``;

const Date = styled.div`
  text-transform: uppercase;
  font-size: 0.9em;
  text-align: right;
  color: ${colors.accent};
  & > * {
    padding: 0.1em;
  }
`;

export const Education: React.FC = () => {
  return (
    <SectionContainer>
      <SectionHeader>{metadata.title}</SectionHeader>
      <Content>
        <SectionGroupHeader>
          <School>{metadata.school}</School>
          <Program>{metadata.program}</Program>
        </SectionGroupHeader>
        <Date className="date">Class of {metadata.class}</Date>
      </Content>
    </SectionContainer>
  );
};

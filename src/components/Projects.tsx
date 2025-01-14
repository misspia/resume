import React from "react";
import styled from "styled-components";
import { Description } from "@/components/Description";
import {
  SectionContainer,
  SectionHeader,
  SectionGroup,
  SectionGroupHeader,
  SectionGroupTitle,
} from "@/components/Section";
import { colors } from "@/themes/colors";
import { metadata, Project } from "@/metadata/projects";

export const Projects: React.FC = () => (
  <SectionContainer>
    <SectionHeader>projects</SectionHeader>
    {metadata.projects.map((project, index) => (
      <Project key={index} {...project} />
    ))}
  </SectionContainer>
);

const Link = styled.a`
  margin-left: 0.5em;
  color: ${colors.blue};
  font-size: 0.8em;
`;
const Date = styled.div`
  text-transform: uppercase;
  font-size: 0.9em;
  color: ${colors.accent};
`;

const Project: React.FC<Project> = ({
  title,
  link,
  linkDisplay,
  startDate,
  endDate,
  description,
}) => (
  <SectionGroup>
    <SectionGroupHeader>
      <SectionGroupTitle>
        {title}
        <Link href={link} target="_blank">
          {linkDisplay}
        </Link>
      </SectionGroupTitle>

      <Date>
        {startDate} {endDate && ` - ${endDate}`}
      </Date>
    </SectionGroupHeader>
    <Description text={description} />
  </SectionGroup>
);

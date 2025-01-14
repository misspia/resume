import React from "react";
import styled from "styled-components";
import { colors } from "@/themes/colors";
import { fonts } from "@/themes/fonts";
import { BulletedList } from "@/components/BulletedList";
import {
  SectionContainer,
  SectionHeader,
  SectionGroup,
  SectionGroupHeader,
  SectionGroupTitle,
} from "@/components/Section";
import { metadata, Project, Experience } from "@/metadata/experiences";

export const Experiences = () => (
  <SectionContainer>
    <SectionHeader>experiences</SectionHeader>
    {metadata.experiences.map((experience, index) => (
      <Experience key={index} {...experience} />
    ))}
  </SectionContainer>
);

const ExperienceContainer = styled.div`
  margin: 0.3em 0 0.4em 0;
  .header {
    display: flex;
    justify-content: space-between;
    font-size: 1em;
    .company {
      color: ${colors.accent};
    }
    .title {
      display: flex;
      font-weight: ${fonts.weight.bold};
      color: ${colors.accent};
      & > * {
        margin: 0 0.5em;
      }
    }
    .date {
    }
  }
`;
const Role = styled.div`
  /* color: ${colors.black}; */
`;
const Divider = styled.div`
  height: 90%;
  width: 1px;
  background-color: ${colors.accent};
  margin: auto 6px;
`;
const Company = styled.a`
  color: ${colors.accent};
`;

const Date = styled.div`
  text-transform: uppercase;
  font-size: 0.9em;
  color: ${colors.accent};
`;

const Experience: React.FC<Experience> = ({
  title,
  division,
  company,
  companySrc,
  startDate,
  endDate,
  descriptions,
  projects,
}) => (
  <SectionGroup>
    <SectionGroupHeader>
      <SectionGroupTitle>
        <Role>
          {title} {division ? `(${division})` : ""}
        </Role>
        <Divider />
        <Company href={companySrc} target="_blank">
          {company}
        </Company>
      </SectionGroupTitle>
      <Date>
        {startDate} - {endDate}
      </Date>
    </SectionGroupHeader>
    <BulletedList bullets={descriptions} />
    {projects && <NotableProjects projects={projects} />}
  </SectionGroup>
);

const NotableProjectContainer = styled.div`
  display: flex;
  padding-left: 0.3em;
`;

const Label = styled.div`
  font-weight: ${fonts.weight.bold};
`;

const Project = styled.a`
  margin-left: 0.3em;
  color: ${colors.blue};
`;

type NotableProjectsProps = {
  projects: Project[];
};

const NotableProjects: React.FC<NotableProjectsProps> = ({ projects }) => (
  <NotableProjectContainer>
    <Label>Notable projects:</Label>
    {projects.map(({ href, label }, index) => (
      <React.Fragment key={index}>
        <Project className="projectLink" href={href} target="_blank">
          {label}
        </Project>
        {index !== projects.length - 1 && <div>, </div>}
      </React.Fragment>
    ))}
  </NotableProjectContainer>
);

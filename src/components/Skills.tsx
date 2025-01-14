import React from "react";
import styled from "styled-components";
import { SectionContainer, SectionHeader } from "@/components/Section";
import { metadata, SkillCategory } from "@/metadata/skills";
import { fonts } from "@/themes/fonts";

export const Skills: React.FC = () => (
  <SectionContainer>
    <SectionHeader>{metadata.title}</SectionHeader>
    {metadata.skills.map((skill, index) => (
      <Skill key={index} {...skill} />
    ))}
  </SectionContainer>
);

const SkillContainer = styled.div`
  display: flex;
  .title {
    font-weight: ${fonts.weight.bold};
    margin-right: 0.3em;
  }
`;

const Skill: React.FC<SkillCategory> = ({ title, list }) => (
  <SkillContainer>
    <div className="title">{title}:</div>
    <div className="content">{list.join(", ")}</div>
  </SkillContainer>
);

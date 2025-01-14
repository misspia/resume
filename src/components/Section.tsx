import styled from "styled-components";
import { colors } from "@/themes/colors";
import { fonts } from "@/themes/fonts";

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionHeader = styled.div`
  font-size: 1.5em;
  font-weight: ${fonts.weight.bold};
  width: 100%;
  border-bottom: solid ${colors.black} 1px;
  margin: 0;
  margin-top: 0.29em;
  margin-bottom: 0.25em;

  letter-spacing: 2px;
`;

export const SectionGroup = styled.div`
  margin: 0.15em 0 0.1em 0;
`;

export const SectionGroupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1em;
`;
export const SectionGroupTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: ${fonts.weight.bold};
  color: ${colors.accent};
`;

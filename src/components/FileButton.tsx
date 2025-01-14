import React from "react";
import styled from "styled-components";
import { colors } from "@/themes/colors";

const ButtonLink = styled.a`
  position: fixed;
  bottom: 4%;
  right: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s all;
  font-size: 2em;
  width: 1.5em;
  height: 1.5em;
  border: none;
  box-shadow: 2px 1px 20px 2px rgba(0, 0, 0, 0.26);
  border-radius: 50%;
  padding: 5px;

  background-color: ${colors.blue};
  color: ${colors.white};
  &:hover {
    /* color: ${colors.black}; */
    background-color: ${colors.darkBlue};
  }
`;

export const FileButton: React.FC = () => (
  <ButtonLink className="no-print" href="./misspia_resume.pdf" target="_blank">
    <i className="ion-ios-download-outline" />
  </ButtonLink>
);

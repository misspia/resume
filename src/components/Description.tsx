import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  margin: 0.3em 0;
`;

type Props = {
  text: string;
  listItem?: boolean;
};

/**
 * @description converts metadata string to html
 */
export const Description: React.FC<Props> = ({ text, listItem = false }) => {
  return listItem ? (
    <ListItem dangerouslySetInnerHTML={{ __html: text }} />
  ) : (
    <div dangerouslySetInnerHTML={{ __html: text }} />
  );
};

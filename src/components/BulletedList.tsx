import React from "react";
import styled from "styled-components";
import { Description } from "@/components/Description";

const List = styled.ul``;

type Props = {
  bullets: string[];
};

export const BulletedList: React.FC<Props> = ({ bullets }) => {
  return (
    <List>
      {bullets.map((content, index) => (
        <Description key={index} text={content} listItem />
      ))}
    </List>
  );
};

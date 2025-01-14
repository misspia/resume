import { createGlobalStyle } from "styled-components";
import { colors } from "@/themes/colors";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${colors.white};
    color: ${colors.black};
    font-family: "Work Sans", sans-serif;
    font-weight: 300;
    font-size: 1.1em;

    a {
      text-decoration: none;
      color: ${colors.blue};
    }
    ul {
      padding-left: 22px;
      margin: 0;
    }
    @media print {
      //a4
      margin: 0.3cm 0.4cm;
      height: 25cm !important;
      font-size: 0.85em;
      .no-print {
        display: none;
      }
    }
  }
`;

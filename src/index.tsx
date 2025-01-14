import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalStyles } from "@/themes/styles";
import { Header } from "@/components/Header";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experiences } from "@/components/Experiences";
import { Education } from "@/components/Education";
import { FileButton } from "@/components/FileButton";

const App: React.FC = () => (
  <div className="app">
    <GlobalStyles />
    <FileButton />
    <Header />
    <Experiences />
    <Projects />
    <Skills />
    <Education />
  </div>
);

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}

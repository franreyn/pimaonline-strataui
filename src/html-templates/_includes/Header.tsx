import React from "react";
import customElements from "./CreateCustomElement";

// Custom tag for header-text
const HeaderText: React.FC<HeaderTextProps> = customElements["HeaderText"];

interface HeaderTextProps {
  children: React.ReactNode;
}


export default function Header(): React.ReactElement {
  return (
    <header>
      <img src="https://via.placeholder.com/1920X600" alt="decorative image of a woman's hand typing on a computer" />
      <HeaderText>
        <h1>Module 1</h1>
        <p>Drafting Your Rhetorical Analysis</p>
      </HeaderText>
    </header>
  );
};
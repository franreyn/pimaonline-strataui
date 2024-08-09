import React from "react";
import customElements from "../CreateCustomElement";

interface TwoColumnProps {
  children: React.ReactNode;
}

const ColumnTwoWrapper: React.FC<any> = customElements["ColumnTwo"]; // Accessing CallOutWidget from customElements


const ColumnTwo: React.FC<TwoColumnProps> = ({ children }) => {
  return (
    <ColumnTwoWrapper>
      {children}
    </ColumnTwoWrapper>
  );
};

export default ColumnTwo;
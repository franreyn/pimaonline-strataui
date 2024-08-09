import React from "react";
import customElements from "../CreateCustomElement";

interface ColumnOneWrapperProps {
  children: React.ReactNode;
}

const ColumnOneWrapper: React.FC<any> = customElements["ColumnOne"]; // Accessing CallOutWidget from customElements


const ColumnOne: React.FC<ColumnOneWrapperProps> = ({ children }) => {
  return (
    <ColumnOneWrapper>
      {children}
    </ColumnOneWrapper>
  );
};

export default ColumnOne;
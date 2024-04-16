import React from 'react';
import customElements from "../CreateCustomElement";

interface SecondColumnProps {
  children: React.ReactNode;
}

const SecondColumnWrapper: React.FC<any> = customElements["SecondColumn"]; // Accessing CallOutWidget from customElements


const SecondColumn: React.FC<SecondColumnProps> = ({ children }) => {
  return (
    <SecondColumnWrapper>
      {children}
    </SecondColumnWrapper>
  );
};

export default SecondColumn;
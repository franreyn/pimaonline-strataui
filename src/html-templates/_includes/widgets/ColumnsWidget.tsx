import React from "react";
import customElements from "../CreateCustomElement";

// Define the prop types for ColumnsWrapper
interface ColumnsWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const ColumnsWrapper: React.FC<any> = customElements["ColumnsWidget"];

const ColumnsWidget: React.FC<ColumnsWrapperProps> = ({ children, className }) => {
  return (
    <ColumnsWrapper className={className}>
      {children}
    </ColumnsWrapper>
  )
}

export default ColumnsWidget;

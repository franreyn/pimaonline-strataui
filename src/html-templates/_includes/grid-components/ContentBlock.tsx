import React from "react";
import customElements from "../CreateCustomElement";

interface ContentBlockProps {
  children: React.ReactNode;
}

const ContentBlockWrapper: React.FC<any> = customElements["ContentBlock"]; // Accessing ContentBlock from customElements


const ContentBlock: React.FC<ContentBlockProps> = ({ children }) => {
  return (
    <ContentBlockWrapper>
      {children}
    </ContentBlockWrapper>
  )
}

export default ContentBlock;
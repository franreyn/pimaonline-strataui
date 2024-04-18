import React from "react";
import customElements from "../CreateCustomElement";

interface ContentBodyProps {
  children: React.ReactNode;
}

const ContentBodyWrapper: React.FC<any> = customElements["ContentBody"]; // Accessing CallOutWidget from customElements


const ContentBody: React.FC<ContentBodyProps> = ({ children }) => {
  return (
    <ContentBodyWrapper>
      {children}
    </ContentBodyWrapper>
  )
}

export default ContentBody;
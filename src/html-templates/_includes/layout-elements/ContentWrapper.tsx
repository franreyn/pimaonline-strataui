import React from 'react';
import customElements from "../CreateCustomElement";

interface ContentWrapperProps {
  children: React.ReactNode;
}

const ContentWrapperContainer: React.FC<any> = customElements["ContentWrapper"]; // Accessing CallOutWidget from customElements


const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  return (
    <ContentWrapperContainer>
      {children}
    </ContentWrapperContainer>
  );
};

export default ContentWrapper;
import React from "react";
import customElements from "../CreateCustomElement";

// Accessing the custom elements
const MediaWidgetWrapper: React.FC<MediaWidgetProps> = customElements["MediaWidget"];
const MediaObjectWrapper: React.FC<MediaObjectProps> = customElements["MediaObject"];
const MediaInfoWrapper: React.FC<MediaInfoProps> = customElements["MediaInfo"];


// AccordionItem and AccordionContent are not defined in CreateCustomElement
interface MediaWidgetProps {
  children: React.ReactNode;
  className?: string;
}

interface MediaObjectProps {
  children: React.ReactNode;

}
interface MediaInfoProps {
  children: React.ReactNode;
}

export const MediaWidget: React.FC<MediaWidgetProps> = ({ children, className }) => {
  return (
    <MediaWidgetWrapper className={className}>
      {children}
    </MediaWidgetWrapper>
  );
};

export const MediaObject: React.FC<MediaObjectProps> = ({ children }) => {
  return (
    <MediaObjectWrapper>
      {children}
    </MediaObjectWrapper>
  );
};

export const MediaInfo: React.FC<MediaInfoProps> = ({ children }) => {
  return (
    < MediaInfoWrapper>
      {children}
    </MediaInfoWrapper >
  );
};
import React from "react";
import customElements from "../CreateCustomElement";

// Accessing the custom elements
const MediaContainerWidgetWrapper: React.FC<MediaContainerWidgetProps> = customElements["MediaContainer"];
const MediaObjectWrapper: React.FC<MediaObjectProps> = customElements["MediaObject"];
const MediaInfoWrapper: React.FC<MediaInfoProps> = customElements["MediaInfo"];


// AccordionItem and AccordionContent are not defined in CreateCustomElement
interface MediaContainerWidgetProps {
  children: React.ReactNode;
  className?: string;
}

interface MediaObjectProps {
  children: React.ReactNode;

}
interface MediaInfoProps {
  children: React.ReactNode;
}

export const MediaContainerWidget: React.FC<MediaContainerWidgetProps> = ({ children, className }) => {
  return (
    <MediaContainerWidgetWrapper className={className}>
      {children}
    </MediaContainerWidgetWrapper>
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
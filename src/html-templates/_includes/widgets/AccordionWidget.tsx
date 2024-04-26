import React from "react";
import customElements from "../CreateCustomElement";

// Accessing the custom elements
const AccordionWidgetWrapper: React.FC<AccordionWidgetProps> = customElements["AccordionWidget"];
const AccordionItemWrapper: React.FC<AccordionItemProps> = customElements["AccordionItem"];
const AccordionContentWrapper: React.FC<AccordionContentProps> = customElements["AccordionContent"];


// AccordionItem and AccordionContent are not defined in CreateCustomElement
interface AccordionWidgetProps {
  children: React.ReactNode;
}

interface AccordionItemProps {
  children: React.ReactNode;

}
interface AccordionContentProps {
  children: React.ReactNode;
  class?: string;
}

export const AccordionWidget: React.FC<AccordionWidgetProps> = ({ children }) => {
  return (
    <AccordionWidgetWrapper>
      {children}
    </AccordionWidgetWrapper>
  );
};

export const AccordionItem: React.FC<AccordionItemProps> = ({ children }) => {
  return (
    <AccordionItemWrapper>
      {children}
    </AccordionItemWrapper>
  );
};

export const AccordionContent: React.FC<AccordionContentProps> = ({ children }) => {
  return (
    < AccordionContentWrapper>
      {children}
    </AccordionContentWrapper >
  );
};
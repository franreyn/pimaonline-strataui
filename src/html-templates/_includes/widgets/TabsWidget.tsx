import React from "react";
import customElements from "../CreateCustomElement";


// Accessing the custom elements
const TabsWidgetWrapper: React.FC<TabsWidgetProps> = customElements["TabsWidget"];
const TabTitleWrapper: React.FC<TabTitleProps> = customElements["TabTitle"];
const TabContentWrapper: React.FC<TabContentProps> = customElements["TabContent"];

// AccordionItem and AccordionContent are not defined in CreateCustomElement
interface TabsWidgetProps {
  children: React.ReactNode;
}

interface TabTitleProps {
  children: React.ReactNode;
}

interface TabContentProps {
  children: React.ReactNode;
}

export const TabsWidget: React.FC<TabsWidgetProps> = ({ children }) => {
  return (
    <TabsWidgetWrapper>
      {children}
    </TabsWidgetWrapper>
  );
};

export const TabTitle: React.FC<TabTitleProps> = ({ children }) => {
  return (
    <TabTitleWrapper>
      {children}
    </TabTitleWrapper>
  );
};

export const TabContent: React.FC<TabContentProps> = ({ children }) => {
  return (
    < TabContentWrapper>
      {children}
    </TabContentWrapper >
  );
};
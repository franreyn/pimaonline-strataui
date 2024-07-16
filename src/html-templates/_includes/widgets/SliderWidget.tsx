import React from "react";
import customElements from "../CreateCustomElement";

// Accessing the custom elements
const SliderWidgetWrapper: React.FC<SliderWidgetProps> = customElements["SliderWidget"];
const SliderItemWrapper: React.FC<SliderItemsProps> = customElements["SliderItem"];


// AccordionItem and AccordionContent are not defined in CreateCustomElement
interface SliderWidgetProps {
  children: React.ReactNode;
  className?: string;
}

interface SliderItemsProps {
  children: React.ReactNode;

}

export const SliderWidget: React.FC<SliderWidgetProps> = ({ children, className }) => {
  return (
    <SliderWidgetWrapper className={className}>
      {children}
    </SliderWidgetWrapper>
  );
};

export const SliderItem: React.FC<SliderItemsProps> = ({ children }) => {
  return (
    <SliderItemWrapper>
      {children}
    </SliderItemWrapper>
  );
};
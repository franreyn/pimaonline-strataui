import React from "react";
import customElements from "../CreateCustomElement";

// Accessing the custom elements
const VocabCardsWidgetWrapper: React.FC<VocabCardWidgetProps> = customElements["VocabCardsWidget"];
const VocabCardWrapper: React.FC<VocabCardItemProps> = customElements["VocabCard"];

interface VocabCardWidgetProps {
  children: React.ReactNode;
  className?: string;
}

interface VocabCardItemProps {
  children: React.ReactNode;

}

export const VocabCardsWidget: React.FC<VocabCardWidgetProps> = ({ children, className }) => {
  return (
    <VocabCardsWidgetWrapper>
      {children}
    </VocabCardsWidgetWrapper>
  );
};

export const VocabCard: React.FC<VocabCardItemProps> = ({ children }) => {
  return (
    <VocabCardWrapper>
      {children}
    </VocabCardWrapper>
  );
};
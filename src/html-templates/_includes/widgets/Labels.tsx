import React from "react";
import customElements from "../CreateCustomElement";

// Define the prop types for labels
interface LabelProps {
  children: React.ReactNode;
}

const MutedLabelWrapper: React.FC<LabelProps> = customElements["MutedLabel"];
const DangerLabelWrapper: React.FC<LabelProps> = customElements["DangerLabel"];
const DefaultLabelWrapper: React.FC<LabelProps> = customElements["DefaultLabel"];
const SuccessLabelWrapper: React.FC<LabelProps> = customElements["SuccessLabel"];
const WarningLabelWrapper: React.FC<LabelProps> = customElements["WarningLabel"];
const InfoLabelWrapper: React.FC<LabelProps> = customElements["InfoLabel"];

export const MutedLabel: React.FC<LabelProps> = ({ children }) => {
  return (
    <MutedLabelWrapper>
      {children}
    </MutedLabelWrapper>
  );
};

export const DangerLabel: React.FC<LabelProps> = ({ children }) => {
  return (
    <DangerLabelWrapper>
      {children}
    </DangerLabelWrapper>
  );
};

export const DefaultLabel: React.FC<LabelProps> = ({ children }) => {
  return (
    <DefaultLabelWrapper>
      {children}
    </DefaultLabelWrapper>
  );
};

export const SuccessLabel: React.FC<LabelProps> = ({ children }) => {
  return (
    <SuccessLabelWrapper>
      {children}
    </SuccessLabelWrapper>
  );
};

export const WarningLabel: React.FC<LabelProps> = ({ children }) => {
  return (
    <WarningLabelWrapper>
      {children}
    </WarningLabelWrapper>
  );
};

export const InfoLabel: React.FC<LabelProps> = ({ children }) => {
  return (
    <InfoLabelWrapper>
      {children}
    </InfoLabelWrapper>
  );
};

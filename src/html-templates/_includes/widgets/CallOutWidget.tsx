import React from "react";
import customElements from "../CreateCustomElement";

const CallOutWrapper: React.FC<any> = customElements["CallOutWidget"]; // Accessing CallOutWidget from customElements

export default function BorderWidget(): React.ReactElement {
  return (
    <CallOutWrapper>
      <h3>Think while you read</h3>
      <p>How do we create effective and persuasive writing?</p>
    </CallOutWrapper>
  )
}
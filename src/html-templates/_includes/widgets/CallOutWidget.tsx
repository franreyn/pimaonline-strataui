import React from "react";
import customElements from "./CreateCustomElement";

const CallOutWrapper: React.FC<any> = customElements["CallOutWidget"]; // Accessing CallOutWidget from customElements

export default function BorderWidget(): React.ReactElement {
  return (
    <CallOutWrapper>
      <h3>Callout Widget</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis felis malesuada nulla malesuada, laoreet egestas felis luctus. Vestibulum imperdiet iaculis eros sed hendrerit. Duis consectetur congue nibh sed imperdiet.
      </p>
    </CallOutWrapper>
  )
}
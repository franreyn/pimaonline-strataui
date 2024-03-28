import React from "react";
import customElements from "./CreateCustomElement";

const BorderWrapper = customElements["BorderWidget"]; // Accessing BorderWidget from customElements

export default function BorderWidget(): React.ReactElement {
  return (
    <BorderWrapper>
      <h3>Border Widget</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis felis malesuada nulla malesuada, laoreet egestas felis luctus. Vestibulum imperdiet iaculis eros sed hendrerit. Duis consectetur congue nibh sed imperdiet.
      </p>
    </BorderWrapper>
  )
}
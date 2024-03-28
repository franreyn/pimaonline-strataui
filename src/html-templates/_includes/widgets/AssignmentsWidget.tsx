import React from "react";
import customElements from "./CreateCustomElement";

// Accessing AssignmentsWidget and AssignmentItem from customElements
const AssignmentsWidgetWrapper = customElements["AssignmentsWidget"];
const AssignmentItem = customElements["AssignmentItem"]

export default function AssignmentsWidget(): React.ReactElement {
  return (
    <AssignmentsWidgetWrapper>
      <AssignmentItem>
        <h3>Assignment Item</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis felis malesuada nulla malesuada, laoreet egestas felis luctus. Vestibulum imperdiet iaculis eros sed hendrerit. Duis consectetur congue nibh sed imperdiet.
        </p>
        <a href="#">Link To Assignment</a>
      </AssignmentItem>
      <AssignmentItem>
        <h3>Assignment Item</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis felis malesuada nulla malesuada, laoreet egestas felis luctus. Vestibulum imperdiet iaculis eros sed hendrerit. Duis consectetur congue nibh sed imperdiet.
        </p>
        <a href="#">Link To Assignment</a>
      </AssignmentItem>
      <AssignmentItem>
        <h3>Assignment Item</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis felis malesuada nulla malesuada, laoreet egestas felis luctus. Vestibulum imperdiet iaculis eros sed hendrerit. Duis consectetur congue nibh sed imperdiet.
        </p>
        <a href="#">Link To Assignment</a>
      </AssignmentItem>
    </AssignmentsWidgetWrapper>
  )
}
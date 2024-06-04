import React from "react";
import customElements from "../CreateCustomElement";
import ButtonWidget from "./ButtonWidget";

// Accessing AssignmentsWidget and AssignmentItem from customElements
const AssignmentsWidgetWrapper: React.FC<any> = customElements["AssignmentsWidget"];
const AssignmentItem: React.FC<any> = customElements["AssignmentItem"]

export default function AssignmentsWidget(): React.ReactElement {
  return (
    <AssignmentsWidgetWrapper>
      <AssignmentItem>
        <h3>Module 1 Readings</h3>
        <p>The readings in the list have interactive exercises that will help you determine if you are fully understanding the material.</p>
        <ButtonWidget href="#" target="_blank">Module 1 Readings</ButtonWidget>
      </AssignmentItem>
      <AssignmentItem>
        <h3>Reading Review Activity</h3>
        <p>Rhetorical Analysis Review Activity</p>
        <ButtonWidget href="#" target="_blank">Reading Review Activity</ButtonWidget>
      </AssignmentItem>
      <AssignmentItem>
        <h3>Writing Assignment 1</h3>
        <p>Rhetorical Analysis Draft</p>
        <ButtonWidget href="#" target="_blank">Writing Assignment 1</ButtonWidget>
      </AssignmentItem>
    </AssignmentsWidgetWrapper>
  )
}
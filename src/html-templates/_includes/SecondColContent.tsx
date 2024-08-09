import React from "react";
import AssignmentsWidget from "./widgets/AssignmentsWidget";
import ContentBlock from "./grid-components/ContentBlock";
import ColumnTwo from "./grid-components/ColumnTwo";
import CallOutWidget from "./widgets/CallOutWidget";

export default function SecondColContent(): React.ReactElement {
  return (
    <ColumnTwo>
      <ContentBlock>
        <AssignmentsWidget>
        </AssignmentsWidget>
      </ContentBlock>
      <ContentBlock>
        <h3 className="icon-image">Image</h3>
        <figure>
          <img src="https://via.placeholder.com/800x800" alt="" />
        </figure>
      </ContentBlock>
      <ContentBlock>
        <h3 className="icon-pencil">Quick Vocabulary</h3>
        <dl>
          <dt>Rhetoric:</dt>
          <dd>The art of effective and persuasive communication that is appropriate to a given situation.</dd>
          <dt>Logos:</dt>
          <dd>An appeal to rational, logical understanding. Is the author using facts and "hard" research to present a case? Is the argument coherent and cohesive?</dd>
          <dt>Pathos:</dt>
          <dd>An appeal to emotions. Is the author trying to evoke strong feelings for or against something?</dd>
          <dt>Ethos:</dt>
          <dd>An appeal to ethical considerations. Is the author credible and knowledgeable? Are the actions or understandings that they are calling for ethical?</dd>
        </dl>
      </ContentBlock>
      <ContentBlock>
        <CallOutWidget></CallOutWidget>
      </ContentBlock>
    </ColumnTwo>
  );
};
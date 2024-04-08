import React from 'react';
import AssignmentsWidget from './widgets/AssignmentsWidget';

export default function SecondColContent(): React.ReactElement {
  return (
    <div id="second-column">
      <div className="content-body">
        <AssignmentsWidget>
        </AssignmentsWidget>
      </div>
      <div className="content-body">
        <h4 className="icon-image">Image</h4>
        <figure>
          <img src="https://via.placeholder.com/800x800" alt="" />
        </figure>
      </div>
      <div className="content-body">
        <h4 className="icon-pencil">Quick Vocabulary</h4>
        <dl>
          <dt>Feathers:</dt>
          <dd>Covers a penguin's body and keeps them dry.</dd>
          <dt>Incubate:</dt>
          <dd>Grow under conditions that promote development.</dd>
          <dt>Huddle:</dt>
          <dd>A disorganized and densely packed crowd.</dd>
          <dt>Waddle:</dt>
          <dd>A penguin's walk swaying from side to side.</dd>
        </dl>
      </div>
      <div className="content-body">
        <div className="border border-yellow">
          <h4>Did you know?!</h4>
          <p>The Galapagos Penguin is the only penguin species that ventures north of the equator in the wild.</p>
        </div>
      </div>
    </div>
  );
};
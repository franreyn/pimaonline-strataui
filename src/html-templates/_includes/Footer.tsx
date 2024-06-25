import React from 'react';

export default function Footer(): React.ReactElement {
  return (
    <footer>
      <p className="text-center toggle-footnotes" tabIndex={0}>[Show Footnotes]</p>
      <div className="footnotes">
        <p>Definition of Rhetorical Analysis: Rhetorical analysis involves examining how authors or speakers use words to influence an audience. It focuses on understanding the strategies employed to convey messages and achieve desired effects<sup>1</sup>.</p>
        <p>"Rhetorical Analysis," Purdue Online Writing Lab (OWL), accessed June 24, 2024, https://owl.purdue.edu/owl/general_writing/the_writing_process/rhetorical_analysis/index.html.</p>
      </div>
    </footer>
  );
};
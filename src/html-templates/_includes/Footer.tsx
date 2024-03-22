import React from 'react';

export default function Footer(): React.ReactElement {
  return (
    <footer>
      <div id="footer">
        <p className="text-center toggle-footnotes" tabIndex={0}>[Show Footnotes]</p>
        <div className="footnotes">
          <p>Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
          <ul>
            <li>Lorem culim ghus.</li>
            <li>Ipsum guar havana.</li>
            <li>Doloret kava chec.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
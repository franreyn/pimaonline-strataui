import React from 'react';

export default function Header(): React.ReactElement {
 return (
    <header className="header">
      <img src="https://via.placeholder.com/1920X600" alt="decorative image of a woman's hand typing on a computer" />
      <div className="text-container">
        <h1>Course Intro</h1>
        <p>Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Pellentesque in ipsum id orci porta.</p>
      </div>
    </header>
 );
};
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Header from '../_includes/Header';
import FirstColContent from '../_includes/FirstColContent';
import SecondColContent from '../_includes/SecondColContent';
import Footer from '../_includes/Footer';

export default function TwoColumn(): string {
  const htmlString = ReactDOMServer.renderToStaticMarkup(
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/css/themes/cards/styles.css"
        />
        <link rel="stylesheet" type="text/css" href="../css/index.css" />
        <title>Two Column Layout</title>
      </head>
      <body>
        <Header />
        <FirstColContent />
        <SecondColContent />
        <Footer />
      </body>
    </html>
  );
  return `<!DOCTYPE html>${htmlString}`;
};
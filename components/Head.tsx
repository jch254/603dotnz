import * as React from 'react';

interface HeadProps {
  title: string;
}

const Head: React.FC<HeadProps> = ({ title }) => (
  <head>
    <base href="/" />
    <meta charSet="utf-8" />
    <title>{title}</title>
    <link href="index.css" rel="stylesheet" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon" href="favicon.ico" />
  </head>
);

export default Head;

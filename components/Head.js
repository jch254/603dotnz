import React, { PropTypes } from 'react';

const Head = ({ title }) => (
  <head>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <link href="./index.css" rel="stylesheet" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon" href="./favicon.ico" />
  </head>
);

Head.propTypes = {
  title: PropTypes.string,
};

export default Head;

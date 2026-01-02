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
    {
      process.env.GA_ID && (
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
            ga('create', '${process.env.GA_ID}', 'auto'); ga('send', 'pageview');
          `,
        }}
      />
      )
    }
  </head>
);

export default Head;

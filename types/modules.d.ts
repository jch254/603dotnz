// Type definitions for legacy UI libraries
declare module 'rebass' {
  import * as React from 'react';
  
  export const Banner: React.FC<any>;
  export const Heading: React.FC<any>;
  export const Container: React.FC<any>;
  export const Flex: React.FC<any>;
  export const Block: React.FC<any>;
  export const Media: React.FC<any>;
  export const Section: React.FC<any>;
  export const SectionHeader: React.FC<any>;
  export const HeadingLink: React.FC<any>;
  export const Card: React.FC<any>;
  export const CardImage: React.FC<any>;
  export const Text: React.FC<any>;
  export const Space: React.FC<any>;
  export const Blockquote: React.FC<any>;
  export const Box: React.FC<any>;
  export const Toolbar: React.FC<any>;
  export const NavItem: React.FC<any>;
}

declare module 'reflexbox' {
  import * as React from 'react';
  
  export const Box: React.FC<any>;
  export const Flex: React.FC<any>;
}

declare module 'react-geomicons' {
  import * as React from 'react';
  
  const Geomicon: React.FC<any>;
  export default Geomicon;
}

declare module 'moment' {
  interface Moment {
    year(): number;
    format(format?: string): string;
  }
  
  function moment(): Moment;
  export = moment;
}
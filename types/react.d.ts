// Type definitions for React 15 compatibility
declare module 'react' {
  import * as React from 'react';
  export = React;
  export as namespace React;
  
  namespace React {
    type FC<P = {}> = (props: P) => JSX.Element | null;
    type ReactNode = string | number | boolean | null | undefined | ReactElement<any> | ReactNode[];
    
    interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
      type: T;
      props: P;
      key: Key | null;
    }
    
    type Key = string | number;
    type JSXElementConstructor<P> = ((props: P) => ReactElement<any, any> | null) | (new (props: P) => Component<P, any>);
    
    class Component<P = {}, S = {}> {
      props: Readonly<P> & Readonly<{ children?: ReactNode }>;
      state: Readonly<S>;
      constructor(props: P);
      render(): ReactNode;
    }
  }
  
  namespace JSX {
    interface Element extends React.ReactElement<any, any> { }
    interface IntrinsicElements {
      [elemName: string]: any;
      html: any;
      head: any;
      body: any;
      meta: any;
      title: any;
      link: any;
      script: any;
      div: any;
      h1: any;
      h2: any;
      p: any;
      a: any;
      img: any;
      section: any;
      header: any;
      blockquote: any;
      cite: any;
      span: any;
      br: any;
    }
  }
}
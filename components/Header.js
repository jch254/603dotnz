import React from 'react';
import {
  Banner,
  Heading,
} from 'rebass';

const Header = () => (
  <Banner
    style={{ minHeight: '66vh', background: '#DB1734' }}
    m={0}
  >
    <Heading size={1} big>
      603.nu
    </Heading>
    <Heading size={2}>
      Web Experiments
    </Heading>
  </Banner>
);

export default Header;

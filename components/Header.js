import React from 'react';
import {
  Banner,
  Heading,
} from 'rebass';

const Header = () => (
  <Banner
    style={{ minHeight: '75vh', backgroundAttachment: 'scroll' }}
    backgroundImage="./img/Wolf.jpg"
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

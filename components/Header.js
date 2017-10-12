import React from 'react';
import {
  Banner,
  Heading,
} from 'rebass';

const Header = () => (
  <div className="color-change-4x">
    <Banner
      style={{ minHeight: '66vh', background: 'none' }}
      m={0}
    >
      <Heading size={1} big>
        603.NZ
      </Heading>
      <Heading size={2}>
        Internet Projects
      </Heading>
    </Banner>
  </div>
);

export default Header;

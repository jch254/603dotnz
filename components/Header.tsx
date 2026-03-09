import * as React from 'react';
import {
  Banner,
  Heading,
} from 'rebass';

const Header: React.FC = () => (
  <div className="color-change-4x">
    <Banner
      style={{ minHeight: '66vh', background: 'none' }}
      m={0}
    >
      <Heading size={1} big>
        603.NZ
      </Heading>
      <Heading size={2}>
        Engineering Systems & Projects
      </Heading>
      <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', marginTop: '20px', fontWeight: 'normal' }}>
        An engineering lab for systems, automation and infrastructure experiments.
      </p>
    </Banner>
  </div>
);

export default Header;

import * as React from 'react';
import { Box } from 'reflexbox';
import moment from 'moment';
import {
  Toolbar,
  Space,
  NavItem,
} from 'rebass';

const Footer: React.FC = () => (
  <Box style={{ flex: 'none' }}>
    <Toolbar backgroundColor="white">
      <Space auto />
      <NavItem
        color="black"
        href="https://jch254.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontWeight: 'normal', fontSize: '12px' }}
      >
        {`© Jordan Hornblow ${moment().year()}`}
      </NavItem>
      <NavItem
        color="black"
        href="https://github.com/jch254/603dotnz"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontWeight: 'normal', fontSize: '12px' }}
      >
        GitHub
      </NavItem>
      <Space auto />
    </Toolbar>
  </Box>
);

export default Footer;

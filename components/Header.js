import React from 'react'
import {
  Banner,
  Heading,
} from 'rebass'

const Header = () => (
  <Banner
    style={{ minHeight: '75vh', backgroundAttachment: 'scroll' }}
    backgroundImage="./img/Wolf.jpg"
    m={0}
  >
    <Heading size={1} big children="603.nu" />
    <Heading size={2} children="Web Experiments, hey Mozel" />
  </Banner>
)

export default Header

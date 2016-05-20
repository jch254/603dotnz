import React from 'react'
import { Flex } from 'reflexbox'
import {
  Container,
  Block,
  Heading,
  Media,
  Divider,
  Blockquote,
 } from 'rebass'

const Main = () => (
  <Container py={4}>
    <Flex column>
      <Block borderLeft px={3} color="black">
        <Media align="center" img="./img/Goku.png">
          <Heading level={3} size={2} big children="Kia ora" />
        </Media>
      </Block>
      <Heading level={3}>
        This is a zone to create and experiment.
      </Heading>
      <Divider ml={0} width={128} />
      <Blockquote source="Eckhart Tolle">
        Nothing scares the egoic mind more than the unknown, the idea of something new, something
        different. The mind always adheres to the known. The unknown is dangerous because it has
        no control over it. That's why the mind dislikes and ignores the present moment.
        Present-moment awareness creates a gap in the stream of mind but also in the past-future
        continuum. Nothing truly new and creative can come into this world except through that
        gap, that clear space of infinite possibility.
      </Blockquote>
    </Flex>
  </Container>
)

export default Main

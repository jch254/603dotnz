import React from 'react';
import { Flex } from 'reflexbox';
import Icon from 'react-geomicons';
import {
  Container,
  Heading,
  HeadingLink,
  Blockquote,
  Card,
  CardImage,
  Space,
  Text,
  Section,
  SectionHeader,
  Block,
  Media,
} from 'rebass';

const Main = () => (
  <Container pb={3}>
    <Flex column>
      <Block pt={4} mt={3} mb={0}>
        <Media m={0} align="center" img="./img/Goku.png">
          <Heading size={2} big children="Kia ora" />
        </Media>
      </Block>
      <Section pb={0}>
        <SectionHeader heading="About" href="#about" />
        <p style={{ fontSize: '20px' }}>
          This is a zone to create and experiment.
          This is a zone to create and experiment.
          This is a zone to create and experiment.
          This is a zone to create and experiment.
          This is a zone to create and experiment.
          This is a zone to create and experiment.
          This is a zone to create and experiment.
          This is a zone to create and experiment.
          This is a zone to create and experiment etc.
        </p>
      </Section>
      <Section pb={0}>
        <SectionHeader description="Few tings" heading="Experiments" href="#experiments" />
        <Flex align="center" justify="center" wrap gutter={2}>
          <Card m={2} width={309}>
            <a href="http://ai.603.nu">
              <CardImage src="./img/AI.png" />
            </a>
            <Flex>
              <HeadingLink children="Audio Insights" href="http://ai.603.nu" />
              <Space auto />
              <a href="https://github.com/jch254/audio-insights" target="_blank">
                <Icon name="github" width="24px" height="24px" />
              </a>
            </Flex>
            <Text
              small
              children="Audio insights derived from your Spotify library using React and Redux."
            />
          </Card>
          <Card m={2} width={309}>
            <CardImage src="http://lorempixel.com/g/512/384/technics" />
            <Flex>
              <Heading children="Under Development" />
              <Space auto />
              <Icon name="github" width="24px" height="24px" />
            </Flex>
            <Text small children="Check back soon pls... Cheers cheers!" />
          </Card>
          <Card m={2} width={309}>
            <CardImage src="http://lorempixel.com/g/512/384/business/" />
            <Flex>
              <Heading children="In my mind" />
              <Space auto />
              <Icon name="github" width="24px" height="24px" />
            </Flex>
            <Text small children="Go on... Check back soon." />
          </Card>
        </Flex>
      </Section>
      <Section pb={0}>
        <Blockquote mt={3} source="Eckhart Tolle">
          Nothing scares the egoic mind more than the unknown, the idea of something new, something
          different. The mind always adheres to the known. The unknown is dangerous because it has
          no control over it. That's why the mind dislikes and ignores the present moment.
          Present-moment awareness creates a gap in the stream of mind but also in the past-future
          continuum. Nothing truly new and creative can come into this world except through that
          gap, that clear space of infinite possibility.
        </Blockquote>
      </Section>
    </Flex>
  </Container>
)

export default Main

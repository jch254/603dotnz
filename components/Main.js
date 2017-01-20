import React from 'react';
import { Flex } from 'reflexbox';
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
          <Heading size={2} big>
            Kia ora
          </Heading>
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
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <a href="https://audio-insights.603.nu">
              <CardImage src="./img/AI.png" />
            </a>
            <Flex>
              <HeadingLink href="https://audio-insights.603.nu">
                Audio Insights
              </HeadingLink>
              <Space auto />
              <a href="https://github.com/jch254/audio-insights" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Flex>
            <Text small>
              Audio insights derived from your Spotify library using React, Redux and Redux-saga.
            </Text>
          </Card>
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <a href="https://starter-pack.603.nu">
              <CardImage src="./img/SP.png" />
            </a>
            <Flex>
              <HeadingLink href="https://starter-pack.603.nu">
                Starter Pack
              </HeadingLink>
              <Space auto />
              <a href="https://github.com/jch254/starter-pack" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Flex>
            <Text small>
              Combines React, Redux and Redux-saga with Auth0&#39;s Lock as a starting point for
              modern web apps with solid authentication.
            </Text>
          </Card>
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <a href="https://serverless-api.603.nu">
              <CardImage src="./img/SW.png" />
            </a>
            <Flex>
              <HeadingLink href="https://serverless-api.603.nu">
                Serverless API
              </HeadingLink>
              <Space auto />
              <a
                href="https://github.com/jch254/serverless-node-dynamodb-api"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Flex>
            <Text small>
              A simple API powered by Serverless, Node.js, DynamoDB and Auth0. Intended as a starting point for
              Serverless APIs.
            </Text>
          </Card>
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <a href="https://github.com/jch254/terraform-ecs-autoscale-alb" target="_blank" rel="noopener noreferrer">
              <CardImage src="./img/Matrix.gif" />
            </a>
            <Flex>
              <Heading>
                <a
                  href="https://github.com/jch254/terraform-ecs-autoscale-alb"
                  target="_blank" rel="noopener noreferrer"
                >
                  Terraform ECS Demo
                </a>
              </Heading>
              <Space auto />
            </Flex>
            <Text small>
              ECS cluster with instance and service autoscaling configured and running behind an
              ALB with path based routing set up.
            </Text>
          </Card>
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <CardImage src="./img/Matrix.gif" />
            <Flex>
              <Heading>
                Under Development
              </Heading>
              <Space auto />
            </Flex>
            <Text small>
              Check back soon.
            </Text>
          </Card>
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <CardImage src="./img/Matrix.gif" />
            <Flex>
              <Heading>
                Under Development
              </Heading>
              <Space auto />
            </Flex>
            <Text small>
              Check back soon.
            </Text>
          </Card>
        </Flex>
      </Section>
      <Section pb={0}>
        <Blockquote mt={3} source="Eckhart Tolle">
          Nothing scares the egoic mind more than the unknown, the idea of something new, something
          different. The mind always adheres to the known. The unknown is dangerous because it has
          no control over it. That&#39;s why the mind dislikes and ignores the present moment.
          Present-moment awareness creates a gap in the stream of mind but also in the past-future
          continuum. Nothing truly new and creative can come into this world except through that
          gap, that clear space of infinite possibility.
        </Blockquote>
      </Section>
    </Flex>
  </Container>
);

export default Main;

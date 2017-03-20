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
            Kia ora, I&#39;m Jordan.
          </Heading>
        </Media>
      </Block>
      <Section pb={0}>
        <SectionHeader heading="About" />
        <p style={{ fontSize: '20px' }}>
          I&#39;m a developer interested in music, productivity and self-improvement with substantial
          experience working on large-scale SaaS products. I enjoy working across all aspects of product
          development and believe that a deeper understanding of the stack allows me to architect
          higher quality/more robust solutions. I love that one can never know too much about technology.
          There is always an opportunity to continue expanding and applying my knowledge base.
          This concept of continual improvement is one I have found to be common among all my interests.
        </p>
        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
          This is my zone to create and experiment.
        </p>
      </Section>
      <Section pb={0}>
        <SectionHeader mt={0} description="Successful experiments" heading="Projects" />
        <Flex align="center" justify="center" wrap gutter={2}>
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <a href="https://scratchpad.zone">
              <CardImage src="./img/Scratchpad.png" />
            </a>
            <HeadingLink href="https://scratchpad.zone">
              Scratchpad
            </HeadingLink>
            <Text small>
              Scratchpad is an organized repository for ideas, quotes, anecdotes, observations and information
              you come across during your quest through life.
            </Text>
          </Card>
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
              <CardImage src="./img/SA.png" />
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
              <CardImage src="./img/TF.png" />
            </a>
            <Heading>
              <a
                href="https://github.com/jch254/terraform-ecs-autoscale-alb"
                target="_blank" rel="noopener noreferrer"
              >
                Terraform ECS Demo
              </a>
            </Heading>
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
        </Flex>
      </Section>
      <Section>
        <Block
          px={2}
        >
          <Blockquote
            href="https://www.amazon.com/Power-Now-Guide-Spiritual-Enlightenment/dp/1577314808"
            source="Eckhart Tolle"
          >
            &quot;Nothing scares the egoic mind more than the unknown, the idea of something new, something
            different. The mind always adheres to the known. The unknown is dangerous because it has
            no control over it. That&#39;s why the mind dislikes and ignores the present moment.
            Present-moment awareness creates a gap in the stream of mind but also in the past-future
            continuum. Nothing truly new and creative can come into this world except through that
            gap, that clear space of infinite possibility.&quot;
          </Blockquote>
        </Block>


      </Section>
    </Flex>
  </Container>
);

export default Main;

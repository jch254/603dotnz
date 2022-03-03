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
        <Media m={0} align="center" img="/img/Goku.png">
          <Heading size={2} big>
            Kia ora, <a href="https://jch254.com" style={{ textDecoration: 'underline' }}>I&#39;m Jordan</a>
          </Heading>
        </Media>
      </Block>
      <Section pb={0}>
        <SectionHeader heading="About" />
        <p style={{ fontSize: '20px' }}>
          I&#39;m a developer interested in music, productivity and self-improvement.
          I enjoy working across all aspects of product development - from 0 to 100, real quick. I
          believe that a deeper understanding of the stack allows me to craft higher quality and more robust solutions.
          I love that one can never know too much about technology. There is always an opportunity
          to continue expanding and applying my knowledge base. <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
            This is a zone to share Internet-powered/related projects.</span>
        </p>
      </Section>
      <Section pb={0}>
        <SectionHeader mt={0} heading="Projects" />
        <Flex align="center" justify="center" wrap gutter={2}>
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <a href="https://buildpipeline-prod.603.nz">
              <CardImage src="/img/BuildPipeline.png" />
            </a>
            <Flex align="center">
              <Heading>
                <a href="https://buildpipeline-prod.603.nz">
                  BuildPipeline
                </a>
              </Heading>
              <Space auto />
              <a href="https://github.com/jch254/buildpipeline" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Flex>
            <Text small>
              BuildPipeline is an AWS-powered serverless build, test and deploy pipeline ft. multiple
              environments (test and production).
            </Text>
          </Card>
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <a href="https://m.me/scopebot" target="_blank" rel="noopener noreferrer">
              <CardImage src="/img/Scope.jpg" />
            </a>
            <Flex align="center">
              <Heading>
                <a href="https://m.me/scopebot" target="_blank" rel="noopener noreferrer">
                  Scope
                </a>
              </Heading>
              <Space auto />
              <a href="https://www.producthunt.com/posts/scope-5" target="_blank" rel="noopener noreferrer">
                Product Hunt
              </a>
              &nbsp;|&nbsp;
              <a href="https://github.com/jch254/scope-lex-handler" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Flex>
            <Text small>
              Scope is a Facebook Messenger bot that identifies songs from lyrics/titles. Powered by AWS Lex and Lambda.
            </Text>
          </Card>
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <a href="https://scratchpad.zone">
              <CardImage src="/img/Scratchpad.png" />
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
            <a href="https://audio-insights.603.nz">
              <CardImage src="/img/AI.png" />
            </a>
            <Flex align="center">
              <HeadingLink href="https://audio-insights.603.nz">
                Audio Insights
              </HeadingLink>
              <Space auto />
              <a href="https://github.com/jch254/audio-insights" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Flex>
            <Text small>
              Insights, visualizations and recommendations derived from your Spotify library.
              Powered by React, Redux and Redux-saga.
            </Text>
          </Card>
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <a href="https://starter-pack-typescript.603.nz">
              <CardImage src="/img/SP.png" />
            </a>
            <Flex align="center">
              <HeadingLink href="https://starter-pack-typescript.603.nz">
                Starter Pack
              </HeadingLink>
              <Space auto />
              <a href="https://github.com/jch254/starter-pack" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Flex>
            <Text small>
              Combines React (ft. hooks), Redux, Redux-saga and TypeScript with Auth0 as a starting point
              for modern web apps with solid authentication.
            </Text>
          </Card>
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <a href="https://serverless-api.603.nz">
              <CardImage src="/img/SA.png" />
            </a>
            <Flex align="center">
              <HeadingLink href="https://serverless-api.603.nz">
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
              API powered by Serverless, TypeScript, Webpack and DynamoDB, intended as a starting
              point for Serverless APIs.
            </Text>
          </Card>
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <a href="https://github.com/jch254/discogs-market-monitor" target="_blank" rel="noopener noreferrer">
              <CardImage src="/img/Wax.jpeg" />
            </a>
            <Heading>
              <a href="https://github.com/jch254/discogs-market-monitor" target="_blank" rel="noopener noreferrer">
                Discogs Wantlist Monitor
              </a>
            </Heading>
            <Text small>
              Saves manually searching through your Discogs wantlist for local listings
            </Text>
          </Card>
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <a href="https://github.com/jch254/terraform-ecs-autoscale-alb" target="_blank" rel="noopener noreferrer">
              <CardImage src="/img/TF.png" />
            </a>
            <Heading>
              <a href="https://github.com/jch254/terraform-ecs-autoscale-alb" target="_blank" rel="noopener noreferrer">
                Terraform ECS Demo
              </a>
            </Heading>
            <Text small>
              AWS ECS cluster with instance and service autoscaling configured and running behind an
              ALB with path based routing set up.
            </Text>
          </Card>
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <CardImage src="/img/Matrix.gif" />
            <Flex align="center">
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
        <Block>
          <Blockquote href="https://www.youtube.com/watch?v=BtpHbpuZT-c" source="Skepta">
            &quot;Everyday, bro, we&#39;ve gotta stay battling, gotta stay fighting, gotta stay striving,
            gotta stay dreaming, gotta stay believing, gotta stay scheming...&quot;
          </Blockquote>
        </Block>
      </Section>
    </Flex>
  </Container>
);

export default Main;

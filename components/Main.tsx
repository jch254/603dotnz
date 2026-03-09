import * as React from 'react';
import { Flex } from 'reflexbox';
import {
  Container,
  Heading,
  Card,
  CardImage,
  Space,
  Text,
  Section,
  SectionHeader,
  Block,
  Media,
} from 'rebass';

const Main: React.FC = () => (
  <Container pb={3}>
    <Flex column>
      <Block pt={4} mt={3} mb={0}>
        <Media m={0} align="center" img="img/Goku.png">
          <Heading size={2} big>
            Kia ora,{' '}
            <a
              href="https://jch254.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'underline' }}
            >
              I&#39;m Jordan
            </a>
          </Heading>
        </Media>
      </Block>
      <Section pb={0}>
        <SectionHeader heading="About" mt={0} />
        <Section pb={0} pt={0}>
          <p style={{ fontSize: '20px' }}>
            Kia ora, I&#39;m Jordan — by trade a developer, but really a problem
            solver. I&#39;ve spent years building and breaking things across
            distributed systems, scalable APIs, microservices, cloud
            infrastructure, and integrations. I even dip into UI now and then,
            just to keep things interesting.
            <br />
            <br />
            I like to think of code the way I think of music: every layer
            matters, and when you understand how it all fits together, you can
            create something that works in harmony. That&#39;s why I believe in
            understanding the full stack — it lets me architect stronger, more
            resilient systems and debug issues without guesswork.
            <br />
            <br />
            I love the thrill of starting from scratch and spinning up new
            applications, but I also respect the craft of maintaining and
            evolving what&#39;s already there. Greenfield or legacy —
            there&#39;s always a groove to find.
            <br />
            <br />
            <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
              This is my little engineering lab on the Internet — where I share
              systems, experiments and projects I build.
            </span>
          </p>
        </Section>
      </Section>
      <Section pb={0} pt={3}>
        <SectionHeader mt={0} heading="Engineering Systems & Projects" />
        <p style={{ fontSize: '20px' }}>
          A selection of systems and experiments exploring cloud architecture,
          APIs, automation and data pipelines.
        </p>
        <Flex align="center" justify="center" wrap gutter={2}>
          {/* Row 1: Production product, automation system, engineering infrastructure */}
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <a
              href="https://lat.nz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardImage src="img/LushAuralTreats.svg" />
            </a>
            <Heading>
              <a
                href="https://lat.nz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lush Aural Treats
              </a>
            </Heading>
            <Text small>
              AI-assisted music discovery platform that ingests Spotify links
              and generates album reviews automatically.
            </Text>
          </Card>
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <a
              href="https://github.com/jch254/discogs-market-monitor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardImage src="img/Wax.jpeg" />
            </a>
            <Heading>
              <a
                href="https://github.com/jch254/discogs-market-monitor"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discogs Wantlist Monitor
              </a>
            </Heading>
            <Text small>
              Automated monitor that scans Discogs marketplace listings against
              your wantlist and highlights local matches.
            </Text>
          </Card>
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <a
              href="https://github.com/jch254/buildpipeline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardImage src="img/BuildPipeline.png" />
            </a>
            <Flex align="center">
              <Heading>
                <a
                  href="https://github.com/jch254/buildpipeline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BuildPipeline
                </a>
              </Heading>
            </Flex>
            <Text small>
              AWS-powered CI/CD pipeline demonstrating automated build, test
              and deployment across multiple environments.
            </Text>
          </Card>
          {/* Row 2: API architecture, infrastructure as code, integrations */}
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <a
              href="https://github.com/jch254/serverless-node-dynamodb-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardImage src="img/SA.png" />
            </a>
            <Flex align="center">
              <Heading>
                <a
                  href="https://github.com/jch254/serverless-node-dynamodb-api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Serverless API
                </a>
              </Heading>
            </Flex>
            <Text small>
              Example serverless API architecture built with AWS Lambda,
              TypeScript and DynamoDB.
            </Text>
          </Card>
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <a
              href="https://github.com/jch254/terraform-ecs-autoscale-alb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardImage src="img/TF.png" />
            </a>
            <Heading>
              <a
                href="https://github.com/jch254/terraform-ecs-autoscale-alb"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terraform ECS Demo
              </a>
            </Heading>
            <Text small>
              Infrastructure-as-code demo provisioning an ECS cluster with
              autoscaling services behind an Application Load Balancer.
            </Text>
          </Card>
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <a
              href="https://github.com/jch254/audio-insights"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardImage src="img/AI.png" />
            </a>
            <Flex align="center">
              <Heading>
                <a
                  href="https://github.com/jch254/audio-insights"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Audio Insights
                </a>
              </Heading>
            </Flex>
            <Text small>
              Spotify audio feature explorer and visualisation UI built with
              React and the Spotify API.
            </Text>
          </Card>
          {/* Row 3: Developer tooling */}
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <a
              href="https://github.com/jch254/starter-pack"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardImage src="img/SP.png" />
            </a>
            <Flex align="center">
              <Heading>
                <a
                  href="https://github.com/jch254/starter-pack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Starter Pack
                </a>
              </Heading>
            </Flex>
            <Text small>
              React + Auth0 starter architecture combining Redux, Redux-Saga
              and TypeScript.
            </Text>
          </Card>
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <a
              href="https://m.me/scopebot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardImage src="img/Scope.jpg" />
            </a>
            <Flex align="center">
              <Heading>
                <a
                  href="https://m.me/scopebot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Scope
                </a>
              </Heading>
              <Space auto />
              <a
                href="https://www.producthunt.com/posts/scope-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Product Hunt
              </a>
              &nbsp;|&nbsp;
              <a
                href="https://github.com/jch254/scope-lex-handler"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Flex>
            <Text small>
              Facebook Messenger bot that identifies songs from lyrics and
              titles using AWS Lex and Lambda.
            </Text>
          </Card>
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <CardImage src="img/Scratchpad.png" />
            <Heading>Scratchpad</Heading>
            <Text small>
              Personal repository for ideas, notes and experiments collected
              during projects.
            </Text>
          </Card>
        </Flex>
      </Section>
      <Section pb={0} pt={3}>
        <SectionHeader mt={0} heading="Engineering Infrastructure" />
        <p style={{ fontSize: '20px' }}>
          Container images and tooling used to build, test and deploy cloud
          infrastructure and serverless applications.
        </p>
        <Flex align="center" justify="center" wrap gutter={2}>
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <a
              href="https://github.com/jch254/docker-node-serverless"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardImage src="img/Serverless.png" />
            </a>
            <Heading>
              <a
                href="https://github.com/jch254/docker-node-serverless"
                target="_blank"
                rel="noopener noreferrer"
              >
                docker-node-serverless
              </a>
            </Heading>
            <Text small>
              Docker build environment for Node.js serverless applications with
              AWS and Terraform tooling.
            </Text>
          </Card>
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <a
              href="https://github.com/jch254/docker-node-terraform-aws"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardImage src="img/TF.png" />
            </a>
            <Heading>
              <a
                href="https://github.com/jch254/docker-node-terraform-aws"
                target="_blank"
                rel="noopener noreferrer"
              >
                docker-node-terraform
              </a>
            </Heading>
            <Text small>
              Node.js + Terraform container image for AWS infrastructure
              provisioning and deployment automation.
            </Text>
          </Card>
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <a
              href="https://github.com/jch254/dind-terraform-aws"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardImage src="img/Docker.png" />
            </a>
            <Heading>
              <a
                href="https://github.com/jch254/dind-terraform-aws"
                target="_blank"
                rel="noopener noreferrer"
              >
                dind-terraform-aws
              </a>
            </Heading>
            <Text small>
              Docker-in-Docker CI environment used to build containers and
              deploy Terraform infrastructure.
            </Text>
          </Card>
        </Flex>
      </Section>
      <Section>
        <Block>
          <blockquote style={{
            fontSize: '1.25rem', fontStyle: 'italic', margin: 0, marginBottom: '1rem',
          }}
          >
            <p style={{ margin: 0, marginBottom: '0.5rem' }}>
              &quot;Everyday, bro, we&#39;ve gotta stay battling, gotta stay
              fighting, gotta stay striving, gotta stay dreaming, gotta stay
              believing, gotta stay scheming...&quot;
            </p>
            <cite style={{ fontSize: '0.875rem', fontStyle: 'normal' }}>
              {'— '}
              <a
                href="https://www.youtube.com/watch?v=BtpHbpuZT-c"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit' }}
              >
                Skepta
              </a>
            </cite>
          </blockquote>
        </Block>
      </Section>
    </Flex>
  </Container>
);

export default Main;

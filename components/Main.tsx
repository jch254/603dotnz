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
            Kia ora, I&#39;m Jordan. I design and build software systems that move from idea to working product:
            backend services, APIs, infrastructure, automation, data pipelines, and the occasional UI.
            <br />
            <br />
            My bias is toward systems that are small enough to understand and solid enough to run.
            I like explicit architecture, boring infrastructure, clear operational behaviour,
            and software that can evolve without becoming mysterious.
            <br />
            <br />
            603.nz is my engineering lab on the internet. It is where I publish live products,
            reference architectures, experiments, and notes from building things properly.
          </p>
        </Section>
      </Section>
      <Section pb={0} pt={3}>
        <SectionHeader mt={0} heading="Latest writing" />
        <div style={{ fontSize: '20px' }}>
          <p style={{ margin: '0.75rem 0' }}>
            {'→ '}
            <a
              href="https://jch254.com/blog/google-nzpost-and-internet-archaeology/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google, NZ Post and the Ghosts in Legacy Infrastructure
            </a>
          </p>
          <p style={{ margin: '0.75rem 0' }}>
            {'→ '}
            <a
              href="https://jch254.com/blog/reality-is-still-contested/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reality Is Still Contested
            </a>
          </p>
          <p style={{ margin: '0.75rem 0' }}>
            {'→ '}
            <a
              href="https://jch254.com/blog/renaming-github-repo-breaks-codebuild"
              target="_blank"
              rel="noopener noreferrer"
            >
              Renaming a GitHub Repo Silently Breaks AWS CodeBuild
            </a>
          </p>
          <p style={{ margin: '1.25rem 0 0' }}>
            <a
              href="https://jch254.com/blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              View all posts →
            </a>
          </p>
        </div>
      </Section>
      <Section pb={0} pt={3}>
        <SectionHeader mt={0} heading="Engineering Systems & Projects" />
        <p style={{ fontSize: '20px' }}>
          A collection of live products, deployable demos, and open-source engineering systems.
        </p>
        <p style={{ fontSize: '20px' }}>
          Some projects are full products. Some are scaffolds for future products.
          Some are focused experiments around infrastructure, AI workflows, automation, or data movement.
        </p>
        <p style={{ fontSize: '20px' }}>
          The shared goal is practical engineering:
          build the thing, deploy it, understand the trade-offs, and leave a clear path for what comes next.
        </p>
        <Flex align="center" justify="center" wrap gutter={2}>
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <a
              href="https://reference-architecture.603.nz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardImage src="img/RA.png" />
            </a>
            <Flex align="center">
              <Heading>
                <a
                  href="https://reference-architecture.603.nz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reference Arch
                </a>
              </Heading>
              <Space auto />
              <a
                href="https://github.com/jch254/reference-architecture"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Flex>
            <Text small>
              Minimal, production-ready architecture for scaffolding new
              applications using LLM-assisted workflows.
            </Text>
          </Card>
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <a
              href="https://handscape.health"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardImage src="img/HS.png" />
            </a>
            <Heading>
              <a
                href="https://handscape.health"
                target="_blank"
                rel="noopener noreferrer"
              >
                Handscape
              </a>
            </Heading>
            <Text small>
              AR-assisted Korean Hand Acupressure app with reference-backed sessions, body-mapping education, and
              practicals hand-care routines.
            </Text>
          </Card>
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <a
              href="https://namasteapp.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardImage src="img/NA.png" />
            </a>
            <Heading>
              <a
                href="https://namasteapp.tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                Namaste
              </a>
            </Heading>
            <Text small>
              GTD task management system with workspaces, scheduling, repeats,
              bulk capture, and an MCP server for AI agent integration.
            </Text>
          </Card>
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <a
              href="https://lushauraltreats.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardImage src="img/LushAuralTreats.svg" />
            </a>
            <Heading>
              <a
                href="https://lushauraltreats.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lush Aural Treats
              </a>
            </Heading>
            <Text small>
              AI-assisted music discovery platform that ingests album links via email
              and generates structured reviews automatically.
            </Text>
          </Card>
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <a
              href="https://buildpipeline--prod.603.nz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardImage src="img/BuildPipeline.png" />
            </a>
            <Flex align="center">
              <Heading>
                <a
                  href="https://buildpipeline--prod.603.nz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BuildPipeline
                </a>
              </Heading>
              <Space auto />
              <a
                href="https://github.com/jch254/buildpipeline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Flex>
            <Text small>
              CI/CD system on AWS for automated build, test, and deployment
              across multiple environments.
            </Text>
          </Card>
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <a
              href="https://starter-pack.603.nz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardImage src="img/SP.png" />
            </a>
            <Flex align="center">
              <Heading>
                <a
                  href="https://starter-pack.603.nz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Starter Pack
                </a>
              </Heading>
              <Space auto />
              <a
                href="https://github.com/jch254/starter-pack"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Flex>
            <Text small>
              React + Auth0 application scaffold using Redux, Redux-Saga,
              and TypeScript.
            </Text>
          </Card>
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <a
              href="https://serverless-api.603.nz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardImage src="img/SA.png" />
            </a>
            <Flex align="center">
              <Heading>
                <a
                  href="https://serverless-api.603.nz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Serverless API
                </a>
              </Heading>
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
              Reference serverless architecture using AWS Lambda,
              TypeScript, and DynamoDB.
            </Text>
          </Card>
          <Card m={2} style={{ width: '309px', height: '333px' }}>
            <a
              href="https://audio-insights.603.nz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardImage src="img/AI.png" />
            </a>
            <Flex align="center">
              <Heading>
                <a
                  href="https://audio-insights.603.nz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Audio Insights
                </a>
              </Heading>
              <Space auto />
              <a
                href="https://github.com/jch254/audio-insights"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Flex>
            <Text small>
              Spotify data exploration and visualisation tool built with
              React and the Spotify API.
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
              Automated system that monitors Discogs marketplace listings against
              a user&#39;s wantlist and surfaces local matches.
            </Text>
          </Card>

        </Flex>
      </Section>
      <Section pb={0} pt={3}>
        <SectionHeader mt={0} heading="Engineering Infrastructure" />
        <p style={{ fontSize: '20px' }}>
          Container images and tooling for building, testing, and deploying
          cloud infrastructure and serverless applications.
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
              Docker-based build environment for Node.js serverless applications
              with AWS and Terraform tooling.
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
              provisioning and deployment.
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
              Docker-in-Docker CI environment for building containers and
              deploying Terraform-based infrastructure.
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

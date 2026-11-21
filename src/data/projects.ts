/**
 * Every project on 603.nz. The page reads nothing else.
 *
 * Featured products come first, in the order they appear. The index follows:
 * open-source projects, then infrastructure. Years are the year of the first
 * commit in each project's own repo.
 */
import type { ImageMetadata } from 'astro';
import studioShot from '../assets/shots/studio.png';
import questShot from '../assets/shots/03-quest.jpg';
import namasteShot from '../assets/shots/namaste.png';
import handscapeShot from '../assets/shots/handscape.png';
import lushShot from '../assets/shots/lush-aural-treats.png';

export interface Link {
  label: string;
  href: string;
}

export interface Product {
  name: string;
  /** Written beside the green node, so the state never rests on colour. */
  status: string;
  year: number;
  /** What it does, in one or two sentences. */
  description: string;
  /** What it is built with. Set in mono with middle dots. */
  stack: string[];
  /** The one button. */
  primary: Link;
  /** One text link, where the product has a second place to go. */
  secondary?: Link;
  /** 2880 by 1800: 1440 by 900 at a device scale factor of 2. */
  shot: ImageMetadata;
  shotAlt: string;
}

export interface IndexEntry {
  year: number;
  name: string;
  /** One line. */
  text: string;
  stack?: string[];
  /** For an entry with no interface: the line you would type to use it. */
  command?: string;
  live?: string;
  source?: string;
}

export interface IndexGroup {
  label: string;
  entries: IndexEntry[];
}

export const products: Product[] = [
  {
    name: 'Studio',
    status: 'Invite-only beta',
    year: 2026,
    description:
      'A digital audio workstation that runs in a browser tab, with a timeline, piano roll, drum machine and mixer. Ask a track for a part and it lands as an ordinary clip you can edit, undo or delete.',
    stack: ['React', 'Tone.js', 'NestJS', 'DynamoDB', 'Lambda'],
    primary: { label: 'Open Studio', href: 'https://studio.603.nz' },
    secondary: { label: 'Try the editor', href: 'https://studio.603.nz/try' },
    shot: studioShot,
    shotAlt: 'The Studio editor: eight tracks of a demo song on the timeline, above a piano roll.',
  },
  {
    name: '03 Quest',
    status: 'Live',
    year: 2026,
    description:
      'A third-person open-world crime sandbox set in Canterbury around 1995, with pre-earthquake Christchurch and Timaru joined by State Highway 1. It runs entirely in the browser, with no backend and no accounts, and the car radio plays real New Zealand stations.',
    stack: ['Three.js', 'Rapier', 'TypeScript', 'Vite'],
    primary: { label: 'Play 03 Quest', href: 'https://03.quest' },
    secondary: { label: 'Source', href: 'https://github.com/jch254/the-03' },
    shot: questShot,
    shotAlt: 'The 03 Quest title screen: a man in a checked shirt stands on the Bay Hill in Timaru at dusk.',
  },
  {
    name: 'Namaste',
    status: 'Live',
    year: 2026,
    description:
      'A GTD task manager for web, Android and iOS. Whatever you capture lands in the Inbox, by typing, by email or from an agent over MCP, then each task moves through next, waiting, scheduled and done.',
    stack: ['React', 'React Native', 'NestJS', 'DynamoDB', 'Lambda'],
    primary: { label: 'Open Namaste', href: 'https://namasteapp.tech' },
    shot: namasteShot,
    shotAlt: 'The Namaste home page, with the Today view of the app showing seven tasks.',
  },
  {
    name: 'Handscape',
    status: 'Live',
    year: 2026,
    description:
      'A Korean hand acupressure app. It uses the phone camera to map fourteen points onto your hand, then guides each press, paced to your breath.',
    stack: ['React Native', 'React', 'NestJS', 'DynamoDB', 'Lambda'],
    primary: { label: 'Open Handscape', href: 'https://handscape.health' },
    shot: handscapeShot,
    shotAlt: 'The Handscape home page, with the app guiding a press on a point called Heart Calm.',
  },
  {
    name: 'Lush Aural Treats',
    status: 'Live',
    year: 2025,
    description:
      'A private music exchange for a group of friends. Email an album link to your exchange and it becomes a post with artwork, track details, a preview and an AI-written review.',
    stack: ['NestJS', 'TypeScript', 'DynamoDB', 'SES', 'ECS'],
    primary: { label: 'Open Lush Aural Treats', href: 'https://lushauraltreats.com' },
    secondary: { label: 'Explore the demo', href: 'https://demo.lushauraltreats.com' },
    shot: lushShot,
    shotAlt: 'The demo exchange on Lush Aural Treats: a feed of shared albums, each with artwork and a review.',
  },
];

export const index: IndexGroup[] = [
  {
    label: 'Open source',
    entries: [
      {
        year: 2026,
        name: 'Reference Architecture',
        text: 'A minimal base for scaffolding new applications with LLM-assisted workflows.',
        stack: ['Docker', 'Terraform', 'AWS', 'NestJS', 'React'],
        live: 'https://reference-architecture.603.nz',
        source: 'https://github.com/jch254/reference-architecture',
      },
      {
        year: 2022,
        name: 'Discogs Monitor',
        text: 'Emails you new Discogs marketplace listings for records on your wantlist.',
        stack: ['TypeScript', 'Step Functions', 'DynamoDB'],
        live: 'https://discogs.603.nz',
        source: 'https://github.com/jch254/discogs-market-monitor',
      },
      {
        year: 2017,
        name: 'BuildPipeline',
        text: 'A scripted build, test and deploy pipeline on AWS, with two environments.',
        stack: ['CodeBuild', 'CodePipeline', 'Terraform'],
        live: 'https://buildpipeline--prod.603.nz',
        source: 'https://github.com/jch254/buildpipeline',
      },
      {
        year: 2016,
        name: 'Serverless API',
        text: 'A reference serverless API on AWS Lambda, backed by DynamoDB.',
        stack: ['TypeScript', 'Lambda', 'DynamoDB'],
        live: 'https://serverless-api.603.nz',
        source: 'https://github.com/jch254/serverless-node-dynamodb-api',
      },
      {
        year: 2016,
        name: 'Starter Pack',
        text: 'A React application scaffold with Auth0 sign-in already wired up.',
        stack: ['React', 'Redux-Saga', 'TypeScript'],
        live: 'https://starter-pack.603.nz',
        source: 'https://github.com/jch254/starter-pack',
      },
      {
        year: 2016,
        name: 'Audio Insights',
        text: 'Explores and charts your Spotify listening data.',
        stack: ['React', 'Redux', 'Spotify API'],
        live: 'https://audio-insights.603.nz',
        source: 'https://github.com/jch254/audio-insights',
      },
    ],
  },
  {
    label: 'Infrastructure',
    entries: [
      {
        year: 2017,
        name: 'dind-terraform-aws',
        text: 'Docker-in-Docker with Terraform and the AWS CLI, for CodeBuild.',
        command: 'docker pull jch254/dind-terraform-aws',
        source: 'https://github.com/jch254/dind-terraform-aws',
      },
      {
        year: 2016,
        name: 'docker-node-terraform-aws',
        text: 'A Node.js and Terraform image for deploying to AWS from CI.',
        command: 'docker pull jch254/docker-node-terraform-aws',
        source: 'https://github.com/jch254/docker-node-terraform-aws',
      },
      {
        year: 2016,
        name: 'docker-node-serverless',
        text: 'A build and deploy image for Serverless Framework services.',
        command: 'docker pull jch254/docker-node-serverless',
        source: 'https://github.com/jch254/docker-node-serverless',
      },
    ],
  },
];

/** The quote that closes the page. */
export const quote = {
  text: "Everyday, bro, we've gotta stay battling, gotta stay fighting, gotta stay striving, gotta stay dreaming, gotta stay believing, gotta stay scheming...",
  by: 'Skepta',
  href: 'https://www.youtube.com/watch?v=BtpHbpuZT-c',
};

import React from "react";
import Head from "next/head";
import tw from "twin.macro";
/** @jsx jsx **/
import { css, jsx } from "@emotion/react";
import BlockContent from "@sanity/block-content-to-react";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNextDotJs,
  SiTailwindcss,
  SiNodeDotJs,
  SiDocker,
} from "react-icons/si";

import client from "@lib/sanity";
import Layout from "@components/layout";
import Container from "@components/container";
import Header from "@components/Header";
import Intro from "@components/intro";

const iconStyles = css`
  ${tw`h-20 w-20 border-2 shadow-md border-gray-200 rounded-md p-2`}
`;

const skills = [
  {
    title: "CSS",
    component: <SiCss3 css={iconStyles} />,
  },
  {
    title: "HTML",
    component: <SiHtml5 css={iconStyles} />,
  },
  {
    title: "JavaScript",
    component: <SiJavascript css={iconStyles} />,
  },
  {
    title: "React",
    component: <SiReact css={iconStyles} />,
  },
  {
    title: "Next.js",
    component: <SiNextDotJs css={iconStyles} />,
  },
  {
    title: "Tailwind",
    component: <SiTailwindcss css={iconStyles} />,
  },
  {
    title: "Node.js",
    component: <SiNodeDotJs css={iconStyles} />,
  },
  {
    title: "Docker",
    component: <SiDocker css={iconStyles} />,
  },
];

const keywords = [
  "malaysia",
  "software engineer",
  "software developer",
  "mudah",
];

const Profile = ({ preview, ...props }) => {
  return (
    <>
      <Head>
        <title>About Kamal Arieff</title>
        <meta
          name="description"
          content="About Kamal Arieff"
          key="description"
        />
        <meta name="keywords" content={keywords.join(", ")} key="keywords" />
      </Head>
      <Layout preview={preview}>
        <Header />
        <Container>
          <Intro title="About me" />
          {/*
        <div tw="space-y-4 md:(bg-blue-200 -m-4 p-4 rounded)">
          */}
          <div tw="space-y-4 max-w-2xl mx-auto mb-32">
            <div tw="flex items-center space-x-4">
              <img src={props.imageUrl} tw="w-24 h-24" />
              <p tw="text-3xl font-bold">{props.name}</p>
            </div>
            <BlockContent blocks={props.bio} />
            <div tw="space-y-2">
              <p tw="text-2xl font-bold">Skills</p>
              <div tw="flex flex-wrap w-full">
                {skills.map(({ title, component }) => {
                  return (
                    <div
                      key={title}
                      title={title}
                      tw="w-1/3 md:w-1/6 flex flex-col justify-center items-center my-4 space-y-2"
                    >
                      {component}
                      <span tw="text-xs text-gray-500">{title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const [data] = await client.fetch(`*[_type == "author"]{
        name,
        bio,
        proficiencies,
        "imageUrl": image.asset->url
    }`);
  return {
    props: data,
    revalidate: 1,
  };
}

export default Profile;

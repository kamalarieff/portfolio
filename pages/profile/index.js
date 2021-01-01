import React from "react";
import "twin.macro";
/** @jsx jsx **/
import { css, jsx } from "@emotion/react";
import BlockContent from "@sanity/block-content-to-react";

import client from "@lib/sanity";
import Layout from "@components/layout";
import Container from "@components/container";
import Header from "@components/Header";

const Profile = ({ preview, ...props }) => {
  return (
    <Layout preview={preview}>
      <Header />
      <Container>
        {/*
        <div tw="space-y-4 md:(bg-blue-200 -m-4 p-4 rounded)">
          */}
        <div tw="space-y-4 max-w-2xl mx-auto">
          <div tw="flex items-center space-x-4">
            <img src={props.imageUrl} tw="w-24 h-24" />
            <p tw="text-3xl font-bold">{props.name}</p>
          </div>
          <BlockContent blocks={props.bio} />
          <div tw="space-y-2">
            <p tw="text-2xl font-bold">Proficiencies</p>
            <ul tw="list-disc list-inside">
              {props.proficiencies.map((language) => {
                return (
                  <li tw="ml-4" key={language}>
                    {language}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export async function getStaticProps() {
  const [data] = await client.fetch(`*[_type == "author"]{
        name,
        bio,
        proficiencies,
        "imageUrl": image.asset->url
    }`);
  console.log("data", data);
  return {
    props: data,
    revalidate: 1,
  };
}

export default Profile;

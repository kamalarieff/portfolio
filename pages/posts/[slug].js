import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";

import Container from "@components/container";
import PostBody from "@components/post-body";
import MoreStories from "@components/more-stories";
import Header from "@components/Header";
import PostHeader from "@components/post-header";
import Comments from "@components/comments";
import SectionSeparator from "@components/section-separator";
import Layout from "@components/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "@lib/api";
import PostTitle from "@components/post-title";
import { CMS_NAME } from "@lib/constants";
import Form from "@components/form";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Header />
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="max-w-5xl mx-auto">
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta name="description" content={post.description} />
                <meta
                  name="keywords"
                  content={post?.keywords?.join(", ") || ""}
                />
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.body} />
            </article>
            <SectionSeparator />
            <div className="max-w-5xl mx-auto">
              <Comments comments={post.comments} />
              <Form _id={post._id} />
            </div>

            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}

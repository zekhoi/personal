import Layout from "../layouts/Layout";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { getMarkdown } from "../utils/data";
import { NextSeo } from "next-seo";

export default function About({ about }) {
  return (
    <>
      <NextSeo
        title="Memo"
        titleTemplate="%s | Khoironi Kurnia Syah"
        description="Want to know about me more? Check it out i have written it here, let be a friend."
      />
      <Layout>
        <div className="flex w-full min-h-screen pt-20 text-gray-700 bg-white dark:bg-dark dark:text-gray-100 md:pt-28">
          <div className="container w-full px-4 mx-auto md:w-4/5 lg:w-3/5">
            <div className="flex flex-col mb-6">
              <h1 className="font-mono text-2xl font-bold md:text-3xl">
                My Memo.
              </h1>

              <article className="prose text-justify md:prose-xl 2xl:prose-2xl dark:prose-dark max-w-none">
                <MDXRemote {...about} />
              </article>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const { content } = getMarkdown("memo");
  const mdxSource = await serialize(content);
  return {
    props: {
      about: mdxSource,
    },
  };
}

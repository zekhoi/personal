import Layout from "../layouts/Layout";
import Image from "next/image";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { getMarkdown } from "../utils/data";
import { NextSeo } from "next-seo";

import profile from "../profile.config";

export default function About({ about }) {
  return (
    <>
      <NextSeo
        title="About"
        titleTemplate="%s | Khoironi Kurnia Syah"
        description="Want to know about me more? Check it out i have written it here, let be a friend."
      />
      <Layout>
        <div className="flex w-full min-h-screen pt-20 text-gray-700 bg-white dark:bg-dark dark:text-gray-100 md:pt-28">
          <div className="container w-full px-4 mx-auto md:w-4/5 lg:w-3/5">
            <div className="flex flex-col mb-6">
              <h1 className="font-mono text-2xl font-bold md:text-3xl">
                About Developer.
              </h1>
              <div className="py-3 text-center">
                <Image
                  className="rounded-full"
                  src={profile.image}
                  alt={profile.name}
                  width={200}
                  height={200}
                />
                <h2 className="mt-3 font-mono text-2xl font-medium">
                  {profile.name}
                </h2>
              </div>

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
  const { content } = getMarkdown("about");
  const mdxSource = await serialize(content);
  return {
    props: {
      about: mdxSource,
    },
  };
}

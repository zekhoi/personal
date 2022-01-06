import Image from "next/image";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Layout from "../../layouts/Layout";
import { getAllPosts } from "../../utils/data";
import { NextSeo } from "next-seo";

export default function BlogPage({
  title = null,
  author = null,
  date = null,
  summary = null,
  thumbnail = null,
  tags = null,
  content,
  path = null,
}) {
  return (
    <>
      <NextSeo
        title={title}
        description={summary}
        canonical={process.env.MYDOMAIN + "/p/" + path}
        openGraph={{
          url: process.env.MYDOMAIN + "/p/" + path,
          title: title,
          description: summary,
          images: [
            {
              url: process.env.MYDOMAIN + thumbnail,
              width: 1200,
              height: 630,
              alt: summary,
            },
          ],
        }}
      />
      <Layout>
        <div className="pt-20 text-gray-700 bg-white dark:bg-dark dark:text-gray-100 md:pt-28">
          <div className="container px-4 md:mx-auto md:w-4/5 lg:w-3/5">
            <div className="items-center py-2 mx-auto">
              <Link href="/blog" passHref>
                <button
                  className="flex items-center px-4 py-2 mb-6 font-bold text-yellow-800 bg-yellow-300 rounded focus:outline-none gap-x-1"
                  type="button"
                  style={{ transition: "all .15s ease" }}
                >
                  <ion-icon name="arrow-back-circle" /> Go Back
                </button>
              </Link>

              <div className="mb-4 font-mono">
                <h1 className="w-auto text-2xl font-bold md:text-3xl md:mx-auto">
                  {title}
                </h1>
                <h2 className="my-2 text-sm text-gray-600 md:text-base">
                  By{" "}
                  <Link href="/about">
                    <a className="font-bold text-blue-500 underline">
                      {author}
                    </a>
                  </Link>{" "}
                  on {format(parseISO(date), "MMMM dd, yyyy")}
                </h2>
                <div className="flex overflow-auto gap-x-2">
                  {tags.map((tag, i) => (
                    <a
                      className="px-3 py-1 text-xs font-bold text-yellow-800 bg-yellow-300 rounded cursor-pointer hover:bg-opacity-80"
                      key={i}
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex mb-8">
                  <Image
                    className="w-full rounded-md"
                    src={thumbnail}
                    alt={title}
                    width={1600}
                    height={900}
                  />
                </div>
                <article className="mb-10 prose text-justify lg:prose-xl dark:prose-dark max-w-none">
                  <MDXRemote {...content} />
                </article>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const allPosts = getAllPosts();
  const { data, content, tags } = allPosts.find(
    (item) => item.slug === params.slug,
  );
  const mdxSource = await serialize(content);
  return {
    props: {
      author: data.author,
      path: params.slug,
      ...data,
      date: data.date.toISOString(),
      content: mdxSource,
      tags: tags,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}

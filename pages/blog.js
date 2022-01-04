import { useState } from "react";
import { getAllPosts } from "../utils/data";
import Layout from "../layouts/Layout";
import { NextSeo } from "next-seo";
import BlogListItem from "../components/commons/BlogListItem";

export default function Blog({ posts }) {
  const [searchTerm, setSearchTerm] = useState("");

  // posts = false

  return (
    <>
      <NextSeo
        title="Blog"
        description="All of my articles and I made at least one every month, you can read all of them. Thank You!"
      />
      <Layout>
        <div className="flex w-full min-h-screen pt-20 text-gray-700 bg-white dark:bg-dark dark:text-gray-100 md:pt-28">
          <div className="container w-full px-4 mx-auto md:w-4/5 lg:w-3/5">
            <h1 className="font-mono text-2xl font-bold md:text-3xl">
              Articles
              <span className="px-3 text-yellow-800 bg-yellow-300 rounded">
                {posts ? posts.length : 0}
              </span>
              .
            </h1>

            <input
              className="w-full h-10 p-3 my-8 text-sm bg-white border-2 rounded dark:bg-dark focus:border-yellow-300 focus:outline-none"
              type="search"
              name="search"
              placeholder="Search . . ."
              autoComplete="off"
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div>
              {posts ? (
                posts
                  .sort((tpost, npost) => {
                    return tpost.date.localeCompare(npost.date);
                  })
                  .reverse()
                  .filter((item) => {
                    if (searchTerm == "") {
                      return item;
                    } else if (
                      item.title
                        .toLowerCase()
                        .includes(searchTerm.toLocaleLowerCase())
                    ) {
                      return item;
                    }
                  })
                  .map((item) => <BlogListItem key={item.slug} {...item} />)
              ) : (
                <h2 className="text-lg text-center">Will update it soon!</h2>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data,
        date: data.date.toISOString(),
        content,
        slug,
      })),
    },
  };
}

import { useEffect, useState } from "react";
import { getAllPosts } from "../utils/data";
import Layout from "../layouts/Layout";
import { NextSeo } from "next-seo";
import BlogListItem from "../components/item/BlogListItem";

export default function Blog({ posts }) {
  const [postList, setPostList] = useState([]);
  const [postLength, setPostLength] = useState(0);
  const searchContent = (data, keyword) => {
    const found = data.filter((item) => {
      if (keyword == "") {
        return item;
      } else if (
        item.title.toLowerCase().includes(keyword.toLocaleLowerCase())
      ) {
        return item;
      }
    });
    setPostLength(found.length);
    setPostList(found);
  };

  useEffect(() => {
    if (postList.length === 0) {
      setPostList(posts);
      setPostLength(posts.length);
    }
  }, [posts]);

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
                {postLength}
              </span>
              .
            </h1>

            <input
              className="w-full h-10 p-3 my-8 text-sm bg-white border-2 rounded dark:bg-dark focus:border-yellow-300 focus:outline-none"
              type="search"
              name="search"
              placeholder="Search . . ."
              autoComplete="off"
              onChange={(e) => searchContent(posts, e.target.value)}
            />

            <div>
              {postList.length !== 0 ? (
                postList
                  .sort((tpost, npost) => {
                    return tpost.date.localeCompare(npost.date);
                  })
                  .reverse()
                  .map((item) => <BlogListItem key={item.slug} {...item} />)
              ) : (
                <h2 className="text-lg text-center">No post found!</h2>
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

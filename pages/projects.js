import { NextSeo } from "next-seo";
import profile from "../profile.config";
import Layout from "../layouts/Layout";
import ProjectItem from "../components/item/ProjectItem";

export default function Projects({ projects }) {
  // projects = false;

  return (
    <>
      <NextSeo
        title="Projects"
        titleTemplate={"%s | " + profile.name}
        description="All of my projects i have made before, currently i am building a new one."
      />
      <Layout>
        <div className="flex w-full min-h-screen pt-20 text-gray-700 bg-white dark:bg-dark dark:text-gray-100 md:pt-28">
          <div className="container w-full px-4 mx-auto mb-10 md:w-4/5 lg:w-3/5">
            <h1 className="mb-4 font-mono text-2xl font-bold md:text-3xl">
              Projects
              <a className="px-3 text-yellow-800 bg-yellow-300 rounded">
                {projects ? projects.length : 0}
              </a>
              .
            </h1>

            <div className="w-full">
              {projects ? (
                projects.map((item) => (
                  <ProjectItem key={item.title} {...item} />
                ))
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
  const { projects } = require("../_contents/projects.json");
  return {
    props: {
      projects: projects.map(
        ({ title, icon, repository, link, description }) => ({
          title,
          icon,
          repository,
          link,
          description,
        }),
      ),
    },
  };
}

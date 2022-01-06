import Layout from "../layouts/Layout";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { getContact } from "../utils/data";
import profile from "../profile.config";
import { NextSeo } from "next-seo";
import BrandIcon from "../components/icon/BrandIcon";

export default function Contact({ content }) {
  const socials = profile.contact.socialMedia;

  return (
    <>
      <NextSeo
        title="Contact"
        titleTemplate={"%s | " + profile.name}
        description="This is my contact and social media, you can connect with me anytime you want."
      />
      <Layout>
        <div className="flex w-full min-h-screen pt-20 text-gray-700 bg-white dark:bg-dark dark:text-gray-100 md:pt-28">
          <div className="container w-full px-4 mx-auto md:w-4/5 lg:w-3/5">
            <h1 className="font-mono text-2xl font-bold md:text-3xl">
              Contact.
            </h1>
            <article className="prose text-justify md:prose-xl 2xl:prose-2xl dark:prose-dark max-w-none">
              <MDXRemote {...content} />
            </article>

            <div className="flex flex-row justify-around mt-8 text-xl">
              {Object.keys(socials).map((social) => (
                <BrandIcon
                  link={socials[social].link}
                  brand={social}
                  key={social}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const { content } = getContact();
  const mdxSource = await serialize(content);
  return {
    props: {
      content: mdxSource,
    },
  };
}

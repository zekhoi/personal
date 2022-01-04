import Layout from "../layouts/Layout";
import Image from "next/image";
import Link from "next/link";
import profile from "../profile.config";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title={profile.name}
        titleTemplate="%s"
        description={profile.description}
      />
      <Layout>
        <div className="flex items-center justify-center w-full min-h-screen text-gray-700 bg-white md:w-full dark:bg-dark dark:text-gray-100">
          <div className="container w-full px-4 mx-auto md:w-4/5 lg:w-3/5">
            <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-y-5">
              <div className="flex flex-col gap-y-4">
                <h1 className="font-mono text-3xl font-bold md:text-5xl 2xl:text-7xl">
                  {profile.role}
                </h1>
                <h2 className="font-mono text-sm 2xl:text-lg">
                  Hi, I&apos;m <a className="font-bold">{profile.name}</a>. A
                  passionate {profile.role} based in {profile.country}
                </h2>
                <div className="py-1">
                  <Link href={profile.resumeLink} passHref>
                    <button
                      className="flex items-center px-4 py-2 font-bold text-yellow-800 bg-yellow-300 rounded focus:outline-none gap-x-1"
                      type="button"
                    >
                      <ion-icon name="newspaper" /> Resume
                    </button>
                  </Link>
                </div>
              </div>
              <Image
                src="/images/svg/fullstack.svg"
                alt="Full-Stack Developer"
                width={700}
                height={360}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

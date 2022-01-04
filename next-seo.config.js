import profile from "./profile.config";

export default {
  title: profile.name,
  titleTemplate: "%s | " + profile.name,
  description:
    "Hi, my name is Khoironi Kurnia Syah and I am a Full-Stack Developer. Do you want to hire me?",
  canonical: process.env.MYDOMAIN,
  noindex: false,
  openGraph: {
    url: process.env.MYDOMAIN,
    title: "Khoironi Kurnia Syah",
    description:
      "Hi, my name is Khoironi Kurnia Syah and I am a Full-Stack Developer. Do you want to hire me?",
    images: [
      {
        url: process.env.MYDOMAIN + "/images/developer-notes.png",
        width: 1200,
        height: 630,
        alt: "Hi, my name is Khoironi Kurnia Syah and I am a Full-Stack Developer. Do you want to hire me?",
      },
    ],
    site_name: profile.name,
  },
  twitter: {
    handle: "@zekhoi",
    site: "@zekhoi",
    cardType: "summary_large_image",
  },
};

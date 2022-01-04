import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  const [navBackground, setNavBackground] = useState(false);
  const [dark, setDark] = useState(false);

  const handleDark = (value) => {
    localStorage.setItem("dark", value);

    setDark(value);

    const html = document.querySelector("html");

    if (value) {
      html.classList.add("dark");
      html.classList.remove("light");
    }
    if (!value) {
      html.classList.add("light");
      html.classList.remove("dark");
    }
  };

  useEffect(() => {
    handleDark(dark || localStorage.getItem("dark") == "true" ? true : false);

    const changeBackground = () => {
      if (window.scrollY >= 10) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }
    };
    changeBackground();

    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  });

  return (
    <div>
      <nav
        className={`fixed w-screen z-10 top-0 py-4 bg-white dark:bg-dark dark:text-gray-100 ${
          navBackground ? "shadow-md transition-shadow duration-75" : ""
        }`}
      >
        <div className="container w-auto px-4 mx-auto font-mono md:flex md:items-center md:w-4/5 lg:w-3/5">
          <div className="flex items-center justify-between w-full text-sm md:flex-row">
            <Link href="/">
              <a className="flex items-center p-1 text-2xl rounded focus:outline-none">
                <ion-icon name="code-slash" />
              </a>
            </Link>

            <Link href="/blog">
              <a
                className={`p-2 md:mx-4 opacity-70 ${
                  router.pathname === "/blog"
                    ? "font-semibold opacity-100"
                    : "hover:opacity-100"
                }`}
              >
                Blog
              </a>
            </Link>

            <Link href="/projects">
              <a
                className={`p-2 md:mx-4 opacity-70 ${
                  router.pathname === "/projects"
                    ? "font-semibold opacity-100"
                    : "hover:opacity-100"
                }`}
              >
                Projects
              </a>
            </Link>

            <Link href="/about">
              <a
                className={`p-2 md:mx-4 opacity-70 ${
                  router.pathname === "/about"
                    ? "font-semibold opacity-100"
                    : "hover:opacity-100"
                }`}
              >
                About
              </a>
            </Link>

            <Link href="/contact">
              <a
                className={`p-2 md:mx-4 opacity-70 ${
                  router.pathname === "/contact"
                    ? "font-semibold opacity-100"
                    : "hover:opacity-100"
                }`}
              >
                Contact
              </a>
            </Link>

            <button
              className="flex items-center p-1 text-2xl text-yellow-400 rounded focus:outline-none"
              onClick={() => handleDark(!dark)}
            >
              <ion-icon name={dark ? "moon" : "sunny"} />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import BrandIcon from "../../components/icon/BrandIcon";

export default function Footer() {
  const [over, setOver] = useState(false);

  useEffect(() => {
    const showButton = () => {
      if (window.scrollY >= 96) {
        setOver(true);
      } else {
        setOver(false);
      }
    };
    showButton();

    window.addEventListener("scroll", showButton);

    return () => {
      window.removeEventListener("scroll", showButton);
    };
  }, []);

  return (
    <div>
      <div className="min-w-full py-5 text-gray-700 bg-white dark:bg-dark dark:text-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-col items-center border-gray-300">
            <div className="flex flex-row py-4 space-x-4">
              <BrandIcon
                link="https://www.linkedin.com/in/khoironiks/"
                brand="linkedin"
              />
              <BrandIcon link="https://twitter.com/zekhoi" brand="twitter" />
              <BrandIcon link="https://github.com/zekhoi" brand="github" />
            </div>
            <div className="text-center sm:w-2/3">
              <a className="flex flex-row items-center justify-center mb-2 font-mono text-sm font-medium">
                © {new Date().getFullYear()} Designed & Coded with{" "}
                <span className="flex p-1">
                  <ion-icon name="heart" />
                </span>{" "}
                by Khoironi Kurnia Syah
              </a>
            </div>
          </div>
        </div>

        <button
          className={`${
            over ? "visible translate-y-0" : "invisible translate-x-20"
          }  fixed rounded-lg bg-opacity-70 bg-dark text-white dark:bg-white dark:text-dark shadow-lg p-3 flex right-5 bottom-5 z-50 focus:outline-none transition-all ease-in-out duration-700 transform`}
          onClick={() => scroll.scrollToTop()}
        >
          <ion-icon name="chevron-up" />
        </button>
      </div>
    </div>
  );
}

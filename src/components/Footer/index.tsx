"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer id='footermain' className="relative w-full self-end bg-[url(/images/light-wood.jpg)] dark:bg-[url(/images/charred-timber.jpg)] z-10 dark:bg-gray-dark">
          <div className="py-12">
            <p className="text-center text-base text-body-color dark:text-white">
              Template by{" "}
              <a
                href="http://uideck.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                UIdeck
              </a>{" "}
              and{" "}
              <a
                href="https://nextjstemplates.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Next.js Templates
              </a>
            </p>
          </div>
      </footer>
    </>
  );
};

export default Footer;

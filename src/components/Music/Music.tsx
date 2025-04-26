'use client'

import SectionTitle from "../Common/SectionTitle";
import { useNavbar } from "@/context/NavbarContext";

const Contact = () => {
  const { navbarOpen } = useNavbar();

  const paragraph: React.ReactNode = (
    <>
      "I'm still making these sections, let me cook"
    </>
  );

  return (
    <>
      <section id="comingsoon" className="py-10 bg-[url(/images/light-wood.jpg)] dark:bg-[url(/images/charred-timber.jpg)]">
        <div className={`bg-transparent hover:bg-opacity-35 hover:bg-white hover:dark:bg-white/10 p-10 rounded-2xl transition-all duration-700 ${(navbarOpen) ? "mx-10 md:mx-16" : "mx-10 md:mx-28"}`}>
          <SectionTitle
            title="Music"
            paragraph={paragraph}
            center
            mb="1vh"
          />

          <div className="flex h-[60vh] items-center justify-center">
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

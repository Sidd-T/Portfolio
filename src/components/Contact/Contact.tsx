'use client'

import SectionTitle from "../Common/SectionTitle";
import { useNavbar } from "@/context/NavbarContext";
import ContactInfo from "./ContactForm";


const Contact = () => {
  const { navbarOpen } = useNavbar();

  const paragraph: React.ReactNode = (
    <>
      "I haven't taken an IQ test yet, but I think I'm somewhere between the smartest and dumbest person on Earth."
    </>
  );

  return (
    <>
      <section id="contact" className="pt-10 pb-20 bg-[url(/images/light-wood.jpg)] dark:bg-[url(/images/charred-timber.jpg)]">
        <div className={`bg-transparent hover:bg-opacity-35 hover:bg-white hover:dark:bg-white/10 p-10 rounded-2xl transition-all duration-700 ${(navbarOpen) ? "mx-10 md:mx-16" : "mx-10 md:mx-28"}`}>
          <SectionTitle
            title="Contact"
            paragraph={paragraph}
            center
            mb="1vh"
          />

          <div className="flex h-[60vh] items-center justify-center">
            <ContactInfo/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

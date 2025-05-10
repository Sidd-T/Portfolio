import { Metadata } from "next";
import About from "@/components/About/About";

export const metadata: Metadata = {
  title: "DIY Analog Synth",
  description: "a description and walkthrough of a DIY analog synth build",
  // other metadata
};

export default function Synth() {
  return (
    <>
      <div id="content">
        <About />
      </div>
    </>
  );
}

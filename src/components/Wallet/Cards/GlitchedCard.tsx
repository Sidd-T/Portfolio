import React from "react";
import { Orbitron } from "next/font/google";
import "../../../styles/textures.css"
import "../../../styles/effects.css"

const orbitron = Orbitron({ subsets: ['latin'] });

const GlitchedCard = ({ cardOpen }: { cardOpen: boolean }) => {
  return (
    <div className="glitch static-noise text-white rounded-2xl w-full h-full flex justify-center items-center">
      { cardOpen &&
        <div className="glitch__layers">
          <div className="glitch__layer static-noise"></div>
          <div className="glitch__layer static-noise"></div>
          <div className="glitch__layer static-noise"></div>
        </div>
      }
      <div className={`${!cardOpen ? "hidden" : ""} ${orbitron.className} text-4xl bg-white hero glitch1 layers`}  data-text="510">510</div>
    </div>
  );
};

export default GlitchedCard;

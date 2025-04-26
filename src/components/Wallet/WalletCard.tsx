import React from "react";
import "../../styles/wallet.css";
import Card1 from "./Cards/Card1";
import Card2 from "./Cards/Card2";
import Card3 from "./Cards/Card3";
import Card4 from "./Cards/Card4";
import GlitchedCard from "./Cards/GlitchedCard";
import "../../styles/effects.css"

const WalletCard = ({ index, cardOpen, leftSide }: { index: number, cardOpen:boolean, leftSide:boolean | null }) => {
  
  // Function to return the appropriate card design based on the index
  const renderCardDesign = (index: number) => {
    let side:number;
    let signedIndex:number = index;
    
    if (leftSide !== null) {
      side = (leftSide) ? -1 : 1;
      signedIndex = (index+1)*side;
    }

    switch (signedIndex) {
      case -1:
        return (
          <Card1 cardOpen={cardOpen}/>
        );
      case 1:
        return (
          <Card3 cardOpen={cardOpen}/>
        );
      case -2:
        return (
          <Card2 cardOpen={cardOpen}/>
        );
      case 3:
        return (
          <GlitchedCard cardOpen={cardOpen}/>
        );
      case 4:
        return (
          <Card4 cardOpen={cardOpen}/>
        );
      default:
        return (
          <div className="bg-gray-500 text-white p-6 rounded-xl w-full h-full flex flex-col justify-between">
            <div className="font-semibold text-lg">Default Card</div>
            <div className="text-sm">12/30</div>
          </div>
        );
    }
  };

  return (
    <div className={`w-[96%] aspect-[1.8/1] mx-auto shine ${cardOpen ? 'hover:scale-105' : 'hover:translate-y-[-5vh]'} rounded-2xl transition-transform duration-300 flex`}>
      {renderCardDesign(index)}
    </div>
  );
};

export default WalletCard;

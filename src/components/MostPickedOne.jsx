import React from "react";
import Fins from "../assets/fins.png";

const MostPickedOne = () => {
    return (
    <>
    <div className="relative w-max h-max">
        <img src={Fins} alt=""  className="w-56"/>
        <div className="absolute top-0 right-0 bg-[#FF498B] text-white px-6 py-1 rounded-tr-lg rounded-bl-lg">
            <h3>50$ per night</h3>
        </div>
        <div className="text-[#152C5B] absolute bottom-3 left-3">
            <h3 className="font-semibold">Finns Beach Club</h3>            
            <p className="text-xs">Denpasar, Bali</p>
        </div>
    </div>
    </>
    );
};

export default MostPickedOne;
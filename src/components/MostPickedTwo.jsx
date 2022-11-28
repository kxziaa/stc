import React from "react";

const MostPickedTwo = ({img, price, name,address}) => {
    return (
    <>
    <div className="relative w-max h-max">
        <img src={img} alt=""  className="w-56"/>
        <div className="absolute top-0 right-0 bg-[#FF498B] text-white px-6 py-1 rounded-tr-lg rounded-bl-lg">
            <h3>${price} per night</h3>
        </div>
        <div className="text-[#152C5B] absolute bottom-3 left-3">
            <h3 className="font-semibold">{name}</h3>            
            <p className="text-xs">{address}</p>
        </div>
    </div>
    </>
    );
};

export default MostPickedTwo;
import React from "react";
import starBlack from "../../../img/star-black.png";
import starWhite from "../../../img/star-white.png";

type StarPropsType = {
    selected: boolean
}

export const Star: React.FC<StarPropsType> = ({selected}) => {
    return (
        <>
            <img className="star"
                 src={selected ? starBlack : starWhite}
                 alt="star"
            />
        </>
    );
}
import React from "react";
import starBlack from "../../../img/star-black.png";
import starWhite from "../../../img/star-white.png";
import {RatingValueType} from "../../../App";

type StarPropsType = {
    selected: boolean
    callBack: (valueStar: RatingValueType) => void
    valueStar: RatingValueType
}

export const ControlledStar: React.FC<StarPropsType> = ({selected, ...props}) => {
    const onClickHandler = () => {
        props.callBack(props.valueStar)
    }
    return (
        <>
            <img className="star"
                 src={selected ? starBlack : starWhite}
                 onClick={onClickHandler}
                 alt="star"
            />
        </>
    );
}
import React, {useState} from "react";
import starBlack from "../../../img/star-black.png";
import starWhite from "../../../img/star-white.png";
import {UncontrolledRating} from "../UncontrolledRating";
export type ValueStarType = 0 | 1 | 2 | 3 | 4 | 5
type StarPropsType = {
    selected: boolean
    valueStar: ValueStarType
    changeRating: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
}

export const UncontrolledStar: React.FC<StarPropsType> = (props) => {
    const onClickHandler = () => {
        props.changeRating(props.valueStar)
    }
    return (
        <>
            <img className="star"
                 onClick={onClickHandler}
                 src={props.selected ? starBlack : starWhite}
                 alt="star"
            />
        </>
    );
}
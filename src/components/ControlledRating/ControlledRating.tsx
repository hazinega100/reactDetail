import React from "react";
import {ControlledStar} from "./ControlledStar/ControlledStar";
import {RatingValueType} from "../../App";

export type RatingPropsType = {
    ratingValue: RatingValueType
    callBack: (valueStar: RatingValueType) => void
}

export const ControlledRating: React.FC<RatingPropsType> = ({ratingValue, callBack}) => {
    const changeStar = (valueStar: RatingValueType) => {
        callBack(valueStar)
    }
    return (
        <div>
            <ControlledStar selected={ratingValue > 0} callBack={changeStar} valueStar={1}/>
            <ControlledStar selected={ratingValue > 1} callBack={changeStar} valueStar={2}/>
            <ControlledStar selected={ratingValue > 2} callBack={changeStar} valueStar={3}/>
            <ControlledStar selected={ratingValue > 3} callBack={changeStar} valueStar={4}/>
            <ControlledStar selected={ratingValue > 4} callBack={changeStar} valueStar={5}/>
        </div>
    );
}
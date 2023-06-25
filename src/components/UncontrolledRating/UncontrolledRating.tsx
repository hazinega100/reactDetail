import React, {useState} from "react";
import {UncontrolledStar, ValueStarType} from "./UncontrolledStar/UncontrolledStar";

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}

export const UncontrolledRating: React.FC<RatingPropsType> = (props) => {
    const [value, setValue] = useState(0)
    const changeRating = (valueStar: ValueStarType) => {
        setValue(valueStar)
    }
    return (
        <div>
            <UncontrolledStar selected={value > 0} changeRating={changeRating} valueStar={1}/>
            <UncontrolledStar selected={value > 1} changeRating={changeRating} valueStar={2}/>
            <UncontrolledStar selected={value > 2} changeRating={changeRating} valueStar={3}/>
            <UncontrolledStar selected={value > 3} changeRating={changeRating} valueStar={4}/>
            <UncontrolledStar selected={value > 4} changeRating={changeRating} valueStar={5}/>
        </div>
    );
}
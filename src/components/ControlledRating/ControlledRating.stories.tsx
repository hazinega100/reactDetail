import "../../App.css"
import {ControlledRating} from "./ControlledRating";
import {useState} from "react";
import {RatingValueType} from "../../App";

export default {
    title: 'MyComponents/ControlledRating',
    component: ControlledRating,
};

export const ControlledStars = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return <ControlledRating ratingValue={rating} callBack={setRating}/>
}

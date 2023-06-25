import type { Meta, StoryObj } from '@storybook/react';
import {Rating} from "./Rating";
import "../../App.css"

export default {
    title: 'MyComponents/Rating',
    component: Rating,
};

export const EmptyStars = () => <Rating value={0} />
export const FirstStars = () => <Rating value={1} />
export const TwoStars = () => <Rating value={2} />
export const ThreeStars = () => <Rating value={3} />
export const FourStars = () => <Rating value={4} />
export const FiveStars = () => <Rating value={5} />

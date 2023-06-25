import React, {useState} from "react";
import {Meta} from "@storybook/react";

const meta: Meta<typeof Example1> = {
    title: "hook/useState",
    argTypes: {
    }
}
export default meta

const generateData = () => {
    console.log("generateData")
    return 321654646;
}

export const Example1 = () => {
    console.log("Example1")
    const [counter, setCounter] = useState(generateData)
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <h1>{counter}</h1>
    </>
}
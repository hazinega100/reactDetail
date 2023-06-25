import React, {useEffect, useState} from "react";
import {Meta} from "@storybook/react";

const meta: Meta<typeof SimpleExample> = {
    title: "hook/useEffect",
    argTypes: {
    }
}
export default meta

export const SimpleExample = () => {
    console.log("SimpleExample")
    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)
    useEffect(() => {
        console.log("useEffect")
    }, [counter])
    return <>
        <button onClick={() => setFake(fake + 1)}>+</button>
        <h1>Hello, {counter} {fake}</h1>
    </>
}
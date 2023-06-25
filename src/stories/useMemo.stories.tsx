import React, {ChangeEvent, useState} from "react";
import {Meta} from "@storybook/react";
import {Factorial} from "../components/Factorial/Factorial";

const meta: Meta<typeof Example1> = {
    title: "hook/useMemo",
    argTypes: {

    }
}

export default meta

export const Example1 = () => {
    const [value, setValue] = useState(0)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.currentTarget.value))
    }
    return <>
        <input value={value} onChange={onChangeHandler}/>
        <Factorial n={value} />
    </>
}
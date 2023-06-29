import React from "react";
import {Meta} from "@storybook/react";
import {Clock} from "./Clock";
import {AnalogClock} from "./AnalogClock";

const meta: Meta<typeof Clock> = {
    title: "myComponents/Clock",
    argTypes: {
    }
}

export default meta

export const StyleClock = () => {
    return <>
        <Clock style="DIGITAL" />
        <Clock style="ANALOG" />
        <AnalogClock size={200} color={"grey"} />
    </>
}
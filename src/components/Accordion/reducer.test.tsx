import React from "react";
import {reducer, toggleCollapsedAC} from "./reducer";
import {StateType} from "./Accordion";

test("collapsed should be false", () => {
    const startState: StateType = {collapsed: false}

    const newState = reducer(startState, toggleCollapsedAC())

    expect(newState.collapsed).toBe(true)
})
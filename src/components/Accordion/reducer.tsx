import React from "react";
import {StateType} from "./Accordion";
type ToggleCollapsedType = ReturnType<typeof toggleCollapsedAC>

type ActionType = ToggleCollapsedType

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'TOGGLE_COLLAPSED':
            return {
                ...state,
                collapsed: !state.collapsed
            }
        default:
            return state
    }
}

export const toggleCollapsedAC = () => {
    return {
        type: 'TOGGLE_COLLAPSED'
    }
}
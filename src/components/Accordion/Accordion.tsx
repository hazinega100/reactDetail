import React from "react";
import {AccordionTitle} from "./AccordionTitle/AccordionTitle";
import {AccordionList} from "./AccordionList/AccordionList";

export type ItemsType = {
    title: string
    value: any
}
export type StateType = {
    collapsed: boolean
}
type AccordionPropsType = {
    /**
     * title is Accordion
     */
    title: string
    state: StateType
    changeCollapsed: () => void
    items?: ItemsType[]
    color?: string
    callBack: (value: any) => void
}

export const Accordion: React.FC<AccordionPropsType> = ({
                                                            title,
                                                            state,
                                                            changeCollapsed,
                                                            color,
                                                            ...restProps
                                                        }) => {
    return (
        <div>
            <AccordionTitle title={title} callBack={changeCollapsed} color={color}/>
            {state.collapsed && <AccordionList items={restProps.items} callBack={restProps.callBack}/>}
        </div>
    );
}

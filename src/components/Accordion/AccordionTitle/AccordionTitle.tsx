import React from "react";

type AccordionTitleType = {
    title: string
    callBack: () => void
    color?: string
}

export const AccordionTitle = ({title,callBack,color}: AccordionTitleType) => {

    const onClickHandler = () => {
        callBack()
    }
    return (
        <h3 style={{ color }} onClick={onClickHandler}>{title}</h3>
    );
}
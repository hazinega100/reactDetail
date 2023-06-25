import React from 'react';
import {ItemsType} from "../Accordion";

type AccordionListPropsType = {
    items?: ItemsType[]
    callBack: (value: any)=> void
}

export const AccordionList: React.FC<AccordionListPropsType> = ({items, ...restProps}) => {
    const onClickItem = (value: any) => {
        restProps.callBack(value)
    }
    return (
        <>
            <ul>
                {items?.map(el => <li onClick={()=>{onClickItem(el.value)}} key={el.value}><span>{el.value} </span>{el.title}</li>)}
            </ul>
        </>
    );
};
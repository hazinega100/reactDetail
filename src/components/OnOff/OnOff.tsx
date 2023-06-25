import React, {useState} from 'react';
import "./OnOff.css"

type OnOffPropsType = {
    valueOnOff: boolean
    callBack: () => void
}

export const OnOff = (props: OnOffPropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <div className="on-off-wrapper">
            <div className={props.valueOnOff ? "on" + " " + "green" : "on"} onClick={onClickHandler}>ON</div>
            <div className={props.valueOnOff ? "off" : "off" + " " + "red"} onClick={onClickHandler}>OFF</div>
            <div className={props.valueOnOff ? "lamp" + " " + "green" : "lamp" + " " + "red"}></div>
        </div>
    );
};
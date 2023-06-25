import React, {useState} from 'react';
import "./OnOff.css"

export const UncontrolledOnOff = () => {
    const [value, setValue] = useState(false)
    const onClickHandler = () => {
        setValue(!value)
    }
    return (
        <div className="on-off-wrapper">
            <div className={value ? "on" + " " + "green" : "on"} onClick={onClickHandler}>ON</div>
            <div className={value ? "off" : "off" + " " + "red"} onClick={onClickHandler}>OFF</div>
            <div className={value ? "lamp" + " " + "green" : "lamp" + " " + "red"}></div>
        </div>
    );
};
import {OnOff} from "./OnOff";
import {useState} from "react";

export default {
    title: 'MyComponents/OnOff',
    component: OnOff,
};

export const DefaultOn = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff valueOnOff={value} callBack={()=>setValue(!value)} />
}

export const DefaultOff = () => {
    const [value, setValue] = useState<boolean>(false)
    return <OnOff valueOnOff={value} callBack={()=>setValue(!value)} />
}

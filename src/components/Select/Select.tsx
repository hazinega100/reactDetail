import React, {ChangeEvent, useState} from "react";
import {ItemsType} from "../Accordion/Accordion";
import s from "./Select.module.css"

export type SelectPropsType = {
    value: string
    onChange: (value: string) => void
    items: ItemsType[]
}

export const Select = ({value, onChange, items}:SelectPropsType) => {
    const [active, setActive] = useState(false)
    const toggleActive = () => setActive(!active)
    const selectItem = items.find(i => i.value === value)
    const onClickOption = (value: string) => {
        onChange(value)
        toggleActive()
    }
    return (
        <div>
            <select name="City" id="1">
                <option value="1">Moscow</option>
                <option value="2">St.Petersburg</option>
                <option value="3">Bangkok</option>
                <option value="4">Laos</option>
            </select>
            <div className={s.select + ' ' + (active ? s.active : "")}>
                <h3 onClick={toggleActive}>{selectItem && selectItem.title}</h3>
                {/*{*/}
                {/*    active && <div className={s.items}>{items.map(i => <option key={i.value} value={i.value}>{i.title}</option>)}</div>*/}
                {/*}*/}
                <div className={s.items}>
                    {items.map(i => <div onClick={()=>{onClickOption(i.value)}} key={i.value} className={s.option}>{i.title}</div>)}
                </div>
            </div>
        </div>
    );
}

// export interface CityType {
//     value: string;
//     title: string;
// }
//
// interface SelectProps {
//     items: CityType[];
//     onSelect: (value: string) => void;
// }
//
// export const Select: React.FC<SelectProps> = ({ items, onSelect }) => {
//     const [selectedOption, setSelectedOption] = useState('');
//
//     const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
//         const value = event.target.value;
//         setSelectedOption(value);
//         onSelect(value);
//     };
//
//     return (
//         <select value={selectedOption} onChange={handleChange}>
//             <option value="">Select an option</option>
//             {items.map((option) => (
//                 <option key={option.value} value={option.value}>
//                     {option.title}
//                 </option>
//             ))}
//         </select>
//     );
// };

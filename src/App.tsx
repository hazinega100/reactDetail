import React, {useReducer, useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {ControlledRating} from "./components/ControlledRating/ControlledRating";
import {Input} from "./components/Input/Input";
import {Select} from "./components/Select/Select";
import {reducer, toggleCollapsedAC} from "./components/Accordion/reducer";
import {Factorial} from "./components/Factorial/Factorial";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    // const [accordionCollapsed, setAccordionCollapsed] = useState(true)
    const [accordionCollapsed, dispatch] = useReducer(reducer, {collapsed: true})
    const [valueOnOff, setValueOnOff] = useState(false)
    const [inputValue, setInputValue] = useState("5")

    const cites = [
        {title: "Moscow", value: '1'},
        {title: "St.Petersburg", value: '2'},
        {title: "Bangkok", value: '3'},
        {title: "Laos", value: '4'}
    ]

    const users = [
        {title: "Ega", value: 1},
        {title: "Gulbahor", value: 2},
        {title: "Nelly", value: 3},
        {title: "Veronika", value: 4}
    ]
    const changeCollapsed = () => {
        dispatch(toggleCollapsedAC())
    }
    const changeRating = (valueStar: RatingValueType) => {
        setRatingValue(valueStar)
    }
    const [value, setValue] = useState('2')
    const changeItem = (value: string) => {
        setValue(value)
    }
    const onChangeHandler = (value: string) => {
        setInputValue(value)
    }
    return (
        <div>
            This is App component
            <Rating value={4} />
            <Accordion title="Menu"
                       state={accordionCollapsed}
                       changeCollapsed={changeCollapsed}
                       items={users}
                       callBack={()=>{}}
            />
            <ControlledRating ratingValue={ratingValue} callBack={changeRating} />
            <OnOff valueOnOff={valueOnOff} callBack={ () => {setValueOnOff(!valueOnOff)} }/>
            <OnOff valueOnOff={valueOnOff} callBack={ () => {setValueOnOff(!valueOnOff)} }/>
            <UncontrolledRating />
            <Input value={inputValue} onChange={setInputValue}/>
            <Select value={value} onChange={changeItem} items={cites} />
            <Input value={inputValue} onChange={onChangeHandler} />
            <Factorial n={+inputValue} />
        </div>
    );
}

export default App;

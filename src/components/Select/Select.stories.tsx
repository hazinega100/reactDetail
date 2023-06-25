import {Meta, StoryObj} from "@storybook/react";
import {Select} from "./Select";
import {ItemsType} from "../Accordion/Accordion";
import {useState} from "react";

const meta: Meta<typeof Select> = {
    title: 'MyComponents/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
        // color: { control: 'color' },
        onChange: {action: 'want to change'}
    },
};

export default meta
type Story = StoryObj<typeof Select>

export const BaseExample = () => {
    const [value, setValue] = useState('2')
    const city: ItemsType[] = [
        {title: "Moscow", value: '1'},
        {title: "St.Petersburg", value: '2'},
        {title: "Bangkok", value: '3'},
        {title: "Laos", value: '4'}
    ]
    const onChange = (value: string) => {
        setValue(value)
    }
    return (
        <>
            <Select value={value} items={city} onChange={onChange} />
        </>
    );
}

// export const SelectCite = () => {
//     const city: CityType[] = [
//         {title: "Moscow", value: '1'},
//         {title: "St.Petersburg", value: '2'},
//         {title: "Bangkok", value: '3'},
//         {title: "Laos", value: '4'}
//     ]
//     const handleSelect = (value: string) => {
//         console.log('Selected value:', value);
//     };
//     return <Select onSelect={handleSelect} items={city} />
// }
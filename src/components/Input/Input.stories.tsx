import {Meta, StoryObj} from "@storybook/react";
import {Input} from "./Input";
import {useState} from "react";

const meta: Meta<typeof Input> = {
    title: 'MyComponents/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        // color: { control: 'color' },
        onChange: {action: 'want to change'}
    },
};

export default meta
type Story = StoryObj<typeof Input>

export const ControlledInput = () => {
    const [value, setValue] = useState("")
    const onChange = (e: string) => {
        setValue(e)
    }
    return <Input value={value} onChange={ onChange } />
}
// export const ModeChanging: Story = {
//     args: {
//         collapsed: true,
//         title: "Users",
//         items: users,
//     }
// }

import {Accordion} from "./Accordion";
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof Accordion> = {
    title: 'MyComponents/Accordion',
    component: Accordion,
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'color' },
        changeCollapsed: {action: "need changed"}
    },
};
export default meta
type Story = StoryObj<typeof Accordion>
const users = [
    {title: "Ega", value: 1},
    {title: "Gulbahor", value: 2},
    {title: "Nelly", value: 3},
    {title: "Veronika", value: 4}
]

export const AccordionCollapsed: Story = {
    args: {
        title: "Menu",
        items: [
            {title: "Суп", value: 1},
            {title: "Пюре", value: 2},
            {title: "Курица", value: 3},
            {title: "Кампот", value: 4}
        ]
    }
}
export const AccordionUncollapsed: Story = {
    args: {title: "Stories"}
}
export const ModeChanging: Story = {
    args: {
        state: {collapsed: true},
        title: "Users",
        items: users,
    }
}

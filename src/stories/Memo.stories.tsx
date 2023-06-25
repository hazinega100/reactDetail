import React, {useState} from "react";
import {Meta} from "@storybook/react";
import {string} from "prop-types";

const meta: Meta<typeof Users> = {
    title: "hoc/React Memo",
    argTypes: {
        onClick: {action: "Clicked on USER"}
    }
}

export default meta

const CountMessages = (props: { counter: number }) => {
    return <div>Message: {props.counter}</div>
}

const UsersMemo = (props: { users: string[], onClick?: ()=> void }) => {
    console.log("USERS")
    return <>
        {
            props.users.map((u, i) => <div key={i} onClick={props.onClick}>Name: {u}</div>)
        }
    </>
}

const Users = React.memo(UsersMemo)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState<string[]>(["Ega", "Gulp", "Nelly", "Veronika"])
    const addUser = () => {
        users.push("Svetlana " + new Date().getTime())
        setUsers([...users])
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>Add User</button>
        <CountMessages counter={counter}/>
        <Users users={users} />
    </>
}
import React, {useEffect, useState} from "react";
import {Meta} from "@storybook/react";

const meta: Meta<typeof SimpleExample> = {
    title: "hook/useEffect",
    argTypes: {
    }
}

export default meta

export const SimpleExample = () => {
    console.log("SimpleExample")
    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)
    useEffect(() => {
        console.log("useEffect NOT deps")
    //    Вызывается каждый раз при перерисовке компоненты
    })
    useEffect(() => {
        console.log("useEffect with []")
        //    Вызывается один раз при старте компоненты
    }, [])
    useEffect(() => {
        console.log("useEffect with deps counter")
        //    Вызывается каждый раз при перерисовке counter
    }, [counter])
    return <>
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
        <button onClick={() => setFake(fake + 1)}>fake +</button>
        <h1>Hello, {counter} {fake}</h1>
    </>
}

export const SetTimoutExample = () => {
    console.log("SetTimoutExample")
    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)
    useEffect(() => {
        console.log("useEffect")
        setTimeout(()=>{
            console.log("setTimeout")
            document.title = counter.toString()
        }, 1500)
    //    Если нужно сделать запрос на сервер, обороачиваем его в useEffect
    }, [counter])
    return <>
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
        <button onClick={() => setFake(fake + 1)}>fake +</button>

        <h1>Hello, {counter} {fake}</h1>
    </>
}

export const SetIntervalExample = () => {
    console.log("SetIntervalExample")
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log("useEffect")
        setInterval(()=>{
            setCounter(state => state + 1)
        }, 1000)

    }, [])
    return <>
        <h1>Counter: {counter}</h1>
    </>
}

export const ClocksExample = () => {
    const addZero = (num: number) => num < 10 ? `0${num}` : num
    console.log("ClocksExample")
    let hours = addZero(new Date().getHours())
    let minutes = addZero(new Date().getMinutes())
    let seconds = addZero(new Date().getSeconds())
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log("useEffect")
        setInterval(()=>{
            setCounter(state => state + 1)
        }, 1000)

    }, [])
    return <>
        <h1>Clock {hours}:{minutes}:{seconds}</h1>
    </>
}
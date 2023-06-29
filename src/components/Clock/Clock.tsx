import React, {useEffect, useState} from "react";
import s from "./Clock.module.css"

type PropsClockType = {
    style: "DIGITAL" | "ANALOG"
}

export const Clock = ({style}: PropsClockType) => {
    const addZero = (num: number) => num < 10 ? `0${num}` : num

    let hours = addZero(new Date().getHours())
    let minutes = addZero(new Date().getMinutes())
    let seconds = addZero(new Date().getSeconds())
    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const interval = setInterval(()=>{
            setDate(new Date())
        }, 1000)

        return clearInterval(interval)
    }, [])
    return <div className={style === "DIGITAL" ? s.digital : s.analog}>
        <span>{hours}</span>:
        <span>{minutes}</span>:
        <span>{seconds}</span>
    </div>
}
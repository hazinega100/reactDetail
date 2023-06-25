import React from 'react';

type FactorialType = {
    n: number
}

export const Factorial = ({n}: FactorialType) => {
    let res = 1;

    for (let i = 1; i <= n; i++) {

        res = res * i;
        console.log(res)
    }
    return (
        <div>
            <h1>--{res}--</h1>
        </div>
    );
};
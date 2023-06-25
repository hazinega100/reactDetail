import React, {ChangeEvent} from 'react';

type InputPropsType = {
    value: string
    onChange: (value: string) => void
}

export const Input: React.FC<InputPropsType> = ({value,onChange}) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.currentTarget.value)
    }
    return (
        <div>
            <input value={value} onChange={onChangeHandler}/>
            Value - {value}
        </div>
    );
};
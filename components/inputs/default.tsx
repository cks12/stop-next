import React, { useMemo, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { NextPage } from 'next';

interface DefaultInputTyping extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    label: string,
    id: string,
    children?: any,
    update?:any,
}


const DefaultInput:NextPage<DefaultInputTyping> = ({label, id, children,update , value, ...rest}) => {
    return useMemo(() => (<>
    <div className='DefaultInput relative'>
        <label htmlFor={id}>{label}</label>
        <div className="relative w-full">
            <input className='input' id={id} value={value} {...rest} type="text" />
            {children}
        </div>
    </div>
    </>),[value, update])
}

export default DefaultInput;